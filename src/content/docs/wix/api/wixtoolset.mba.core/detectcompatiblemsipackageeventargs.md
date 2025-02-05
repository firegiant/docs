---
title: DetectCompatibleMsiPackageEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.DetectCompatibleMsiPackage»
## Properties
| Property | Description |
| ------ | ----------- |
| [CompatiblePackageId](#compatiblepackageid) | Gets the identity of the compatible package that was detected. |
| [CompatiblePackageVersion](#compatiblepackageversion) | Gets the version of the compatible package that was detected. |
| [PackageId](#packageid) | Gets the identity of the package that was not detected. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## CompatiblePackageId Property {#compatiblepackageid}
Gets the identity of the compatible package that was detected.
### Declaration
```cs
public string CompatiblePackageId { get; set; }
```
## CompatiblePackageVersion Property {#compatiblepackageversion}
Gets the version of the compatible package that was detected.
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
