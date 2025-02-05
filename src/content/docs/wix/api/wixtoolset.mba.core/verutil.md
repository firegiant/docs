---
title: VerUtil Class
---
Managed wrapper for verutil.
## Methods
| Method | Description |
| ------ | ----------- |
| [CompareParsedVersions()](#compareparsedversions_nop) |  |
| [CompareStringVersions()](#comparestringversions_nop) |  |
| [CopyVersion(version)](#copyversion_version) | Clone the version. |
| [ParseVersion(version, strict)](#parseversion_version_strict) | Parse a version. |
| [VersionFromQword(version)](#versionfromqword_version) | Parse version from qword. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## CompareParsedVersions() Method {#compareparsedversions_nop}

### Declaration
```cs
public static int CompareParsedVersions()
```
### Return value
`int` 0 if equal, 1 if version1 {'>'} version2, -1 if version1 {'<'} version2
## CompareStringVersions() Method {#comparestringversions_nop}

### Declaration
```cs
public static int CompareStringVersions()
```
### Return value
`int` 0 if equal, 1 if version1 {'>'} version2, -1 if version1 {'<'} version2
## CopyVersion(version) Method {#copyversion_version}
Clone the version.
### Declaration
```cs
public static VerUtilVersion CopyVersion(
  VerUtilVersion version
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| version | VerUtilVersion | Source version |
### Return value
`VerUtilVersion` Cloned version
## ParseVersion(version, strict) Method {#parseversion_version_strict}
Parse a version.
### Declaration
```cs
public static VerUtilVersion ParseVersion(
  string version,
  bool strict
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| version | string | Source version |
| strict | bool | Whether to throw exception on invalid version. |
### Return value
`VerUtilVersion` Parsed version
## VersionFromQword(version) Method {#versionfromqword_version}
Parse version from qword.
### Declaration
```cs
public static VerUtilVersion VersionFromQword(
  System.Int64 version
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| version | System.Int64 | Source version |
### Return value
`VerUtilVersion` Parsed version
