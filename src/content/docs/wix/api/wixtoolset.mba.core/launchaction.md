---
title: LaunchAction Enumeration
---
The action for the bundle to perform.
## Members
| Member | Description |
| ------ | ----------- |
| Cache | Cache the bundle and its packages. |
| Help | Provide help information. |
| Install | Install the bundle. |
| Layout | Layout the bundle on disk, normally to prepare for offline installation. |
| Modify | Modify the bundle. |
| Repair | Repair the bundle |
| Uninstall | Uninstall the bundle. |
| Unknown | Invalid action. |
| UnsafeUninstall | Same as Uninstall, except it will always remove itself from the package cache and Add/Remove Programs. This should only be used to remove corrupt bundles since it might not properly clean up its packages. |
| UpdateReplace | Launch the update registered with «see M:WixToolset.Mba.Core.IEngine.SetUpdate(System.String,System.String,System.Int64,WixToolset.Mba.Core.UpdateHashType,System.String)» and then exit without waiting for it to complete. |
| UpdateReplaceEmbedded | Launch the update registered with «see M:WixToolset.Mba.Core.IEngine.SetUpdate(System.String,System.String,System.Int64,WixToolset.Mba.Core.UpdateHashType,System.String)» as an embedded bundle. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
