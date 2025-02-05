---
title: BundleInfo Class
---
Default implementation of «see T:WixToolset.Mba.Core.IBundleInfo» .
## Methods
| Method | Description |
| ------ | ----------- |
| [AddRelatedBundleAsPackage()](#addrelatedbundleaspackage_nop) |  |
| [AddUpdateBundleAsPackage()](#addupdatebundleaspackage_nop) |  |
| [ParseBundleFromStream(stream)](#parsebundlefromstream_stream) | Parses BA manifest from the given stream. |
| [ParseBundleFromXml(root)](#parsebundlefromxml_root) | Parses BA manifest from the given «see T:System.Xml.XPath.XPathNavigator» . |
## Properties
| Property | Description |
| ------ | ----------- |
| [LogVariable](#logvariable) |  |
| [Name](#name) |  |
| [OverridableVariables](#overridablevariables) |  |
| [Packages](#packages) |  |
| [PerMachine](#permachine) |  |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## AddRelatedBundleAsPackage() Method {#addrelatedbundleaspackage_nop}

### Declaration
```cs
public IPackageInfo AddRelatedBundleAsPackage()
```
## AddUpdateBundleAsPackage() Method {#addupdatebundleaspackage_nop}

### Declaration
```cs
public IPackageInfo AddUpdateBundleAsPackage()
```
## ParseBundleFromStream(stream) Method {#parsebundlefromstream_stream}
Parses BA manifest from the given stream.
### Declaration
```cs
public static IBundleInfo ParseBundleFromStream(
  System.IO.Stream stream
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| stream | System.IO.Stream |  |
## ParseBundleFromXml(root) Method {#parsebundlefromxml_root}
Parses BA manifest from the given «see T:System.Xml.XPath.XPathNavigator» .
### Declaration
```cs
public static IBundleInfo ParseBundleFromXml(
  System.Xml.XPath.XPathNavigator root
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| root | System.Xml.XPath.XPathNavigator | The root of the BA manifest. |
## LogVariable Property {#logvariable}

### Declaration
```cs
public string LogVariable { get; set; }
```
## Name Property {#name}

### Declaration
```cs
public string Name { get; set; }
```
## OverridableVariables Property {#overridablevariables}

### Declaration
```cs
public IOverridableVariables OverridableVariables { get; set; }
```
## Packages Property {#packages}

### Declaration
```cs
public System.Collections.Generic.IDictionary<System.String,WixToolset.Mba.Core.IPackageInfo> Packages { get; set; }
```
## PerMachine Property {#permachine}

### Declaration
```cs
public bool PerMachine { get; set; }
```
