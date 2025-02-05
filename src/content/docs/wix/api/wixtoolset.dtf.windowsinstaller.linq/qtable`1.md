---
title: QTable`1 Class
---
Represents one table in a LINQ-queryable Database.
## Methods
| Method | Description |
| ------ | ----------- |
| [GetEnumerator()](#getenumerator_nop) | Enumerates over all records in the table. |
| [NewRecord()](#newrecord_nop) | Creates a new record that can be inserted into this table. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Database](#database) | Gets the database this table is associated with. |
| [TableInfo](#tableinfo) | Gets schema information about the table. |
### Remarks
This class is the primary gateway to all LINQ to MSI query functionality.The TRecord generic parameter may be the general «see T:WixToolset.Dtf.WindowsInstaller.Linq.QRecord» class, or a specialized subclass of QRecord.

`WixToolset.Dtf.WindowsInstaller.Linq.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## GetEnumerator() Method {#getenumerator_nop}
Enumerates over all records in the table.
### Declaration
```cs
public IEnumerator<TRecord> GetEnumerator()
```
## NewRecord() Method {#newrecord_nop}
Creates a new record that can be inserted into this table.
### Declaration
```cs
public TRecord NewRecord()
```
### Return value
`TRecord` a record with all fields initialized to null
### Remarks
Primary keys and required fields must be filled in with non-null values before the record can be inserted.The record is tied to this table in this database; it cannot be inserted into another table or database.

## Database Property {#database}
Gets the database this table is associated with.
### Declaration
```cs
public QDatabase Database { get; set; }
```
## TableInfo Property {#tableinfo}
Gets schema information about the table.
### Declaration
```cs
public WixToolset.Dtf.WindowsInstaller.TableInfo TableInfo { get; set; }
```
