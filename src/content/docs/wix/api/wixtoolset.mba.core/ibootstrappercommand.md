---
title: IBootstrapperCommand Interface
---
Command information passed from the engine for the BA to perform.
## Methods
| Method | Description |
| ------ | ----------- |
| [ParseCommandLine()](#parsecommandline_nop) | Parses the command line arguments into an «see T:WixToolset.Mba.Core.IMbaCommand» . |
## Properties
| Property | Description |
| ------ | ----------- |
| [Action](#action) | Gets the action for the BA to perform. |
| [BootstrapperApplicationDataPath](#bootstrapperapplicationdatapath) | Gets path to BootstrapperApplicationData.xml. |
| [BootstrapperWorkingFolder](#bootstrapperworkingfolder) | Gets bootstrapper working folder. |
| [CmdShow](#cmdshow) | Hint for the initial visibility of the window. |
| [CommandLine](#commandline) | Gets the command line arguments. |
| [Display](#display) | Gets the display level for the BA. |
| [LayoutDirectory](#layoutdirectory) | Gets layout directory. |
| [Passthrough](#passthrough) | If this was run from a backward compatible bundle. |
| [Relation](#relation) | If this was run from a related bundle, specifies the relation type. |
| [Resume](#resume) | Gets the method of how the engine was resumed from a previous installation step. |
| [SplashScreen](#splashscreen) | Gets the handle to the splash screen window. If no splash screen was displayed this value will be IntPtr.Zero. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## ParseCommandLine() Method {#parsecommandline_nop}
Parses the command line arguments into an «see T:WixToolset.Mba.Core.IMbaCommand» .
### Declaration
```cs
public IMbaCommand ParseCommandLine()
```
### Return value
`IMbaCommand` The parsed information.
### Exceptions
| Exception | Description |
| --------- | ----------- |
|  | The command line could not be parsed. |
## Action Property {#action}
Gets the action for the BA to perform.
### Declaration
```cs
public LaunchAction Action { get; set; }
```
## BootstrapperApplicationDataPath Property {#bootstrapperapplicationdatapath}
Gets path to BootstrapperApplicationData.xml.
### Declaration
```cs
public string BootstrapperApplicationDataPath { get; set; }
```
## BootstrapperWorkingFolder Property {#bootstrapperworkingfolder}
Gets bootstrapper working folder.
### Declaration
```cs
public string BootstrapperWorkingFolder { get; set; }
```
## CmdShow Property {#cmdshow}
Hint for the initial visibility of the window.
### Declaration
```cs
public int CmdShow { get; set; }
```
## CommandLine Property {#commandline}
Gets the command line arguments.
### Declaration
```cs
public string CommandLine { get; set; }
```
## Display Property {#display}
Gets the display level for the BA.
### Declaration
```cs
public Display Display { get; set; }
```
## LayoutDirectory Property {#layoutdirectory}
Gets layout directory.
### Declaration
```cs
public string LayoutDirectory { get; set; }
```
## Passthrough Property {#passthrough}
If this was run from a backward compatible bundle.
### Declaration
```cs
public bool Passthrough { get; set; }
```
## Relation Property {#relation}
If this was run from a related bundle, specifies the relation type.
### Declaration
```cs
public RelationType Relation { get; set; }
```
## Resume Property {#resume}
Gets the method of how the engine was resumed from a previous installation step.
### Declaration
```cs
public ResumeType Resume { get; set; }
```
## SplashScreen Property {#splashscreen}
Gets the handle to the splash screen window. If no splash screen was displayed this value will be IntPtr.Zero.
### Declaration
```cs
public IntPtr SplashScreen { get; set; }
```
