---
title: ResultEventArgs Class
---
Base class for «see T:System.EventArgs» classes that must return a «see P:WixToolset.Mba.Core.ResultEventArgs.Result» .
## Properties
| Property | Description |
| ------ | ----------- |
| [Recommendation](#recommendation) | Gets the recommended «see P:WixToolset.Mba.Core.ResultEventArgs.Result» of the operation. |
| [Result](#result) | Gets or sets the «see P:WixToolset.Mba.Core.ResultEventArgs.Result» of the operation. This is passed back to the engine. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## Recommendation Property {#recommendation}
Gets the recommended «see P:WixToolset.Mba.Core.ResultEventArgs.Result» of the operation.
### Declaration
```cs
public Result Recommendation { get; set; }
```
## Result Property {#result}
Gets or sets the «see P:WixToolset.Mba.Core.ResultEventArgs.Result» of the operation. This is passed back to the engine.
### Declaration
```cs
public Result Result { get; set; }
```
