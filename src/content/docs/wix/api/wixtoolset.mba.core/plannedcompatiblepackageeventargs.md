---
title: PlannedCompatiblePackageEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PlannedCompatiblePackage»
## Properties
| Property | Description |
| ------ | ----------- |
| [CompatiblePackageId](#compatiblepackageid) | Gets the identity of the compatible package detected. |
| [PackageId](#packageid) | Gets the identity of the package planned for. |
| [Remove](#remove) | Gets the planned state of the package. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## CompatiblePackageId Property {#compatiblepackageid}
Gets the identity of the compatible package detected.
### Declaration
```cs
public string CompatiblePackageId { get; set; }
```
## PackageId Property {#packageid}
Gets the identity of the package planned for.
### Declaration
```cs
public string PackageId { get; set; }
```
## Remove Property {#remove}
Gets the planned state of the package.
### Declaration
```cs
public bool Remove { get; set; }
```
