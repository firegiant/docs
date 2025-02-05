---
title: ArchiveFileInfo Class
---
Abstract object representing a compressed file within an archive; provides operations for getting the file properties and unpacking the file.
## Methods
| Method | Description |
| ------ | ----------- |
| [CopyTo(destFileName)](#copyto_destfilename) | Extracts the file. |
| [CopyTo(destFileName, overwrite)](#copyto_destfilename_overwrite) | Extracts the file, optionally overwriting any existing file. |
| [Delete()](#delete_nop) | Deletes the file. NOT SUPPORTED. |
| [GetObjectData(info, context)](#getobjectdata_info_context) | Sets the SerializationInfo with information about the archive. |
| [OpenRead()](#openread_nop) | Opens the archive file for reading without actually extracting the file to disk. |
| [OpenText()](#opentext_nop) | Opens the archive file reading text with UTF-8 encoding without actually extracting the file to disk. |
| [Refresh()](#refresh_nop) | Refreshes the attributes and other cached information about the file, by re-reading the information from the archive. |
| [Refresh(newFileInfo)](#refresh_newfileinfo) | Refreshes the information in this object with new data retrieved from an archive. |
| [ToString()](#tostring_nop) | Gets the full path to the file. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Archive](#archive) | Gets or sets the archive that contains this file. |
| [ArchiveName](#archivename) | Gets the full path of the archive that contains this file. |
| [ArchiveNumber](#archivenumber) | Gets the number of the archive where this file starts. |
| [Attributes](#attributes) | Gets the attributes of the file. |
| [Exists](#exists) | Checks if the file exists within the archive. |
| [FullName](#fullname) | Gets the full path to the file. |
| [LastWriteTime](#lastwritetime) | Gets the last modification time of the file. |
| [Length](#length) | Gets the uncompressed size of the file. |
| [Name](#name) | Gets the name of the file. |
| [Path](#path) | Gets the internal path of the file in the archive. |
`WixToolset.Dtf.Compression.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CopyTo(destFileName) Method {#copyto_destfilename}
Extracts the file.
### Declaration
```cs
public void CopyTo(
  string destFileName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| destFileName | string | The destination path where the file will be extracted. |
## CopyTo(destFileName, overwrite) Method {#copyto_destfilename_overwrite}
Extracts the file, optionally overwriting any existing file.
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
| destFileName | string | The destination path where the file will be extracted. |
| overwrite | bool | If true, will be overwritten if it exists. |
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.IO.IOException |  is false
            and  exists. |
## Delete() Method {#delete_nop}
Deletes the file. NOT SUPPORTED.
### Declaration
```cs
public void Delete()
```
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.NotSupportedException | Files cannot be deleted
            from an existing archive. |
## GetObjectData(info, context) Method {#getobjectdata_info_context}
Sets the SerializationInfo with information about the archive.
### Declaration
```cs
public void GetObjectData(
  System.Runtime.Serialization.SerializationInfo info,
  System.Runtime.Serialization.StreamingContext context
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| info | System.Runtime.Serialization.SerializationInfo | The SerializationInfo that holds the serialized object data. |
| context | System.Runtime.Serialization.StreamingContext | The StreamingContext that contains contextual information about the source or destination. |
## OpenRead() Method {#openread_nop}
Opens the archive file for reading without actually extracting the file to disk.
### Declaration
```cs
public System.IO.Stream OpenRead()
```
### Return value
`System.IO.Stream` A stream for reading directly from the packed file. Like any stream this should be closed/disposed as soon as it is no longer needed.
## OpenText() Method {#opentext_nop}
Opens the archive file reading text with UTF-8 encoding without actually extracting the file to disk.
### Declaration
```cs
public System.IO.StreamReader OpenText()
```
### Return value
`System.IO.StreamReader` A reader for reading text directly from the packed file. Like any reader this should be closed/disposed as soon as it is no longer needed.
### Remarks
To open an archived text file with different encoding, use the «see M:WixToolset.Dtf.Compression.ArchiveFileInfo.OpenRead» method and pass the returned stream to one of the «see T:System.IO.StreamReader» constructor overloads.
## Refresh() Method {#refresh_nop}
Refreshes the attributes and other cached information about the file, by re-reading the information from the archive.
### Declaration
```cs
public void Refresh()
```
## Refresh(newFileInfo) Method {#refresh_newfileinfo}
Refreshes the information in this object with new data retrieved from an archive.
### Declaration
```cs
protected void Refresh(
  ArchiveFileInfo newFileInfo
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| newFileInfo | ArchiveFileInfo | Fresh instance for the same file just read from the archive. |
### Remarks
Subclasses may override this method to refresh sublcass fields. However they should always call the base implementation first.
## ToString() Method {#tostring_nop}
Gets the full path to the file.
### Declaration
```cs
public string ToString()
```
### Return value
`string` The same as «see P:WixToolset.Dtf.Compression.ArchiveFileInfo.FullName»
## Archive Property {#archive}
Gets or sets the archive that contains this file.
### Declaration
```cs
public ArchiveInfo Archive { get; set; }
```
## ArchiveName Property {#archivename}
Gets the full path of the archive that contains this file.
### Declaration
```cs
public string ArchiveName { get; set; }
```
## ArchiveNumber Property {#archivenumber}
Gets the number of the archive where this file starts.
### Declaration
```cs
public int ArchiveNumber { get; set; }
```
### Remarks
A single archive or the first archive in a chain is numbered 0.
## Attributes Property {#attributes}
Gets the attributes of the file.
### Declaration
```cs
public System.IO.FileAttributes Attributes { get; set; }
```
## Exists Property {#exists}
Checks if the file exists within the archive.
### Declaration
```cs
public bool Exists { get; set; }
```
## FullName Property {#fullname}
Gets the full path to the file.
### Declaration
```cs
public string FullName { get; set; }
```
### Remarks
For example, the path `"C:\archive.cab\file.txt"` refers to a file "file.txt" inside the archive "archive.cab".
## LastWriteTime Property {#lastwritetime}
Gets the last modification time of the file.
### Declaration
```cs
public System.DateTime LastWriteTime { get; set; }
```
## Length Property {#length}
Gets the uncompressed size of the file.
### Declaration
```cs
public System.Int64 Length { get; set; }
```
## Name Property {#name}
Gets the name of the file.
### Declaration
```cs
public string Name { get; set; }
```
## Path Property {#path}
Gets the internal path of the file in the archive.
### Declaration
```cs
public string Path { get; set; }
```
