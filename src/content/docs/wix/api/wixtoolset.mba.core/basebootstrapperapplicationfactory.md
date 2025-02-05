---
title: BaseBootstrapperApplicationFactory Class
---
Default implementation of «see T:WixToolset.Mba.Core.IBootstrapperApplicationFactory» .
## Methods
| Method | Description |
| ------ | ----------- |
| [Create(pArgs, pResults)](#create_pargs_presults) | Default implementation of «see M:WixToolset.Mba.Core.IBootstrapperApplicationFactory.Create(System.IntPtr,System.IntPtr)»  |
| [Create(engine, bootstrapperCommand)](#create_engine_bootstrappercommand) | Called by «see M:WixToolset.Mba.Core.BaseBootstrapperApplicationFactory.Create(System.IntPtr,System.IntPtr)» to get the «see T:WixToolset.Mba.Core.IBootstrapperApplication» . |
| [StoreBAInCreateResults(pResults, ba)](#storebaincreateresults_presults_ba) | Registers the BA with the engine using the default mapping between the message based interface and the COM interface. Most users should inherit from «see T:WixToolset.Mba.Core.BaseBootstrapperApplicationFactory» instead of calling this method. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## Create(pArgs, pResults) Method {#create_pargs_presults}
Default implementation of «see M:WixToolset.Mba.Core.IBootstrapperApplicationFactory.Create(System.IntPtr,System.IntPtr)»
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
| pArgs | IntPtr | The args struct given by the engine when initially creating the BA. |
| pResults | IntPtr | The results struct given by the engine when initially creating the BA |
## Create(engine, bootstrapperCommand) Method {#create_engine_bootstrappercommand}
Called by «see M:WixToolset.Mba.Core.BaseBootstrapperApplicationFactory.Create(System.IntPtr,System.IntPtr)» to get the «see T:WixToolset.Mba.Core.IBootstrapperApplication» .
### Declaration
```cs
protected IBootstrapperApplication Create(
  IEngine engine,
  IBootstrapperCommand bootstrapperCommand
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| engine | IEngine | The bundle engine. |
| bootstrapperCommand | IBootstrapperCommand | Command information passed from the engine for the BA to perform. |
### Return value
`IBootstrapperApplication` The «see T:WixToolset.Mba.Core.IBootstrapperApplication» for the bundle.
## StoreBAInCreateResults(pResults, ba) Method {#storebaincreateresults_presults_ba}
Registers the BA with the engine using the default mapping between the message based interface and the COM interface. Most users should inherit from «see T:WixToolset.Mba.Core.BaseBootstrapperApplicationFactory» instead of calling this method.
### Declaration
```cs
public static void StoreBAInCreateResults(
  IntPtr pResults,
  IBootstrapperApplication ba
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| pResults | IntPtr | The results struct given by the engine when initially creating the BA |
| ba | IBootstrapperApplication | The . |
