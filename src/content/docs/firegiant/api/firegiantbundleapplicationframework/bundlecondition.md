---
title: BundleCondition Class
pagefind: false
---
Condition evaluated during bundle initialization.
## Properties
| Property | Description |
| ------ | ----------- |
| [Condition](#condition) | Condition to evaluate. If the condition evaluates to false, Message is displayed and executionis blocked. |
| [Message](#message) | Message to be shown when the Condition fails. |
### Remarks
Use the bal:Condition element to add conditions to your bundle.

`FireGiant.BundleApplicationFramework v6.0.1`
## Condition Property {#condition}
Condition to evaluate. If the condition evaluates to false, Message is displayed and executionis blocked.
### Declaration
```cs
public string Condition { get; set; } 
```
## Message Property {#message}
Message to be shown when the Condition fails.
### Declaration
```cs
public string Message { get; set; } 
```
