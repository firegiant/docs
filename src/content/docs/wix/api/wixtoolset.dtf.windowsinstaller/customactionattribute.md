---
title: CustomActionAttribute Class
---
Marks a method as a custom action entry point.
## Properties
| Property | Description |
| ------ | ----------- |
| [Name](#name) | Gets or sets the name of the custom action entrypoint. A null value defaults to the name of the method. |
### Remarks
A custom action method must be defined as public and static, take a single «see T:WixToolset.Dtf.WindowsInstaller.Session» object as a parameter, and return an «see T:WixToolset.Dtf.WindowsInstaller.ActionResult» enumeration value.

`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Name Property {#name}
Gets or sets the name of the custom action entrypoint. A null value defaults to the name of the method.
### Declaration
```cs
public string Name { get; set; }
```
