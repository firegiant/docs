---
title: IWixBranding Interface
---
WiX branding interface.
## Methods
| Method | Description |
| ------ | ----------- |
| [GetCreatingApplication()](#getcreatingapplication_nop) | Gets the value for CreatingApplication field (MSI Summary Information Stream). |
| [ReplacePlaceholders(original, assembly)](#replaceplaceholders_original_assembly) | Replaces branding placeholders in original string. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## GetCreatingApplication() Method {#getcreatingapplication_nop}
Gets the value for CreatingApplication field (MSI Summary Information Stream).
### Declaration
```cs
public string GetCreatingApplication()
```
### Return value
`string` String for creating application.
## ReplacePlaceholders(original, assembly) Method {#replaceplaceholders_original_assembly}
Replaces branding placeholders in original string.
### Declaration
```cs
public string ReplacePlaceholders(
  string original,
  System.Reflection.Assembly assembly
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| original | string | Original string containing placeholders to replace. |
| assembly | System.Reflection.Assembly | Optional assembly with branding information, if not specified core branding is used. |
