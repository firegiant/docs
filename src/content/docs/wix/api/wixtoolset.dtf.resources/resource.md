---
title: Resource Class
---
Represents a Win32 resource which can be loaded from and saved to a PE file.
## Methods
| Method | Description |
| ------ | ----------- |
| [Equals(obj)](#equals_obj) | Tests if type, name, and locale of this Resource object match another Resource object. |
| [GetHashCode()](#gethashcode_nop) | Gets a hash code for this Resource object. |
| [Load(file)](#load_file) | Loads the resource data from a file. The file is searched for a resource with matching type, name, and locale. |
| [Save(file)](#save_file) | Saves the resource to a file. Any existing resource data with matching type, name, and locale is overwritten. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Data](#data) | Gets or sets the raw data of the resource. |
| [Locale](#locale) | Gets or sets the locale of the resource. |
| [Name](#name) | Gets or sets the name of the resource. For a numeric resource identifier, the decimal number is prefixed with a "#". |
| [ResourceType](#resourcetype) | Gets or sets the type of the resource. This may be one of the ResourceType constants or a user-defined type name. |
`WixToolset.Dtf.Resources.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Equals(obj) Method {#equals_obj}
Tests if type, name, and locale of this Resource object match another Resource object.
### Declaration
```cs
public bool Equals(
  System.Object obj
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| obj | System.Object | Resource object to be compared |
### Return value
`bool` True if the objects represent the same resource; false otherwise.
## GetHashCode() Method {#gethashcode_nop}
Gets a hash code for this Resource object.
### Declaration
```cs
public int GetHashCode()
```
### Return value
`int` Hash code generated from the resource type, name, and locale.
## Load(file) Method {#load_file}
Loads the resource data from a file. The file is searched for a resource with matching type, name, and locale.
### Declaration
```cs
public void Load(
  string file
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| file | string | Win32 PE file containing the resource |
## Save(file) Method {#save_file}
Saves the resource to a file. Any existing resource data with matching type, name, and locale is overwritten.
### Declaration
```cs
public void Save(
  string file
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| file | string | Win32 PE file to contain the resource |
## Data Property {#data}
Gets or sets the raw data of the resource.
### Declaration
```cs
public System.Byte[] Data { get; set; }
```
## Locale Property {#locale}
Gets or sets the locale of the resource.
### Declaration
```cs
public int Locale { get; set; }
```
## Name Property {#name}
Gets or sets the name of the resource. For a numeric resource identifier, the decimal number is prefixed with a "#".
### Declaration
```cs
public string Name { get; set; }
```
## ResourceType Property {#resourcetype}
Gets or sets the type of the resource. This may be one of the ResourceType constants or a user-defined type name.
### Declaration
```cs
public ResourceType ResourceType { get; set; }
```
