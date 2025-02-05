---
title: ILinkerExtension Interface
---
Interface all linker extensions implement.
## Methods
| Method | Description |
| ------ | ----------- |
| [PostLink()](#postlink_nop) | Called after all linking occurs. |
| [PreLink()](#prelink_nop) | Called before linking occurs. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## PostLink() Method {#postlink_nop}
Called after all linking occurs.
### Declaration
```cs
public void PostLink()
```
## PreLink() Method {#prelink_nop}
Called before linking occurs.
### Declaration
```cs
public void PreLink()
```
