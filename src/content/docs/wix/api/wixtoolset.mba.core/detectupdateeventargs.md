---
title: DetectUpdateEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.DetectUpdate»
## Properties
| Property | Description |
| ------ | ----------- |
| [Content](#content) | Gets the content of the updated bundle. |
| [ContentType](#contenttype) | Gets the content type of the content of the updated bundle. |
| [Hash](#hash) | File hash of the updated bundle. |
| [HashAlgorithm](#hashalgorithm) | The algorithm of the updated bundle's hash. |
| [Size](#size) | Gets the size of the updated bundle. |
| [StopProcessingUpdates](#stopprocessingupdates) | Tells the engine to stop giving the rest of the updates found in the feed. |
| [Summary](#summary) | Gets the summary of the updated bundle. |
| [Title](#title) | Gets the title of the the updated bundle. |
| [UpdateLocation](#updatelocation) | Gets the identity of the bundle to detect. |
| [Version](#version) | Gets the version of the updated bundle. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## Content Property {#content}
Gets the content of the updated bundle.
### Declaration
```cs
public string Content { get; set; }
```
## ContentType Property {#contenttype}
Gets the content type of the content of the updated bundle.
### Declaration
```cs
public string ContentType { get; set; }
```
## Hash Property {#hash}
File hash of the updated bundle.
### Declaration
```cs
public string Hash { get; set; }
```
## HashAlgorithm Property {#hashalgorithm}
The algorithm of the updated bundle's hash.
### Declaration
```cs
public UpdateHashType HashAlgorithm { get; set; }
```
## Size Property {#size}
Gets the size of the updated bundle.
### Declaration
```cs
public System.Int64 Size { get; set; }
```
## StopProcessingUpdates Property {#stopprocessingupdates}
Tells the engine to stop giving the rest of the updates found in the feed.
### Declaration
```cs
public bool StopProcessingUpdates { get; set; }
```
## Summary Property {#summary}
Gets the summary of the updated bundle.
### Declaration
```cs
public string Summary { get; set; }
```
## Title Property {#title}
Gets the title of the the updated bundle.
### Declaration
```cs
public string Title { get; set; }
```
## UpdateLocation Property {#updatelocation}
Gets the identity of the bundle to detect.
### Declaration
```cs
public string UpdateLocation { get; set; }
```
## Version Property {#version}
Gets the version of the updated bundle.
### Declaration
```cs
public string Version { get; set; }
```
