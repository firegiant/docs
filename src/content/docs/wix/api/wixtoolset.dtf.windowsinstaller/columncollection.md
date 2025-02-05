---
title: ColumnCollection Class
---
Collection of column information related to a «see T:WixToolset.Dtf.WindowsInstaller.TableInfo» or «see T:WixToolset.Dtf.WindowsInstaller.View» .
## Methods
| Method | Description |
| ------ | ----------- |
| [Add(item)](#add_item) | Not supported because the collection is read-only. |
| [Clear()](#clear_nop) | Not supported because the collection is read-only. |
| [Contains(columnName)](#contains_columnname) | Checks if a column with a given name exists in the collection. |
| [CopyTo(array, arrayIndex)](#copyto_array_arrayindex) | Copies the columns from this collection into an array. |
| [GetEnumerator()](#getenumerator_nop) | Gets an enumerator over the columns in the collection. |
| [IndexOf(columnName)](#indexof_columnname) | Gets the index of a column within the collection. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Count](#count) | Gets the number of columns in the collection. |
| [FormatString](#formatstring) | Gets a string suitable for printing all the values of a record containing these columns. |
| [IsReadOnly](#isreadonly) | Gets a boolean value indicating whether the collection is read-only. A ColumnCollection is read-only if it is associated with a «see T:WixToolset.Dtf.WindowsInstaller.View» or a read-only «see T:WixToolset.Dtf.WindowsInstaller.Database» . |
| [Item](#item) | Gets information about a specific column in the collection. |
| [Item](#item) | Gets information about a specific column in the collection. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Add(item) Method {#add_item}
Not supported because the collection is read-only.
### Declaration
```cs
public void Add(
  ColumnInfo item
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| item | ColumnInfo | information about the column being added |
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.InvalidOperationException | the collection is read-only |
## Clear() Method {#clear_nop}
Not supported because the collection is read-only.
### Declaration
```cs
public void Clear()
```
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.InvalidOperationException | the collection is read-only |
## Contains(columnName) Method {#contains_columnname}
Checks if a column with a given name exists in the collection.
### Declaration
```cs
public bool Contains(
  string columnName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| columnName | string | case-sensitive name of the column to look for |
### Return value
`bool` true if the column exists in the collection, false otherwise
## CopyTo(array, arrayIndex) Method {#copyto_array_arrayindex}
Copies the columns from this collection into an array.
### Declaration
```cs
public void CopyTo(
  ColumnInfo[] array,
  int arrayIndex
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| array | ColumnInfo[] | destination array to be filed |
| arrayIndex | int | offset into the destination array where copying begins |
## GetEnumerator() Method {#getenumerator_nop}
Gets an enumerator over the columns in the collection.
### Declaration
```cs
public IEnumerator<WixToolset.Dtf.WindowsInstaller.ColumnInfo> GetEnumerator()
```
### Return value
`IEnumerator<WixToolset.Dtf.WindowsInstaller.ColumnInfo>` An enumerator of ColumnInfo objects.
## IndexOf(columnName) Method {#indexof_columnname}
Gets the index of a column within the collection.
### Declaration
```cs
public int IndexOf(
  string columnName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| columnName | string | case-sensitive name of the column to look for |
### Return value
`int` 0-based index of the column, or -1 if not found
## Count Property {#count}
Gets the number of columns in the collection.
### Declaration
```cs
public int Count { get; set; }
```
## FormatString Property {#formatstring}
Gets a string suitable for printing all the values of a record containing these columns.
### Declaration
```cs
public string FormatString { get; set; }
```
## IsReadOnly Property {#isreadonly}
Gets a boolean value indicating whether the collection is read-only. A ColumnCollection is read-only if it is associated with a «see T:WixToolset.Dtf.WindowsInstaller.View» or a read-only «see T:WixToolset.Dtf.WindowsInstaller.Database» .
### Declaration
```cs
public bool IsReadOnly { get; set; }
```
## Item Property {#item}
Gets information about a specific column in the collection.
### Declaration
```cs
public ColumnInfo Item[
  int columnIndex
] { get; set; }
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| columnIndex | int | 1-based index into the column collection |
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException |  is less
            than 1 or greater than the number of columns in the collection |
## Item Property {#item}
Gets information about a specific column in the collection.
### Declaration
```cs
public ColumnInfo Item[
  string columnName
] { get; set; }
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| columnName | string | case-sensitive name of a column collection |
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException |  does
            not exist in the collection |
