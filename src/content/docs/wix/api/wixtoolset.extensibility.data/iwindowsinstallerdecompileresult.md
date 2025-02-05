---
title: IWindowsInstallerDecompileResult Interface
---
The result from decompiling a Windows Installer database.
## Properties
| Property | Description |
| ------ | ----------- |
| [Data](#data) | Decompiled `WindowsInstallerData` . |
| [Document](#document) | Decompiled document. |
| [ExtractedFilePaths](#extractedfilepaths) | Extracted paths. |
| [Platform](#platform) | Decompiled platform. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Data Property {#data}
Decompiled `WindowsInstallerData` .
### Declaration
```cs
public WixToolset.Data.WindowsInstaller.WindowsInstallerData Data { get; set; }
```
## Document Property {#document}
Decompiled document.
### Declaration
```cs
public System.Xml.Linq.XDocument Document { get; set; }
```
## ExtractedFilePaths Property {#extractedfilepaths}
Extracted paths.
### Declaration
```cs
public IList<System.String> ExtractedFilePaths { get; set; }
```
## Platform Property {#platform}
Decompiled platform.
### Declaration
```cs
public System.Nullable<WixToolset.Data.Platform> Platform { get; set; }
```
