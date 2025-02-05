---
title: TransformInfo Class
---
Contains properties of a transform package (.MST).
## Methods
| Method | Description |
| ------ | ----------- |
| [ToString()](#tostring_nop) | Returns the name of the transform. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Name](#name) | Gets the filename of the transform. |
| [TargetLanguage](#targetlanguage) | Gets the target language of the transform, or 0 if the transform is language-neutral. |
| [TargetPlatform](#targetplatform) | Gets the target platform of the transform. |
| [TargetProductCode](#targetproductcode) | Gets the target product code of the transform. |
| [TargetProductVersion](#targetproductversion) | Gets the target product version of the transform. |
| [UpgradeCode](#upgradecode) | Gets the upgrade code of the transform. |
| [UpgradeProductCode](#upgradeproductcode) | Gets the upgrade product code of the transform. |
| [UpgradeProductVersion](#upgradeproductversion) | Gets the upgrade product version of the transform. |
| [Validations](#validations) | Gets the validation flags specified when the transform was generated. |
`WixToolset.Dtf.WindowsInstaller.Package.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## ToString() Method {#tostring_nop}
Returns the name of the transform.
### Declaration
```cs
public string ToString()
```
## Name Property {#name}
Gets the filename of the transform.
### Declaration
```cs
public string Name { get; set; }
```
## TargetLanguage Property {#targetlanguage}
Gets the target language of the transform, or 0 if the transform is language-neutral.
### Declaration
```cs
public int TargetLanguage { get; set; }
```
## TargetPlatform Property {#targetplatform}
Gets the target platform of the transform.
### Declaration
```cs
public string TargetPlatform { get; set; }
```
## TargetProductCode Property {#targetproductcode}
Gets the target product code of the transform.
### Declaration
```cs
public string TargetProductCode { get; set; }
```
## TargetProductVersion Property {#targetproductversion}
Gets the target product version of the transform.
### Declaration
```cs
public string TargetProductVersion { get; set; }
```
## UpgradeCode Property {#upgradecode}
Gets the upgrade code of the transform.
### Declaration
```cs
public string UpgradeCode { get; set; }
```
## UpgradeProductCode Property {#upgradeproductcode}
Gets the upgrade product code of the transform.
### Declaration
```cs
public string UpgradeProductCode { get; set; }
```
## UpgradeProductVersion Property {#upgradeproductversion}
Gets the upgrade product version of the transform.
### Declaration
```cs
public string UpgradeProductVersion { get; set; }
```
## Validations Property {#validations}
Gets the validation flags specified when the transform was generated.
### Declaration
```cs
public WixToolset.Dtf.WindowsInstaller.TransformValidations Validations { get; set; }
```
