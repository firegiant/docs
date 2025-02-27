---
pagefind: false
title: Changing the WiX Standard Bootstrapper Application Branding
---
The WiX Standard Bootstrapper Application displays a generic logo in the bottom left corner of the user interface. It is possible to change the image displayed using the WixStandardBootstrapperApplication element provided by WixBalExtension. The following example uses a "customlogo.png" file found in the "path\to" folder relative to the linker bind paths.

```xml
<?xml version="1.0"?>
<Wix xmlns="http://schemas.microsoft.com/wix/2006/wi"
     xmlns:bal="http://schemas.microsoft.com/wix/BalExtension">
  <Bundle>
    <BootstrapperApplicationRef Id="WixStandardBootstrapperApplication.RtfLicense">
      <bal:WixStandardBootstrapperApplication
        LicenseFile="path\to\license.rtf"
        LogoFile="path\to\customlogo.png"
        />
    </BootstrapperApplicationRef>

    <Chain>
      ...
    </Chain>
  </Bundle>
</Wix>
```

For the HyperlinkSidebarLicense UI, there are two logos and they can be configured as follows:

```xml
<?xml version="1.0"?>
<Wix xmlns="http://schemas.microsoft.com/wix/2006/wi"
     xmlns:bal="http://schemas.microsoft.com/wix/BalExtension">
  <Bundle>
    <BootstrapperApplicationRef Id="WixStandardBootstrapperApplication.HyperlinkSidebarLicense">
      <bal:WixStandardBootstrapperApplication
        LicenseUrl="License.htm"
        LogoFile="path\to\customlogo.png"
        LogoSideFile="path\to\customsidelogo.png"
    />
    </BootstrapperApplicationRef>

    <Chain>
      ...
    </Chain>
  </Bundle>
</Wix>
```
