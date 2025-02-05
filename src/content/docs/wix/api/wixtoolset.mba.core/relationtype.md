---
title: RelationType Enumeration
---
The relation type for related bundles.
## Members
| Member | Description |
| ------ | ----------- |
| Addon | The related bundle is an add-on for the running bundle. This relationship is reversed for «see P:WixToolset.Mba.Core.IBootstrapperCommand.Relation»  |
| ChainPackage | The related bundle is in the running bundle's chain. This relationship is reversed for «see P:WixToolset.Mba.Core.IBootstrapperCommand.Relation»  |
| DependentAddon | The running bundle is an add-on for the related bundle. This relationship is reversed for «see P:WixToolset.Mba.Core.IBootstrapperCommand.Relation»  |
| DependentPatch | The running bundle is a patch for the related bundle. This relationship is reversed for «see P:WixToolset.Mba.Core.IBootstrapperCommand.Relation»  |
| Detect | The related bundle is detected by the running bundle. This relationship is reversed for «see P:WixToolset.Mba.Core.IBootstrapperCommand.Relation»  |
| None | No relation. |
| Patch | The related bundle is a patch for the running bundle. This relationship is reversed for «see P:WixToolset.Mba.Core.IBootstrapperCommand.Relation»  |
| Update | The related bundle is a newer version of the running bundle. This relationship is reversed for «see P:WixToolset.Mba.Core.IBootstrapperCommand.Relation»  |
| Upgrade | The related bundle shares an upgrade code with the running bundle. This relationship is reversed for «see P:WixToolset.Mba.Core.IBootstrapperCommand.Relation»  |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
