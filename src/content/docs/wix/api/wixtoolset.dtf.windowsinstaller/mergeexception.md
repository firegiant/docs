---
title: MergeException Class
---
A failure occurred when executing «see M:WixToolset.Dtf.WindowsInstaller.Database.Merge(WixToolset.Dtf.WindowsInstaller.Database,System.String)» . The exception may contain details about the merge conflict.
## Methods
| Method | Description |
| ------ | ----------- |
| [GetObjectData(info, context)](#getobjectdata_info_context) | Sets the SerializationInfo with information about the exception. |
## Properties
| Property | Description |
| ------ | ----------- |
| [ConflictCounts](#conflictcounts) | Gets the number of merge conflicts in each table, corresponding to the tables returned by «see P:WixToolset.Dtf.WindowsInstaller.MergeException.ConflictTables» . |
| [ConflictTables](#conflicttables) | Gets the list of tables containing merge conflicts. |
| [Message](#message) | Gets a message that describes the merge conflits. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## GetObjectData(info, context) Method {#getobjectdata_info_context}
Sets the SerializationInfo with information about the exception.
### Declaration
```cs
public void GetObjectData(
  System.Runtime.Serialization.SerializationInfo info,
  System.Runtime.Serialization.StreamingContext context
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| info | System.Runtime.Serialization.SerializationInfo | The SerializationInfo that holds the serialized object data about the exception being thrown. |
| context | System.Runtime.Serialization.StreamingContext | The StreamingContext that contains contextual information about the source or destination. |
## ConflictCounts Property {#conflictcounts}
Gets the number of merge conflicts in each table, corresponding to the tables returned by «see P:WixToolset.Dtf.WindowsInstaller.MergeException.ConflictTables» .
### Declaration
```cs
public IList<System.Int32> ConflictCounts { get; set; }
```
## ConflictTables Property {#conflicttables}
Gets the list of tables containing merge conflicts.
### Declaration
```cs
public IList<System.String> ConflictTables { get; set; }
```
## Message Property {#message}
Gets a message that describes the merge conflits.
### Declaration
```cs
public string Message { get; set; }
```
