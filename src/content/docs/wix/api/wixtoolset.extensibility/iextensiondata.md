---
title: IExtensionData Interface
---
Interface extensions implement to provide data.
## Methods
| Method | Description |
| ------ | ----------- |
| [GetLibrary(symbolDefinitions)](#getlibrary_symboldefinitions) | Gets the library associated with this extension. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## GetLibrary(symbolDefinitions) Method {#getlibrary_symboldefinitions}
Gets the library associated with this extension.
### Declaration
```cs
public WixToolset.Data.Intermediate GetLibrary(
  WixToolset.Data.ISymbolDefinitionCreator symbolDefinitions
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| symbolDefinitions | WixToolset.Data.ISymbolDefinitionCreator | The symbol definitions to use while loading the library. |
### Return value
`WixToolset.Data.Intermediate` The library for this extension or null if there is no library.
