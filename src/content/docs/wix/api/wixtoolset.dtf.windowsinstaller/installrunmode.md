---
title: InstallRunMode Enumeration
---
Specifies the run mode for «see M:WixToolset.Dtf.WindowsInstaller.Session.GetMode(WixToolset.Dtf.WindowsInstaller.InstallRunMode)» .
## Members
| Member | Description |
| ------ | ----------- |
| Admin | The administrative mode is installing, or the product is installing. |
| Advertise | The advertisements are installing or the product is installing or updating. |
| Cabinet | Files from cabinets and Media table files are installing. |
| Commit | A custom action called from commit execution script. |
| LogEnabled | The log file is active. It was enabled prior to the installation session. |
| Maintenance | An existing installation is being modified or there is a new installation. |
| Operations | Execute operations are spooling or they are in the determination phase. |
| RebootAtEnd | A reboot is necessary after a successful installation (settable). |
| RebootNow | A reboot is necessary to continue the installation (settable). |
| Rollback | A custom action called from rollback execution script. |
| RollbackEnabled | Rollback is enabled. |
| Scheduled | A custom action called from install script execution. |
| SourceShortNames | The source LongFileNames is suppressed through the PID_MSISOURCE summary property. |
| TargetShortNames | The target LongFileNames is suppressed through the SHORTFILENAMES property. |
| Windows9x | The operating system is Windows 95, Windows 98, or Windows ME. |
| ZawEnabled | The operating system supports demand installation. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
