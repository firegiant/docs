---
title: CachePackageBeginEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.CachePackageBegin»
## Properties
| Property | Description |
| ------ | ----------- |
| [CachePayloads](#cachepayloads) | Gets number of payloads to be cached. |
| [PackageCacheSize](#packagecachesize) | Gets the size on disk required by the specific package. |
| [PackageId](#packageid) | Gets the identity of the package that is being cached. |
| [Vital](#vital) | If caching a package is not vital, then acquisition will be skipped unless the BA opts in through «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.CachePackageNonVitalValidationFailure» . |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## CachePayloads Property {#cachepayloads}
Gets number of payloads to be cached.
### Declaration
```cs
public System.Int64 CachePayloads { get; set; }
```
## PackageCacheSize Property {#packagecachesize}
Gets the size on disk required by the specific package.
### Declaration
```cs
public System.Int64 PackageCacheSize { get; set; }
```
## PackageId Property {#packageid}
Gets the identity of the package that is being cached.
### Declaration
```cs
public string PackageId { get; set; }
```
## Vital Property {#vital}
If caching a package is not vital, then acquisition will be skipped unless the BA opts in through «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.CachePackageNonVitalValidationFailure» .
### Declaration
```cs
public bool Vital { get; set; }
```
