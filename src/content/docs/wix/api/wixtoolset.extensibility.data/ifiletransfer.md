---
title: IFileTransfer Interface
---
Structure used for all file transfer information.
## Properties
| Property | Description |
| ------ | ----------- |
| [Destination](#destination) | Destination path for file. |
| [Move](#move) | Flag if file should be moved (optimal). |
| [Redundant](#redundant) | Set during layout of media when the file transfer when the source and target resolve to the same path. |
| [Source](#source) | Source path to file. |
| [SourceLineNumbers](#sourcelinenumbers) | Optional source line numbers where this file transfer orginated. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Destination Property {#destination}
Destination path for file.
### Declaration
```cs
public string Destination { get; set; }
```
## Move Property {#move}
Flag if file should be moved (optimal).
### Declaration
```cs
public bool Move { get; set; }
```
## Redundant Property {#redundant}
Set during layout of media when the file transfer when the source and target resolve to the same path.
### Declaration
```cs
public bool Redundant { get; set; }
```
## Source Property {#source}
Source path to file.
### Declaration
```cs
public string Source { get; set; }
```
## SourceLineNumbers Property {#sourcelinenumbers}
Optional source line numbers where this file transfer orginated.
### Declaration
```cs
public WixToolset.Data.SourceLineNumber SourceLineNumbers { get; set; }
```
