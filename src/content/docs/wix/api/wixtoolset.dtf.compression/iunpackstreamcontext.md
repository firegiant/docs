---
title: IUnpackStreamContext Interface
---
This interface provides the methods necessary for the «see T:WixToolset.Dtf.Compression.CompressionEngine» to open and close streams for archives and files. The implementor of this interface can use any kind of logic to determine what kind of streams to open and where
## Methods
| Method | Description |
| ------ | ----------- |
| [CloseArchiveReadStream(archiveNumber, archiveName, stream)](#closearchivereadstream_archivenumber_archivename_stream) | Closes a stream where an archive package was read. |
| [CloseFileWriteStream(path, stream, attributes, lastWriteTime)](#closefilewritestream_path_stream_attributes_lastwritetime) | Closes a stream where an extracted file was written. |
| [OpenArchiveReadStream(archiveNumber, archiveName, compressionEngine)](#openarchivereadstream_archivenumber_archivename_compressionengine) | Opens the archive stream for reading. |
| [OpenFileWriteStream(path, fileSize, lastWriteTime)](#openfilewritestream_path_filesize_lastwritetime) | Opens a stream for writing extracted file bytes. |
`WixToolset.Dtf.Compression.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CloseArchiveReadStream(archiveNumber, archiveName, stream) Method {#closearchivereadstream_archivenumber_archivename_stream}
Closes a stream where an archive package was read.
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
| stream | System.IO.Stream | The stream that was previously returned by and is now ready to be closed. |
## CloseFileWriteStream(path, stream, attributes, lastWriteTime) Method {#closefilewritestream_path_stream_attributes_lastwritetime}
Closes a stream where an extracted file was written.
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
| path | string | The path of the file within the archive. |
| stream | System.IO.Stream | The stream that was previously returned by and is now ready to be closed. |
| attributes | System.IO.FileAttributes | The attributes of the extracted file. |
| lastWriteTime | System.DateTime | The last write time of the file. |
### Remarks
The implementor may wish to apply the attributes and date to the newly-extracted file.
## OpenArchiveReadStream(archiveNumber, archiveName, compressionEngine) Method {#openarchivereadstream_archivenumber_archivename_compressionengine}
Opens the archive stream for reading.
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
| archiveNumber | int | The zero-based index of the archive to open. |
| archiveName | string | The name of the archive being opened. |
| compressionEngine | CompressionEngine | Instance of the compression engine doing the operations. |
### Return value
`System.IO.Stream` A stream from which archive bytes are read, or null to cancel extraction of the archive.
### Remarks
When the first archive in a chain is opened, the name is not yet known, so the provided value will be an empty string. When opening further archives, the provided value is the next-archive name stored in the previous archive. This name is often, but not necessarily, the same as the filename of the archive package to be opened.If this method returns null, the archive engine will throw a FileNotFoundException.

## OpenFileWriteStream(path, fileSize, lastWriteTime) Method {#openfilewritestream_path_filesize_lastwritetime}
Opens a stream for writing extracted file bytes.
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
| path | string | The path of the file within the archive. This is often, but not necessarily, the same as the relative path of the file outside the archive. |
| fileSize | System.Int64 | The uncompressed size of the file to be extracted. |
| lastWriteTime | System.DateTime | The last write time of the file to be extracted. |
### Return value
`System.IO.Stream` A stream where extracted file bytes are to be written, or null to skip extraction of the file and continue to the next file.
### Remarks
The implementor may use the path, size and date information to dynamically decide whether or not the file should be extracted.
