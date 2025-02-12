---
title: Burn bundles
---

The [`Bundle` element](../../schema/wxs/bundle/) is the top-level element for a Burn bundle. It contains child elements that let you specify the [chain of packages to be installed](#chain), the [bootstrapper application](#burnux) that provides the user experience, custom and [built-in variables](./builtin-variables/), [system searches](./searches/), and all the other goodies that let you define a bundle.

```xml
<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs"
     xmlns:bal="http://wixtoolset.org/schemas/v4/wxs/bal">

    <Bundle
        Name="$(BundleName)"
        Version="$(Version)"
        UpgradeCode="$(UpgradeCode)"
        Compressed="no"
        SplashScreenSourceFile="splashscreen.bmp">

        <BootstrapperApplication>
            <bal:WixStandardBootstrapperApplication
                LicenseUrl=""
                Theme="hyperlinkLicense" />
        </BootstrapperApplication>

        <Chain>
            <PackageGroupRef Id="BundlePackages" />
        </Chain>
    </Bundle>
</Wix>
```


## Bundle package chains {#chain}

Burn supports the following kinds of packages:

| Package | Description |
| ------- | ----------- |
| [BundlePackage](../../schema/wxs/bundlepackage/) | Another Burn bundle .exe |
| [ExePackage](../../schema/wxs/exepackage/) | An executable .exe installer |
| [MsiPackage](../../schema/wxs/msipackage/) | A Windows Installer .msi package |
| [MspPackage](../../schema/wxs/msppackage/) | A Windows Installer .msp patch package |
| [MsuPackage](../../schema/wxs/msupackage/) | A Windows update .msu package |

To include a package in a bundle's chain of packages:

- Include the package element as a child of the [`Chain` element](../../schema/wxs/chain/).
- Include the package element as a child of a [`PackageGroup` element](../../schema/wxs/packagegroup/) and include that package group in the chain with a [`PackageGroupRef` element](../../schema/wxs/packagegroupref/) as a child of the [`Chain` element](../../schema/wxs/chain/).

For example:

```xml
<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs">
    <Bundle>
        <Chain>
            <PackageGroupRef Id="BundlePackages" />

            <ExePackage
                DetectCondition="DetectedSomethingVariable"
                UninstallArguments="-uninstall"
                SourceFile="EndOfChain.exe" />
        </Chain>
    </Bundle>

    <Fragment>
        <PackageGroup Id="BundlePackages">
            <PackageGroupRef Id="PrereqPackages" />
            <MsiPackage Id="PackageA" SourceFile="PackageA.msi" />
            <MsiPackage Id="PackageB" SourceFile="PackageB.msi" />
        </PackageGroup>
    </Fragment>

    <Fragment>
        <PackageGroup Id="PrereqPackages">
            <MsiPackage SourceFile="Prereqs.msi">
                <MsiProperty Name="PREREQSONLY" Value="1" />
            </MsiPackage>
        </PackageGroup>
    </Fragment>
</Wix>
```


## Bootstrapper applications {#burnux}

Each bundle needs a bootstrapper application to implement the user experience, including business logic and UI. WiX includes two BAs:

- [`WixStandardBootstrapperApplication` (WixStdBA)](./wixstdba/) provides a simple, wizard-like UI and typical BA behavior. The UI is provided by XML files that let you change the appearance without needing to change the code of the BA. WixStdBA is written in C++, so has no additional system requirements.
- `WixInternalUIBootstrapperApplication` (WixIUIBA) provides typical BA behavior and defers the UI to the UI defined in the primary MSI package. WixIUIBA is useful when you have a complex UI defined in an MSI package and don't want to convert it to a BA. WixIUIBA is written in C++, so has no additional system requirements.

Here's how you might add a built-in BA to a bundle:

```xml
<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs"
     xmlns:bal="http://wixtoolset.org/schemas/v4/wxs/bal">

    <Bundle>

        <BootstrapperApplication>
            <bal:WixStandardBootstrapperApplication
                LicenseUrl=""
                Theme="hyperlinkLicense" />
        </BootstrapperApplication>
```

You can also create an entirely custom bootstrapper application, either in native code or managed code. Here's how you might reference a custom native-code BA in WiX v4:

```xml
<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs">
    <Bundle>
        <BootstrapperApplication>
            <BootstrapperApplicationDll
                Id="MyStandardBootstrapperApplication"
                SourceFile="bobstdba.dll" />
            <PayloadGroupRef
                Id="MyStandardBootstrapperApplicationPayloads" />
        </BootstrapperApplication>
```

...or in WiX v5:

```xml
<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs">
    <Bundle>
        <BootstrapperApplication SourceFile="bobstdba.exe">
            <PayloadGroupRef
                Id="MyStandardBootstrapperApplicationPayloads" />
        </BootstrapperApplication>
```

Here's how you might reference a custom managed-code BA written in .NET 6:

```xml
<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs"
     xmlns:bal="http://wixtoolset.org/schemas/v4/wxs/bal">

    <Bundle>
        <BootstrapperApplication>
            <Payload SourceFile="MyBA.EarliestCoreMBA.deps.json" />
            <Payload SourceFile="MyBA.EarliestCoreMBA.dll"
                bal:BAFactoryAssembly="yes" />
            <Payload SourceFile="MyBA.EarliestCoreMBA.runtimeconfig.json" />
            <Payload SourceFile="mbanative.dll" />
            <Payload SourceFile="WixToolset.Mba.Core.dll" />
            <bal:WixDotNetCoreBootstrapperApplicationHost />
        </BootstrapperApplication>
```

...or in WiX v5:

```xml
<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs"
     xmlns:bal="http://wixtoolset.org/schemas/v4/wxs/bal">

    <Bundle>
        <BootstrapperApplication SourceFile="MyBA.EarliestCoreMBA.exe">
            <Payload SourceFile="MyBA.EarliestCoreMBA.deps.json" />
            <Payload SourceFile="MyBA.EarliestCoreMBA.dll" />
            <Payload SourceFile="MyBA.EarliestCoreMBA.runtimeconfig.json" />
            <Payload SourceFile="mbanative.dll" />
            <Payload SourceFile="WixToolset.Mba.Core.dll" />
        </BootstrapperApplication>
```
