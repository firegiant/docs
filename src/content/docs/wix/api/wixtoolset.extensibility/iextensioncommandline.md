---
title: IExtensionCommandLine Interface
---
Interface extensions implement to be able to parse the command-line.
## Methods
| Method | Description |
| ------ | ----------- |
| [GetCommandLineHelp()](#getcommandlinehelp_nop) | Gets the help for this extension. |
| [PostParse()](#postparse_nop) | Called after the command-line is parsed. |
| [PreParse(context)](#preparse_context) | Called before the command-line is parsed. |
| [TryParseArgument(parser, argument)](#tryparseargument_parser_argument) | Gives the extension an opportunity pass a command-line argument for another command. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## GetCommandLineHelp() Method {#getcommandlinehelp_nop}
Gets the help for this extension.
### Declaration
```cs
public Data.CommandLineHelp GetCommandLineHelp()
```
## PostParse() Method {#postparse_nop}
Called after the command-line is parsed.
### Declaration
```cs
public void PostParse()
```
## PreParse(context) Method {#preparse_context}
Called before the command-line is parsed.
### Declaration
```cs
public void PreParse(
  Data.ICommandLineContext context
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| context | Data.ICommandLineContext | Information about the command-line to be parsed. |
## TryParseArgument(parser, argument) Method {#tryparseargument_parser_argument}
Gives the extension an opportunity pass a command-line argument for another command.
### Declaration
```cs
public bool TryParseArgument(
  Services.ICommandLineParser parser,
  string argument
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| parser | Services.ICommandLineParser | Parser to help parse the argument and additional arguments. |
| argument | string | Argument to parse. |
### Return value
`bool` True if the argument is recognized; otherwise false to allow another extension to process it.
