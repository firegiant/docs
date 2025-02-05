---
title: BaseExtensionCommandLine Class
---
Base class for extensions to be able to parse the command-line.
## Methods
| Method | Description |
| ------ | ----------- |
| [GetCommandLineHelp()](#getcommandlinehelp_nop) | See «see M:WixToolset.Extensibility.IExtensionCommandLine.GetCommandLineHelp»  |
| [PostParse()](#postparse_nop) | See «see M:WixToolset.Extensibility.IExtensionCommandLine.PostParse»  |
| [PreParse()](#preparse_nop) | See «see M:WixToolset.Extensibility.IExtensionCommandLine.PreParse(WixToolset.Extensibility.Data.ICommandLineContext)»  |
| [TryParseArgument()](#tryparseargument_nop) | See «see M:WixToolset.Extensibility.IExtensionCommandLine.TryParseArgument(WixToolset.Extensibility.Services.ICommandLineParser,System.String)»  |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## GetCommandLineHelp() Method {#getcommandlinehelp_nop}
See «see M:WixToolset.Extensibility.IExtensionCommandLine.GetCommandLineHelp»
### Declaration
```cs
public Data.CommandLineHelp GetCommandLineHelp()
```
## PostParse() Method {#postparse_nop}
See «see M:WixToolset.Extensibility.IExtensionCommandLine.PostParse»
### Declaration
```cs
public void PostParse()
```
## PreParse() Method {#preparse_nop}
See «see M:WixToolset.Extensibility.IExtensionCommandLine.PreParse(WixToolset.Extensibility.Data.ICommandLineContext)»
### Declaration
```cs
public void PreParse()
```
## TryParseArgument() Method {#tryparseargument_nop}
See «see M:WixToolset.Extensibility.IExtensionCommandLine.TryParseArgument(WixToolset.Extensibility.Services.ICommandLineParser,System.String)»
### Declaration
```cs
public bool TryParseArgument()
```
