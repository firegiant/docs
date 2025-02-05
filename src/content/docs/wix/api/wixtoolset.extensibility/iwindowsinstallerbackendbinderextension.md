---
title: IWindowsInstallerBackendBinderExtension Interface
---
Interface all binder extensions implement.
## Methods
| Method | Description |
| ------ | ----------- |
| [PostBackendBind(result)](#postbackendbind_result) | Called after all output changes occur and right before the output is bound into its final format. |
| [PreBackendBind()](#prebackendbind_nop) | Called before binding occurs. |
| [ResolveMedia(mediaSymbol, mediaLayoutDirectory, layoutDirectory)](#resolvemedia_mediasymbol_medialayoutdirectory_layoutdirectory) | Override layout location for a media. |
| [SymbolsFinalized(section)](#symbolsfinalized_section) | Extension can process the intermediate before the Windows Installer data is created. |
| [TryProcessSymbol(section, symbol, data, tableDefinitions)](#tryprocesssymbol_section_symbol_data_tabledefinitions) | Called for each extension symbol that hasn't been handled yet. |
## Properties
| Property | Description |
| ------ | ----------- |
| [TableDefinitions](#tabledefinitions) | Table definitions provided by the extension. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## PostBackendBind(result) Method {#postbackendbind_result}
Called after all output changes occur and right before the output is bound into its final format.
### Declaration
```cs
public void PostBackendBind(
  Data.IBindResult result
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| result | Data.IBindResult | Bind result to process. |
## PreBackendBind() Method {#prebackendbind_nop}
Called before binding occurs.
### Declaration
```cs
public void PreBackendBind()
```
## ResolveMedia(mediaSymbol, mediaLayoutDirectory, layoutDirectory) Method {#resolvemedia_mediasymbol_medialayoutdirectory_layoutdirectory}
Override layout location for a media.
### Declaration
```cs
public string ResolveMedia(
  WixToolset.Data.Symbols.MediaSymbol mediaSymbol,
  string mediaLayoutDirectory,
  string layoutDirectory
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| mediaSymbol | WixToolset.Data.Symbols.MediaSymbol | Media symbol. |
| mediaLayoutDirectory | string | Default media specific layout directory. |
| layoutDirectory | string | Default overall layout directory. |
### Return value
`string` Layout location or null to use the default processing.
## SymbolsFinalized(section) Method {#symbolsfinalized_section}
Extension can process the intermediate before the Windows Installer data is created.
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
## TryProcessSymbol(section, symbol, data, tableDefinitions) Method {#tryprocesssymbol_section_symbol_data_tabledefinitions}
Called for each extension symbol that hasn't been handled yet.
### Declaration
```cs
public bool TryProcessSymbol(
  WixToolset.Data.IntermediateSection section,
  WixToolset.Data.IntermediateSymbol symbol,
  WixToolset.Data.WindowsInstaller.WindowsInstallerData data,
  WixToolset.Data.WindowsInstaller.TableDefinitionCollection tableDefinitions
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| section | WixToolset.Data.IntermediateSection | The linked section. |
| symbol | WixToolset.Data.IntermediateSymbol | The current symbol. |
| data | WixToolset.Data.WindowsInstaller.WindowsInstallerData | Windows Installer data |
| tableDefinitions | WixToolset.Data.WindowsInstaller.TableDefinitionCollection | Collection of table definitions available for the output. |
### Return value
`bool` True if the symbol was handled, or false if not.
## TableDefinitions Property {#tabledefinitions}
Table definitions provided by the extension.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Data.WindowsInstaller.TableDefinition> TableDefinitions { get; set; }
```
