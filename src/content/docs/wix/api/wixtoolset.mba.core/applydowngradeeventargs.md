---
title: ApplyDowngradeEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.ApplyDowngrade»
## Properties
| Property | Description |
| ------ | ----------- |
| [Recommendation](#recommendation) | Gets the recommended HRESULT. |
| [Status](#status) | Gets or sets the HRESULT for Apply. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## Recommendation Property {#recommendation}
Gets the recommended HRESULT.
### Declaration
```cs
public int Recommendation { get; set; }
```
## Status Property {#status}
Gets or sets the HRESULT for Apply.
### Declaration
```cs
public int Status { get; set; }
```
