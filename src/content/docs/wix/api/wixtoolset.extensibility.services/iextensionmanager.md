---
title: IExtensionManager Interface
---
Loads extensions and uses the extensions' factories to provide services.
## Methods
| Method | Description |
| ------ | ----------- |
| [Add(extensionAssembly)](#add_extensionassembly) | Adds an extension assembly directly to the manager. |
| [GetCacheLocations()](#getcachelocations_nop) | Gets extensions cache locations. |
| [GetExtensionPackageRootFolderName()](#getextensionpackagerootfoldername_nop) | Gets the root folder name used in extension's package. |
| [Load(extensionReference)](#load_extensionreference) | Loads an extension assembly from an extension reference string. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Add(extensionAssembly) Method {#add_extensionassembly}
Adds an extension assembly directly to the manager.
### Declaration
```cs
public void Add(
  System.Reflection.Assembly extensionAssembly
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| extensionAssembly | System.Reflection.Assembly | Extension assembly. |
## GetCacheLocations() Method {#getcachelocations_nop}
Gets extensions cache locations.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Extensibility.Data.IExtensionCacheLocation> GetCacheLocations()
```
### Return value
`System.Collections.Generic.IReadOnlyCollection<WixToolset.Extensibility.Data.IExtensionCacheLocation>` List of cache locations where extensions may be found.
## GetExtensionPackageRootFolderName() Method {#getextensionpackagerootfoldername_nop}
Gets the root folder name used in extension's package.
### Declaration
```cs
public string GetExtensionPackageRootFolderName()
```
### Return value
`string` Root folder name to find extension in a package.
## Load(extensionReference) Method {#load_extensionreference}
Loads an extension assembly from an extension reference string.
### Declaration
```cs
public void Load(
  string extensionReference
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| extensionReference | string | Reference to the extension. |
### Return value
`void` The loaded assembly. This assembly can be ignored since the extension manager maintains the list of loaded assemblies internally.
### Remarks
 _extensionReference_ can be in several different forms:
- Full path to an extension file (C:\MyExtensions\MyExtension.Example.wixext.dll):
- Reference to latest version of an extension in the cache (MyExtension.Example.wixext):
- Versioned reference to specific extension in the cache (MyExtension.Example.wixext/1.0.2):
- Relative path to an extension file (..\..\MyExtensions\MyExtension.Example.wixext.dll):

