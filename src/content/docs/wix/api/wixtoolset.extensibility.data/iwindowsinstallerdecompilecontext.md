---
title: IWindowsInstallerDecompileContext Interface
---
The context used to decompile a Windows Installer database.
## Properties
| Property | Description |
| ------ | ----------- |
| [BaseSourcePath](#basesourcepath) | Optional gets or sets the base path for the File/@Source. |
| [CabinetExtractFolder](#cabinetextractfolder) | Gets or sets the folder where files are extracted. |
| [DecompilePath](#decompilepath) | Gets or sets the path to the file to decompile. |
| [DecompileType](#decompiletype) | Gets or sets the type to decompile. |
| [ExtensionData](#extensiondata) | Collection of extension data to use during decompiling. |
| [Extensions](#extensions) | Gets or sets the decompiler extensions. |
| [ExtractFolder](#extractfolder) | Gets or sets the folder where content is extracted. |
| [IntermediateFolder](#intermediatefolder) | Gets or sets the intermediate folder. |
| [KeepModularizationIds](#keepmodularizationids) | Gets or sets whether the decompiler should keep modularization GUIDs (true) or remove them (default/false). |
| [OutputPath](#outputpath) | Gets or sets where to output the result. |
| [ServiceProvider](#serviceprovider) | Gets or sets the service provider. |
| [SuppressCustomTables](#suppresscustomtables) | Gets or sets the option to suppress custom tables. |
| [SuppressDroppingEmptyTables](#suppressdroppingemptytables) | Gets or sets the option to suppress dropping empty tables. |
| [SuppressExtractCabinets](#suppressextractcabinets) | Gets or sets whether to prevent extract cabinets. |
| [SuppressRelativeActionSequencing](#suppressrelativeactionsequencing) | Gets or sets whether to suppress relative action sequencing. |
| [SuppressUI](#suppressui) | Gets or sets the option to suppress decompiling UI-related tables. |
| [SymbolDefinitionCreator](#symboldefinitioncreator) | Symbol definition creator used to load extension data. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## BaseSourcePath Property {#basesourcepath}
Optional gets or sets the base path for the File/@Source.
### Declaration
```cs
public string BaseSourcePath { get; set; }
```
### Remarks
Default value is "SourceDir" to enable use of BindPaths.
## CabinetExtractFolder Property {#cabinetextractfolder}
Gets or sets the folder where files are extracted.
### Declaration
```cs
public string CabinetExtractFolder { get; set; }
```
## DecompilePath Property {#decompilepath}
Gets or sets the path to the file to decompile.
### Declaration
```cs
public string DecompilePath { get; set; }
```
## DecompileType Property {#decompiletype}
Gets or sets the type to decompile.
### Declaration
```cs
public WixToolset.Data.OutputType DecompileType { get; set; }
```
## ExtensionData Property {#extensiondata}
Collection of extension data to use during decompiling.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Extensibility.IExtensionData> ExtensionData { get; set; }
```
## Extensions Property {#extensions}
Gets or sets the decompiler extensions.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Extensibility.IWindowsInstallerDecompilerExtension> Extensions { get; set; }
```
## ExtractFolder Property {#extractfolder}
Gets or sets the folder where content is extracted.
### Declaration
```cs
public string ExtractFolder { get; set; }
```
## IntermediateFolder Property {#intermediatefolder}
Gets or sets the intermediate folder.
### Declaration
```cs
public string IntermediateFolder { get; set; }
```
## KeepModularizationIds Property {#keepmodularizationids}
Gets or sets whether the decompiler should keep modularization GUIDs (true) or remove them (default/false).
### Declaration
```cs
public bool KeepModularizationIds { get; set; }
```
## OutputPath Property {#outputpath}
Gets or sets where to output the result.
### Declaration
```cs
public string OutputPath { get; set; }
```
## ServiceProvider Property {#serviceprovider}
Gets or sets the service provider.
### Declaration
```cs
public System.IServiceProvider ServiceProvider { get; set; }
```
## SuppressCustomTables Property {#suppresscustomtables}
Gets or sets the option to suppress custom tables.
### Declaration
```cs
public bool SuppressCustomTables { get; set; }
```
## SuppressDroppingEmptyTables Property {#suppressdroppingemptytables}
Gets or sets the option to suppress dropping empty tables.
### Declaration
```cs
public bool SuppressDroppingEmptyTables { get; set; }
```
## SuppressExtractCabinets Property {#suppressextractcabinets}
Gets or sets whether to prevent extract cabinets.
### Declaration
```cs
public bool SuppressExtractCabinets { get; set; }
```
## SuppressRelativeActionSequencing Property {#suppressrelativeactionsequencing}
Gets or sets whether to suppress relative action sequencing.
### Declaration
```cs
public bool SuppressRelativeActionSequencing { get; set; }
```
## SuppressUI Property {#suppressui}
Gets or sets the option to suppress decompiling UI-related tables.
### Declaration
```cs
public bool SuppressUI { get; set; }
```
## SymbolDefinitionCreator Property {#symboldefinitioncreator}
Symbol definition creator used to load extension data.
### Declaration
```cs
public WixToolset.Data.ISymbolDefinitionCreator SymbolDefinitionCreator { get; set; }
```
