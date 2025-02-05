---
title: InstallPackageProperties Class
---
Accessor for getting and setting properties of the «see T:WixToolset.Dtf.WindowsInstaller.Package.InstallPackage» database.
## Properties
| Property | Description |
| ------ | ----------- |
| [Item](#item) | Gets or sets a property in the database. When getting a property that does not exist in the database, an empty string is returned. To remove a property from the database, set it to an empty string. |
`WixToolset.Dtf.WindowsInstaller.Package.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Item Property {#item}
Gets or sets a property in the database. When getting a property that does not exist in the database, an empty string is returned. To remove a property from the database, set it to an empty string.
### Declaration
```cs
public string Item { get; set; }
```
### Remarks
This has the same results as direct SQL queries on the Property table; it's only meant to be a more convenient way of access.
