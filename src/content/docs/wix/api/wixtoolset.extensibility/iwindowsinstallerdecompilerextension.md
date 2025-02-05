---
title: IWindowsInstallerDecompilerExtension Interface
---
Interface all windows installer decompiler extensions implement.
## Methods
| Method | Description |
| ------ | ----------- |
| [PostDecompile()](#postdecompile_nop) | Called after all output changes occur and right before the output is bound into its final format. |
| [PostDecompileTables(tables)](#postdecompiletables_tables) | After decompilation tables. |
| [PreDecompile(context, helper)](#predecompile_context_helper) | Called before decompiling occurs. |
| [PreDecompileTables(tables)](#predecompiletables_tables) | Called before decompiling occurs. |
| [TryDecompileTable(table)](#trydecompiletable_table) | Try to decompile an extension table. |
## Properties
| Property | Description |
| ------ | ----------- |
| [TableDefinitions](#tabledefinitions) | Gets the table definitions this extension decompiles. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## PostDecompile() Method {#postdecompile_nop}
Called after all output changes occur and right before the output is bound into its final format.
### Declaration
```cs
public void PostDecompile()
```
## PostDecompileTables(tables) Method {#postdecompiletables_tables}
After decompilation tables.
### Declaration
```cs
public void PostDecompileTables(
  WixToolset.Data.WindowsInstaller.TableIndexedCollection tables
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| tables | WixToolset.Data.WindowsInstaller.TableIndexedCollection | The collection of all tables. |
## PreDecompile(context, helper) Method {#predecompile_context_helper}
Called before decompiling occurs.
### Declaration
```cs
public void PreDecompile(
  Data.IWindowsInstallerDecompileContext context,
  Services.IWindowsInstallerDecompilerHelper helper
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| context | Data.IWindowsInstallerDecompileContext | Decompile context. |
| helper | Services.IWindowsInstallerDecompilerHelper | Decompile helper. |
## PreDecompileTables(tables) Method {#predecompiletables_tables}
Called before decompiling occurs.
### Declaration
```cs
public void PreDecompileTables(
  WixToolset.Data.WindowsInstaller.TableIndexedCollection tables
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| tables | WixToolset.Data.WindowsInstaller.TableIndexedCollection | The collection of all tables. |
## TryDecompileTable(table) Method {#trydecompiletable_table}
Try to decompile an extension table.
### Declaration
```cs
public bool TryDecompileTable(
  WixToolset.Data.WindowsInstaller.Table table
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| table | WixToolset.Data.WindowsInstaller.Table | The table to decompile. |
### Return value
`bool` True if the table was decompiled, false otherwise.
## TableDefinitions Property {#tabledefinitions}
Gets the table definitions this extension decompiles.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Data.WindowsInstaller.TableDefinition> TableDefinitions { get; set; }
```
