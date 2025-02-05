---
title: IPreprocessResult Interface
---
Result of preprocessing.
## Properties
| Property | Description |
| ------ | ----------- |
| [Document](#document) | Document result of preprocessor. |
| [IncludedFiles](#includedfiles) | Collection of files included during preprocessing. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Document Property {#document}
Document result of preprocessor.
### Declaration
```cs
public System.Xml.Linq.XDocument Document { get; set; }
```
## IncludedFiles Property {#includedfiles}
Collection of files included during preprocessing.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Extensibility.Data.IIncludedFile> IncludedFiles { get; set; }
```
