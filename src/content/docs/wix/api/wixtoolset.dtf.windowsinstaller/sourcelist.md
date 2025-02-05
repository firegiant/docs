---
title: SourceList Class
---
A list of sources for an installed product or patch.
## Methods
| Method | Description |
| ------ | ----------- |
| [Add(item)](#add_item) | Adds a network or URL source to the source list of the installed product. |
| [Clear()](#clear_nop) | Clears sources of all types: network, url, and media. |
| [ClearNetworkSources()](#clearnetworksources_nop) | Removes all network sources from the list. URL sources are not affected. |
| [ClearUrlSources()](#clearurlsources_nop) | Removes all URL sources from the list. Network sources are not affected. |
| [Contains(item)](#contains_item) | Checks if the specified source exists in the list. |
| [CopyTo(array, arrayIndex)](#copyto_array_arrayindex) | Copies the network and URL sources from this list into an array. |
| [ForceResolution()](#forceresolution_nop) | Forces the installer to search the source list for a valid source the next time a source is required. For example, when the installer performs an installation or reinstallation, or when it requires the path for a component that is set to run from source. |
| [GetEnumerator()](#getenumerator_nop) | Enumerates the network and URL sources in the source list of the patch or product installation. |
| [Insert(item, index)](#insert_item_index) | Adds or reorders a network or URL source for the product or patch. |
| [Remove()](#remove_nop) | Removes a network or URL source. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Count](#count) | Gets the number of network and URL sources in the list. |
| [DiskPrompt](#diskprompt) | Gets or sets the prompt template that is used when prompting the user for installation media. |
| [IsReadOnly](#isreadonly) | Gets a boolean value indicating whether the list is read-only. A SourceList is never read-only. |
| [Item](#item) | Gets or sets source list information properties of a product or patch installation. |
| [LastUsedSource](#lastusedsource) | Gets or sets the most recently used source location for the product. |
| [LastUsedType](#lastusedtype) | Gets the type of the last-used source. |
| [MediaList](#medialist) | Gets the list of disks registered for the media source of the patch or product installation. |
| [MediaPackagePath](#mediapackagepath) | Gets or sets the path relative to the root of the installation media. |
| [PackageName](#packagename) | Gets or sets the name of the Windows Installer package or patch package on the source. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Add(item) Method {#add_item}
Adds a network or URL source to the source list of the installed product.
### Declaration
```cs
public void Add(
  string item
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| item | string | Path to the source to be added. This parameter is expected to contain only the path without the filename. |
### Remarks
If this method is called with a new source, the installer adds the source to the end of the source list.
If this method is called with a source already existing in the source list, it has no effect.
Win32 MSI APIs: [MsiSourceListAddSource](http://msdn.microsoft.com/library/en-us/msi/setup/msisourcelistaddsource.asp) , [MsiSourceListAddSourceEx](http://msdn.microsoft.com/library/en-us/msi/setup/msisourcelistaddsourceex.asp)

### See also
- M:WixToolset.Dtf.WindowsInstaller.SourceList.Insert(System.String,System.Int32)
## Clear() Method {#clear_nop}
Clears sources of all types: network, url, and media.
### Declaration
```cs
public void Clear()
```
### Remarks
Win32 MSI API: [MsiSourceListClearAll](http://msdn.microsoft.com/library/en-us/msi/setup/msisourcelistclearall.asp)

## ClearNetworkSources() Method {#clearnetworksources_nop}
Removes all network sources from the list. URL sources are not affected.
### Declaration
```cs
public void ClearNetworkSources()
```
### Remarks
Win32 MSI API: [MsiSourceListClearAllEx](http://msdn.microsoft.com/library/en-us/msi/setup/msisourcelistclearallex.asp)

## ClearUrlSources() Method {#clearurlsources_nop}
Removes all URL sources from the list. Network sources are not affected.
### Declaration
```cs
public void ClearUrlSources()
```
### Remarks
Win32 MSI API: [MsiSourceListClearAllEx](http://msdn.microsoft.com/library/en-us/msi/setup/msisourcelistclearallex.asp)

## Contains(item) Method {#contains_item}
Checks if the specified source exists in the list.
### Declaration
```cs
public bool Contains(
  string item
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| item | string | case-insensitive source to look for |
### Return value
`bool` true if the source exists in the list, false otherwise
## CopyTo(array, arrayIndex) Method {#copyto_array_arrayindex}
Copies the network and URL sources from this list into an array.
### Declaration
```cs
public void CopyTo(
  System.String[] array,
  int arrayIndex
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| array | System.String[] | destination array to be filed |
| arrayIndex | int | offset into the destination array where copying begins |
## ForceResolution() Method {#forceresolution_nop}
Forces the installer to search the source list for a valid source the next time a source is required. For example, when the installer performs an installation or reinstallation, or when it requires the path for a component that is set to run from source.
### Declaration
```cs
public void ForceResolution()
```
### Remarks
Win32 MSI APIs: [MsiSourceListForceResolution](http://msdn.microsoft.com/library/en-us/msi/setup/msisourcelistforceresolution.asp) , [MsiSourceListForceResolutionEx](http://msdn.microsoft.com/library/en-us/msi/setup/msisourcelistforceresolutionex.asp)

## GetEnumerator() Method {#getenumerator_nop}
Enumerates the network and URL sources in the source list of the patch or product installation.
### Declaration
```cs
public IEnumerator<System.String> GetEnumerator()
```
### Remarks
Win32 MSI API: [MsiSourceListEnumSources](http://msdn.microsoft.com/library/en-us/msi/setup/msisourcelistenumsources.asp)

## Insert(item, index) Method {#insert_item_index}
Adds or reorders a network or URL source for the product or patch.
### Declaration
```cs
public void Insert(
  string item,
  int index
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| item | string | Path to the source to be added. This parameter is expected to contain only the path without the filename. |
| index | int | Specifies the priority order in which the source will be inserted |
### Remarks
If this method is called with a new source and _index_ is set to 0, the installer adds the source to the end of the source list.
If this method is called with a source already existing in the source list and _index_ is set to 0, the installer retains the source's existing index.
If the method is called with an existing source in the source list and _index_ is set to a non-zero value, the source is removed from its current location in the list and inserted at the position specified by Index, before any source that already exists at that position.
If the method is called with a new source and Index is set to a non-zero value, the source is inserted at the position specified by _index_ , before any source that already exists at that position. The index value for all sources in the list after the index specified by Index are updated to ensure unique index values and the pre-existing order is guaranteed to remain unchanged.
If _index_ is greater than the number of sources in the list, the source is placed at the end of the list with an index value one larger than any existing source.
Win32 MSI API: [MsiSourceListAddSourceEx](http://msdn.microsoft.com/library/en-us/msi/setup/msisourcelistaddsourceex.asp)

## Remove() Method {#remove_nop}
Removes a network or URL source.
### Declaration
```cs
public bool Remove()
```
### Remarks
Win32 MSI API: [MsiSourceListClearSource](http://msdn.microsoft.com/library/en-us/msi/setup/msisourcelistclearsource.asp)

## Count Property {#count}
Gets the number of network and URL sources in the list.
### Declaration
```cs
public int Count { get; set; }
```
## DiskPrompt Property {#diskprompt}
Gets or sets the prompt template that is used when prompting the user for installation media.
### Declaration
```cs
public string DiskPrompt { get; set; }
```
## IsReadOnly Property {#isreadonly}
Gets a boolean value indicating whether the list is read-only. A SourceList is never read-only.
### Declaration
```cs
public bool IsReadOnly { get; set; }
```
## Item Property {#item}
Gets or sets source list information properties of a product or patch installation.
### Declaration
```cs
public string Item[
  string property
] { get; set; }
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| property | string | The source list information property name. |
### Remarks
Win32 MSI API: [MsiSourceListGetInfo](http://msdn.microsoft.com/library/en-us/msi/setup/msisourcelistgetinfo.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | An unknown product, patch, or property was requested |
## LastUsedSource Property {#lastusedsource}
Gets or sets the most recently used source location for the product.
### Declaration
```cs
public string LastUsedSource { get; set; }
```
## LastUsedType Property {#lastusedtype}
Gets the type of the last-used source.
### Declaration
```cs
public string LastUsedType { get; set; }
```
### Remarks

- "n" = network location
- "u" = URL location
- "m" = media location
- (empty string) = no last used source


## MediaList Property {#medialist}
Gets the list of disks registered for the media source of the patch or product installation.
### Declaration
```cs
public SourceMediaList MediaList { get; set; }
```
## MediaPackagePath Property {#mediapackagepath}
Gets or sets the path relative to the root of the installation media.
### Declaration
```cs
public string MediaPackagePath { get; set; }
```
## PackageName Property {#packagename}
Gets or sets the name of the Windows Installer package or patch package on the source.
### Declaration
```cs
public string PackageName { get; set; }
```
