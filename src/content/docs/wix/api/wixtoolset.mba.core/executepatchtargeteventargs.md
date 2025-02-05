---
title: ExecutePatchTargetEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.ExecutePatchTarget»
## Properties
| Property | Description |
| ------ | ----------- |
| [PackageId](#packageid) | Gets the identity of the package to act on. |
| [TargetProductCode](#targetproductcode) | Gets the product code being targeted. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## PackageId Property {#packageid}
Gets the identity of the package to act on.
### Declaration
```cs
public string PackageId { get; set; }
```
## TargetProductCode Property {#targetproductcode}
Gets the product code being targeted.
### Declaration
```cs
public string TargetProductCode { get; set; }
```
