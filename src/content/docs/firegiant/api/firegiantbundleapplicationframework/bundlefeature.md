---
title: BundleFeature Class
pagefind: false
---
Details about a feature that is part of a Bundle's package.
## Properties
| Property | Description |
| ------ | ----------- |
| [Attributes](#attributes) | The default remote execution option for the feature. |
| [Description](#description) | Description of the package. |
| [Display](#display) | The number in this field specifies the order in which the feature is to be displayed in the user interface.
            The value also determines whether or not the feature is initially displayed expanded or collapsed. If the value is null or 0 (zero), the record is not displayed.
            If the value is odd, the feature node is expanded initially.
            If the value is even, the feature node is collapsed initially. |
| [Id](#id) | Unique identity of the feature in the package. |
| [Level](#level) | The installation level of this feature. |
| [PackageId](#packageid) | Unique identity of the package in the chain. |
| [ParentId](#parentid) | Optional identity of the parent of a feature in the package. |
| [RequestState](#requeststate) | Request state for the feature. |
| [RequestStateSet](#requeststateset) | Indicates whether the request state was explicitly set by the BundleUI. |
| [Size](#size) | Size of the files contained in the feature. |
| [State](#state) | Feature state. |
| [Title](#title) | Title of feature in the package. |

`FireGiant.BundleApplicationFramework v6.0.1`
## Attributes Property {#attributes}
The default remote execution option for the feature.
### Declaration
```cs
public int Attributes { get; set; } 
```
## Description Property {#description}
Description of the package.
### Declaration
```cs
public string Description { get; set; } 
```
## Display Property {#display}
The number in this field specifies the order in which the feature is to be displayed in the user interface.
            The value also determines whether or not the feature is initially displayed expanded or collapsed. If the value is null or 0 (zero), the record is not displayed.
            If the value is odd, the feature node is expanded initially.
            If the value is even, the feature node is collapsed initially.
### Declaration
```cs
public int Display { get; set; } 
```
## Id Property {#id}
Unique identity of the feature in the package.
### Declaration
```cs
public string Id { get; set; } 
```
## Level Property {#level}
The installation level of this feature.
### Declaration
```cs
public int Level { get; set; } 
```
## PackageId Property {#packageid}
Unique identity of the package in the chain.
### Declaration
```cs
public string PackageId { get; set; } 
```
## ParentId Property {#parentid}
Optional identity of the parent of a feature in the package.
### Declaration
```cs
public string ParentId { get; set; } 
```
## RequestState Property {#requeststate}
Request state for the feature.
### Declaration
```cs
public BundleFeatureState RequestState { get; set; } 
```
## RequestStateSet Property {#requeststateset}
Indicates whether the request state was explicitly set by the BundleUI.
### Declaration
```cs
public bool RequestStateSet { get; set; } 
```
## Size Property {#size}
Size of the files contained in the feature.
### Declaration
```cs
public int Size { get; set; } 
```
## State Property {#state}
Feature state.
### Declaration
```cs
public BundleFeatureState State { get; set; } 
```
## Title Property {#title}
Title of feature in the package.
### Declaration
```cs
public string Title { get; set; } 
```
