---
title: BaseWindowsInstallerBackendBinderExtension Class
---
Base class for creating a windows installer backend extension.
## Methods
| Method | Description |
| ------ | ----------- |
| [CreateResolvedCabinet()](#createresolvedcabinet_nop) | Creates a resolved cabinet result. |
| [PostBackendBind()](#postbackendbind_nop) | See «see M:WixToolset.Extensibility.IWindowsInstallerBackendBinderExtension.PreBackendBind(WixToolset.Extensibility.Data.IBindContext)»  |
| [PreBackendBind()](#prebackendbind_nop) | See «see M:WixToolset.Extensibility.IWindowsInstallerBackendBinderExtension.PreBackendBind(WixToolset.Extensibility.Data.IBindContext)»  |
| [ResolveMedia()](#resolvemedia_nop) | See «see M:WixToolset.Extensibility.IWindowsInstallerBackendBinderExtension.PreBackendBind(WixToolset.Extensibility.Data.IBindContext)»  |
| [SymbolsFinalized()](#symbolsfinalized_nop) | See «see M:WixToolset.Extensibility.IWindowsInstallerBackendBinderExtension.SymbolsFinalized(WixToolset.Data.IntermediateSection)»  |
| [TryProcessSymbol()](#tryprocesssymbol_nop) | See «see M:WixToolset.Extensibility.IWindowsInstallerBackendBinderExtension.TryProcessSymbol(WixToolset.Data.IntermediateSection,WixToolset.Data.IntermediateSymbol,WixToolset.Data.WindowsInstaller.WindowsInstallerData,WixToolset.Data.WindowsInstaller.TableDefinitionCollection)»  |
## Properties
| Property | Description |
| ------ | ----------- |
| [BackendHelper](#backendhelper) | Backend helper for use by the extension. |
| [Context](#context) | Context for use by the extension. |
| [Messaging](#messaging) | Messaging for use by the extension. |
| [TableDefinitions](#tabledefinitions) | Optional table definitions. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CreateResolvedCabinet() Method {#createresolvedcabinet_nop}
Creates a resolved cabinet result.
### Declaration
```cs
protected Data.IResolvedCabinet CreateResolvedCabinet()
```
## PostBackendBind() Method {#postbackendbind_nop}
See «see M:WixToolset.Extensibility.IWindowsInstallerBackendBinderExtension.PreBackendBind(WixToolset.Extensibility.Data.IBindContext)»
### Declaration
```cs
public void PostBackendBind()
```
## PreBackendBind() Method {#prebackendbind_nop}
See «see M:WixToolset.Extensibility.IWindowsInstallerBackendBinderExtension.PreBackendBind(WixToolset.Extensibility.Data.IBindContext)»
### Declaration
```cs
public void PreBackendBind()
```
## ResolveMedia() Method {#resolvemedia_nop}
See «see M:WixToolset.Extensibility.IWindowsInstallerBackendBinderExtension.PreBackendBind(WixToolset.Extensibility.Data.IBindContext)»
### Declaration
```cs
public string ResolveMedia()
```
## SymbolsFinalized() Method {#symbolsfinalized_nop}
See «see M:WixToolset.Extensibility.IWindowsInstallerBackendBinderExtension.SymbolsFinalized(WixToolset.Data.IntermediateSection)»
### Declaration
```cs
public void SymbolsFinalized()
```
## TryProcessSymbol() Method {#tryprocesssymbol_nop}
See «see M:WixToolset.Extensibility.IWindowsInstallerBackendBinderExtension.TryProcessSymbol(WixToolset.Data.IntermediateSection,WixToolset.Data.IntermediateSymbol,WixToolset.Data.WindowsInstaller.WindowsInstallerData,WixToolset.Data.WindowsInstaller.TableDefinitionCollection)»
### Declaration
```cs
public bool TryProcessSymbol()
```
## BackendHelper Property {#backendhelper}
Backend helper for use by the extension.
### Declaration
```cs
protected Services.IWindowsInstallerBackendHelper BackendHelper { get; set; }
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
## TableDefinitions Property {#tabledefinitions}
Optional table definitions.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Data.WindowsInstaller.TableDefinition> TableDefinitions { get; set; }
```
