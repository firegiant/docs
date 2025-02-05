---
title: ComponentInstallation Class
---
Represents an instance of a registered component.
## Methods
| Method | Description |
| ------ | ----------- |
| [Components()](#components_nop) | Gets the set of installed components for products in the indicated context. |
## Properties
| Property | Description |
| ------ | ----------- |
| [AllComponents](#allcomponents) | Gets the set of installed components for all products. |
| [ClientProducts](#clientproducts) | Gets all client products of a specified component. |
| [ComponentCode](#componentcode) | Gets the component code (GUID) of the component. |
| [Path](#path) | Gets the full path to an installed component. If the key path for the component is a registry key then the registry key is returned. |
| [Qualifiers](#qualifiers) | Gets the set of registered qualifiers for the component. |
| [State](#state) | Gets the installed state of a component. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Components() Method {#components_nop}
Gets the set of installed components for products in the indicated context.
### Declaration
```cs
public static IEnumerable<WixToolset.Dtf.WindowsInstaller.ComponentInstallation> Components()
```
### Remarks
Win32 MSI API: [MsiEnumComponentsEx](http://msdn.microsoft.com/library/dd407947.aspx)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | The installer configuration data is corrupt |
## AllComponents Property {#allcomponents}
Gets the set of installed components for all products.
### Declaration
```cs
public static IEnumerable<WixToolset.Dtf.WindowsInstaller.ComponentInstallation> AllComponents { get; set; }
```
### Remarks
Win32 MSI API: [MsiEnumComponents](http://msdn.microsoft.com/library/en-us/msi/setup/msienumcomponents.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | The installer configuration data is corrupt |
## ClientProducts Property {#clientproducts}
Gets all client products of a specified component.
### Declaration
```cs
public IEnumerable<WixToolset.Dtf.WindowsInstaller.ProductInstallation> ClientProducts { get; set; }
```
### Remarks
Because clients are not ordered, any new component has an arbitrary index. This means that the property may return clients in any order.
Win32 MSI API: [MsiEnumClients](http://msdn.microsoft.com/library/en-us/msi/setup/msienumclients.asp) , [MsiEnumClientsEx](http://msdn.microsoft.com/library/dd407946.aspx)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | The installer configuration data is corrupt |
## ComponentCode Property {#componentcode}
Gets the component code (GUID) of the component.
### Declaration
```cs
public string ComponentCode { get; set; }
```
## Path Property {#path}
Gets the full path to an installed component. If the key path for the component is a registry key then the registry key is returned.
### Declaration
```cs
public string Path { get; set; }
```
### Remarks
If the component is a registry key, the registry roots are represented numerically. For example, a registry path of "HKEY_CURRENT_USER\SOFTWARE\Microsoft" would be returned as "01:\SOFTWARE\Microsoft". The registry roots returned are defined as follows: HKEY_CLASSES_ROOT=00, HKEY_CURRENT_USER=01, HKEY_LOCAL_MACHINE=02, HKEY_USERS=03, HKEY_PERFORMANCE_DATA=04
Win32 MSI APIs: [MsiGetComponentPath](http://msdn.microsoft.com/library/en-us/msi/setup/msigetcomponentpath.asp) , [MsiGetComponentPathEx](http://msdn.microsoft.com/library/dd408006.aspx) , [MsiLocateComponent](http://msdn.microsoft.com/library/en-us/msi/setup/msilocatecomponent.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentException | An unknown product or component was specified |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | The installer configuration data is corrupt |
## Qualifiers Property {#qualifiers}
Gets the set of registered qualifiers for the component.
### Declaration
```cs
public IEnumerable<WixToolset.Dtf.WindowsInstaller.ComponentInstallation+Qualifier> Qualifiers { get; set; }
```
### Remarks
Because qualifiers are not ordered, any new qualifier has an arbitrary index, meaning the function can return qualifiers in any order.
Win32 MSI API: [MsiEnumComponentQualifiers](http://msdn.microsoft.com/library/en-us/msi/setup/msienumcomponentqualifiers.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | The installer configuration data is corrupt |
## State Property {#state}
Gets the installed state of a component.
### Declaration
```cs
public InstallState State { get; set; }
```
### Remarks
Win32 MSI API: [MsiGetComponentPath](http://msdn.microsoft.com/library/en-us/msi/setup/msigetcomponentpath.asp) , [MsiGetComponentPathEx](http://msdn.microsoft.com/library/dd408006.aspx)

