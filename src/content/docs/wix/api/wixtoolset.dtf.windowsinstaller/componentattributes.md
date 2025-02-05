---
title: ComponentAttributes Enumeration
---
Available values for the Attributes column of the Component table.
## Members
| Member | Description |
| ------ | ----------- |
| DisableRegistryReflection | Set this bit to disable registry reflection on all existing and new registry keys affected by this component. |
| NeverOverwrite | If this bit is set, the installer does not install or reinstall the component if a key path file or a key path registry entry for the component already exists. The application does register itself as a client of the component. |
| None | Local only - Component cannot be run from source. |
| OdbcDataSource | If this bit is set, the value in the KeyPath column is a key into the ODBCDataSource table. |
| Optional | Component can run locally or from source. |
| Permanent | If this bit is set, the installer does not remove the component during an uninstall. The installer registers an extra system client for the component in the Windows Installer registry settings. |
| RegistryKeyPath | If this bit is set, the value in the KeyPath column is used as a key into the Registry table. |
| Shared | [MSI 4.5] If a component is marked with this attribute value in at least one package installed on the system, the installer treats the component as marked in all packages. If a package that shares the marked component is uninstalled, Windows Installer 4.5 can continue to share the highest version of the component on the system, even if that highest version was installed by the package that is being uninstalled. |
| SharedDllRefCount | If this bit is set, the installer increments the reference count in the shared DLL registry of the component's key file. If this bit is not set, the installer increments the reference count only if the reference count already exists. |
| SixtyFourBit | Set this bit to mark this as a 64-bit component. This attribute facilitates the installation of packages that include both 32-bit and 64-bit components. If this bit is not set, the component is registered as a 32-bit component. |
| SourceOnly | Component can only be run from source. |
| Transitive | If this bit is set, the installer reevaluates the value of the statement in the Condition column upon a reinstall. If the value was previously False and has changed to true, the installer installs the component. If the value was previously true and has changed to false, the installer removes the component even if the component has other products as clients. |
| UninstallOnSupersedence | [MSI 4.5] Set this bit for a component in a patch package to prevent leaving orphan components on the computer. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
