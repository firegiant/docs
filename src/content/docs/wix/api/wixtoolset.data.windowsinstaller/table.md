---
title: Table Class
---
Object that represents a table in a database.
## Methods
| Method | Description |
| ------ | ----------- |
| [CreateRow(sourceLineNumbers)](#createrow_sourcelinenumbers) | Creates a new row and adds it to the table. |
| [ValidateRows()](#validaterows_nop) | Validates the rows of this OutputTable and throws if it collides on primary keys. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Definition](#definition) | Gets the table definition. |
| [Name](#name) | Gets the name of the table. |
| [Operation](#operation) | Gets or sets the table transform operation. |
| [Rows](#rows) | Gets the rows contained in the table. |
`WixToolset.Data.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CreateRow(sourceLineNumbers) Method {#createrow_sourcelinenumbers}
Creates a new row and adds it to the table.
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
`Row` Row created in table.
## ValidateRows() Method {#validaterows_nop}
Validates the rows of this OutputTable and throws if it collides on primary keys.
### Declaration
```cs
public void ValidateRows()
```
## Definition Property {#definition}
Gets the table definition.
### Declaration
```cs
public TableDefinition Definition { get; set; }
```
## Name Property {#name}
Gets the name of the table.
### Declaration
```cs
public string Name { get; set; }
```
## Operation Property {#operation}
Gets or sets the table transform operation.
### Declaration
```cs
public TableOperation Operation { get; set; }
```
## Rows Property {#rows}
Gets the rows contained in the table.
### Declaration
```cs
public IList<WixToolset.Data.WindowsInstaller.Row> Rows { get; set; }
```
