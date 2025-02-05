---
title: CommandLineHelp Class
---
A command line option (switch or command) description.
## Properties
| Property | Description |
| ------ | ----------- |
| [Commands](#commands) | Optional list of command line commands. |
| [Description](#description) | Description for the command line option. |
| [Notes](#notes) | Optional additional notes for the command line option. |
| [Switches](#switches) | Optional list of command line switches. |
| [Usage](#usage) | Usage for the command line option. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Commands Property {#commands}
Optional list of command line commands.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Extensibility.Data.CommandLineHelpCommand> Commands { get; set; }
```
## Description Property {#description}
Description for the command line option.
### Declaration
```cs
public string Description { get; set; }
```
## Notes Property {#notes}
Optional additional notes for the command line option.
### Declaration
```cs
public string Notes { get; set; }
```
## Switches Property {#switches}
Optional list of command line switches.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Extensibility.Data.CommandLineHelpSwitch> Switches { get; set; }
```
## Usage Property {#usage}
Usage for the command line option.
### Declaration
```cs
public string Usage { get; set; }
```
