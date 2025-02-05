---
title: BaseResolverExtension Class
---
Base class for creating a resolver extension.
## Methods
| Method | Description |
| ------ | ----------- |
| [CreateResolveFileResult()](#createresolvefileresult_nop) | Creates a resolve file result. |
| [PostResolve()](#postresolve_nop) | Called at the end of resolve. |
| [PreResolve()](#preresolve_nop) | Called at the beginning of the resolving variables and files. |
| [ResolveFile(source, symbolDefinition, sourceLineNumbers, bindStage)](#resolvefile_source_symboldefinition_sourcelinenumbers_bindstage) | See «see M:WixToolset.Extensibility.IResolverExtension.ResolveFile(System.String,WixToolset.Data.IntermediateSymbolDefinition,WixToolset.Data.SourceLineNumber,WixToolset.Extensibility.Data.BindStage)»  |
## Properties
| Property | Description |
| ------ | ----------- |
| [Context](#context) | Context for use by the extension. |
| [Messaging](#messaging) | Messaging for use by the extension. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CreateResolveFileResult() Method {#createresolvefileresult_nop}
Creates a resolve file result.
### Declaration
```cs
protected Data.IResolveFileResult CreateResolveFileResult()
```
## PostResolve() Method {#postresolve_nop}
Called at the end of resolve.
### Declaration
```cs
public void PostResolve()
```
## PreResolve() Method {#preresolve_nop}
Called at the beginning of the resolving variables and files.
### Declaration
```cs
public void PreResolve()
```
## ResolveFile(source, symbolDefinition, sourceLineNumbers, bindStage) Method {#resolvefile_source_symboldefinition_sourcelinenumbers_bindstage}
See «see M:WixToolset.Extensibility.IResolverExtension.ResolveFile(System.String,WixToolset.Data.IntermediateSymbolDefinition,WixToolset.Data.SourceLineNumber,WixToolset.Extensibility.Data.BindStage)»
### Declaration
```cs
public Data.IResolveFileResult ResolveFile(
  string source,
  WixToolset.Data.IntermediateSymbolDefinition symbolDefinition,
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  Data.BindStage bindStage
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| source | string |  |
| symbolDefinition | WixToolset.Data.IntermediateSymbolDefinition |  |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber |  |
| bindStage | Data.BindStage |  |
## Context Property {#context}
Context for use by the extension.
### Declaration
```cs
protected Data.IResolveContext Context { get; set; }
```
## Messaging Property {#messaging}
Messaging for use by the extension.
### Declaration
```cs
protected Services.IMessaging Messaging { get; set; }
```
