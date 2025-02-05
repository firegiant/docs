---
title: CrcStream Class
---
Wraps a source stream and calcaluates a CRC over all bytes that are read or written.
## Methods
| Method | Description |
| ------ | ----------- |
| [Close()](#close_nop) | Closes the underlying stream. |
| [Flush()](#flush_nop) | Flushes the source stream. |
| [Read(buffer, offset, count)](#read_buffer_offset_count) | Reads a sequence of bytes from the source stream and advances the position within the stream by the number of bytes read. |
| [Seek(offset, origin)](#seek_offset_origin) | Sets the position within the source stream. |
| [SetLength(value)](#setlength_value) | Sets the length of the source stream. |
| [Write(buffer, offset, count)](#write_buffer_offset_count) | Writes a sequence of bytes to the source stream and advances the current position within this stream by the number of bytes written. |
## Properties
| Property | Description |
| ------ | ----------- |
| [CanRead](#canread) | Gets a value indicating whether the source stream supports reading. |
| [CanSeek](#canseek) | Gets a value indicating whether the source stream supports seeking. |
| [CanWrite](#canwrite) | Gets a value indicating whether the source stream supports writing. |
| [Crc](#crc) | Gets the current CRC over all bytes that have been read or written since this instance was created. |
| [Length](#length) | Gets the length of the source stream. |
| [Position](#position) | Gets or sets the position of the source stream. |
| [Source](#source) | Gets the underlying stream that this stream reads from or writes to. |
### Remarks
The CRC algorithm matches that used in the standard ZIP file format.
`WixToolset.Dtf.Compression.Zip.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Close() Method {#close_nop}
Closes the underlying stream.
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
## Read(buffer, offset, count) Method {#read_buffer_offset_count}
Reads a sequence of bytes from the source stream and advances the position within the stream by the number of bytes read.
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
Sets the position within the source stream.
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
`System.Int64` The new position within the source stream.
### Remarks
Note the CRC is only calculated over bytes that are actually read or written, so any bytes skipped by seeking will not contribute to the CRC.
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
Writes a sequence of bytes to the source stream and advances the current position within this stream by the number of bytes written.
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
## Crc Property {#crc}
Gets the current CRC over all bytes that have been read or written since this instance was created.
### Declaration
```cs
public System.UInt32 Crc { get; set; }
```
## Length Property {#length}
Gets the length of the source stream.
### Declaration
```cs
public System.Int64 Length { get; set; }
```
## Position Property {#position}
Gets or sets the position of the source stream.
### Declaration
```cs
public System.Int64 Position { get; set; }
```
## Source Property {#source}
Gets the underlying stream that this stream reads from or writes to.
### Declaration
```cs
public System.IO.Stream Source { get; set; }
```
