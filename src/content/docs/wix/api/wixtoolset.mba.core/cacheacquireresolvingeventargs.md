---
title: CacheAcquireResolvingEventArgs Class
---
EventArgs for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.CacheAcquireResolving» .
## Properties
| Property | Description |
| ------ | ----------- |
| [ChosenSearchPath](#chosensearchpath) | Gets or sets the index to «see P:WixToolset.Mba.Core.CacheAcquireResolvingEventArgs.SearchPaths» to use when «see P:WixToolset.Mba.Core.CancellableActionEventArgs`1.Action» is set to «see F:WixToolset.Mba.Core.CacheOperation.Copy» . |
| [DownloadUrl](#downloadurl) | Gets the optional URL to download container or payload. |
| [FoundLocal](#foundlocal) | Gets whether «see P:WixToolset.Mba.Core.CacheAcquireResolvingEventArgs.RecommendedSearchPath» indicates that a file was found at that search path. |
| [PackageOrContainerId](#packageorcontainerid) | Gets the identity of the package or container that is being acquired. |
| [PayloadContainerId](#payloadcontainerid) | Gets the optional identity of the container that contains the payload being acquired. |
| [PayloadId](#payloadid) | Gets the identity of the payload that is being acquired. |
| [RecommendedSearchPath](#recommendedsearchpath) | When «see P:WixToolset.Mba.Core.CacheAcquireResolvingEventArgs.FoundLocal» is true, the index to «see P:WixToolset.Mba.Core.CacheAcquireResolvingEventArgs.SearchPaths» for the recommended local file. |
| [SearchPaths](#searchpaths) | Gets the search paths used for source resolution. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## ChosenSearchPath Property {#chosensearchpath}
Gets or sets the index to «see P:WixToolset.Mba.Core.CacheAcquireResolvingEventArgs.SearchPaths» to use when «see P:WixToolset.Mba.Core.CancellableActionEventArgs`1.Action» is set to «see F:WixToolset.Mba.Core.CacheOperation.Copy» .
### Declaration
```cs
public int ChosenSearchPath { get; set; }
```
## DownloadUrl Property {#downloadurl}
Gets the optional URL to download container or payload.
### Declaration
```cs
public string DownloadUrl { get; set; }
```
## FoundLocal Property {#foundlocal}
Gets whether «see P:WixToolset.Mba.Core.CacheAcquireResolvingEventArgs.RecommendedSearchPath» indicates that a file was found at that search path.
### Declaration
```cs
public bool FoundLocal { get; set; }
```
## PackageOrContainerId Property {#packageorcontainerid}
Gets the identity of the package or container that is being acquired.
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
Gets the identity of the payload that is being acquired.
### Declaration
```cs
public string PayloadId { get; set; }
```
## RecommendedSearchPath Property {#recommendedsearchpath}
When «see P:WixToolset.Mba.Core.CacheAcquireResolvingEventArgs.FoundLocal» is true, the index to «see P:WixToolset.Mba.Core.CacheAcquireResolvingEventArgs.SearchPaths» for the recommended local file.
### Declaration
```cs
public int RecommendedSearchPath { get; set; }
```
## SearchPaths Property {#searchpaths}
Gets the search paths used for source resolution.
### Declaration
```cs
public System.String[] SearchPaths { get; set; }
```
