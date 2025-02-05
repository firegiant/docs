---
title: CompressionEngine Class
---
Base class for an engine capable of packing and unpacking a particular compressed file format.
## Methods
| Method | Description |
| ------ | ----------- |
| [Dispose()](#dispose_nop) | Disposes of resources allocated by the compression engine. |
| [Dispose(disposing)](#dispose_disposing) | Disposes of resources allocated by the compression engine. |
| [Finalize()](#finalize_nop) | Disposes the compression engine. |
| [FindArchiveOffset(stream)](#findarchiveoffset_stream) | Gets the offset of an archive that is positioned 0 or more bytes from the start of the Stream. |
| [GetFileInfo(stream)](#getfileinfo_stream) | Gets information about all files in an archive stream. |
| [GetFiles(stream)](#getfiles_stream) | Gets the list of files in an archive Stream. |
| [IsArchive(stream)](#isarchive_stream) | Checks whether a Stream begins with a header that indicates it is a valid archive. |
| [OnProgress(e)](#onprogress_e) | Called by sublcasses to distribute a packing or unpacking progress event to listeners. |
| [Unpack(stream, path)](#unpack_stream_path) | Reads a single file from an archive stream. |
## Properties
| Property | Description |
| ------ | ----------- |
| [CompressionLevel](#compressionlevel) | Compression level to use when compressing files. |
| [UseTempFiles](#usetempfiles) | Gets or sets a flag indicating whether temporary files are created and used during compression. |
## Events
| Event | Description |
| ------ | ----------- |
| [Progress](#progress) | Occurs when the compression engine reports progress in packing or unpacking an archive. |
`WixToolset.Dtf.Compression.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Dispose() Method {#dispose_nop}
Disposes of resources allocated by the compression engine.
### Declaration
```cs
public void Dispose()
```
## Dispose(disposing) Method {#dispose_disposing}
Disposes of resources allocated by the compression engine.
### Declaration
```cs
protected void Dispose(
  bool disposing
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| disposing | bool | If true, the method has been called directly or indirectly by a user's code, so managed and unmanaged resources will be disposed. If false, the method has been called by the runtime from inside the finalizer, and only unmanaged resources will be disposed. |
## Finalize() Method {#finalize_nop}
Disposes the compression engine.
### Declaration
```cs
protected void Finalize()
```
## FindArchiveOffset(stream) Method {#findarchiveoffset_stream}
Gets the offset of an archive that is positioned 0 or more bytes from the start of the Stream.
### Declaration
```cs
public System.Int64 FindArchiveOffset(
  System.IO.Stream stream
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| stream | System.IO.Stream | A stream for reading the archive. |
### Return value
`System.Int64` The offset in bytes of the archive, or -1 if no archive is found in the Stream.
### Remarks
The archive must begin on a 4-byte boundary.
## GetFileInfo(stream) Method {#getfileinfo_stream}
Gets information about all files in an archive stream.
### Declaration
```cs
public IList<WixToolset.Dtf.Compression.ArchiveFileInfo> GetFileInfo(
  System.IO.Stream stream
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| stream | System.IO.Stream | A stream for reading the archive. |
### Return value
`IList<WixToolset.Dtf.Compression.ArchiveFileInfo>` Information about all files in the archive stream.
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.Compression.ArchiveException | The stream is not a valid
            archive. |
## GetFiles(stream) Method {#getfiles_stream}
Gets the list of files in an archive Stream.
### Declaration
```cs
public IList<System.String> GetFiles(
  System.IO.Stream stream
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| stream | System.IO.Stream | A stream for reading the archive. |
### Return value
`IList<System.String>` A list of the paths of all files contained in the archive.
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.Compression.ArchiveException | The stream is not a valid
            archive. |
## IsArchive(stream) Method {#isarchive_stream}
Checks whether a Stream begins with a header that indicates it is a valid archive.
### Declaration
```cs
public bool IsArchive(
  System.IO.Stream stream
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| stream | System.IO.Stream | Stream for reading the archive file. |
### Return value
`bool` True if the stream is a valid archive (with no offset); false otherwise.
## OnProgress(e) Method {#onprogress_e}
Called by sublcasses to distribute a packing or unpacking progress event to listeners.
### Declaration
```cs
protected void OnProgress(
  ArchiveProgressEventArgs e
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| e | ArchiveProgressEventArgs | Event details. |
## Unpack(stream, path) Method {#unpack_stream_path}
Reads a single file from an archive stream.
### Declaration
```cs
public System.IO.Stream Unpack(
  System.IO.Stream stream,
  string path
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| stream | System.IO.Stream | A stream for reading the archive. |
| path | string | The path of the file within the archive (not the external file path). |
### Return value
`System.IO.Stream` A stream for reading the extracted file, or null if the file does not exist in the archive.
### Remarks
The entire extracted file is cached in memory, so this method requires enough free memory to hold the file.
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.Compression.ArchiveException | The stream is not a valid
            archive. |
## CompressionLevel Property {#compressionlevel}
Compression level to use when compressing files.
### Declaration
```cs
public CompressionLevel CompressionLevel { get; set; }
```
## UseTempFiles Property {#usetempfiles}
Gets or sets a flag indicating whether temporary files are created and used during compression.
### Declaration
```cs
public bool UseTempFiles { get; set; }
```
### Remarks
The value of this property is true by default. Using temporary files can greatly reduce the memory requirement of compression, especially when compressing large archives. However, setting this property to false may yield slightly better performance when creating small archives. Or it may be necessary if the process does not have sufficient privileges to create temporary files.
## Progress Event {#progress}
Occurs when the compression engine reports progress in packing or unpacking an archive.
### Declaration
```cs
public System.EventHandler<WixToolset.Dtf.Compression.ArchiveProgressEventArgs> Progress
```
### Value
`System.EventHandler<WixToolset.Dtf.Compression.ArchiveProgressEventArgs>`
### See also
- T:WixToolset.Dtf.Compression.ArchiveProgressType
