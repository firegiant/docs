---
title: IResolverExtension Interface
---
Interface all resolver extensions implement.
## Methods
| Method | Description |
| ------ | ----------- |
| [PostResolve()](#postresolve_nop) | Called after all resolving occurs. |
| [PreResolve()](#preresolve_nop) | Called before resolving occurs. |
| [ResolveFile()](#resolvefile_nop) | Called to attempt to resolve source to a file. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## PostResolve() Method {#postresolve_nop}
Called after all resolving occurs.
### Declaration
```cs
public void PostResolve()
```
## PreResolve() Method {#preresolve_nop}
Called before resolving occurs.
### Declaration
```cs
public void PreResolve()
```
## ResolveFile() Method {#resolvefile_nop}
Called to attempt to resolve source to a file.
### Declaration
```cs
public Data.IResolveFileResult ResolveFile()
```
