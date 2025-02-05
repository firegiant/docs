---
title: CancellableHResultEventArgs Class
---
Base class for cancellable BA «see T:System.EventArgs» classes.
## Properties
| Property | Description |
| ------ | ----------- |
| [Cancel](#cancel) | Gets or sets whether to cancel the operation. This is passed back to the engine. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## Cancel Property {#cancel}
Gets or sets whether to cancel the operation. This is passed back to the engine.
### Declaration
```cs
public bool Cancel { get; set; }
```
