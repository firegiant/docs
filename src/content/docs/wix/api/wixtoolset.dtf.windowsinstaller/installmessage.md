---
title: InstallMessage Enumeration
---
Type of message to be processed by «see M:WixToolset.Dtf.WindowsInstaller.Session.Message(WixToolset.Dtf.WindowsInstaller.InstallMessage,WixToolset.Dtf.WindowsInstaller.Record)» , «see T:WixToolset.Dtf.WindowsInstaller.ExternalUIHandler» , or «see T:WixToolset.Dtf.WindowsInstaller.ExternalUIRecordHandler» .
## Members
| Member | Description |
| ------ | ----------- |
| ActionData | Formatted data associated with individual action item. |
| ActionStart | Start of action: action name & description. |
| CommonData | Product info for dialog: language Id, dialog caption. |
| Error | Formatted error message. |
| FatalExit | Premature termination, possibly fatal OOM. |
| FilesInUse | List of files in use that need to be replaced. |
| Info | Informative message for log. |
| Initialize | Sent prior to UI initialization, no string data. |
| InstallEnd | [MSI 4.5] Sent after install of a product. |
| InstallStart | [MSI 4.5] Sent prior to install of a product. |
| OutOfDiskSpace | Insufficient disk space message. |
| Progress | Progress gauge info: units so far, total. |
| ResolveSource | Request to determine a valid source location. |
| RMFilesInUse | [MSI 4.0] List of apps that the user can request Restart Manager to shut down and restart. |
| ShowDialog | Sent prior to display or authored dialog or wizard. |
| Terminate | Sent after UI termination, no string data. |
| User | User request message. |
| Warning | Formatted warning message. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
