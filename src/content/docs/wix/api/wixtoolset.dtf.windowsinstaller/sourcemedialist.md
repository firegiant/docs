---
title: SourceMediaList Class
---
A list of source media for an installed product or patch.
## Methods
| Method | Description |
| ------ | ----------- |
| [Add()](#add_nop) | Adds or updates a disk of the media source for the product or patch. |
| [Clear()](#clear_nop) | Removes all source media from the list. |
| [Contains(diskId)](#contains_diskid) | Checks if the specified media disk id exists in the list. |
| [CopyTo(array, arrayIndex)](#copyto_array_arrayindex) | Copies the source media info from this list into an array. |
| [GetEnumerator()](#getenumerator_nop) | Enumerates the source media in the source list of the patch or product installation. |
| [Remove(diskId)](#remove_diskid) | Removes a specified disk from the set of registered disks. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Count](#count) | Gets the number of source media in the list. |
| [IsReadOnly](#isreadonly) | Gets a boolean value indicating whether the list is read-only. A SourceMediaList is never read-only. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Add() Method {#add_nop}
Adds or updates a disk of the media source for the product or patch.
### Declaration
```cs
public void Add()
```
### Remarks
Win32 MSI API: [MsiSourceListAddMediaDisk](http://msdn.microsoft.com/library/en-us/msi/setup/msisourcelistaddmediadisk.asp)

## Clear() Method {#clear_nop}
Removes all source media from the list.
### Declaration
```cs
public void Clear()
```
### Remarks
Win32 MSI API: [MsiSourceListClearAllEx](http://msdn.microsoft.com/library/en-us/msi/setup/msisourcelistclearallex.asp)

## Contains(diskId) Method {#contains_diskid}
Checks if the specified media disk id exists in the list.
### Declaration
```cs
public bool Contains(
  int diskId
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| diskId | int | disk id of the media to look for |
### Return value
`bool` true if the media exists in the list, false otherwise
## CopyTo(array, arrayIndex) Method {#copyto_array_arrayindex}
Copies the source media info from this list into an array.
### Declaration
```cs
public void CopyTo(
  MediaDisk[] array,
  int arrayIndex
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| array | MediaDisk[] | destination array to be filed |
| arrayIndex | int | offset into the destination array where copying begins |
## GetEnumerator() Method {#getenumerator_nop}
Enumerates the source media in the source list of the patch or product installation.
### Declaration
```cs
public IEnumerator<WixToolset.Dtf.WindowsInstaller.MediaDisk> GetEnumerator()
```
### Remarks
Win32 MSI API: [MsiSourceListEnumMediaDisks](http://msdn.microsoft.com/library/en-us/msi/setup/msisourcelistenummediadisks.asp)

## Remove(diskId) Method {#remove_diskid}
Removes a specified disk from the set of registered disks.
### Declaration
```cs
public bool Remove(
  int diskId
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| diskId | int | ID of the disk to remove |
### Remarks
Win32 MSI API: [MsiSourceListClearMediaDisk](http://msdn.microsoft.com/library/en-us/msi/setup/msisourcelistclearmediadisk.asp)

## Count Property {#count}
Gets the number of source media in the list.
### Declaration
```cs
public int Count { get; set; }
```
## IsReadOnly Property {#isreadonly}
Gets a boolean value indicating whether the list is read-only. A SourceMediaList is never read-only.
### Declaration
```cs
public bool IsReadOnly { get; set; }
```
