---
title: WixCorruptFileException Class
---
Exception when file does not match the expected format.
## Properties
| Property | Description |
| ------ | ----------- |
| [FileFormat](#fileformat) | Gets the actual file format found in the file. |
| [Path](#path) | Gets the path to the file with unexpected format. |
`WixToolset.Data.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## FileFormat Property {#fileformat}
Gets the actual file format found in the file.
### Declaration
```cs
public string FileFormat { get; set; }
```
## Path Property {#path}
Gets the path to the file with unexpected format.
### Declaration
```cs
public string Path { get; set; }
```
