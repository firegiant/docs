---
title: LocalizedControl Class
---

## Methods
| Method | Description |
| ------ | ----------- |
| [GetKey()](#getkey_nop) | Get key for a localized control. |
| [GetKey(dialog, control)](#getkey_dialog_control) | Get key for a localized control. |
`WixToolset.Data.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## GetKey() Method {#getkey_nop}
Get key for a localized control.
### Declaration
```cs
public string GetKey()
```
### Return value
`string` The localized control id.
## GetKey(dialog, control) Method {#getkey_dialog_control}
Get key for a localized control.
### Declaration
```cs
public static string GetKey(
  string dialog,
  string control
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| dialog | string | The optional id of the control's dialog. |
| control | string | The id of the control. |
### Return value
`string` The localized control id.
