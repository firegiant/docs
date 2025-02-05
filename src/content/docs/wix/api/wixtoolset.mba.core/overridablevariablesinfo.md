---
title: OverridableVariablesInfo Class
---
Default implementation of «see T:WixToolset.Mba.Core.IOverridableVariables» .
## Methods
| Method | Description |
| ------ | ----------- |
| [ParseFromXml(root)](#parsefromxml_root) | Parses the overridable variable info from the BA manifest. |
## Properties
| Property | Description |
| ------ | ----------- |
| [CommandLineType](#commandlinetype) |  |
| [Variables](#variables) |  |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## ParseFromXml(root) Method {#parsefromxml_root}
Parses the overridable variable info from the BA manifest.
### Declaration
```cs
public static IOverridableVariables ParseFromXml(
  System.Xml.XPath.XPathNavigator root
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| root | System.Xml.XPath.XPathNavigator | XML root |
### Return value
`IOverridableVariables` The parsed information.
## CommandLineType Property {#commandlinetype}

### Declaration
```cs
public VariableCommandLineType CommandLineType { get; set; }
```
## Variables Property {#variables}

### Declaration
```cs
public System.Collections.Generic.IDictionary<System.String,WixToolset.Mba.Core.IOverridableVariableInfo> Variables { get; set; }
```
