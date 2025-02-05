---
title: Queryable Class
---
Allows any Database instance to be converted into a queryable database.
## Methods
| Method | Description |
| ------ | ----------- |
| [AsQueryable(db)](#asqueryable_db) | Converts any Database instance into a queryable database. |
`WixToolset.Dtf.WindowsInstaller.Linq.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## AsQueryable(db) Method {#asqueryable_db}
Converts any Database instance into a queryable database.
### Declaration
```cs
public static QDatabase AsQueryable(
  WixToolset.Dtf.WindowsInstaller.Database db
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| db | WixToolset.Dtf.WindowsInstaller.Database |  |
### Return value
`QDatabase` Queryable database instance that operates on the same MSI handle.
### Remarks
This extension method is meant for convenient on-the-fly conversion. If the existing database instance already happens to be a QDatabase, then it is returned unchanged. Otherwise since the new database carries the same MSI handle, only one of the instances needs to be closed, not both.
