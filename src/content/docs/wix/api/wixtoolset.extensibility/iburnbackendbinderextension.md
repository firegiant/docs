---
title: IBurnBackendBinderExtension Interface
---
Interface all Burn backend extensions implement.
## Methods
| Method | Description |
| ------ | ----------- |
| [PostBackendBind(result)](#postbackendbind_result) | Called after output is bound into its final format. |
| [PreBackendBind()](#prebackendbind_nop) | Called before binding occurs. |
| [ResolveRelatedFile(source, relatedSource, type, sourceLineNumbers)](#resolverelatedfile_source_relatedsource_type_sourcelinenumbers) | Called to find a file related to another source in the authoring. For example, most often used to find cabinets and uncompressed files for an MSI package. |
| [ResolveUrl(url, fallbackUrl, packageId, payloadId, fileName)](#resolveurl_url_fallbackurl_packageid_payloadid_filename) | Called to customize the DownloadUrl provided in source cde. |
| [SymbolsFinalized(section)](#symbolsfinalized_section) | Called right before the output is bound into its final format. |
| [TryProcessSymbol(section, symbol)](#tryprocesssymbol_section_symbol) | Called for each extension symbol that hasn't been handled yet. Use IBurnBackendHelper to add data. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## PostBackendBind(result) Method {#postbackendbind_result}
Called after output is bound into its final format.
### Declaration
```cs
public void PostBackendBind(
  Data.IBindResult result
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| result | Data.IBindResult |  |
## PreBackendBind() Method {#prebackendbind_nop}
Called before binding occurs.
### Declaration
```cs
public void PreBackendBind()
```
## ResolveRelatedFile(source, relatedSource, type, sourceLineNumbers) Method {#resolverelatedfile_source_relatedsource_type_sourcelinenumbers}
Called to find a file related to another source in the authoring. For example, most often used to find cabinets and uncompressed files for an MSI package.
### Declaration
```cs
public Data.IResolveFileResult ResolveRelatedFile(
  string source,
  string relatedSource,
  string type,
  WixToolset.Data.SourceLineNumber sourceLineNumbers
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| source | string | Path to the source package. |
| relatedSource | string | Expected path to the related file. |
| type | string | Type of related file, such as "File" or "Cabinet" |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line number of source package. |
### Return value
`Data.IResolveFileResult`  `IResolveFileResult` if the related file was found, or null for default handling.
## ResolveUrl(url, fallbackUrl, packageId, payloadId, fileName) Method {#resolveurl_url_fallbackurl_packageid_payloadid_filename}
Called to customize the DownloadUrl provided in source cde.
### Declaration
```cs
public string ResolveUrl(
  string url,
  string fallbackUrl,
  string packageId,
  string payloadId,
  string fileName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| url | string | The value from the source code. May not actually be a URL. |
| fallbackUrl | string | The default URL if the extension does not return a value. |
| packageId | string | Identifier of the package. |
| payloadId | string | Identifier of the payload. |
| fileName | string | Filename of the payload. |
### Return value
`string` Url to override, or null to use default value.
## SymbolsFinalized(section) Method {#symbolsfinalized_section}
Called right before the output is bound into its final format.
### Declaration
```cs
public void SymbolsFinalized(
  WixToolset.Data.IntermediateSection section
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| section | WixToolset.Data.IntermediateSection | The finalized intermediate section. |
## TryProcessSymbol(section, symbol) Method {#tryprocesssymbol_section_symbol}
Called for each extension symbol that hasn't been handled yet. Use IBurnBackendHelper to add data.
### Declaration
```cs
public bool TryProcessSymbol(
  WixToolset.Data.IntermediateSection section,
  WixToolset.Data.IntermediateSymbol symbol
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| section | WixToolset.Data.IntermediateSection | The linked section. |
| symbol | WixToolset.Data.IntermediateSymbol | The current symbol. |
### Return value
`bool` True if the extension handled the symbol, false otherwise. The Burn backend will warn on all unhandled symbols.
