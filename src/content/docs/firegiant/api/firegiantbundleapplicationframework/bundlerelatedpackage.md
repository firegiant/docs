---
title: BundleRelatedPackage Class
pagefind: false
---
Details about a related package to a Bundle's package that was detected.
## Properties
| Property | Description |
| ------ | ----------- |
| [Operation](#operation) | Operation of the package relative to the related package. |
| [PackageId](#packageid) | Unique identity of the package in the chain. |
| [PerMachine](#permachine) | Indicates whether the related package is installed per-machine. |
| [ProductCode](#productcode) | Product code of the related package. |
| [Version](#version) | Version of the related package. |

`FireGiant.BundleApplicationFramework v6.0.1`
## Operation Property {#operation}
Operation of the package relative to the related package.
### Declaration
```cs
public BundleRelatedOperation Operation { get; set; } 
```
## PackageId Property {#packageid}
Unique identity of the package in the chain.
### Declaration
```cs
public string PackageId { get; set; } 
```
## PerMachine Property {#permachine}
Indicates whether the related package is installed per-machine.
### Declaration
```cs
public bool PerMachine { get; set; } 
```
## ProductCode Property {#productcode}
Product code of the related package.
### Declaration
```cs
public string ProductCode { get; set; } 
```
## Version Property {#version}
Version of the related package.
### Declaration
```cs
public WixToolset.Versioning.WixVersion Version { get; set; } 
```
