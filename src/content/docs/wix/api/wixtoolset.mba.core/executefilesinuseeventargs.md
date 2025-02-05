---
title: ExecuteFilesInUseEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.ExecuteFilesInUse»
## Properties
| Property | Description |
| ------ | ----------- |
| [Files](#files) | Gets the list of files in use. |
| [PackageId](#packageid) | Gets the identity of the package that yielded the files in use message. |
| [Source](#source) | Gets the source of the message. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## Files Property {#files}
Gets the list of files in use.
### Declaration
```cs
public IList<System.String> Files { get; set; }
```
## PackageId Property {#packageid}
Gets the identity of the package that yielded the files in use message.
### Declaration
```cs
public string PackageId { get; set; }
```
## Source Property {#source}
Gets the source of the message.
### Declaration
```cs
public FilesInUseType Source { get; set; }
```
