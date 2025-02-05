---
title: WindowsInstallerStandard Class
---

## Methods
| Method | Description |
| ------ | ----------- |
| [GetPlatformSpecificDirectoryId(directoryId, platform)](#getplatformspecificdirectoryid_directoryid_platform) | Gets the platform specific directory id for a directory. Most directories are not platform specific and return themselves. |
| [IsStandardAction(actionName)](#isstandardaction_actionname) | Find out if an action is a standard action. |
| [IsStandardDirectory(directoryId)](#isstandarddirectory_directoryid) | Find out if a directory is a standard directory. |
| [IsStandardProperty(propertyName)](#isstandardproperty_propertyname) | Find out if a property is a standard property. |
| [StandardActions()](#standardactions_nop) | Standard actions. |
| [StandardDirectoryIds()](#standarddirectoryids_nop) | Standard directory identifiers. |
`WixToolset.Data.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## GetPlatformSpecificDirectoryId(directoryId, platform) Method {#getplatformspecificdirectoryid_directoryid_platform}
Gets the platform specific directory id for a directory. Most directories are not platform specific and return themselves.
### Declaration
```cs
public static string GetPlatformSpecificDirectoryId(
  string directoryId,
  WixToolset.Data.Platform platform
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| directoryId | string | Directory id to get platform specific. |
| platform | WixToolset.Data.Platform | Platform to use. |
### Return value
`string` Platform specific directory id.
## IsStandardAction(actionName) Method {#isstandardaction_actionname}
Find out if an action is a standard action.
### Declaration
```cs
public static bool IsStandardAction(
  string actionName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| actionName | string | Name of the action. |
### Return value
`bool` true if the action is standard, false otherwise.
## IsStandardDirectory(directoryId) Method {#isstandarddirectory_directoryid}
Find out if a directory is a standard directory.
### Declaration
```cs
public static bool IsStandardDirectory(
  string directoryId
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| directoryId | string | Name of the directory. |
### Return value
`bool` true if the directory is standard, false otherwise.
## IsStandardProperty(propertyName) Method {#isstandardproperty_propertyname}
Find out if a property is a standard property.
### Declaration
```cs
public static bool IsStandardProperty(
  string propertyName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| propertyName | string | Name of the property. |
### Return value
`bool` true if a property is standard, false otherwise.
## StandardActions() Method {#standardactions_nop}
Standard actions.
### Declaration
```cs
public static System.Collections.Generic.IReadOnlyCollection<WixToolset.Data.Symbols.WixActionSymbol> StandardActions()
```
## StandardDirectoryIds() Method {#standarddirectoryids_nop}
Standard directory identifiers.
### Declaration
```cs
public static System.Collections.Generic.IReadOnlyCollection<System.String> StandardDirectoryIds()
```
