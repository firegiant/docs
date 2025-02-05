---
title: VerUtilVersion Class
---
An enhanced implementation of SemVer 2.0.
## Methods
| Method | Description |
| ------ | ----------- |
| [Dispose()](#dispose_nop) |  |
## Properties
| Property | Description |
| ------ | ----------- |
| [HasMajor](#hasmajor) | Whether the Major part was specified. |
| [HasMinor](#hasminor) | Whether the Minor part was specified. |
| [HasPatch](#haspatch) | Whether the Patch part was specified. |
| [HasRevision](#hasrevision) | Whether the Revision part was specified. |
| [IsInvalid](#isinvalid) | Whether the version conformed to the spec. |
| [Major](#major) | For version A.B.C.D, Major is A. It is 0 if not specified. |
| [Metadata](#metadata) | For version X.Y.Z-releaselabels+metadata, Metadata is the rest of the string after +. For invalid versions, it is all of the string after the point where it was an invalid string. |
| [Minor](#minor) | For version A.B.C.D, Minor is B. It is 0 if not specified. |
| [Patch](#patch) | For version A.B.C.D, Patch is C. It is 0 if not specified. |
| [Prefix](#prefix) | Prefix character that was stripped from `Version` , or the null character if there was no prefix. |
| [ReleaseLabels](#releaselabels) | For version X.Y.Z-releaselabels+metadata, ReleaseLabels is the parsed information for releaselabels. |
| [Revision](#revision) | For version A.B.C.D, Revision is D. It is 0 if not specified. |
| [Version](#version) | String version, which would have stripped the leading 'v'. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## Dispose() Method {#dispose_nop}

### Declaration
```cs
public void Dispose()
```
## HasMajor Property {#hasmajor}
Whether the Major part was specified.
### Declaration
```cs
public bool HasMajor { get; set; }
```
## HasMinor Property {#hasminor}
Whether the Minor part was specified.
### Declaration
```cs
public bool HasMinor { get; set; }
```
## HasPatch Property {#haspatch}
Whether the Patch part was specified.
### Declaration
```cs
public bool HasPatch { get; set; }
```
## HasRevision Property {#hasrevision}
Whether the Revision part was specified.
### Declaration
```cs
public bool HasRevision { get; set; }
```
## IsInvalid Property {#isinvalid}
Whether the version conformed to the spec.
### Declaration
```cs
public bool IsInvalid { get; set; }
```
## Major Property {#major}
For version A.B.C.D, Major is A. It is 0 if not specified.
### Declaration
```cs
public System.UInt32 Major { get; set; }
```
## Metadata Property {#metadata}
For version X.Y.Z-releaselabels+metadata, Metadata is the rest of the string after +. For invalid versions, it is all of the string after the point where it was an invalid string.
### Declaration
```cs
public string Metadata { get; set; }
```
## Minor Property {#minor}
For version A.B.C.D, Minor is B. It is 0 if not specified.
### Declaration
```cs
public System.UInt32 Minor { get; set; }
```
## Patch Property {#patch}
For version A.B.C.D, Patch is C. It is 0 if not specified.
### Declaration
```cs
public System.UInt32 Patch { get; set; }
```
## Prefix Property {#prefix}
Prefix character that was stripped from `Version` , or the null character if there was no prefix.
### Declaration
```cs
public System.Char Prefix { get; set; }
```
## ReleaseLabels Property {#releaselabels}
For version X.Y.Z-releaselabels+metadata, ReleaseLabels is the parsed information for releaselabels.
### Declaration
```cs
public VerUtilVersionReleaseLabel[] ReleaseLabels { get; set; }
```
## Revision Property {#revision}
For version A.B.C.D, Revision is D. It is 0 if not specified.
### Declaration
```cs
public System.UInt32 Revision { get; set; }
```
## Version Property {#version}
String version, which would have stripped the leading 'v'.
### Declaration
```cs
public string Version { get; set; }
```
