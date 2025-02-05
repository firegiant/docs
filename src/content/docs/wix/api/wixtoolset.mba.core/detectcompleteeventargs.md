---
title: DetectCompleteEventArgs Class
---
Event arguments used when the detection phase has completed.
## Properties
| Property | Description |
| ------ | ----------- |
| [EligibleForCleanup](#eligibleforcleanup) | Indicates whether the engine will uninstall the bundle if shutdown without running Apply. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## EligibleForCleanup Property {#eligibleforcleanup}
Indicates whether the engine will uninstall the bundle if shutdown without running Apply.
### Declaration
```cs
public bool EligibleForCleanup { get; set; }
```
