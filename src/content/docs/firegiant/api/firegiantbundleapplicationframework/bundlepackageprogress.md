---
title: BundlePackageProgress Class
pagefind: false
---
Progress of a package.
## Properties
| Property | Description |
| ------ | ----------- |
| [Action](#action) | Current progress action. |
| [CachePercentage](#cachepercentage) | Cache percentage complete for the package. |
| [ExecutePercentage](#executepercentage) | Execution percentage complete for the package. |
| [OverallPercentage](#overallpercentage) | Overall percentage complete for the package. |
| [Package](#package) | Package in progress. |
| [Phase](#phase) | Current apply phase. |
| [RestartRequired](#restartrequired) | Indicates whether the package required a restart. |
| [ShowUI](#showui) | Indicates whether UI should be displayed. |

`FireGiant.BundleApplicationFramework v6.0.1`
## Action Property {#action}
Current progress action.
### Declaration
```cs
public BundleProgressAction Action { get; set; } 
```
## CachePercentage Property {#cachepercentage}
Cache percentage complete for the package.
### Declaration
```cs
public int CachePercentage { get; set; } 
```
## ExecutePercentage Property {#executepercentage}
Execution percentage complete for the package.
### Declaration
```cs
public int ExecutePercentage { get; set; } 
```
## OverallPercentage Property {#overallpercentage}
Overall percentage complete for the package.
### Declaration
```cs
public int OverallPercentage { get; set; } 
```
## Package Property {#package}
Package in progress.
### Declaration
```cs
public BundlePackage Package { get; set; } 
```
## Phase Property {#phase}
Current apply phase.
### Declaration
```cs
public BundleApplyPhase Phase { get; set; } 
```
## RestartRequired Property {#restartrequired}
Indicates whether the package required a restart.
### Declaration
```cs
public bool RestartRequired { get; set; } 
```
## ShowUI Property {#showui}
Indicates whether UI should be displayed.
### Declaration
```cs
public bool ShowUI { get; set; } 
```
