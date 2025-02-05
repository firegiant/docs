---
title: ServiceAttributes Enumeration
---
Defines values for the ServiceType, StartType, and ErrorControl columns of the ServiceInstall table.
## Members
| Member | Description |
| ------ | ----------- |
| AutoStart | Service starts during startup of the system. |
| DemandStart | Service starts when the service control manager calls the StartService function. |
| Disabled | Specifies a service that can no longer be started. |
| ErrorControlVital | When combined with other error flags, specifies that the overall install should fail if the service cannot be installed into the system. |
| ErrorCritical | Logs the error if it is possible and the system is restarted with the last configuration known to be good. If the last-known-good configuration is being started, the startup operation fails. |
| ErrorMessage | Logs the error, displays a message box and continues the startup operation. |
| Interactive | A Win32 service that interacts with the desktop. This value cannot be used alone and must be added to either «see F:WixToolset.Dtf.WindowsInstaller.ServiceAttributes.OwnProcess» or «see F:WixToolset.Dtf.WindowsInstaller.ServiceAttributes.ShareProcess» . |
| None | No flags. |
| OwnProcess | A Win32 service that runs its own process. |
| ShareProcess | A Win32 service that shares a process. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
