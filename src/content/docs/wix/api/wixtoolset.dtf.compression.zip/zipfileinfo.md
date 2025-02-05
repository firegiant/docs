---
title: ZipFileInfo Class
---
Object representing a compressed file within a zip package; provides operations for getting the file properties and extracting the file.
## Methods
| Method | Description |
| ------ | ----------- |
| [GetObjectData(info, context)](#getobjectdata_info_context) | Sets the SerializationInfo with information about the archive. |
## Properties
| Property | Description |
| ------ | ----------- |
| [CompressedLength](#compressedlength) | Gets the compressed size of the file in bytes. |
| [CompressionMethod](#compressionmethod) | Gets the method used to compress this file. |
`WixToolset.Dtf.Compression.Zip.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## GetObjectData(info, context) Method {#getobjectdata_info_context}
Sets the SerializationInfo with information about the archive.
### Declaration
```cs
public void GetObjectData(
  System.Runtime.Serialization.SerializationInfo info,
  System.Runtime.Serialization.StreamingContext context
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| info | System.Runtime.Serialization.SerializationInfo | The SerializationInfo that holds the serialized object data. |
| context | System.Runtime.Serialization.StreamingContext | The StreamingContext that contains contextual information about the source or destination. |
## CompressedLength Property {#compressedlength}
Gets the compressed size of the file in bytes.
### Declaration
```cs
public System.Int64 CompressedLength { get; set; }
```
## CompressionMethod Property {#compressionmethod}
Gets the method used to compress this file.
### Declaration
```cs
public ZipCompressionMethod CompressionMethod { get; set; }
```
