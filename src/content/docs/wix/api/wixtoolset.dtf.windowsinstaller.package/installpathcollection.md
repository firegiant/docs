---
title: InstallPathCollection Class
---
Represents a collection of InstallPaths that are the child paths of the same parent directory.
## Methods
| Method | Description |
| ------ | ----------- |
| [Add(item)](#add_item) | Adds a new child path to the collection. |
| [Clear()](#clear_nop) | Removes all items from the collection. |
| [Contains(item)](#contains_item) | Tests if the collection contains a child path. |
| [CopyTo(array, index)](#copyto_array_index) | Copies the collection into an array. |
| [GetEnumerator()](#getenumerator_nop) | Gets an enumerator over all items in the collection. |
| [IndexOf(item)](#indexof_item) | Gets the index of a child path in the collection. |
| [Insert(index, item)](#insert_index_item) | Inserts a child path into the collection. |
| [Remove(item)](#remove_item) | Removes a child path to the collection. |
| [RemoveAt(index)](#removeat_index) | Removes an item from the collection. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Count](#count) | Gets the number of items in the collection. |
| [Item](#item) | Gets or sets the element at the specified index. |
`WixToolset.Dtf.WindowsInstaller.Package.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Add(item) Method {#add_item}
Adds a new child path to the collection.
### Declaration
```cs
public void Add(
  InstallPath item
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| item | InstallPath | The InstallPath to add. |
## Clear() Method {#clear_nop}
Removes all items from the collection.
### Declaration
```cs
public void Clear()
```
## Contains(item) Method {#contains_item}
Tests if the collection contains a child path.
### Declaration
```cs
public bool Contains(
  InstallPath item
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| item | InstallPath | The InstallPath to search for. |
### Return value
`bool` true if the item is found; false otherwise
## CopyTo(array, index) Method {#copyto_array_index}
Copies the collection into an array.
### Declaration
```cs
public void CopyTo(
  InstallPath[] array,
  int index
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| array | InstallPath[] | The array to copy into. |
| index | int | The starting index in the destination array. |
## GetEnumerator() Method {#getenumerator_nop}
Gets an enumerator over all items in the collection.
### Declaration
```cs
public IEnumerator<WixToolset.Dtf.WindowsInstaller.Package.InstallPath> GetEnumerator()
```
### Return value
`IEnumerator<WixToolset.Dtf.WindowsInstaller.Package.InstallPath>` An enumerator for the collection.
## IndexOf(item) Method {#indexof_item}
Gets the index of a child path in the collection.
### Declaration
```cs
public int IndexOf(
  InstallPath item
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| item | InstallPath | The InstallPath to search for. |
### Return value
`int` The index of the item, or -1 if not found.
## Insert(index, item) Method {#insert_index_item}
Inserts a child path into the collection.
### Declaration
```cs
public void Insert(
  int index,
  InstallPath item
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| index | int | The insertion index. |
| item | InstallPath | The InstallPath to insert. |
## Remove(item) Method {#remove_item}
Removes a child path to the collection.
### Declaration
```cs
public bool Remove(
  InstallPath item
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| item | InstallPath | The InstallPath to remove. |
## RemoveAt(index) Method {#removeat_index}
Removes an item from the collection.
### Declaration
```cs
public void RemoveAt(
  int index
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| index | int | The index of the item to remove. |
## Count Property {#count}
Gets the number of items in the collection.
### Declaration
```cs
public int Count { get; set; }
```
## Item Property {#item}
Gets or sets the element at the specified index.
### Declaration
```cs
public InstallPath Item { get; set; }
```
