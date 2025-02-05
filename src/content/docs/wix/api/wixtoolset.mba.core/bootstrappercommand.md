---
title: BootstrapperCommand Class
---
Default implementation of «see T:WixToolset.Mba.Core.IBootstrapperCommand» .
## Methods
| Method | Description |
| ------ | ----------- |
| [ParseCommandLine()](#parsecommandline_nop) |  |
| [ParseCommandLineToArgs()](#parsecommandlinetoargs_nop) | Gets the command line arguments as a string array. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Action](#action) |  |
| [BootstrapperApplicationDataPath](#bootstrapperapplicationdatapath) |  |
| [BootstrapperWorkingFolder](#bootstrapperworkingfolder) |  |
| [CmdShow](#cmdshow) |  |
| [CommandLine](#commandline) |  |
| [Display](#display) |  |
| [LayoutDirectory](#layoutdirectory) |  |
| [Passthrough](#passthrough) |  |
| [Relation](#relation) |  |
| [Resume](#resume) |  |
| [SplashScreen](#splashscreen) |  |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## ParseCommandLine() Method {#parsecommandline_nop}

### Declaration
```cs
public IMbaCommand ParseCommandLine()
```
## ParseCommandLineToArgs() Method {#parsecommandlinetoargs_nop}
Gets the command line arguments as a string array.
### Declaration
```cs
public static System.String[] ParseCommandLineToArgs()
```
### Return value
`System.String[]` Array of command line arguments.
### Remarks
This method uses the same parsing as the operating system which handles quotes and spaces correctly.
### Exceptions
| Exception | Description |
| --------- | ----------- |
|  | The command line could not be parsed into an array. |
## Action Property {#action}

### Declaration
```cs
public LaunchAction Action { get; set; }
```
## BootstrapperApplicationDataPath Property {#bootstrapperapplicationdatapath}

### Declaration
```cs
public string BootstrapperApplicationDataPath { get; set; }
```
## BootstrapperWorkingFolder Property {#bootstrapperworkingfolder}

### Declaration
```cs
public string BootstrapperWorkingFolder { get; set; }
```
## CmdShow Property {#cmdshow}

### Declaration
```cs
public int CmdShow { get; set; }
```
## CommandLine Property {#commandline}

### Declaration
```cs
public string CommandLine { get; set; }
```
## Display Property {#display}

### Declaration
```cs
public Display Display { get; set; }
```
## LayoutDirectory Property {#layoutdirectory}

### Declaration
```cs
public string LayoutDirectory { get; set; }
```
## Passthrough Property {#passthrough}

### Declaration
```cs
public bool Passthrough { get; set; }
```
## Relation Property {#relation}

### Declaration
```cs
public RelationType Relation { get; set; }
```
## Resume Property {#resume}

### Declaration
```cs
public ResumeType Resume { get; set; }
```
## SplashScreen Property {#splashscreen}

### Declaration
```cs
public IntPtr SplashScreen { get; set; }
```
