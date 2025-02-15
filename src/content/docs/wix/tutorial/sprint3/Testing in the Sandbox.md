---
title: Testing in the Sandbox
sidebar:
  order: 4
---

[The Windows Sandbox documentation](https://learn.microsoft.com/en-us/windows/security/application-security/application-isolation/windows-sandbox/windows-sandbox-overview) describes how you can copy files from File Explorer on the host machine and paste them into the Sandbox machine. That's pretty manual and we can definitely do better but it's an excellent place to start.

So we need to grab the .msi package that we built:

```
Build started...
1>------ Build started: Project: App, Configuration: Debug Any CPU ------
1>  App -> X:\sprint3\App\bin\Debug\App.exe
2>------ Build started: Project: WixTutorialPackage, Configuration: Debug x86 ------
2>WixTutorialPackage -> X:\sprint3\WixTutorialPackage\bin\x86\Debug\en-US\WixTutorialPackage.msi
========== Build: 2 succeeded, 0 failed, 0 up-to-date, 0 skipped ==========
========== Build started at 13:37 and took 03.589 seconds ==========
```

In File Explorer, open the `X:\sprint3\WixTutorialPackage\bin\x86\Debug\en-US\` directory -- more accurately, the directory on your machine where you built the package.

You'll see three files:

  - cab1.cab
  - WixTutorialPackage.msi
  - WixTutorialPackage.wixpdb

The first two make up the .msi package: The .msi file itself and the .cab cabinet file containing (for now) just the placeholder app. It's possible to embed the cabinet inside the .msi file itself but the default that WiX gives us keeps it external to the .msi file. External cabinets make a lot of sense, especially as packages grow to dozens/hundreds of megabytes...alas, our cabinet is just 4...kilobytes. OK, let's make this copying and pasting a bit easier and sneak in the change to embed the cabinet.

In WiX, the `MediaTemplate` element controls how cabinets are generated and embedded. We don't currently have _any_ `MediaTemplate` element in Package.wxs so what's going on? WiX, ever helpful toolset that it is, seeing that we didn't author a `MediaTemplate` element, added one for us with all default values. If we add a `MediaTemplate` element, WiX uses that one, so we can easily override the default values. [We want to override the default of the `EmbedCab` attribute](/wix/schema/wxs/mediatemplate/) from `no` to `yes` so WiX will embed the cabinet. Add the `MediaTemplate` element as child of the `Package` element, like this:

```xml
<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs">
  <Package
    Name="WixTutorialPackage"
    Manufacturer="Edgerock Concepts"
    Version="1.0.0.0"
    UpgradeCode="64deef2a-cf99-4a0c-be41-5faa802a9502">

    <MajorUpgrade DowngradeErrorMessage="!(loc.DowngradeError)" />

    <MediaTemplate EmbedCab="yes" />

    <Feature Id="Main">
      <ComponentGroupRef Id="AppComponents" />
    </Feature>
  </Package>
</Wix>
```

Rebuild the solution and the list of files you see in Explorer should be reduced by 33%:

  - WixTutorialPackage.msi
  - WixTutorialPackage.wixpdb

> WixTutorialPackage.wixpdb is, like the .pdb files you might have seen in other projects, a debugging file. It contains a lot of additional data that is useful in some advanced scenarios but isn't part of the actual .msi package output. For now, you can safely ignore it.

Select WixTutorialPackage.msi and press `Ctrl+C` (or choose Copy from the context menu). Go to your running Windows Sandbox and press `Ctrl+V` (or Paste) on the desktop.

We can now start executing our test plan:

> 1. Ensure the installer installs the placeholder app.
>     1. Double-click the .msi file.
>     1. Wait for the install to finish.
>     1. Make sure `C:\Program Files (x86)\Edgerock Concepts WixTutorialPackage\App.exe` exists and is the placeholder app we just built.
>     1. Open `Installed apps` (aka ARP) and verify `WixTutorialPackage` is listed.

Double-clicking the .msi results in a window with a progress bar appearing...very briefly. That makes sense -- there's almost nothing to install so far. In File Explorer, we see that, yes, indeed, there is a `C:\Program Files (x86)\Edgerock Concepts WixTutorialPackage` directory and in it is `App.exe`. Double-click that and you'll see a very blank window that is definitely our placeholder app.

![A screen shot of Windows Sandbox showing a successfully installed placeholder app](/images/docs/sandbox_success.png)

Search for `apps` and you'll get the `Installed apps` window, with `WixTutorialPackage` taking its place of honor as an installed app.

So far, so good. The back half of the test plan is to undo what we did:

> 1. Ensure the installer uninstalls the placeholder app and cleans up.
>     1. Open `Installed apps`, select `WixTutorialPackage`, click the `...` button, and choose `Uninstall`.
>     1. Confirm the uninstall and wait for the uninstall to finish.
>     1. Make sure `C:\Program Files (x86)\Edgerock Concepts WixTutorialPackage\App.exe` has been deleted.
>     1. Make sure the `C:\Program Files (x86)\Edgerock Concepts WixTutorialPackage` directory has been deleted.
>     1. Re-open `Installed apps` and verify `WixTutorialPackage` is _not_ listed.

We happen to have `Installed apps` already open, so let's kick off the uninstall, which is almost guaranteed to succeed.

Well, not quite.

![A screen shot of Windows Sandbox showing the uninstall prompting to close the still-running placeholder app](/images/docs/sandbox_closeapps.png)

We've discovered a gap in the test plan. We left the placeholder app running and didn't account for Windows Installer prompting to close the app that it's about to uninstall.

Let's just click OK and hope that the defaults do the right thing. The uninstall finishes and the `WixTutorialPackage` entry in the apps list disappears, so that's good. A quick look in File Explorer shows that the `C:\Program Files (x86)\Edgerock Concepts WixTutorialPackage` directory has been deleted. Uninstall did its job.
