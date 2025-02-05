---
title: InstallationPart Class
---
Subclasses of this abstract class represent an instance of a registered feature or component.
## Properties
| Property | Description |
| ------ | ----------- |
| [Product](#product) | Gets the product that this item is a part of. |
| [State](#state) | Gets the current installation state of the item. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Product Property {#product}
Gets the product that this item is a part of.
### Declaration
```cs
public ProductInstallation Product { get; set; }
```
## State Property {#state}
Gets the current installation state of the item.
### Declaration
```cs
public InstallState State { get; set; }
```
