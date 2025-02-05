---
title: IBootstrapperApplication Interface
---
Allows customization of the bootstrapper application.
## Methods
| Method | Description |
| ------ | ----------- |
| [BAProc()](#baproc_nop) | Low level method that is called directly from the engine. |
| [OnBeginMsiTransactionComplete()](#onbeginmsitransactioncomplete_nop) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.BeginMsiTransactionComplete» . |
| [OnCacheComplete(hrStatus)](#oncachecomplete_hrstatus) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.CacheComplete» . |
| [OnCacheContainerOrPayloadVerifyComplete()](#oncachecontainerorpayloadverifycomplete_nop) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.CacheContainerOrPayloadVerifyComplete» . |
| [OnCachePayloadExtractComplete()](#oncachepayloadextractcomplete_nop) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.CachePayloadExtractComplete» . |
| [OnDetectComplete()](#ondetectcomplete_nop) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.DetectComplete» . |
| [OnDetectPackageComplete()](#ondetectpackagecomplete_nop) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.DetectPackageComplete» . |
| [OnElevateComplete()](#onelevatecomplete_nop) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.ElevateComplete» . |
| [OnExecuteComplete()](#onexecutecomplete_nop) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.ExecuteComplete» . |
| [OnLaunchApprovedExeComplete()](#onlaunchapprovedexecomplete_nop) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.LaunchApprovedExeComplete» . |
| [OnPauseAutomaticUpdatesBegin()](#onpauseautomaticupdatesbegin_nop) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PauseAutomaticUpdatesBegin» . |
| [OnPauseAutomaticUpdatesComplete()](#onpauseautomaticupdatescomplete_nop) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PauseAutomaticUpdatesComplete» . |
| [OnPlanCompatibleMsiPackageComplete()](#onplancompatiblemsipackagecomplete_nop) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PlanCompatibleMsiPackageComplete» . |
| [OnPlanComplete()](#onplancomplete_nop) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PlanComplete» . |
| [OnPlannedCompatiblePackage()](#onplannedcompatiblepackage_nop) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PlannedCompatiblePackage» . |
| [OnPlannedPackage()](#onplannedpackage_nop) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PlannedPackage» . |
| [OnPlanPackageComplete()](#onplanpackagecomplete_nop) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PlanPackageComplete» . |
| [OnRegisterComplete()](#onregistercomplete_nop) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.RegisterComplete» . |
| [OnRollbackMsiTransactionBegin()](#onrollbackmsitransactionbegin_nop) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.RollbackMsiTransactionBegin» . |
| [OnSetUpdateBegin()](#onsetupdatebegin_nop) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.SetUpdateBegin» . |
| [OnSetUpdateComplete()](#onsetupdatecomplete_nop) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.SetUpdateComplete» . |
| [OnStartup()](#onstartup_nop) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.Startup» . |
| [OnSystemRestorePointBegin()](#onsystemrestorepointbegin_nop) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.SystemRestorePointBegin» . |
| [OnSystemRestorePointComplete()](#onsystemrestorepointcomplete_nop) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.SystemRestorePointComplete» . |
| [OnUnregisterComplete()](#onunregistercomplete_nop) | See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.UnregisterComplete» . |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## BAProc() Method {#baproc_nop}
Low level method that is called directly from the engine.
### Declaration
```cs
public int BAProc()
```
## OnBeginMsiTransactionComplete() Method {#onbeginmsitransactioncomplete_nop}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.BeginMsiTransactionComplete» .
### Declaration
```cs
public int OnBeginMsiTransactionComplete()
```
## OnCacheComplete(hrStatus) Method {#oncachecomplete_hrstatus}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.CacheComplete» .
### Declaration
```cs
public int OnCacheComplete(
  int hrStatus
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| hrStatus | int |  |
## OnCacheContainerOrPayloadVerifyComplete() Method {#oncachecontainerorpayloadverifycomplete_nop}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.CacheContainerOrPayloadVerifyComplete» .
### Declaration
```cs
public int OnCacheContainerOrPayloadVerifyComplete()
```
## OnCachePayloadExtractComplete() Method {#oncachepayloadextractcomplete_nop}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.CachePayloadExtractComplete» .
### Declaration
```cs
public int OnCachePayloadExtractComplete()
```
## OnDetectComplete() Method {#ondetectcomplete_nop}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.DetectComplete» .
### Declaration
```cs
public int OnDetectComplete()
```
## OnDetectPackageComplete() Method {#ondetectpackagecomplete_nop}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.DetectPackageComplete» .
### Declaration
```cs
public int OnDetectPackageComplete()
```
## OnElevateComplete() Method {#onelevatecomplete_nop}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.ElevateComplete» .
### Declaration
```cs
public int OnElevateComplete()
```
## OnExecuteComplete() Method {#onexecutecomplete_nop}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.ExecuteComplete» .
### Declaration
```cs
public int OnExecuteComplete()
```
## OnLaunchApprovedExeComplete() Method {#onlaunchapprovedexecomplete_nop}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.LaunchApprovedExeComplete» .
### Declaration
```cs
public int OnLaunchApprovedExeComplete()
```
## OnPauseAutomaticUpdatesBegin() Method {#onpauseautomaticupdatesbegin_nop}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PauseAutomaticUpdatesBegin» .
### Declaration
```cs
public int OnPauseAutomaticUpdatesBegin()
```
## OnPauseAutomaticUpdatesComplete() Method {#onpauseautomaticupdatescomplete_nop}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PauseAutomaticUpdatesComplete» .
### Declaration
```cs
public int OnPauseAutomaticUpdatesComplete()
```
## OnPlanCompatibleMsiPackageComplete() Method {#onplancompatiblemsipackagecomplete_nop}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PlanCompatibleMsiPackageComplete» .
### Declaration
```cs
public int OnPlanCompatibleMsiPackageComplete()
```
## OnPlanComplete() Method {#onplancomplete_nop}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PlanComplete» .
### Declaration
```cs
public int OnPlanComplete()
```
## OnPlannedCompatiblePackage() Method {#onplannedcompatiblepackage_nop}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PlannedCompatiblePackage» .
### Declaration
```cs
public int OnPlannedCompatiblePackage()
```
## OnPlannedPackage() Method {#onplannedpackage_nop}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PlannedPackage» .
### Declaration
```cs
public int OnPlannedPackage()
```
## OnPlanPackageComplete() Method {#onplanpackagecomplete_nop}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.PlanPackageComplete» .
### Declaration
```cs
public int OnPlanPackageComplete()
```
## OnRegisterComplete() Method {#onregistercomplete_nop}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.RegisterComplete» .
### Declaration
```cs
public int OnRegisterComplete()
```
## OnRollbackMsiTransactionBegin() Method {#onrollbackmsitransactionbegin_nop}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.RollbackMsiTransactionBegin» .
### Declaration
```cs
public int OnRollbackMsiTransactionBegin()
```
## OnSetUpdateBegin() Method {#onsetupdatebegin_nop}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.SetUpdateBegin» .
### Declaration
```cs
public int OnSetUpdateBegin()
```
## OnSetUpdateComplete() Method {#onsetupdatecomplete_nop}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.SetUpdateComplete» .
### Declaration
```cs
public int OnSetUpdateComplete()
```
## OnStartup() Method {#onstartup_nop}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.Startup» .
### Declaration
```cs
public int OnStartup()
```
## OnSystemRestorePointBegin() Method {#onsystemrestorepointbegin_nop}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.SystemRestorePointBegin» .
### Declaration
```cs
public int OnSystemRestorePointBegin()
```
## OnSystemRestorePointComplete() Method {#onsystemrestorepointcomplete_nop}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.SystemRestorePointComplete» .
### Declaration
```cs
public int OnSystemRestorePointComplete()
```
## OnUnregisterComplete() Method {#onunregistercomplete_nop}
See «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.UnregisterComplete» .
### Declaration
```cs
public int OnUnregisterComplete()
```
