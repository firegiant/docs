---
title: ExecutePackageBeginEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.ExecutePackageBegin»
## Properties
| Property | Description |
| ------ | ----------- |
| [Action](#action) | Gets the action about to be executed. |
| [DisableExternalUiHandler](#disableexternaluihandler) | Gets whether Burn will set up an external UI handler (if this is an MSI or MSP package). |
| [PackageId](#packageid) | Gets the identity of the package to act on. |
| [ShouldExecute](#shouldexecute) | Gets whether the package is being executed or rolled back. |
| [UiLevel](#uilevel) | Gets the internal UI level (if this is an MSI or MSP package). |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## Action Property {#action}
Gets the action about to be executed.
### Declaration
```cs
public ActionState Action { get; set; }
```
## DisableExternalUiHandler Property {#disableexternaluihandler}
Gets whether Burn will set up an external UI handler (if this is an MSI or MSP package).
### Declaration
```cs
public bool DisableExternalUiHandler { get; set; }
```
## PackageId Property {#packageid}
Gets the identity of the package to act on.
### Declaration
```cs
public string PackageId { get; set; }
```
## ShouldExecute Property {#shouldexecute}
Gets whether the package is being executed or rolled back.
### Declaration
```cs
public bool ShouldExecute { get; set; }
```
## UiLevel Property {#uilevel}
Gets the internal UI level (if this is an MSI or MSP package).
### Declaration
```cs
public INSTALLUILEVEL UiLevel { get; set; }
```
