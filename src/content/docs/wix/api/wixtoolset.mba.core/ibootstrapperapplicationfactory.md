---
title: IBootstrapperApplicationFactory Interface
---
Interface used by the native host to dynamically load the BA.
## Methods
| Method | Description |
| ------ | ----------- |
| [Create(pArgs, pResults)](#create_pargs_presults) | Low level method called by the native host. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## Create(pArgs, pResults) Method {#create_pargs_presults}
Low level method called by the native host.
### Declaration
```cs
public void Create(
  IntPtr pArgs,
  IntPtr pResults
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| pArgs | IntPtr |  |
| pResults | IntPtr |  |
