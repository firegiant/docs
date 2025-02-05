---
title: PatchInstallation Class
---
The Patch object represents a unique instance of a patch that has been registered or applied.
## Methods
| Method | Description |
| ------ | ----------- |
| [GetPatches(patchCode, targetProductCode, userSid, context, states)](#getpatches_patchcode_targetproductcode_usersid_context_states) | Enumerates patch installations based on certain criteria. |
## Properties
| Property | Description |
| ------ | ----------- |
| [AllPatches](#allpatches) | Enumerates all patch installations on the system. |
| [DisplayName](#displayname) | Get the registered display name for the patch. |
| [InstallDate](#installdate) | Gets the date and time when the patch is applied to the product. |
| [IsInstalled](#isinstalled) | Gets a value indicating whether this patch is currently installed. |
| [IsObsoleted](#isobsoleted) | Gets a value indicating whether this patch is marked as obsolte. |
| [IsSuperseded](#issuperseded) | Gets a value indicating whether this patch is present but has been superseded by a more recent installed patch. |
| [Item](#item) | Gets information about a specific patch installation. |
| [LocalPackage](#localpackage) | Gets the cached patch file that the product uses. |
| [MoreInfoUrl](#moreinfourl) | Gets the registered support information URL for the patch. |
| [PatchCode](#patchcode) | Gets the patch code (GUID) of the patch. |
| [ProductCode](#productcode) | Gets the ProductCode (GUID) of the product. |
| [State](#state) | Gets the installation state of this instance of the patch. |
| [Transforms](#transforms) | Gets the set of patch transforms that the last patch installation applied to the product. |
| [Uninstallable](#uninstallable) | True patch is marked as possible to uninstall from the product. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## GetPatches(patchCode, targetProductCode, userSid, context, states) Method {#getpatches_patchcode_targetproductcode_usersid_context_states}
Enumerates patch installations based on certain criteria.
### Declaration
```cs
public static IEnumerable<WixToolset.Dtf.WindowsInstaller.PatchInstallation> GetPatches(
  string patchCode,
  string targetProductCode,
  string userSid,
  UserContexts context,
  PatchStates states
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| patchCode | string | PatchCode (GUID) of the patch to be enumerated. Only instances of patches within the scope of the context specified by the and parameters will be enumerated. This parameter may be set to null to enumerate all patches in the specified context. |
| targetProductCode | string | ProductCode (GUID) product whose patches are to be enumerated. If non-null, patch enumeration is restricted to instances of this product within the specified context. If null, the patches for all products under the specified context are enumerated. |
| userSid | string | Specifies a security identifier (SID) that restricts the context of enumeration. A SID value other than s-1-1-0 is considered a user SID and restricts enumeration to the current user or any user in the system. The special SID string s-1-1-0 (Everyone) specifies enumeration across all users in the system. This parameter can be set to null to restrict the enumeration scope to the current user. When must be null. |
| context | UserContexts | Specifies the user context. |
| states | PatchStates | The of patches to return. |
### Remarks
Win32 MSI APIs: [MsiEnumPatchesEx](http://msdn.microsoft.com/library/en-us/msi/setup/msienumpatchesex.asp)

## AllPatches Property {#allpatches}
Enumerates all patch installations on the system.
### Declaration
```cs
public static IEnumerable<WixToolset.Dtf.WindowsInstaller.PatchInstallation> AllPatches { get; set; }
```
### Remarks
Win32 MSI API: [MsiEnumPatches](http://msdn.microsoft.com/library/en-us/msi/setup/msienumpatches.asp)

## DisplayName Property {#displayname}
Get the registered display name for the patch.
### Declaration
```cs
public string DisplayName { get; set; }
```
## InstallDate Property {#installdate}
Gets the date and time when the patch is applied to the product.
### Declaration
```cs
public System.DateTime InstallDate { get; set; }
```
## IsInstalled Property {#isinstalled}
Gets a value indicating whether this patch is currently installed.
### Declaration
```cs
public bool IsInstalled { get; set; }
```
## IsObsoleted Property {#isobsoleted}
Gets a value indicating whether this patch is marked as obsolte.
### Declaration
```cs
public bool IsObsoleted { get; set; }
```
## IsSuperseded Property {#issuperseded}
Gets a value indicating whether this patch is present but has been superseded by a more recent installed patch.
### Declaration
```cs
public bool IsSuperseded { get; set; }
```
## Item Property {#item}
Gets information about a specific patch installation.
### Declaration
```cs
public string Item[
  string propertyName
] { get; set; }
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| propertyName | string | The property being retrieved; see remarks for valid properties. |
### Remarks
Win32 MSI APIs: [MsiGetPatchInfo](http://msdn.microsoft.com/library/en-us/msi/setup/msigetpatchinfo.asp) , [MsiGetPatchInfoEx](http://msdn.microsoft.com/library/en-us/msi/setup/msigetpatchinfoex.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | An unknown patch or property was requested |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | The installer configuration data is corrupt |
## LocalPackage Property {#localpackage}
Gets the cached patch file that the product uses.
### Declaration
```cs
public string LocalPackage { get; set; }
```
## MoreInfoUrl Property {#moreinfourl}
Gets the registered support information URL for the patch.
### Declaration
```cs
public System.Uri MoreInfoUrl { get; set; }
```
## PatchCode Property {#patchcode}
Gets the patch code (GUID) of the patch.
### Declaration
```cs
public string PatchCode { get; set; }
```
## ProductCode Property {#productcode}
Gets the ProductCode (GUID) of the product.
### Declaration
```cs
public string ProductCode { get; set; }
```
## State Property {#state}
Gets the installation state of this instance of the patch.
### Declaration
```cs
public PatchStates State { get; set; }
```
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentException | An unknown patch was requested |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | The installer configuration data is corrupt |
## Transforms Property {#transforms}
Gets the set of patch transforms that the last patch installation applied to the product.
### Declaration
```cs
public string Transforms { get; set; }
```
### Remarks
This value may not be available for per-user, non-managed applications if the user is not logged on.

## Uninstallable Property {#uninstallable}
True patch is marked as possible to uninstall from the product.
### Declaration
```cs
public bool Uninstallable { get; set; }
```
### Remarks
Even if this property is true, the installer can still block the uninstallation if this patch is required by another patch that cannot be uninstalled.

