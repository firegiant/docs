---
title: EndSessionReasons Enumeration
---
One or more reasons why the application is requested to be closed or is being closed.
## Members
| Member | Description |
| ------ | ----------- |
| CloseApplication | The application is using a file that must be replaced, the system is being serviced, or system resources are exhausted. |
| Critical | The application is forced to shut down. |
| Logoff | The user is logging off. |
| Unknown | The system is shutting down or restarting (it is not possible to determine which event is occurring). |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
