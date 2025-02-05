---
title: TableDefinition Class
---
Definition of a table in a database.
## Methods
| Method | Description |
| ------ | ----------- |
| [CompareTo(updated)](#compareto_updated) | Compares this table definition to another table definition. |
| [CreateRow(sourceLineNumbers)](#createrow_sourcelinenumbers) | In general this method shouldn't be used - create rows from a Table instead. Creates a new row object of the type specified in this definition. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Columns](#columns) | Gets the collection of column definitions for this table. |
| [Item](#item) | Gets the column definition in the table by index. |
| [Name](#name) | Gets the name of the table. |
| [SymbolDefinition](#symboldefinition) | Gets the symbol definition associated with this table. |
| [SymbolIdIsPrimaryKey](#symbolidisprimarykey) | Gets if the primary key is the id of the symbol definition associated with this table. |
| [Unreal](#unreal) | Gets if the table is unreal. |
## Fields
| Field | Description |
| ------ | ----------- |
| MaxColumnsInRealTable | Tracks the maximum number of columns supported in a real table. This is a Windows Installer limitation. |
`WixToolset.Data.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CompareTo(updated) Method {#compareto_updated}
Compares this table definition to another table definition.
### Declaration
```cs
public int CompareTo(
  TableDefinition updated
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| updated | TableDefinition | The updated to compare with this target definition. |
### Return value
`int` 0 if the tables' core properties are the same; otherwise, non-0.
### Remarks
Only Windows Installer traits are compared, allowing for updates to WiX-specific table definitions.
## CreateRow(sourceLineNumbers) Method {#createrow_sourcelinenumbers}
In general this method shouldn't be used - create rows from a Table instead. Creates a new row object of the type specified in this definition.
### Declaration
```cs
public Row CreateRow(
  WixToolset.Data.SourceLineNumber sourceLineNumbers
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Original source lines for this row. |
### Return value
`Row` Created row.
## Columns Property {#columns}
Gets the collection of column definitions for this table.
### Declaration
```cs
public ColumnDefinition[] Columns { get; set; }
```
## Item Property {#item}
Gets the column definition in the table by index.
### Declaration
```cs
public ColumnDefinition Item[
  int columnIndex
] { get; set; }
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| columnIndex | int | Index of column to locate. |
## Name Property {#name}
Gets the name of the table.
### Declaration
```cs
public string Name { get; set; }
```
## SymbolDefinition Property {#symboldefinition}
Gets the symbol definition associated with this table.
### Declaration
```cs
public WixToolset.Data.IntermediateSymbolDefinition SymbolDefinition { get; set; }
```
## SymbolIdIsPrimaryKey Property {#symbolidisprimarykey}
Gets if the primary key is the id of the symbol definition associated with this table.
### Declaration
```cs
public bool SymbolIdIsPrimaryKey { get; set; }
```
## Unreal Property {#unreal}
Gets if the table is unreal.
### Declaration
```cs
public bool Unreal { get; set; }
```
