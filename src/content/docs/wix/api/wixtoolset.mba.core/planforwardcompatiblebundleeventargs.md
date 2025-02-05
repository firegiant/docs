---
title: PlanForwardCompatibleBundleEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PlanForwardCompatibleBundle»
## Properties
| Property | Description |
| ------ | ----------- |
| [BundleId](#bundleid) | Gets the identity of the forward compatible bundle detected. |
| [BundleTag](#bundletag) | Gets the tag of the forward compatible bundle. |
| [IgnoreBundle](#ignorebundle) | Gets or sets whether the engine will use the forward compatible bundle. |
| [PerMachine](#permachine) | Gets whether the forward compatible bundle is per machine. |
| [RecommendedIgnoreBundle](#recommendedignorebundle) | Gets the recommendation of whether the engine should use the forward compatible bundle. |
| [RelationType](#relationtype) | Gets the relationship type of the forward compatible bundle. |
| [Version](#version) | Gets the version of the forward compatible bundle. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## BundleId Property {#bundleid}
Gets the identity of the forward compatible bundle detected.
### Declaration
```cs
public string BundleId { get; set; }
```
## BundleTag Property {#bundletag}
Gets the tag of the forward compatible bundle.
### Declaration
```cs
public string BundleTag { get; set; }
```
## IgnoreBundle Property {#ignorebundle}
Gets or sets whether the engine will use the forward compatible bundle.
### Declaration
```cs
public bool IgnoreBundle { get; set; }
```
## PerMachine Property {#permachine}
Gets whether the forward compatible bundle is per machine.
### Declaration
```cs
public bool PerMachine { get; set; }
```
## RecommendedIgnoreBundle Property {#recommendedignorebundle}
Gets the recommendation of whether the engine should use the forward compatible bundle.
### Declaration
```cs
public bool RecommendedIgnoreBundle { get; set; }
```
## RelationType Property {#relationtype}
Gets the relationship type of the forward compatible bundle.
### Declaration
```cs
public RelationType RelationType { get; set; }
```
## Version Property {#version}
Gets the version of the forward compatible bundle.
### Declaration
```cs
public string Version { get; set; }
```
