---
title: IMbaCommand Interface
---
Command information parsed from the command line.
## Methods
| Method | Description |
| ------ | ----------- |
| [SetOverridableVariables(overridableVariables, engine)](#setoverridablevariables_overridablevariables_engine) | Sets overridable variables from the command line. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Restart](#restart) | Gets the action to perform if a reboot is required. |
| [UnknownCommandLineArgs](#unknowncommandlineargs) | The command line arguments not parsed into «see T:WixToolset.Mba.Core.IBootstrapperCommand» or «see T:WixToolset.Mba.Core.IMbaCommand» . |
| [Variables](#variables) | The variables that were parsed from the command line. Key = variable name, Value = variable value. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## SetOverridableVariables(overridableVariables, engine) Method {#setoverridablevariables_overridablevariables_engine}
Sets overridable variables from the command line.
### Declaration
```cs
public void SetOverridableVariables(
  IOverridableVariables overridableVariables,
  IEngine engine
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| overridableVariables | IOverridableVariables | The overridable variable information from . |
| engine | IEngine | The engine. |
## Restart Property {#restart}
Gets the action to perform if a reboot is required.
### Declaration
```cs
public Restart Restart { get; set; }
```
## UnknownCommandLineArgs Property {#unknowncommandlineargs}
The command line arguments not parsed into «see T:WixToolset.Mba.Core.IBootstrapperCommand» or «see T:WixToolset.Mba.Core.IMbaCommand» .
### Declaration
```cs
public System.String[] UnknownCommandLineArgs { get; set; }
```
## Variables Property {#variables}
The variables that were parsed from the command line. Key = variable name, Value = variable value.
### Declaration
```cs
public System.Collections.Generic.KeyValuePair<System.String,System.String><> Variables { get; set; }
```
