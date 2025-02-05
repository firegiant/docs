---
title: IntermediateSymbol Class
---
Intermediate symbol.
## Methods
| Method | Description |
| ------ | ----------- |
| [AddTag(add)](#addtag_add) | Add a custom tag to the symbol. |
| [HasTag(has)](#hastag_has) | Tests whether a symbol has a tag. |
| [RemoveTag(remove)](#removetag_remove) | Removes a tag from the symbol. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Definition](#definition) | Gets the symbol's definition. |
| [Fields](#fields) | Gets the symbol's fields. |
| [Id](#id) | Gets the optional identifier for the symbol. |
| [Item](#item) | Direct access by index to the symbol's fields. |
| [SourceLineNumbers](#sourcelinenumbers) | Gets the optional source line number of the symbol. |
`WixToolset.Data.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## AddTag(add) Method {#addtag_add}
Add a custom tag to the symbol.
### Declaration
```cs
public bool AddTag(
  string add
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| add | string | String tag to add to the symbol. |
### Return value
`bool` True if the tag was added; otherwise false if th tag was already present.
## HasTag(has) Method {#hastag_has}
Tests whether a symbol has a tag.
### Declaration
```cs
public bool HasTag(
  string has
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| has | string | String tag to find. |
### Return value
`bool` True if the symbol has the tag; otherwise false.
## RemoveTag(remove) Method {#removetag_remove}
Removes a tag from the symbol.
### Declaration
```cs
public bool RemoveTag(
  string remove
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| remove | string | String tag to remove. |
### Return value
`bool` True if the tag was removed; otherwise false if the tag was not present.
## Definition Property {#definition}
Gets the symbol's definition.
### Declaration
```cs
public IntermediateSymbolDefinition Definition { get; set; }
```
## Fields Property {#fields}
Gets the symbol's fields.
### Declaration
```cs
public IntermediateField[] Fields { get; set; }
```
## Id Property {#id}
Gets the optional identifier for the symbol.
### Declaration
```cs
public Identifier Id { get; set; }
```
## Item Property {#item}
Direct access by index to the symbol's fields.
### Declaration
```cs
public IntermediateField Item[
  int index
] { get; set; }
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| index | int | Index of the field to access. |
## SourceLineNumbers Property {#sourcelinenumbers}
Gets the optional source line number of the symbol.
### Declaration
```cs
public SourceLineNumber SourceLineNumbers { get; set; }
```
