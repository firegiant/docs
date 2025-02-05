---
title: DetectPackageCompleteEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.DetectPackageComplete» .
## Properties
| Property | Description |
| ------ | ----------- |
| [Cached](#cached) | Gets whether any part of the package is cached. |
| [PackageId](#packageid) | Gets the identity of the package detected. |
| [State](#state) | Gets the state of the specified package. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## Cached Property {#cached}
Gets whether any part of the package is cached.
### Declaration
```cs
public bool Cached { get; set; }
```
## PackageId Property {#packageid}
Gets the identity of the package detected.
### Declaration
```cs
public string PackageId { get; set; }
```
## State Property {#state}
Gets the state of the specified package.
### Declaration
```cs
public PackageState State { get; set; }
```
