---
title: ILibraryResult Interface
---
Result of a library combine operation.
## Properties
| Property | Description |
| ------ | ----------- |
| [Library](#library) | Output of librarian. |
| [TrackedFiles](#trackedfiles) | Collection of files tracked when binding files into the library. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Library Property {#library}
Output of librarian.
### Declaration
```cs
public WixToolset.Data.Intermediate Library { get; set; }
```
## TrackedFiles Property {#trackedfiles}
Collection of files tracked when binding files into the library.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Extensibility.Data.ITrackedFile> TrackedFiles { get; set; }
```
