---
title: PlannedPackageEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PlannedPackage»
## Properties
| Property | Description |
| ------ | ----------- |
| [Cache](#cache) | Gets whether the package will be cached. |
| [Execute](#execute) | Gets the planned execution action. |
| [PackageId](#packageid) | Gets the identity of the package planned for. |
| [Rollback](#rollback) | Gets the planned rollback action. |
| [Uncache](#uncache) | Gets whether the package will be removed from the package cache. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## Cache Property {#cache}
Gets whether the package will be cached.
### Declaration
```cs
public bool Cache { get; set; }
```
## Execute Property {#execute}
Gets the planned execution action.
### Declaration
```cs
public ActionState Execute { get; set; }
```
## PackageId Property {#packageid}
Gets the identity of the package planned for.
### Declaration
```cs
public string PackageId { get; set; }
```
## Rollback Property {#rollback}
Gets the planned rollback action.
### Declaration
```cs
public ActionState Rollback { get; set; }
```
## Uncache Property {#uncache}
Gets whether the package will be removed from the package cache.
### Declaration
```cs
public bool Uncache { get; set; }
```
