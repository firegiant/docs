---
title: CabFileInfo Class
---
Object representing a compressed file within a cabinet package; provides operations for getting the file properties and extracting the file.
## Methods
| Method | Description |
| ------ | ----------- |
| [GetObjectData(info, context)](#getobjectdata_info_context) | Sets the SerializationInfo with information about the archive. |
| [Refresh(newFileInfo)](#refresh_newfileinfo) | Refreshes the information in this object with new data retrieved from an archive. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Cabinet](#cabinet) | Gets or sets the cabinet that contains this file. |
| [CabinetFolderNumber](#cabinetfoldernumber) | Gets the number of the folder containing this file. |
| [CabinetName](#cabinetname) | Gets the full path of the cabinet that contains this file. |
`WixToolset.Dtf.Compression.Cab.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## GetObjectData(info, context) Method {#getobjectdata_info_context}
Sets the SerializationInfo with information about the archive.
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
| info | System.Runtime.Serialization.SerializationInfo | The SerializationInfo that holds the serialized object data. |
| context | System.Runtime.Serialization.StreamingContext | The StreamingContext that contains contextual information about the source or destination. |
## Refresh(newFileInfo) Method {#refresh_newfileinfo}
Refreshes the information in this object with new data retrieved from an archive.
### Declaration
```cs
protected void Refresh(
  WixToolset.Dtf.Compression.ArchiveFileInfo newFileInfo
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| newFileInfo | WixToolset.Dtf.Compression.ArchiveFileInfo | Fresh instance for the same file just read from the archive. |
### Remarks
This implementation refreshes the «see P:WixToolset.Dtf.Compression.Cab.CabFileInfo.CabinetFolderNumber» .
## Cabinet Property {#cabinet}
Gets or sets the cabinet that contains this file.
### Declaration
```cs
public CabInfo Cabinet { get; set; }
```
## CabinetFolderNumber Property {#cabinetfoldernumber}
Gets the number of the folder containing this file.
### Declaration
```cs
public int CabinetFolderNumber { get; set; }
```
### Remarks
A single folder or the first folder of a cabinet (or chain of cabinets) is numbered 0.
## CabinetName Property {#cabinetname}
Gets the full path of the cabinet that contains this file.
### Declaration
```cs
public string CabinetName { get; set; }
```
