---
title: RequestState Enumeration
---
Indicates the state desired for an installation package.
## Members
| Member | Description |
| ------ | ----------- |
| Absent | Request the package to not be installed on the machine. |
| Cache | Request the package to be cached and not be installed on the machine. |
| ForceAbsent | As long as there are no dependents, the package will be uninstalled. There are some packages that can't be uninstalled, such as an ExePackage without an UninstallCommand. |
| ForcePresent | Force the bundle to install the package. |
| None | No change requested. |
| Present | Request the package to be installed on the machine. |
| Repair | Request the package to be repaired. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
