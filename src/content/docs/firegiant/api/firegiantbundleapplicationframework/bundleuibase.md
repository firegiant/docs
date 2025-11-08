---
title: BundleUIBase Class
pagefind: false
---
Base BundleUI that provides default implementation for IBundleUI.
## Methods
| Method | Description |
| ------ | ----------- |
| [CreateWindow()](#createwindow_nop) |  |
| [InitializeSynchronizationContext()](#initializesynchronizationcontext_nop) | Obsolete. Use CreateWindow() to return the desired synchronization context. |
| [OnCompleteCancel(bool, bool)](#oncompletecancel_bool_bool) | Callback when the bundle application is canceled. |
| [OnCompleteFailure(bool, int, bool)](#oncompletefailure_bool_int_bool) | Callback when the bundle application fails. |
| [OnCompleteSuccess(bool, bool)](#oncompletesuccess_bool_bool) | Callback when the bundle application succeeds. |
| [OnConditionFailure(BundleCondition, string)](#onconditionfailure_bundlecondition_string) | Callback when a condition fails. |
| [OnDowngradeAllowed(string, bool)](#ondowngradeallowed_string_bool) | Callback when a newer bundle is detected. |
| [OnError(BundleErrorType, string, int, string, int, BundleResult)](#onerror_bundleerrortype_string_int_string_int_bundleresult) | Callback when an overall bundle appliation error occurs. |
| [OnForceReboot(int, bool)](#onforcereboot_int_bool) | Callback when the Burn engine forces a restart. |
| [OnInitializeHelp()](#oninitializehelp_nop) | Callback before help will be started. |
| [OnInitializeInstall(bool)](#oninitializeinstall_bool) | Callback before install will be started. |
| [OnInitializeLayout()](#oninitializelayout_nop) | Callback before layout will be started. |
| [OnInitializeModify(bool)](#oninitializemodify_bool) | Callback before modify will be started. |
| [OnInitializeRepair(bool)](#oninitializerepair_bool) | Callback before repair will be started. |
| [OnInitializeUninstall(bool)](#oninitializeuninstall_bool) | Callback before uninstall will be started. |
| [OnMsiMessage(BundlePackage, BundleInstallMessage, string, int, string[], bool)](#onmsimessage_bundlepackage_bundleinstallmessage_string_int_string[]_bool) | Callback when Windows Installer send an message. |
| [OnPackageComplete(BundlePackage, BundleProgressAction, int)](#onpackagecomplete_bundlepackage_bundleprogressaction_int) | Callback when action on package is complete. |
| [OnPackageProgress(BundlePackageProgress)](#onpackageprogress_bundlepackageprogress) | Callback on overall package progress update. |
| [OnProgress(BundleOverallProgress)](#onprogress_bundleoverallprogress) | Callback on overall progress update. |
| [OnResolveSource(string, string, string[], BundleResolveSourceLocation)](#onresolvesource_string_string_string[]_bundleresolvesourcelocation) | Callback when payload or container cannot be located. |
| [OnSameVersionInstalled(string, string, bool, WixToolset.Versioning.WixVersion)](#onsameversioninstalled_string_string_bool_wixtoolsetversioningwixversion) | Callback when a bundle with the same is detected. |
| [OnStartHelp(bool)](#onstarthelp_bool) | Callback when help should be displayed. |
| [OnStartInstall(bool)](#onstartinstall_bool) | Callback when installation preparation should begin. |
| [OnStartLayout(bool)](#onstartlayout_bool) | Callback when layout preparation should begin. |
| [OnStartModify(bool)](#onstartmodify_bool) | Callback when modify preparation should begin. |
| [OnStartProgressInstall(bool)](#onstartprogressinstall_bool) | Callback when installation progress should begin. |
| [OnStartProgressLayout(bool)](#onstartprogresslayout_bool) | Callback when layout progress should begin. |
| [OnStartProgressModify(bool)](#onstartprogressmodify_bool) | Callback when modify progress should begin. |
| [OnStartProgressRepair(bool)](#onstartprogressrepair_bool) | Callback when repair progress should begin. |
| [OnStartProgressUninstall(bool)](#onstartprogressuninstall_bool) | Callback when uninstall progress should begin. |
| [OnStartProgressUpdateReplace(bool)](#onstartprogressupdatereplace_bool) | Callback when update progress should begin. |
| [OnStartRepair(bool)](#onstartrepair_bool) | Callback when repair preparation should begin. |
| [OnStartUninstall(bool)](#onstartuninstall_bool) | Callback when uninstall preparation should begin. |
| [OnStartUpdateReplace(bool)](#onstartupdatereplace_bool) | Callback when update preparation should begin. |
| [OnUpdateAvailable(string, string)](#onupdateavailable_string_string) | Callback to determine if update should be executed. |
| [PromptCancel()](#promptcancel_nop) |  |
| [Run()](#run_nop) |  |
| [Stop()](#stop_nop) |  |
| [UpdateCheckAllowed(string)](#updatecheckallowed_string) | Callback to determine whether update check can be attempted at updateLocation. |
## Properties
| Property | Description |
| ------ | ----------- |
| [WindowHandle](#windowhandle) | Obsolete. Use CreateWindow() to return the window handle. |

`FireGiant.BundleApplicationFramework v6.0.1`
## CreateWindow() Method {#createwindow_nop}

### Declaration
```cs
public BundleUIWindowContext CreateWindow()
```
## InitializeSynchronizationContext() Method {#initializesynchronizationcontext_nop}
Obsolete. Use CreateWindow() to return the desired synchronization context.
### Declaration
```cs
public System.Threading.SynchronizationContext InitializeSynchronizationContext()
```
### Return value
`System.Threading.SynchronizationContext` Synchronization context.
## OnCompleteCancel(bool restartRequired, bool fullUI) Method {#oncompletecancel_bool_bool}
Callback when the bundle application is canceled.
### Declaration
```cs
public void OnCompleteCancel(
  bool restartRequired,
  bool fullUI
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| restartRequired | bool | Indicates whether restart is required. |
| fullUI | bool | Indicates whether UI should be displayed. |
## OnCompleteFailure(bool restartRequired, int errorCode, bool fullUI) Method {#oncompletefailure_bool_int_bool}
Callback when the bundle application fails.
### Declaration
```cs
public void OnCompleteFailure(
  bool restartRequired,
  int errorCode,
  bool fullUI
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| restartRequired | bool | Indicates whether restart is required. |
| errorCode | int | Error code for the failure. |
| fullUI | bool | Indicates whether UI should be displayed. |
## OnCompleteSuccess(bool restartRequired, bool fullUI) Method {#oncompletesuccess_bool_bool}
Callback when the bundle application succeeds.
### Declaration
```cs
public void OnCompleteSuccess(
  bool restartRequired,
  bool fullUI
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| restartRequired | bool | Indicates whether restart is required. |
| fullUI | bool | Indicates whether UI should be displayed. |
## OnConditionFailure(BundleCondition condition, string message) Method {#onconditionfailure_bundlecondition_string}
Callback when a condition fails.
### Declaration
```cs
public bool OnConditionFailure(
  BundleCondition condition,
  string message
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| condition | BundleCondition | Failed condition. |
| message | string | Formatted message that can be displayed to the user. |
### Return value
`bool` False to fail the bundle application.
## OnDowngradeAllowed(string bundleId, bool perMachine) Method {#ondowngradeallowed_string_bool}
Callback when a newer bundle is detected.
### Declaration
```cs
public bool OnDowngradeAllowed(
  string bundleId,
  bool perMachine
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| bundleId | string | Id of the new bundle already installed. |
| perMachine | bool | Indicates wither the newer bundle is per-machine. |
### Return value
`bool` True if this bundle should downgrade the newer bundle.
### Remarks
Default value is false and will fail the installation. False is the recommended response.
## OnError(BundleErrorType type, string packageId, int code, string message, int uIHint, BundleResult recommendation) Method {#onerror_bundleerrortype_string_int_string_int_bundleresult}
Callback when an overall bundle appliation error occurs.
### Declaration
```cs
public BundleResult? OnError(
  BundleErrorType type,
  string packageId,
  int code,
  string message,
  int uIHint,
  BundleResult recommendation
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| type | BundleErrorType | Type of error. |
| packageId | string | Optional identifier of package involved in the error. |
| code | int | Error code. |
| message | string | Error message. |
| uIHint | int | Flags for use if displaying a message box. |
| recommendation | BundleResult | Result recommended by the bundle application for this class of error. |
## OnForceReboot(int status, bool fullUI) Method {#onforcereboot_int_bool}
Callback when the Burn engine forces a restart.
### Declaration
```cs
public bool OnForceReboot(
  int status,
  bool fullUI
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| status | int | Error code before the force restart. |
| fullUI | bool | Indicates whether UI should be displayed. |
## OnInitializeHelp() Method {#oninitializehelp_nop}
Callback before help will be started.
### Declaration
```cs
public void OnInitializeHelp()
```
## OnInitializeInstall(bool fullUI) Method {#oninitializeinstall_bool}
Callback before install will be started.
### Declaration
```cs
public void OnInitializeInstall(
  bool fullUI
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fullUI | bool | Indicates whether UI should be displayed. |
## OnInitializeLayout() Method {#oninitializelayout_nop}
Callback before layout will be started.
### Declaration
```cs
public void OnInitializeLayout()
```
## OnInitializeModify(bool fullUI) Method {#oninitializemodify_bool}
Callback before modify will be started.
### Declaration
```cs
public void OnInitializeModify(
  bool fullUI
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fullUI | bool | Indicates whether UI should be displayed. |
## OnInitializeRepair(bool fullUI) Method {#oninitializerepair_bool}
Callback before repair will be started.
### Declaration
```cs
public void OnInitializeRepair(
  bool fullUI
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fullUI | bool | Indicates whether UI should be displayed. |
## OnInitializeUninstall(bool fullUI) Method {#oninitializeuninstall_bool}
Callback before uninstall will be started.
### Declaration
```cs
public void OnInitializeUninstall(
  bool fullUI
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fullUI | bool | Indicates whether UI should be displayed. |
## OnMsiMessage(BundlePackage package, BundleInstallMessage messageType, string message, int displayParameters, string[] data, bool fullUI) Method {#onmsimessage_bundlepackage_bundleinstallmessage_string_int_string[]_bool}
Callback when Windows Installer send an message.
### Declaration
```cs
public BundleResult? OnMsiMessage(
  BundlePackage package,
  BundleInstallMessage messageType,
  string message,
  int displayParameters,
  string[] data,
  bool fullUI
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| package | BundlePackage | MSI package that sent the message. |
| messageType | BundleInstallMessage | Type of message from the Windows Installer. |
| message | string | Formatted message from the Windows Installer |
| displayParameters | int | Flags for use if displaying a message box. |
| data | string[] | Optional data specific to the message provided by the Windows Installer. |
| fullUI | bool | Indicates whether UI should be displayed. |
### Return value
`BundleResult?` Result of the message handling.
## OnPackageComplete(BundlePackage package, BundleProgressAction action, int errorCode) Method {#onpackagecomplete_bundlepackage_bundleprogressaction_int}
Callback when action on package is complete.
### Declaration
```cs
public void OnPackageComplete(
  BundlePackage package,
  BundleProgressAction action,
  int errorCode
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| package | BundlePackage | Package completed. |
| action | BundleProgressAction | Action completed. |
| errorCode | int | Error encountered during action. 0 indicates success. |
## OnPackageProgress(BundlePackageProgress packageProgress) Method {#onpackageprogress_bundlepackageprogress}
Callback on overall package progress update.
### Declaration
```cs
public void OnPackageProgress(
  BundlePackageProgress packageProgress
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| packageProgress | BundlePackageProgress | Overall progress. |
## OnProgress(BundleOverallProgress progress) Method {#onprogress_bundleoverallprogress}
Callback on overall progress update.
### Declaration
```cs
public void OnProgress(
  BundleOverallProgress progress
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| progress | BundleOverallProgress | Overall progress. |
## OnResolveSource(string packageOrContainerId, string payloadId, string[] sources, BundleResolveSourceLocation locations) Method {#onresolvesource_string_string_string[]_bundleresolvesourcelocation}
Callback when payload or container cannot be located.
### Declaration
```cs
public bool OnResolveSource(
  string packageOrContainerId,
  string payloadId,
  string[] sources,
  BundleResolveSourceLocation locations
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| packageOrContainerId | string | Package or container identifier for payload that cannot be found. |
| payloadId | string | Payload that cannot be found. |
| sources | string[] | Paths where payload was not found. |
| locations | BundleResolveSourceLocation | New resource source locations to find the payload. |
### Return value
`bool` True to retry with new locations, otherwise false to fail the installation.
## OnSameVersionInstalled(string bundleId, string bundleTag, bool perMachine, WixToolset.Versioning.WixVersion version) Method {#onsameversioninstalled_string_string_bool_wixtoolsetversioningwixversion}
Callback when a bundle with the same is detected.
### Declaration
```cs
public BundleSameVersionAction OnSameVersionInstalled(
  string bundleId,
  string bundleTag,
  bool perMachine,
  WixToolset.Versioning.WixVersion version
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| bundleId | string | Id of the already installed bundle. |
| bundleTag | string | Tag of the already installed bundle. |
| perMachine | bool | Indicates wither the newer bundle is per-machine. |
| version | WixToolset.Versioning.WixVersion | Version of the already installed bundle. |
### Return value
`BundleSameVersionAction` Action to handle same version.
### Remarks
Default value is to fail the install.
## OnStartHelp(bool fullUI) Method {#onstarthelp_bool}
Callback when help should be displayed.
### Declaration
```cs
public bool OnStartHelp(
  bool fullUI
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fullUI | bool | Indicates whether UI should be displayed. |
### Return value
`bool` True if the BundleUI handles the callback, otherwise bootstrapper application will exit.
## OnStartInstall(bool fullUI) Method {#onstartinstall_bool}
Callback when installation preparation should begin.
### Declaration
```cs
public bool OnStartInstall(
  bool fullUI
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fullUI | bool | Indicates whether UI should be displayed. |
### Return value
`bool` True if the BundleUI handles the callback, otherwise bootstrapper application will continue on to progress phase.
## OnStartLayout(bool fullUI) Method {#onstartlayout_bool}
Callback when layout preparation should begin.
### Declaration
```cs
public bool OnStartLayout(
  bool fullUI
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fullUI | bool | Indicates whether UI should be displayed. |
### Return value
`bool` True if the BundleUI handles the callback, otherwise bootstrapper application will continue on to progress phase.
## OnStartModify(bool fullUI) Method {#onstartmodify_bool}
Callback when modify preparation should begin.
### Declaration
```cs
public bool OnStartModify(
  bool fullUI
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fullUI | bool | Indicates whether UI should be displayed. |
### Return value
`bool` True if the BundleUI handles the callback, otherwise bootstrapper application will continue on to progress phase.
## OnStartProgressInstall(bool showUI) Method {#onstartprogressinstall_bool}
Callback when installation progress should begin.
### Declaration
```cs
public void OnStartProgressInstall(
  bool showUI
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| showUI | bool | Indicates whether UI should be displayed. |
## OnStartProgressLayout(bool showUI) Method {#onstartprogresslayout_bool}
Callback when layout progress should begin.
### Declaration
```cs
public void OnStartProgressLayout(
  bool showUI
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| showUI | bool | Indicates whether UI should be displayed. |
## OnStartProgressModify(bool showUI) Method {#onstartprogressmodify_bool}
Callback when modify progress should begin.
### Declaration
```cs
public void OnStartProgressModify(
  bool showUI
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| showUI | bool | Indicates whether UI should be displayed. |
## OnStartProgressRepair(bool showUI) Method {#onstartprogressrepair_bool}
Callback when repair progress should begin.
### Declaration
```cs
public void OnStartProgressRepair(
  bool showUI
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| showUI | bool | Indicates whether UI should be displayed. |
## OnStartProgressUninstall(bool showUI) Method {#onstartprogressuninstall_bool}
Callback when uninstall progress should begin.
### Declaration
```cs
public void OnStartProgressUninstall(
  bool showUI
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| showUI | bool | Indicates whether UI should be displayed. |
## OnStartProgressUpdateReplace(bool showUI) Method {#onstartprogressupdatereplace_bool}
Callback when update progress should begin.
### Declaration
```cs
public void OnStartProgressUpdateReplace(
  bool showUI
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| showUI | bool | Indicates whether UI should be displayed. |
## OnStartRepair(bool fullUI) Method {#onstartrepair_bool}
Callback when repair preparation should begin.
### Declaration
```cs
public bool OnStartRepair(
  bool fullUI
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fullUI | bool | Indicates whether UI should be displayed. |
### Return value
`bool` True if the BundleUI handles the callback, otherwise bootstrapper application will continue on to progress phase.
## OnStartUninstall(bool fullUI) Method {#onstartuninstall_bool}
Callback when uninstall preparation should begin.
### Declaration
```cs
public bool OnStartUninstall(
  bool fullUI
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fullUI | bool | Indicates whether UI should be displayed. |
### Return value
`bool` True if the BundleUI handles the callback, otherwise bootstrapper application will continue on to progress phase.
## OnStartUpdateReplace(bool fullUI) Method {#onstartupdatereplace_bool}
Callback when update preparation should begin.
### Declaration
```cs
public bool OnStartUpdateReplace(
  bool fullUI
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fullUI | bool | Indicates whether UI should be displayed. |
### Return value
`bool` True if the BundleUI handles the callback, otherwise bootstrapper application will continue on to progress phase.
## OnUpdateAvailable(string updateLocation, string title) Method {#onupdateavailable_string_string}
Callback to determine if update should be executed.
### Declaration
```cs
public bool OnUpdateAvailable(
  string updateLocation,
  string title
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| updateLocation | string | Location where update was found. |
| title | string | Title of found update. |
### Return value
`bool` True if update should be executed.
## PromptCancel() Method {#promptcancel_nop}

### Declaration
```cs
public bool PromptCancel()
```
## Run() Method {#run_nop}

### Declaration
```cs
public void Run()
```
## Stop() Method {#stop_nop}

### Declaration
```cs
public void Stop()
```
## UpdateCheckAllowed(string updateLocation) Method {#updatecheckallowed_string}
Callback to determine whether update check can be attempted at updateLocation.
### Declaration
```cs
public bool UpdateCheckAllowed(
  string updateLocation
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| updateLocation | string | Location to check for updates. |
### Return value
`bool` True to allow check for update.
## WindowHandle Property {#windowhandle}
Obsolete. Use CreateWindow() to return the window handle.
### Declaration
```cs
public object WindowHandle { get; set; } 
```
