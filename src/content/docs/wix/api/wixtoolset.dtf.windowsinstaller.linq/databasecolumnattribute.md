---
title: DatabaseColumnAttribute Class
---
Apply to a property on a subclass of QRecord to indicate the name of the column the property is to be associated with.
## Properties
| Property | Description |
| ------ | ----------- |
| [Column](#column) | Gets or sets the column associated with the record property. |
### Remarks
If this attribute is not used on a property, the default column name will be the same as the property name.
`WixToolset.Dtf.WindowsInstaller.Linq.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Column Property {#column}
Gets or sets the column associated with the record property.
### Declaration
```cs
public string Column { get; set; }
```
