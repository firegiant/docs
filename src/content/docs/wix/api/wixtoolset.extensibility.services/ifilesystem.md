---
title: IFileSystem Interface
---
Abstracts basic file system operations.
## Methods
| Method | Description |
| ------ | ----------- |
| [CopyFile(sourceLineNumbers, source, destination, allowHardlink)](#copyfile_sourcelinenumbers_source_destination_allowhardlink) | Copies a file. |
| [DeleteFile(sourceLineNumbers, source, throwOnError, maxRetries)](#deletefile_sourcelinenumbers_source_throwonerror_maxretries) | Deletes a file. |
| [ExecuteWithRetries(action, maxRetries)](#executewithretries_action_maxretries) | Executes an action and retries on any exception a few times with short pause between each attempt. Primarily intended for use with file system operations that might get interrupted by external systems (usually anti-virus). |
| [MoveFile(sourceLineNumbers, source, destination)](#movefile_sourcelinenumbers_source_destination) | Moves a file. |
| [OpenFile(sourceLineNumbers, path, mode, access, share)](#openfile_sourcelinenumbers_path_mode_access_share) | Opens a file. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CopyFile(sourceLineNumbers, source, destination, allowHardlink) Method {#copyfile_sourcelinenumbers_source_destination_allowhardlink}
Copies a file.
### Declaration
```cs
public void CopyFile(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  string source,
  string destination,
  bool allowHardlink
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Optional source line number requiring the copy. |
| source | string | The file to copy. |
| destination | string | The destination file. |
| allowHardlink | bool | Allow hardlinks. |
## DeleteFile(sourceLineNumbers, source, throwOnError, maxRetries) Method {#deletefile_sourcelinenumbers_source_throwonerror_maxretries}
Deletes a file.
### Declaration
```cs
public void DeleteFile(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  string source,
  bool throwOnError,
  int maxRetries
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Optional source line number requiring the delete. |
| source | string | The file to delete. |
| throwOnError | bool | Indicates the file must be deleted. Default is a best effort delete. |
| maxRetries | int | Maximum retry attempts. Default is 4. |
## ExecuteWithRetries(action, maxRetries) Method {#executewithretries_action_maxretries}
Executes an action and retries on any exception a few times with short pause between each attempt. Primarily intended for use with file system operations that might get interrupted by external systems (usually anti-virus).
### Declaration
```cs
public void ExecuteWithRetries(
  System.Action action,
  int maxRetries
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| action | System.Action | Action to execute. |
| maxRetries | int | Maximum retry attempts. Default is 4. |
## MoveFile(sourceLineNumbers, source, destination) Method {#movefile_sourcelinenumbers_source_destination}
Moves a file.
### Declaration
```cs
public void MoveFile(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  string source,
  string destination
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Optional source line number requiring the move. |
| source | string | The file to move. |
| destination | string | The destination file. |
## OpenFile(sourceLineNumbers, path, mode, access, share) Method {#openfile_sourcelinenumbers_path_mode_access_share}
Opens a file.
### Declaration
```cs
public System.IO.FileStream OpenFile(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  string path,
  System.IO.FileMode mode,
  System.IO.FileAccess access,
  System.IO.FileShare share
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Optional source line number requiring the file. |
| path | string | The file to open. |
| mode | System.IO.FileMode | A System.IO.FileMode value that specifies whether a file is created if one does not exist, and determines whether the contents of existing files are retained or overwritten. |
| access | System.IO.FileAccess | A System.IO.FileAccess value that specifies the operations that can be performed on the file. |
| share | System.IO.FileShare | A System.IO.FileShare value specifying the type of access other threads have to the file. |
