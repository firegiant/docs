---
title: IPackStreamContext Interface
---
This interface provides the methods necessary for the «see T:WixToolset.Dtf.Compression.CompressionEngine» to open and close streams for archives and files. The implementor of this interface can use any kind of logic to determine what kind of streams to open and where.
## Methods
| Method | Description |
| ------ | ----------- |
| [CloseArchiveWriteStream(archiveNumber, archiveName, stream)](#closearchivewritestream_archivenumber_archivename_stream) | Closes a stream where an archive package was written. |
| [CloseFileReadStream(path, stream)](#closefilereadstream_path_stream) | Closes a stream that has been used to read a file. |
| [GetArchiveName(archiveNumber)](#getarchivename_archivenumber) | Gets the name of the archive with a specified number. |
| [GetOption(optionName, parameters)](#getoption_optionname_parameters) | Gets extended parameter information specific to the compression format being used. |
| [OpenArchiveWriteStream(archiveNumber, archiveName, truncate, compressionEngine)](#openarchivewritestream_archivenumber_archivename_truncate_compressionengine) | Opens a stream for writing an archive package. |
`WixToolset.Dtf.Compression.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CloseArchiveWriteStream(archiveNumber, archiveName, stream) Method {#closearchivewritestream_archivenumber_archivename_stream}
Closes a stream where an archive package was written.
### Declaration
```cs
public void CloseArchiveWriteStream(
  int archiveNumber,
  string archiveName,
  System.IO.Stream stream
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| archiveNumber | int | The 0-based index of the archive within the chain. |
| archiveName | string | The name of the archive that was previously returned by . |
| stream | System.IO.Stream | A stream that was previously returned by and is now ready to be closed. |
### Remarks
If there is another archive package in the chain, then after this stream is closed a new stream will be opened.
## CloseFileReadStream(path, stream) Method {#closefilereadstream_path_stream}
Closes a stream that has been used to read a file.
### Declaration
```cs
public void CloseFileReadStream(
  string path,
  System.IO.Stream stream
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| path | string | The path of the file within the archive; the same as the path provided when the stream was opened. |
| stream | System.IO.Stream | A stream that was previously returned by and is now ready to be closed. |
## GetArchiveName(archiveNumber) Method {#getarchivename_archivenumber}
Gets the name of the archive with a specified number.
### Declaration
```cs
public string GetArchiveName(
  int archiveNumber
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| archiveNumber | int | The 0-based index of the archive within the chain. |
### Return value
`string` The name of the requested archive. May be an empty string for non-chained archives, but may never be null.
### Remarks
The archive name is the name stored within the archive, used for identification of the archive especially among archive chains. That name is often, but not necessarily the same as the filename of the archive package.
## GetOption(optionName, parameters) Method {#getoption_optionname_parameters}
Gets extended parameter information specific to the compression format being used.
### Declaration
```cs
public System.Object GetOption(
  string optionName,
  System.Object[] parameters
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| optionName | string | Name of the option being requested. |
| parameters | System.Object[] | Parameters for the option; for per-file options, the first parameter is typically the internal file path. |
### Return value
`System.Object` Option value, or null to use the default behavior.
### Remarks
This method provides a way to set uncommon options during packaging, or a way to handle aspects of compression formats not supported by the base library.For example, this may be used by the zip compression library to specify different compression methods/levels on a per-file basis.
The available option names, parameters, and expected return values should be documented by each compression library.

## OpenArchiveWriteStream(archiveNumber, archiveName, truncate, compressionEngine) Method {#openarchivewritestream_archivenumber_archivename_truncate_compressionengine}
Opens a stream for writing an archive package.
### Declaration
```cs
public System.IO.Stream OpenArchiveWriteStream(
  int archiveNumber,
  string archiveName,
  bool truncate,
  CompressionEngine compressionEngine
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| archiveNumber | int | The 0-based index of the archive within the chain. |
| archiveName | string | The name of the archive that was returned by . |
| truncate | bool | True if the stream should be truncated when opened (if it already exists); false if an existing stream is being re-opened for writing additional data. |
| compressionEngine | CompressionEngine | Instance of the compression engine doing the operations. |
### Return value
`System.IO.Stream` A writable Stream where the compressed archive bytes will be written, or null to cancel the archive creation.
### Remarks
If this method returns null, the archive engine will throw a FileNotFoundException.
