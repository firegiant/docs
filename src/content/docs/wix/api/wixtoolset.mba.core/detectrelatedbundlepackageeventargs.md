---
title: DetectRelatedBundlePackageEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.DetectRelatedBundlePackage»
## Properties
| Property | Description |
| ------ | ----------- |
| [PackageId](#packageid) | Gets the identity of the product's package detected. |
| [PerMachine](#permachine) | Gets whether the detected bundle is per machine. |
| [ProductCode](#productcode) | Gets the identity of the related bundle detected. |
| [RelationType](#relationtype) | Gets the relationship type of the related bundle. |
| [Version](#version) | Gets the version of the related bundle detected. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## PackageId Property {#packageid}
Gets the identity of the product's package detected.
### Declaration
```cs
public string PackageId { get; set; }
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
