---
title: SetUpdateCompleteEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.SetUpdateComplete»
## Properties
| Property | Description |
| ------ | ----------- |
| [NewPackageId](#newpackageid) | Gets the identifier of the update package that was added. |
| [PreviousPackageId](#previouspackageid) | Gets the identifier of the update package that was removed. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## NewPackageId Property {#newpackageid}
Gets the identifier of the update package that was added.
### Declaration
```cs
public string NewPackageId { get; set; }
```
## PreviousPackageId Property {#previouspackageid}
Gets the identifier of the update package that was removed.
### Declaration
```cs
public string PreviousPackageId { get; set; }
```
