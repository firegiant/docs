---
title: RollbackMsiTransactionCompleteEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.RollbackMsiTransactionComplete» .
## Properties
| Property | Description |
| ------ | ----------- |
| [Restart](#restart) | Gets the package restart state after being applied. |
| [TransactionId](#transactionid) | Gets the MSI transaction Id. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## Restart Property {#restart}
Gets the package restart state after being applied.
### Declaration
```cs
public ApplyRestart Restart { get; set; }
```
## TransactionId Property {#transactionid}
Gets the MSI transaction Id.
### Declaration
```cs
public string TransactionId { get; set; }
```
