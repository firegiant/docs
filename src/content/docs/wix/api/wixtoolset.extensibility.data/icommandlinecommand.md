---
title: ICommandLineCommand Interface
---
Custom command.
## Methods
| Method | Description |
| ------ | ----------- |
| [ExecuteAsync(cancellationToken)](#executeasync_cancellationtoken) | Executes the command. |
| [GetCommandLineHelp()](#getcommandlinehelp_nop) | Gets the help for this command. |
| [TryParseArgument(parser, argument)](#tryparseargument_parser_argument) | Allows the command to parse command-line arguments. |
## Properties
| Property | Description |
| ------ | ----------- |
| [ShowLogo](#showlogo) | Indicates the command-line should show the logo. |
| [StopParsing](#stopparsing) | Indicates the command-line parsing can stop. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## ExecuteAsync(cancellationToken) Method {#executeasync_cancellationtoken}
Executes the command.
### Declaration
```cs
public System.Threading.Tasks.Task<System.Int32> ExecuteAsync(
  System.Threading.CancellationToken cancellationToken
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| cancellationToken | System.Threading.CancellationToken | Cancellation token. |
### Return value
`System.Threading.Tasks.Task<System.Int32>` Exit code for the command.
## GetCommandLineHelp() Method {#getcommandlinehelp_nop}
Gets the help for this command.
### Declaration
```cs
public CommandLineHelp GetCommandLineHelp()
```
## TryParseArgument(parser, argument) Method {#tryparseargument_parser_argument}
Allows the command to parse command-line arguments.
### Declaration
```cs
public bool TryParseArgument(
  WixToolset.Extensibility.Services.ICommandLineParser parser,
  string argument
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| parser | WixToolset.Extensibility.Services.ICommandLineParser | Parser to help parse the argument and additional arguments. |
| argument | string | Argument to parse. |
### Return value
`bool` True if the argument is recognized; otherwise false to allow another extension to process it.
## ShowLogo Property {#showlogo}
Indicates the command-line should show the logo.
### Declaration
```cs
public bool ShowLogo { get; set; }
```
## StopParsing Property {#stopparsing}
Indicates the command-line parsing can stop.
### Declaration
```cs
public bool StopParsing { get; set; }
```
