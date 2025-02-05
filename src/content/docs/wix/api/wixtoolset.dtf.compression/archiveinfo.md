---
title: ArchiveInfo Class
---
Abstract object representing a compressed archive on disk; provides access to file-based operations on the archive.
## Methods
| Method | Description |
| ------ | ----------- |
| [CopyTo(destFileName)](#copyto_destfilename) | Copies an existing archive to another location. |
| [CopyTo(destFileName, overwrite)](#copyto_destfilename_overwrite) | Copies an existing archive to another location, optionally overwriting the destination file. |
| [CreateCompressionEngine()](#createcompressionengine_nop) | Creates a compression engine that does the low-level work for this object. |
| [Delete()](#delete_nop) | Deletes the archive. |
| [GetFiles()](#getfiles_nop) | Gets information about the files contained in the archive. |
| [GetFiles(searchPattern)](#getfiles_searchpattern) | Gets information about the certain files contained in the archive file. |
| [IsValid()](#isvalid_nop) | Checks if the archive contains a valid archive header. |
| [MoveTo(destFileName)](#moveto_destfilename) | Moves an existing archive to another location. |
| [OpenRead(fileName)](#openread_filename) | Opens a file inside the archive for reading without actually extracting the file to disk. |
| [OpenText(fileName)](#opentext_filename) | Opens a file inside the archive for reading text with UTF-8 encoding without actually extracting the file to disk. |
| [Pack(sourceDirectory)](#pack_sourcedirectory) | Compresses all files in a directory into the archive. Does not include subdirectories. |
| [ToString()](#tostring_nop) | Gets the full path of the archive. |
| [Unpack(destDirectory)](#unpack_destdirectory) | Extracts all files from an archive to a destination directory. |
| [UnpackFile(fileName, destFileName)](#unpackfile_filename_destfilename) | Extracts a single file from the archive. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Directory](#directory) | Gets the directory that contains the archive. |
| [DirectoryName](#directoryname) | Gets the full path of the directory that contains the archive. |
| [Exists](#exists) | Checks if the archive exists. |
| [Length](#length) | Gets the size of the archive. |
| [Name](#name) | Gets the file name of the archive. |
`WixToolset.Dtf.Compression.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CopyTo(destFileName) Method {#copyto_destfilename}
Copies an existing archive to another location.
### Declaration
```cs
public void CopyTo(
  string destFileName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| destFileName | string | The destination file path. |
## CopyTo(destFileName, overwrite) Method {#copyto_destfilename_overwrite}
Copies an existing archive to another location, optionally overwriting the destination file.
### Declaration
```cs
public void CopyTo(
  string destFileName,
  bool overwrite
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| destFileName | string | The destination file path. |
| overwrite | bool | If true, the destination file will be overwritten if it exists. |
## CreateCompressionEngine() Method {#createcompressionengine_nop}
Creates a compression engine that does the low-level work for this object.
### Declaration
```cs
protected CompressionEngine CreateCompressionEngine()
```
### Return value
`CompressionEngine` A new compression engine instance that matches the specific subclass of archive.
### Remarks
Each instance will be «see M:WixToolset.Dtf.Compression.CompressionEngine.Dispose» d immediately after use.
## Delete() Method {#delete_nop}
Deletes the archive.
### Declaration
```cs
public void Delete()
```
## GetFiles() Method {#getfiles_nop}
Gets information about the files contained in the archive.
### Declaration
```cs
public IList<WixToolset.Dtf.Compression.ArchiveFileInfo> GetFiles()
```
### Return value
`IList<WixToolset.Dtf.Compression.ArchiveFileInfo>` A list of «see T:WixToolset.Dtf.Compression.ArchiveFileInfo» objects, each containing information about a file in the archive.
## GetFiles(searchPattern) Method {#getfiles_searchpattern}
Gets information about the certain files contained in the archive file.
### Declaration
```cs
public IList<WixToolset.Dtf.Compression.ArchiveFileInfo> GetFiles(
  string searchPattern
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| searchPattern | string | The search string, such as "*.txt". |
### Return value
`IList<WixToolset.Dtf.Compression.ArchiveFileInfo>` A list of «see T:WixToolset.Dtf.Compression.ArchiveFileInfo» objects, each containing information about a file in the archive.
## IsValid() Method {#isvalid_nop}
Checks if the archive contains a valid archive header.
### Declaration
```cs
public bool IsValid()
```
### Return value
`bool` True if the file is a valid archive; false otherwise.
## MoveTo(destFileName) Method {#moveto_destfilename}
Moves an existing archive to another location.
### Declaration
```cs
public void MoveTo(
  string destFileName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| destFileName | string | The destination file path. |
## OpenRead(fileName) Method {#openread_filename}
Opens a file inside the archive for reading without actually extracting the file to disk.
### Declaration
```cs
public System.IO.Stream OpenRead(
  string fileName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fileName | string | The name of the file in the archive. Also includes the internal path of the file, if any. File name matching is case-insensitive. |
### Return value
`System.IO.Stream` A stream for reading directly from the packed file. Like any stream this should be closed/disposed as soon as it is no longer needed.
## OpenText(fileName) Method {#opentext_filename}
Opens a file inside the archive for reading text with UTF-8 encoding without actually extracting the file to disk.
### Declaration
```cs
public System.IO.StreamReader OpenText(
  string fileName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fileName | string | The name of the file in the archive. Also includes the internal path of the file, if any. File name matching is case-insensitive. |
### Return value
`System.IO.StreamReader` A reader for reading text directly from the packed file. Like any reader this should be closed/disposed as soon as it is no longer needed.
### Remarks
To open an archived text file with different encoding, use the «see M:WixToolset.Dtf.Compression.ArchiveInfo.OpenRead(System.String)» method and pass the returned stream to one of the «see T:System.IO.StreamReader» constructor overloads.
## Pack(sourceDirectory) Method {#pack_sourcedirectory}
Compresses all files in a directory into the archive. Does not include subdirectories.
### Declaration
```cs
public void Pack(
  string sourceDirectory
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceDirectory | string | The directory containing the files to be included. |
### Remarks
Uses maximum compression level.
## ToString() Method {#tostring_nop}
Gets the full path of the archive.
### Declaration
```cs
public string ToString()
```
### Return value
`string` The full path of the archive.
## Unpack(destDirectory) Method {#unpack_destdirectory}
Extracts all files from an archive to a destination directory.
### Declaration
```cs
public void Unpack(
  string destDirectory
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| destDirectory | string | Directory where the files are to be extracted. |
## UnpackFile(fileName, destFileName) Method {#unpackfile_filename_destfilename}
Extracts a single file from the archive.
### Declaration
```cs
public void UnpackFile(
  string fileName,
  string destFileName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fileName | string | The name of the file in the archive. Also includes the internal path of the file, if any. File name matching is case-insensitive. |
| destFileName | string | The path where the file is to be extracted on disk. |
### Remarks
If _destFileName_ already exists, it will be overwritten.
## Directory Property {#directory}
Gets the directory that contains the archive.
### Declaration
```cs
public System.IO.DirectoryInfo Directory { get; set; }
```
## DirectoryName Property {#directoryname}
Gets the full path of the directory that contains the archive.
### Declaration
```cs
public string DirectoryName { get; set; }
```
## Exists Property {#exists}
Checks if the archive exists.
### Declaration
```cs
public bool Exists { get; set; }
```
## Length Property {#length}
Gets the size of the archive.
### Declaration
```cs
public System.Int64 Length { get; set; }
```
## Name Property {#name}
Gets the file name of the archive.
### Declaration
```cs
public string Name { get; set; }
```
