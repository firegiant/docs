---
title: CacheAcquireCompleteEventArgs Class
---
EventArgs for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.CacheAcquireComplete» .
## Properties
| Property | Description |
| ------ | ----------- |
| [PackageOrContainerId](#packageorcontainerid) | Gets the identifier of the container or package. |
| [PayloadId](#payloadid) | Gets the identifier of the payload (if acquiring a payload). |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## PackageOrContainerId Property {#packageorcontainerid}
Gets the identifier of the container or package.
### Declaration
```cs
public string PackageOrContainerId { get; set; }
```
## PayloadId Property {#payloadid}
Gets the identifier of the payload (if acquiring a payload).
### Declaration
```cs
public string PayloadId { get; set; }
```
