---
title: IntermediateSection Class
---
Section in an intermediate file.
## Methods
| Method | Description |
| ------ | ----------- |
| [AssignToLibrary(libraryId)](#assigntolibrary_libraryid) | Assigns the section to a library. |
| [RemoveSymbol(symbol)](#removesymbol_symbol) | Removes a symbol from the section. |
## Properties
| Property | Description |
| ------ | ----------- |
| [CompilationId](#compilationid) | Gets and sets the identifier of the compilation of the source file containing the section. |
| [Id](#id) | Gets the identifier for the section. |
| [LibraryId](#libraryid) | Gets and sets the identifier of the library that combined the section. |
| [Symbols](#symbols) | Symbols in the section. |
| [Type](#type) | Gets the type of the section. |
`WixToolset.Data.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## AssignToLibrary(libraryId) Method {#assigntolibrary_libraryid}
Assigns the section to a library.
### Declaration
```cs
public IntermediateSection AssignToLibrary(
  string libraryId
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| libraryId | string | Identifier of the library. |
## RemoveSymbol(symbol) Method {#removesymbol_symbol}
Removes a symbol from the section.
### Declaration
```cs
public bool RemoveSymbol(
  IntermediateSymbol symbol
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| symbol | IntermediateSymbol | Symbol to remove. |
### Return value
`bool` True if the symbol was removed; otherwise false.
## CompilationId Property {#compilationid}
Gets and sets the identifier of the compilation of the source file containing the section.
### Declaration
```cs
public string CompilationId { get; set; }
```
## Id Property {#id}
Gets the identifier for the section.
### Declaration
```cs
public string Id { get; set; }
```
## LibraryId Property {#libraryid}
Gets and sets the identifier of the library that combined the section.
### Declaration
```cs
public string LibraryId { get; set; }
```
## Symbols Property {#symbols}
Symbols in the section.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Data.IntermediateSymbol> Symbols { get; set; }
```
## Type Property {#type}
Gets the type of the section.
### Declaration
```cs
public SectionType Type { get; set; }
```
