---
title: ICompilerExtension Interface
---
Interface all compiler extensions implement.
## Methods
| Method | Description |
| ------ | ----------- |
| [PostCompile()](#postcompile_nop) | Called at the end of the compilation of a source file. |
| [PreCompile()](#precompile_nop) | Called at the beginning of the compilation of a source file. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Namespace](#namespace) | Gets the schema namespace for this extension. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## PostCompile() Method {#postcompile_nop}
Called at the end of the compilation of a source file.
### Declaration
```cs
public void PostCompile()
```
## PreCompile() Method {#precompile_nop}
Called at the beginning of the compilation of a source file.
### Declaration
```cs
public void PreCompile()
```
## Namespace Property {#namespace}
Gets the schema namespace for this extension.
### Declaration
```cs
public System.Xml.Linq.XNamespace Namespace { get; set; }
```
