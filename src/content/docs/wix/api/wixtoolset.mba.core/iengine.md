---
title: IEngine Interface
---
High level abstraction over the «see T:WixToolset.Mba.Core.IBootstrapperEngine» interface.
## Methods
| Method | Description |
| ------ | ----------- |
| [Apply(hwndParent)](#apply_hwndparent) | Install the packages. |
| [CloseSplashScreen()](#closesplashscreen_nop) | Close the splash screen if it is still open. Does nothing if the splash screen is not or never was opened. |
| [CompareVersions()](#compareversions_nop) |  |
| [ContainsVariable(name)](#containsvariable_name) | Checks if a variable exists in the engine. |
| [Detect()](#detect_nop) | Determine if all installation conditions are fulfilled. |
| [Detect(hwndParent)](#detect_hwndparent) | Determine if all installation conditions are fulfilled. |
| [Elevate(hwndParent)](#elevate_hwndparent) | Elevate the install. |
| [EscapeString(input)](#escapestring_input) | Escapes the input string. |
| [EvaluateCondition(condition)](#evaluatecondition_condition) | Evaluates the _condition_ string. |
| [FormatString(format)](#formatstring_format) | Formats the input string. |
| [GetRelatedBundleVariable(bundleId, name)](#getrelatedbundlevariable_bundleid_name) | Gets persisted variables from a related bundle. |
| [GetVariableNumeric(name)](#getvariablenumeric_name) | Gets numeric variables for the engine. |
| [GetVariableSecureString(name)](#getvariablesecurestring_name) | Gets string variables for the engine using SecureStrings. |
| [GetVariableString(name)](#getvariablestring_name) | Gets string variables for the engine. |
| [GetVariableVersion(name)](#getvariableversion_name) | Gets «see T:System.Version» variables for the engine. |
| [LaunchApprovedExe(hwndParent, approvedExeForElevationId, arguments)](#launchapprovedexe_hwndparent_approvedexeforelevationid_arguments) | Launches a preapproved executable elevated. As long as the engine already elevated, there will be no UAC prompt. |
| [LaunchApprovedExe(hwndParent, approvedExeForElevationId, arguments, waitForInputIdleTimeout)](#launchapprovedexe_hwndparent_approvedexeforelevationid_arguments_waitforinputidletimeout) | Launches a preapproved executable elevated. As long as the engine already elevated, there will be no UAC prompt. |
| [Log(level, message)](#log_level_message) | Logs the _message_ . |
| [Plan(action)](#plan_action) | Determine the installation sequencing and costing. |
| [Quit(exitCode)](#quit_exitcode) | Shuts down the engine. |
| [SendEmbeddedError(errorCode, message, uiHint)](#sendembeddederror_errorcode_message_uihint) | Sends error message when embedded. |
| [SendEmbeddedProgress(progressPercentage, overallPercentage)](#sendembeddedprogress_progresspercentage_overallpercentage) | Sends progress percentages when embedded. |
| [SetDownloadSource(packageOrContainerId, payloadId, url, user, password)](#setdownloadsource_packageorcontainerid_payloadid_url_user_password) | Set the new download URL for a package or container. |
| [SetLocalSource(packageOrContainerId, payloadId, path)](#setlocalsource_packageorcontainerid_payloadid_path) | Set the local source for a package or container. |
| [SetUpdate(localSource, downloadSource, size, hashType, hash)](#setupdate_localsource_downloadsource_size_hashtype_hash) | Set the update information for a bundle. |
| [SetUpdateSource(url)](#setupdatesource_url) | Sets the URL to the update feed. |
| [SetVariableNumeric(name, value)](#setvariablenumeric_name_value) | Sets numeric variables for the engine. |
| [SetVariableString(name, value, formatted)](#setvariablestring_name_value_formatted) | Sets string variables for the engine using SecureStrings. |
| [SetVariableString(name, value, formatted)](#setvariablestring_name_value_formatted) | Sets string variables for the engine. |
| [SetVariableVersion(name, value)](#setvariableversion_name_value) | Sets version variables for the engine. |
## Properties
| Property | Description |
| ------ | ----------- |
| [PackageCount](#packagecount) | Gets the number of packages in the bundle. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## Apply(hwndParent) Method {#apply_hwndparent}
Install the packages.
### Declaration
```cs
public void Apply(
  IntPtr hwndParent
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| hwndParent | IntPtr | The parent window for the installation user interface. |
## CloseSplashScreen() Method {#closesplashscreen_nop}
Close the splash screen if it is still open. Does nothing if the splash screen is not or never was opened.
### Declaration
```cs
public void CloseSplashScreen()
```
## CompareVersions() Method {#compareversions_nop}

### Declaration
```cs
public int CompareVersions()
```
### Return value
`int` 0 if equal, 1 if version1 {'>'} version2, -1 if version1 {'<'} version2
## ContainsVariable(name) Method {#containsvariable_name}
Checks if a variable exists in the engine.
### Declaration
```cs
public bool ContainsVariable(
  string name
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | string | The name of the variable. |
### Return value
`bool` Whether the variable exists.
## Detect() Method {#detect_nop}
Determine if all installation conditions are fulfilled.
### Declaration
```cs
public void Detect()
```
## Detect(hwndParent) Method {#detect_hwndparent}
Determine if all installation conditions are fulfilled.
### Declaration
```cs
public void Detect(
  IntPtr hwndParent
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| hwndParent | IntPtr | The parent window for the installation user interface. |
## Elevate(hwndParent) Method {#elevate_hwndparent}
Elevate the install.
### Declaration
```cs
public bool Elevate(
  IntPtr hwndParent
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| hwndParent | IntPtr | The parent window of the elevation dialog. |
### Return value
`bool` true if elevation succeeded; otherwise, false if the user cancelled.
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ComponentModel.Win32Exception | A Win32 error occurred. |
## EscapeString(input) Method {#escapestring_input}
Escapes the input string.
### Declaration
```cs
public string EscapeString(
  string input
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| input | string | The string to escape. |
### Return value
`string` The escaped string.
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ComponentModel.Win32Exception | A Win32 error occurred. |
## EvaluateCondition(condition) Method {#evaluatecondition_condition}
Evaluates the _condition_ string.
### Declaration
```cs
public bool EvaluateCondition(
  string condition
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| condition | string | The string representing the condition to evaluate. |
### Return value
`bool` Whether the condition evaluated to true or false.
## FormatString(format) Method {#formatstring_format}
Formats the input string.
### Declaration
```cs
public string FormatString(
  string format
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| format | string | The string to format. |
### Return value
`string` The formatted string.
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ComponentModel.Win32Exception | A Win32 error occurred. |
## GetRelatedBundleVariable(bundleId, name) Method {#getrelatedbundlevariable_bundleid_name}
Gets persisted variables from a related bundle.
### Declaration
```cs
public string GetRelatedBundleVariable(
  string bundleId,
  string name
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| bundleId | string | The BundleId of the related bundle. |
| name | string | The name of the variable. |
## GetVariableNumeric(name) Method {#getvariablenumeric_name}
Gets numeric variables for the engine.
### Declaration
```cs
public System.Int64 GetVariableNumeric(
  string name
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | string | The name of the variable. |
## GetVariableSecureString(name) Method {#getvariablesecurestring_name}
Gets string variables for the engine using SecureStrings.
### Declaration
```cs
public System.Security.SecureString GetVariableSecureString(
  string name
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | string | The name of the variable. |
## GetVariableString(name) Method {#getvariablestring_name}
Gets string variables for the engine.
### Declaration
```cs
public string GetVariableString(
  string name
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | string | The name of the variable. |
## GetVariableVersion(name) Method {#getvariableversion_name}
Gets «see T:System.Version» variables for the engine.
### Declaration
```cs
public string GetVariableVersion(
  string name
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | string | The name of the variable. |
## LaunchApprovedExe(hwndParent, approvedExeForElevationId, arguments) Method {#launchapprovedexe_hwndparent_approvedexeforelevationid_arguments}
Launches a preapproved executable elevated. As long as the engine already elevated, there will be no UAC prompt.
### Declaration
```cs
public void LaunchApprovedExe(
  IntPtr hwndParent,
  string approvedExeForElevationId,
  string arguments
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| hwndParent | IntPtr | The parent window of the elevation dialog (if the engine hasn't elevated yet). |
| approvedExeForElevationId | string | Id of the ApprovedExeForElevation element specified when the bundle was authored. |
| arguments | string | Optional arguments. |
## LaunchApprovedExe(hwndParent, approvedExeForElevationId, arguments, waitForInputIdleTimeout) Method {#launchapprovedexe_hwndparent_approvedexeforelevationid_arguments_waitforinputidletimeout}
Launches a preapproved executable elevated. As long as the engine already elevated, there will be no UAC prompt.
### Declaration
```cs
public void LaunchApprovedExe(
  IntPtr hwndParent,
  string approvedExeForElevationId,
  string arguments,
  int waitForInputIdleTimeout
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| hwndParent | IntPtr | The parent window of the elevation dialog (if the engine hasn't elevated yet). |
| approvedExeForElevationId | string | Id of the ApprovedExeForElevation element specified when the bundle was authored. |
| arguments | string | Optional arguments. |
| waitForInputIdleTimeout | int | Timeout in milliseconds. When set to something other than zero, the engine will call WaitForInputIdle for the new process with this timeout before calling OnLaunchApprovedExeComplete. |
## Log(level, message) Method {#log_level_message}
Logs the _message_ .
### Declaration
```cs
public void Log(
  LogLevel level,
  string message
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| level | LogLevel | The logging level. |
| message | string | The message to log. |
## Plan(action) Method {#plan_action}
Determine the installation sequencing and costing.
### Declaration
```cs
public void Plan(
  LaunchAction action
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| action | LaunchAction | The action to perform when planning. |
## Quit(exitCode) Method {#quit_exitcode}
Shuts down the engine.
### Declaration
```cs
public void Quit(
  int exitCode
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| exitCode | int | Exit code indicating reason for shut down. |
## SendEmbeddedError(errorCode, message, uiHint) Method {#sendembeddederror_errorcode_message_uihint}
Sends error message when embedded.
### Declaration
```cs
public int SendEmbeddedError(
  int errorCode,
  string message,
  int uiHint
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| errorCode | int | Error code. |
| message | string | Error message. |
| uiHint | int | UI buttons to show on error dialog. |
## SendEmbeddedProgress(progressPercentage, overallPercentage) Method {#sendembeddedprogress_progresspercentage_overallpercentage}
Sends progress percentages when embedded.
### Declaration
```cs
public int SendEmbeddedProgress(
  int progressPercentage,
  int overallPercentage
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| progressPercentage | int | Percentage completed thus far. |
| overallPercentage | int | Overall percentage completed. |
## SetDownloadSource(packageOrContainerId, payloadId, url, user, password) Method {#setdownloadsource_packageorcontainerid_payloadid_url_user_password}
Set the new download URL for a package or container.
### Declaration
```cs
public void SetDownloadSource(
  string packageOrContainerId,
  string payloadId,
  string url,
  string user,
  string password
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| packageOrContainerId | string | The id that uniquely identifies the package or container. |
| payloadId | string | The id that uniquely identifies the payload. |
| url | string | The new url. |
| user | string | The user name for proxy authentication. |
| password | string | The password for proxy authentication. |
## SetLocalSource(packageOrContainerId, payloadId, path) Method {#setlocalsource_packageorcontainerid_payloadid_path}
Set the local source for a package or container.
### Declaration
```cs
public void SetLocalSource(
  string packageOrContainerId,
  string payloadId,
  string path
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| packageOrContainerId | string | The id that uniquely identifies the package or container. |
| payloadId | string | The id that uniquely identifies the payload. |
| path | string | The new source path. |
## SetUpdate(localSource, downloadSource, size, hashType, hash) Method {#setupdate_localsource_downloadsource_size_hashtype_hash}
Set the update information for a bundle.
### Declaration
```cs
public void SetUpdate(
  string localSource,
  string downloadSource,
  System.Int64 size,
  UpdateHashType hashType,
  string hash
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| localSource | string | Optional local source path for the update. Default is "update\[OriginalNameOfBundle].exe". |
| downloadSource | string | Optional download source for the update. |
| size | System.Int64 | Size of the expected update. |
| hashType | UpdateHashType | Type of the hash expected on the update. |
| hash | string | Optional hash expected for the update. |
## SetUpdateSource(url) Method {#setupdatesource_url}
Sets the URL to the update feed.
### Declaration
```cs
public void SetUpdateSource(
  string url
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| url | string | URL of the update feed. |
## SetVariableNumeric(name, value) Method {#setvariablenumeric_name_value}
Sets numeric variables for the engine.
### Declaration
```cs
public void SetVariableNumeric(
  string name,
  System.Int64 value
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | string | The name of the variable. |
| value | System.Int64 | The value to set. |
## SetVariableString(name, value, formatted) Method {#setvariablestring_name_value_formatted}
Sets string variables for the engine using SecureStrings.
### Declaration
```cs
public void SetVariableString(
  string name,
  System.Security.SecureString value,
  bool formatted
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | string | The name of the variable. |
| value | System.Security.SecureString | The value to set. |
| formatted | bool | False if the value is a literal string. |
## SetVariableString(name, value, formatted) Method {#setvariablestring_name_value_formatted}
Sets string variables for the engine.
### Declaration
```cs
public void SetVariableString(
  string name,
  string value,
  bool formatted
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | string | The name of the variable. |
| value | string | The value to set. |
| formatted | bool | False if the value is a literal string. |
## SetVariableVersion(name, value) Method {#setvariableversion_name_value}
Sets version variables for the engine.
### Declaration
```cs
public void SetVariableVersion(
  string name,
  string value
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | string | The name of the variable. |
| value | string | The value to set. |
## PackageCount Property {#packagecount}
Gets the number of packages in the bundle.
### Declaration
```cs
public int PackageCount { get; set; }
```
