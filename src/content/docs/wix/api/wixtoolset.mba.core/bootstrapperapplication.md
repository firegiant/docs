---
title: BootstrapperApplication Class
---
The default bootstrapper application.
## Methods
| Method | Description |
| ------ | ----------- |
| [OnApplyBegin(args)](#onapplybegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ApplyBegin» event. |
| [OnApplyComplete(args)](#onapplycomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ApplyComplete» event. |
| [OnApplyDowngrade(args)](#onapplydowngrade_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ApplyDowngrade» event. |
| [OnBeginMsiTransactionBegin(args)](#onbeginmsitransactionbegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.BeginMsiTransactionBegin» event. |
| [OnBeginMsiTransactionComplete(args)](#onbeginmsitransactioncomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.BeginMsiTransactionComplete» event. |
| [OnCacheAcquireBegin(args)](#oncacheacquirebegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheAcquireBegin» event. |
| [OnCacheAcquireComplete(args)](#oncacheacquirecomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheAcquireComplete» event. |
| [OnCacheAcquireProgress(args)](#oncacheacquireprogress_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheAcquireProgress» event. |
| [OnCacheAcquireResolving(args)](#oncacheacquireresolving_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheAcquireResolving» event. |
| [OnCacheBegin(args)](#oncachebegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheBegin» event. |
| [OnCacheComplete(args)](#oncachecomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheComplete» event. |
| [OnCacheContainerOrPayloadVerifyBegin(args)](#oncachecontainerorpayloadverifybegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheContainerOrPayloadVerifyBegin» event. |
| [OnCacheContainerOrPayloadVerifyComplete(args)](#oncachecontainerorpayloadverifycomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheContainerOrPayloadVerifyComplete» event. |
| [OnCacheContainerOrPayloadVerifyProgress(args)](#oncachecontainerorpayloadverifyprogress_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheContainerOrPayloadVerifyProgress» event. |
| [OnCachePackageBegin(args)](#oncachepackagebegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CachePackageBegin» event. |
| [OnCachePackageComplete(args)](#oncachepackagecomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CachePackageComplete» event. |
| [OnCachePackageNonVitalValidationFailure(args)](#oncachepackagenonvitalvalidationfailure_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CachePackageNonVitalValidationFailure» event. |
| [OnCachePayloadExtractBegin(args)](#oncachepayloadextractbegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CachePayloadExtractBegin» event. |
| [OnCachePayloadExtractComplete(args)](#oncachepayloadextractcomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CachePayloadExtractComplete» event. |
| [OnCachePayloadExtractProgress(args)](#oncachepayloadextractprogress_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CachePayloadExtractProgress» event. |
| [OnCacheVerifyBegin(args)](#oncacheverifybegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheVerifyBegin» event. |
| [OnCacheVerifyComplete(args)](#oncacheverifycomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheVerifyComplete» event. |
| [OnCacheVerifyProgress(args)](#oncacheverifyprogress_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheVerifyProgress» event. |
| [OnCommitMsiTransactionBegin(args)](#oncommitmsitransactionbegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CommitMsiTransactionBegin» event. |
| [OnCommitMsiTransactionComplete(args)](#oncommitmsitransactioncomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CommitMsiTransactionComplete» event. |
| [OnDetectBegin(args)](#ondetectbegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectBegin» event. |
| [OnDetectCompatibleMsiPackage(args)](#ondetectcompatiblemsipackage_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectCompatibleMsiPackage» event. |
| [OnDetectComplete(args)](#ondetectcomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectComplete» event. |
| [OnDetectForwardCompatibleBundle(args)](#ondetectforwardcompatiblebundle_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectForwardCompatibleBundle» event. |
| [OnDetectMsiFeature(args)](#ondetectmsifeature_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectMsiFeature» event. |
| [OnDetectPackageBegin(args)](#ondetectpackagebegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectPackageBegin» event. |
| [OnDetectPackageComplete(args)](#ondetectpackagecomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectPackageComplete» event. |
| [OnDetectPatchTarget(args)](#ondetectpatchtarget_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectPatchTarget» event. |
| [OnDetectRelatedBundle(args)](#ondetectrelatedbundle_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectRelatedBundle» event. |
| [OnDetectRelatedBundlePackage(args)](#ondetectrelatedbundlepackage_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectRelatedBundlePackage» event. |
| [OnDetectRelatedMsiPackage(args)](#ondetectrelatedmsipackage_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectRelatedMsiPackage» event. |
| [OnDetectUpdate(args)](#ondetectupdate_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectUpdate» event. |
| [OnDetectUpdateBegin(args)](#ondetectupdatebegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectUpdateBegin» event. |
| [OnDetectUpdateComplete(args)](#ondetectupdatecomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectUpdateComplete» event. |
| [OnElevateBegin(args)](#onelevatebegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ElevateBegin» event. |
| [OnElevateComplete(args)](#onelevatecomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ElevateComplete» event. |
| [OnError(args)](#onerror_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.Error» event. |
| [OnExecuteBegin(args)](#onexecutebegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ExecuteBegin» event. |
| [OnExecuteComplete(args)](#onexecutecomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ExecuteComplete» event. |
| [OnExecuteFilesInUse(args)](#onexecutefilesinuse_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ExecuteFilesInUse» event. |
| [OnExecuteMsiMessage(args)](#onexecutemsimessage_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ExecuteMsiMessage» event. |
| [OnExecutePackageBegin(args)](#onexecutepackagebegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ExecutePackageBegin» event. |
| [OnExecutePackageComplete(args)](#onexecutepackagecomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ExecutePackageComplete» event. |
| [OnExecutePatchTarget(args)](#onexecutepatchtarget_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ExecutePatchTarget» event. |
| [OnExecuteProcessCancel(args)](#onexecuteprocesscancel_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ExecuteProcessCancel» event. |
| [OnExecuteProgress(args)](#onexecuteprogress_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ExecuteProgress» event. |
| [OnLaunchApprovedExeBegin(args)](#onlaunchapprovedexebegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.LaunchApprovedExeBegin» event. |
| [OnLaunchApprovedExeComplete(args)](#onlaunchapprovedexecomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.LaunchApprovedExeComplete» event. |
| [OnPauseAutomaticUpdatesBegin(args)](#onpauseautomaticupdatesbegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PauseAutomaticUpdatesBegin» event. |
| [OnPauseAutomaticUpdatesComplete(args)](#onpauseautomaticupdatescomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PauseAutomaticUpdatesComplete» event. |
| [OnPlanBegin(args)](#onplanbegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanBegin» event. |
| [OnPlanCompatibleMsiPackageBegin(args)](#onplancompatiblemsipackagebegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanCompatibleMsiPackageBegin» event. |
| [OnPlanCompatibleMsiPackageComplete(args)](#onplancompatiblemsipackagecomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanCompatibleMsiPackageComplete» event. |
| [OnPlanComplete(args)](#onplancomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanComplete» event. |
| [OnPlanForwardCompatibleBundle(args)](#onplanforwardcompatiblebundle_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanForwardCompatibleBundle» event. |
| [OnPlanMsiFeature(args)](#onplanmsifeature_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanMsiFeature» event. |
| [OnPlanMsiPackage(args)](#onplanmsipackage_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanMsiPackage» event. |
| [OnPlannedCompatiblePackage(args)](#onplannedcompatiblepackage_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlannedCompatiblePackage» event. |
| [OnPlannedPackage(args)](#onplannedpackage_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlannedPackage» event. |
| [OnPlanPackageBegin(args)](#onplanpackagebegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanPackageBegin» event. |
| [OnPlanPackageComplete(args)](#onplanpackagecomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanPackageComplete» event. |
| [OnPlanPatchTarget(args)](#onplanpatchtarget_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanPatchTarget» event. |
| [OnPlanRelatedBundle(args)](#onplanrelatedbundle_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanRelatedBundle» event. |
| [OnPlanRelatedBundleType(args)](#onplanrelatedbundletype_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanRelatedBundleType» event. |
| [OnPlanRestoreRelatedBundle(args)](#onplanrestorerelatedbundle_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanRestoreRelatedBundle» event. |
| [OnPlanRollbackBoundary()](#onplanrollbackboundary_nop) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanRollbackBoundary» event. |
| [OnProgress(args)](#onprogress_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.Progress» event. |
| [OnRegisterBegin(args)](#onregisterbegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.RegisterBegin» event. |
| [OnRegisterComplete(args)](#onregistercomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.RegisterComplete» event. |
| [OnRollbackMsiTransactionBegin(args)](#onrollbackmsitransactionbegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.RollbackMsiTransactionBegin» event. |
| [OnRollbackMsiTransactionComplete(args)](#onrollbackmsitransactioncomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.RollbackMsiTransactionComplete» event. |
| [OnSetUpdateBegin(args)](#onsetupdatebegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.SetUpdateBegin» event. |
| [OnSetUpdateComplete(args)](#onsetupdatecomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.SetUpdateComplete» event. |
| [OnShutdown(args)](#onshutdown_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.Shutdown» event. |
| [OnStartup(args)](#onstartup_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.Startup» event. |
| [OnSystemRestorePointBegin(args)](#onsystemrestorepointbegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.SystemRestorePointBegin» event. |
| [OnSystemRestorePointComplete(args)](#onsystemrestorepointcomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.SystemRestorePointComplete» event. |
| [OnUnregisterBegin(args)](#onunregisterbegin_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.UnregisterBegin» event. |
| [OnUnregisterComplete(args)](#onunregistercomplete_args) | Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.UnregisterComplete» event. |
| [Run()](#run_nop) | Entry point that is called when the bootstrapper application is ready to run. |
## Events
| Event | Description |
| ------ | ----------- |
| [ApplyBegin](#applybegin) |  |
| [ApplyComplete](#applycomplete) |  |
| [ApplyDowngrade](#applydowngrade) |  |
| [BeginMsiTransactionBegin](#beginmsitransactionbegin) |  |
| [BeginMsiTransactionComplete](#beginmsitransactioncomplete) |  |
| [CacheAcquireBegin](#cacheacquirebegin) |  |
| [CacheAcquireComplete](#cacheacquirecomplete) |  |
| [CacheAcquireProgress](#cacheacquireprogress) |  |
| [CacheAcquireResolving](#cacheacquireresolving) |  |
| [CacheBegin](#cachebegin) |  |
| [CacheComplete](#cachecomplete) |  |
| [CacheContainerOrPayloadVerifyBegin](#cachecontainerorpayloadverifybegin) |  |
| [CacheContainerOrPayloadVerifyComplete](#cachecontainerorpayloadverifycomplete) |  |
| [CacheContainerOrPayloadVerifyProgress](#cachecontainerorpayloadverifyprogress) |  |
| [CachePackageBegin](#cachepackagebegin) |  |
| [CachePackageComplete](#cachepackagecomplete) |  |
| [CachePackageNonVitalValidationFailure](#cachepackagenonvitalvalidationfailure) |  |
| [CachePayloadExtractBegin](#cachepayloadextractbegin) |  |
| [CachePayloadExtractComplete](#cachepayloadextractcomplete) |  |
| [CachePayloadExtractProgress](#cachepayloadextractprogress) |  |
| [CacheVerifyBegin](#cacheverifybegin) |  |
| [CacheVerifyComplete](#cacheverifycomplete) |  |
| [CacheVerifyProgress](#cacheverifyprogress) |  |
| [CommitMsiTransactionBegin](#commitmsitransactionbegin) |  |
| [CommitMsiTransactionComplete](#commitmsitransactioncomplete) |  |
| [DetectBegin](#detectbegin) |  |
| [DetectCompatibleMsiPackage](#detectcompatiblemsipackage) |  |
| [DetectComplete](#detectcomplete) |  |
| [DetectForwardCompatibleBundle](#detectforwardcompatiblebundle) |  |
| [DetectMsiFeature](#detectmsifeature) |  |
| [DetectPackageBegin](#detectpackagebegin) |  |
| [DetectPackageComplete](#detectpackagecomplete) |  |
| [DetectPatchTarget](#detectpatchtarget) |  |
| [DetectRelatedBundle](#detectrelatedbundle) |  |
| [DetectRelatedBundlePackage](#detectrelatedbundlepackage) |  |
| [DetectRelatedMsiPackage](#detectrelatedmsipackage) |  |
| [DetectUpdate](#detectupdate) |  |
| [DetectUpdateBegin](#detectupdatebegin) |  |
| [DetectUpdateComplete](#detectupdatecomplete) |  |
| [ElevateBegin](#elevatebegin) |  |
| [ElevateComplete](#elevatecomplete) |  |
| [Error](#error) |  |
| [ExecuteBegin](#executebegin) |  |
| [ExecuteComplete](#executecomplete) |  |
| [ExecuteFilesInUse](#executefilesinuse) |  |
| [ExecuteMsiMessage](#executemsimessage) |  |
| [ExecutePackageBegin](#executepackagebegin) |  |
| [ExecutePackageComplete](#executepackagecomplete) |  |
| [ExecutePatchTarget](#executepatchtarget) |  |
| [ExecuteProcessCancel](#executeprocesscancel) |  |
| [ExecuteProgress](#executeprogress) |  |
| [LaunchApprovedExeBegin](#launchapprovedexebegin) |  |
| [LaunchApprovedExeComplete](#launchapprovedexecomplete) |  |
| [PauseAutomaticUpdatesBegin](#pauseautomaticupdatesbegin) |  |
| [PauseAutomaticUpdatesComplete](#pauseautomaticupdatescomplete) |  |
| [PlanBegin](#planbegin) |  |
| [PlanCompatibleMsiPackageBegin](#plancompatiblemsipackagebegin) |  |
| [PlanCompatibleMsiPackageComplete](#plancompatiblemsipackagecomplete) |  |
| [PlanComplete](#plancomplete) |  |
| [PlanForwardCompatibleBundle](#planforwardcompatiblebundle) |  |
| [PlanMsiFeature](#planmsifeature) |  |
| [PlanMsiPackage](#planmsipackage) |  |
| [PlannedCompatiblePackage](#plannedcompatiblepackage) |  |
| [PlannedPackage](#plannedpackage) |  |
| [PlanPackageBegin](#planpackagebegin) |  |
| [PlanPackageComplete](#planpackagecomplete) |  |
| [PlanPatchTarget](#planpatchtarget) |  |
| [PlanRelatedBundle](#planrelatedbundle) |  |
| [PlanRelatedBundleType](#planrelatedbundletype) |  |
| [PlanRestoreRelatedBundle](#planrestorerelatedbundle) |  |
| [PlanRollbackBoundary](#planrollbackboundary) |  |
| [Progress](#progress) |  |
| [RegisterBegin](#registerbegin) |  |
| [RegisterComplete](#registercomplete) |  |
| [RollbackMsiTransactionBegin](#rollbackmsitransactionbegin) |  |
| [RollbackMsiTransactionComplete](#rollbackmsitransactioncomplete) |  |
| [SetUpdateBegin](#setupdatebegin) |  |
| [SetUpdateComplete](#setupdatecomplete) |  |
| [Shutdown](#shutdown) |  |
| [Startup](#startup) |  |
| [SystemRestorePointBegin](#systemrestorepointbegin) |  |
| [SystemRestorePointComplete](#systemrestorepointcomplete) |  |
| [UnregisterBegin](#unregisterbegin) |  |
| [UnregisterComplete](#unregistercomplete) |  |
## Fields
| Field | Description |
| ------ | ----------- |
| asyncExecution | Specifies whether this bootstrapper should run asynchronously. The default is true. |
| engine | Gets the «see T:WixToolset.Mba.Core.IEngine» for interaction with the engine. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## OnApplyBegin(args) Method {#onapplybegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ApplyBegin» event.
### Declaration
```cs
protected void OnApplyBegin(
  ApplyBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | ApplyBeginEventArgs | Additional arguments for this event. |
## OnApplyComplete(args) Method {#onapplycomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ApplyComplete» event.
### Declaration
```cs
protected void OnApplyComplete(
  ApplyCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | ApplyCompleteEventArgs | Additional arguments for this event. |
## OnApplyDowngrade(args) Method {#onapplydowngrade_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ApplyDowngrade» event.
### Declaration
```cs
protected void OnApplyDowngrade(
  ApplyDowngradeEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | ApplyDowngradeEventArgs | Additional arguments for this event. |
## OnBeginMsiTransactionBegin(args) Method {#onbeginmsitransactionbegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.BeginMsiTransactionBegin» event.
### Declaration
```cs
protected void OnBeginMsiTransactionBegin(
  BeginMsiTransactionBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | BeginMsiTransactionBeginEventArgs | Additional arguments for this event. |
## OnBeginMsiTransactionComplete(args) Method {#onbeginmsitransactioncomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.BeginMsiTransactionComplete» event.
### Declaration
```cs
protected void OnBeginMsiTransactionComplete(
  BeginMsiTransactionCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | BeginMsiTransactionCompleteEventArgs | Additional arguments for this event. |
## OnCacheAcquireBegin(args) Method {#oncacheacquirebegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheAcquireBegin» event.
### Declaration
```cs
protected void OnCacheAcquireBegin(
  CacheAcquireBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | CacheAcquireBeginEventArgs | Additional arguments for this event. |
## OnCacheAcquireComplete(args) Method {#oncacheacquirecomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheAcquireComplete» event.
### Declaration
```cs
protected void OnCacheAcquireComplete(
  CacheAcquireCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | CacheAcquireCompleteEventArgs | Additional arguments for this event. |
## OnCacheAcquireProgress(args) Method {#oncacheacquireprogress_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheAcquireProgress» event.
### Declaration
```cs
protected void OnCacheAcquireProgress(
  CacheAcquireProgressEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | CacheAcquireProgressEventArgs | Additional arguments for this event. |
## OnCacheAcquireResolving(args) Method {#oncacheacquireresolving_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheAcquireResolving» event.
### Declaration
```cs
protected void OnCacheAcquireResolving(
  CacheAcquireResolvingEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | CacheAcquireResolvingEventArgs | Additional arguments for this event. |
## OnCacheBegin(args) Method {#oncachebegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheBegin» event.
### Declaration
```cs
protected void OnCacheBegin(
  CacheBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | CacheBeginEventArgs | Additional arguments for this event. |
## OnCacheComplete(args) Method {#oncachecomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheComplete» event.
### Declaration
```cs
protected void OnCacheComplete(
  CacheCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | CacheCompleteEventArgs | Additional arguments for this event. |
## OnCacheContainerOrPayloadVerifyBegin(args) Method {#oncachecontainerorpayloadverifybegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheContainerOrPayloadVerifyBegin» event.
### Declaration
```cs
protected void OnCacheContainerOrPayloadVerifyBegin(
  CacheContainerOrPayloadVerifyBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | CacheContainerOrPayloadVerifyBeginEventArgs | Additional arguments for this event. |
## OnCacheContainerOrPayloadVerifyComplete(args) Method {#oncachecontainerorpayloadverifycomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheContainerOrPayloadVerifyComplete» event.
### Declaration
```cs
protected void OnCacheContainerOrPayloadVerifyComplete(
  CacheContainerOrPayloadVerifyCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | CacheContainerOrPayloadVerifyCompleteEventArgs | Additional arguments for this event. |
## OnCacheContainerOrPayloadVerifyProgress(args) Method {#oncachecontainerorpayloadverifyprogress_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheContainerOrPayloadVerifyProgress» event.
### Declaration
```cs
protected void OnCacheContainerOrPayloadVerifyProgress(
  CacheContainerOrPayloadVerifyProgressEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | CacheContainerOrPayloadVerifyProgressEventArgs | Additional arguments for this event. |
## OnCachePackageBegin(args) Method {#oncachepackagebegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CachePackageBegin» event.
### Declaration
```cs
protected void OnCachePackageBegin(
  CachePackageBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | CachePackageBeginEventArgs | Additional arguments for this event. |
## OnCachePackageComplete(args) Method {#oncachepackagecomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CachePackageComplete» event.
### Declaration
```cs
protected void OnCachePackageComplete(
  CachePackageCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | CachePackageCompleteEventArgs | Additional arguments for this event. |
## OnCachePackageNonVitalValidationFailure(args) Method {#oncachepackagenonvitalvalidationfailure_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CachePackageNonVitalValidationFailure» event.
### Declaration
```cs
protected void OnCachePackageNonVitalValidationFailure(
  CachePackageNonVitalValidationFailureEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | CachePackageNonVitalValidationFailureEventArgs | Additional arguments for this event. |
## OnCachePayloadExtractBegin(args) Method {#oncachepayloadextractbegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CachePayloadExtractBegin» event.
### Declaration
```cs
protected void OnCachePayloadExtractBegin(
  CachePayloadExtractBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | CachePayloadExtractBeginEventArgs | Additional arguments for this event. |
## OnCachePayloadExtractComplete(args) Method {#oncachepayloadextractcomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CachePayloadExtractComplete» event.
### Declaration
```cs
protected void OnCachePayloadExtractComplete(
  CachePayloadExtractCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | CachePayloadExtractCompleteEventArgs | Additional arguments for this event. |
## OnCachePayloadExtractProgress(args) Method {#oncachepayloadextractprogress_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CachePayloadExtractProgress» event.
### Declaration
```cs
protected void OnCachePayloadExtractProgress(
  CachePayloadExtractProgressEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | CachePayloadExtractProgressEventArgs | Additional arguments for this event. |
## OnCacheVerifyBegin(args) Method {#oncacheverifybegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheVerifyBegin» event.
### Declaration
```cs
protected void OnCacheVerifyBegin(
  CacheVerifyBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | CacheVerifyBeginEventArgs | Additional arguments for this event. |
## OnCacheVerifyComplete(args) Method {#oncacheverifycomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheVerifyComplete» event.
### Declaration
```cs
protected void OnCacheVerifyComplete(
  CacheVerifyCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | CacheVerifyCompleteEventArgs | Additional arguments for this event. |
## OnCacheVerifyProgress(args) Method {#oncacheverifyprogress_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CacheVerifyProgress» event.
### Declaration
```cs
protected void OnCacheVerifyProgress(
  CacheVerifyProgressEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | CacheVerifyProgressEventArgs | Additional arguments for this event. |
## OnCommitMsiTransactionBegin(args) Method {#oncommitmsitransactionbegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CommitMsiTransactionBegin» event.
### Declaration
```cs
protected void OnCommitMsiTransactionBegin(
  CommitMsiTransactionBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | CommitMsiTransactionBeginEventArgs | Additional arguments for this event. |
## OnCommitMsiTransactionComplete(args) Method {#oncommitmsitransactioncomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.CommitMsiTransactionComplete» event.
### Declaration
```cs
protected void OnCommitMsiTransactionComplete(
  CommitMsiTransactionCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | CommitMsiTransactionCompleteEventArgs | Additional arguments for this event. |
## OnDetectBegin(args) Method {#ondetectbegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectBegin» event.
### Declaration
```cs
protected void OnDetectBegin(
  DetectBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | DetectBeginEventArgs | Additional arguments for this event. |
## OnDetectCompatibleMsiPackage(args) Method {#ondetectcompatiblemsipackage_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectCompatibleMsiPackage» event.
### Declaration
```cs
protected void OnDetectCompatibleMsiPackage(
  DetectCompatibleMsiPackageEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | DetectCompatibleMsiPackageEventArgs | Additional arguments for this event. |
## OnDetectComplete(args) Method {#ondetectcomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectComplete» event.
### Declaration
```cs
protected void OnDetectComplete(
  DetectCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | DetectCompleteEventArgs | Additional arguments for this event. |
## OnDetectForwardCompatibleBundle(args) Method {#ondetectforwardcompatiblebundle_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectForwardCompatibleBundle» event.
### Declaration
```cs
protected void OnDetectForwardCompatibleBundle(
  DetectForwardCompatibleBundleEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | DetectForwardCompatibleBundleEventArgs | Additional arguments for this event. |
## OnDetectMsiFeature(args) Method {#ondetectmsifeature_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectMsiFeature» event.
### Declaration
```cs
protected void OnDetectMsiFeature(
  DetectMsiFeatureEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | DetectMsiFeatureEventArgs | Additional arguments for this event. |
## OnDetectPackageBegin(args) Method {#ondetectpackagebegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectPackageBegin» event.
### Declaration
```cs
protected void OnDetectPackageBegin(
  DetectPackageBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | DetectPackageBeginEventArgs | Additional arguments for this event. |
## OnDetectPackageComplete(args) Method {#ondetectpackagecomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectPackageComplete» event.
### Declaration
```cs
protected void OnDetectPackageComplete(
  DetectPackageCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | DetectPackageCompleteEventArgs | Additional arguments for this event. |
## OnDetectPatchTarget(args) Method {#ondetectpatchtarget_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectPatchTarget» event.
### Declaration
```cs
protected void OnDetectPatchTarget(
  DetectPatchTargetEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | DetectPatchTargetEventArgs | Additional arguments for this event. |
## OnDetectRelatedBundle(args) Method {#ondetectrelatedbundle_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectRelatedBundle» event.
### Declaration
```cs
protected void OnDetectRelatedBundle(
  DetectRelatedBundleEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | DetectRelatedBundleEventArgs | Additional arguments for this event. |
## OnDetectRelatedBundlePackage(args) Method {#ondetectrelatedbundlepackage_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectRelatedBundlePackage» event.
### Declaration
```cs
protected void OnDetectRelatedBundlePackage(
  DetectRelatedBundlePackageEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | DetectRelatedBundlePackageEventArgs | Additional arguments for this event. |
## OnDetectRelatedMsiPackage(args) Method {#ondetectrelatedmsipackage_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectRelatedMsiPackage» event.
### Declaration
```cs
protected void OnDetectRelatedMsiPackage(
  DetectRelatedMsiPackageEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | DetectRelatedMsiPackageEventArgs | Additional arguments for this event. |
## OnDetectUpdate(args) Method {#ondetectupdate_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectUpdate» event.
### Declaration
```cs
protected void OnDetectUpdate(
  DetectUpdateEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | DetectUpdateEventArgs | Additional arguments for this event. |
## OnDetectUpdateBegin(args) Method {#ondetectupdatebegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectUpdateBegin» event.
### Declaration
```cs
protected void OnDetectUpdateBegin(
  DetectUpdateBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | DetectUpdateBeginEventArgs | Additional arguments for this event. |
## OnDetectUpdateComplete(args) Method {#ondetectupdatecomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.DetectUpdateComplete» event.
### Declaration
```cs
protected void OnDetectUpdateComplete(
  DetectUpdateCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | DetectUpdateCompleteEventArgs | Additional arguments for this event. |
## OnElevateBegin(args) Method {#onelevatebegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ElevateBegin» event.
### Declaration
```cs
protected void OnElevateBegin(
  ElevateBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | ElevateBeginEventArgs | Additional arguments for this event. |
## OnElevateComplete(args) Method {#onelevatecomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ElevateComplete» event.
### Declaration
```cs
protected void OnElevateComplete(
  ElevateCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | ElevateCompleteEventArgs | Additional arguments for this event. |
## OnError(args) Method {#onerror_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.Error» event.
### Declaration
```cs
protected void OnError(
  ErrorEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | ErrorEventArgs | Additional arguments for this event. |
## OnExecuteBegin(args) Method {#onexecutebegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ExecuteBegin» event.
### Declaration
```cs
protected void OnExecuteBegin(
  ExecuteBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | ExecuteBeginEventArgs | Additional arguments for this event. |
## OnExecuteComplete(args) Method {#onexecutecomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ExecuteComplete» event.
### Declaration
```cs
protected void OnExecuteComplete(
  ExecuteCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | ExecuteCompleteEventArgs | Additional arguments for this event. |
## OnExecuteFilesInUse(args) Method {#onexecutefilesinuse_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ExecuteFilesInUse» event.
### Declaration
```cs
protected void OnExecuteFilesInUse(
  ExecuteFilesInUseEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | ExecuteFilesInUseEventArgs | Additional arguments for this event. |
## OnExecuteMsiMessage(args) Method {#onexecutemsimessage_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ExecuteMsiMessage» event.
### Declaration
```cs
protected void OnExecuteMsiMessage(
  ExecuteMsiMessageEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | ExecuteMsiMessageEventArgs | Additional arguments for this event. |
## OnExecutePackageBegin(args) Method {#onexecutepackagebegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ExecutePackageBegin» event.
### Declaration
```cs
protected void OnExecutePackageBegin(
  ExecutePackageBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | ExecutePackageBeginEventArgs | Additional arguments for this event. |
## OnExecutePackageComplete(args) Method {#onexecutepackagecomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ExecutePackageComplete» event.
### Declaration
```cs
protected void OnExecutePackageComplete(
  ExecutePackageCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | ExecutePackageCompleteEventArgs | Additional arguments for this event. |
## OnExecutePatchTarget(args) Method {#onexecutepatchtarget_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ExecutePatchTarget» event.
### Declaration
```cs
protected void OnExecutePatchTarget(
  ExecutePatchTargetEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | ExecutePatchTargetEventArgs | Additional arguments for this event. |
## OnExecuteProcessCancel(args) Method {#onexecuteprocesscancel_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ExecuteProcessCancel» event.
### Declaration
```cs
protected void OnExecuteProcessCancel(
  ExecuteProcessCancelEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | ExecuteProcessCancelEventArgs | Additional arguments for this event. |
## OnExecuteProgress(args) Method {#onexecuteprogress_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.ExecuteProgress» event.
### Declaration
```cs
protected void OnExecuteProgress(
  ExecuteProgressEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | ExecuteProgressEventArgs | Additional arguments for this event. |
## OnLaunchApprovedExeBegin(args) Method {#onlaunchapprovedexebegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.LaunchApprovedExeBegin» event.
### Declaration
```cs
protected void OnLaunchApprovedExeBegin(
  LaunchApprovedExeBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | LaunchApprovedExeBeginEventArgs | Additional arguments for this event. |
## OnLaunchApprovedExeComplete(args) Method {#onlaunchapprovedexecomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.LaunchApprovedExeComplete» event.
### Declaration
```cs
protected void OnLaunchApprovedExeComplete(
  LaunchApprovedExeCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | LaunchApprovedExeCompleteEventArgs | Additional arguments for this event. |
## OnPauseAutomaticUpdatesBegin(args) Method {#onpauseautomaticupdatesbegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PauseAutomaticUpdatesBegin» event.
### Declaration
```cs
protected void OnPauseAutomaticUpdatesBegin(
  PauseAutomaticUpdatesBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | PauseAutomaticUpdatesBeginEventArgs | Additional arguments for this event. |
## OnPauseAutomaticUpdatesComplete(args) Method {#onpauseautomaticupdatescomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PauseAutomaticUpdatesComplete» event.
### Declaration
```cs
protected void OnPauseAutomaticUpdatesComplete(
  PauseAutomaticUpdatesCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | PauseAutomaticUpdatesCompleteEventArgs | Additional arguments for this event. |
## OnPlanBegin(args) Method {#onplanbegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanBegin» event.
### Declaration
```cs
protected void OnPlanBegin(
  PlanBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | PlanBeginEventArgs | Additional arguments for this event. |
## OnPlanCompatibleMsiPackageBegin(args) Method {#onplancompatiblemsipackagebegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanCompatibleMsiPackageBegin» event.
### Declaration
```cs
protected void OnPlanCompatibleMsiPackageBegin(
  PlanCompatibleMsiPackageBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | PlanCompatibleMsiPackageBeginEventArgs | Additional arguments for this event. |
## OnPlanCompatibleMsiPackageComplete(args) Method {#onplancompatiblemsipackagecomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanCompatibleMsiPackageComplete» event.
### Declaration
```cs
protected void OnPlanCompatibleMsiPackageComplete(
  PlanCompatibleMsiPackageCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | PlanCompatibleMsiPackageCompleteEventArgs | Additional arguments for this event. |
## OnPlanComplete(args) Method {#onplancomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanComplete» event.
### Declaration
```cs
protected void OnPlanComplete(
  PlanCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | PlanCompleteEventArgs | Additional arguments for this event. |
## OnPlanForwardCompatibleBundle(args) Method {#onplanforwardcompatiblebundle_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanForwardCompatibleBundle» event.
### Declaration
```cs
protected void OnPlanForwardCompatibleBundle(
  PlanForwardCompatibleBundleEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | PlanForwardCompatibleBundleEventArgs | Additional arguments for this event. |
## OnPlanMsiFeature(args) Method {#onplanmsifeature_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanMsiFeature» event.
### Declaration
```cs
protected void OnPlanMsiFeature(
  PlanMsiFeatureEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | PlanMsiFeatureEventArgs | Additional arguments for this event. |
## OnPlanMsiPackage(args) Method {#onplanmsipackage_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanMsiPackage» event.
### Declaration
```cs
protected void OnPlanMsiPackage(
  PlanMsiPackageEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | PlanMsiPackageEventArgs | Additional arguments for this event. |
## OnPlannedCompatiblePackage(args) Method {#onplannedcompatiblepackage_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlannedCompatiblePackage» event.
### Declaration
```cs
protected void OnPlannedCompatiblePackage(
  PlannedCompatiblePackageEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | PlannedCompatiblePackageEventArgs | Additional arguments for this event. |
## OnPlannedPackage(args) Method {#onplannedpackage_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlannedPackage» event.
### Declaration
```cs
protected void OnPlannedPackage(
  PlannedPackageEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | PlannedPackageEventArgs | Additional arguments for this event. |
## OnPlanPackageBegin(args) Method {#onplanpackagebegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanPackageBegin» event.
### Declaration
```cs
protected void OnPlanPackageBegin(
  PlanPackageBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | PlanPackageBeginEventArgs | Additional arguments for this event. |
## OnPlanPackageComplete(args) Method {#onplanpackagecomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanPackageComplete» event.
### Declaration
```cs
protected void OnPlanPackageComplete(
  PlanPackageCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | PlanPackageCompleteEventArgs | Additional arguments for this event. |
## OnPlanPatchTarget(args) Method {#onplanpatchtarget_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanPatchTarget» event.
### Declaration
```cs
protected void OnPlanPatchTarget(
  PlanPatchTargetEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | PlanPatchTargetEventArgs | Additional arguments for this event. |
## OnPlanRelatedBundle(args) Method {#onplanrelatedbundle_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanRelatedBundle» event.
### Declaration
```cs
protected void OnPlanRelatedBundle(
  PlanRelatedBundleEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | PlanRelatedBundleEventArgs | Additional arguments for this event. |
## OnPlanRelatedBundleType(args) Method {#onplanrelatedbundletype_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanRelatedBundleType» event.
### Declaration
```cs
protected void OnPlanRelatedBundleType(
  PlanRelatedBundleTypeEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | PlanRelatedBundleTypeEventArgs | Additional arguments for this event. |
## OnPlanRestoreRelatedBundle(args) Method {#onplanrestorerelatedbundle_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanRestoreRelatedBundle» event.
### Declaration
```cs
protected void OnPlanRestoreRelatedBundle(
  PlanRestoreRelatedBundleEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | PlanRestoreRelatedBundleEventArgs | Additional arguments for this event. |
## OnPlanRollbackBoundary() Method {#onplanrollbackboundary_nop}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.PlanRollbackBoundary» event.
### Declaration
```cs
protected void OnPlanRollbackBoundary()
```
## OnProgress(args) Method {#onprogress_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.Progress» event.
### Declaration
```cs
protected void OnProgress(
  ProgressEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | ProgressEventArgs | Additional arguments for this event. |
## OnRegisterBegin(args) Method {#onregisterbegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.RegisterBegin» event.
### Declaration
```cs
protected void OnRegisterBegin(
  RegisterBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | RegisterBeginEventArgs | Additional arguments for this event. |
## OnRegisterComplete(args) Method {#onregistercomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.RegisterComplete» event.
### Declaration
```cs
protected void OnRegisterComplete(
  RegisterCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | RegisterCompleteEventArgs | Additional arguments for this event. |
## OnRollbackMsiTransactionBegin(args) Method {#onrollbackmsitransactionbegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.RollbackMsiTransactionBegin» event.
### Declaration
```cs
protected void OnRollbackMsiTransactionBegin(
  RollbackMsiTransactionBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | RollbackMsiTransactionBeginEventArgs | Additional arguments for this event. |
## OnRollbackMsiTransactionComplete(args) Method {#onrollbackmsitransactioncomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.RollbackMsiTransactionComplete» event.
### Declaration
```cs
protected void OnRollbackMsiTransactionComplete(
  RollbackMsiTransactionCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | RollbackMsiTransactionCompleteEventArgs | Additional arguments for this event. |
## OnSetUpdateBegin(args) Method {#onsetupdatebegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.SetUpdateBegin» event.
### Declaration
```cs
protected void OnSetUpdateBegin(
  SetUpdateBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | SetUpdateBeginEventArgs | Additional arguments for this event. |
## OnSetUpdateComplete(args) Method {#onsetupdatecomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.SetUpdateComplete» event.
### Declaration
```cs
protected void OnSetUpdateComplete(
  SetUpdateCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | SetUpdateCompleteEventArgs | Additional arguments for this event. |
## OnShutdown(args) Method {#onshutdown_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.Shutdown» event.
### Declaration
```cs
protected void OnShutdown(
  ShutdownEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | ShutdownEventArgs | Additional arguments for this event. |
## OnStartup(args) Method {#onstartup_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.Startup» event.
### Declaration
```cs
protected void OnStartup(
  StartupEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | StartupEventArgs | Additional arguments for this event. |
## OnSystemRestorePointBegin(args) Method {#onsystemrestorepointbegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.SystemRestorePointBegin» event.
### Declaration
```cs
protected void OnSystemRestorePointBegin(
  SystemRestorePointBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | SystemRestorePointBeginEventArgs | Additional arguments for this event. |
## OnSystemRestorePointComplete(args) Method {#onsystemrestorepointcomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.SystemRestorePointComplete» event.
### Declaration
```cs
protected void OnSystemRestorePointComplete(
  SystemRestorePointCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | SystemRestorePointCompleteEventArgs | Additional arguments for this event. |
## OnUnregisterBegin(args) Method {#onunregisterbegin_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.UnregisterBegin» event.
### Declaration
```cs
protected void OnUnregisterBegin(
  UnregisterBeginEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | UnregisterBeginEventArgs | Additional arguments for this event. |
## OnUnregisterComplete(args) Method {#onunregistercomplete_args}
Called by the engine, raises the «see E:WixToolset.Mba.Core.BootstrapperApplication.UnregisterComplete» event.
### Declaration
```cs
protected void OnUnregisterComplete(
  UnregisterCompleteEventArgs args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| args | UnregisterCompleteEventArgs | Additional arguments for this event. |
## Run() Method {#run_nop}
Entry point that is called when the bootstrapper application is ready to run.
### Declaration
```cs
protected void Run()
```
## ApplyBegin Event {#applybegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ApplyBeginEventArgs> ApplyBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ApplyBeginEventArgs>`
## ApplyComplete Event {#applycomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ApplyCompleteEventArgs> ApplyComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ApplyCompleteEventArgs>`
## ApplyDowngrade Event {#applydowngrade}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ApplyDowngradeEventArgs> ApplyDowngrade
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ApplyDowngradeEventArgs>`
## BeginMsiTransactionBegin Event {#beginmsitransactionbegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.BeginMsiTransactionBeginEventArgs> BeginMsiTransactionBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.BeginMsiTransactionBeginEventArgs>`
## BeginMsiTransactionComplete Event {#beginmsitransactioncomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.BeginMsiTransactionCompleteEventArgs> BeginMsiTransactionComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.BeginMsiTransactionCompleteEventArgs>`
## CacheAcquireBegin Event {#cacheacquirebegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheAcquireBeginEventArgs> CacheAcquireBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheAcquireBeginEventArgs>`
## CacheAcquireComplete Event {#cacheacquirecomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheAcquireCompleteEventArgs> CacheAcquireComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheAcquireCompleteEventArgs>`
## CacheAcquireProgress Event {#cacheacquireprogress}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheAcquireProgressEventArgs> CacheAcquireProgress
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheAcquireProgressEventArgs>`
## CacheAcquireResolving Event {#cacheacquireresolving}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheAcquireResolvingEventArgs> CacheAcquireResolving
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheAcquireResolvingEventArgs>`
## CacheBegin Event {#cachebegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheBeginEventArgs> CacheBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheBeginEventArgs>`
## CacheComplete Event {#cachecomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheCompleteEventArgs> CacheComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheCompleteEventArgs>`
## CacheContainerOrPayloadVerifyBegin Event {#cachecontainerorpayloadverifybegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheContainerOrPayloadVerifyBeginEventArgs> CacheContainerOrPayloadVerifyBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheContainerOrPayloadVerifyBeginEventArgs>`
## CacheContainerOrPayloadVerifyComplete Event {#cachecontainerorpayloadverifycomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheContainerOrPayloadVerifyCompleteEventArgs> CacheContainerOrPayloadVerifyComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheContainerOrPayloadVerifyCompleteEventArgs>`
## CacheContainerOrPayloadVerifyProgress Event {#cachecontainerorpayloadverifyprogress}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheContainerOrPayloadVerifyProgressEventArgs> CacheContainerOrPayloadVerifyProgress
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheContainerOrPayloadVerifyProgressEventArgs>`
## CachePackageBegin Event {#cachepackagebegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CachePackageBeginEventArgs> CachePackageBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CachePackageBeginEventArgs>`
## CachePackageComplete Event {#cachepackagecomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CachePackageCompleteEventArgs> CachePackageComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CachePackageCompleteEventArgs>`
## CachePackageNonVitalValidationFailure Event {#cachepackagenonvitalvalidationfailure}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CachePackageNonVitalValidationFailureEventArgs> CachePackageNonVitalValidationFailure
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CachePackageNonVitalValidationFailureEventArgs>`
## CachePayloadExtractBegin Event {#cachepayloadextractbegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CachePayloadExtractBeginEventArgs> CachePayloadExtractBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CachePayloadExtractBeginEventArgs>`
## CachePayloadExtractComplete Event {#cachepayloadextractcomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CachePayloadExtractCompleteEventArgs> CachePayloadExtractComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CachePayloadExtractCompleteEventArgs>`
## CachePayloadExtractProgress Event {#cachepayloadextractprogress}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CachePayloadExtractProgressEventArgs> CachePayloadExtractProgress
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CachePayloadExtractProgressEventArgs>`
## CacheVerifyBegin Event {#cacheverifybegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheVerifyBeginEventArgs> CacheVerifyBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheVerifyBeginEventArgs>`
## CacheVerifyComplete Event {#cacheverifycomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheVerifyCompleteEventArgs> CacheVerifyComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheVerifyCompleteEventArgs>`
## CacheVerifyProgress Event {#cacheverifyprogress}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheVerifyProgressEventArgs> CacheVerifyProgress
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheVerifyProgressEventArgs>`
## CommitMsiTransactionBegin Event {#commitmsitransactionbegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CommitMsiTransactionBeginEventArgs> CommitMsiTransactionBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CommitMsiTransactionBeginEventArgs>`
## CommitMsiTransactionComplete Event {#commitmsitransactioncomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CommitMsiTransactionCompleteEventArgs> CommitMsiTransactionComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CommitMsiTransactionCompleteEventArgs>`
## DetectBegin Event {#detectbegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectBeginEventArgs> DetectBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectBeginEventArgs>`
## DetectCompatibleMsiPackage Event {#detectcompatiblemsipackage}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectCompatibleMsiPackageEventArgs> DetectCompatibleMsiPackage
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectCompatibleMsiPackageEventArgs>`
## DetectComplete Event {#detectcomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectCompleteEventArgs> DetectComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectCompleteEventArgs>`
## DetectForwardCompatibleBundle Event {#detectforwardcompatiblebundle}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectForwardCompatibleBundleEventArgs> DetectForwardCompatibleBundle
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectForwardCompatibleBundleEventArgs>`
## DetectMsiFeature Event {#detectmsifeature}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectMsiFeatureEventArgs> DetectMsiFeature
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectMsiFeatureEventArgs>`
## DetectPackageBegin Event {#detectpackagebegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectPackageBeginEventArgs> DetectPackageBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectPackageBeginEventArgs>`
## DetectPackageComplete Event {#detectpackagecomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectPackageCompleteEventArgs> DetectPackageComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectPackageCompleteEventArgs>`
## DetectPatchTarget Event {#detectpatchtarget}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectPatchTargetEventArgs> DetectPatchTarget
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectPatchTargetEventArgs>`
## DetectRelatedBundle Event {#detectrelatedbundle}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectRelatedBundleEventArgs> DetectRelatedBundle
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectRelatedBundleEventArgs>`
## DetectRelatedBundlePackage Event {#detectrelatedbundlepackage}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectRelatedBundlePackageEventArgs> DetectRelatedBundlePackage
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectRelatedBundlePackageEventArgs>`
## DetectRelatedMsiPackage Event {#detectrelatedmsipackage}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectRelatedMsiPackageEventArgs> DetectRelatedMsiPackage
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectRelatedMsiPackageEventArgs>`
## DetectUpdate Event {#detectupdate}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectUpdateEventArgs> DetectUpdate
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectUpdateEventArgs>`
## DetectUpdateBegin Event {#detectupdatebegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectUpdateBeginEventArgs> DetectUpdateBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectUpdateBeginEventArgs>`
## DetectUpdateComplete Event {#detectupdatecomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectUpdateCompleteEventArgs> DetectUpdateComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectUpdateCompleteEventArgs>`
## ElevateBegin Event {#elevatebegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ElevateBeginEventArgs> ElevateBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ElevateBeginEventArgs>`
## ElevateComplete Event {#elevatecomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ElevateCompleteEventArgs> ElevateComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ElevateCompleteEventArgs>`
## Error Event {#error}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ErrorEventArgs> Error
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ErrorEventArgs>`
## ExecuteBegin Event {#executebegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ExecuteBeginEventArgs> ExecuteBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ExecuteBeginEventArgs>`
## ExecuteComplete Event {#executecomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ExecuteCompleteEventArgs> ExecuteComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ExecuteCompleteEventArgs>`
## ExecuteFilesInUse Event {#executefilesinuse}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ExecuteFilesInUseEventArgs> ExecuteFilesInUse
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ExecuteFilesInUseEventArgs>`
## ExecuteMsiMessage Event {#executemsimessage}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ExecuteMsiMessageEventArgs> ExecuteMsiMessage
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ExecuteMsiMessageEventArgs>`
## ExecutePackageBegin Event {#executepackagebegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ExecutePackageBeginEventArgs> ExecutePackageBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ExecutePackageBeginEventArgs>`
## ExecutePackageComplete Event {#executepackagecomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ExecutePackageCompleteEventArgs> ExecutePackageComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ExecutePackageCompleteEventArgs>`
## ExecutePatchTarget Event {#executepatchtarget}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ExecutePatchTargetEventArgs> ExecutePatchTarget
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ExecutePatchTargetEventArgs>`
## ExecuteProcessCancel Event {#executeprocesscancel}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ExecuteProcessCancelEventArgs> ExecuteProcessCancel
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ExecuteProcessCancelEventArgs>`
## ExecuteProgress Event {#executeprogress}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ExecuteProgressEventArgs> ExecuteProgress
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ExecuteProgressEventArgs>`
## LaunchApprovedExeBegin Event {#launchapprovedexebegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.LaunchApprovedExeBeginEventArgs> LaunchApprovedExeBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.LaunchApprovedExeBeginEventArgs>`
## LaunchApprovedExeComplete Event {#launchapprovedexecomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.LaunchApprovedExeCompleteEventArgs> LaunchApprovedExeComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.LaunchApprovedExeCompleteEventArgs>`
## PauseAutomaticUpdatesBegin Event {#pauseautomaticupdatesbegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PauseAutomaticUpdatesBeginEventArgs> PauseAutomaticUpdatesBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PauseAutomaticUpdatesBeginEventArgs>`
## PauseAutomaticUpdatesComplete Event {#pauseautomaticupdatescomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PauseAutomaticUpdatesCompleteEventArgs> PauseAutomaticUpdatesComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PauseAutomaticUpdatesCompleteEventArgs>`
## PlanBegin Event {#planbegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanBeginEventArgs> PlanBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanBeginEventArgs>`
## PlanCompatibleMsiPackageBegin Event {#plancompatiblemsipackagebegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanCompatibleMsiPackageBeginEventArgs> PlanCompatibleMsiPackageBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanCompatibleMsiPackageBeginEventArgs>`
## PlanCompatibleMsiPackageComplete Event {#plancompatiblemsipackagecomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanCompatibleMsiPackageCompleteEventArgs> PlanCompatibleMsiPackageComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanCompatibleMsiPackageCompleteEventArgs>`
## PlanComplete Event {#plancomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanCompleteEventArgs> PlanComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanCompleteEventArgs>`
## PlanForwardCompatibleBundle Event {#planforwardcompatiblebundle}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanForwardCompatibleBundleEventArgs> PlanForwardCompatibleBundle
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanForwardCompatibleBundleEventArgs>`
## PlanMsiFeature Event {#planmsifeature}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanMsiFeatureEventArgs> PlanMsiFeature
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanMsiFeatureEventArgs>`
## PlanMsiPackage Event {#planmsipackage}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanMsiPackageEventArgs> PlanMsiPackage
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanMsiPackageEventArgs>`
## PlannedCompatiblePackage Event {#plannedcompatiblepackage}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlannedCompatiblePackageEventArgs> PlannedCompatiblePackage
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlannedCompatiblePackageEventArgs>`
## PlannedPackage Event {#plannedpackage}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlannedPackageEventArgs> PlannedPackage
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlannedPackageEventArgs>`
## PlanPackageBegin Event {#planpackagebegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanPackageBeginEventArgs> PlanPackageBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanPackageBeginEventArgs>`
## PlanPackageComplete Event {#planpackagecomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanPackageCompleteEventArgs> PlanPackageComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanPackageCompleteEventArgs>`
## PlanPatchTarget Event {#planpatchtarget}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanPatchTargetEventArgs> PlanPatchTarget
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanPatchTargetEventArgs>`
## PlanRelatedBundle Event {#planrelatedbundle}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanRelatedBundleEventArgs> PlanRelatedBundle
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanRelatedBundleEventArgs>`
## PlanRelatedBundleType Event {#planrelatedbundletype}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanRelatedBundleTypeEventArgs> PlanRelatedBundleType
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanRelatedBundleTypeEventArgs>`
## PlanRestoreRelatedBundle Event {#planrestorerelatedbundle}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanRestoreRelatedBundleEventArgs> PlanRestoreRelatedBundle
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanRestoreRelatedBundleEventArgs>`
## PlanRollbackBoundary Event {#planrollbackboundary}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanRollbackBoundaryEventArgs> PlanRollbackBoundary
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanRollbackBoundaryEventArgs>`
## Progress Event {#progress}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ProgressEventArgs> Progress
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ProgressEventArgs>`
## RegisterBegin Event {#registerbegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.RegisterBeginEventArgs> RegisterBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.RegisterBeginEventArgs>`
## RegisterComplete Event {#registercomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.RegisterCompleteEventArgs> RegisterComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.RegisterCompleteEventArgs>`
## RollbackMsiTransactionBegin Event {#rollbackmsitransactionbegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.RollbackMsiTransactionBeginEventArgs> RollbackMsiTransactionBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.RollbackMsiTransactionBeginEventArgs>`
## RollbackMsiTransactionComplete Event {#rollbackmsitransactioncomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.RollbackMsiTransactionCompleteEventArgs> RollbackMsiTransactionComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.RollbackMsiTransactionCompleteEventArgs>`
## SetUpdateBegin Event {#setupdatebegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.SetUpdateBeginEventArgs> SetUpdateBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.SetUpdateBeginEventArgs>`
## SetUpdateComplete Event {#setupdatecomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.SetUpdateCompleteEventArgs> SetUpdateComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.SetUpdateCompleteEventArgs>`
## Shutdown Event {#shutdown}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ShutdownEventArgs> Shutdown
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ShutdownEventArgs>`
## Startup Event {#startup}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.StartupEventArgs> Startup
```
### Value
`System.EventHandler<WixToolset.Mba.Core.StartupEventArgs>`
## SystemRestorePointBegin Event {#systemrestorepointbegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.SystemRestorePointBeginEventArgs> SystemRestorePointBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.SystemRestorePointBeginEventArgs>`
## SystemRestorePointComplete Event {#systemrestorepointcomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.SystemRestorePointCompleteEventArgs> SystemRestorePointComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.SystemRestorePointCompleteEventArgs>`
## UnregisterBegin Event {#unregisterbegin}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.UnregisterBeginEventArgs> UnregisterBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.UnregisterBeginEventArgs>`
## UnregisterComplete Event {#unregistercomplete}

### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.UnregisterCompleteEventArgs> UnregisterComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.UnregisterCompleteEventArgs>`
