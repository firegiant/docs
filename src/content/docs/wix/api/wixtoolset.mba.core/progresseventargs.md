---
title: ProgressEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.Progress»
## Properties
| Property | Description |
| ------ | ----------- |
| [OverallPercentage](#overallpercentage) | Gets the percentage from 0 to 100 completed for the bundle. |
| [ProgressPercentage](#progresspercentage) | Gets the percentage from 0 to 100 completed for a package. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## OverallPercentage Property {#overallpercentage}
Gets the percentage from 0 to 100 completed for the bundle.
### Declaration
```cs
public int OverallPercentage { get; set; }
```
## ProgressPercentage Property {#progresspercentage}
Gets the percentage from 0 to 100 completed for a package.
### Declaration
```cs
public int ProgressPercentage { get; set; }
```
