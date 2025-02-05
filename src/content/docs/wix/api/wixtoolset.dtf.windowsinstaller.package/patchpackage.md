---
title: PatchPackage Class
---
Provides access to convenient properties and operations on a patch package (.MSP).
## Methods
| Method | Description |
| ------ | ----------- |
| [ExtractTransform(transform, extractFile)](#extracttransform_transform_extractfile) | Extracts a transform (.MST) from a patch package. |
| [GetReplacedPatchCodes()](#getreplacedpatchcodes_nop) | Gets the list of patch codes that are replaced by this patch package. |
| [GetTargetProductCodes()](#gettargetproductcodes_nop) | Gets the list of product codes of products targeted by this patch package. |
| [GetTransformInfo(transform)](#gettransforminfo_transform) | Gets information about a transforms included in the patch package. |
| [GetTransforms()](#gettransforms_nop) | Gets the names of the transforms included in the patch package. |
| [GetTransforms(includeSpecialTransforms)](#gettransforms_includespecialtransforms) | Gets the names of the transforms included in the patch package. |
| [GetTransformsInfo()](#gettransformsinfo_nop) | Gets information about the transforms included in the patch package. |
| [GetTransformsInfo(includeSpecialTransforms)](#gettransformsinfo_includespecialtransforms) | Gets information about the transforms included in the patch package. |
| [GetValidTransforms(installPackage)](#getvalidtransforms_installpackage) | Analyzes the transforms included in the patch package to find the ones that are applicable to an install package. |
| [LogMessage(format, args)](#logmessage_format_args) | Sends a message to the «see E:WixToolset.Dtf.WindowsInstaller.Package.PatchPackage.Message» event-handler. |
## Properties
| Property | Description |
| ------ | ----------- |
| [PatchCode](#patchcode) | Gets the patch code (GUID) of the patch package. |
## Events
| Event | Description |
| ------ | ----------- |
| [Message](#message) | Handle this event to receive status messages when operations are performed on the patch package. |
`WixToolset.Dtf.WindowsInstaller.Package.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## ExtractTransform(transform, extractFile) Method {#extracttransform_transform_extractfile}
Extracts a transform (.MST) from a patch package.
### Declaration
```cs
public void ExtractTransform(
  string transform,
  string extractFile
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| transform | string | Name of the transform to extract; this may optionally be a special transform prefixed by "#" |
| extractFile | string | Location where the transform will be extracted |
## GetReplacedPatchCodes() Method {#getreplacedpatchcodes_nop}
Gets the list of patch codes that are replaced by this patch package.
### Declaration
```cs
public System.String[] GetReplacedPatchCodes()
```
### Return value
`System.String[]` Array of replaced patch codes (GUIDs)
### Remarks
The list of replaced patch codes is stored in the RevisionNumber field of the patch summary information.
## GetTargetProductCodes() Method {#gettargetproductcodes_nop}
Gets the list of product codes of products targeted by this patch package.
### Declaration
```cs
public System.String[] GetTargetProductCodes()
```
### Return value
`System.String[]` Array of product codes (GUIDs)
### Remarks
The list of target product codes is stored in the Template field of the patch summary information.
## GetTransformInfo(transform) Method {#gettransforminfo_transform}
Gets information about a transforms included in the patch package.
### Declaration
```cs
public TransformInfo GetTransformInfo(
  string transform
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| transform | string | Name of the transform to extract; this may optionally be a special transform prefixed by "#" |
### Return value
`TransformInfo` Information about the transform
## GetTransforms() Method {#gettransforms_nop}
Gets the names of the transforms included in the patch package.
### Declaration
```cs
public System.String[] GetTransforms()
```
### Return value
`System.String[]` Array of transform names
### Remarks
The returned list does not include the "patch special transforms" that are prefixed with "#"The list of transform names is stored in the LastSavedBy field of the patch summary information.

## GetTransforms(includeSpecialTransforms) Method {#gettransforms_includespecialtransforms}
Gets the names of the transforms included in the patch package.
### Declaration
```cs
public System.String[] GetTransforms(
  bool includeSpecialTransforms
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| includeSpecialTransforms | bool | Specifies whether to include the "patch special transforms" that are prefixed with "#" |
### Return value
`System.String[]` Array of transform names
### Remarks
The list of transform names is stored in the LastSavedBy field of the patch summary information.
## GetTransformsInfo() Method {#gettransformsinfo_nop}
Gets information about the transforms included in the patch package.
### Declaration
```cs
public TransformInfo[] GetTransformsInfo()
```
### Return value
`TransformInfo[]` Array containing information about each transform
### Remarks
The returned info does not include the "patch special transforms" that are prefixed with "#"
## GetTransformsInfo(includeSpecialTransforms) Method {#gettransformsinfo_includespecialtransforms}
Gets information about the transforms included in the patch package.
### Declaration
```cs
public TransformInfo[] GetTransformsInfo(
  bool includeSpecialTransforms
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| includeSpecialTransforms | bool | Specifies whether to include the "patch special transforms" that are prefixed with "#" |
### Return value
`TransformInfo[]` Array containing information about each transform
## GetValidTransforms(installPackage) Method {#getvalidtransforms_installpackage}
Analyzes the transforms included in the patch package to find the ones that are applicable to an install package.
### Declaration
```cs
public System.String[] GetValidTransforms(
  InstallPackage installPackage
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| installPackage | InstallPackage | The install package to validate the transforms against |
### Return value
`System.String[]` Array of valid transform names
### Remarks
The returned list does not include the "patch special transforms" that are prefixed with "#" If a transform is valid, then its corresponding special transform is assumed to be valid as well.
## LogMessage(format, args) Method {#logmessage_format_args}
Sends a message to the «see E:WixToolset.Dtf.WindowsInstaller.Package.PatchPackage.Message» event-handler.
### Declaration
```cs
protected void LogMessage(
  string format,
  System.Object[] args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| format | string | Message string, containing 0 or more format items |
| args | System.Object[] | Items to be formatted |
## PatchCode Property {#patchcode}
Gets the patch code (GUID) of the patch package.
### Declaration
```cs
public string PatchCode { get; set; }
```
### Remarks
The patch code is stored in the RevisionNumber field of the patch summary information.
## Message Event {#message}
Handle this event to receive status messages when operations are performed on the patch package.
### Declaration
```cs
public InstallPackageMessageHandler Message
```
### Value
`InstallPackageMessageHandler`
