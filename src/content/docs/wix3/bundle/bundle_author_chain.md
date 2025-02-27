---
pagefind: false
title: Chain Packages into a Bundle
---

To chain a package, you can either put the package definition directly under the [Chain](../xsd/wix/chain/) element or put a [PackageGroupRef](../xsd/wix/packagegroupref/) inside the [Chain](../xsd/wix/chain/) to reference a shared package definition.

Here&apos;s an example of having the definition directly under [Chain](../xsd/wix/chain/):

```xml
<?xml version="1.0"?>
<Wix xmlns="http://schemas.microsoft.com/wix/2006/wi">
  <Bundle>
    <BootstrapperApplicationRef Id="WixStandardBootstrapperApplication.RtfLicense" />

    <Chain>
        <ExePackage
          SourceFile="path\to\MyPackage.exe"
          DownloadUrl="http://example.com/?mypackage.exe"
          InstallCommand="/q /ACTION=Install"
          RepairCommand="/q ACTION=Repair /hideconsole" />
    </Chain>
  </Bundle>
</Wix>
```

Here&apos;s an example of referencing a shared package definition:

```xml
<?xml version="1.0"?>
<Wix xmlns="http://schemas.microsoft.com/wix/2006/wi">
  <Bundle>
    <BootstrapperApplicationRef Id="WixStandardBootstrapperApplication.RtfLicense" />

    <Chain>
        <PackageGroupRef Id="MyPackage" />
    </Chain>
  </Bundle>
</Wix>
```
