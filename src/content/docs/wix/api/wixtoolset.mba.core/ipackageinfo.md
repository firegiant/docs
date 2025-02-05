---
title: IPackageInfo Interface
---
Package information from the BA manifest.
## Properties
| Property | Description |
| ------ | ----------- |
| [CacheType](#cachetype) | The authored cache strategy for this package. |
| [CustomData](#customdata) | Place for the BA to store it's own custom data for this package. |
| [Description](#description) | The package's description. |
| [DisplayInternalUICondition](#displayinternaluicondition) | The authored bal:DisplayInternalUICondition. |
| [DisplayName](#displayname) | The package's display name. |
| [Id](#id) | The package's Id. |
| [InstallCondition](#installcondition) | The authored InstallCondition. |
| [Permanent](#permanent) | Whether the bundle should ever recommend the package to be uninstalled. |
| [PrereqLicenseFile](#prereqlicensefile) | The file name of the license file to be shown by the prereq BA. |
| [PrereqLicenseUrl](#prereqlicenseurl) | The URL of the license to be shown by the prereq BA. |
| [PrereqPackage](#prereqpackage) | Whether the package should be installed by the prereq BA for managed bootstrapper applications. |
| [PrimaryPackageType](#primarypackagetype) | See «see T:WixToolset.Mba.Core.PrimaryPackageType»  |
| [ProductCode](#productcode) | The package's ProductCode. |
| [RepairCondition](#repaircondition) | The authored RepairCondition. |
| [Type](#type) | The type of the package. |
| [UpgradeCode](#upgradecode) | The package's UpgradeCode. |
| [Version](#version) | The package's version. |
| [Vital](#vital) | Whether the package's failure can be ignored while executing the chain. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## CacheType Property {#cachetype}
The authored cache strategy for this package.
### Declaration
```cs
public BOOTSTRAPPER_CACHE_TYPE CacheType { get; set; }
```
## CustomData Property {#customdata}
Place for the BA to store it's own custom data for this package.
### Declaration
```cs
public System.Object CustomData { get; set; }
```
## Description Property {#description}
The package's description.
### Declaration
```cs
public string Description { get; set; }
```
## DisplayInternalUICondition Property {#displayinternaluicondition}
The authored bal:DisplayInternalUICondition.
### Declaration
```cs
public string DisplayInternalUICondition { get; set; }
```
## DisplayName Property {#displayname}
The package's display name.
### Declaration
```cs
public string DisplayName { get; set; }
```
## Id Property {#id}
The package's Id.
### Declaration
```cs
public string Id { get; set; }
```
## InstallCondition Property {#installcondition}
The authored InstallCondition.
### Declaration
```cs
public string InstallCondition { get; set; }
```
## Permanent Property {#permanent}
Whether the bundle should ever recommend the package to be uninstalled.
### Declaration
```cs
public bool Permanent { get; set; }
```
## PrereqLicenseFile Property {#prereqlicensefile}
The file name of the license file to be shown by the prereq BA.
### Declaration
```cs
public string PrereqLicenseFile { get; set; }
```
## PrereqLicenseUrl Property {#prereqlicenseurl}
The URL of the license to be shown by the prereq BA.
### Declaration
```cs
public string PrereqLicenseUrl { get; set; }
```
## PrereqPackage Property {#prereqpackage}
Whether the package should be installed by the prereq BA for managed bootstrapper applications.
### Declaration
```cs
public bool PrereqPackage { get; set; }
```
## PrimaryPackageType Property {#primarypackagetype}
See «see T:WixToolset.Mba.Core.PrimaryPackageType»
### Declaration
```cs
public PrimaryPackageType PrimaryPackageType { get; set; }
```
## ProductCode Property {#productcode}
The package's ProductCode.
### Declaration
```cs
public string ProductCode { get; set; }
```
## RepairCondition Property {#repaircondition}
The authored RepairCondition.
### Declaration
```cs
public string RepairCondition { get; set; }
```
## Type Property {#type}
The type of the package.
### Declaration
```cs
public PackageType Type { get; set; }
```
## UpgradeCode Property {#upgradecode}
The package's UpgradeCode.
### Declaration
```cs
public string UpgradeCode { get; set; }
```
## Version Property {#version}
The package's version.
### Declaration
```cs
public string Version { get; set; }
```
## Vital Property {#vital}
Whether the package's failure can be ignored while executing the chain.
### Declaration
```cs
public bool Vital { get; set; }
```
