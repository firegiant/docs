---
title: ActionEventArgs`1 Class
---
Base class for «see T:System.EventArgs» classes that receive status from the engine and return an action.
## Properties
| Property | Description |
| ------ | ----------- |
| [Action](#action) | Gets or sets the action to be performed. This is passed back to the engine. |
| [Recommendation](#recommendation) | Gets the recommended action from the engine. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## Action Property {#action}
Gets or sets the action to be performed. This is passed back to the engine.
### Declaration
```cs
public T Action { get; set; }
```
## Recommendation Property {#recommendation}
Gets the recommended action from the engine.
### Declaration
```cs
public T Recommendation { get; set; }
```
