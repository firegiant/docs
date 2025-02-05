---
pagefind: false
title: 'How To: Install a Windows service'
---

To install a Windows service, use the [ServiceInstall](./../../xsd/wix/serviceinstall/) 
element. Other configuration can be made using the 
[ServiceControl](./../../xsd/wix/servicecontrol/) element and the 
[ServiceConfig](./../../xsd/util/serviceconfig/) element from WixUtilExtension.

## Step 1: Install the service

The `ServiceInstall` element contains the basic information about the service to install.
This element should be the child of a [Component](./../../xsd/wix/component/) element
whose key path is a sibling [File](./../../xsd/wix/file/) element that specifies the 
service executable file.

**Tip:** to specify a system account, such as LocalService or NetworkService, use the prefix 
`NT AUTHORITY`. For example, use `NT AUTHORITY\LocalService` as the `Account` attribute value
to run the service under this account.

## Step 2: Configure the service (optional)

Using the [util:ServiceConfig](./../../xsd/util/serviceconfig/) element from WixUtilExtension, 
you can configure how the service behaves if it fails. To use it,
[add](extension_usage_introduction/) WixUtilExtension to your project, add the 
the [util](./../../xsd/util/) namespace to your WiX authoring,
and prefix the element name with the `util` prefix:

```xml
<Wix xmlns="http://schemas.microsoft.com/wix/2006/wi" xmlns:util="http://schemas.microsoft.com/wix/UtilExtension">
  ...
  <ServiceInstall>
      <util:ServiceConfig FirstFailureActionType="restart"
                          SecondFailureActionType="restart"
                          ThirdFailureActionType="restart" /> 
  </ServiceInstall>
```
