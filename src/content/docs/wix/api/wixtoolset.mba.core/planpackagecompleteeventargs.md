---
title: PlanPackageCompleteEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PlanPackageComplete»
## Properties
| Property | Description |
| ------ | ----------- |
| [PackageId](#packageid) | Gets the identity of the package planned for. |
| [Requested](#requested) | Gets the requested state for the package. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## PackageId Property {#packageid}
Gets the identity of the package planned for.
### Declaration
```cs
public string PackageId { get; set; }
```
## Requested Property {#requested}
Gets the requested state for the package.
### Declaration
```cs
public RequestState Requested { get; set; }
```
