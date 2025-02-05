---
title: IComponentKeyPath Interface
---
Interface used to by extensions to define a component key path or (non-intuitively) the executable payload for a the bootstrapper application.
## Properties
| Property | Description |
| ------ | ----------- |
| [Explicit](#explicit) | Indicates whether the key path was specified explicitly. |
| [Id](#id) | Gets or sets the key path or executable payload identifier. |
| [Type](#type) | Gets or sets the key path type for the component or if the executable payload for a bootstrapper application is provided as a File. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Explicit Property {#explicit}
Indicates whether the key path was specified explicitly.
### Declaration
```cs
public bool Explicit { get; set; }
```
## Id Property {#id}
Gets or sets the key path or executable payload identifier.
### Declaration
```cs
public WixToolset.Data.Identifier Id { get; set; }
```
## Type Property {#type}
Gets or sets the key path type for the component or if the executable payload for a bootstrapper application is provided as a File.
### Declaration
```cs
public PossibleKeyPathType Type { get; set; }
```
