---
title: PlanPackageBeginEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PlanPackageBegin»
## Properties
| Property | Description |
| ------ | ----------- |
| [Cached](#cached) | Gets whether any part of the package is cached. |
| [CacheType](#cachetype) | Gets or sets the requested cache type for the package. |
| [CurrentState](#currentstate) | Gets the current state of the package. |
| [InstallCondition](#installcondition) | Gets the evaluated result of the package's install condition. |
| [PackageId](#packageid) | Gets the identity of the package to plan for. |
| [RecommendedCacheType](#recommendedcachetype) | The authored cache type of the package. |
| [RecommendedState](#recommendedstate) | Gets the recommended requested state for the package. |
| [RepairCondition](#repaircondition) | Gets the evaluated result of the package's repair condition. |
| [State](#state) | Gets or sets the requested state for the package. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## Cached Property {#cached}
Gets whether any part of the package is cached.
### Declaration
```cs
public bool Cached { get; set; }
```
## CacheType Property {#cachetype}
Gets or sets the requested cache type for the package.
### Declaration
```cs
public BOOTSTRAPPER_CACHE_TYPE CacheType { get; set; }
```
## CurrentState Property {#currentstate}
Gets the current state of the package.
### Declaration
```cs
public PackageState CurrentState { get; set; }
```
## InstallCondition Property {#installcondition}
Gets the evaluated result of the package's install condition.
### Declaration
```cs
public BOOTSTRAPPER_PACKAGE_CONDITION_RESULT InstallCondition { get; set; }
```
## PackageId Property {#packageid}
Gets the identity of the package to plan for.
### Declaration
```cs
public string PackageId { get; set; }
```
## RecommendedCacheType Property {#recommendedcachetype}
The authored cache type of the package.
### Declaration
```cs
public BOOTSTRAPPER_CACHE_TYPE RecommendedCacheType { get; set; }
```
## RecommendedState Property {#recommendedstate}
Gets the recommended requested state for the package.
### Declaration
```cs
public RequestState RecommendedState { get; set; }
```
## RepairCondition Property {#repaircondition}
Gets the evaluated result of the package's repair condition.
### Declaration
```cs
public BOOTSTRAPPER_PACKAGE_CONDITION_RESULT RepairCondition { get; set; }
```
## State Property {#state}
Gets or sets the requested state for the package.
### Declaration
```cs
public RequestState State { get; set; }
```
