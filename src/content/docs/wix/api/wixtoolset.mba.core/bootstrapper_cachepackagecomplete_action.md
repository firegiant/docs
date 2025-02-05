---
title: BOOTSTRAPPER_CACHEPACKAGECOMPLETE_ACTION Enumeration
---
The available actions for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.CachePackageComplete» .
## Members
| Member | Description |
| ------ | ----------- |
| Ignore | Instructs the engine to ignore non-vital package failures and continue with the caching. Ignored if hrStatus is a success or the package is vital. |
| None | Instructs the engine to not take any special action. |
| Retry | Instructs the engine to try the acquisition and verification of the package again. Ignored if hrStatus is a success. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
