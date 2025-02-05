---
title: OffsetStream Class
---
Wraps a source stream and offsets all read/write/seek calls by a given value.
## Methods
| Method | Description |
| ------ | ----------- |
| [Close()](#close_nop) | Closes the underlying stream. |
| [Flush()](#flush_nop) | Flushes the source stream. |
| [Read(buffer, offset, count)](#read_buffer_offset_count) | Reads a sequence of bytes from the source stream and advances the position within the stream by the number of bytes read. |
| [ReadByte()](#readbyte_nop) | Reads a byte from the stream and advances the position within the source stream by one byte, or returns -1 if at the end of the stream. |
| [Seek(offset, origin)](#seek_offset_origin) | Sets the position within the current stream, which is equal to the position within the source stream minus the offset. |
| [SetLength(value)](#setlength_value) | Sets the effective length of the stream, which is equal to the length of the source stream minus the offset. |
| [Write(buffer, offset, count)](#write_buffer_offset_count) | Writes a sequence of bytes to the source stream and advances the current position within this stream by the number of bytes written. |
| [WriteByte(value)](#writebyte_value) | Writes a byte to the current position in the source stream and advances the position within the stream by one byte. |
## Properties
| Property | Description |
| ------ | ----------- |
| [CanRead](#canread) | Gets a value indicating whether the source stream supports reading. |
| [CanSeek](#canseek) | Gets a value indicating whether the source stream supports seeking. |
| [CanWrite](#canwrite) | Gets a value indicating whether the source stream supports writing. |
| [Length](#length) | Gets the effective length of the stream, which is equal to the length of the source stream minus the offset. |
| [Offset](#offset) | Gets the number of bytes to offset all calls before redirecting to the underlying stream. |
| [Position](#position) | Gets or sets the effective position of the stream, which is equal to the position of the source stream minus the offset. |
| [Source](#source) | Gets the underlying stream that this OffsetStream calls into. |
### Remarks
This class is used to trick archive an packing or unpacking process into reading or writing at an offset into a file, primarily for self-extracting packages.
`WixToolset.Dtf.Compression.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
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
## ReadByte() Method {#readbyte_nop}
Reads a byte from the stream and advances the position within the source stream by one byte, or returns -1 if at the end of the stream.
### Declaration
```cs
public int ReadByte()
```
### Return value
`int` The unsigned byte cast to an Int32, or -1 if at the end of the stream.
## Seek(offset, origin) Method {#seek_offset_origin}
Sets the position within the current stream, which is equal to the position within the source stream minus the offset.
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
Sets the effective length of the stream, which is equal to the length of the source stream minus the offset.
### Declaration
```cs
public void SetLength(
  System.Int64 value
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| value | System.Int64 | The desired length of the current stream in bytes. |
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
## WriteByte(value) Method {#writebyte_value}
Writes a byte to the current position in the source stream and advances the position within the stream by one byte.
### Declaration
```cs
public void WriteByte(
  System.Byte value
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| value | System.Byte | The byte to write to the stream. |
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
Gets the effective length of the stream, which is equal to the length of the source stream minus the offset.
### Declaration
```cs
public System.Int64 Length { get; set; }
```
## Offset Property {#offset}
Gets the number of bytes to offset all calls before redirecting to the underlying stream.
### Declaration
```cs
public System.Int64 Offset { get; set; }
```
## Position Property {#position}
Gets or sets the effective position of the stream, which is equal to the position of the source stream minus the offset.
### Declaration
```cs
public System.Int64 Position { get; set; }
```
## Source Property {#source}
Gets the underlying stream that this OffsetStream calls into.
### Declaration
```cs
public System.IO.Stream Source { get; set; }
```
