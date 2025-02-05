---
title: Row Class
---
Row containing data for a table.
## Methods
| Method | Description |
| ------ | ----------- |
| [BestEffortSetField(field, value)](#besteffortsetfield_field_value) | Sets the value of a particular field in the row without validating. |
| [CopyTo(target)](#copyto_target) | Copies this row to the target row. |
| [FieldAsInteger()](#fieldasinteger_nop) | Gets the field as an integer. |
| [FieldAsNullableInteger()](#fieldasnullableinteger_nop) | Gets the field as an integer that could be null. |
| [FieldAsString()](#fieldasstring_nop) | Gets the field as a string. |
| [GetKey()](#getkey_nop) | Get the value used to represent the row in a keyed row collection. |
| [GetPrimaryKey(delimiter)](#getprimarykey_delimiter) | Get the primary key of this row. |
| [GetPrimaryKey(delimiter, nullReplacement)](#getprimarykey_delimiter_nullreplacement) | Get the primary key of this row. |
| [IsColumnEmpty(field)](#iscolumnempty_field) | Returns true if the specified field is null or an empty string. |
| [IsColumnNull(field)](#iscolumnnull_field) | Returns true if the specified field is null. |
| [IsIdentical(row)](#isidentical_row) | Tests if the passed in row is identical. |
| [ToString()](#tostring_nop) | Returns a string representation of the Row. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Fields](#fields) | Gets the fields contained by this row. |
| [Item](#item) | Gets or sets the value of a particular field in the row. |
| [Number](#number) | Gets the unique number for the row. |
| [Operation](#operation) | Gets or sets the row transform operation. |
| [SourceLineNumbers](#sourcelinenumbers) | Gets the source file and line number for the row. |
| [Table](#table) | Gets the table this row belongs to. |
| [TableDefinition](#tabledefinition) | Gets the table definition for this row. |
`WixToolset.Data.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## BestEffortSetField(field, value) Method {#besteffortsetfield_field_value}
Sets the value of a particular field in the row without validating.
### Declaration
```cs
public bool BestEffortSetField(
  int field,
  System.Object value
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| field | int | field index. |
| value | System.Object | Value of a field in the row. |
### Return value
`bool` True if successful, false if validation failed.
## CopyTo(target) Method {#copyto_target}
Copies this row to the target row.
### Declaration
```cs
public void CopyTo(
  Row target
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| target | Row | Row to copy data to. |
## FieldAsInteger() Method {#fieldasinteger_nop}
Gets the field as an integer.
### Declaration
```cs
public int FieldAsInteger()
```
### Return value
`int` Field's data as an integer.
## FieldAsNullableInteger() Method {#fieldasnullableinteger_nop}
Gets the field as an integer that could be null.
### Declaration
```cs
public System.Nullable<System.Int32> FieldAsNullableInteger()
```
### Return value
`System.Nullable<System.Int32>` Field's data as an integer that could be null.
## FieldAsString() Method {#fieldasstring_nop}
Gets the field as a string.
### Declaration
```cs
public string FieldAsString()
```
### Return value
`string` Field's data as a string.
## GetKey() Method {#getkey_nop}
Get the value used to represent the row in a keyed row collection.
### Declaration
```cs
public string GetKey()
```
### Return value
`string` Primary key or row number if no primary key is available.
## GetPrimaryKey(delimiter) Method {#getprimarykey_delimiter}
Get the primary key of this row.
### Declaration
```cs
public string GetPrimaryKey(
  System.Char delimiter
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| delimiter | System.Char | Delimiter character for multiple column primary keys. |
### Return value
`string` The primary key or null if the row's table has no primary key columns.
## GetPrimaryKey(delimiter, nullReplacement) Method {#getprimarykey_delimiter_nullreplacement}
Get the primary key of this row.
### Declaration
```cs
public string GetPrimaryKey(
  System.Char delimiter,
  string nullReplacement
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| delimiter | System.Char | Delimiter character for multiple column primary keys. |
| nullReplacement | string | String to represent null values in the primary key. |
### Return value
`string` The primary key or null if the row's table has no primary key columns.
## IsColumnEmpty(field) Method {#iscolumnempty_field}
Returns true if the specified field is null or an empty string.
### Declaration
```cs
public bool IsColumnEmpty(
  int field
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| field | int | Index of the field to check. |
### Return value
`bool` true if the specified field is null or an empty string, false otherwise.
## IsColumnNull(field) Method {#iscolumnnull_field}
Returns true if the specified field is null.
### Declaration
```cs
public bool IsColumnNull(
  int field
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| field | int | Index of the field to check. |
### Return value
`bool` true if the specified field is null, false otherwise.
## IsIdentical(row) Method {#isidentical_row}
Tests if the passed in row is identical.
### Declaration
```cs
public bool IsIdentical(
  Row row
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| row | Row | Row to compare against. |
### Return value
`bool` True if two rows are identical.
## ToString() Method {#tostring_nop}
Returns a string representation of the Row.
### Declaration
```cs
public string ToString()
```
### Return value
`string` A string representation of the Row.
## Fields Property {#fields}
Gets the fields contained by this row.
### Declaration
```cs
public Field[] Fields { get; set; }
```
## Item Property {#item}
Gets or sets the value of a particular field in the row.
### Declaration
```cs
public System.Object Item[
  int field
] { get; set; }
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| field | int | field index. |
## Number Property {#number}
Gets the unique number for the row.
### Declaration
```cs
public System.Int64 Number { get; set; }
```
## Operation Property {#operation}
Gets or sets the row transform operation.
### Declaration
```cs
public RowOperation Operation { get; set; }
```
## SourceLineNumbers Property {#sourcelinenumbers}
Gets the source file and line number for the row.
### Declaration
```cs
public WixToolset.Data.SourceLineNumber SourceLineNumbers { get; set; }
```
## Table Property {#table}
Gets the table this row belongs to.
### Declaration
```cs
public Table Table { get; set; }
```
## TableDefinition Property {#tabledefinition}
Gets the table definition for this row.
### Declaration
```cs
public TableDefinition TableDefinition { get; set; }
```
### Remarks
A Row always has a TableDefinition, even if the Row does not belong to a Table.
