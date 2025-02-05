---
title: PlanCompatibleMsiPackageBeginEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PlanCompatibleMsiPackageBegin»
## Properties
| Property | Description |
| ------ | ----------- |
| [CompatiblePackageId](#compatiblepackageid) | Gets the identity of the compatible package detected. |
| [CompatiblePackageVersion](#compatiblepackageversion) | Gets the version of the compatible package detected. |
| [PackageId](#packageid) | Gets the identity of the package that was not detected. |
| [RecommendedRemove](#recommendedremove) | Gets the recommended state to use for the compatible package for planning. |
| [RequestRemove](#requestremove) | Gets or sets whether to uninstall the compatible package. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## CompatiblePackageId Property {#compatiblepackageid}
Gets the identity of the compatible package detected.
### Declaration
```cs
public string CompatiblePackageId { get; set; }
```
## CompatiblePackageVersion Property {#compatiblepackageversion}
Gets the version of the compatible package detected.
### Declaration
```cs
public string CompatiblePackageVersion { get; set; }
```
## PackageId Property {#packageid}
Gets the identity of the package that was not detected.
### Declaration
```cs
public string PackageId { get; set; }
```
## RecommendedRemove Property {#recommendedremove}
Gets the recommended state to use for the compatible package for planning.
### Declaration
```cs
public bool RecommendedRemove { get; set; }
```
## RequestRemove Property {#requestremove}
Gets or sets whether to uninstall the compatible package.
### Declaration
```cs
public bool RequestRemove { get; set; }
```
