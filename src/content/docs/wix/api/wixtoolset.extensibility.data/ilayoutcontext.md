---
title: ILayoutContext Interface
---
Context for laying out files.
## Properties
| Property | Description |
| ------ | ----------- |
| [CancellationToken](#cancellationtoken) | Cancellation token. |
| [Extensions](#extensions) | Extensions for use during layout. |
| [FileTransfers](#filetransfers) | Set of files to transfer. |
| [IntermediateFolder](#intermediatefolder) | Intermediate folder. |
| [OutputPath](#outputpath) | Output path. |
| [ResetAcls](#resetacls) | Reset ACLs on file transfers. |
| [ServiceProvider](#serviceprovider) | Service provider. |
| [TrackedFiles](#trackedfiles) | Set of tracked of files created during processing to be cleaned up. |
| [TrackingFile](#trackingfile) | File to capture list of content, built output and copied output files. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CancellationToken Property {#cancellationtoken}
Cancellation token.
### Declaration
```cs
public System.Threading.CancellationToken CancellationToken { get; set; }
```
## Extensions Property {#extensions}
Extensions for use during layout.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Extensibility.ILayoutExtension> Extensions { get; set; }
```
## FileTransfers Property {#filetransfers}
Set of files to transfer.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Extensibility.Data.IFileTransfer> FileTransfers { get; set; }
```
## IntermediateFolder Property {#intermediatefolder}
Intermediate folder.
### Declaration
```cs
public string IntermediateFolder { get; set; }
```
## OutputPath Property {#outputpath}
Output path.
### Declaration
```cs
public string OutputPath { get; set; }
```
## ResetAcls Property {#resetacls}
Reset ACLs on file transfers.
### Declaration
```cs
public bool ResetAcls { get; set; }
```
## ServiceProvider Property {#serviceprovider}
Service provider.
### Declaration
```cs
public System.IServiceProvider ServiceProvider { get; set; }
```
## TrackedFiles Property {#trackedfiles}
Set of tracked of files created during processing to be cleaned up.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Extensibility.Data.ITrackedFile> TrackedFiles { get; set; }
```
## TrackingFile Property {#trackingfile}
File to capture list of content, built output and copied output files.
### Declaration
```cs
public string TrackingFile { get; set; }
```
