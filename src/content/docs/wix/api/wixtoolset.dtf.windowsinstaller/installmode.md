---
title: InstallMode Enumeration
---
Specifies the install mode for «see M:WixToolset.Dtf.WindowsInstaller.Installer.ProvideComponent(System.String,System.String,System.String,WixToolset.Dtf.WindowsInstaller.InstallMode)» or «see M:WixToolset.Dtf.WindowsInstaller.Installer.ProvideQualifiedComponent(System.String,System.String,WixToolset.Dtf.WindowsInstaller.InstallMode,System.String)» .
## Members
| Member | Description |
| ------ | ----------- |
| Default | Provide the component and perform any installation necessary to provide the component. |
| Existing | Provide the component only if the feature exists. |
| NoDetection | Only check that the component is registered, without verifying that the key file of the component exists. |
| NoSourceResolution | Provide the component only if the feature's installation state is «see F:WixToolset.Dtf.WindowsInstaller.InstallState.Local» . |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
