---
title: PackageState Enumeration
---
Describes the state of an installation package.
## Members
| Member | Description |
| ------ | ----------- |
| Absent | The package is not installed. |
| Cached | This value is no longer used. See the DetectPackageCompleteEventArgs.Cached value instead. |
| Obsolete | The package is not on the machine (except possibly MspPackage) and should not be installed. |
| Present | The package is installed. |
| Superseded | The package is on the machine but not active, so only uninstall operations are allowed. |
| Unknown | Invalid state. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
