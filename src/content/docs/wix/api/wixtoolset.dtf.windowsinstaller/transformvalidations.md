---
title: TransformValidations Enumeration
---
Transform validation flags available for «see M:WixToolset.Dtf.WindowsInstaller.Database.CreateTransformSummaryInfo(WixToolset.Dtf.WindowsInstaller.Database,System.String,WixToolset.Dtf.WindowsInstaller.TransformErrors,WixToolset.Dtf.WindowsInstaller.TransformValidations)» .
## Members
| Member | Description |
| ------ | ----------- |
| Language | Default language must match base database. |
| MajorVersion | Check major version only. |
| MinorVersion | Check major and minor versions only. |
| NewEqualBaseVersion | Installed version = base version. |
| NewGreaterBaseVersion | Installed version {'>'} base version. |
| NewGreaterEqualBaseVersion | Installed version {'>'}= base version. |
| NewLessBaseVersion | Installed version {'<'} base version. |
| NewLessEqualBaseVersion | Installed version {'<'}= base version. |
| None | Validate no properties. |
| Product | Product must match base database. |
| UpdateVersion | Check major, minor, and update versions. |
| UpgradeCode | UpgradeCode must match base database. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
