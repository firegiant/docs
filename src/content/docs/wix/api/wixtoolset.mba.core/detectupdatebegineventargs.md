---
title: DetectUpdateBeginEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.DetectUpdateBegin»
## Properties
| Property | Description |
| ------ | ----------- |
| [Skip](#skip) | Whether to skip checking for bundle updates. |
| [UpdateLocation](#updatelocation) | Gets the identity of the bundle to detect. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## Skip Property {#skip}
Whether to skip checking for bundle updates.
### Declaration
```cs
public bool Skip { get; set; }
```
## UpdateLocation Property {#updatelocation}
Gets the identity of the bundle to detect.
### Declaration
```cs
public string UpdateLocation { get; set; }
```
