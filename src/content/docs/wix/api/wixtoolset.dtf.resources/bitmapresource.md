---
title: BitmapResource Class
---
A subclass of Resource which provides specific methods for manipulating the resource data.
## Methods
| Method | Description |
| ------ | ----------- |
| [ReadFromFile(path)](#readfromfile_path) | Reads the bitmap from a .bmp file. |
### Remarks
The resource is of type «see P:WixToolset.Dtf.Resources.ResourceType.Bitmap» (RT_GROUPICON).
`WixToolset.Dtf.Resources.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## ReadFromFile(path) Method {#readfromfile_path}
Reads the bitmap from a .bmp file.
### Declaration
```cs
public void ReadFromFile(
  string path
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| path | string | Path to a bitmap file (.bmp). |
