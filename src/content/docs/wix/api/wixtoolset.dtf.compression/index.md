---
title: WixToolset.Dtf.Compression namespace
---
## Classes
| Class | Description |
| -------- | ----------- |
| [ArchiveException](archiveexception) | Base exception class for compression operations. Compression libraries should derive subclass exceptions with more specific error information relevent to the file format. |
| [ArchiveFileInfo](archivefileinfo) | Abstract object representing a compressed file within an archive; provides operations for getting the file properties and unpacking the file. |
| [ArchiveFileStreamContext](archivefilestreamcontext) | Provides a basic implementation of the archive pack and unpack stream context interfaces, based on a list of archive files, a default directory, and an optional mapping from internal to external file paths. |
| [ArchiveInfo](archiveinfo) | Abstract object representing a compressed archive on disk; provides access to file-based operations on the archive. |
| [ArchiveProgressEventArgs](archiveprogresseventargs) | Contains the data reported in an archive progress event. |
| [BasicUnpackStreamContext](basicunpackstreamcontext) | Stream context used to extract a single file from an archive into a memory stream. |
| [CargoStream](cargostream) | Wraps a source stream and carries additional items that are disposed when the stream is closed. |
| [CompressionEngine](compressionengine) | Base class for an engine capable of packing and unpacking a particular compressed file format. |
| [DuplicateStream](duplicatestream) | Duplicates a source stream by maintaining a separate position. |
| [OffsetStream](offsetstream) | Wraps a source stream and offsets all read/write/seek calls by a given value. |
## Interfaces
| Interface | Description |
| -------- | ----------- |
| [IPackStreamContext](ipackstreamcontext) | This interface provides the methods necessary for the «see T:WixToolset.Dtf.Compression.CompressionEngine» to open and close streams for archives and files. The implementor of this interface can use any kind of logic to determine what kind of streams to open and where. |
| [IUnpackStreamContext](iunpackstreamcontext) | This interface provides the methods necessary for the «see T:WixToolset.Dtf.Compression.CompressionEngine» to open and close streams for archives and files. The implementor of this interface can use any kind of logic to determine what kind of streams to open and where |
## Enumerations
| Enumeration | Description |
| -------- | ----------- |
| [ArchiveProgressType](archiveprogresstype) | The type of progress event. |
| [CompressionLevel](compressionlevel) | Specifies the compression level ranging from minimum compresion to maximum compression, or no compression at all. |
