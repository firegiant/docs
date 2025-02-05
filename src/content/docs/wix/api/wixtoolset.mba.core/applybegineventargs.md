---
title: ApplyBeginEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.ApplyBegin»
## Properties
| Property | Description |
| ------ | ----------- |
| [PhaseCount](#phasecount) | Gets the number of phases that the engine will go through in apply. There are currently two possible phases: cache and execute. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## PhaseCount Property {#phasecount}
Gets the number of phases that the engine will go through in apply. There are currently two possible phases: cache and execute.
### Declaration
```cs
public int PhaseCount { get; set; }
```
