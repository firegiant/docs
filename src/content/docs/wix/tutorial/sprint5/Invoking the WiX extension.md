---
title: Invoking the WiX extension
sidebar:
  order: 4
---

[Our witty and charming friends at FireGiant](https://www.firegiant.com/services/) have told us that we need to use the `QueryNativeMachine` element available in the `WixToolset.Util.wixext` extension. The [very brief documentation](/wix/tools/wixext/wininfo/#querynativemachine-properties) tells us that `QueryNativeMachine` sets a property named `WIX_NATIVE_MACHINE` to:

> ...an [Image File Machine](https://learn.microsoft.com/en-us/windows/win32/sysinfo/image-file-machine-constants) value representing the native architecture of the machine. This property is set only on Windows 10 version 1511 (TH2) and later.

The values are numbers that reflect the underlying processor.

> Note that clearly Microsoft folks had increasing amounts of fun as time passed: The value for the 32-bit x86 `IMAGE_FILE_MACHINE_I386` processor is not, as one might expect, 386, but the seemingly random (but probably with an underlying rational reason) 332. But the value for the 64-bit x64 `IMAGE_FILE_MACHINE_AMD64` processor is 34,404, which in hexadecimal is 0x8664, cutely close to the original name of AMD's 64-bit architecture, [x86-64](https://en.wikipedia.org/wiki/X86-64). Likewise, Arm64 processors are reported as IMAGE_FILE_MACHINE_ARM64 with a value of 43,620, which, again in hex, is 0xAA64, close to [AArch64](https://en.wikipedia.org/wiki/AArch64). Unfortunately for us, Windows Installer doesn't know how to count in hex, so we're limited to using the unfunny decimal values.

So how do we invoke the code to get the magic processor number? Combine the namespace prefix (`util`) with the `QueryNativeMachine` element from the `WixToolset.Util.wixext` extension and you get the answer:

```xml
<util:QueryNativeMachine />
```

Package.wxs now looks like this:

```xml
<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs"
     xmlns:util="http://wixtoolset.org/schemas/v4/wxs/util">
  <Package Name="WixTutorialPackage" Manufacturer="Edgerock Concepts" Version="1.0.0.0" UpgradeCode="64deef2a-cf99-4a0c-be41-5faa802a9502">
    <MajorUpgrade DowngradeErrorMessage="!(loc.DowngradeError)" />

    <MediaTemplate EmbedCab="yes" />

    <util:QueryNativeMachine />

    <Feature Id="Main">
      <ComponentGroupRef Id="AppComponents" />
    </Feature>
  </Package>
</Wix>
```

When building the package, the `WixToolset.Util.wixext` extension parses the `<util:QueryNativeMachine />` authoring and tells WiX to include some code contained in the `WixToolset.Util.wixext` extension. Such code is known as a [_custom action_](https://learn.microsoft.com/en-us/windows/win32/msi/custom-actions), contrasted with the [_standard actions_](https://learn.microsoft.com/en-us/windows/win32/msi/standard-actions) that are built into Windows Installer to do important things like installing files, writing to the registry, and [installing the catalogs used by Windows Me](https://learn.microsoft.com/en-us/windows/win32/msi/installsfpcatalogfile-action). (Note that not all standard actions are equally important.)

Custom actions are generally embedded in the MSI package and have to be scheduled to execute at the right time. Naturally, WiX extensions do all this exactly as needed, in addition to carrying the code itself.

> To differentiate between custom actions that you write and custom actions that come with WiX, the latter are sometimes called (rather interestingly) the _WiX standard custom actions_. You may dissect that phrase at your leisure.

The custom action code sets the `WIX_NATIVE_MACHINE` property to the appropriate magic number.

Now we just have to somehow use that magic number...
