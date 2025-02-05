---
title: ExecuteProgressEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.ExecuteProgress»
## Properties
| Property | Description |
| ------ | ----------- |
| [OverallPercentage](#overallpercentage) | Gets the percentage from 0 to 100 of the execution progress for all payloads. |
| [PackageId](#packageid) | Gets the identity of the package that was executed. |
| [ProgressPercentage](#progresspercentage) | Gets the percentage from 0 to 100 of the execution progress for a single payload. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## OverallPercentage Property {#overallpercentage}
Gets the percentage from 0 to 100 of the execution progress for all payloads.
### Declaration
```cs
public int OverallPercentage { get; set; }
```
## PackageId Property {#packageid}
Gets the identity of the package that was executed.
### Declaration
```cs
public string PackageId { get; set; }
```
## ProgressPercentage Property {#progresspercentage}
Gets the percentage from 0 to 100 of the execution progress for a single payload.
### Declaration
```cs
public int ProgressPercentage { get; set; }
```
