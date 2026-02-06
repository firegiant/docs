---
title: Release notes
sidebar:
  order: 4
---

## WiX v7

- WiX v7.0.0-rc.1 was published 6-Feb-2026.

WiX v7 continues our three-year-old tradition of shipping releases annually and adding features and fixing bugs while maintaining high compatibility with previous releases.

### Highlights

- Add the ability to use dual-purpose MSI packages in bundles, which lets the user decide whether to install such packages per-user or per-machine. (Issue [8958](https://github.com/wixtoolset/issues/issues/8958))
- Upgrade to OSMF EULA v1.1 that avoids requiring a fee until you make at least US$10,000 a year from your projects that use WiX. (Issue [9230](https://github.com/wixtoolset/issues/issues/9230))
- Require an explicit gesture to accept the OSMF EULA to avoid accidentally violating the EULA terms. (Issue [9196](https://github.com/wixtoolset/issues/issues/9196))
- _BREAKING CHANGE_ The behavior of relative paths in the `Files` element appeared inconsistent but it was technically correct (the best kind of correct). Still, it was confusing, so between tarot cards and a well-used D20 die, we picked one behavior: Relative paths in `Files` are relative to the source path. (Issue [9097](https://github.com/wixtoolset/issues/issues/9097))
- Use integrity level to detect elevated privileges instead of elevation tokens. (Issues [8178](https://github.com/wixtoolset/issues/issues/8178) and [9205](https://github.com/wixtoolset/issues/issues/9205))
- Add the `Payloads` element to harvest bundle payloads like `Files` does for package payload. (Issue [9049](https://github.com/wixtoolset/issues/issues/9049))
- Support longer-than-MAX_PATH paths for payloads in packages and bundles. (Issues [3065](https://github.com/wixtoolset/issues/issues/3065) and [9115](https://github.com/wixtoolset/issues/issues/9115))
- Heat was deprecated in WiX v6 after the introduction of `Files` and `Payloads` and has now been removed from WiX v7. (Issue [9039](https://github.com/wixtoolset/issues/issues/9039))
- Add support for [RedirectionGuard](https://www.microsoft.com/en-us/msrc/blog/2025/06/redirectionguard-mitigating-unsafe-junction-traversal-in-windows) to Burn as an additional security mitigation. (Issue [9228](https://github.com/wixtoolset/issues/issues/9228))
- Correctly uninstall a patch bundle when uninstalling the base bundle. (Issue [9104](https://github.com/wixtoolset/issues/issues/9104))
- Ensure that a patched package can be uninstalled. (Issue [6350](https://github.com/wixtoolset/issues/issues/6350))
- Restore the ability to specify an icon that appears in a WixStdBA bootstrapper application window. (Issue [8104](https://github.com/wixtoolset/issues/issues/8104))
- Make WixUI_Advanced handle 64-bit installation directories. (Issue [2165](https://github.com/wixtoolset/issues/issues/2165))
- Add `ProductSearch/@Result='exists'` to Burn searches. (Issue [9079](https://github.com/wixtoolset/issues/issues/9079))

## WiX v6

WiX v6 is the second annual release since WiX v4. WiX v6 continues in the tradition of being intentionally highly compatible with its predecessor WiX v5&mdash;and by the transitive property of backward compatibility, with WiX v4 too. WiX v6 contains a number of fixes and enhancements of existing features, including those newly introduced in WiX v5. Notable examples include:

| Issue | Description |
| ----- | ----------- |
| [1520](https://github.com/wixtoolset/issues/issues/1520) | Address a **16**-year-old feature request to support more stores for SSL certificates. |
| [2691](https://github.com/wixtoolset/issues/issues/2691) | Address a **14**-year-old WixUI prettiness bug. |
| [7622](https://github.com/wixtoolset/issues/issues/7622) | Adds support "normal," non-SNI SSL certificates in http.sys. |
| [8101](https://github.com/wixtoolset/issues/issues/8101) | Add PerUserProgramFilesFolder standard directory for per-user packages and use it as the root of the default INSTALLFOLDER. |
| [8135](https://github.com/wixtoolset/issues/issues/8135) | Fixes a bug in WixInternalUIBootstrapperApplication so now the dialogs appear as buttons on the taskbar. |
| [8577](https://github.com/wixtoolset/issues/issues/8577) | Create local and domain user groups. In WiX v5 and before, you could _reference_ existing groups | 
| [8584](https://github.com/wixtoolset/issues/issues/8584) | Replace upgrade code GUIDs with human-readable strings. The `Package` and `Bundle` elements now have an `Id` attribute that turns a human-readable string into the equivalent of an upgrade code GUID. You need to provide a value that identifies the "product family," just like it were an old-school upgrade code GUID. But `WixToolset.CommandLineTools.Package` is certainly easier to think about than `{2e85dc76-769f-46d2-82a7-46cb3a0c9d50}`, I think you'd agree. |
| [8663](https://github.com/wixtoolset/issues/issues/8663) | Allow component GUIDs for registry keys to be compatible with those created in WiX v3. Something we discovered while helping a FireGiant customer is that there's a scenario where a generated component GUID for a registry value changed in WiX v4. That same thing happened in WiX v3 (for different reasons), which is why the `-bcgg` (backward-compatible GUID generation) command-line switch was born. Well, now it's back, if you need to maintain the generated v3 GUID. | 
| [8685](https://github.com/wixtoolset/issues/issues/8685) | Uses the new MSTest executable test runner and MSBuild traversal projects to build more WiX code in parallel. Faster builds make happy devs, especially when their name is Bob. |
| [8718](https://github.com/wixtoolset/issues/issues/8718), [8580](https://github.com/wixtoolset/issues/issues/8580) | Reduce the use of custom actions in WixUI to minimize the [amount of extra work necessary to work around platform-specific custom actions](/wix/whatsnew/faqs/#converting-custom-wixui-dialog-sets). The custom action to print the EULA&mdash;for those who not only _read_ the EULA but print a copy for their records&mdash;was entirely replaced by built-in MSI functionality. Similarly, the "extra" checking on paths done by custom action is now done with built-in functionality, though you can opt in to the old functionality using `ExtendedPathValidation="yes"` on the `WixUI` element. | 
| [8882](https://github.com/wixtoolset/issues/issues/8882), [8939](https://github.com/wixtoolset/issues/issues/8939) | Use a different approach to construct the default feature and add components to it. |
| [8913](https://github.com/wixtoolset/issues/issues/8913) | Using Heat now shows a deprecation warning. It's still present and works with WiX v6, mostly by nature of the WiX v6 language not changing. But we plan to remove Heat in WiX v7, so this warning serves as eviction notice. | https://github.com/wixtoolset/issues/issues/ |
| [8914](https://github.com/wixtoolset/issues/issues/8914) | Lock files extracted from Burn bundles as additional mitigation against attacks. No protection is perfect but locking files as read-only helps prevent malware from overwriting temporary files used during bundle installation. | 
| [8974](https://github.com/wixtoolset/issues/issues/8974) | Introduce the Open Source Maintenance Fee. | 


### Get started 

Get started with an SDK-style .wixproj project:

```xml
<Project Sdk="WixToolset.Sdk/6.0.2">
</Project>
```

and simple package code in a .wxs file:

```xml
<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs">
    <Package Id="Acme.HelloWorld" Name="HelloWorld" Version="6.0.0" Manufacturer="Acme">
        <Files Include="*" />
    </Package>
</Wix>
```

and run 

```sh
dotnet build
```

to build it.


### WiX v6 releases

- WiX v6.0.2 was published 28-Aug-2025 on nuget.org for the [MSBuild SDK](https://www.nuget.org/packages/WixToolset.Sdk) and [.NET tool](https://www.nuget.org/packages/wix) and as a [GitHub release](https://github.com/wixtoolset/wix/releases/tag/v6.0.2) to fix a lone bug:
  * [Scale bundle splash screens better](https://github.com/wixtoolset/issues/issues/9148), opened by [@barnson](https://github.com/barnson), [also fixed](https://github.com/wixtoolset/wix/pull/656) by [@barnson](https://github.com/barnson)
- WiX v6.0.1 was published 5-Jun-2025 on nuget.org for the [MSBuild SDK](https://www.nuget.org/packages/WixToolset.Sdk) and [.NET tool](https://www.nuget.org/packages/wix) and as a [GitHub release](https://github.com/wixtoolset/wix/releases/tag/v6.0.1) to fix the following bugs:
  * [Bundle splash screen showing on removal of previous base version during upgrade](https://github.com/wixtoolset/issues/issues/7969), from [@yuvnith](https://github.com/yuvnith), [fixed](https://github.com/wixtoolset/wix/pull/635) by [@barnson](https://github.com/barnson)
  * [Upgrading to Wix Toolset v6 Causes Build Exception](https://github.com/wixtoolset/issues/issues/9028), from [@oollie34](https://github.com/oollie34), [fixed](https://github.com/wixtoolset/wix/pull/634) by [@barnson](https://github.com/barnson)
  * [WixBundleSourceProcessPath and WixBundleSourceProcessFolder should be resurrected](https://github.com/wixtoolset/issues/issues/9029), from [@barnson](https://github.com/barnson), [fixed](https://github.com/wixtoolset/wix/pull/633) by [@barnson](https://github.com/barnson)
  * [Extension decompilers support only their extension's own tables](https://github.com/wixtoolset/issues/issues/9070), from [@barnson](https://github.com/barnson), [fixed](https://github.com/wixtoolset/wix/pull/640) by [@barnson](https://github.com/barnson)
  * [Update registration disappears during upgrade.](https://github.com/wixtoolset/issues/issues/9075), from [@barnson](https://github.com/barnson), [fixed](https://github.com/wixtoolset/wix/pull/622) by [@barnson](https://github.com/barnson)
- WiX v6.0.0 was published 7-Apr-2025.
- WiX v6.0.0-rc.2 was published 05-Mar-2025.
- WiX v6.0.0-rc.1 was published 12-Feb-2025.


## WiX v5

WiX v5 marks the first of our annual releases. We intentionally made WiX v5 highly compatible with WiX v4. Most users can simply switch to WiX v5 with no code changes. (There are some exceptions, naturally.) Here's a list of some notable changes, mostly new features to make your package experience with WiX more pleasant:

| Feature | Description |
| ------- | ----------- |
| Built-in file harvesting | Include files in your projects using wildcards. No Heat required. |
| Naked files | Simplify component authoring that contains only files. |
| Default major upgrades | Get a typical major upgrade with no XML. |
| Default installation folder | Get a typical installation directory with no XML. |
| Default feature | Get a typical feature with no XML. |
| Modern Windows Firewall support | WixToolset.Firewall.wixext supports more Firewall features. Might require minor authoring changes. |
| Virtual and overridable symbols | Overridability can be applied to many things now. Might require minor authoring changes. |
| Out-of-process bootstrapper applications | BAs are no longer hosted in the Burn process, for better reliability, security, and compatibility. Custom BAs will require source-code changes. |

[Read more about them in `What's new`.](../)


### WiX v5 releases

- WiX v5.0.0 was released on 5-April-2024, the 20th anniversary of the first open-source release of WiX. It contains [fixes for a small number of bugs](https://github.com/wixtoolset/issues/milestone/26?closed=1).
- WiX v5.0.0-rc.2 was released on 22-March-2024. It contains [fixes for a small number of bugs](https://github.com/wixtoolset/issues/milestone/24?closed=1) and for security vulnerabilities that FireGiant also fixed in WiX v3.14.1 and WiX v4.0.5. For details, see [the FireGiant blog post](https://www.firegiant.com/blog/2024/3/22/wix-security-releases-available-redux/), [the first security advisory](https://github.com/wixtoolset/issues/security/advisories/GHSA-jx4p-m4wm-vvjg), and [the second security advisory](https://github.com/wixtoolset/issues/security/advisories/GHSA-rf39-3f98-xr7r).
- WiX v5.0.0-rc.1 was released on 8-March-2024.


### Contributors

Here are the people who contributed to WiX v5:

- [@barnson](https://github.com/wixtoolset/Harvesters/commits?author=barnson)
- [@robmen](https://github.com/wixtoolset/Harvesters/commits?author=robmen)
- [@chrisbednarski](https://github.com/wixtoolset/Harvesters/commits?author=chrisbednarski)
- [@nirbar](https://github.com/wixtoolset/Harvesters/commits?author=nirbar)
- [@avjts](https://github.com/wixtoolset/Harvesters/commits?author=avjts)
- [@chrpai](https://github.com/wixtoolset/Harvesters/commits?author=chrpai)
- [@cpuwzd](https://github.com/wixtoolset/Harvesters/commits?author=cpuwzd)
- [@apacker1](https://github.com/wixtoolset/Harvesters/commits?author=apacker1)
- [@mosBrkr](https://github.com/wixtoolset/Harvesters/commits?author=mosBrkr)
- [@mistoll](https://github.com/wixtoolset/Harvesters/commits?author=mistoll)
- [@jespersh](https://github.com/wixtoolset/Harvesters/commits?author=jespersh)
- [@timberto](https://github.com/wixtoolset/Harvesters/commits?author=timberto)
- [@fyodorkor](https://github.com/wixtoolset/Harvesters/commits?author=fyodorkor)
- [@mwileczka](https://github.com/wixtoolset/Harvesters/commits?author=mwileczka)


## WiX v4.0.5

WiX v4.0.5, released on Friday, 22-Mar-2024, contains fixes for two security vulnerabilities. All versions of WiX are affected by this vulnerability. We recommending upgrading to this version as soon as possible. For details, see [the FireGiant blog post](https://www.firegiant.com/blog/2024/3/22/wix-security-releases-available-redux/), [the first security advisory](https://github.com/wixtoolset/issues/security/advisories/GHSA-jx4p-m4wm-vvjg), and [the second security advisory](https://github.com/wixtoolset/issues/security/advisories/GHSA-rf39-3f98-xr7r).


### Platforms

- Arm64 is supported in the core toolset, extensions, and Burn.
- WiX extensions include platform-specific custom actions for the platform of the package being built. For example, an Arm64 package contains only Arm64 custom actions and doesn't rely on x86 emulation.


### Build tools

- WiX v4 doesn't have to be installed on every dev machine and build image like WiX v3. Instead, WiX v4 follows the modern .NET model of using NuGet to deliver tools.
  - WiX v4 MSBuild projects are SDK-style projects; MSBuild and NuGet work together to bring down the WiX v4 MSBuild SDK NuGet package.
  - Both .NET Framework MSBuild and `dotnet build` are supported.
  - To build packages from the command line, WiX v4 is available as a .NET tool, which is also a NuGet package.
  - WiX extensions are delivered as NuGet packages, which are usable from both MSBuild projects via `PackageReference` and the WiX .NET tool.
- For command-line afficionados, most executables have been merged into a single `wix.exe` tool with commands. For example, in WiX v3, you might build by calling Candle.exe one or more times to compile your authoring and then calling Light.exe to link and bind the compiled authoring into an .msi package. In WiX v4 using `wix.exe`, that's one command: `wix build -o product.msi product.wxs`.
- Building patches is much easier (one command!) and can use MSI packages as the source of target and updated files.
- The WiX extensibility model and pipeline integration has been dramatically enhanced.
- The WiX language has been further simplified. For example:
  - [The `Package` element](../schema/wxs/package/) combines what was two elements (`Product` and `Package`) in WiX v3 .
  - The [`StandardDirectory` element](../schema/wxs/standarddirectory/) simplifies the use of standard Windows Installer directories.
  - The `Subdirectory` attribute on, for example, [the `Component` element](../schema/wxs/component/), lets you create subdirectories without nested [`Directory` elements](../schema/wxs/directory/).
  - WiX supplies a default [`MediaTemplate` element](../schema/wxs/mediatemplate/) if you don't specify one in your authoring.
- WiX warns when mixing authoring meant for MSI packages in bundles and vice versa.


### Burn, bundles, and bootstrapper applications

- The Burn engine is platform-specific, so you can build an x64 bundle that contains only x64 code and doesn't rely on WoW64.
- .NET 6 and later are supported platforms for writing managed-code bootstrapper applications. .NET Framework is also supported.
- ThmUtil, the native-code UI library used by the WixStdBA bootstrapper application, supports new controls and authored conditions and actions that let themes add functionality without having to write custom C++ code. For details, see [Thmutil schema](../schema/thmutil/).
- ThmUtil (and therefore WixStdBA) supports high DPI display settings.
- The new [`WixInternalUIBootstrapperApplication`](../schema/bal/wixinternaluibootstrapperapplication/) BA supports showing only the internal or embedded UI of an MSI package.
- Burn support other bundles in the chain via [`BundlePackage`](../schema/wxs/bundlepackage/) to automatically handle detection and uninstall command lines. Likewise, the [`ArpEntry` element](../schema/wxs/arpentry/) provides the same functionality for arbitrary executable packages in the chain.
- Burn supports SemVer-style versions.
- WixStdBA supports bundle update feeds as specified in an [`Update` element](../schema/wxs/update/).
- Burn now upgrades bundles with the same version numbers.
- When a user requires elevation to restart (common on Windows Server machines), Burn handles restart through the elevated engine.
- Custom bootstrapper applications can change the `REINSTALLMODE` used when applying MSI packages.
- The Burn policy registry value `EngineWorkingDirectory` in `HKLM\Software\Policies\Wix\Burn` is a string specifying a working folder root directory for elevated bundles when the default of `C:\Windows\Temp` is blocked by security policy.
- Burn no longer appears in the Apps & Features (ARP) list if a bundle has a pre-req that causes a reboot and the user cancels after the reboot.
- The `/unsafeuninstall` command-line switch lets users attempt to "force" a bundle to uninstall, even if dependency checking would otherwise leave it installed.


### Deprecations and deletions

- Features that were deprecated in WiX v3, including command-line switches deprecated in WiX v3.14, have been removed from WiX v4.
- WixGamingExtension and WixLuxExtension have been removed in WiX v4.
- WixDifxAppExtension is deprecated in Windows 10 and therefore has been deprecated in WiX v4 and will be removed in WiX v5.


## Previous WiX v4 releases

> WiX v4.0.4 was released Tuesday, 6-Feb-2024

WiX v4.0.4 mitigates a Windows DLL redirection vulnerability in Burn. All versions of WiX are affected by this vulnerability. We recommending upgrading to this (or a later) version as soon as possible.

> WiX v4.0.3 was released Monday, 13-Nov-2023

WiX v4.0.3 is a maintenance release of WiX v4 that [fixes a small number of even smaller bugs](https://github.com/wixtoolset/issues/milestone/23?closed=1).

> WiX v4.0.2 was released Wednesday, 13-Sep-2023

WiX v4.0.2 is a maintenance release of WiX v4 that fixes a number of bugs that escaped detection in WiX v4.0.0 and v4.0.1:

- **[build -outputType is ignored](https://github.com/wixtoolset/issues/issues/7708)**, from [@robmen](https://github.com/robmen)

- **[`NetFxDotNetCompatibilityCheck` custom action badly fragmented](https://github.com/wixtoolset/issues/issues/7677)**, from [@barnson](https://github.com/barnson)

- **[Substitution does not create ModuleSubstitution table when building Merge Module](https://github.com/wixtoolset/issues/issues/7559)**, from [@rsdk-vag](https://github.com/rsdk-vag)

- **[RegisterFonts action is not added to the InstallExecuteSequence when fonts are being installed to the FontsFolder.](https://github.com/wixtoolset/issues/issues/7593)**, from [@kerrywicks](https://github.com/kerrywicks)

- **[Migrated WiX v3 to v4, now getting error doing action Wix4ConfigureSmbUninstall_X64 when installing](https://github.com/wixtoolset/issues/issues/7632)**, from [@barnson](https://github.com/barnson)

- **[IWindowsInstallerDecompileContext.TreatProductAsModule is borked](https://github.com/wixtoolset/issues/issues/7607)**, from [@barnson](https://github.com/barnson)

- **[`wix msi decompile -x` removes modularization GUIDs from object fields](https://github.com/wixtoolset/issues/issues/7574)**, from [@barnson](https://github.com/barnson)

- **[Merge modules don't extract during decompilation](https://github.com/wixtoolset/issues/issues/7568)**, from [@barnson](https://github.com/barnson)

All of the goodness in WiX v4.0.0 and v4.0.1 remains.


> WiX v4.0.1 was released Monday, 5-June-2023

WiX v4.0.1 was a maintenance release of WiX v4 that [fixes a number of annoyances and more serious bugs that escaped detection in WiX v4.0.0](https://github.com/wixtoolset/issues/milestone/20?closed=1).


> WiX v4.0.0 was released Wednesday, 5-April-2023


### Contributors

[@robmen](https://github.com/wixtoolset/wix4/commits?author=robmen), [@rseanhall](https://github.com/wixtoolset/wix4/commits?author=rseanhall), and [@barnson](https://github.com/wixtoolset/wix4/commits?author=barnson) took their maintainer duties seriously during the development of WiX v4. They were joined by many others, who have our thanks!

- [@cpuwzd](https://github.com/wixtoolset/wix4/commits?author=cpuwzd)
- [@nirbar](https://github.com/wixtoolset/wix4/commits?author=nirbar)
- [@japarson](https://github.com/wixtoolset/wix4/commits?author=japarson)
- [@drolevar](https://github.com/wixtoolset/wix4/commits?author=drolevar)
- [@MarkStega](https://github.com/wixtoolset/wix4/commits?author=MarkStega)
- [@hymccord](https://github.com/wixtoolset/wix4/commits?author=hymccord)
- [@jchoover](https://github.com/wixtoolset/wix4/commits?author=jchoover)
- [@AlexKubiesa](https://github.com/wixtoolset/wix4/commits?author=AlexKubiesa)
- [@wjk](https://github.com/wixtoolset/wix4/commits?author=wjk)
- [@maniglia](https://github.com/wixtoolset/Dtf/commits?author=maniglia)
- [@mcraiha](https://github.com/wixtoolset/wix4/commits?author=mcraiha)
- [@StefanStojanovic](https://github.com/wixtoolset/wix4/commits?author=StefanStojanovic)
- [@ericstj](https://github.com/wixtoolset/wix4/commits?author=ericstj)
- [@pascalpfeil](https://github.com/wixtoolset/wix4/commits?author=pascalpfeil)
- [@danielchalmers](https://github.com/wixtoolset/wix4/commits?author=danielchalmers)
- [@HarmvandenBrand](https://github.com/wixtoolset/wix4/commits?author=HarmvandenBrand)
- [@sgtatham](https://github.com/wixtoolset/wix4/commits?author=sgtatham)
- [@paulomorgado](https://github.com/wixtoolset/wix4/commits?author=paulomorgado)
- [@adnanshaheen](https://github.com/wixtoolset/wix4/commits?author=adnanshaheen)
- [@FroggieFrog](https://github.com/wixtoolset/wix4/commits?author=FroggieFrog)
- [@Herohtar](https://github.com/wixtoolset/wix4/commits?author=Herohtar)
- [@BMurri](https://github.com/wixtoolset/wix4/commits?author=BMurri)
- [@heaths](https://github.com/wixtoolset/wix4/commits?author=heaths)
- [@chrpai](https://github.com/wixtoolset/wix4/commits?author=chrpai)
- [@VolkerGa](https://github.com/wixtoolset/Dtf/commits?author=VolkerGa)
- [@t-johnson](https://github.com/wixtoolset/Harvesters/commits?author=t-johnson)


> Release Candidate 4 released Friday, 17-March-2023

WiX v4 Release Candidate 4 contains [fixes for the -- significantly smaller number of bugs compared to RC3 -- that were reported during Release Candidate 3](https://github.com/wixtoolset/issues/issues?q=is%3Aissue+project%3Awixtoolset%2Fissues%2F6). There is one minor new feature:

- In WixToolset.Netfx.wixext, package groups for .NET Framework v4.8.1 are now available. See [the issue](https://github.com/wixtoolset/issues/issues/7239) and [@barnson's pull request](https://github.com/wixtoolset/wix4/pull/368).


> Release Candidate 3 released Friday, 24-February-2023

WiX v4 Release Candidate 3 contains [fixes for bugs that were reported during Release Candidate 2](https://github.com/wixtoolset/issues/issues?q=is%3Aissue+project%3Awixtoolset%2Fissues%2F5). There are two minor new features:

- WiX MSBuild projects support multi-targeting other projects with a single `ProjectReference`. You can specify multiple platforms, configurations, .NET frameworks, and runtime identifiers. See [@robmen's WIP](https://github.com/wixtoolset/issues/issues/7241) and [pull request](https://github.com/wixtoolset/wix4/pull/356).
- A new `sys.BUILDARCHSHORT` built-in preprocessor variable helps handle WiX v4's new architecture-specific custom actions. See [issue 7227](https://github.com/wixtoolset/issues/issues/7227) and [@barnson's PR](https://github.com/wixtoolset/wix4/pull/359).


> Release Candidate 2 released Friday, 20-January-2023

WiX v4 Release Candidate 2 contains fixes for bugs that were reported during Release Candidate 1. There are two new features:

- Add `perUserOrMachine` to the `Package/@Scope` options for dual-scope, single-package authoring. See [issue #7137](https://github.com/wixtoolset/issues/issues/7137), [@robmen's code PR](https://github.com/wixtoolset/wix4/pull/327), and [documentation PR](https://github.com/wixtoolset/web/pull/138).
- Add `DotNetCoreSdkSearch` Burn search to locate .NET (Core) SDKs, like the `DotNetCoreSearch` search for .NET runtimes. See [issue #7058](https://github.com/wixtoolset/issues/issues/7058), [@powercode's code PR](https://github.com/wixtoolset/wix4/pull/294), and [@rseanhall's documentation PR](https://github.com/wixtoolset/web/pull/141).


> Release Candidate 1 released Friday, 16-December-2022

WiX v4 Release Candidate 1 contains fixes for bugs that were reported during Preview 1. There are no new features.


> Preview 1 released Friday, 11-November-2022

WiX v4 is a major release of the WiX Toolset, years in the making. [More than 500 issues were closed in WiX v4](https://github.com/wixtoolset/issues/issues?q=is%3Aissue+milestone%3Av4.0+is%3Aclosed)!

If you're familiar with WiX v3, [WiX v4 for WiX v3 users](/wix/whatsnew/faqs/) has details about how WiX v4 works.
