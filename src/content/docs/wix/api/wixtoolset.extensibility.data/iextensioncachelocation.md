---
title: IExtensionCacheLocation Interface
---
Location where extensions may be cached.
## Properties
| Property | Description |
| ------ | ----------- |
| [Path](#path) | Path for the extension cache location. |
| [Scope](#scope) | Scope for the extension cache location. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Path Property {#path}
Path for the extension cache location.
### Declaration
```cs
public string Path { get; set; }
```
## Scope Property {#scope}
Scope for the extension cache location.
### Declaration
```cs
public ExtensionCacheLocationScope Scope { get; set; }
```
