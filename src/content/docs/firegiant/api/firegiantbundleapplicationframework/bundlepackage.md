---
title: BundlePackage Class
pagefind: false
---
Details about a package that is part of the Bundle's chain.
## Properties
| Property | Description |
| ------ | ----------- |
| [ApplyPhase](#applyphase) | Apply phase of the package. |
| [Cached](#cached) | Indicates whether any part of the package is cached. |
| [CacheOperation](#cacheoperation) | Cache operation used to cache the package. |
| [CacheType](#cachetype) | Cache type of the package. |
| [Description](#description) | Description of the package. |
| [DetectResult](#detectresult) | Status result of the package at completion of Bundle detect processing. |
| [DisplayInternalUI](#displayinternalui) | Indicates whether an MSI is allowed to display its internal UI. |
| [DisplayName](#displayname) | Display name for the package. |
| [ExecuteAction](#executeaction) | Execute action for the package. |
| [Features](#features) | Features in the package. |
| [Id](#id) | Unique identity of the package in the chain. |
| [InstallCondition](#installcondition) | Installation condition provided on the package. |
| [Permanent](#permanent) | Indicates whether the package is permanent. |
| [ProductCode](#productcode) | Product code of an MSI package. |
| [RelatedPackages](#relatedpackages) | Related packages to the package. |
| [RequestState](#requeststate) | Request state for the package. |
| [RequestStateSet](#requeststateset) | Indicates whether the request state was explicitly set by the BundleUI. |
| [RollbackAction](#rollbackaction) | Rollback action for the package. |
| [SameVersionAction](#sameversionaction) | Indicates whether the package is allowed to execute same version upgrades. |
| [State](#state) | Package state. |
| [Type](#type) | Package type. |
| [UpgradeCode](#upgradecode) | Upgrade code of an MSI package. |
| [Version](#version) | Version of the package. |
| [Vital](#vital) | Indicates whether failure to install the package will fail the chain. |

`FireGiant.BundleApplicationFramework v6.0.1`
## ApplyPhase Property {#applyphase}
Apply phase of the package.
### Declaration
```cs
public BundleApplyPhase ApplyPhase { get; set; } 
```
## Cached Property {#cached}
Indicates whether any part of the package is cached.
### Declaration
```cs
public bool Cached { get; set; } 
```
## CacheOperation Property {#cacheoperation}
Cache operation used to cache the package.
### Declaration
```cs
public BundleCacheOperation CacheOperation { get; set; } 
```
## CacheType Property {#cachetype}
Cache type of the package.
### Declaration
```cs
public BundlePackageCacheType CacheType { get; set; } 
```
## Description Property {#description}
Description of the package.
### Declaration
```cs
public string Description { get; set; } 
```
## DetectResult Property {#detectresult}
Status result of the package at completion of Bundle detect processing.
### Declaration
```cs
public int DetectResult { get; set; } 
```
## DisplayInternalUI Property {#displayinternalui}
Indicates whether an MSI is allowed to display its internal UI.
### Declaration
```cs
public bool DisplayInternalUI { get; set; } 
```
## DisplayName Property {#displayname}
Display name for the package.
### Declaration
```cs
public string DisplayName { get; set; } 
```
## ExecuteAction Property {#executeaction}
Execute action for the package.
### Declaration
```cs
public BundleActionState ExecuteAction { get; set; } 
```
## Features Property {#features}
Features in the package.
### Declaration
```cs
public IEnumerable{BundleFeature} Features { get; set; } 
```
## Id Property {#id}
Unique identity of the package in the chain.
### Declaration
```cs
public string Id { get; set; } 
```
## InstallCondition Property {#installcondition}
Installation condition provided on the package.
### Declaration
```cs
public string InstallCondition { get; set; } 
```
## Permanent Property {#permanent}
Indicates whether the package is permanent.
### Declaration
```cs
public bool Permanent { get; set; } 
```
## ProductCode Property {#productcode}
Product code of an MSI package.
### Declaration
```cs
public string ProductCode { get; set; } 
```
## RelatedPackages Property {#relatedpackages}
Related packages to the package.
### Declaration
```cs
public IEnumerable{BundleRelatedPackage} RelatedPackages { get; set; } 
```
## RequestState Property {#requeststate}
Request state for the package.
### Declaration
```cs
public BundleRequestState RequestState { get; set; } 
```
## RequestStateSet Property {#requeststateset}
Indicates whether the request state was explicitly set by the BundleUI.
### Declaration
```cs
public bool RequestStateSet { get; set; } 
```
## RollbackAction Property {#rollbackaction}
Rollback action for the package.
### Declaration
```cs
public BundleActionState RollbackAction { get; set; } 
```
## SameVersionAction Property {#sameversionaction}
Indicates whether the package is allowed to execute same version upgrades.
### Declaration
```cs
public BundleSameVersionAction SameVersionAction { get; set; } 
```
## State Property {#state}
Package state.
### Declaration
```cs
public BundlePackageState State { get; set; } 
```
### Remarks
This state is updated as the bundle is applied.
## Type Property {#type}
Package type.
### Declaration
```cs
public BundlePackageType Type { get; set; } 
```
## UpgradeCode Property {#upgradecode}
Upgrade code of an MSI package.
### Declaration
```cs
public string UpgradeCode { get; set; } 
```
## Version Property {#version}
Version of the package.
### Declaration
```cs
public WixToolset.Versioning.WixVersion Version { get; set; } 
```
## Vital Property {#vital}
Indicates whether failure to install the package will fail the chain.
### Declaration
```cs
public bool Vital { get; set; } 
```
