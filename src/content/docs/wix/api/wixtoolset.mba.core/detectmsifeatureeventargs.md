---
title: DetectMsiFeatureEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.DetectMsiFeature»
## Properties
| Property | Description |
| ------ | ----------- |
| [FeatureId](#featureid) | Gets the identity of the feature detected. |
| [PackageId](#packageid) | Gets the identity of the feature's package detected. |
| [State](#state) | Gets the detected feature state. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## FeatureId Property {#featureid}
Gets the identity of the feature detected.
### Declaration
```cs
public string FeatureId { get; set; }
```
## PackageId Property {#packageid}
Gets the identity of the feature's package detected.
### Declaration
```cs
public string PackageId { get; set; }
```
## State Property {#state}
Gets the detected feature state.
### Declaration
```cs
public FeatureState State { get; set; }
```
