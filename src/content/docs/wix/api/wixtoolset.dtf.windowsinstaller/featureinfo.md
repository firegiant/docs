---
title: FeatureInfo Class
---
Provides access to information about a feature within the context of an installation session.
## Methods
| Method | Description |
| ------ | ----------- |
| [GetCost(includeParents, includeChildren, installState)](#getcost_includeparents_includechildren_installstate) | Calculates the disk space required by the feature and its selected children and parent features. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Attributes](#attributes) | Gets or sets the attributes of the feature. |
| [CurrentState](#currentstate) | Gets the current install state of the feature. |
| [Description](#description) | Gets the description of the feature. |
| [Name](#name) | Gets the name of the feature (primary key in the Feature table). |
| [RequestState](#requeststate) | Gets or sets the action state of the feature. |
| [Title](#title) | Gets the title of the feature. |
| [ValidStates](#validstates) | Gets a list of valid installation states for the feature. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## GetCost(includeParents, includeChildren, installState) Method {#getcost_includeparents_includechildren_installstate}
Calculates the disk space required by the feature and its selected children and parent features.
### Declaration
```cs
public System.Int64 GetCost(
  bool includeParents,
  bool includeChildren,
  InstallState installState
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| includeParents | bool | If true, the parent features are included in the cost. |
| includeChildren | bool | If true, the child features are included in the cost. |
| installState | InstallState | Specifies the installation state. |
### Return value
`System.Int64` The disk space requirement in bytes.
### Remarks
Win32 MSI API: [MsiGetFeatureCost](http://msdn.microsoft.com/library/en-us/msi/setup/msigetfeaturecost.asp)

## Attributes Property {#attributes}
Gets or sets the attributes of the feature.
### Declaration
```cs
public FeatureAttributes Attributes { get; set; }
```
### Remarks
Win32 MSI APIs: [MsiGetFeatureInfo](http://msdn.microsoft.com/library/en-us/msi/setup/msigetfeatureinfo.asp) , [MsiSetFeatureAttributes](http://msdn.microsoft.com/library/en-us/msi/setup/msisetfeatureattributes.asp)
Since the lpAttributes paramter of [MsiGetFeatureInfo](http://msdn.microsoft.com/library/en-us/msi/setup/msigetfeatureinfo.asp) does not contain an equivalent flag for «see F:WixToolset.Dtf.WindowsInstaller.FeatureAttributes.UIDisallowAbsent» , this flag will not be retrieved.
Since the dwAttributes parameter of [MsiSetFeatureAttributes](http://msdn.microsoft.com/library/en-us/msi/setup/msisetfeatureattributes.asp) does not contain an equivalent flag for «see F:WixToolset.Dtf.WindowsInstaller.FeatureAttributes.UIDisallowAbsent» , the presence of this flag will be ignored.

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the Session handle is invalid |
| T:System.ArgumentException | an unknown feature was requested |
## CurrentState Property {#currentstate}
Gets the current install state of the feature.
### Declaration
```cs
public InstallState CurrentState { get; set; }
```
### Remarks
Win32 MSI API: [MsiGetFeatureState](http://msdn.microsoft.com/library/en-us/msi/setup/msigetfeaturestate.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the Session handle is invalid |
| T:System.ArgumentException | an unknown feature was requested |
## Description Property {#description}
Gets the description of the feature.
### Declaration
```cs
public string Description { get; set; }
```
### Remarks
Win32 MSI API: [MsiGetFeatureInfo](http://msdn.microsoft.com/library/en-us/msi/setup/msigetfeatureinfo.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the Session handle is invalid |
| T:System.ArgumentException | an unknown feature was requested |
## Name Property {#name}
Gets the name of the feature (primary key in the Feature table).
### Declaration
```cs
public string Name { get; set; }
```
## RequestState Property {#requeststate}
Gets or sets the action state of the feature.
### Declaration
```cs
public InstallState RequestState { get; set; }
```
### Remarks
When changing the feature action, the action state of all the Components linked to the changed Feature records are also updated appropriately, based on the new feature Select state. All Features can be configured at once by specifying the keyword ALL instead of a specific feature name.
Win32 MSI APIs: [MsiGetFeatureState](http://msdn.microsoft.com/library/en-us/msi/setup/msigetfeaturestate.asp) , [MsiSetFeatureState](http://msdn.microsoft.com/library/en-us/msi/setup/msisetfeaturestate.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the Session handle is invalid |
| T:System.ArgumentException | an unknown feature was requested |
## Title Property {#title}
Gets the title of the feature.
### Declaration
```cs
public string Title { get; set; }
```
### Remarks
Win32 MSI API: [MsiGetFeatureInfo](http://msdn.microsoft.com/library/en-us/msi/setup/msigetfeatureinfo.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the Session handle is invalid |
| T:System.ArgumentException | an unknown feature was requested |
## ValidStates Property {#validstates}
Gets a list of valid installation states for the feature.
### Declaration
```cs
public System.Collections.Generic.ICollection<WixToolset.Dtf.WindowsInstaller.InstallState> ValidStates { get; set; }
```
### Remarks
Win32 MSI API: [MsiGetFeatureValidStates](http://msdn.microsoft.com/library/en-us/msi/setup/msigetfeaturevalidstates.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the Session handle is invalid |
| T:System.ArgumentException | an unknown feature was requested |
