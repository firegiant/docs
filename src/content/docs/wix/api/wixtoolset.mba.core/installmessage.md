---
title: InstallMessage Enumeration
---
Messages from Windows Installer (msi.h).
## Members
| Member | Description |
| ------ | ----------- |
| ActionData | formatted data associated with individual action item |
| ActionStart | start of action: action name & description |
| CommonData | product info for dialog: language Id, dialog caption |
| Error | formatted error message |
| FatalExit | premature termination, possibly fatal OOM |
| FilesInUse | list of files in use that need to be replaced |
| Info | informative message for log |
| Initialize | sent prior to UI initialization, no string data |
| InstallEnd | sent after server-side install |
| InstallStart | sent prior to server-side install of a product |
| OutOfDiskSpace | insufficient disk space message |
| Performance | log only, to log performance number like action time |
| Progress | progress gauge info: units so far, total |
| ResolveSource | request to determine a valid source location |
| RMFilesInUse | the list of apps that the user can request Restart Manager to shut down and restart |
| ShowDialog | sent prior to display or authored dialog or wizard |
| Terminate | sent after UI termination, no string data |
| User | user request message |
| Warning | formatted warning message |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
