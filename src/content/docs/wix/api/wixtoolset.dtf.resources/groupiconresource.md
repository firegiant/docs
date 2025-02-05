---
title: GroupIconResource Class
---
A subclass of Resource which provides specific methods for manipulating the resource data.
## Methods
| Method | Description |
| ------ | ----------- |
| [ReadFromFile(path)](#readfromfile_path) | Reads the icon group from a .ico file. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Data](#data) | Gets or sets the raw data of the resource. The data is in the format of the RT_GROUPICON resource structure. |
| [Icons](#icons) | Enumerates the the icons in the icon group. |
### Remarks
The resource is of type «see P:WixToolset.Dtf.Resources.ResourceType.GroupIcon» (RT_GROUPICON).
`WixToolset.Dtf.Resources.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## ReadFromFile(path) Method {#readfromfile_path}
Reads the icon group from a .ico file.
### Declaration
```cs
public void ReadFromFile(
  string path
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| path | string | Path to an icon file (.ico). |
## Data Property {#data}
Gets or sets the raw data of the resource. The data is in the format of the RT_GROUPICON resource structure.
### Declaration
```cs
public System.Byte[] Data { get; set; }
```
## Icons Property {#icons}
Enumerates the the icons in the icon group.
### Declaration
```cs
public IEnumerable<WixToolset.Dtf.Resources.Resource> Icons { get; set; }
```
