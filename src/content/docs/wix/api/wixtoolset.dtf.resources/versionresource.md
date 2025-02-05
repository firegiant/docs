---
title: VersionResource Class
---
A subclass of Resource which provides specific methods for manipulating the resource data.
## Methods
| Method | Description |
| ------ | ----------- |
| [Add(locale)](#add_locale) | Adds a new version string table for a locale. |
| [Clear()](#clear_nop) | Removes all string tables from the version resource. |
| [Contains(locale)](#contains_locale) | Checks if a version string table exists for a given locale. |
| [CopyTo(array, arrayIndex)](#copyto_array_arrayindex) | Copies the version string tables to an array, starting at a particular array index. |
| [GetEnumerator()](#getenumerator_nop) | Gets an enumerator that can iterate over the version string tables in the collection. |
| [Remove(locale)](#remove_locale) | Removes a version string table for a locale. |
## Properties
| Property | Description |
| ------ | ----------- |
| [BuildTypes](#buildtypes) | Gets or sets a bitmask that specifies the build types of the file. |
| [Count](#count) | Gets the number string tables in the version resource. |
| [Data](#data) | Gets or sets the raw data of the resource. The data is in the format of the VS_VERSIONINFO structure. |
| [FileSubtype](#filesubtype) | Gets or sets the specific type of the file. |
| [FileType](#filetype) | Gets or sets the general type of the file. |
| [FileVersion](#fileversion) | Gets or sets the binary locale-independent file version of the version resource. |
| [Item](#item) | Gets the string table for a specific locale, or null if there is no table for that locale. |
| [ProductVersion](#productversion) | Gets or sets the binary locale-independent product version of the version resource. |
| [Timestamp](#timestamp) | Gets or sets the binary creation date and time. |
### Remarks
The resource is of type «see P:WixToolset.Dtf.Resources.ResourceType.Version» (RT_VERSION).
`WixToolset.Dtf.Resources.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Add(locale) Method {#add_locale}
Adds a new version string table for a locale.
### Declaration
```cs
public VersionStringTable Add(
  int locale
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| locale | int | Locale of the table |
### Return value
`VersionStringTable` The new string table, or the existing table if the locale already existed.
## Clear() Method {#clear_nop}
Removes all string tables from the version resource.
### Declaration
```cs
public void Clear()
```
## Contains(locale) Method {#contains_locale}
Checks if a version string table exists for a given locale.
### Declaration
```cs
public bool Contains(
  int locale
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| locale | int | Locale to search for |
### Return value
`bool` True if a string table was found for the locale; false otherwise.
## CopyTo(array, arrayIndex) Method {#copyto_array_arrayindex}
Copies the version string tables to an array, starting at a particular array index.
### Declaration
```cs
public void CopyTo(
  VersionStringTable[] array,
  int arrayIndex
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| array | VersionStringTable[] | The one-dimensional Array that is the destination of the elements copied from the collection. The Array must have zero-based indexing. |
| arrayIndex | int | The zero-based index in array at which copying begins. |
## GetEnumerator() Method {#getenumerator_nop}
Gets an enumerator that can iterate over the version string tables in the collection.
### Declaration
```cs
public IEnumerator<WixToolset.Dtf.Resources.VersionStringTable> GetEnumerator()
```
### Return value
`IEnumerator<WixToolset.Dtf.Resources.VersionStringTable>` An enumerator that returns «see T:WixToolset.Dtf.Resources.VersionStringTable» objects.
## Remove(locale) Method {#remove_locale}
Removes a version string table for a locale.
### Declaration
```cs
public void Remove(
  int locale
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| locale | int | Locale of the table |
## BuildTypes Property {#buildtypes}
Gets or sets a bitmask that specifies the build types of the file.
### Declaration
```cs
public VersionBuildTypes BuildTypes { get; set; }
```
## Count Property {#count}
Gets the number string tables in the version resource.
### Declaration
```cs
public int Count { get; set; }
```
## Data Property {#data}
Gets or sets the raw data of the resource. The data is in the format of the VS_VERSIONINFO structure.
### Declaration
```cs
public System.Byte[] Data { get; set; }
```
## FileSubtype Property {#filesubtype}
Gets or sets the specific type of the file.
### Declaration
```cs
public VersionFileSubtype FileSubtype { get; set; }
```
## FileType Property {#filetype}
Gets or sets the general type of the file.
### Declaration
```cs
public VersionFileType FileType { get; set; }
```
## FileVersion Property {#fileversion}
Gets or sets the binary locale-independent file version of the version resource.
### Declaration
```cs
public System.Version FileVersion { get; set; }
```
## Item Property {#item}
Gets the string table for a specific locale, or null if there is no table for that locale.
### Declaration
```cs
public VersionStringTable Item { get; set; }
```
### See also
- M:WixToolset.Dtf.Resources.VersionResource.Add(System.Int32)
- M:WixToolset.Dtf.Resources.VersionResource.Remove(System.Int32)
## ProductVersion Property {#productversion}
Gets or sets the binary locale-independent product version of the version resource.
### Declaration
```cs
public System.Version ProductVersion { get; set; }
```
## Timestamp Property {#timestamp}
Gets or sets the binary creation date and time.
### Declaration
```cs
public System.DateTime Timestamp { get; set; }
```
