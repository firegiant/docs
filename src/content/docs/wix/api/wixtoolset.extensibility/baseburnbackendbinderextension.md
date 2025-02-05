---
title: BaseBurnBackendBinderExtension Class
---
Base class for creating a Burn backend extension.
## Methods
| Method | Description |
| ------ | ----------- |
| [PostBackendBind(result)](#postbackendbind_result) | See «see M:WixToolset.Extensibility.IBurnBackendBinderExtension.PostBackendBind(WixToolset.Extensibility.Data.IBindResult)»  |
| [PreBackendBind()](#prebackendbind_nop) | See «see M:WixToolset.Extensibility.IBurnBackendBinderExtension.PreBackendBind(WixToolset.Extensibility.Data.IBindContext)»  |
| [ResolveRelatedFile()](#resolverelatedfile_nop) | See «see M:WixToolset.Extensibility.IBurnBackendBinderExtension.ResolveRelatedFile(System.String,System.String,System.String,WixToolset.Data.SourceLineNumber)»  |
| [ResolveUrl()](#resolveurl_nop) | See «see M:WixToolset.Extensibility.IBurnBackendBinderExtension.ResolveUrl(System.String,System.String,System.String,System.String,System.String)»  |
| [SymbolsFinalized()](#symbolsfinalized_nop) | See «see M:WixToolset.Extensibility.IBurnBackendBinderExtension.SymbolsFinalized(WixToolset.Data.IntermediateSection)»  |
| [TryProcessSymbol()](#tryprocesssymbol_nop) | See «see M:WixToolset.Extensibility.IBurnBackendBinderExtension.TryProcessSymbol(WixToolset.Data.IntermediateSection,WixToolset.Data.IntermediateSymbol)»  |
## Properties
| Property | Description |
| ------ | ----------- |
| [BackendHelper](#backendhelper) | Backend helper for use by the extension. |
| [Context](#context) | Context for use by the extension. |
| [Messaging](#messaging) | Messaging for use by the extension. |
| [SymbolDefinitions](#symboldefinitions) | Optional symbol definitions. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## PostBackendBind(result) Method {#postbackendbind_result}
See «see M:WixToolset.Extensibility.IBurnBackendBinderExtension.PostBackendBind(WixToolset.Extensibility.Data.IBindResult)»
### Declaration
```cs
public void PostBackendBind(
  Data.IBindResult result
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| result | Data.IBindResult |  |
## PreBackendBind() Method {#prebackendbind_nop}
See «see M:WixToolset.Extensibility.IBurnBackendBinderExtension.PreBackendBind(WixToolset.Extensibility.Data.IBindContext)»
### Declaration
```cs
public void PreBackendBind()
```
## ResolveRelatedFile() Method {#resolverelatedfile_nop}
See «see M:WixToolset.Extensibility.IBurnBackendBinderExtension.ResolveRelatedFile(System.String,System.String,System.String,WixToolset.Data.SourceLineNumber)»
### Declaration
```cs
public Data.IResolveFileResult ResolveRelatedFile()
```
## ResolveUrl() Method {#resolveurl_nop}
See «see M:WixToolset.Extensibility.IBurnBackendBinderExtension.ResolveUrl(System.String,System.String,System.String,System.String,System.String)»
### Declaration
```cs
public string ResolveUrl()
```
## SymbolsFinalized() Method {#symbolsfinalized_nop}
See «see M:WixToolset.Extensibility.IBurnBackendBinderExtension.SymbolsFinalized(WixToolset.Data.IntermediateSection)»
### Declaration
```cs
public void SymbolsFinalized()
```
## TryProcessSymbol() Method {#tryprocesssymbol_nop}
See «see M:WixToolset.Extensibility.IBurnBackendBinderExtension.TryProcessSymbol(WixToolset.Data.IntermediateSection,WixToolset.Data.IntermediateSymbol)»
### Declaration
```cs
public bool TryProcessSymbol()
```
## BackendHelper Property {#backendhelper}
Backend helper for use by the extension.
### Declaration
```cs
protected Services.IBurnBackendHelper BackendHelper { get; set; }
```
## Context Property {#context}
Context for use by the extension.
### Declaration
```cs
protected Data.IBindContext Context { get; set; }
```
## Messaging Property {#messaging}
Messaging for use by the extension.
### Declaration
```cs
protected Services.IMessaging Messaging { get; set; }
```
## SymbolDefinitions Property {#symboldefinitions}
Optional symbol definitions.
### Declaration
```cs
protected System.Collections.Generic.IReadOnlyCollection<WixToolset.Data.IntermediateSymbolDefinition> SymbolDefinitions { get; set; }
```
