---
title: ShortcutTarget Struct
---
Holds information about the target of a shortcut file.
## Methods
| Method | Description |
| ------ | ----------- |
| [Equals(obj)](#equals_obj) | Tests whether two shortcut targets have the same product code, feature, and/or component code. |
| [GetHashCode()](#gethashcode_nop) | Generates a hash code using all parts of the shortcut target. |
## Properties
| Property | Description |
| ------ | ----------- |
| [ComponentCode](#componentcode) | Gets the target component code of the shortcut, or null if not available. |
| [Feature](#feature) | Gets the name of the target feature of the shortcut, or null if not available. |
| [ProductCode](#productcode) | Gets the target product code of the shortcut, or null if not available. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Equals(obj) Method {#equals_obj}
Tests whether two shortcut targets have the same product code, feature, and/or component code.
### Declaration
```cs
public bool Equals(
  System.Object obj
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| obj | System.Object | The shortcut target to compare to the current object. |
### Return value
`bool` True if _obj_ is a shortcut target and all parts of the targets are the same, else false.
## GetHashCode() Method {#gethashcode_nop}
Generates a hash code using all parts of the shortcut target.
### Declaration
```cs
public int GetHashCode()
```
### Return value
`int` An integer suitable for hashing the shortcut target.
## ComponentCode Property {#componentcode}
Gets the target component code of the shortcut, or null if not available.
### Declaration
```cs
public string ComponentCode { get; set; }
```
## Feature Property {#feature}
Gets the name of the target feature of the shortcut, or null if not available.
### Declaration
```cs
public string Feature { get; set; }
```
## ProductCode Property {#productcode}
Gets the target product code of the shortcut, or null if not available.
### Declaration
```cs
public string ProductCode { get; set; }
```
