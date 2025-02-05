---
title: LaunchApprovedExeCompleteEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.LaunchApprovedExeComplete» .
## Properties
| Property | Description |
| ------ | ----------- |
| [ProcessId](#processid) | Gets the ProcessId of the process that was launched. This is only valid if the status reports success. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## ProcessId Property {#processid}
Gets the ProcessId of the process that was launched. This is only valid if the status reports success.
### Declaration
```cs
public int ProcessId { get; set; }
```
