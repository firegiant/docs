---
title: TableDefinitionCollection Class
---
Collection for table definitions indexed by table name.
## Methods
| Method | Description |
| ------ | ----------- |
| [Add(tableDefinition)](#add_tabledefinition) | Adds a table definition to the collection. |
| [Clear()](#clear_nop) | Removes all table definitions from the collection. |
| [Contains(tableName)](#contains_tablename) | Checks if the collection contains a table name. |
| [Contains(table)](#contains_table) | Checks if the collection contains a table. |
| [CopyTo(array, index)](#copyto_array_index) | Copies table definitions to an arry. |
| [GetEnumerator()](#getenumerator_nop) | Gets enumerator for the collection. |
| [Remove(table)](#remove_table) | Removes a table definition from the collection. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Count](#count) | Gets the number of items in the collection. |
| [IsReadOnly](#isreadonly) | Table definition collections are never read-only. |
| [Item](#item) | Gets a table definition by name. |
`WixToolset.Data.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Add(tableDefinition) Method {#add_tabledefinition}
Adds a table definition to the collection.
### Declaration
```cs
public void Add(
  TableDefinition tableDefinition
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| tableDefinition | TableDefinition | Table definition to add to the collection. |
## Clear() Method {#clear_nop}
Removes all table definitions from the collection.
### Declaration
```cs
public void Clear()
```
## Contains(tableName) Method {#contains_tablename}
Checks if the collection contains a table name.
### Declaration
```cs
public bool Contains(
  string tableName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| tableName | string | The table to check in the collection. |
### Return value
`bool` True if collection contains the table.
## Contains(table) Method {#contains_table}
Checks if the collection contains a table.
### Declaration
```cs
public bool Contains(
  TableDefinition table
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| table | TableDefinition | The table to check in the collection. |
### Return value
`bool` True if collection contains the table.
## CopyTo(array, index) Method {#copyto_array_index}
Copies table definitions to an arry.
### Declaration
```cs
public void CopyTo(
  TableDefinition[] array,
  int index
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| array | TableDefinition[] | Array to copy the table definitions to. |
| index | int | Index in the array to start copying at. |
## GetEnumerator() Method {#getenumerator_nop}
Gets enumerator for the collection.
### Declaration
```cs
public IEnumerator<WixToolset.Data.WindowsInstaller.TableDefinition> GetEnumerator()
```
### Return value
`IEnumerator<WixToolset.Data.WindowsInstaller.TableDefinition>` Enumerator for the collection.
## Remove(table) Method {#remove_table}
Removes a table definition from the collection.
### Declaration
```cs
public bool Remove(
  TableDefinition table
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| table | TableDefinition | Table to remove from the collection. |
### Return value
`bool` True if the table definition existed in the collection and was removed.
## Count Property {#count}
Gets the number of items in the collection.
### Declaration
```cs
public int Count { get; set; }
```
## IsReadOnly Property {#isreadonly}
Table definition collections are never read-only.
### Declaration
```cs
public bool IsReadOnly { get; set; }
```
## Item Property {#item}
Gets a table definition by name.
### Declaration
```cs
public TableDefinition Item[
  string tableName
] { get; set; }
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| tableName | string | Name of table to locate. |
