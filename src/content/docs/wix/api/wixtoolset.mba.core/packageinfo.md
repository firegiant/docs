---
title: PackageInfo Class
---
Default implementation of «see T:WixToolset.Mba.Core.IPackageInfo» .
## Methods
| Method | Description |
| ------ | ----------- |
| [GetCacheTypeAttribute(node, attributeName)](#getcachetypeattribute_node_attributename) | Parse the cache type attribute. |
| [GetPackageTypeAttribute(node, attributeName)](#getpackagetypeattribute_node_attributename) | Parse the package type attribute |
| [GetRelatedBundleAsPackage(id, relationType, perMachine, version)](#getrelatedbundleaspackage_id_relationtype_permachine_version) | Create «see T:WixToolset.Mba.Core.IPackageInfo» from a related bundle. |
| [GetUpdateBundleAsPackage(id)](#getupdatebundleaspackage_id) | Create «see T:WixToolset.Mba.Core.IPackageInfo» from an update bundle. |
| [ParsePackagesFromXml(root)](#parsepackagesfromxml_root) | Parse packages from BootstrapperApplicationData.xml. |
## Properties
| Property | Description |
| ------ | ----------- |
| [CacheType](#cachetype) |  |
| [CustomData](#customdata) |  |
| [Description](#description) |  |
| [DisplayInternalUICondition](#displayinternaluicondition) |  |
| [DisplayName](#displayname) |  |
| [Id](#id) |  |
| [InstallCondition](#installcondition) |  |
| [Permanent](#permanent) |  |
| [PrereqLicenseFile](#prereqlicensefile) |  |
| [PrereqLicenseUrl](#prereqlicenseurl) |  |
| [PrereqPackage](#prereqpackage) |  |
| [PrimaryPackageType](#primarypackagetype) |  |
| [ProductCode](#productcode) |  |
| [RepairCondition](#repaircondition) |  |
| [Type](#type) |  |
| [UpgradeCode](#upgradecode) |  |
| [Version](#version) |  |
| [Vital](#vital) |  |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## GetCacheTypeAttribute(node, attributeName) Method {#getcachetypeattribute_node_attributename}
Parse the cache type attribute.
### Declaration
```cs
public static System.Nullable<WixToolset.Mba.Core.BOOTSTRAPPER_CACHE_TYPE> GetCacheTypeAttribute(
  System.Xml.XPath.XPathNavigator node,
  string attributeName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| node | System.Xml.XPath.XPathNavigator | Package node |
| attributeName | string | Attribute name |
### Return value
`System.Nullable<WixToolset.Mba.Core.BOOTSTRAPPER_CACHE_TYPE>` The cache type
## GetPackageTypeAttribute(node, attributeName) Method {#getpackagetypeattribute_node_attributename}
Parse the package type attribute
### Declaration
```cs
public static System.Nullable<WixToolset.Mba.Core.PackageType> GetPackageTypeAttribute(
  System.Xml.XPath.XPathNavigator node,
  string attributeName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| node | System.Xml.XPath.XPathNavigator | Package node |
| attributeName | string | Attribute name |
### Return value
`System.Nullable<WixToolset.Mba.Core.PackageType>` The package type
## GetRelatedBundleAsPackage(id, relationType, perMachine, version) Method {#getrelatedbundleaspackage_id_relationtype_permachine_version}
Create «see T:WixToolset.Mba.Core.IPackageInfo» from a related bundle.
### Declaration
```cs
public static IPackageInfo GetRelatedBundleAsPackage(
  string id,
  RelationType relationType,
  bool perMachine,
  string version
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| id | string | Package id |
| relationType | RelationType | Relation type |
| perMachine | bool | Whether the related bundle is per-machine |
| version | string | The related bundle's version |
### Return value
`IPackageInfo` The package info
## GetUpdateBundleAsPackage(id) Method {#getupdatebundleaspackage_id}
Create «see T:WixToolset.Mba.Core.IPackageInfo» from an update bundle.
### Declaration
```cs
public static IPackageInfo GetUpdateBundleAsPackage(
  string id
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| id | string | Package id |
### Return value
`IPackageInfo` The package info
## ParsePackagesFromXml(root) Method {#parsepackagesfromxml_root}
Parse packages from BootstrapperApplicationData.xml.
### Declaration
```cs
public static System.Collections.Generic.IDictionary<System.String,WixToolset.Mba.Core.IPackageInfo> ParsePackagesFromXml(
  System.Xml.XPath.XPathNavigator root
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| root | System.Xml.XPath.XPathNavigator | The root node. |
### Return value
`System.Collections.Generic.IDictionary<System.String,WixToolset.Mba.Core.IPackageInfo>` A dictionary of the packages by Id.
## CacheType Property {#cachetype}

### Declaration
```cs
public BOOTSTRAPPER_CACHE_TYPE CacheType { get; set; }
```
## CustomData Property {#customdata}

### Declaration
```cs
public System.Object CustomData { get; set; }
```
## Description Property {#description}

### Declaration
```cs
public string Description { get; set; }
```
## DisplayInternalUICondition Property {#displayinternaluicondition}

### Declaration
```cs
public string DisplayInternalUICondition { get; set; }
```
## DisplayName Property {#displayname}

### Declaration
```cs
public string DisplayName { get; set; }
```
## Id Property {#id}

### Declaration
```cs
public string Id { get; set; }
```
## InstallCondition Property {#installcondition}

### Declaration
```cs
public string InstallCondition { get; set; }
```
## Permanent Property {#permanent}

### Declaration
```cs
public bool Permanent { get; set; }
```
## PrereqLicenseFile Property {#prereqlicensefile}

### Declaration
```cs
public string PrereqLicenseFile { get; set; }
```
## PrereqLicenseUrl Property {#prereqlicenseurl}

### Declaration
```cs
public string PrereqLicenseUrl { get; set; }
```
## PrereqPackage Property {#prereqpackage}

### Declaration
```cs
public bool PrereqPackage { get; set; }
```
## PrimaryPackageType Property {#primarypackagetype}

### Declaration
```cs
public PrimaryPackageType PrimaryPackageType { get; set; }
```
## ProductCode Property {#productcode}

### Declaration
```cs
public string ProductCode { get; set; }
```
## RepairCondition Property {#repaircondition}

### Declaration
```cs
public string RepairCondition { get; set; }
```
## Type Property {#type}

### Declaration
```cs
public PackageType Type { get; set; }
```
## UpgradeCode Property {#upgradecode}

### Declaration
```cs
public string UpgradeCode { get; set; }
```
## Version Property {#version}

### Declaration
```cs
public string Version { get; set; }
```
## Vital Property {#vital}

### Declaration
```cs
public bool Vital { get; set; }
```
