---
title: IResolveFileResult Interface
---
Result of resolving a file.
## Properties
| Property | Description |
| ------ | ----------- |
| [CheckedPaths](#checkedpaths) | Collection of paths checked to find file. |
| [Path](#path) | Path to found file, if found. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CheckedPaths Property {#checkedpaths}
Collection of paths checked to find file.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<System.String> CheckedPaths { get; set; }
```
## Path Property {#path}
Path to found file, if found.
### Declaration
```cs
public string Path { get; set; }
```
