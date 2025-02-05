---
title: RemoveFileModes Enumeration
---
Defines values for the InstallMode column of the RemoveFile table.
## Members
| Member | Description |
| ------ | ----------- |
| None | Never remove. |
| OnInstall | Remove when the associated component is being installed (install state = local or source). |
| OnRemove | Remove when the associated component is being removed (install state = absent). |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
