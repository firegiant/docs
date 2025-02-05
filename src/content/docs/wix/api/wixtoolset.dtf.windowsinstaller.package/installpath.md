---
title: InstallPath Class
---
Represents the installation path of a file or directory from an installer product database.
## Methods
| Method | Description |
| ------ | ----------- |
| [ToString()](#tostring_nop) | Gets the full source path. |
## Properties
| Property | Description |
| ------ | ----------- |
| [ChildPaths](#childpaths) | Gets the set of child paths if this InstallPath object represents a a directory. |
| [ParentPath](#parentpath) | Gets the path of the parent directory. |
| [SourceName](#sourcename) | Gets or sets the source name of the InstallPath. |
| [SourcePath](#sourcepath) | Gets the full source path. |
| [TargetName](#targetname) | Gets or sets the target name of the install path. |
| [TargetPath](#targetpath) | Gets the full target path. |
`WixToolset.Dtf.WindowsInstaller.Package.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## ToString() Method {#tostring_nop}
Gets the full source path.
### Declaration
```cs
public string ToString()
```
### Return value
`string`  «see P:WixToolset.Dtf.WindowsInstaller.Package.InstallPath.SourcePath»
## ChildPaths Property {#childpaths}
Gets the set of child paths if this InstallPath object represents a a directory.
### Declaration
```cs
public InstallPathCollection ChildPaths { get; set; }
```
## ParentPath Property {#parentpath}
Gets the path of the parent directory.
### Declaration
```cs
public InstallPath ParentPath { get; set; }
```
## SourceName Property {#sourcename}
Gets or sets the source name of the InstallPath.
### Declaration
```cs
public string SourceName { get; set; }
```
## SourcePath Property {#sourcepath}
Gets the full source path.
### Declaration
```cs
public string SourcePath { get; set; }
```
## TargetName Property {#targetname}
Gets or sets the target name of the install path.
### Declaration
```cs
public string TargetName { get; set; }
```
## TargetPath Property {#targetpath}
Gets the full target path.
### Declaration
```cs
public string TargetPath { get; set; }
```
