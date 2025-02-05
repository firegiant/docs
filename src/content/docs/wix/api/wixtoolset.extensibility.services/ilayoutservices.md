---
title: ILayoutServices Interface
---
Interface provided to track files for use by layout later.
## Methods
| Method | Description |
| ------ | ----------- |
| [CreateFileTransfer(source, destination, move, sourceLineNumbers)](#createfiletransfer_source_destination_move_sourcelinenumbers) | Creates a file transfer and marks it redundant if the source and destination are identical. |
| [TrackFile(path, type, sourceLineNumbers)](#trackfile_path_type_sourcelinenumbers) | Creates a tracked file. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CreateFileTransfer(source, destination, move, sourceLineNumbers) Method {#createfiletransfer_source_destination_move_sourcelinenumbers}
Creates a file transfer and marks it redundant if the source and destination are identical.
### Declaration
```cs
public WixToolset.Extensibility.Data.IFileTransfer CreateFileTransfer(
  string source,
  string destination,
  bool move,
  WixToolset.Data.SourceLineNumber sourceLineNumbers
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| source | string | Source for the file transfer. |
| destination | string | Destination for the file transfer. |
| move | bool | Indicates whether to move or copy the source file. |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Optional source line numbers that requested the file transfer. |
## TrackFile(path, type, sourceLineNumbers) Method {#trackfile_path_type_sourcelinenumbers}
Creates a tracked file.
### Declaration
```cs
public WixToolset.Extensibility.Data.ITrackedFile TrackFile(
  string path,
  WixToolset.Extensibility.Data.TrackedFileType type,
  WixToolset.Data.SourceLineNumber sourceLineNumbers
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| path | string | Destination path for the build output. |
| type | WixToolset.Extensibility.Data.TrackedFileType | Type of tracked file to create. |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Optional source line numbers that requested the tracked file. |
