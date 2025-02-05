---
title: TransformErrors Enumeration
---
Transform error conditions available for «see M:WixToolset.Dtf.WindowsInstaller.Database.CreateTransformSummaryInfo(WixToolset.Dtf.WindowsInstaller.Database,System.String,WixToolset.Dtf.WindowsInstaller.TransformErrors,WixToolset.Dtf.WindowsInstaller.TransformValidations)» or «see M:WixToolset.Dtf.WindowsInstaller.Database.ApplyTransform(System.String,WixToolset.Dtf.WindowsInstaller.TransformErrors)» .
## Members
| Member | Description |
| ------ | ----------- |
| AddExistingRow | Adding a row that already exists. |
| AddExistingTable | Adding a table that already exists. |
| ChangeCodePage | Transform and database code pages do not match and neither code page is neutral. |
| DelMissingRow | Deleting a row that doesn't exist. |
| DelMissingTable | Deleting a table that doesn't exist. |
| None | No error conditions. |
| UpdateMissingRow | Updating a row that doesn't exist. |
| ViewTransform | Create the temporary _TransformView table when applying the transform. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
