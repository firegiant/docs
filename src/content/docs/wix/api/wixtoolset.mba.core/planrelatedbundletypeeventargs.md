---
title: PlanRelatedBundleTypeEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PlanRelatedBundleType»
## Properties
| Property | Description |
| ------ | ----------- |
| [BundleId](#bundleid) | Gets the identity of the bundle to plan for. |
| [RecommendedType](#recommendedtype) | Gets the recommended plan type for the bundle. |
| [Type](#type) | Gets or sets the plan type for the bundle. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## BundleId Property {#bundleid}
Gets the identity of the bundle to plan for.
### Declaration
```cs
public string BundleId { get; set; }
```
## RecommendedType Property {#recommendedtype}
Gets the recommended plan type for the bundle.
### Declaration
```cs
public RelatedBundlePlanType RecommendedType { get; set; }
```
## Type Property {#type}
Gets or sets the plan type for the bundle.
### Declaration
```cs
public RelatedBundlePlanType Type { get; set; }
```
