---
title: FileRow Class
---
Specialization of a row for the file table.
## Properties
| Property | Description |
| ------ | ----------- |
| [Attributes](#attributes) | Gets or sets the attributes on a file. |
| [Component](#component) | Gets or sets the component this file row belongs to. |
| [Compressed](#compressed) | Gets or sets whether this file should be compressed. |
| [DiskId](#diskid) | Gets or sets the disk id for this file. |
| [File](#file) | Gets or sets the primary key of the file row. |
| [FileName](#filename) | Gets or sets the name of the file. |
| [FileSize](#filesize) | Gets or sets the size of the file. |
| [Language](#language) | Gets or sets the LCID of the file. |
| [LongFileName](#longfilename) | Gets or sets the real filesystem name of the file (without a pipe). This is typically the long name of the file. However, if no long name is available, falls back to the short name. |
| [PreviousSource](#previoussource) | Gets or sets the source location to the previous file. |
| [Sequence](#sequence) | Gets or sets the sequence of the file row. |
| [Source](#source) | Gets or sets the source location to the file. |
| [Version](#version) | Gets or sets the version of the file. |
`WixToolset.Data.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Attributes Property {#attributes}
Gets or sets the attributes on a file.
### Declaration
```cs
public int Attributes { get; set; }
```
## Component Property {#component}
Gets or sets the component this file row belongs to.
### Declaration
```cs
public string Component { get; set; }
```
## Compressed Property {#compressed}
Gets or sets whether this file should be compressed.
### Declaration
```cs
public WixToolset.Data.YesNoType Compressed { get; set; }
```
## DiskId Property {#diskid}
Gets or sets the disk id for this file.
### Declaration
```cs
public int DiskId { get; set; }
```
## File Property {#file}
Gets or sets the primary key of the file row.
### Declaration
```cs
public string File { get; set; }
```
## FileName Property {#filename}
Gets or sets the name of the file.
### Declaration
```cs
public string FileName { get; set; }
```
## FileSize Property {#filesize}
Gets or sets the size of the file.
### Declaration
```cs
public int FileSize { get; set; }
```
## Language Property {#language}
Gets or sets the LCID of the file.
### Declaration
```cs
public string Language { get; set; }
```
## LongFileName Property {#longfilename}
Gets or sets the real filesystem name of the file (without a pipe). This is typically the long name of the file. However, if no long name is available, falls back to the short name.
### Declaration
```cs
public string LongFileName { get; set; }
```
## PreviousSource Property {#previoussource}
Gets or sets the source location to the previous file.
### Declaration
```cs
public string PreviousSource { get; set; }
```
## Sequence Property {#sequence}
Gets or sets the sequence of the file row.
### Declaration
```cs
public int Sequence { get; set; }
```
## Source Property {#source}
Gets or sets the source location to the file.
### Declaration
```cs
public string Source { get; set; }
```
## Version Property {#version}
Gets or sets the version of the file.
### Declaration
```cs
public string Version { get; set; }
```
