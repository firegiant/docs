---
title: DatabaseTableAttribute Class
---
Apply to a subclass of QRecord to indicate the name of the table the record type is to be used with.
## Properties
| Property | Description |
| ------ | ----------- |
| [Table](#table) | Gets or sets the table associated with the record type. |
### Remarks
If this attribute is not used on a record type, the default table name will be derived from the record type name. (An optional underscore suffix is stripped.)
`WixToolset.Dtf.WindowsInstaller.Linq.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Table Property {#table}
Gets or sets the table associated with the record type.
### Declaration
```cs
public string Table { get; set; }
```
