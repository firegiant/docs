---
title: ArchiveProgressEventArgs Class
---
Contains the data reported in an archive progress event.
## Properties
| Property | Description |
| ------ | ----------- |
| [CurrentArchiveBytesProcessed](#currentarchivebytesprocessed) | Gets the number of compressed bytes processed so far during extraction of the current archive. Valid for all extraction messages. |
| [CurrentArchiveName](#currentarchivename) | Gets the name of the current archive. Not necessarily the name of the archive on disk. Valid for all message types. |
| [CurrentArchiveNumber](#currentarchivenumber) | Gets the current archive number, when processing a chained set of archives. Valid for all message types. |
| [CurrentArchiveTotalBytes](#currentarchivetotalbytes) | Gets the total number of compressed bytes to be processed during extraction of the current archive. Valid for all extraction messages. |
| [CurrentFileBytesProcessed](#currentfilebytesprocessed) | Gets the number of bytes processed so far when compressing or extracting a file. Valid for «see F:WixToolset.Dtf.Compression.ArchiveProgressType.StartFile» , «see F:WixToolset.Dtf.Compression.ArchiveProgressType.PartialFile» , and «see F:WixToolset.Dtf.Compression.ArchiveProgressType.FinishFile» messages. |
| [CurrentFileName](#currentfilename) | Gets the name of the file being processed. (The name of the file within the Archive; not the external file path.) Also includes the internal path of the file, if any. Valid for «see F:WixToolset.Dtf.Compression.ArchiveProgressType.StartFile» , «see F:WixToolset.Dtf.Compression.ArchiveProgressType.PartialFile» , and «see F:WixToolset.Dtf.Compression.ArchiveProgressType.FinishFile» messages. |
| [CurrentFileNumber](#currentfilenumber) | Gets the number of the current file being processed. The first file is number 0, and the last file is «see P:WixToolset.Dtf.Compression.ArchiveProgressEventArgs.TotalFiles» -1. Valid for «see F:WixToolset.Dtf.Compression.ArchiveProgressType.StartFile» , «see F:WixToolset.Dtf.Compression.ArchiveProgressType.PartialFile» , and «see F:WixToolset.Dtf.Compression.ArchiveProgressType.FinishFile» messages. |
| [CurrentFileTotalBytes](#currentfiletotalbytes) | Gets the total number of bytes in the current file. Valid for «see F:WixToolset.Dtf.Compression.ArchiveProgressType.StartFile» , «see F:WixToolset.Dtf.Compression.ArchiveProgressType.PartialFile» , and «see F:WixToolset.Dtf.Compression.ArchiveProgressType.FinishFile» messages. |
| [FileBytesProcessed](#filebytesprocessed) | Gets the number of uncompressed bytes processed so far among all files. Valid for all message types. |
| [ProgressType](#progresstype) | Gets the type of status message. |
| [TotalArchives](#totalarchives) | Gets the total number of known archives in a chained set. Valid for all message types. |
| [TotalFileBytes](#totalfilebytes) | Gets the total number of uncompressed file bytes to be processed. Valid for all message types. |
| [TotalFiles](#totalfiles) | Gets the total number of files to be processed. Valid for all message types. |
`WixToolset.Dtf.Compression.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CurrentArchiveBytesProcessed Property {#currentarchivebytesprocessed}
Gets the number of compressed bytes processed so far during extraction of the current archive. Valid for all extraction messages.
### Declaration
```cs
public System.Int64 CurrentArchiveBytesProcessed { get; set; }
```
## CurrentArchiveName Property {#currentarchivename}
Gets the name of the current archive. Not necessarily the name of the archive on disk. Valid for all message types.
### Declaration
```cs
public string CurrentArchiveName { get; set; }
```
## CurrentArchiveNumber Property {#currentarchivenumber}
Gets the current archive number, when processing a chained set of archives. Valid for all message types.
### Declaration
```cs
public int CurrentArchiveNumber { get; set; }
```
### Remarks
The first archive is number 0, and the last archive is «see P:WixToolset.Dtf.Compression.ArchiveProgressEventArgs.TotalArchives» -1.
## CurrentArchiveTotalBytes Property {#currentarchivetotalbytes}
Gets the total number of compressed bytes to be processed during extraction of the current archive. Valid for all extraction messages.
### Declaration
```cs
public System.Int64 CurrentArchiveTotalBytes { get; set; }
```
## CurrentFileBytesProcessed Property {#currentfilebytesprocessed}
Gets the number of bytes processed so far when compressing or extracting a file. Valid for «see F:WixToolset.Dtf.Compression.ArchiveProgressType.StartFile» , «see F:WixToolset.Dtf.Compression.ArchiveProgressType.PartialFile» , and «see F:WixToolset.Dtf.Compression.ArchiveProgressType.FinishFile» messages.
### Declaration
```cs
public System.Int64 CurrentFileBytesProcessed { get; set; }
```
## CurrentFileName Property {#currentfilename}
Gets the name of the file being processed. (The name of the file within the Archive; not the external file path.) Also includes the internal path of the file, if any. Valid for «see F:WixToolset.Dtf.Compression.ArchiveProgressType.StartFile» , «see F:WixToolset.Dtf.Compression.ArchiveProgressType.PartialFile» , and «see F:WixToolset.Dtf.Compression.ArchiveProgressType.FinishFile» messages.
### Declaration
```cs
public string CurrentFileName { get; set; }
```
## CurrentFileNumber Property {#currentfilenumber}
Gets the number of the current file being processed. The first file is number 0, and the last file is «see P:WixToolset.Dtf.Compression.ArchiveProgressEventArgs.TotalFiles» -1. Valid for «see F:WixToolset.Dtf.Compression.ArchiveProgressType.StartFile» , «see F:WixToolset.Dtf.Compression.ArchiveProgressType.PartialFile» , and «see F:WixToolset.Dtf.Compression.ArchiveProgressType.FinishFile» messages.
### Declaration
```cs
public int CurrentFileNumber { get; set; }
```
## CurrentFileTotalBytes Property {#currentfiletotalbytes}
Gets the total number of bytes in the current file. Valid for «see F:WixToolset.Dtf.Compression.ArchiveProgressType.StartFile» , «see F:WixToolset.Dtf.Compression.ArchiveProgressType.PartialFile» , and «see F:WixToolset.Dtf.Compression.ArchiveProgressType.FinishFile» messages.
### Declaration
```cs
public System.Int64 CurrentFileTotalBytes { get; set; }
```
## FileBytesProcessed Property {#filebytesprocessed}
Gets the number of uncompressed bytes processed so far among all files. Valid for all message types.
### Declaration
```cs
public System.Int64 FileBytesProcessed { get; set; }
```
### Remarks
When compared to «see P:WixToolset.Dtf.Compression.ArchiveProgressEventArgs.TotalFileBytes» , this can be used as a measure of overall progress.
## ProgressType Property {#progresstype}
Gets the type of status message.
### Declaration
```cs
public ArchiveProgressType ProgressType { get; set; }
```
### Remarks
The handler may choose to ignore some types of progress events. For example, if the handler will only list each file as it is compressed/extracted, it can ignore events that are not of type «see F:WixToolset.Dtf.Compression.ArchiveProgressType.FinishFile» .
## TotalArchives Property {#totalarchives}
Gets the total number of known archives in a chained set. Valid for all message types.
### Declaration
```cs
public int TotalArchives { get; set; }
```
### Remarks
When using the compression option to auto-split into multiple archives based on data size, this value will not be accurate until the end.
## TotalFileBytes Property {#totalfilebytes}
Gets the total number of uncompressed file bytes to be processed. Valid for all message types.
### Declaration
```cs
public System.Int64 TotalFileBytes { get; set; }
```
## TotalFiles Property {#totalfiles}
Gets the total number of files to be processed. Valid for all message types.
### Declaration
```cs
public int TotalFiles { get; set; }
```
