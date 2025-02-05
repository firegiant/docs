---
title: BaseCommandLineCommand Class
---
Base class for a command-line command.
## Methods
| Method | Description |
| ------ | ----------- |
| [ExecuteAsync()](#executeasync_nop) | See «see M:WixToolset.Extensibility.Data.ICommandLineCommand.ExecuteAsync(System.Threading.CancellationToken)»  |
| [GetCommandLineHelp()](#getcommandlinehelp_nop) | See «see M:WixToolset.Extensibility.Data.ICommandLineCommand.GetCommandLineHelp»  |
| [TryParseArgument()](#tryparseargument_nop) | See «see M:WixToolset.Extensibility.Data.ICommandLineCommand.TryParseArgument(WixToolset.Extensibility.Services.ICommandLineParser,System.String)»  |
## Properties
| Property | Description |
| ------ | ----------- |
| [ShowLogo](#showlogo) | See «see P:WixToolset.Extensibility.Data.ICommandLineCommand.ShowLogo»  |
| [StopParsing](#stopparsing) | See «see P:WixToolset.Extensibility.Data.ICommandLineCommand.StopParsing»  |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## ExecuteAsync() Method {#executeasync_nop}
See «see M:WixToolset.Extensibility.Data.ICommandLineCommand.ExecuteAsync(System.Threading.CancellationToken)»
### Declaration
```cs
public System.Threading.Tasks.Task<System.Int32> ExecuteAsync()
```
## GetCommandLineHelp() Method {#getcommandlinehelp_nop}
See «see M:WixToolset.Extensibility.Data.ICommandLineCommand.GetCommandLineHelp»
### Declaration
```cs
public Data.CommandLineHelp GetCommandLineHelp()
```
## TryParseArgument() Method {#tryparseargument_nop}
See «see M:WixToolset.Extensibility.Data.ICommandLineCommand.TryParseArgument(WixToolset.Extensibility.Services.ICommandLineParser,System.String)»
### Declaration
```cs
public bool TryParseArgument()
```
## ShowLogo Property {#showlogo}
See «see P:WixToolset.Extensibility.Data.ICommandLineCommand.ShowLogo»
### Declaration
```cs
public bool ShowLogo { get; set; }
```
## StopParsing Property {#stopparsing}
See «see P:WixToolset.Extensibility.Data.ICommandLineCommand.StopParsing»
### Declaration
```cs
public bool StopParsing { get; set; }
```
