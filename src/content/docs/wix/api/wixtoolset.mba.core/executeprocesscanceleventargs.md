---
title: ExecuteProcessCancelEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.ExecuteProcessCancel»
## Properties
| Property | Description |
| ------ | ----------- |
| [Action](#action) | Gets or sets the action to be performed. This is passed back to the engine. |
| [PackageId](#packageid) | Gets the identity of the package. |
| [ProcessId](#processid) | Gets the process id. |
| [Recommendation](#recommendation) | Gets the recommended action from the engine. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## Action Property {#action}
Gets or sets the action to be performed. This is passed back to the engine.
### Declaration
```cs
public BOOTSTRAPPER_EXECUTEPROCESSCANCEL_ACTION Action { get; set; }
```
## PackageId Property {#packageid}
Gets the identity of the package.
### Declaration
```cs
public string PackageId { get; set; }
```
## ProcessId Property {#processid}
Gets the process id.
### Declaration
```cs
public int ProcessId { get; set; }
```
## Recommendation Property {#recommendation}
Gets the recommended action from the engine.
### Declaration
```cs
public BOOTSTRAPPER_EXECUTEPROCESSCANCEL_ACTION Recommendation { get; set; }
```
