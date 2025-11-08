---
title: IBundleApplication Interface
pagefind: false
---
Bundle application provided to support the BundleUI.
## Methods
| Method | Description |
| ------ | ----------- |
| [Cancel()](#cancel_nop) | Sets the bundle application to be canceled. |
| [CheckCanceled()](#checkcanceled_nop) | Check to see if the bundle application has been canceled. |
| [CheckFailed()](#checkfailed_nop) | Check to see if the bundle application is in an error state. |
| [CloseSplashScreen()](#closesplashscreen_nop) | Directs the Burn engine to dismiss the splash screen. |
| [DetectAgain()](#detectagain_nop) | Requests the Burn engine re-execute detection after UIReady() was already called. |
| [DisallowRestart()](#disallowrestart_nop) | Directs the Burn engine to best-effort prevent restarts. |
| [Error(int)](#error_int) | Sets the bundle error state. |
| [EvaluateCondition(string)](#evaluatecondition_string) | Request the Burn engine evalute a condition. |
| [FormatString(string)](#formatstring_string) | Request the Burn engine to resolve a string with variable references ("[VARNAME]"). |
| [GetBundleLogPath()](#getbundlelogpath_nop) | Get the path to the bundle log file. |
| [GetCommandLineArguments()](#getcommandlinearguments_nop) | Returns the bundle command-line arguments. |
| [GetManifest()](#getmanifest_nop) | Returns the bundle manifest. |
| [GetNumericVariable(string)](#getnumericvariable_string) | Gets a numeric variable. |
| [GetPackage(int)](#getpackage_int) | Gets a package by index. |
| [GetPackage(string)](#getpackage_string) | Gets a package by identity. |
| [GetStringVariable(string)](#getstringvariable_string) | Gets a string variable. |
| [GetVersionVariable(string)](#getversionvariable_string) | Gets a version variable. |
| [Go()](#go_nop) | Directs the bundle application to plan with the default PlanAction. |
| [GoWithAction(BundleAction)](#gowithaction_bundleaction) | Directs the bundle applicaiton to plan a specific action. |
| [LogError(int, string, string[])](#logerror_int_string_string[]) | Log an error message to the bundle's log file. |
| [LogMessage(string, string[])](#logmessage_string_string[]) | Log a message to the bundle's log file. |
| [ParseCommandLine()](#parsecommandline_nop) | Parse the bundle command-line for the pattern VARNAME=VALUE to assign variables. |
| [PromptCancel(string, string)](#promptcancel_string_string) | Prompts the user to cancel with a specific cancel message. |
| [SendCancelPrompt()](#sendcancelprompt_nop) | Requests the bundle application to prompt for cancel. |
| [SendEmbeddedError(int, string, int)](#sendembeddederror_int_string_int) | Send message to parent bundle when embedded. |
| [SetPlanFeatureRequestState(string, string, BundleFeatureState)](#setplanfeaturerequeststate_string_string_bundlefeaturestate) | Sets the requested state for a package's feature. Must be called before calling Go() or GoWithAction(). |
| [SetPlanPackageRequestState(string, BundleRequestState)](#setplanpackagerequeststate_string_bundlerequeststate) | Sets the requested state for a package. Must be called before calling Go() or GoWithAction(). |
| [SetVariable(string, string)](#setvariable_string_string) | Sets a string variable. |
| [SetVariable(string, long)](#setvariable_string_long) | Sets a numeric variable. |
| [SetVersionVariable(string, string)](#setversionvariable_string_string) | Sets a version variable. |
| [UIReady()](#uiready_nop) | Obsolete. This method is unused. |
## Properties
| Property | Description |
| ------ | ----------- |
| [AllowRestart](#allowrestart) | Indicates whether restarts are allowed. |
| [PackageCount](#packagecount) | Count of packages in the bundle. |
| [Packages](#packages) | Enumerates the packages in the bundle. |
| [PlanAction](#planaction) | The default plan action set via the bundle command-line. |
| [RestartRequired](#restartrequired) | Indicates whether a restart was required. |
| [ResumeType](#resumetype) | Resume type of the bundle. |
| [RollingBack](#rollingback) | Indicates if the bundle application is rolling back. |

`FireGiant.BundleApplicationFramework v6.0.1`
## Cancel() Method {#cancel_nop}
Sets the bundle application to be canceled.
### Declaration
```cs
public void Cancel()
```
## CheckCanceled() Method {#checkcanceled_nop}
Check to see if the bundle application has been canceled.
### Declaration
```cs
public bool CheckCanceled()
```
### Return value
`bool` True if the bundle application was canceled.
## CheckFailed() Method {#checkfailed_nop}
Check to see if the bundle application is in an error state.
### Declaration
```cs
public bool CheckFailed()
```
### Return value
`bool` True if the bundle application is in an error state.
## CloseSplashScreen() Method {#closesplashscreen_nop}
Directs the Burn engine to dismiss the splash screen.
### Declaration
```cs
public void CloseSplashScreen()
```
## DetectAgain() Method {#detectagain_nop}
Requests the Burn engine re-execute detection after UIReady() was already called.
### Declaration
```cs
public void DetectAgain()
```
## DisallowRestart() Method {#disallowrestart_nop}
Directs the Burn engine to best-effort prevent restarts.
### Declaration
```cs
public void DisallowRestart()
```
## Error(int errorCode) Method {#error_int}
Sets the bundle error state.
### Declaration
```cs
public bool Error(
  int errorCode
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| errorCode | int | Error code to set. |
### Return value
`bool` True if the bundle is in an error state.
## EvaluateCondition(string condition) Method {#evaluatecondition_string}
Request the Burn engine evalute a condition.
### Declaration
```cs
public bool EvaluateCondition(
  string condition
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| condition | string | Condition to evaluate. |
### Return value
`bool` Evaluation of condition.
## FormatString(string format) Method {#formatstring_string}
Request the Burn engine to resolve a string with variable references ("[VARNAME]").
### Declaration
```cs
public string FormatString(
  string format
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| format | string | String with variable references to resolve. |
### Return value
`string` Formatted string.
## GetBundleLogPath() Method {#getbundlelogpath_nop}
Get the path to the bundle log file.
### Declaration
```cs
public string GetBundleLogPath()
```
## GetCommandLineArguments() Method {#getcommandlinearguments_nop}
Returns the bundle command-line arguments.
### Declaration
```cs
public string[] GetCommandLineArguments()
```
### Return value
`string[]` Array of command-line arguments.
## GetManifest() Method {#getmanifest_nop}
Returns the bundle manifest.
### Declaration
```cs
public System.Xml.Linq.XDocument GetManifest()
```
### Return value
`System.Xml.Linq.XDocument` XML document containing the bundle manifest.
## GetNumericVariable(string name) Method {#getnumericvariable_string}
Gets a numeric variable.
### Declaration
```cs
public long? GetNumericVariable(
  string name
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | string | Name of variable to retrieve. |
### Return value
`long?` Long or null if the variable is not defined.
## GetPackage(int index) Method {#getpackage_int}
Gets a package by index.
### Declaration
```cs
public BundlePackage GetPackage(
  int index
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| index | int | Index of package to retrieve. |
### Return value
`BundlePackage` Bundle package.
## GetPackage(string id) Method {#getpackage_string}
Gets a package by identity.
### Declaration
```cs
public BundlePackage GetPackage(
  string id
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| id | string | Identity of package to retrieve. |
### Return value
`BundlePackage` Bundle package.
## GetStringVariable(string name) Method {#getstringvariable_string}
Gets a string variable.
### Declaration
```cs
public string GetStringVariable(
  string name
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | string | Name of variable to retrieve. |
### Return value
`string` String or null if the variable is not defined.
## GetVersionVariable(string name) Method {#getversionvariable_string}
Gets a version variable.
### Declaration
```cs
public string GetVersionVariable(
  string name
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | string | Name of variable to retrieve. |
### Return value
`string` Version or null if the variable is not defined.
## Go() Method {#go_nop}
Directs the bundle application to plan with the default PlanAction.
### Declaration
```cs
public void Go()
```
## GoWithAction(BundleAction action) Method {#gowithaction_bundleaction}
Directs the bundle applicaiton to plan a specific action.
### Declaration
```cs
public void GoWithAction(
  BundleAction action
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| action | BundleAction |  |
## LogError(int errorCode, string format, string[] args) Method {#logerror_int_string_string[]}
Log an error message to the bundle's log file.
### Declaration
```cs
public void LogError(
  int errorCode,
  string format,
  string[] args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| errorCode | int | Error code for the message |
| format | string | Format string for the message. |
| args | string[] | Data to provide to the format. |
## LogMessage(string format, string[] args) Method {#logmessage_string_string[]}
Log a message to the bundle's log file.
### Declaration
```cs
public void LogMessage(
  string format,
  string[] args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| format | string | Format string for the message. |
| args | string[] | Data to provide to the format. |
## ParseCommandLine() Method {#parsecommandline_nop}
Parse the bundle command-line for the pattern VARNAME=VALUE to assign variables.
### Declaration
```cs
public void ParseCommandLine()
```
## PromptCancel(string message, string caption) Method {#promptcancel_string_string}
Prompts the user to cancel with a specific cancel message.
### Declaration
```cs
public bool PromptCancel(
  string message,
  string caption
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| message | string | Message to display. |
| caption | string | Caption of the cancel prompt. |
### Return value
`bool` True if the user chose to cancel.
## SendCancelPrompt() Method {#sendcancelprompt_nop}
Requests the bundle application to prompt for cancel.
### Declaration
```cs
public bool SendCancelPrompt()
```
### Return value
`bool` True if the user chose to cancel.
## SendEmbeddedError(int code, string message, int uiHint) Method {#sendembeddederror_int_string_int}
Send message to parent bundle when embedded.
### Declaration
```cs
public int SendEmbeddedError(
  int code,
  string message,
  int uiHint
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| code | int | Status code to send. |
| message | string | Message to send. |
| uiHint | int | Flags to send. |
### Return value
`int` Result from parent bundle.
## SetPlanFeatureRequestState(string packageId, string featureId, BundleFeatureState requestState) Method {#setplanfeaturerequeststate_string_string_bundlefeaturestate}
Sets the requested state for a package's feature. Must be called before calling Go() or GoWithAction().
### Declaration
```cs
public void SetPlanFeatureRequestState(
  string packageId,
  string featureId,
  BundleFeatureState requestState
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| packageId | string | Identity of the package containing the feature. |
| featureId | string | Identity of the feature to set plan state. |
| requestState | BundleFeatureState | Requested state to assign to feature. |
## SetPlanPackageRequestState(string packageId, BundleRequestState requestState) Method {#setplanpackagerequeststate_string_bundlerequeststate}
Sets the requested state for a package. Must be called before calling Go() or GoWithAction().
### Declaration
```cs
public void SetPlanPackageRequestState(
  string packageId,
  BundleRequestState requestState
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| packageId | string | Identity of the package to set plan state. |
| requestState | BundleRequestState | Requested state to assign to package. |
## SetVariable(string name, string value) Method {#setvariable_string_string}
Sets a string variable.
### Declaration
```cs
public void SetVariable(
  string name,
  string value
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | string | Name of variable to set. |
| value | string | Value of variable to set. |
## SetVariable(string name, long value) Method {#setvariable_string_long}
Sets a numeric variable.
### Declaration
```cs
public void SetVariable(
  string name,
  long value
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | string | Name of variable to set. |
| value | long | Value of variable to set. |
## SetVersionVariable(string name, string value) Method {#setversionvariable_string_string}
Sets a version variable.
### Declaration
```cs
public void SetVersionVariable(
  string name,
  string value
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | string | Name of variable to set. |
| value | string | Value of variable to set. |
## UIReady() Method {#uiready_nop}
Obsolete. This method is unused.
### Declaration
```cs
public void UIReady()
```
## AllowRestart Property {#allowrestart}
Indicates whether restarts are allowed.
### Declaration
```cs
public bool AllowRestart { get; set; } 
```
## PackageCount Property {#packagecount}
Count of packages in the bundle.
### Declaration
```cs
public int PackageCount { get; set; } 
```
## Packages Property {#packages}
Enumerates the packages in the bundle.
### Declaration
```cs
public IEnumerable{BundlePackage} Packages { get; set; } 
```
## PlanAction Property {#planaction}
The default plan action set via the bundle command-line.
### Declaration
```cs
public BundleAction PlanAction { get; set; } 
```
## RestartRequired Property {#restartrequired}
Indicates whether a restart was required.
### Declaration
```cs
public bool RestartRequired { get; set; } 
```
## ResumeType Property {#resumetype}
Resume type of the bundle.
### Declaration
```cs
public BundleResumeType ResumeType { get; set; } 
```
## RollingBack Property {#rollingback}
Indicates if the bundle application is rolling back.
### Declaration
```cs
public bool RollingBack { get; set; } 
```
