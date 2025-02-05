---
title: DetectForwardCompatibleBundleEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.DetectForwardCompatibleBundle»
## Properties
| Property | Description |
| ------ | ----------- |
| [BundleId](#bundleid) | Gets the identity of the forward compatible bundle detected. |
| [BundleTag](#bundletag) | Gets the tag of the forward compatible bundle. |
| [MissingFromCache](#missingfromcache) | Whether the forward compatible bundle is missing from the package cache. |
| [PerMachine](#permachine) | Gets whether the detected forward compatible bundle is per machine. |
| [RelationType](#relationtype) | Gets the relationship type of the forward compatible bundle. |
| [Version](#version) | Gets the version of the forward compatible bundle detected. |
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
## MissingFromCache Property {#missingfromcache}
Whether the forward compatible bundle is missing from the package cache.
### Declaration
```cs
public bool MissingFromCache { get; set; }
```
## PerMachine Property {#permachine}
Gets whether the detected forward compatible bundle is per machine.
### Declaration
```cs
public bool PerMachine { get; set; }
```
## RelationType Property {#relationtype}
Gets the relationship type of the forward compatible bundle.
### Declaration
```cs
public RelationType RelationType { get; set; }
```
## Version Property {#version}
Gets the version of the forward compatible bundle detected.
### Declaration
```cs
public string Version { get; set; }
```
