---
title: ComponentInfo Class
---
Provides access to information about a component within the context of an installation session.
## Methods
| Method | Description |
| ------ | ----------- |
| [GetCost(installState)](#getcost_installstate) | Gets disk space per drive required to install a component. |
## Properties
| Property | Description |
| ------ | ----------- |
| [CurrentState](#currentstate) | Gets the current install state of the designated Component. |
| [Name](#name) | Gets the name of the component (primary key in the Component table). |
| [RequestState](#requeststate) | Gets or sets the action state of the designated Component. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## GetCost(installState) Method {#getcost_installstate}
Gets disk space per drive required to install a component.
### Declaration
```cs
public IList<WixToolset.Dtf.WindowsInstaller.InstallCost> GetCost(
  InstallState installState
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| installState | InstallState | Requested component state |
### Return value
`IList<WixToolset.Dtf.WindowsInstaller.InstallCost>` A list of InstallCost structures, specifying the cost for each drive for the component
### Remarks
Win32 MSI API: [MsiEnumComponentCosts](http://msdn.microsoft.com/library/en-us/msi/setup/msienumcomponentcosts.asp)

## CurrentState Property {#currentstate}
Gets the current install state of the designated Component.
### Declaration
```cs
public InstallState CurrentState { get; set; }
```
### Remarks
Win32 MSI API: [MsiGetComponentState](http://msdn.microsoft.com/library/en-us/msi/setup/msigetcomponentstate.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the Session handle is invalid |
| T:System.ArgumentException | an unknown Component was requested |
## Name Property {#name}
Gets the name of the component (primary key in the Component table).
### Declaration
```cs
public string Name { get; set; }
```
## RequestState Property {#requeststate}
Gets or sets the action state of the designated Component.
### Declaration
```cs
public InstallState RequestState { get; set; }
```
### Remarks
Win32 MSI APIs: [MsiGetComponentState](http://msdn.microsoft.com/library/en-us/msi/setup/msigetcomponentstate.asp) , [MsiSetComponentState](http://msdn.microsoft.com/library/en-us/msi/setup/msisetcomponentstate.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the Session handle is invalid |
| T:System.ArgumentException | an unknown Component was requested |
| T:WixToolset.Dtf.WindowsInstaller.InstallCanceledException | the user exited the installation |
