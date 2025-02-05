---
title: PlanRestoreRelatedBundleEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PlanRestoreRelatedBundle»
## Properties
| Property | Description |
| ------ | ----------- |
| [BundleId](#bundleid) | Gets the identity of the bundle to plan for. |
| [RecommendedState](#recommendedstate) | Gets the recommended requested state for the bundle. |
| [State](#state) | Gets or sets the requested state for the bundle. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## BundleId Property {#bundleid}
Gets the identity of the bundle to plan for.
### Declaration
```cs
public string BundleId { get; set; }
```
## RecommendedState Property {#recommendedstate}
Gets the recommended requested state for the bundle.
### Declaration
```cs
public RequestState RecommendedState { get; set; }
```
## State Property {#state}
Gets or sets the requested state for the bundle.
### Declaration
```cs
public RequestState State { get; set; }
```
