---
title: IPreprocessContext Interface
---
Preprocessor context.
## Properties
| Property | Description |
| ------ | ----------- |
| [CancellationToken](#cancellationtoken) | Cancellation token. |
| [CurrentSourceLineNumber](#currentsourcelinenumber) | Current source line number of the preprocessor. |
| [Extensions](#extensions) | Collection of extensions to use during preprocessing. |
| [IncludeSearchPaths](#includesearchpaths) | Collection of search paths to find include files. |
| [IntermediateFolder](#intermediatefolder) | Intermediate folder. |
| [OutputPath](#outputpath) | Output path. |
| [Platform](#platform) | Gets the platform which the compiler will use when defaulting 64-bit attributes and elements. |
| [ServiceProvider](#serviceprovider) | Service provider. |
| [SourcePath](#sourcepath) | Path to the source file being preprocessed. |
| [Variables](#variables) | Collection of name/value pairs used as preprocessor variables. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CancellationToken Property {#cancellationtoken}
Cancellation token.
### Declaration
```cs
public System.Threading.CancellationToken CancellationToken { get; set; }
```
## CurrentSourceLineNumber Property {#currentsourcelinenumber}
Current source line number of the preprocessor.
### Declaration
```cs
public WixToolset.Data.SourceLineNumber CurrentSourceLineNumber { get; set; }
```
## Extensions Property {#extensions}
Collection of extensions to use during preprocessing.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Extensibility.IPreprocessorExtension> Extensions { get; set; }
```
## IncludeSearchPaths Property {#includesearchpaths}
Collection of search paths to find include files.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<System.String> IncludeSearchPaths { get; set; }
```
## IntermediateFolder Property {#intermediatefolder}
Intermediate folder.
### Declaration
```cs
public string IntermediateFolder { get; set; }
```
## OutputPath Property {#outputpath}
Output path.
### Declaration
```cs
public string OutputPath { get; set; }
```
## Platform Property {#platform}
Gets the platform which the compiler will use when defaulting 64-bit attributes and elements.
### Declaration
```cs
public WixToolset.Data.Platform Platform { get; set; }
```
## ServiceProvider Property {#serviceprovider}
Service provider.
### Declaration
```cs
public System.IServiceProvider ServiceProvider { get; set; }
```
## SourcePath Property {#sourcepath}
Path to the source file being preprocessed.
### Declaration
```cs
public string SourcePath { get; set; }
```
## Variables Property {#variables}
Collection of name/value pairs used as preprocessor variables.
### Declaration
```cs
public System.Collections.Generic.IDictionary<System.String,System.String> Variables { get; set; }
```
