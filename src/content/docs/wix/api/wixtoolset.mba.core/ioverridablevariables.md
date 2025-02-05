---
title: IOverridableVariables Interface
---
Overridable variable information from the BA manifest.
## Properties
| Property | Description |
| ------ | ----------- |
| [CommandLineType](#commandlinetype) | The «see T:WixToolset.Mba.Core.VariableCommandLineType» of the bundle. |
| [Variables](#variables) | Variable Dictionary of variable name to «see T:WixToolset.Mba.Core.IOverridableVariableInfo» . |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## CommandLineType Property {#commandlinetype}
The «see T:WixToolset.Mba.Core.VariableCommandLineType» of the bundle.
### Declaration
```cs
public VariableCommandLineType CommandLineType { get; set; }
```
## Variables Property {#variables}
Variable Dictionary of variable name to «see T:WixToolset.Mba.Core.IOverridableVariableInfo» .
### Declaration
```cs
public System.Collections.Generic.IDictionary<System.String,WixToolset.Mba.Core.IOverridableVariableInfo> Variables { get; set; }
```
