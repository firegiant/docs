---
title: BaseExtensionData Class
---
Base class for creating a resolver extension.
## Methods
| Method | Description |
| ------ | ----------- |
| [GetLibrary()](#getlibrary_nop) | See «see M:WixToolset.Extensibility.IExtensionData.GetLibrary(WixToolset.Data.ISymbolDefinitionCreator)»  |
## Properties
| Property | Description |
| ------ | ----------- |
| [DefaultCulture](#defaultculture) | Obsolete in WiX v5. Use the WixLocalization/@ExtensionDefaultCulture attribute in the wxl file instead. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## GetLibrary() Method {#getlibrary_nop}
See «see M:WixToolset.Extensibility.IExtensionData.GetLibrary(WixToolset.Data.ISymbolDefinitionCreator)»
### Declaration
```cs
public WixToolset.Data.Intermediate GetLibrary()
```
## DefaultCulture Property {#defaultculture}
Obsolete in WiX v5. Use the WixLocalization/@ExtensionDefaultCulture attribute in the wxl file instead.
### Declaration
```cs
public string DefaultCulture { get; set; }
```
