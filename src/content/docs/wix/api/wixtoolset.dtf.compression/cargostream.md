---
title: CargoStream Class
---
Wraps a source stream and carries additional items that are disposed when the stream is closed.
## Methods
| Method | Description |
| ------ | ----------- |
| [Close()](#close_nop) | Closes the source stream and also closes the additional objects that are carried. |
| [Flush()](#flush_nop) | Flushes the source stream. |
| [Read(buffer, offset, count)](#read_buffer_offset_count) | Reads from the source stream. |
| [Seek(offset, origin)](#seek_offset_origin) | Changes the position of the source stream. |
| [SetLength(value)](#setlength_value) | Sets the length of the source stream. |
| [Write(buffer, offset, count)](#write_buffer_offset_count) | Writes to the source stream. |
## Properties
| Property | Description |
| ------ | ----------- |
| [CanRead](#canread) | Gets a value indicating whether the source stream supports reading. |
| [CanSeek](#canseek) | Gets a value indicating whether the source stream supports seeking. |
| [CanWrite](#canwrite) | Gets a value indicating whether the source stream supports writing. |
| [Cargo](#cargo) | Gets the list of additional items that are disposed when the stream is closed. The order of the list is the order in which the items are disposed. The contents can be modified any time. |
| [Length](#length) | Gets the length of the source stream. |
| [Position](#position) | Gets or sets the position of the source stream. |
| [Source](#source) | Gets the source stream of the cargo stream. |
`WixToolset.Dtf.Compression.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Close() Method {#close_nop}
Closes the source stream and also closes the additional objects that are carried.
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
Reads from the source stream.
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
| buffer | System.Byte[] | An array of bytes. When this method returns, the buffer contains the specified byte array with the values between offset and (offset + count - 1) replaced by the bytes read from the source. |
| offset | int | The zero-based byte offset in buffer at which to begin storing the data read from the stream. |
| count | int | The maximum number of bytes to be read from the stream. |
### Return value
`int` The total number of bytes read into the buffer. This can be less than the number of bytes requested if that many bytes are not currently available, or zero (0) if the end of the stream has been reached.
## Seek(offset, origin) Method {#seek_offset_origin}
Changes the position of the source stream.
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
`System.Int64` The new position within the stream.
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
Writes to the source stream.
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
| buffer | System.Byte[] | An array of bytes. This method copies count bytes from buffer to the stream. |
| offset | int | The zero-based byte offset in buffer at which to begin copying bytes to the stream. |
| count | int | The number of bytes to be written to the stream. |
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
## Cargo Property {#cargo}
Gets the list of additional items that are disposed when the stream is closed. The order of the list is the order in which the items are disposed. The contents can be modified any time.
### Declaration
```cs
public IList<System.IDisposable> Cargo { get; set; }
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
Gets the source stream of the cargo stream.
### Declaration
```cs
public System.IO.Stream Source { get; set; }
```
