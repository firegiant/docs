---
title: IBinderExtension Interface
---
Interface all binder extensions implement.
## Methods
| Method | Description |
| ------ | ----------- |
| [PostBind()](#postbind_nop) | Called after all binding occurs. |
| [PreBind()](#prebind_nop) | Called before binding occurs. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## PostBind() Method {#postbind_nop}
Called after all binding occurs.
### Declaration
```cs
public void PostBind()
```
## PreBind() Method {#prebind_nop}
Called before binding occurs.
### Declaration
```cs
public void PreBind()
```
