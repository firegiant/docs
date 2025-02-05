---
title: InstallPackage Class
---
Provides access to powerful build, maintenance, and analysis operations on an installation package (.MSI or .MSM).
## Methods
| Method | Description |
| ------ | ----------- |
| [ApplyPatch(patchPackage, transform)](#applypatch_patchpackage_transform) | Applies a patch package to the database, resulting in an installation package that has the patch built-in. |
| [Consolidate(mediaCabinet)](#consolidate_mediacabinet) | Consolidates a package by combining and re-compressing all files into a single internal or external cabinet. |
| [ExtractFiles()](#extractfiles_nop) | Extracts all files to the «see P:WixToolset.Dtf.WindowsInstaller.Package.InstallPackage.WorkingDirectory» . The files are extracted to the relative directory matching their «see P:WixToolset.Dtf.WindowsInstaller.Package.InstallPath.SourcePath» . |
| [FindFiles(longFileName)](#findfiles_longfilename) | Gets the list of file keys that have the specified long file name. |
| [FindFiles(pattern)](#findfiles_pattern) | Gets the list of file keys whose long file names match a specified regular-expression search pattern. |
| [LogMessage(format, args)](#logmessage_format_args) | Sends a message to the «see E:WixToolset.Dtf.WindowsInstaller.Package.InstallPackage.Message» event-handler. |
| [UpdateDirectories()](#updatedirectories_nop) | Rebuilds the cached directory structure information accessed by the «see P:WixToolset.Dtf.WindowsInstaller.Package.InstallPackage.Directories» and «see P:WixToolset.Dtf.WindowsInstaller.Package.InstallPackage.Files» properties. This should be done after modifying the File, Component, or Directory tables, or else the cached information may no longer be accurate. |
| [UpdateFiles()](#updatefiles_nop) | Updates the install package with new files from the «see P:WixToolset.Dtf.WindowsInstaller.Package.InstallPackage.WorkingDirectory» . The files must be in the relative directory matching their «see P:WixToolset.Dtf.WindowsInstaller.Package.InstallPath.SourcePath» . This method re-compresses and packages the files if necessary, and also updates the following data: File.FileSize, File.Version, File.Language, MsiFileHash.HashPart* |
## Properties
| Property | Description |
| ------ | ----------- |
| [CompressionLevel](#compressionlevel) | Gets or sets the compression level used by «see M:WixToolset.Dtf.WindowsInstaller.Package.InstallPackage.UpdateFiles» and «see M:WixToolset.Dtf.WindowsInstaller.Package.InstallPackage.Consolidate(System.String)» . |
| [Directories](#directories) | Gets a mapping from Directory keys to source/target paths. |
| [Files](#files) | Gets a mapping from File keys to source/target paths. |
| [Property](#property) | Accessor for getting and setting properties of the InstallPackage database. |
| [SourceDirectory](#sourcedirectory) | Gets or sets the location to obtain source files and cabinets when extracting or updating files in the working directory. This is often the location of an original copy of the package that is not meant to be modified. |
| [WorkingDirectory](#workingdirectory) | Gets or sets the location where files will be extracted to/updated from. Also the location where a temporary folder is created during some operations. |
## Events
| Event | Description |
| ------ | ----------- |
| [Message](#message) | Handle this event to receive status messages when operations are performed on the install package. |
`WixToolset.Dtf.WindowsInstaller.Package.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## ApplyPatch(patchPackage, transform) Method {#applypatch_patchpackage_transform}
Applies a patch package to the database, resulting in an installation package that has the patch built-in.
### Declaration
```cs
public void ApplyPatch(
  PatchPackage patchPackage,
  string transform
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| patchPackage | PatchPackage | The patch package to be applied |
| transform | string | Optional name of the specific transform to apply. This parameter is usually left null, which causes the patch to be searched for a transform that is valid to apply to this database. |
### Remarks
If the patch contains any binary file patches, they will not immediately be applied to the target files, though they will at installation time.After calling this method you can use «see M:WixToolset.Dtf.WindowsInstaller.Package.InstallPackage.Consolidate(System.String)» to apply the file patches immediately and also discard any outdated files from the package.

## Consolidate(mediaCabinet) Method {#consolidate_mediacabinet}
Consolidates a package by combining and re-compressing all files into a single internal or external cabinet.
### Declaration
```cs
public void Consolidate(
  string mediaCabinet
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| mediaCabinet | string |  |
### Remarks
If an installation package was built from many merge modules, this method can somewhat decrease package size, complexity, and installation time.This method will also convert a package with all or mostly uncompressed files into a package where all files are compressed.
If the package contains any not-yet-applied binary file patches (for example, a package generated by a call to «see M:WixToolset.Dtf.WindowsInstaller.Package.InstallPackage.ApplyPatch(WixToolset.Dtf.WindowsInstaller.Package.PatchPackage,System.String)» ) then this method will apply the patches before compressing the updated files.
This method edits the database summary information and the File, Media and Patch tables as necessary to maintain a valid installation package.
The cabinet compression level used during re-cabbing can be configured with the «see P:WixToolset.Dtf.WindowsInstaller.Package.InstallPackage.CompressionLevel» property.

## ExtractFiles() Method {#extractfiles_nop}
Extracts all files to the «see P:WixToolset.Dtf.WindowsInstaller.Package.InstallPackage.WorkingDirectory» . The files are extracted to the relative directory matching their «see P:WixToolset.Dtf.WindowsInstaller.Package.InstallPath.SourcePath» .
### Declaration
```cs
public void ExtractFiles()
```
### Remarks
If any files have the uncompressed attribute, they will be copied from the «see P:WixToolset.Dtf.WindowsInstaller.Package.InstallPackage.SourceDirectory» .
## FindFiles(longFileName) Method {#findfiles_longfilename}
Gets the list of file keys that have the specified long file name.
### Declaration
```cs
public System.String[] FindFiles(
  string longFileName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| longFileName | string | File name to search for (case-insensitive) |
### Return value
`System.String[]` Array of file keys, or a 0-length array if none are found
## FindFiles(pattern) Method {#findfiles_pattern}
Gets the list of file keys whose long file names match a specified regular-expression search pattern.
### Declaration
```cs
public System.String[] FindFiles(
  System.Text.RegularExpressions.Regex pattern
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| pattern | System.Text.RegularExpressions.Regex | Regular expression search pattern |
### Return value
`System.String[]` Array of file keys, or a 0-length array if none are found
## LogMessage(format, args) Method {#logmessage_format_args}
Sends a message to the «see E:WixToolset.Dtf.WindowsInstaller.Package.InstallPackage.Message» event-handler.
### Declaration
```cs
protected void LogMessage(
  string format,
  System.Object[] args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| format | string | Message string, containing 0 or more format items |
| args | System.Object[] | Items to be formatted |
## UpdateDirectories() Method {#updatedirectories_nop}
Rebuilds the cached directory structure information accessed by the «see P:WixToolset.Dtf.WindowsInstaller.Package.InstallPackage.Directories» and «see P:WixToolset.Dtf.WindowsInstaller.Package.InstallPackage.Files» properties. This should be done after modifying the File, Component, or Directory tables, or else the cached information may no longer be accurate.
### Declaration
```cs
public void UpdateDirectories()
```
## UpdateFiles() Method {#updatefiles_nop}
Updates the install package with new files from the «see P:WixToolset.Dtf.WindowsInstaller.Package.InstallPackage.WorkingDirectory» . The files must be in the relative directory matching their «see P:WixToolset.Dtf.WindowsInstaller.Package.InstallPath.SourcePath» . This method re-compresses and packages the files if necessary, and also updates the following data: File.FileSize, File.Version, File.Language, MsiFileHash.HashPart*
### Declaration
```cs
public void UpdateFiles()
```
### Remarks
The cabinet compression level used during re-cabbing can be configured with the «see P:WixToolset.Dtf.WindowsInstaller.Package.InstallPackage.CompressionLevel» property.
## CompressionLevel Property {#compressionlevel}
Gets or sets the compression level used by «see M:WixToolset.Dtf.WindowsInstaller.Package.InstallPackage.UpdateFiles» and «see M:WixToolset.Dtf.WindowsInstaller.Package.InstallPackage.Consolidate(System.String)» .
### Declaration
```cs
public WixToolset.Dtf.Compression.CompressionLevel CompressionLevel { get; set; }
```
### Remarks
If the Directory table is modified, this mapping will be outdated until you close and reopen the install package.
## Directories Property {#directories}
Gets a mapping from Directory keys to source/target paths.
### Declaration
```cs
public InstallPathMap Directories { get; set; }
```
### Remarks
If the Directory table is modified, this mapping will be outdated until you call «see M:WixToolset.Dtf.WindowsInstaller.Package.InstallPackage.UpdateDirectories» .
## Files Property {#files}
Gets a mapping from File keys to source/target paths.
### Declaration
```cs
public InstallPathMap Files { get; set; }
```
### Remarks
If the File, Component, or Directory tables are modified, this mapping may be outdated until you call «see M:WixToolset.Dtf.WindowsInstaller.Package.InstallPackage.UpdateDirectories» .
## Property Property {#property}
Accessor for getting and setting properties of the InstallPackage database.
### Declaration
```cs
public InstallPackageProperties Property { get; set; }
```
## SourceDirectory Property {#sourcedirectory}
Gets or sets the location to obtain source files and cabinets when extracting or updating files in the working directory. This is often the location of an original copy of the package that is not meant to be modified.
### Declaration
```cs
public string SourceDirectory { get; set; }
```
## WorkingDirectory Property {#workingdirectory}
Gets or sets the location where files will be extracted to/updated from. Also the location where a temporary folder is created during some operations.
### Declaration
```cs
public string WorkingDirectory { get; set; }
```
## Message Event {#message}
Handle this event to receive status messages when operations are performed on the install package.
### Declaration
```cs
public InstallPackageMessageHandler Message
```
### Value
`InstallPackageMessageHandler`
