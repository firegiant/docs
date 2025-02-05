---
title: InstallPathMap Class
---
Represents a mapping of install paths for all directories, components, or files in an installation database.
## Methods
| Method | Description |
| ------ | ----------- |
| [Add(key, installPath)](#add_key_installpath) | Sets an install path for a direcotry, component, or file key. |
| [BuildComponentPathMap(db, directoryPathMap)](#buildcomponentpathmap_db_directorypathmap) | Builds a mapping from Component keys to installation paths. |
| [BuildDirectoryPathMap(db, useShortNames)](#builddirectorypathmap_db_useshortnames) | Builds a mapping from Directory keys to installation paths. |
| [BuildDirectoryPathMap(db, useShortNames, sourceRootDir, targetRootDir)](#builddirectorypathmap_db_useshortnames_sourcerootdir_targetrootdir) | Builds a mapping of Directory keys to directory paths, specifying root directories for the source and target paths. |
| [BuildFilePathMap(db, componentPathMap, useShortNames)](#buildfilepathmap_db_componentpathmap_useshortnames) | Builds a mapping from File keys to installation paths. |
| [Clear()](#clear_nop) | Removes all entries from the dictionary. |
| [ContainsKey(key)](#containskey_key) | Tests whether a direcotry, component, or file key exists in the map. |
| [GetEnumerator()](#getenumerator_nop) | Gets an enumerator over all entries in the dictionary. |
| [Remove(key)](#remove_key) | Removes an install path from the map. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Count](#count) | Gets the number of entries in the dictionary. |
| [Item](#item) | Gets or sets an install path for a direcotry, component, or file key. |
| [Keys](#keys) | Gets the collection of keys in the InstallPathMap. Depending on the type of InstallPathMap, they are all directory, component, or file key strings. |
| [SourcePaths](#sourcepaths) | Gets a mapping from keys to source paths. |
| [TargetPaths](#targetpaths) | Gets a mapping from keys to target paths. |
| [Values](#values) | Gets the collection of InstallPath values in the InstallPathMap. |
`WixToolset.Dtf.WindowsInstaller.Package.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Add(key, installPath) Method {#add_key_installpath}
Sets an install path for a direcotry, component, or file key.
### Declaration
```cs
public void Add(
  string key,
  InstallPath installPath
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| key | string | Depending on the type of InstallPathMap, this is the primary key from the either the Directory, Component, or File table. |
| installPath | InstallPath | The install path of the key item. |
### Remarks
Changing an install path does not modify the Database used to generate this InstallPathMap.
## BuildComponentPathMap(db, directoryPathMap) Method {#buildcomponentpathmap_db_directorypathmap}
Builds a mapping from Component keys to installation paths.
### Declaration
```cs
public static InstallPathMap BuildComponentPathMap(
  WixToolset.Dtf.WindowsInstaller.Database db,
  InstallPathMap directoryPathMap
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| db | WixToolset.Dtf.WindowsInstaller.Database | Installation database. |
| directoryPathMap | InstallPathMap | Directory mapping returned by . |
### Return value
`InstallPathMap` An InstallPathMap with the described mapping.
## BuildDirectoryPathMap(db, useShortNames) Method {#builddirectorypathmap_db_useshortnames}
Builds a mapping from Directory keys to installation paths.
### Declaration
```cs
public static InstallPathMap BuildDirectoryPathMap(
  WixToolset.Dtf.WindowsInstaller.Database db,
  bool useShortNames
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| db | WixToolset.Dtf.WindowsInstaller.Database | Installation database. |
| useShortNames | bool | true to use short directory names; false to use long names |
### Return value
`InstallPathMap` An InstallPathMap with the described mapping.
## BuildDirectoryPathMap(db, useShortNames, sourceRootDir, targetRootDir) Method {#builddirectorypathmap_db_useshortnames_sourcerootdir_targetrootdir}
Builds a mapping of Directory keys to directory paths, specifying root directories for the source and target paths.
### Declaration
```cs
public static InstallPathMap BuildDirectoryPathMap(
  WixToolset.Dtf.WindowsInstaller.Database db,
  bool useShortNames,
  string sourceRootDir,
  string targetRootDir
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| db | WixToolset.Dtf.WindowsInstaller.Database | Database containing the Directory table. |
| useShortNames | bool | true to use short directory names; false to use long names |
| sourceRootDir | string | The root directory path of all source paths, or null to leave them relative. |
| targetRootDir | string | The root directory path of all source paths, or null to leave them relative. |
### Return value
`InstallPathMap` An InstallPathMap with the described mapping.
## BuildFilePathMap(db, componentPathMap, useShortNames) Method {#buildfilepathmap_db_componentpathmap_useshortnames}
Builds a mapping from File keys to installation paths.
### Declaration
```cs
public static InstallPathMap BuildFilePathMap(
  WixToolset.Dtf.WindowsInstaller.Database db,
  InstallPathMap componentPathMap,
  bool useShortNames
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| db | WixToolset.Dtf.WindowsInstaller.Database | Installation database. |
| componentPathMap | InstallPathMap | Component mapping returned by . |
| useShortNames | bool | true to use short file names; false to use long names |
### Return value
`InstallPathMap` An InstallPathMap with the described mapping.
## Clear() Method {#clear_nop}
Removes all entries from the dictionary.
### Declaration
```cs
public void Clear()
```
## ContainsKey(key) Method {#containskey_key}
Tests whether a direcotry, component, or file key exists in the map.
### Declaration
```cs
public bool ContainsKey(
  string key
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| key | string | Depending on the type of InstallPathMap, this is the primary key from the either the Directory, Component, or File table. |
### Return value
`bool` true if the key is found; false otherwise
## GetEnumerator() Method {#getenumerator_nop}
Gets an enumerator over all entries in the dictionary.
### Declaration
```cs
public IEnumerator<System.Collections.Generic.KeyValuePair`2<System.String,WixToolset.Dtf.WindowsInstaller.Package.InstallPath>> GetEnumerator()
```
### Return value
`IEnumerator<System.Collections.Generic.KeyValuePair`2<System.String,WixToolset.Dtf.WindowsInstaller.Package.InstallPath>>` An enumerator for the dictionary.
## Remove(key) Method {#remove_key}
Removes an install path from the map.
### Declaration
```cs
public bool Remove(
  string key
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| key | string | Depending on the type of InstallPathMap, this is the primary key from the either the Directory, Component, or File table. |
### Return value
`bool` true if the item was removed, false if it did not exist
### Remarks
Changing an install path does not modify the Database used to generate this InstallPathMap.
## Count Property {#count}
Gets the number of entries in the dictionary.
### Declaration
```cs
public int Count { get; set; }
```
## Item Property {#item}
Gets or sets an install path for a direcotry, component, or file key.
### Declaration
```cs
public InstallPath Item[
  string key
] { get; set; }
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| key | string | Depending on the type of InstallPathMap, this is the primary key from the either the Directory, Component, or File table. |
### Remarks
Changing an install path does not modify the Database used to generate this InstallPathMap.
## Keys Property {#keys}
Gets the collection of keys in the InstallPathMap. Depending on the type of InstallPathMap, they are all directory, component, or file key strings.
### Declaration
```cs
public System.Collections.Generic.ICollection<System.String> Keys { get; set; }
```
## SourcePaths Property {#sourcepaths}
Gets a mapping from keys to source paths.
### Declaration
```cs
public System.Collections.Generic.IDictionary<System.String,System.String> SourcePaths { get; set; }
```
## TargetPaths Property {#targetpaths}
Gets a mapping from keys to target paths.
### Declaration
```cs
public System.Collections.Generic.IDictionary<System.String,System.String> TargetPaths { get; set; }
```
## Values Property {#values}
Gets the collection of InstallPath values in the InstallPathMap.
### Declaration
```cs
public System.Collections.Generic.ICollection<WixToolset.Dtf.WindowsInstaller.Package.InstallPath> Values { get; set; }
```
