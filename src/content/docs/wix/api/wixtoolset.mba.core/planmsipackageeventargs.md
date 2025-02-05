---
title: PlanMsiPackageEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PlanMsiPackage»
## Properties
| Property | Description |
| ------ | ----------- |
| [Action](#action) | Gets the action planned for the package. |
| [ActionMsiProperty](#actionmsiproperty) | Gets or sets the requested MSI property to add. |
| [DisableExternalUiHandler](#disableexternaluihandler) | Gets or sets whether Burn is requested to set up an external UI handler. |
| [FileVersioning](#fileversioning) | Gets or sets the requested file versioning. |
| [PackageId](#packageid) | Gets identity of the package planned for. |
| [RecommendedFileVersioning](#recommendedfileversioning) | Gets the recommended file versioning for the package. |
| [ShouldExecute](#shouldexecute) | Gets whether the package is planned to execute or roll back. |
| [UiLevel](#uilevel) | Gets or sets the requested internal UI level. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## Action Property {#action}
Gets the action planned for the package.
### Declaration
```cs
public ActionState Action { get; set; }
```
## ActionMsiProperty Property {#actionmsiproperty}
Gets or sets the requested MSI property to add.
### Declaration
```cs
public BURN_MSI_PROPERTY ActionMsiProperty { get; set; }
```
## DisableExternalUiHandler Property {#disableexternaluihandler}
Gets or sets whether Burn is requested to set up an external UI handler.
### Declaration
```cs
public bool DisableExternalUiHandler { get; set; }
```
## FileVersioning Property {#fileversioning}
Gets or sets the requested file versioning.
### Declaration
```cs
public BOOTSTRAPPER_MSI_FILE_VERSIONING FileVersioning { get; set; }
```
## PackageId Property {#packageid}
Gets identity of the package planned for.
### Declaration
```cs
public string PackageId { get; set; }
```
## RecommendedFileVersioning Property {#recommendedfileversioning}
Gets the recommended file versioning for the package.
### Declaration
```cs
public BOOTSTRAPPER_MSI_FILE_VERSIONING RecommendedFileVersioning { get; set; }
```
## ShouldExecute Property {#shouldexecute}
Gets whether the package is planned to execute or roll back.
### Declaration
```cs
public bool ShouldExecute { get; set; }
```
## UiLevel Property {#uilevel}
Gets or sets the requested internal UI level.
### Declaration
```cs
public INSTALLUILEVEL UiLevel { get; set; }
```
