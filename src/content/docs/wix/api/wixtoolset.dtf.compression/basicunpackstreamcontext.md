---
title: BasicUnpackStreamContext Class
---
Stream context used to extract a single file from an archive into a memory stream.
## Methods
| Method | Description |
| ------ | ----------- |
| [CloseArchiveReadStream(archiveNumber, archiveName, stream)](#closearchivereadstream_archivenumber_archivename_stream) | Does *not* close the stream. The archive stream should be managed by the code that invokes the archive extraction. |
| [CloseFileWriteStream(path, stream, attributes, lastWriteTime)](#closefilewritestream_path_stream_attributes_lastwritetime) | Does *not* close the file stream. The file stream is saved in memory so it can be read later. |
| [OpenArchiveReadStream(archiveNumber, archiveName, compressionEngine)](#openarchivereadstream_archivenumber_archivename_compressionengine) | Opens the archive stream for reading. Returns a DuplicateStream instance, so the stream may be virtually opened multiple times. |
| [OpenFileWriteStream(path, fileSize, lastWriteTime)](#openfilewritestream_path_filesize_lastwritetime) | Opens a stream for writing extracted file bytes. The returned stream is a MemoryStream instance, so the file is extracted straight into memory. |
## Properties
| Property | Description |
| ------ | ----------- |
| [FileStream](#filestream) | Gets the stream for the extracted file, or null if no file was extracted. |
`WixToolset.Dtf.Compression.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CloseArchiveReadStream(archiveNumber, archiveName, stream) Method {#closearchivereadstream_archivenumber_archivename_stream}
Does *not* close the stream. The archive stream should be managed by the code that invokes the archive extraction.
### Declaration
```cs
public void CloseArchiveReadStream(
  int archiveNumber,
  string archiveName,
  System.IO.Stream stream
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| archiveNumber | int | The archive number of the stream to close. |
| archiveName | string | The name of the archive being closed. |
| stream | System.IO.Stream | The stream being closed. |
## CloseFileWriteStream(path, stream, attributes, lastWriteTime) Method {#closefilewritestream_path_stream_attributes_lastwritetime}
Does *not* close the file stream. The file stream is saved in memory so it can be read later.
### Declaration
```cs
public void CloseFileWriteStream(
  string path,
  System.IO.Stream stream,
  System.IO.FileAttributes attributes,
  System.DateTime lastWriteTime
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| path | string | Path of the file within the archive. |
| stream | System.IO.Stream | The file stream to be closed. |
| attributes | System.IO.FileAttributes | The attributes of the extracted file. |
| lastWriteTime | System.DateTime | The last write time of the file. |
## OpenArchiveReadStream(archiveNumber, archiveName, compressionEngine) Method {#openarchivereadstream_archivenumber_archivename_compressionengine}
Opens the archive stream for reading. Returns a DuplicateStream instance, so the stream may be virtually opened multiple times.
### Declaration
```cs
public System.IO.Stream OpenArchiveReadStream(
  int archiveNumber,
  string archiveName,
  CompressionEngine compressionEngine
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| archiveNumber | int | The archive number to open (ignored; 0 is assumed). |
| archiveName | string | The name of the archive being opened. |
| compressionEngine | CompressionEngine | Instance of the compression engine doing the operations. |
### Return value
`System.IO.Stream` A stream from which archive bytes are read.
## OpenFileWriteStream(path, fileSize, lastWriteTime) Method {#openfilewritestream_path_filesize_lastwritetime}
Opens a stream for writing extracted file bytes. The returned stream is a MemoryStream instance, so the file is extracted straight into memory.
### Declaration
```cs
public System.IO.Stream OpenFileWriteStream(
  string path,
  System.Int64 fileSize,
  System.DateTime lastWriteTime
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| path | string | Path of the file within the archive. |
| fileSize | System.Int64 | The uncompressed size of the file to be extracted. |
| lastWriteTime | System.DateTime | The last write time of the file. |
### Return value
`System.IO.Stream` A stream where extracted file bytes are to be written.
## FileStream Property {#filestream}
Gets the stream for the extracted file, or null if no file was extracted.
### Declaration
```cs
public System.IO.Stream FileStream { get; set; }
```
