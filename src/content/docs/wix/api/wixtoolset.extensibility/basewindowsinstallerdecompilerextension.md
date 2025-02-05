---
title: BaseWindowsInstallerDecompilerExtension Class
---
Base class for creating a windows installer decompiler extensions.
## Methods
| Method | Description |
| ------ | ----------- |
| [PostDecompile()](#postdecompile_nop) | See «see M:WixToolset.Extensibility.IWindowsInstallerDecompilerExtension.PostDecompile(WixToolset.Extensibility.Data.IWindowsInstallerDecompileResult)»  |
| [PostDecompileTables()](#postdecompiletables_nop) | See «see M:WixToolset.Extensibility.IWindowsInstallerDecompilerExtension.PostDecompileTables(WixToolset.Data.WindowsInstaller.TableIndexedCollection)»  |
| [PreDecompile()](#predecompile_nop) | See «see M:WixToolset.Extensibility.IWindowsInstallerDecompilerExtension.PostDecompile(WixToolset.Extensibility.Data.IWindowsInstallerDecompileResult)»  |
| [PreDecompileTables()](#predecompiletables_nop) | See «see M:WixToolset.Extensibility.IWindowsInstallerDecompilerExtension.PreDecompileTables(WixToolset.Data.WindowsInstaller.TableIndexedCollection)»  |
| [TryDecompileTable()](#trydecompiletable_nop) | See «see M:WixToolset.Extensibility.IWindowsInstallerDecompilerExtension.TryDecompileTable(WixToolset.Data.WindowsInstaller.Table)»  |
## Properties
| Property | Description |
| ------ | ----------- |
| [Context](#context) | Context for use by the extension. |
| [DecompilerHelper](#decompilerhelper) | Decompiler helper for use by the extension. |
| [Messaging](#messaging) | Messaging for use by the extension. |
| [TableDefinitions](#tabledefinitions) | See «see P:WixToolset.Extensibility.IWindowsInstallerDecompilerExtension.TableDefinitions»  |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## PostDecompile() Method {#postdecompile_nop}
See «see M:WixToolset.Extensibility.IWindowsInstallerDecompilerExtension.PostDecompile(WixToolset.Extensibility.Data.IWindowsInstallerDecompileResult)»
### Declaration
```cs
public void PostDecompile()
```
## PostDecompileTables() Method {#postdecompiletables_nop}
See «see M:WixToolset.Extensibility.IWindowsInstallerDecompilerExtension.PostDecompileTables(WixToolset.Data.WindowsInstaller.TableIndexedCollection)»
### Declaration
```cs
public void PostDecompileTables()
```
## PreDecompile() Method {#predecompile_nop}
See «see M:WixToolset.Extensibility.IWindowsInstallerDecompilerExtension.PostDecompile(WixToolset.Extensibility.Data.IWindowsInstallerDecompileResult)»
### Declaration
```cs
public void PreDecompile()
```
## PreDecompileTables() Method {#predecompiletables_nop}
See «see M:WixToolset.Extensibility.IWindowsInstallerDecompilerExtension.PreDecompileTables(WixToolset.Data.WindowsInstaller.TableIndexedCollection)»
### Declaration
```cs
public void PreDecompileTables()
```
## TryDecompileTable() Method {#trydecompiletable_nop}
See «see M:WixToolset.Extensibility.IWindowsInstallerDecompilerExtension.TryDecompileTable(WixToolset.Data.WindowsInstaller.Table)»
### Declaration
```cs
public bool TryDecompileTable()
```
## Context Property {#context}
Context for use by the extension.
### Declaration
```cs
protected Data.IWindowsInstallerDecompileContext Context { get; set; }
```
## DecompilerHelper Property {#decompilerhelper}
Decompiler helper for use by the extension.
### Declaration
```cs
protected Services.IWindowsInstallerDecompilerHelper DecompilerHelper { get; set; }
```
## Messaging Property {#messaging}
Messaging for use by the extension.
### Declaration
```cs
protected Services.IMessaging Messaging { get; set; }
```
## TableDefinitions Property {#tabledefinitions}
See «see P:WixToolset.Extensibility.IWindowsInstallerDecompilerExtension.TableDefinitions»
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Data.WindowsInstaller.TableDefinition> TableDefinitions { get; set; }
```
