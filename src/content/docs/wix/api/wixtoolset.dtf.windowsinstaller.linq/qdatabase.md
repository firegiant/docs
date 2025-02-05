---
title: QDatabase Class
---
Queryable MSI database - extends the base Database class with LINQ query functionality along with predefined entity types for common tables.
## Properties
| Property | Description |
| ------ | ----------- |
| [Components](#components) | Queryable standard table with predefined specialized record type. |
| [CreateFolders](#createfolders) | Queryable standard table with predefined specialized record type. |
| [CustomActions](#customactions) | Queryable standard table with predefined specialized record type. |
| [Directories](#directories) | Queryable standard table with predefined specialized record type. |
| [DuplicateFiles](#duplicatefiles) | Queryable standard table with predefined specialized record type. |
| [FeatureComponents](#featurecomponents) | Queryable standard table with predefined specialized record type. |
| [Features](#features) | Queryable standard table with predefined specialized record type. |
| [FileHashes](#filehashes) | Queryable standard table with predefined specialized record type. |
| [Files](#files) | Queryable standard table with predefined specialized record type. |
| [InstallExecuteSequences](#installexecutesequences) | Queryable standard table with predefined specialized record type. |
| [InstallUISequences](#installuisequences) | Queryable standard table with predefined specialized record type. |
| [Item](#item) | Gets a queryable table from the datbaase. |
| [LaunchConditions](#launchconditions) | Queryable standard table with predefined specialized record type. |
| [Log](#log) | Gets or sets a log where all MSI SQL queries are written. |
| [Medias](#medias) | Queryable standard table with predefined specialized record type. |
| [Properties](#properties) | Queryable standard table with predefined specialized record type. |
| [Registries](#registries) | Queryable standard table with predefined specialized record type. |
| [RemoveFiles](#removefiles) | Queryable standard table with predefined specialized record type. |
`WixToolset.Dtf.WindowsInstaller.Linq.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Components Property {#components}
Queryable standard table with predefined specialized record type.
### Declaration
```cs
public QTable<WixToolset.Dtf.WindowsInstaller.Linq.Entities.Component_> Components { get; set; }
```
## CreateFolders Property {#createfolders}
Queryable standard table with predefined specialized record type.
### Declaration
```cs
public QTable<WixToolset.Dtf.WindowsInstaller.Linq.Entities.CreateFolder_> CreateFolders { get; set; }
```
## CustomActions Property {#customactions}
Queryable standard table with predefined specialized record type.
### Declaration
```cs
public QTable<WixToolset.Dtf.WindowsInstaller.Linq.Entities.CustomAction_> CustomActions { get; set; }
```
## Directories Property {#directories}
Queryable standard table with predefined specialized record type.
### Declaration
```cs
public QTable<WixToolset.Dtf.WindowsInstaller.Linq.Entities.Directory_> Directories { get; set; }
```
## DuplicateFiles Property {#duplicatefiles}
Queryable standard table with predefined specialized record type.
### Declaration
```cs
public QTable<WixToolset.Dtf.WindowsInstaller.Linq.Entities.DuplicateFile_> DuplicateFiles { get; set; }
```
## FeatureComponents Property {#featurecomponents}
Queryable standard table with predefined specialized record type.
### Declaration
```cs
public QTable<WixToolset.Dtf.WindowsInstaller.Linq.Entities.FeatureComponent_> FeatureComponents { get; set; }
```
## Features Property {#features}
Queryable standard table with predefined specialized record type.
### Declaration
```cs
public QTable<WixToolset.Dtf.WindowsInstaller.Linq.Entities.Feature_> Features { get; set; }
```
## FileHashes Property {#filehashes}
Queryable standard table with predefined specialized record type.
### Declaration
```cs
public QTable<WixToolset.Dtf.WindowsInstaller.Linq.Entities.FileHash_> FileHashes { get; set; }
```
## Files Property {#files}
Queryable standard table with predefined specialized record type.
### Declaration
```cs
public QTable<WixToolset.Dtf.WindowsInstaller.Linq.Entities.File_> Files { get; set; }
```
## InstallExecuteSequences Property {#installexecutesequences}
Queryable standard table with predefined specialized record type.
### Declaration
```cs
public QTable<WixToolset.Dtf.WindowsInstaller.Linq.Entities.InstallSequence_> InstallExecuteSequences { get; set; }
```
## InstallUISequences Property {#installuisequences}
Queryable standard table with predefined specialized record type.
### Declaration
```cs
public QTable<WixToolset.Dtf.WindowsInstaller.Linq.Entities.InstallSequence_> InstallUISequences { get; set; }
```
## Item Property {#item}
Gets a queryable table from the datbaase.
### Declaration
```cs
public QTable<WixToolset.Dtf.WindowsInstaller.Linq.QRecord> Item[
  string table
] { get; set; }
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| table | string | name of the table |
## LaunchConditions Property {#launchconditions}
Queryable standard table with predefined specialized record type.
### Declaration
```cs
public QTable<WixToolset.Dtf.WindowsInstaller.Linq.Entities.LaunchCondition_> LaunchConditions { get; set; }
```
## Log Property {#log}
Gets or sets a log where all MSI SQL queries are written.
### Declaration
```cs
public System.IO.TextWriter Log { get; set; }
```
### Remarks
The log can be useful for debugging, or simply to watch the LINQ magic in action.
## Medias Property {#medias}
Queryable standard table with predefined specialized record type.
### Declaration
```cs
public QTable<WixToolset.Dtf.WindowsInstaller.Linq.Entities.Media_> Medias { get; set; }
```
## Properties Property {#properties}
Queryable standard table with predefined specialized record type.
### Declaration
```cs
public QTable<WixToolset.Dtf.WindowsInstaller.Linq.Entities.Property_> Properties { get; set; }
```
## Registries Property {#registries}
Queryable standard table with predefined specialized record type.
### Declaration
```cs
public QTable<WixToolset.Dtf.WindowsInstaller.Linq.Entities.Registry_> Registries { get; set; }
```
## RemoveFiles Property {#removefiles}
Queryable standard table with predefined specialized record type.
### Declaration
```cs
public QTable<WixToolset.Dtf.WindowsInstaller.Linq.Entities.RemoveFile_> RemoveFiles { get; set; }
```
