---
title: DuplicateStream Class
---
Duplicates a source stream by maintaining a separate position.
## Methods
| Method | Description |
| ------ | ----------- |
| [Close()](#close_nop) | Closes the underlying stream, effectively closing ALL duplicates. |
| [Flush()](#flush_nop) | Flushes the source stream. |
| [OriginalStream(stream)](#originalstream_stream) | Retrieves the original stream from a possible duplicate stream. |
| [Read(buffer, offset, count)](#read_buffer_offset_count) | Reads from the source stream while maintaining a separate position and not impacting the source stream's position. |
| [Seek(offset, origin)](#seek_offset_origin) | Changes the position of this stream without impacting the source stream's position. |
| [SetLength(value)](#setlength_value) | Sets the length of the source stream. |
| [Write(buffer, offset, count)](#write_buffer_offset_count) | Writes to the source stream while maintaining a separate position and not impacting the source stream's position. |
## Properties
| Property | Description |
| ------ | ----------- |
| [CanRead](#canread) | Gets a value indicating whether the source stream supports reading. |
| [CanSeek](#canseek) | Gets a value indicating whether the source stream supports seeking. |
| [CanWrite](#canwrite) | Gets a value indicating whether the source stream supports writing. |
| [Length](#length) | Gets the length of the source stream. |
| [Position](#position) | Gets or sets the position of the current stream, ignoring the position of the source stream. |
| [Source](#source) | Gets the original stream that was used to create the duplicate. |
### Remarks
WARNING: duplicate streams are not thread-safe with respect to each other or the original stream. If multiple threads use duplicate copies of the same stream, they must synchronize for any operations.
`WixToolset.Dtf.Compression.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Close() Method {#close_nop}
Closes the underlying stream, effectively closing ALL duplicates.
### Declaration
```cs
public void Close()
```
## Flush() Method {#flush_nop}
Flushes the source stream.
### Declaration
```cs
public void Flush()
```
## OriginalStream(stream) Method {#originalstream_stream}
Retrieves the original stream from a possible duplicate stream.
### Declaration
```cs
public static System.IO.Stream OriginalStream(
  System.IO.Stream stream
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| stream | System.IO.Stream | Possible duplicate stream. |
### Return value
`System.IO.Stream` If the stream is a DuplicateStream, returns the duplicate's source; otherwise returns the same stream.
## Read(buffer, offset, count) Method {#read_buffer_offset_count}
Reads from the source stream while maintaining a separate position and not impacting the source stream's position.
### Declaration
```cs
public int Read(
  System.Byte[] buffer,
  int offset,
  int count
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| buffer | System.Byte[] | An array of bytes. When this method returns, the buffer contains the specified byte array with the values between offset and (offset + count - 1) replaced by the bytes read from the current source. |
| offset | int | The zero-based byte offset in buffer at which to begin storing the data read from the current stream. |
| count | int | The maximum number of bytes to be read from the current stream. |
### Return value
`int` The total number of bytes read into the buffer. This can be less than the number of bytes requested if that many bytes are not currently available, or zero (0) if the end of the stream has been reached.
## Seek(offset, origin) Method {#seek_offset_origin}
Changes the position of this stream without impacting the source stream's position.
### Declaration
```cs
public System.Int64 Seek(
  System.Int64 offset,
  System.IO.SeekOrigin origin
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| offset | System.Int64 | A byte offset relative to the origin parameter. |
| origin | System.IO.SeekOrigin | A value of type SeekOrigin indicating the reference point used to obtain the new position. |
### Return value
`System.Int64` The new position within the current stream.
## SetLength(value) Method {#setlength_value}
Sets the length of the source stream.
### Declaration
```cs
public void SetLength(
  System.Int64 value
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| value | System.Int64 | The desired length of the stream in bytes. |
## Write(buffer, offset, count) Method {#write_buffer_offset_count}
Writes to the source stream while maintaining a separate position and not impacting the source stream's position.
### Declaration
```cs
public void Write(
  System.Byte[] buffer,
  int offset,
  int count
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| buffer | System.Byte[] | An array of bytes. This method copies count bytes from buffer to the current stream. |
| offset | int | The zero-based byte offset in buffer at which to begin copying bytes to the current stream. |
| count | int | The number of bytes to be written to the current stream. |
## CanRead Property {#canread}
Gets a value indicating whether the source stream supports reading.
### Declaration
```cs
public bool CanRead { get; set; }
```
## CanSeek Property {#canseek}
Gets a value indicating whether the source stream supports seeking.
### Declaration
```cs
public bool CanSeek { get; set; }
```
## CanWrite Property {#canwrite}
Gets a value indicating whether the source stream supports writing.
### Declaration
```cs
public bool CanWrite { get; set; }
```
## Length Property {#length}
Gets the length of the source stream.
### Declaration
```cs
public System.Int64 Length { get; set; }
```
## Position Property {#position}
Gets or sets the position of the current stream, ignoring the position of the source stream.
### Declaration
```cs
public System.Int64 Position { get; set; }
```
## Source Property {#source}
Gets the original stream that was used to create the duplicate.
### Declaration
```cs
public System.IO.Stream Source { get; set; }
```
