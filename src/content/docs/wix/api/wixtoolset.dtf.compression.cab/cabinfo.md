---
title: CabInfo Class
---
Object representing a cabinet file on disk; provides access to file-based operations on the cabinet file.
## Methods
| Method | Description |
| ------ | ----------- |
| [CreateCompressionEngine()](#createcompressionengine_nop) | Creates a compression engine that does the low-level work for this object. |
| [GetFiles()](#getfiles_nop) | Gets information about the files contained in the archive. |
| [GetFiles(searchPattern)](#getfiles_searchpattern) | Gets information about the certain files contained in the archive file. |
### Remarks
Generally, the methods on this class are much easier to use than the stream-based interfaces provided by the «see T:WixToolset.Dtf.Compression.Cab.CabEngine» class.
`WixToolset.Dtf.Compression.Cab.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CreateCompressionEngine() Method {#createcompressionengine_nop}
Creates a compression engine that does the low-level work for this object.
### Declaration
```cs
protected WixToolset.Dtf.Compression.CompressionEngine CreateCompressionEngine()
```
### Return value
`WixToolset.Dtf.Compression.CompressionEngine` A new «see T:WixToolset.Dtf.Compression.Cab.CabEngine» instance.
### Remarks
Each instance will be «see M:WixToolset.Dtf.Compression.CompressionEngine.Dispose» d immediately after use.
## GetFiles() Method {#getfiles_nop}
Gets information about the files contained in the archive.
### Declaration
```cs
public IList<WixToolset.Dtf.Compression.Cab.CabFileInfo> GetFiles()
```
### Return value
`IList<WixToolset.Dtf.Compression.Cab.CabFileInfo>` A list of «see T:WixToolset.Dtf.Compression.Cab.CabFileInfo» objects, each containing information about a file in the archive.
## GetFiles(searchPattern) Method {#getfiles_searchpattern}
Gets information about the certain files contained in the archive file.
### Declaration
```cs
public IList<WixToolset.Dtf.Compression.Cab.CabFileInfo> GetFiles(
  string searchPattern
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| searchPattern | string | The search string, such as "*.txt". |
### Return value
`IList<WixToolset.Dtf.Compression.Cab.CabFileInfo>` A list of «see T:WixToolset.Dtf.Compression.Cab.CabFileInfo» objects, each containing information about a file in the archive.
