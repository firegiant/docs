---
title: BOOTSTRAPPER_SHUTDOWN_ACTION Enumeration
---
The available actions for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.Shutdown» .
## Members
| Member | Description |
| ------ | ----------- |
| None | Instructs the engine to not take any special action. |
| ReloadBootstrapper | Instructs the engine to unload the bootstrapper application and restart the engine which will load the bootstrapper application again. Typically used to switch from a native bootstrapper application to a managed one. |
| Restart | Instructs the engine to restart. The engine will not launch again after the machine is rebooted. Ignored if reboot was already initiated by «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.ExecutePackageComplete» . |
| SkipCleanup | Opts out of the engine behavior of trying to uninstall itself when no non-permanent packages are installed. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
