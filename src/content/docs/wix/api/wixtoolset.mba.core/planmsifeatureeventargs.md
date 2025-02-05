---
title: PlanMsiFeatureEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PlanMsiFeature»
## Properties
| Property | Description |
| ------ | ----------- |
| [FeatureId](#featureid) | Gets the identity of the feature to plan. |
| [PackageId](#packageid) | Gets the identity of the feature's package to plan. |
| [RecommendedState](#recommendedstate) | Gets the recommended feature state to use by planning. |
| [State](#state) | Gets or sets the feature state to use by planning. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## FeatureId Property {#featureid}
Gets the identity of the feature to plan.
### Declaration
```cs
public string FeatureId { get; set; }
```
## PackageId Property {#packageid}
Gets the identity of the feature's package to plan.
### Declaration
```cs
public string PackageId { get; set; }
```
## RecommendedState Property {#recommendedstate}
Gets the recommended feature state to use by planning.
### Declaration
```cs
public FeatureState RecommendedState { get; set; }
```
## State Property {#state}
Gets or sets the feature state to use by planning.
### Declaration
```cs
public FeatureState State { get; set; }
```
