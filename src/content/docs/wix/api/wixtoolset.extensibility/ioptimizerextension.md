---
title: IOptimizerExtension Interface
---
Interface that all optimizer extensions implement.
## Methods
| Method | Description |
| ------ | ----------- |
| [PostOptimize()](#postoptimize_nop) | Called after all files have been compiled, after built-in optimizations, and before all sections are linked into a single section. |
| [PreOptimize()](#preoptimize_nop) | Called after all files have been compiled, before built-in optimizations, and before all sections are linked into a single section. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## PostOptimize() Method {#postoptimize_nop}
Called after all files have been compiled, after built-in optimizations, and before all sections are linked into a single section.
### Declaration
```cs
public void PostOptimize()
```
## PreOptimize() Method {#preoptimize_nop}
Called after all files have been compiled, before built-in optimizations, and before all sections are linked into a single section.
### Declaration
```cs
public void PreOptimize()
```
