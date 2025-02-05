---
title: BOOTSTRAPPER_EXECUTEPACKAGECOMPLETE_ACTION Enumeration
---
The available actions for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.ExecutePackageComplete» .
## Members
| Member | Description |
| ------ | ----------- |
| Ignore | Instructs the engine to ignore non-vital package failures and continue with the install. Ignored if hrStatus is a success or the package is vital. |
| None | Instructs the engine to not take any special action. |
| Restart | Instructs the engine to stop processing the chain and restart. The engine will launch again after the machine is restarted. |
| Retry | Instructs the engine to try the execution of the package again. Ignored if hrStatus is a success. |
| Suspend | Instructs the engine to stop processing the chain and suspend the current state. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
