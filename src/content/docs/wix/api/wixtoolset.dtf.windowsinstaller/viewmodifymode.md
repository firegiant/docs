---
title: ViewModifyMode Enumeration
---
Specifies the modify mode for «see M:WixToolset.Dtf.WindowsInstaller.View.Modify(WixToolset.Dtf.WindowsInstaller.ViewModifyMode,WixToolset.Dtf.WindowsInstaller.Record)» .
## Members
| Member | Description |
| ------ | ----------- |
| Assign | Updates or inserts a Record into the View. |
| Delete | Deletes a Record from the View. |
| Insert | Inserts a Record into the view. |
| InsertTemporary | Inserts a Record into the View. The inserted data is not persistent. |
| Merge | Inserts or validates a record. |
| Refresh | Refreshes the data in a Record. |
| Replace | Updates or deletes and inserts a Record into the View. |
| Seek | Refreshes the information in the supplied record without changing the position in the result set and without affecting subsequent fetch operations. |
| Update | Updates the View with new data from the Record. |
| Validate | Validates a record. |
| ValidateDelete | Validates a record that will be deleted later. |
| ValidateField | Validates fields of a fetched or new record. Can validate one or more fields of an incomplete record. |
| ValidateNew | Validates a new record. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
