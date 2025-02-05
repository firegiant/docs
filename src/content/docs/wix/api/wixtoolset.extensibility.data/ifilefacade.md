---
title: IFileFacade Interface
---
Interface that provides a common facade over file information.
## Properties
| Property | Description |
| ------ | ----------- |
| [AssemblyNameSymbols](#assemblynamesymbols) | Assembly names found in the file. |
| [ComponentRef](#componentref) | Component containing the file. |
| [Compressed](#compressed) | Indicates whether the file is compressed. |
| [DiskId](#diskid) | Disk Id for the file. |
| [FileName](#filename) | Name of the file. |
| [FileSize](#filesize) | Size of the file. |
| [Id](#id) | Helper accessor for the Id of the Identifier. |
| [Identifier](#identifier) | Underlying identifier of the file. |
| [Language](#language) | Language of the file. |
| [MsiFileHashSymbol](#msifilehashsymbol) | Calculated hash of the file. |
| [PatchGroup](#patchgroup) | Optional patch group for the file. |
| [Sequence](#sequence) | Sequence of the file. |
| [SourceLineNumber](#sourcelinenumber) | Source line number that define the file. |
| [SourcePath](#sourcepath) | Source to the file. |
| [Uncompressed](#uncompressed) | Indicates whether the file is to be uncompressed. |
| [Version](#version) | Version of the file. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## AssemblyNameSymbols Property {#assemblynamesymbols}
Assembly names found in the file.
### Declaration
```cs
public System.Collections.Generic.ICollection<WixToolset.Data.Symbols.MsiAssemblyNameSymbol> AssemblyNameSymbols { get; set; }
```
## ComponentRef Property {#componentref}
Component containing the file.
### Declaration
```cs
public string ComponentRef { get; set; }
```
## Compressed Property {#compressed}
Indicates whether the file is compressed.
### Declaration
```cs
public bool Compressed { get; set; }
```
## DiskId Property {#diskid}
Disk Id for the file.
### Declaration
```cs
public int DiskId { get; set; }
```
## FileName Property {#filename}
Name of the file.
### Declaration
```cs
public string FileName { get; set; }
```
## FileSize Property {#filesize}
Size of the file.
### Declaration
```cs
public int FileSize { get; set; }
```
## Id Property {#id}
Helper accessor for the Id of the Identifier.
### Declaration
```cs
public string Id { get; set; }
```
## Identifier Property {#identifier}
Underlying identifier of the file.
### Declaration
```cs
public WixToolset.Data.Identifier Identifier { get; set; }
```
## Language Property {#language}
Language of the file.
### Declaration
```cs
public string Language { get; set; }
```
## MsiFileHashSymbol Property {#msifilehashsymbol}
Calculated hash of the file.
### Declaration
```cs
public WixToolset.Data.Symbols.MsiFileHashSymbol MsiFileHashSymbol { get; set; }
```
## PatchGroup Property {#patchgroup}
Optional patch group for the file.
### Declaration
```cs
public System.Nullable<System.Int32> PatchGroup { get; set; }
```
## Sequence Property {#sequence}
Sequence of the file.
### Declaration
```cs
public int Sequence { get; set; }
```
## SourceLineNumber Property {#sourcelinenumber}
Source line number that define the file.
### Declaration
```cs
public WixToolset.Data.SourceLineNumber SourceLineNumber { get; set; }
```
## SourcePath Property {#sourcepath}
Source to the file.
### Declaration
```cs
public string SourcePath { get; set; }
```
## Uncompressed Property {#uncompressed}
Indicates whether the file is to be uncompressed.
### Declaration
```cs
public bool Uncompressed { get; set; }
```
## Version Property {#version}
Version of the file.
### Declaration
```cs
public string Version { get; set; }
```
