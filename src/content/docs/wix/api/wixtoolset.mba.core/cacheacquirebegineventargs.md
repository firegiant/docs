---
title: CacheAcquireBeginEventArgs Class
---
EventArgs for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.CacheAcquireBegin» .
## Properties
| Property | Description |
| ------ | ----------- |
| [DownloadUrl](#downloadurl) | Gets the optional URL to download container or payload. |
| [PackageOrContainerId](#packageorcontainerid) | Gets the identifier of the container or package. |
| [PayloadContainerId](#payloadcontainerid) | Gets the optional identity of the container that contains the payload being acquired. |
| [PayloadId](#payloadid) | Gets the identifier of the payload (if acquiring a payload). |
| [Source](#source) | Gets the source of the container or payload. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## DownloadUrl Property {#downloadurl}
Gets the optional URL to download container or payload.
### Declaration
```cs
public string DownloadUrl { get; set; }
```
## PackageOrContainerId Property {#packageorcontainerid}
Gets the identifier of the container or package.
### Declaration
```cs
public string PackageOrContainerId { get; set; }
```
## PayloadContainerId Property {#payloadcontainerid}
Gets the optional identity of the container that contains the payload being acquired.
### Declaration
```cs
public string PayloadContainerId { get; set; }
```
## PayloadId Property {#payloadid}
Gets the identifier of the payload (if acquiring a payload).
### Declaration
```cs
public string PayloadId { get; set; }
```
## Source Property {#source}
Gets the source of the container or payload.
### Declaration
```cs
public string Source { get; set; }
```
