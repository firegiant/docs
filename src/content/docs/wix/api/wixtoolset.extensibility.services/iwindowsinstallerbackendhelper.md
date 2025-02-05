---
title: IWindowsInstallerBackendHelper Interface
---
Interface provided to help Windows Installer backend extensions.
## Methods
| Method | Description |
| ------ | ----------- |
| [CreateFileFacade(file)](#createfilefacade_file) | Creates a file facade from a `FileSymbol` . |
| [CreateFileFacade(fileRow)](#createfilefacade_filerow) | Creates a file facade from a File row. |
| [CreateRow(section, symbol, data, tableDefinition)](#createrow_section_symbol_data_tabledefinition) | Creates a «see T:WixToolset.Data.WindowsInstaller.Row» in the specified table. |
| [TryAddSymbolToMatchingTableDefinitions(section, symbol, data, tableDefinitions)](#tryaddsymboltomatchingtabledefinitions_section_symbol_data_tabledefinitions) | Looks up the registered «see T:WixToolset.Data.WindowsInstaller.TableDefinition» for the given «see T:WixToolset.Data.IntermediateSymbol» and creates a «see T:WixToolset.Data.WindowsInstaller.Row» in that table. Goes sequentially through each field in the symbol and assigns the value to the column with the same index as the field. If the symbol's Id is registered as the primary key then that is used for the first column and the column data is offset by 1. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CreateFileFacade(file) Method {#createfilefacade_file}
Creates a file facade from a `FileSymbol` .
### Declaration
```cs
public WixToolset.Extensibility.Data.IFileFacade CreateFileFacade(
  WixToolset.Data.Symbols.FileSymbol file
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| file | WixToolset.Data.Symbols.FileSymbol | FileSymbol backing the facade. |
## CreateFileFacade(fileRow) Method {#createfilefacade_filerow}
Creates a file facade from a File row.
### Declaration
```cs
public WixToolset.Extensibility.Data.IFileFacade CreateFileFacade(
  WixToolset.Data.WindowsInstaller.Rows.FileRow fileRow
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fileRow | WixToolset.Data.WindowsInstaller.Rows.FileRow | FileRow |
### Return value
`WixToolset.Extensibility.Data.IFileFacade` New `IFileFacade` .
## CreateRow(section, symbol, data, tableDefinition) Method {#createrow_section_symbol_data_tabledefinition}
Creates a «see T:WixToolset.Data.WindowsInstaller.Row» in the specified table.
### Declaration
```cs
public WixToolset.Data.WindowsInstaller.Row CreateRow(
  WixToolset.Data.IntermediateSection section,
  WixToolset.Data.IntermediateSymbol symbol,
  WixToolset.Data.WindowsInstaller.WindowsInstallerData data,
  WixToolset.Data.WindowsInstaller.TableDefinition tableDefinition
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| section | WixToolset.Data.IntermediateSection | Parent section. |
| symbol | WixToolset.Data.IntermediateSymbol | Symbol with line information for the row. |
| data | WixToolset.Data.WindowsInstaller.WindowsInstallerData | Windows Installer data. |
| tableDefinition | WixToolset.Data.WindowsInstaller.TableDefinition | Table definition for the row. |
### Return value
`WixToolset.Data.WindowsInstaller.Row` Row created in the _data_ .
## TryAddSymbolToMatchingTableDefinitions(section, symbol, data, tableDefinitions) Method {#tryaddsymboltomatchingtabledefinitions_section_symbol_data_tabledefinitions}
Looks up the registered «see T:WixToolset.Data.WindowsInstaller.TableDefinition» for the given «see T:WixToolset.Data.IntermediateSymbol» and creates a «see T:WixToolset.Data.WindowsInstaller.Row» in that table. Goes sequentially through each field in the symbol and assigns the value to the column with the same index as the field. If the symbol's Id is registered as the primary key then that is used for the first column and the column data is offset by 1.
### Declaration
```cs
public bool TryAddSymbolToMatchingTableDefinitions(
  WixToolset.Data.IntermediateSection section,
  WixToolset.Data.IntermediateSymbol symbol,
  WixToolset.Data.WindowsInstaller.WindowsInstallerData data,
  WixToolset.Data.WindowsInstaller.TableDefinitionCollection tableDefinitions
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| section | WixToolset.Data.IntermediateSection | Parent section. |
| symbol | WixToolset.Data.IntermediateSymbol | Symbol to create the row from. |
| data | WixToolset.Data.WindowsInstaller.WindowsInstallerData | Windows Installer data. |
| tableDefinitions | WixToolset.Data.WindowsInstaller.TableDefinitionCollection | Table definitions that have been registered with the binder. |
### Return value
`bool` True if a row was created.
