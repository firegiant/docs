---
title: ILayoutExtension Interface
---
Interface all layout extensions implement.
## Methods
| Method | Description |
| ------ | ----------- |
| [PostLayout()](#postlayout_nop) | Called after all layout occurs. |
| [PreLayout()](#prelayout_nop) | Called before layout occurs. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## PostLayout() Method {#postlayout_nop}
Called after all layout occurs.
### Declaration
```cs
public void PostLayout()
```
## PreLayout() Method {#prelayout_nop}
Called before layout occurs.
### Declaration
```cs
public void PreLayout()
```
