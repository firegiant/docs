---
title: IBundleInfo Interface
---
BA manifest data.
## Methods
| Method | Description |
| ------ | ----------- |
| [AddRelatedBundleAsPackage(e)](#addrelatedbundleaspackage_e) | Adds a related bundle as a package. |
| [AddUpdateBundleAsPackage(e)](#addupdatebundleaspackage_e) | Adds an update bundle as a package. |
## Properties
| Property | Description |
| ------ | ----------- |
| [LogVariable](#logvariable) | The name of the variable that contains the path to the bundle's log. |
| [Name](#name) | Bundle/@Name |
| [OverridableVariables](#overridablevariables) | Variables that were marked with bal:Overridable="yes". |
| [Packages](#packages) | The packages in the bundle's chain. |
| [PerMachine](#permachine) | Whether the bundle is per-machine or per-user. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## AddRelatedBundleAsPackage(e) Method {#addrelatedbundleaspackage_e}
Adds a related bundle as a package.
### Declaration
```cs
public IPackageInfo AddRelatedBundleAsPackage(
  DetectRelatedBundleEventArgs e
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| e | DetectRelatedBundleEventArgs |  |
### Return value
`IPackageInfo` The created «see T:WixToolset.Mba.Core.IPackageInfo» .
## AddUpdateBundleAsPackage(e) Method {#addupdatebundleaspackage_e}
Adds an update bundle as a package.
### Declaration
```cs
public IPackageInfo AddUpdateBundleAsPackage(
  SetUpdateCompleteEventArgs e
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| e | SetUpdateCompleteEventArgs |  |
### Return value
`IPackageInfo` The created «see T:WixToolset.Mba.Core.IPackageInfo» .
## LogVariable Property {#logvariable}
The name of the variable that contains the path to the bundle's log.
### Declaration
```cs
public string LogVariable { get; set; }
```
## Name Property {#name}
Bundle/@Name
### Declaration
```cs
public string Name { get; set; }
```
## OverridableVariables Property {#overridablevariables}
Variables that were marked with bal:Overridable="yes".
### Declaration
```cs
public IOverridableVariables OverridableVariables { get; set; }
```
## Packages Property {#packages}
The packages in the bundle's chain.
### Declaration
```cs
public System.Collections.Generic.IDictionary<System.String,WixToolset.Mba.Core.IPackageInfo> Packages { get; set; }
```
## PerMachine Property {#permachine}
Whether the bundle is per-machine or per-user.
### Declaration
```cs
public bool PerMachine { get; set; }
```
