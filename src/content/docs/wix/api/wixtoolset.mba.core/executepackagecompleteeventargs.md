---
title: ExecutePackageCompleteEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.ExecutePackageComplete»
## Properties
| Property | Description |
| ------ | ----------- |
| [PackageId](#packageid) | Gets the identity of the package that was acted on. |
| [Restart](#restart) | Gets the package restart state after being applied. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## PackageId Property {#packageid}
Gets the identity of the package that was acted on.
### Declaration
```cs
public string PackageId { get; set; }
```
## Restart Property {#restart}
Gets the package restart state after being applied.
### Declaration
```cs
public ApplyRestart Restart { get; set; }
```
