---
title: ResourceCollection Class
---
Allows reading and editing of resource data in a Win32 PE file.
## Methods
| Method | Description |
| ------ | ----------- |
| [Add(item)](#add_item) | Adds a new item to the collection. |
| [Clear()](#clear_nop) | Removes all resources from the collection. |
| [Contains(item)](#contains_item) | Tests if the collection contains an item. |
| [CopyTo(array, arrayIndex)](#copyto_array_arrayindex) | Copies the collection into an array. |
| [Find(resFile)](#find_resfile) | Locates all resources in a file, including all resource types and languages. For each located resource, a «see T:WixToolset.Dtf.Resources.Resource» instance (or subclass) is added to the collection. |
| [Find(resFile, type)](#find_resfile_type) | Locates all resources in a file of a given type, including all languages. For each located resource, a «see T:WixToolset.Dtf.Resources.Resource» instance (or subclass) is added to the collection. |
| [Find(resFile, type, name)](#find_resfile_type_name) | Locates all resources in a file of a given type and language. For each located resource, a «see T:WixToolset.Dtf.Resources.Resource» instance (or subclass) is added to the collection. |
| [GetEnumerator()](#getenumerator_nop) | Gets an enumerator over all resources in the collection. |
| [IndexOf(item)](#indexof_item) | Gets the index of an item in the collection. |
| [Insert(index, item)](#insert_index_item) | Inserts a item into the collection. |
| [Load(file)](#load_file) | For all resources in the collection, loads their data from a resource file. |
| [Remove(item)](#remove_item) | Removes an item to the collection. |
| [Save(file)](#save_file) | For all resources in the collection, saves their data to a resource file. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Count](#count) | Gets the number of resources in the collection. |
| [Item](#item) | Gets or sets the element at the specified index. |
### Remarks
To use this class:
- Create a new ResourceCollection
- Locate resources for the collection by calling one of the «see M:WixToolset.Dtf.Resources.ResourceCollection.Find(System.String)» methods
- Load data of one or more «see T:WixToolset.Dtf.Resources.Resource» s from a file by calling the «see M:WixToolset.Dtf.Resources.ResourceCollection.Load(System.String)» method of the Resource class, or load them all at once (more efficient) with the «see M:WixToolset.Dtf.Resources.ResourceCollection.Load(System.String)» method of the ResourceCollection.
- Read and/or edit data of the individual Resource objects using the methods on that class.
- Save data of one or more «see T:WixToolset.Dtf.Resources.Resource» s to a file by calling the «see M:WixToolset.Dtf.Resources.ResourceCollection.Save(System.String)» method of the Resource class, or save them all at once (more efficient) with the «see M:WixToolset.Dtf.Resources.ResourceCollection.Save(System.String)» method of the ResourceCollection.

`WixToolset.Dtf.Resources.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Add(item) Method {#add_item}
Adds a new item to the collection.
### Declaration
```cs
public void Add(
  Resource item
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| item | Resource | The Resource to add. |
## Clear() Method {#clear_nop}
Removes all resources from the collection.
### Declaration
```cs
public void Clear()
```
## Contains(item) Method {#contains_item}
Tests if the collection contains an item.
### Declaration
```cs
public bool Contains(
  Resource item
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| item | Resource | The Resource to search for. |
### Return value
`bool` true if the item is found; false otherwise
## CopyTo(array, arrayIndex) Method {#copyto_array_arrayindex}
Copies the collection into an array.
### Declaration
```cs
public void CopyTo(
  Resource[] array,
  int arrayIndex
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| array | Resource[] | The array to copy into. |
| arrayIndex | int | The starting index in the destination array. |
## Find(resFile) Method {#find_resfile}
Locates all resources in a file, including all resource types and languages. For each located resource, a «see T:WixToolset.Dtf.Resources.Resource» instance (or subclass) is added to the collection.
### Declaration
```cs
public void Find(
  string resFile
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| resFile | string | The file to be searched for resources. |
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.IO.IOException | resources could not be read from the file |
## Find(resFile, type) Method {#find_resfile_type}
Locates all resources in a file of a given type, including all languages. For each located resource, a «see T:WixToolset.Dtf.Resources.Resource» instance (or subclass) is added to the collection.
### Declaration
```cs
public void Find(
  string resFile,
  ResourceType type
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| resFile | string | The file to be searched for resources. |
| type | ResourceType | The type of resource to search for; may be one of the ResourceType constants or a user-defined type. |
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.IO.IOException | resources could not be read from the file |
## Find(resFile, type, name) Method {#find_resfile_type_name}
Locates all resources in a file of a given type and language. For each located resource, a «see T:WixToolset.Dtf.Resources.Resource» instance (or subclass) is added to the collection.
### Declaration
```cs
public void Find(
  string resFile,
  ResourceType type,
  string name
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| resFile | string | The file to be searched for resources. |
| type | ResourceType | The type of resource to search for; may be one of the ResourceType constants or a user-defined type. |
| name | string | The name of the resource to search for. |
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.IO.IOException | resources could not be read from the file |
## GetEnumerator() Method {#getenumerator_nop}
Gets an enumerator over all resources in the collection.
### Declaration
```cs
public IEnumerator<WixToolset.Dtf.Resources.Resource> GetEnumerator()
```
## IndexOf(item) Method {#indexof_item}
Gets the index of an item in the collection.
### Declaration
```cs
public int IndexOf(
  Resource item
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| item | Resource | The Resource to search for. |
### Return value
`int` The index of the item, or -1 if not found.
## Insert(index, item) Method {#insert_index_item}
Inserts a item into the collection.
### Declaration
```cs
public void Insert(
  int index,
  Resource item
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| index | int | The insertion index. |
| item | Resource | The Resource to insert. |
## Load(file) Method {#load_file}
For all resources in the collection, loads their data from a resource file.
### Declaration
```cs
public void Load(
  string file
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| file | string | The file from which resources are loaded. |
## Remove(item) Method {#remove_item}
Removes an item to the collection.
### Declaration
```cs
public bool Remove(
  Resource item
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| item | Resource | The Resource to remove. |
## Save(file) Method {#save_file}
For all resources in the collection, saves their data to a resource file.
### Declaration
```cs
public void Save(
  string file
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| file | string | The file to which resources are saved. |
## Count Property {#count}
Gets the number of resources in the collection.
### Declaration
```cs
public int Count { get; set; }
```
## Item Property {#item}
Gets or sets the element at the specified index.
### Declaration
```cs
public Resource Item { get; set; }
```
