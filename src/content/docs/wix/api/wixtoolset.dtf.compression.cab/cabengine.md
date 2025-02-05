---
title: CabEngine Class
---
Engine capable of packing and unpacking archives in the cabinet format.
## Methods
| Method | Description |
| ------ | ----------- |
| [Dispose(disposing)](#dispose_disposing) | Disposes of resources allocated by the cabinet engine. |
| [IsArchive(stream)](#isarchive_stream) | Checks whether a Stream begins with a header that indicates it is a valid cabinet file. |
`WixToolset.Dtf.Compression.Cab.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Dispose(disposing) Method {#dispose_disposing}
Disposes of resources allocated by the cabinet engine.
### Declaration
```cs
protected void Dispose(
  bool disposing
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| disposing | bool | If true, the method has been called directly or indirectly by a user's code, so managed and unmanaged resources will be disposed. If false, the method has been called by the runtime from inside the finalizer, and only unmanaged resources will be disposed. |
## IsArchive(stream) Method {#isarchive_stream}
Checks whether a Stream begins with a header that indicates it is a valid cabinet file.
### Declaration
```cs
public bool IsArchive(
  System.IO.Stream stream
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| stream | System.IO.Stream | Stream for reading the cabinet file. |
### Return value
`bool` True if the stream is a valid cabinet file (with no offset); false otherwise.
