---
title: DetectBeginEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.DetectBegin»
## Properties
| Property | Description |
| ------ | ----------- |
| [Cached](#cached) | Gets whether the bundle is cached. |
| [PackageCount](#packagecount) | Gets the number of packages to detect. |
| [RegistrationType](#registrationtype) | Gets the bundle's registration state. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## Cached Property {#cached}
Gets whether the bundle is cached.
### Declaration
```cs
public bool Cached { get; set; }
```
## PackageCount Property {#packagecount}
Gets the number of packages to detect.
### Declaration
```cs
public int PackageCount { get; set; }
```
## RegistrationType Property {#registrationtype}
Gets the bundle's registration state.
### Declaration
```cs
public RegistrationType RegistrationType { get; set; }
```
