---
title: BaseExtensionFactory Class
---
Base class for extension factories. Implementations may request an IWixToolsetCoreServiceProvider at instantiation by having a single parameter constructor for it.
## Properties
| Property | Description |
| ------ | ----------- |
| [ExtensionTypes](#extensiontypes) | The extension types of the WiX extension. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## ExtensionTypes Property {#extensiontypes}
The extension types of the WiX extension.
### Declaration
```cs
protected System.Collections.Generic.IReadOnlyCollection<System.Type> ExtensionTypes { get; set; }
```
