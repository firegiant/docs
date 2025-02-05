---
title: IBindPath Interface
---
Interface for a bind path.
## Properties
| Property | Description |
| ------ | ----------- |
| [Name](#name) | Name of the bind path or String.Empty if the path is unnamed. |
| [Path](#path) | Path for the bind path. |
| [Stage](#stage) | Stage for the bind path. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Name Property {#name}
Name of the bind path or String.Empty if the path is unnamed.
### Declaration
```cs
public string Name { get; set; }
```
## Path Property {#path}
Path for the bind path.
### Declaration
```cs
public string Path { get; set; }
```
## Stage Property {#stage}
Stage for the bind path.
### Declaration
```cs
public BindStage Stage { get; set; }
```
