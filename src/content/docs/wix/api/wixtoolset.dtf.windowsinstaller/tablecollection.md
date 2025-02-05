---
title: TableCollection Class
---
Contains information about all the tables in a Windows Installer database.
## Methods
| Method | Description |
| ------ | ----------- |
| [Add(item)](#add_item) | Adds a new table to the database. |
| [Clear()](#clear_nop) | Removes all tables (and all data) from the database. |
| [Contains(item)](#contains_item) | Checks if the database contains a table with the given name. |
| [CopyTo(array, arrayIndex)](#copyto_array_arrayindex) | Copies the table information from this collection into an array. |
| [GetEnumerator()](#getenumerator_nop) | Enumerates the tables in the database. |
| [Remove(item)](#remove_item) | Removes a table from the database. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Count](#count) | Gets the number of tables in the database. |
| [IsReadOnly](#isreadonly) | Gets a boolean value indicating whether the collection is read-only. A TableCollection is read-only when the database is read-only. |
| [Item](#item) | Gets information about a given table. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Add(item) Method {#add_item}
Adds a new table to the database.
### Declaration
```cs
public void Add(
  TableInfo item
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| item | TableInfo | information about the table to be added |
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.InvalidOperationException | a table with the same name already exists in the database |
## Clear() Method {#clear_nop}
Removes all tables (and all data) from the database.
### Declaration
```cs
public void Clear()
```
## Contains(item) Method {#contains_item}
Checks if the database contains a table with the given name.
### Declaration
```cs
public bool Contains(
  string item
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| item | string | case-sensitive name of the table to search for |
### Return value
`bool` True if the table exists, false otherwise.
## CopyTo(array, arrayIndex) Method {#copyto_array_arrayindex}
Copies the table information from this collection into an array.
### Declaration
```cs
public void CopyTo(
  TableInfo[] array,
  int arrayIndex
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| array | TableInfo[] | destination array to be filed |
| arrayIndex | int | offset into the destination array where copying begins |
## GetEnumerator() Method {#getenumerator_nop}
Enumerates the tables in the database.
### Declaration
```cs
public IEnumerator<WixToolset.Dtf.WindowsInstaller.TableInfo> GetEnumerator()
```
## Remove(item) Method {#remove_item}
Removes a table from the database.
### Declaration
```cs
public bool Remove(
  string item
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| item | string | case-sensitive name of the table to be removed |
### Return value
`bool` true if the table was removed, false if the table did not exist
## Count Property {#count}
Gets the number of tables in the database.
### Declaration
```cs
public int Count { get; set; }
```
## IsReadOnly Property {#isreadonly}
Gets a boolean value indicating whether the collection is read-only. A TableCollection is read-only when the database is read-only.
### Declaration
```cs
public bool IsReadOnly { get; set; }
```
## Item Property {#item}
Gets information about a given table.
### Declaration
```cs
public TableInfo Item[
  string table
] { get; set; }
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| table | string | case-sensitive name of the table |
