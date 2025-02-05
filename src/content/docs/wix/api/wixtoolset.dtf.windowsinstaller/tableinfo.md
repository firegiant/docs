---
title: TableInfo Class
---
Defines a table in an installation database.
## Methods
| Method | Description |
| ------ | ----------- |
| [ToString()](#tostring_nop) | Gets a string representation of the table. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Columns](#columns) | Gets information about the columns in this table. |
| [Name](#name) | Gets the name of the table. |
| [PrimaryKeys](#primarykeys) | Gets the names of the columns that are primary keys of the table. |
| [SqlCreateString](#sqlcreatestring) | Gets an SQL CREATE string that can be used to create the table. |
| [SqlInsertString](#sqlinsertstring) | Gets an SQL INSERT string that can be used insert a new record into the table. |
| [SqlSelectString](#sqlselectstring) | Gets an SQL SELECT string that can be used to select all columns of the table. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## ToString() Method {#tostring_nop}
Gets a string representation of the table.
### Declaration
```cs
public string ToString()
```
### Return value
`string` The name of the table.
## Columns Property {#columns}
Gets information about the columns in this table.
### Declaration
```cs
public ColumnCollection Columns { get; set; }
```
### Remarks
This property queries the database every time it is called, to ensure the returned values are up-to-date. For best performance, hold onto the returned collection if using it more than once.

## Name Property {#name}
Gets the name of the table.
### Declaration
```cs
public string Name { get; set; }
```
## PrimaryKeys Property {#primarykeys}
Gets the names of the columns that are primary keys of the table.
### Declaration
```cs
public IList<System.String> PrimaryKeys { get; set; }
```
## SqlCreateString Property {#sqlcreatestring}
Gets an SQL CREATE string that can be used to create the table.
### Declaration
```cs
public string SqlCreateString { get; set; }
```
## SqlInsertString Property {#sqlinsertstring}
Gets an SQL INSERT string that can be used insert a new record into the table.
### Declaration
```cs
public string SqlInsertString { get; set; }
```
### Remarks
The values are expressed as question-mark tokens, to be supplied by the record.

## SqlSelectString Property {#sqlselectstring}
Gets an SQL SELECT string that can be used to select all columns of the table.
### Declaration
```cs
public string SqlSelectString { get; set; }
```
### Remarks
The columns are listed explicitly in the SELECT string, as opposed to using "SELECT *".

