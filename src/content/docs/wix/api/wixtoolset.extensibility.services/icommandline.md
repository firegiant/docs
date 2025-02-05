---
title: ICommandLine Interface
---
Command-line parsing mechanism.
## Methods
| Method | Description |
| ------ | ----------- |
| [CreateCommand(args)](#createcommand_args) | Simple way to parse arguments and create a command. |
| [CreateCommand(commandLine)](#createcommand_commandline) | Simple way to parse arguments and create a command. |
| [ParseStandardCommandLine(arguments)](#parsestandardcommandline_arguments) | Creates a command from populated arguments. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CreateCommand(args) Method {#createcommand_args}
Simple way to parse arguments and create a command.
### Declaration
```cs
public WixToolset.Extensibility.Data.ICommandLineCommand CreateCommand(
  System.String[] args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | System.String[] | Unparsed arguments. |
### Return value
`WixToolset.Extensibility.Data.ICommandLineCommand` Command if the command-line arguments can be parsed, otherwise null.
## CreateCommand(commandLine) Method {#createcommand_commandline}
Simple way to parse arguments and create a command.
### Declaration
```cs
public WixToolset.Extensibility.Data.ICommandLineCommand CreateCommand(
  string commandLine
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| commandLine | string | Unparsed arguments. |
### Return value
`WixToolset.Extensibility.Data.ICommandLineCommand` Command if the command-line arguments can be parsed, otherwise null.
## ParseStandardCommandLine(arguments) Method {#parsestandardcommandline_arguments}
Creates a command from populated arguments.
### Declaration
```cs
public WixToolset.Extensibility.Data.ICommandLineCommand ParseStandardCommandLine(
  WixToolset.Extensibility.Data.ICommandLineArguments arguments
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| arguments | WixToolset.Extensibility.Data.ICommandLineArguments | Parsed arguments. |
### Return value
`WixToolset.Extensibility.Data.ICommandLineCommand` Command if the command-line arguments can be parsed, otherwise null.
