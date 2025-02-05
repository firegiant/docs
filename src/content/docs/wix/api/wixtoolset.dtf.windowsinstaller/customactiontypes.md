---
title: CustomActionTypes Enumeration
---
Defines flags for the Type column of the CustomAction table.
## Members
| Member | Description |
| ------ | ----------- |
| Async | Run asynchronously |
| ClientRepeat | Run on client only if UI already run on client |
| Commit | In conjunction with InScript: run Commit ops from script on success |
| Continue | Ignore action return status, continue running |
| Directory | Source = Directory.Directory, folder containing existing file |
| Dll | Target = entry point name |
| Exe | Target = command line args |
| FirstSequence | Skip if UI sequence already run |
| HideTarget | Don't record the contents of the Target field in the log file |
| InScript | Queue for execution within script |
| Install | Target = property list for nested engine initialization |
| JScript | Target = entry point name, null if none to call |
| NoImpersonate | No impersonation, run in system context |
| None | Unspecified custom action type. |
| OncePerProcess | Skip if UI sequence already run in same process |
| PatchUninstall | The custom action runs only when a patch is being uninstalled |
| Property | Source = Property.Property, full path to executable |
| Rollback | In conjunction with InScript: queue in Rollback script |
| SixtyFourBitScript | Script requires 64bit process |
| SourceFile | Source = File.File, file part of installation |
| TextData | Target = text string to be formatted and set into property |
| TSAware | Impersonate for per-machine installs on TS machines |
| VBScript | Target = entry point name, null if none to call |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
