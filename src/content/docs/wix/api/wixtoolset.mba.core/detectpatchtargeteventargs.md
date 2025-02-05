---
title: DetectPatchTargetEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.DetectPatchTarget»
## Properties
| Property | Description |
| ------ | ----------- |
| [PackageId](#packageid) | Gets the identity of the patch's package. |
| [ProductCode](#productcode) | Gets the product code of the target. |
| [State](#state) | Gets the detected patch state for the target. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## PackageId Property {#packageid}
Gets the identity of the patch's package.
### Declaration
```cs
public string PackageId { get; set; }
```
## ProductCode Property {#productcode}
Gets the product code of the target.
### Declaration
```cs
public string ProductCode { get; set; }
```
## State Property {#state}
Gets the detected patch state for the target.
### Declaration
```cs
public PackageState State { get; set; }
```
