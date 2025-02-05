---
title: ComponentInfoCollection Class
---
Accessor for information about components within the context of an installation session.
## Methods
| Method | Description |
| ------ | ----------- |
| [Contains(component)](#contains_component) | Checks if the collection contains a component. |
| [CopyTo(array, arrayIndex)](#copyto_array_arrayindex) | Copies the features into an array. |
| [GetEnumerator()](#getenumerator_nop) | Enumerates the components in the collection. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Count](#count) | Gets the number of components defined for the product. |
| [Item](#item) | Gets information about a component within the context of an installation session. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Contains(component) Method {#contains_component}
Checks if the collection contains a component.
### Declaration
```cs
public bool Contains(
  string component
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| component | string | name of the component |
### Return value
`bool` true if the component is in the collection, else false
## CopyTo(array, arrayIndex) Method {#copyto_array_arrayindex}
Copies the features into an array.
### Declaration
```cs
public void CopyTo(
  ComponentInfo[] array,
  int arrayIndex
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| array | ComponentInfo[] | array that receives the features |
| arrayIndex | int | offset into the array |
## GetEnumerator() Method {#getenumerator_nop}
Enumerates the components in the collection.
### Declaration
```cs
public IEnumerator<WixToolset.Dtf.WindowsInstaller.ComponentInfo> GetEnumerator()
```
### Return value
`IEnumerator<WixToolset.Dtf.WindowsInstaller.ComponentInfo>` an enumerator over all features in the collection
## Count Property {#count}
Gets the number of components defined for the product.
### Declaration
```cs
public int Count { get; set; }
```
## Item Property {#item}
Gets information about a component within the context of an installation session.
### Declaration
```cs
public ComponentInfo Item[
  string component
] { get; set; }
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| component | string | name of the component |
