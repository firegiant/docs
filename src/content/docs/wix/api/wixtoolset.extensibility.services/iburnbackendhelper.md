---
title: IBurnBackendHelper Interface
---
Interface provided to help Burn backend extensions.
## Methods
| Method | Description |
| ------ | ----------- |
| [AddBootstrapperApplicationData(xml)](#addbootstrapperapplicationdata_xml) | Adds the given XML to the BootstrapperApplicationData manifest. |
| [AddBootstrapperApplicationData(symbol, symbolIdIsIdAttribute)](#addbootstrapperapplicationdata_symbol_symbolidisidattribute) | Adds an XML element for the given symbol to the BootstrapperApplicationData manifest. The symbol's name is used for the element's name. All of the symbol's fields are used for the element's attributes. |
| [AddBootstrapperExtensionData(extensionId, xml)](#addbootstrapperextensiondata_extensionid_xml) | Adds the given XML to the BootstrapperExtensionData manifest for the given bundle extension. |
| [AddBootstrapperExtensionData(extensionId, symbol, symbolIdIsIdAttribute)](#addbootstrapperextensiondata_extensionid_symbol_symbolidisidattribute) | Adds an XML element for the given symbol to the BootstrapperExtensionData manifest for the given bundle extension. The symbol's name is used for the element's name. All of the symbol's fields are used for the element's attributes. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## AddBootstrapperApplicationData(xml) Method {#addbootstrapperapplicationdata_xml}
Adds the given XML to the BootstrapperApplicationData manifest.
### Declaration
```cs
public void AddBootstrapperApplicationData(
  string xml
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| xml | string | A valid XML fragment. |
## AddBootstrapperApplicationData(symbol, symbolIdIsIdAttribute) Method {#addbootstrapperapplicationdata_symbol_symbolidisidattribute}
Adds an XML element for the given symbol to the BootstrapperApplicationData manifest. The symbol's name is used for the element's name. All of the symbol's fields are used for the element's attributes.
### Declaration
```cs
public void AddBootstrapperApplicationData(
  WixToolset.Data.IntermediateSymbol symbol,
  bool symbolIdIsIdAttribute
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| symbol | WixToolset.Data.IntermediateSymbol | The symbol to create the element from. |
| symbolIdIsIdAttribute | bool | If true and the symbol has an Id, then an Id attribute is created with a value of the symbol's Id. |
## AddBootstrapperExtensionData(extensionId, xml) Method {#addbootstrapperextensiondata_extensionid_xml}
Adds the given XML to the BootstrapperExtensionData manifest for the given bundle extension.
### Declaration
```cs
public void AddBootstrapperExtensionData(
  string extensionId,
  string xml
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| extensionId | string | The bundle extension's id. |
| xml | string | A valid XML fragment. |
## AddBootstrapperExtensionData(extensionId, symbol, symbolIdIsIdAttribute) Method {#addbootstrapperextensiondata_extensionid_symbol_symbolidisidattribute}
Adds an XML element for the given symbol to the BootstrapperExtensionData manifest for the given bundle extension. The symbol's name is used for the element's name. All of the symbol's fields are used for the element's attributes.
### Declaration
```cs
public void AddBootstrapperExtensionData(
  string extensionId,
  WixToolset.Data.IntermediateSymbol symbol,
  bool symbolIdIsIdAttribute
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| extensionId | string | The bundle extension's id. |
| symbol | WixToolset.Data.IntermediateSymbol | The symbol to create the element from. |
| symbolIdIsIdAttribute | bool | If true and the symbol has an Id, then an Id attribute is created with a value of the symbol's Id. |
