---
title: IBindResult Interface
---
Result of bind operation.
## Properties
| Property | Description |
| ------ | ----------- |
| [FileTransfers](#filetransfers) | Collection of file transfers to complete. |
| [TrackedFiles](#trackedfiles) | Collection of files tracked during binding. |
| [Wixout](#wixout) | Output of binding. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## FileTransfers Property {#filetransfers}
Collection of file transfers to complete.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Extensibility.Data.IFileTransfer> FileTransfers { get; set; }
```
## TrackedFiles Property {#trackedfiles}
Collection of files tracked during binding.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Extensibility.Data.ITrackedFile> TrackedFiles { get; set; }
```
## Wixout Property {#wixout}
Output of binding.
### Declaration
```cs
public WixToolset.Data.WixOutput Wixout { get; set; }
```
