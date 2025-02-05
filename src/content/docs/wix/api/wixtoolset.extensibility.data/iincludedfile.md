---
title: IIncludedFile Interface
---
Interface for an included file.
## Properties
| Property | Description |
| ------ | ----------- |
| [Path](#path) | Gets the full path of the included file. |
| [SourceLineNumbers](#sourcelinenumbers) | Gets the source line numbers. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Path Property {#path}
Gets the full path of the included file.
### Declaration
```cs
public string Path { get; set; }
```
## SourceLineNumbers Property {#sourcelinenumbers}
Gets the source line numbers.
### Declaration
```cs
public WixToolset.Data.SourceLineNumber SourceLineNumbers { get; set; }
```
