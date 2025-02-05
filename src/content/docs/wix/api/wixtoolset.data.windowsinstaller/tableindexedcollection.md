---
title: TableIndexedCollection Class
---
Collection for tables.
## Methods
| Method | Description |
| ------ | ----------- |
| [Add(table)](#add_table) | Adds a table to the collection. |
| [Clear()](#clear_nop) | Clear the tables from the collection. |
| [Contains(table)](#contains_table) | Determines if a table is in the collection. |
| [CopyTo(array, arrayIndex)](#copyto_array_arrayindex) | Copies the collection into an array. |
| [GetEnumerator()](#getenumerator_nop) | Gets an enumerator over the whole collection. |
| [Remove(tableName)](#remove_tablename) | Remove a table from the collection by name. |
| [Remove(table)](#remove_table) | Remove a table from the collection. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Count](#count) | Gets the number of items in the collection. |
| [IsReadOnly](#isreadonly) | Table indexed collection is never read only. |
| [Item](#item) | Gets a table by name. |
`WixToolset.Data.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Add(table) Method {#add_table}
Adds a table to the collection.
### Declaration
```cs
public void Add(
  Table table
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| table | Table | Table to add to the collection. |
### Remarks
Indexes the table by name.
## Clear() Method {#clear_nop}
Clear the tables from the collection.
### Declaration
```cs
public void Clear()
```
## Contains(table) Method {#contains_table}
Determines if a table is in the collection.
### Declaration
```cs
public bool Contains(
  Table table
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| table | Table | Table to check if it is in the collection. |
### Return value
`bool` True if the table name is in the collection, otherwise false.
## CopyTo(array, arrayIndex) Method {#copyto_array_arrayindex}
Copies the collection into an array.
### Declaration
```cs
public void CopyTo(
  Table[] array,
  int arrayIndex
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| array | Table[] | Array to copy the collection into. |
| arrayIndex | int | Index to start copying from. |
## GetEnumerator() Method {#getenumerator_nop}
Gets an enumerator over the whole collection.
### Declaration
```cs
public IEnumerator<WixToolset.Data.WindowsInstaller.Table> GetEnumerator()
```
### Return value
`IEnumerator<WixToolset.Data.WindowsInstaller.Table>` Collection enumerator.
## Remove(tableName) Method {#remove_tablename}
Remove a table from the collection by name.
### Declaration
```cs
public void Remove(
  string tableName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| tableName | string | Table name to remove from the collection. |
## Remove(table) Method {#remove_table}
Remove a table from the collection.
### Declaration
```cs
public bool Remove(
  Table table
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| table | Table | Table with matching name to remove from the collection. |
## Count Property {#count}
Gets the number of items in the collection.
### Declaration
```cs
public int Count { get; set; }
```
## IsReadOnly Property {#isreadonly}
Table indexed collection is never read only.
### Declaration
```cs
public bool IsReadOnly { get; set; }
```
## Item Property {#item}
Gets a table by name.
### Declaration
```cs
public Table Item[
  string tableName
] { get; set; }
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| tableName | string | Name of table to locate. |
