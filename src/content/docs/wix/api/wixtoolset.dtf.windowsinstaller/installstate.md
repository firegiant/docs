---
title: InstallState Enumeration
---
Installed state of a Component or Feature.
## Members
| Member | Description |
| ------ | ----------- |
| Absent | The component is not installed, or action state is absent but clients remain. |
| Advertised | The feature is advertised. |
| BadConfig | The installation configuration data is corrupt. |
| Broken | The component is broken. |
| Default | The component will be installed in the default location: local or source. |
| Incomplete | The installation is suspended or in progress. |
| InvalidArgument | An invalid parameter was passed to the function. |
| Local | The component is installed on the local drive. |
| MoreData | The buffer overflow is returned. |
| NotUsed | The component is disabled. |
| Removed | The component is being removed. In action state and not settable. |
| Source | The component will run from the source, CD, or network. |
| SourceAbsent | Component is set to run from source, but source is unavailable. |
| Unknown | An unrecognized product or feature name was passed to the function. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
