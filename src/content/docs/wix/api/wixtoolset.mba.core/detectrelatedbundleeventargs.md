---
title: DetectRelatedBundleEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.DetectRelatedBundle»
## Properties
| Property | Description |
| ------ | ----------- |
| [BundleTag](#bundletag) | Gets the tag of the related package bundle. |
| [MissingFromCache](#missingfromcache) | Whether the related bundle is missing from the package cache. |
| [PerMachine](#permachine) | Gets whether the detected bundle is per machine. |
| [ProductCode](#productcode) | Gets the identity of the related bundle detected. |
| [RelationType](#relationtype) | Gets the relationship type of the related bundle. |
| [Version](#version) | Gets the version of the related bundle detected. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## BundleTag Property {#bundletag}
Gets the tag of the related package bundle.
### Declaration
```cs
public string BundleTag { get; set; }
```
## MissingFromCache Property {#missingfromcache}
Whether the related bundle is missing from the package cache.
### Declaration
```cs
public bool MissingFromCache { get; set; }
```
## PerMachine Property {#permachine}
Gets whether the detected bundle is per machine.
### Declaration
```cs
public bool PerMachine { get; set; }
```
## ProductCode Property {#productcode}
Gets the identity of the related bundle detected.
### Declaration
```cs
public string ProductCode { get; set; }
```
## RelationType Property {#relationtype}
Gets the relationship type of the related bundle.
### Declaration
```cs
public RelationType RelationType { get; set; }
```
## Version Property {#version}
Gets the version of the related bundle detected.
### Declaration
```cs
public string Version { get; set; }
```
