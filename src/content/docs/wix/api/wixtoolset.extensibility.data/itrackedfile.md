---
title: ITrackedFile Interface
---
Interface used to track all files processed.
## Properties
| Property | Description |
| ------ | ----------- |
| [Path](#path) | Path to tracked file. |
| [SourceLineNumbers](#sourcelinenumbers) | Optional source line numbers where the tracked file was created. |
| [Type](#type) | Type of tracked file. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Path Property {#path}
Path to tracked file.
### Declaration
```cs
public string Path { get; set; }
```
## SourceLineNumbers Property {#sourcelinenumbers}
Optional source line numbers where the tracked file was created.
### Declaration
```cs
public WixToolset.Data.SourceLineNumber SourceLineNumbers { get; set; }
```
## Type Property {#type}
Type of tracked file.
### Declaration
```cs
public TrackedFileType Type { get; set; }
```
