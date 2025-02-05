---
title: InstallLogModes Enumeration
---
Log modes available for «see M:WixToolset.Dtf.WindowsInstaller.Installer.EnableLog(WixToolset.Dtf.WindowsInstaller.InstallLogModes,System.String)» and «see M:WixToolset.Dtf.WindowsInstaller.Installer.SetExternalUI(WixToolset.Dtf.WindowsInstaller.ExternalUIHandler,WixToolset.Dtf.WindowsInstaller.InstallLogModes)» .
## Members
| Member | Description |
| ------ | ----------- |
| ActionData | Log the data record for installation actions. |
| ActionStart | Log the start of installation actions. |
| CommonData | Log parameters for user-interface initialization. |
| Error | Log error messages. |
| ExtraDebug | Log extra debugging information. |
| FatalExit | Log out of memory or fatal exit information. |
| FilesInUse | List of files in use that need to be replaced. |
| Info | Log status messages that are not displayed. |
| Initialize | If this is not a quiet installation, then the basic UI has been initialized. If this is a full UI installation, the Full UI is not yet initialized. This message is only sent to an external user interface and is not logged. |
| LogOnlyOnError | Log only on error. |
| None | Disable logging. |
| OutOfDiskSpace | Log insufficient disk space error. |
| Progress | Log progress bar information. This message includes information on units so far and total number of units. See «see M:WixToolset.Dtf.WindowsInstaller.Session.Message(WixToolset.Dtf.WindowsInstaller.InstallMessage,WixToolset.Dtf.WindowsInstaller.Record)» for an explanation of the message format. This message is only sent to an external user interface and is not logged. |
| PropertyDump | Log the property values at termination. |
| ResolveSource | Log request to determine a valid source location. |
| RMFilesInUse | [MSI 4.0] List of apps that the user can request Restart Manager to shut down and restart. |
| ShowDialog | Sent prior to display of the Full UI dialog. This message is only sent to an external user interface and is not logged. |
| Terminate | If a full UI is being used, the full UI has ended. If this is not a quiet installation, the basic UI has not yet ended. This message is only sent to an external user interface and is not logged. |
| User | Log user requests. |
| Verbose | Sends large amounts of information to log file not generally useful to users. May be used for support. |
| Warning | Log warning messages. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
