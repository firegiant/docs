---
title: IDefaultBootstrapperApplication Interface
---
Interface for built-in implementation of «see T:WixToolset.Mba.Core.IBootstrapperApplication» .
## Events
| Event | Description |
| ------ | ----------- |
| [ApplyBegin](#applybegin) | Fired when the engine has begun installing the bundle. |
| [ApplyComplete](#applycomplete) | Fired when the engine has completed installing the bundle. |
| [ApplyDowngrade](#applydowngrade) | Fired when the plan determined that nothing should happen to prevent downgrading. |
| [BeginMsiTransactionBegin](#beginmsitransactionbegin) | Fired when the engine is about to begin an MSI transaction. |
| [BeginMsiTransactionComplete](#beginmsitransactioncomplete) | Fired when the engine has completed beginning an MSI transaction. |
| [CacheAcquireBegin](#cacheacquirebegin) | Fired when the engine has begun acquiring the payload or container. The BA can change the source using «see M:WixToolset.Mba.Core.IEngine.SetLocalSource(System.String,System.String,System.String)» or «see M:WixToolset.Mba.Core.IEngine.SetDownloadSource(System.String,System.String,System.String,System.String,System.String)» . |
| [CacheAcquireComplete](#cacheacquirecomplete) | Fired when the engine has completed the acquisition of the payload or container. The BA can change the source using «see M:WixToolset.Mba.Core.IEngine.SetLocalSource(System.String,System.String,System.String)» or «see M:WixToolset.Mba.Core.IEngine.SetDownloadSource(System.String,System.String,System.String,System.String,System.String)» . |
| [CacheAcquireProgress](#cacheacquireprogress) | Fired when the engine has progress acquiring the payload or container. |
| [CacheAcquireResolving](#cacheacquireresolving) | Fired by the engine to allow the BA to override the acquisition action. |
| [CacheBegin](#cachebegin) | Fired when the engine has begun caching the installation sources. |
| [CacheComplete](#cachecomplete) | Fired after the engine has cached the installation sources. |
| [CacheContainerOrPayloadVerifyBegin](#cachecontainerorpayloadverifybegin) | Fired when the engine begins the verification of the payload or container that was already in the package cache. |
| [CacheContainerOrPayloadVerifyComplete](#cachecontainerorpayloadverifycomplete) | Fired when the engine has completed the verification of the payload or container that was already in the package cache. |
| [CacheContainerOrPayloadVerifyProgress](#cachecontainerorpayloadverifyprogress) | Fired when the engine has progress verifying the payload or container that was already in the package cache. |
| [CachePackageBegin](#cachepackagebegin) | Fired when the engine has begun caching a specific package. |
| [CachePackageComplete](#cachepackagecomplete) | Fired when the engine has completed caching a specific package. |
| [CachePackageNonVitalValidationFailure](#cachepackagenonvitalvalidationfailure) | Fired when the engine failed validating a package in the package cache that is non-vital to execution. |
| [CachePayloadExtractBegin](#cachepayloadextractbegin) | Fired when the engine begins the extraction of the payload from the container. |
| [CachePayloadExtractComplete](#cachepayloadextractcomplete) | Fired when the engine has completed the extraction of the payload from the container. |
| [CachePayloadExtractProgress](#cachepayloadextractprogress) | Fired when the engine has progress extracting the payload from the container. |
| [CacheVerifyBegin](#cacheverifybegin) | Fired when the engine begins the verification of the acquired payload or container. |
| [CacheVerifyComplete](#cacheverifycomplete) | Fired when the engine has completed the verification of the acquired payload or container. |
| [CacheVerifyProgress](#cacheverifyprogress) | Fired when the engine has progress verifying the payload or container. |
| [CommitMsiTransactionBegin](#commitmsitransactionbegin) | Fired when the engine is about to commit an MSI transaction. |
| [CommitMsiTransactionComplete](#commitmsitransactioncomplete) | Fired when the engine has completed comitting an MSI transaction. |
| [DetectBegin](#detectbegin) | Fired when the overall detection phase has begun. |
| [DetectCompatibleMsiPackage](#detectcompatiblemsipackage) | Fired when a package was not detected but a package using the same provider key was. |
| [DetectComplete](#detectcomplete) | Fired when the detection phase has completed. |
| [DetectForwardCompatibleBundle](#detectforwardcompatiblebundle) | Fired when a forward compatible bundle is detected. |
| [DetectMsiFeature](#detectmsifeature) | Fired when a feature in an MSI package has been detected. |
| [DetectPackageBegin](#detectpackagebegin) | Fired when the detection for a specific package has begun. |
| [DetectPackageComplete](#detectpackagecomplete) | Fired when the detection for a specific package has completed. |
| [DetectPatchTarget](#detectpatchtarget) | Fired when the engine detects a target product for an MSP package. |
| [DetectRelatedBundle](#detectrelatedbundle) | Fired when a related bundle has been detected for a bundle. |
| [DetectRelatedBundlePackage](#detectrelatedbundlepackage) | Fired when a related bundle has been detected for a bundle package. |
| [DetectRelatedMsiPackage](#detectrelatedmsipackage) | Fired when a related MSI package has been detected for a package. |
| [DetectUpdate](#detectupdate) | Fired when the update detection has found a potential update candidate. |
| [DetectUpdateBegin](#detectupdatebegin) | Fired when the update detection phase has begun. |
| [DetectUpdateComplete](#detectupdatecomplete) | Fired when the update detection phase has completed. |
| [ElevateBegin](#elevatebegin) | Fired when the engine is about to start the elevated process. |
| [ElevateComplete](#elevatecomplete) | Fired when the engine has completed starting the elevated process. |
| [Error](#error) | Fired when the engine has encountered an error. |
| [ExecuteBegin](#executebegin) | Fired when the engine has begun installing packages. |
| [ExecuteComplete](#executecomplete) | Fired when the engine has completed installing packages. |
| [ExecuteFilesInUse](#executefilesinuse) | Fired when a package sends a files in use installation message. |
| [ExecuteMsiMessage](#executemsimessage) | Fired when Windows Installer sends an installation message. |
| [ExecutePackageBegin](#executepackagebegin) | Fired when the engine has begun installing a specific package. |
| [ExecutePackageComplete](#executepackagecomplete) | Fired when the engine has completed installing a specific package. |
| [ExecutePatchTarget](#executepatchtarget) | Fired when the engine executes one or more patches targeting a product. |
| [ExecuteProcessCancel](#executeprocesscancel) | Fired when a package that spawned a process is cancelled. |
| [ExecuteProgress](#executeprogress) | Fired by the engine while executing a package. |
| [LaunchApprovedExeBegin](#launchapprovedexebegin) | Fired when the engine is about to launch the preapproved executable. |
| [LaunchApprovedExeComplete](#launchapprovedexecomplete) | Fired when the engine has completed launching the preapproved executable. |
| [PauseAutomaticUpdatesBegin](#pauseautomaticupdatesbegin) | Fired when the engine is about to pause Windows automatic updates. |
| [PauseAutomaticUpdatesComplete](#pauseautomaticupdatescomplete) | Fired when the engine has completed pausing Windows automatic updates. |
| [PlanBegin](#planbegin) | Fired when the engine has begun planning the installation. |
| [PlanCompatibleMsiPackageBegin](#plancompatiblemsipackagebegin) | Fired when the engine plans a new, compatible package using the same provider key. |
| [PlanCompatibleMsiPackageComplete](#plancompatiblemsipackagecomplete) | Fired when the engine has completed planning the installation of a specific package. |
| [PlanComplete](#plancomplete) | Fired when the engine has completed planning the installation. |
| [PlanForwardCompatibleBundle](#planforwardcompatiblebundle) | Fired when the engine is about to plan a forward compatible bundle. |
| [PlanMsiFeature](#planmsifeature) | Fired when the engine is about to plan a feature in an MSI package. |
| [PlanMsiPackage](#planmsipackage) | Fired when the engine is planning an MSI or MSP package. |
| [PlannedCompatiblePackage](#plannedcompatiblepackage) | Fired when the engine has completed planning a compatible package. |
| [PlannedPackage](#plannedpackage) | Fired when the engine has completed planning a package. |
| [PlanPackageBegin](#planpackagebegin) | Fired when the engine has begun getting the BA's input for planning a package. |
| [PlanPackageComplete](#planpackagecomplete) | Fired when the engine has completed getting the BA's input for planning a package. |
| [PlanPatchTarget](#planpatchtarget) | Fired when the engine is about to plan a target of an MSP package. |
| [PlanRelatedBundle](#planrelatedbundle) | Fired when the engine has begun planning for a related bundle. |
| [PlanRelatedBundleType](#planrelatedbundletype) | Fired when the engine has begun planning the related bundle relation type. |
| [PlanRestoreRelatedBundle](#planrestorerelatedbundle) | Fired when the engine has begun planning an upgrade related bundle for restoring in case of failure. |
| [PlanRollbackBoundary](#planrollbackboundary) | Fired when the engine is planning a rollback boundary. |
| [Progress](#progress) | Fired when the engine has changed progress for the bundle installation. |
| [RegisterBegin](#registerbegin) | Fired when the engine has begun registering the location and visibility of the bundle. |
| [RegisterComplete](#registercomplete) | Fired when the engine has completed registering the location and visibility of the bundle. |
| [RollbackMsiTransactionBegin](#rollbackmsitransactionbegin) | Fired when the engine is about to rollback an MSI transaction. |
| [RollbackMsiTransactionComplete](#rollbackmsitransactioncomplete) | Fired when the engine has completed rolling back an MSI transaction. |
| [SetUpdateBegin](#setupdatebegin) | Fired when the engine has begun to setup the update package. |
| [SetUpdateComplete](#setupdatecomplete) | Fired when the engine has completed setting up the update package. |
| [Shutdown](#shutdown) | Fired when the engine is shutting down the bootstrapper application. |
| [Startup](#startup) | Fired when the engine is starting up the bootstrapper application. |
| [SystemRestorePointBegin](#systemrestorepointbegin) | Fired when the engine is about to take a system restore point. |
| [SystemRestorePointComplete](#systemrestorepointcomplete) | Fired when the engine has completed taking a system restore point. |
| [UnregisterBegin](#unregisterbegin) | Fired when the engine unregisters the bundle. |
| [UnregisterComplete](#unregistercomplete) | Fired when the engine unregistration is complete. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## ApplyBegin Event {#applybegin}
Fired when the engine has begun installing the bundle.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ApplyBeginEventArgs> ApplyBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ApplyBeginEventArgs>`
## ApplyComplete Event {#applycomplete}
Fired when the engine has completed installing the bundle.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ApplyCompleteEventArgs> ApplyComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ApplyCompleteEventArgs>`
## ApplyDowngrade Event {#applydowngrade}
Fired when the plan determined that nothing should happen to prevent downgrading.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ApplyDowngradeEventArgs> ApplyDowngrade
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ApplyDowngradeEventArgs>`
## BeginMsiTransactionBegin Event {#beginmsitransactionbegin}
Fired when the engine is about to begin an MSI transaction.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.BeginMsiTransactionBeginEventArgs> BeginMsiTransactionBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.BeginMsiTransactionBeginEventArgs>`
## BeginMsiTransactionComplete Event {#beginmsitransactioncomplete}
Fired when the engine has completed beginning an MSI transaction.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.BeginMsiTransactionCompleteEventArgs> BeginMsiTransactionComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.BeginMsiTransactionCompleteEventArgs>`
## CacheAcquireBegin Event {#cacheacquirebegin}
Fired when the engine has begun acquiring the payload or container. The BA can change the source using «see M:WixToolset.Mba.Core.IEngine.SetLocalSource(System.String,System.String,System.String)» or «see M:WixToolset.Mba.Core.IEngine.SetDownloadSource(System.String,System.String,System.String,System.String,System.String)» .
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheAcquireBeginEventArgs> CacheAcquireBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheAcquireBeginEventArgs>`
## CacheAcquireComplete Event {#cacheacquirecomplete}
Fired when the engine has completed the acquisition of the payload or container. The BA can change the source using «see M:WixToolset.Mba.Core.IEngine.SetLocalSource(System.String,System.String,System.String)» or «see M:WixToolset.Mba.Core.IEngine.SetDownloadSource(System.String,System.String,System.String,System.String,System.String)» .
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheAcquireCompleteEventArgs> CacheAcquireComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheAcquireCompleteEventArgs>`
## CacheAcquireProgress Event {#cacheacquireprogress}
Fired when the engine has progress acquiring the payload or container.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheAcquireProgressEventArgs> CacheAcquireProgress
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheAcquireProgressEventArgs>`
## CacheAcquireResolving Event {#cacheacquireresolving}
Fired by the engine to allow the BA to override the acquisition action.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheAcquireResolvingEventArgs> CacheAcquireResolving
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheAcquireResolvingEventArgs>`
## CacheBegin Event {#cachebegin}
Fired when the engine has begun caching the installation sources.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheBeginEventArgs> CacheBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheBeginEventArgs>`
## CacheComplete Event {#cachecomplete}
Fired after the engine has cached the installation sources.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheCompleteEventArgs> CacheComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheCompleteEventArgs>`
## CacheContainerOrPayloadVerifyBegin Event {#cachecontainerorpayloadverifybegin}
Fired when the engine begins the verification of the payload or container that was already in the package cache.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheContainerOrPayloadVerifyBeginEventArgs> CacheContainerOrPayloadVerifyBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheContainerOrPayloadVerifyBeginEventArgs>`
## CacheContainerOrPayloadVerifyComplete Event {#cachecontainerorpayloadverifycomplete}
Fired when the engine has completed the verification of the payload or container that was already in the package cache.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheContainerOrPayloadVerifyCompleteEventArgs> CacheContainerOrPayloadVerifyComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheContainerOrPayloadVerifyCompleteEventArgs>`
## CacheContainerOrPayloadVerifyProgress Event {#cachecontainerorpayloadverifyprogress}
Fired when the engine has progress verifying the payload or container that was already in the package cache.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheContainerOrPayloadVerifyProgressEventArgs> CacheContainerOrPayloadVerifyProgress
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheContainerOrPayloadVerifyProgressEventArgs>`
## CachePackageBegin Event {#cachepackagebegin}
Fired when the engine has begun caching a specific package.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CachePackageBeginEventArgs> CachePackageBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CachePackageBeginEventArgs>`
## CachePackageComplete Event {#cachepackagecomplete}
Fired when the engine has completed caching a specific package.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CachePackageCompleteEventArgs> CachePackageComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CachePackageCompleteEventArgs>`
## CachePackageNonVitalValidationFailure Event {#cachepackagenonvitalvalidationfailure}
Fired when the engine failed validating a package in the package cache that is non-vital to execution.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CachePackageNonVitalValidationFailureEventArgs> CachePackageNonVitalValidationFailure
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CachePackageNonVitalValidationFailureEventArgs>`
## CachePayloadExtractBegin Event {#cachepayloadextractbegin}
Fired when the engine begins the extraction of the payload from the container.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CachePayloadExtractBeginEventArgs> CachePayloadExtractBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CachePayloadExtractBeginEventArgs>`
## CachePayloadExtractComplete Event {#cachepayloadextractcomplete}
Fired when the engine has completed the extraction of the payload from the container.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CachePayloadExtractCompleteEventArgs> CachePayloadExtractComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CachePayloadExtractCompleteEventArgs>`
## CachePayloadExtractProgress Event {#cachepayloadextractprogress}
Fired when the engine has progress extracting the payload from the container.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CachePayloadExtractProgressEventArgs> CachePayloadExtractProgress
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CachePayloadExtractProgressEventArgs>`
## CacheVerifyBegin Event {#cacheverifybegin}
Fired when the engine begins the verification of the acquired payload or container.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheVerifyBeginEventArgs> CacheVerifyBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheVerifyBeginEventArgs>`
## CacheVerifyComplete Event {#cacheverifycomplete}
Fired when the engine has completed the verification of the acquired payload or container.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheVerifyCompleteEventArgs> CacheVerifyComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheVerifyCompleteEventArgs>`
## CacheVerifyProgress Event {#cacheverifyprogress}
Fired when the engine has progress verifying the payload or container.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CacheVerifyProgressEventArgs> CacheVerifyProgress
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CacheVerifyProgressEventArgs>`
## CommitMsiTransactionBegin Event {#commitmsitransactionbegin}
Fired when the engine is about to commit an MSI transaction.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CommitMsiTransactionBeginEventArgs> CommitMsiTransactionBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CommitMsiTransactionBeginEventArgs>`
## CommitMsiTransactionComplete Event {#commitmsitransactioncomplete}
Fired when the engine has completed comitting an MSI transaction.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.CommitMsiTransactionCompleteEventArgs> CommitMsiTransactionComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.CommitMsiTransactionCompleteEventArgs>`
## DetectBegin Event {#detectbegin}
Fired when the overall detection phase has begun.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectBeginEventArgs> DetectBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectBeginEventArgs>`
## DetectCompatibleMsiPackage Event {#detectcompatiblemsipackage}
Fired when a package was not detected but a package using the same provider key was.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectCompatibleMsiPackageEventArgs> DetectCompatibleMsiPackage
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectCompatibleMsiPackageEventArgs>`
## DetectComplete Event {#detectcomplete}
Fired when the detection phase has completed.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectCompleteEventArgs> DetectComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectCompleteEventArgs>`
## DetectForwardCompatibleBundle Event {#detectforwardcompatiblebundle}
Fired when a forward compatible bundle is detected.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectForwardCompatibleBundleEventArgs> DetectForwardCompatibleBundle
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectForwardCompatibleBundleEventArgs>`
## DetectMsiFeature Event {#detectmsifeature}
Fired when a feature in an MSI package has been detected.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectMsiFeatureEventArgs> DetectMsiFeature
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectMsiFeatureEventArgs>`
## DetectPackageBegin Event {#detectpackagebegin}
Fired when the detection for a specific package has begun.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectPackageBeginEventArgs> DetectPackageBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectPackageBeginEventArgs>`
## DetectPackageComplete Event {#detectpackagecomplete}
Fired when the detection for a specific package has completed.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectPackageCompleteEventArgs> DetectPackageComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectPackageCompleteEventArgs>`
## DetectPatchTarget Event {#detectpatchtarget}
Fired when the engine detects a target product for an MSP package.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectPatchTargetEventArgs> DetectPatchTarget
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectPatchTargetEventArgs>`
## DetectRelatedBundle Event {#detectrelatedbundle}
Fired when a related bundle has been detected for a bundle.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectRelatedBundleEventArgs> DetectRelatedBundle
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectRelatedBundleEventArgs>`
## DetectRelatedBundlePackage Event {#detectrelatedbundlepackage}
Fired when a related bundle has been detected for a bundle package.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectRelatedBundlePackageEventArgs> DetectRelatedBundlePackage
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectRelatedBundlePackageEventArgs>`
## DetectRelatedMsiPackage Event {#detectrelatedmsipackage}
Fired when a related MSI package has been detected for a package.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectRelatedMsiPackageEventArgs> DetectRelatedMsiPackage
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectRelatedMsiPackageEventArgs>`
## DetectUpdate Event {#detectupdate}
Fired when the update detection has found a potential update candidate.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectUpdateEventArgs> DetectUpdate
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectUpdateEventArgs>`
## DetectUpdateBegin Event {#detectupdatebegin}
Fired when the update detection phase has begun.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectUpdateBeginEventArgs> DetectUpdateBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectUpdateBeginEventArgs>`
## DetectUpdateComplete Event {#detectupdatecomplete}
Fired when the update detection phase has completed.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.DetectUpdateCompleteEventArgs> DetectUpdateComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.DetectUpdateCompleteEventArgs>`
## ElevateBegin Event {#elevatebegin}
Fired when the engine is about to start the elevated process.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ElevateBeginEventArgs> ElevateBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ElevateBeginEventArgs>`
## ElevateComplete Event {#elevatecomplete}
Fired when the engine has completed starting the elevated process.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ElevateCompleteEventArgs> ElevateComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ElevateCompleteEventArgs>`
## Error Event {#error}
Fired when the engine has encountered an error.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ErrorEventArgs> Error
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ErrorEventArgs>`
## ExecuteBegin Event {#executebegin}
Fired when the engine has begun installing packages.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ExecuteBeginEventArgs> ExecuteBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ExecuteBeginEventArgs>`
## ExecuteComplete Event {#executecomplete}
Fired when the engine has completed installing packages.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ExecuteCompleteEventArgs> ExecuteComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ExecuteCompleteEventArgs>`
## ExecuteFilesInUse Event {#executefilesinuse}
Fired when a package sends a files in use installation message.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ExecuteFilesInUseEventArgs> ExecuteFilesInUse
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ExecuteFilesInUseEventArgs>`
## ExecuteMsiMessage Event {#executemsimessage}
Fired when Windows Installer sends an installation message.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ExecuteMsiMessageEventArgs> ExecuteMsiMessage
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ExecuteMsiMessageEventArgs>`
## ExecutePackageBegin Event {#executepackagebegin}
Fired when the engine has begun installing a specific package.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ExecutePackageBeginEventArgs> ExecutePackageBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ExecutePackageBeginEventArgs>`
## ExecutePackageComplete Event {#executepackagecomplete}
Fired when the engine has completed installing a specific package.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ExecutePackageCompleteEventArgs> ExecutePackageComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ExecutePackageCompleteEventArgs>`
## ExecutePatchTarget Event {#executepatchtarget}
Fired when the engine executes one or more patches targeting a product.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ExecutePatchTargetEventArgs> ExecutePatchTarget
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ExecutePatchTargetEventArgs>`
## ExecuteProcessCancel Event {#executeprocesscancel}
Fired when a package that spawned a process is cancelled.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ExecuteProcessCancelEventArgs> ExecuteProcessCancel
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ExecuteProcessCancelEventArgs>`
## ExecuteProgress Event {#executeprogress}
Fired by the engine while executing a package.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ExecuteProgressEventArgs> ExecuteProgress
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ExecuteProgressEventArgs>`
## LaunchApprovedExeBegin Event {#launchapprovedexebegin}
Fired when the engine is about to launch the preapproved executable.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.LaunchApprovedExeBeginEventArgs> LaunchApprovedExeBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.LaunchApprovedExeBeginEventArgs>`
## LaunchApprovedExeComplete Event {#launchapprovedexecomplete}
Fired when the engine has completed launching the preapproved executable.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.LaunchApprovedExeCompleteEventArgs> LaunchApprovedExeComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.LaunchApprovedExeCompleteEventArgs>`
## PauseAutomaticUpdatesBegin Event {#pauseautomaticupdatesbegin}
Fired when the engine is about to pause Windows automatic updates.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PauseAutomaticUpdatesBeginEventArgs> PauseAutomaticUpdatesBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PauseAutomaticUpdatesBeginEventArgs>`
## PauseAutomaticUpdatesComplete Event {#pauseautomaticupdatescomplete}
Fired when the engine has completed pausing Windows automatic updates.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PauseAutomaticUpdatesCompleteEventArgs> PauseAutomaticUpdatesComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PauseAutomaticUpdatesCompleteEventArgs>`
## PlanBegin Event {#planbegin}
Fired when the engine has begun planning the installation.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanBeginEventArgs> PlanBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanBeginEventArgs>`
## PlanCompatibleMsiPackageBegin Event {#plancompatiblemsipackagebegin}
Fired when the engine plans a new, compatible package using the same provider key.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanCompatibleMsiPackageBeginEventArgs> PlanCompatibleMsiPackageBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanCompatibleMsiPackageBeginEventArgs>`
## PlanCompatibleMsiPackageComplete Event {#plancompatiblemsipackagecomplete}
Fired when the engine has completed planning the installation of a specific package.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanCompatibleMsiPackageCompleteEventArgs> PlanCompatibleMsiPackageComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanCompatibleMsiPackageCompleteEventArgs>`
## PlanComplete Event {#plancomplete}
Fired when the engine has completed planning the installation.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanCompleteEventArgs> PlanComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanCompleteEventArgs>`
## PlanForwardCompatibleBundle Event {#planforwardcompatiblebundle}
Fired when the engine is about to plan a forward compatible bundle.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanForwardCompatibleBundleEventArgs> PlanForwardCompatibleBundle
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanForwardCompatibleBundleEventArgs>`
## PlanMsiFeature Event {#planmsifeature}
Fired when the engine is about to plan a feature in an MSI package.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanMsiFeatureEventArgs> PlanMsiFeature
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanMsiFeatureEventArgs>`
## PlanMsiPackage Event {#planmsipackage}
Fired when the engine is planning an MSI or MSP package.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanMsiPackageEventArgs> PlanMsiPackage
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanMsiPackageEventArgs>`
## PlannedCompatiblePackage Event {#plannedcompatiblepackage}
Fired when the engine has completed planning a compatible package.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlannedCompatiblePackageEventArgs> PlannedCompatiblePackage
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlannedCompatiblePackageEventArgs>`
## PlannedPackage Event {#plannedpackage}
Fired when the engine has completed planning a package.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlannedPackageEventArgs> PlannedPackage
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlannedPackageEventArgs>`
## PlanPackageBegin Event {#planpackagebegin}
Fired when the engine has begun getting the BA's input for planning a package.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanPackageBeginEventArgs> PlanPackageBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanPackageBeginEventArgs>`
## PlanPackageComplete Event {#planpackagecomplete}
Fired when the engine has completed getting the BA's input for planning a package.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanPackageCompleteEventArgs> PlanPackageComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanPackageCompleteEventArgs>`
## PlanPatchTarget Event {#planpatchtarget}
Fired when the engine is about to plan a target of an MSP package.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanPatchTargetEventArgs> PlanPatchTarget
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanPatchTargetEventArgs>`
## PlanRelatedBundle Event {#planrelatedbundle}
Fired when the engine has begun planning for a related bundle.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanRelatedBundleEventArgs> PlanRelatedBundle
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanRelatedBundleEventArgs>`
## PlanRelatedBundleType Event {#planrelatedbundletype}
Fired when the engine has begun planning the related bundle relation type.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanRelatedBundleTypeEventArgs> PlanRelatedBundleType
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanRelatedBundleTypeEventArgs>`
## PlanRestoreRelatedBundle Event {#planrestorerelatedbundle}
Fired when the engine has begun planning an upgrade related bundle for restoring in case of failure.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanRestoreRelatedBundleEventArgs> PlanRestoreRelatedBundle
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanRestoreRelatedBundleEventArgs>`
## PlanRollbackBoundary Event {#planrollbackboundary}
Fired when the engine is planning a rollback boundary.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.PlanRollbackBoundaryEventArgs> PlanRollbackBoundary
```
### Value
`System.EventHandler<WixToolset.Mba.Core.PlanRollbackBoundaryEventArgs>`
## Progress Event {#progress}
Fired when the engine has changed progress for the bundle installation.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ProgressEventArgs> Progress
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ProgressEventArgs>`
## RegisterBegin Event {#registerbegin}
Fired when the engine has begun registering the location and visibility of the bundle.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.RegisterBeginEventArgs> RegisterBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.RegisterBeginEventArgs>`
## RegisterComplete Event {#registercomplete}
Fired when the engine has completed registering the location and visibility of the bundle.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.RegisterCompleteEventArgs> RegisterComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.RegisterCompleteEventArgs>`
## RollbackMsiTransactionBegin Event {#rollbackmsitransactionbegin}
Fired when the engine is about to rollback an MSI transaction.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.RollbackMsiTransactionBeginEventArgs> RollbackMsiTransactionBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.RollbackMsiTransactionBeginEventArgs>`
## RollbackMsiTransactionComplete Event {#rollbackmsitransactioncomplete}
Fired when the engine has completed rolling back an MSI transaction.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.RollbackMsiTransactionCompleteEventArgs> RollbackMsiTransactionComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.RollbackMsiTransactionCompleteEventArgs>`
## SetUpdateBegin Event {#setupdatebegin}
Fired when the engine has begun to setup the update package.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.SetUpdateBeginEventArgs> SetUpdateBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.SetUpdateBeginEventArgs>`
## SetUpdateComplete Event {#setupdatecomplete}
Fired when the engine has completed setting up the update package.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.SetUpdateCompleteEventArgs> SetUpdateComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.SetUpdateCompleteEventArgs>`
## Shutdown Event {#shutdown}
Fired when the engine is shutting down the bootstrapper application.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.ShutdownEventArgs> Shutdown
```
### Value
`System.EventHandler<WixToolset.Mba.Core.ShutdownEventArgs>`
## Startup Event {#startup}
Fired when the engine is starting up the bootstrapper application.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.StartupEventArgs> Startup
```
### Value
`System.EventHandler<WixToolset.Mba.Core.StartupEventArgs>`
## SystemRestorePointBegin Event {#systemrestorepointbegin}
Fired when the engine is about to take a system restore point.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.SystemRestorePointBeginEventArgs> SystemRestorePointBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.SystemRestorePointBeginEventArgs>`
## SystemRestorePointComplete Event {#systemrestorepointcomplete}
Fired when the engine has completed taking a system restore point.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.SystemRestorePointCompleteEventArgs> SystemRestorePointComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.SystemRestorePointCompleteEventArgs>`
## UnregisterBegin Event {#unregisterbegin}
Fired when the engine unregisters the bundle.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.UnregisterBeginEventArgs> UnregisterBegin
```
### Value
`System.EventHandler<WixToolset.Mba.Core.UnregisterBeginEventArgs>`
## UnregisterComplete Event {#unregistercomplete}
Fired when the engine unregistration is complete.
### Declaration
```cs
public System.EventHandler<WixToolset.Mba.Core.UnregisterCompleteEventArgs> UnregisterComplete
```
### Value
`System.EventHandler<WixToolset.Mba.Core.UnregisterCompleteEventArgs>`
