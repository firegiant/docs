---
title: IBackend Interface
---
Interface all backends implement.
## Methods
| Method | Description |
| ------ | ----------- |
| [Bind(context)](#bind_context) | Bind the intermediate into the final output. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Bind(context) Method {#bind_context}
Bind the intermediate into the final output.
### Declaration
```cs
public Data.IBindResult Bind(
  Data.IBindContext context
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| context | Data.IBindContext | Bind context. |
### Return value
`Data.IBindResult` Result of the bind operation.
