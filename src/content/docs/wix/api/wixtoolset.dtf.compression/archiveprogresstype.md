---
title: ArchiveProgressType Enumeration
---
The type of progress event.
## Members
| Member | Description |
| ------ | ----------- |
| FinishArchive | Status message after completion of the packing or unpacking of an archive. |
| FinishFile | Status message after completion of the packing or unpacking an individual file. |
| PartialArchive | Status message (possibly reported multiple times) during the process of packing or unpacking an archiv. |
| PartialFile | Status message (possibly reported multiple times) during the process of packing or unpacking a file. |
| StartArchive | Status message before beginning the packing or unpacking an archive. |
| StartFile | Status message before beginning the packing or unpacking an individual file. |
### Remarks
PACKING EXAMPLE: The following sequence of events might be received when extracting a simple archive file with 2 files.

- StartArchive: Begin extracting archive
- StartFile: Begin extracting first file
- PartialFile: Extracting first file
- PartialFile: Extracting first file
- FinishFile: Finished extracting first file
- StartFile: Begin extracting second file
- PartialFile: Extracting second file
- FinishFile: Finished extracting second file
- FinishArchive: Finished extracting archive

UNPACKING EXAMPLE: Packing 3 files into 2 archive chunks, where the second file is continued to the second archive chunk.

- StartFile: Begin compressing first file
- FinishFile: Finished compressing first file
- StartFile: Begin compressing second file
- PartialFile: Compressing second file
- PartialFile: Compressing second file
- FinishFile: Finished compressing second file
- StartArchive: Begin writing first archive
- PartialArchive: Writing first archive
- FinishArchive: Finished writing first archive
- StartFile: Begin compressing third file
- PartialFile: Compressing third file
- FinishFile: Finished compressing third file
- StartArchive: Begin writing second archive
- PartialArchive: Writing second archive
- FinishArchive: Finished writing second archive

`WixToolset.Dtf.Compression.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
