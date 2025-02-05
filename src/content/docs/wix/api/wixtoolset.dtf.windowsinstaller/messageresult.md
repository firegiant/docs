---
title: MessageResult Enumeration
---
Specifies a return status value for message handlers. These values are returned by «see M:WixToolset.Dtf.WindowsInstaller.Session.Message(WixToolset.Dtf.WindowsInstaller.InstallMessage,WixToolset.Dtf.WindowsInstaller.Record)» , «see T:WixToolset.Dtf.WindowsInstaller.ExternalUIHandler» , and «see M:WixToolset.Dtf.WindowsInstaller.IEmbeddedUI.ProcessMessage(WixToolset.Dtf.WindowsInstaller.InstallMessage,WixToolset.Dtf.WindowsInstaller.Record,WixToolset.Dtf.WindowsInstaller.MessageButtons,WixToolset.Dtf.WindowsInstaller.MessageIcon,WixToolset.Dtf.WindowsInstaller.MessageDefaultButton)» .
## Members
| Member | Description |
| ------ | ----------- |
| Abort | IDABORT |
| Cancel | IDCANCEL |
| Error | An error was found in the message handler. |
| Ignore | IDIGNORE |
| No | IDNO |
| None | No action was taken. |
| OK | IDOK |
| Retry | IDRETRY |
| Yes | IDYES |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
