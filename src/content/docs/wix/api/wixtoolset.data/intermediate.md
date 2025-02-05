---
title: Intermediate Class
---
Container class for an intermediate object.
## Methods
| Method | Description |
| ------ | ----------- |
| [AddSection(section)](#addsection_section) | Adds a section to the intermedaite. |
| [HasLevel(level)](#haslevel_level) | Returns whether a specifed intermediate level has been set for this intermediate. |
| [Load(path, suppressVersionCheck)](#load_path_suppressversioncheck) | Loads an intermediate from a path on disk. |
| [Load(assembly, resourceName, suppressVersionCheck)](#load_assembly_resourcename_suppressversioncheck) | Loads an intermediate from a stream. |
| [Load(assembly, resourceName, creator, suppressVersionCheck)](#load_assembly_resourcename_creator_suppressversioncheck) | Loads an intermediate from a stream. |
| [Load(path, creator, suppressVersionCheck)](#load_path_creator_suppressversioncheck) | Loads an intermediate from a path on disk. |
| [Load(wixOutput, suppressVersionCheck)](#load_wixoutput_suppressversioncheck) | Loads an intermediate from a WixOutput object. |
| [Load(wixOutput, creator, suppressVersionCheck)](#load_wixoutput_creator_suppressversioncheck) | Loads an intermediate from a WixOutput object. |
| [RemoveSection(section)](#removesection_section) | Removes a section from the intermediate. |
| [Save(path)](#save_path) | Saves an intermediate to a path on disk. |
| [Save(wixout)](#save_wixout) | Saves an intermediate to a WixOutput. |
| [UpdateLevel(level)](#updatelevel_level) | Updates the intermediate level to the specified level. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Id](#id) | Get the id for the intermediate. |
| [Level](#level) | Get the level of the intermediate. |
| [Localizations](#localizations) | Get the localizations contained in this intermediate. |
| [Sections](#sections) | Get the sections contained in this intermediate. |
`WixToolset.Data.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## AddSection(section) Method {#addsection_section}
Adds a section to the intermedaite.
### Declaration
```cs
public IntermediateSection AddSection(
  IntermediateSection section
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| section | IntermediateSection | Section to add to the intermediate. |
### Return value
`IntermediateSection` Section added to the intermediate.
## HasLevel(level) Method {#haslevel_level}
Returns whether a specifed intermediate level has been set for this intermediate.
### Declaration
```cs
public bool HasLevel(
  string level
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| level | string | Intermediate level. |
### Return value
`bool` True if the specifed intermediate level has been set for this intermediate.
## Load(path, suppressVersionCheck) Method {#load_path_suppressversioncheck}
Loads an intermediate from a path on disk.
### Declaration
```cs
public static Intermediate Load(
  string path,
  bool suppressVersionCheck
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| path | string | Path to intermediate file saved on disk. |
| suppressVersionCheck | bool | Suppress checking for wix.dll version mismatches. |
### Return value
`Intermediate` Returns the loaded intermediate.
## Load(assembly, resourceName, suppressVersionCheck) Method {#load_assembly_resourcename_suppressversioncheck}
Loads an intermediate from a stream.
### Declaration
```cs
public static Intermediate Load(
  System.Reflection.Assembly assembly,
  string resourceName,
  bool suppressVersionCheck
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| assembly | System.Reflection.Assembly | Assembly with intermediate embedded in resource stream. |
| resourceName | string | Name of resource stream. |
| suppressVersionCheck | bool | Suppress checking for wix.dll version mismatches. |
### Return value
`Intermediate` Returns the loaded intermediate.
## Load(assembly, resourceName, creator, suppressVersionCheck) Method {#load_assembly_resourcename_creator_suppressversioncheck}
Loads an intermediate from a stream.
### Declaration
```cs
public static Intermediate Load(
  System.Reflection.Assembly assembly,
  string resourceName,
  ISymbolDefinitionCreator creator,
  bool suppressVersionCheck
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| assembly | System.Reflection.Assembly | Assembly with intermediate embedded in resource stream. |
| resourceName | string | Name of resource stream. |
| creator | ISymbolDefinitionCreator | ISymbolDefinitionCreator to use when reconstituting the intermediate. |
| suppressVersionCheck | bool | Suppress checking for wix.dll version mismatches. |
### Return value
`Intermediate` Returns the loaded intermediate.
## Load(path, creator, suppressVersionCheck) Method {#load_path_creator_suppressversioncheck}
Loads an intermediate from a path on disk.
### Declaration
```cs
public static Intermediate Load(
  string path,
  ISymbolDefinitionCreator creator,
  bool suppressVersionCheck
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| path | string | Path to intermediate file saved on disk. |
| creator | ISymbolDefinitionCreator | ISymbolDefinitionCreator to use when reconstituting the intermediate. |
| suppressVersionCheck | bool | Suppress checking for wix.dll version mismatches. |
### Return value
`Intermediate` Returns the loaded intermediate.
## Load(wixOutput, suppressVersionCheck) Method {#load_wixoutput_suppressversioncheck}
Loads an intermediate from a WixOutput object.
### Declaration
```cs
public static Intermediate Load(
  WixOutput wixOutput,
  bool suppressVersionCheck
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| wixOutput | WixOutput | WixOutput object. |
| suppressVersionCheck | bool | Suppress checking for wix.dll version mismatches. |
### Return value
`Intermediate` Returns the loaded intermediate.
## Load(wixOutput, creator, suppressVersionCheck) Method {#load_wixoutput_creator_suppressversioncheck}
Loads an intermediate from a WixOutput object.
### Declaration
```cs
public static Intermediate Load(
  WixOutput wixOutput,
  ISymbolDefinitionCreator creator,
  bool suppressVersionCheck
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| wixOutput | WixOutput | WixOutput object. |
| creator | ISymbolDefinitionCreator | ISymbolDefinitionCreator to use when reconstituting the intermediate. |
| suppressVersionCheck | bool | Suppress checking for wix.dll version mismatches. |
### Return value
`Intermediate` Returns the loaded intermediate.
## RemoveSection(section) Method {#removesection_section}
Removes a section from the intermediate.
### Declaration
```cs
public bool RemoveSection(
  IntermediateSection section
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| section | IntermediateSection | Section to remove. |
### Return value
`bool` True if the section was removed; otherwise false.
## Save(path) Method {#save_path}
Saves an intermediate to a path on disk.
### Declaration
```cs
public void Save(
  string path
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| path | string | Path to save intermediate file to disk. |
## Save(wixout) Method {#save_wixout}
Saves an intermediate to a WixOutput.
### Declaration
```cs
public void Save(
  WixOutput wixout
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| wixout | WixOutput | Destination to save. |
## UpdateLevel(level) Method {#updatelevel_level}
Updates the intermediate level to the specified level.
### Declaration
```cs
public Intermediate UpdateLevel(
  string level
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| level | string | Intermediate level. |
## Id Property {#id}
Get the id for the intermediate.
### Declaration
```cs
public string Id { get; set; }
```
## Level Property {#level}
Get the level of the intermediate.
### Declaration
```cs
public string Level { get; set; }
```
## Localizations Property {#localizations}
Get the localizations contained in this intermediate.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Data.Localization> Localizations { get; set; }
```
## Sections Property {#sections}
Get the sections contained in this intermediate.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Data.IntermediateSection> Sections { get; set; }
```
