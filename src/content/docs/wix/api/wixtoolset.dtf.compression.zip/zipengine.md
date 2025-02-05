---
title: ZipEngine Class
---
Engine capable of packing and unpacking archives in the zip format.
## Methods
| Method | Description |
| ------ | ----------- |
| [FindArchiveOffset(stream)](#findarchiveoffset_stream) | Gets the offset of an archive that is positioned 0 or more bytes from the start of the Stream. |
| [IsArchive(stream)](#isarchive_stream) | Checks whether a Stream begins with a header that indicates it is a valid archive file. |
## Properties
| Property | Description |
| ------ | ----------- |
| [ArchiveComment](#archivecomment) | Gets the comment from the last-examined archive, or sets the comment to be added to any created archives. |
`WixToolset.Dtf.Compression.Zip.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
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
## IsArchive(stream) Method {#isarchive_stream}
Checks whether a Stream begins with a header that indicates it is a valid archive file.
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
`bool` True if the stream is a valid zip archive (with no offset); false otherwise.
## ArchiveComment Property {#archivecomment}
Gets the comment from the last-examined archive, or sets the comment to be added to any created archives.
### Declaration
```cs
public string ArchiveComment { get; set; }
```
