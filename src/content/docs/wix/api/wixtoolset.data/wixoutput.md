---
title: WixOutput Class
---
Class that understands the standard file structure of the WiX toolset.
## Methods
| Method | Description |
| ------ | ----------- |
| [Create()](#create_nop) | Creates a new file structure in memory. |
| [Create(path)](#create_path) | Creates a new file structure on disk. |
| [Create(uri, stream)](#create_uri_stream) | Creates a new file structure. |
| [CreateDataStream()](#createdatastream_nop) | Creates a data stream in the wixout. |
| [Dispose()](#dispose_nop) | Disposes of the internal state of the file structure. |
| [Dispose(disposing)](#dispose_disposing) | Disposes of the internsl state of the file structure. |
| [ExtractEmbeddedFile(embeddedId, outputPath)](#extractembeddedfile_embeddedid_outputpath) | Extracts an embedded file. |
| [GetData()](#getdata_nop) | Gets the data of the file as a string. |
| [GetDataStream()](#getdatastream_nop) | Gets a non-closing stream to the data of the file. |
| [ImportDataStream(name, path)](#importdatastream_name_path) | Imports a file from disk into the output. |
| [Read(path)](#read_path) | Loads a wixout from a path on disk. |
| [Read(baseUri)](#read_baseuri) | Loads a wixout from a path on disk or embedded resource in assembly. |
| [Read(assembly, resourceName)](#read_assembly_resourcename) | Loads a wixout from an assembly resource stream. |
| [Read(uri, stream)](#read_uri_stream) | Reads a file structure from an open stream. |
| [Reopen(writable)](#reopen_writable) | Reopen the underlying archive for read-only or read-write access. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Uri](#uri) |  |
`WixToolset.Data.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Create() Method {#create_nop}
Creates a new file structure in memory.
### Declaration
```cs
public static WixOutput Create()
```
### Return value
`WixOutput` Newly created `WixOutput` .
## Create(path) Method {#create_path}
Creates a new file structure on disk.
### Declaration
```cs
public static WixOutput Create(
  string path
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| path | string | Path to write file structure to. |
### Return value
`WixOutput` Newly created `WixOutput` .
## Create(uri, stream) Method {#create_uri_stream}
Creates a new file structure.
### Declaration
```cs
public static WixOutput Create(
  System.Uri uri,
  System.IO.Stream stream
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| uri | System.Uri |  |
| stream | System.IO.Stream | Stream to write the file structure to. |
### Return value
`WixOutput` Newly created `WixOutput` .
## CreateDataStream() Method {#createdatastream_nop}
Creates a data stream in the wixout.
### Declaration
```cs
public System.IO.Stream CreateDataStream()
```
### Return value
`System.IO.Stream` Stream to the data of the file.
## Dispose() Method {#dispose_nop}
Disposes of the internal state of the file structure.
### Declaration
```cs
public void Dispose()
```
## Dispose(disposing) Method {#dispose_disposing}
Disposes of the internsl state of the file structure.
### Declaration
```cs
protected void Dispose(
  bool disposing
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| disposing | bool | True if disposing. |
## ExtractEmbeddedFile(embeddedId, outputPath) Method {#extractembeddedfile_embeddedid_outputpath}
Extracts an embedded file.
### Declaration
```cs
public void ExtractEmbeddedFile(
  string embeddedId,
  string outputPath
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| embeddedId | string | Id to the file to extract. |
| outputPath | string | Path to write the extracted file to. |
## GetData() Method {#getdata_nop}
Gets the data of the file as a string.
### Declaration
```cs
public string GetData()
```
### Return value
`string` String contents data of the file.
## GetDataStream() Method {#getdatastream_nop}
Gets a non-closing stream to the data of the file.
### Declaration
```cs
public System.IO.Stream GetDataStream()
```
### Return value
`System.IO.Stream` Stream to the data of the file.
## ImportDataStream(name, path) Method {#importdatastream_name_path}
Imports a file from disk into the output.
### Declaration
```cs
public void ImportDataStream(
  string name,
  string path
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | string | Name of the stream in the output. |
| path | string | Path to file on disk to include in the output. |
## Read(path) Method {#read_path}
Loads a wixout from a path on disk.
### Declaration
```cs
public static WixOutput Read(
  string path
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| path | string | Path to wixout file saved on disk. |
### Return value
`WixOutput` Loaded created `WixOutput` .
## Read(baseUri) Method {#read_baseuri}
Loads a wixout from a path on disk or embedded resource in assembly.
### Declaration
```cs
public static WixOutput Read(
  System.Uri baseUri
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| baseUri | System.Uri | Uri with local path to wixout file saved on disk or embedded resource in assembly. |
### Return value
`WixOutput` Loaded created `WixOutput` .
## Read(assembly, resourceName) Method {#read_assembly_resourcename}
Loads a wixout from an assembly resource stream.
### Declaration
```cs
public static WixOutput Read(
  System.Reflection.Assembly assembly,
  string resourceName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| assembly | System.Reflection.Assembly |  |
| resourceName | string |  |
### Return value
`WixOutput` Loaded created `WixOutput` .
## Read(uri, stream) Method {#read_uri_stream}
Reads a file structure from an open stream.
### Declaration
```cs
public static WixOutput Read(
  System.Uri uri,
  System.IO.Stream stream
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| uri | System.Uri |  |
| stream | System.IO.Stream | Stream to read from. |
### Return value
`WixOutput` Loaded created `WixOutput` .
## Reopen(writable) Method {#reopen_writable}
Reopen the underlying archive for read-only or read-write access.
### Declaration
```cs
public void Reopen(
  bool writable
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| writable | bool | Indicates whether the output can be modified. Defaults to false. |
## Uri Property {#uri}

### Declaration
```cs
public System.Uri Uri { get; set; }
```
