---
title: Record Class
---
The Record object is a container for holding and transferring a variable number of values. Fields within the record are numerically indexed and can contain strings, integers, streams, and null values. Record fields are indexed starting with 1. Field 0 is a special format field.
## Methods
| Method | Description |
| ------ | ----------- |
| [Clear()](#clear_nop) | Sets all fields in a record to null. |
| [FromHandle(handle, ownsHandle)](#fromhandle_handle_ownshandle) | Creates a new Record object from an integer record handle. |
| [GetDataSize()](#getdatasize_nop) | Gets the length of a record field. The count does not include the terminating null. |
| [GetDataSize(fieldName)](#getdatasize_fieldname) | Gets the length of a record field. The count does not include the terminating null. |
| [GetInteger(field)](#getinteger_field) | Gets a field value as an integer. |
| [GetInteger(fieldName)](#getinteger_fieldname) | Gets a field value as an integer. |
| [GetNullableInteger(field)](#getnullableinteger_field) | Gets a field value as an integer. |
| [GetNullableInteger(fieldName)](#getnullableinteger_fieldname) | Gets a field value as an integer. |
| [GetStream(field, filePath)](#getstream_field_filepath) | Reads a record stream field into a file. |
| [GetStream(fieldName, filePath)](#getstream_fieldname_filepath) | Reads a record stream field into a file. |
| [GetStream(field)](#getstream_field) | Gets a record stream field. |
| [GetStream(fieldName)](#getstream_fieldname) | Gets a record stream field. |
| [GetString(field)](#getstring_field) | Gets a field value as a string. |
| [GetString(fieldName)](#getstring_fieldname) | Gets a field value as a string. |
| [IsNull(field)](#isnull_field) | Reports whether a record field is null. |
| [IsNull(fieldName)](#isnull_fieldname) | Reports whether a record field is null. |
| [SetInteger(field, value)](#setinteger_field_value) | Sets the value of a field to an integer. |
| [SetInteger(fieldName, value)](#setinteger_fieldname_value) | Sets the value of a field to an integer. |
| [SetStream(field, filePath)](#setstream_field_filepath) | Sets a record stream field from a file. Stream data cannot be inserted into temporary fields. |
| [SetStream(fieldName, filePath)](#setstream_fieldname_filepath) | Sets a record stream field from a file. Stream data cannot be inserted into temporary fields. |
| [SetStream(field, stream)](#setstream_field_stream) | Sets a record stream field from a Stream object. Stream data cannot be inserted into temporary fields. |
| [SetStream(fieldName, stream)](#setstream_fieldname_stream) | Sets a record stream field from a Stream object. Stream data cannot be inserted into temporary fields. |
| [SetString(field, value)](#setstring_field_value) | Sets the value of a field to a string. |
| [SetString(fieldName, value)](#setstring_fieldname_value) | Sets the value of a field to a string. |
| [ToString()](#tostring_nop) | Gets a formatted string representation of the Record. |
| [ToString(provider)](#tostring_provider) | Gets a formatted string representation of the Record, optionally using a Session to format properties. |
| [ToString(format)](#tostring_format) | Gets a formatted string representation of the Record. |
| [ToString(format, provider)](#tostring_format_provider) | Gets a formatted string representation of the Record, optionally using a Session to format properties. |
## Properties
| Property | Description |
| ------ | ----------- |
| [FieldCount](#fieldcount) | Gets the number of fields in a record. |
| [FormatString](#formatstring) | Gets or sets field 0 of the Record, which is the format string. |
| [Item](#item) | Gets or sets a record field value. |
| [Item](#item) | Gets or sets a record field value. |
### Remarks
Most methods on the Record class have overloads that allow using either a number or a name to designate a field. However note that field names only exist when the Record is directly returned from a query on a database. For other records, attempting to access a field by name will result in an InvalidOperationException.

`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Clear() Method {#clear_nop}
Sets all fields in a record to null.
### Declaration
```cs
public void Clear()
```
### Remarks
Win32 MSI API: [MsiRecordClearData](http://msdn.microsoft.com/library/en-us/msi/setup/msirecordcleardata.asp)

## FromHandle(handle, ownsHandle) Method {#fromhandle_handle_ownshandle}
Creates a new Record object from an integer record handle.
### Declaration
```cs
public static Record FromHandle(
  IntPtr handle,
  bool ownsHandle
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| handle | IntPtr | Integer record handle |
| ownsHandle | bool | true to close the handle when this object is disposed or finalized |
### Remarks
This method is only provided for interop purposes. A Record object should normally be obtained by calling «see M:WixToolset.Dtf.WindowsInstaller.View.Fetch» other methods.The handle will be closed when this object is disposed or finalized.


## GetDataSize() Method {#getdatasize_nop}
Gets the length of a record field. The count does not include the terminating null.
### Declaration
```cs
public int GetDataSize()
```
### Remarks
The returned data size is 0 if the field is null, non-existent, or an internal object pointer. The method also returns 0 if the handle is not a valid Record handle.
If the data is in integer format, the property returns 2 or 4.
If the data is in string format, the property returns the character count (not including the NULL terminator).
If the data is in stream format, the property returns the byte count.
Win32 MSI API: [MsiRecordDataSize](http://msdn.microsoft.com/library/en-us/msi/setup/msirecorddatasize.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The field is less than 0 or greater than the
            number of fields in the Record. |
## GetDataSize(fieldName) Method {#getdatasize_fieldname}
Gets the length of a record field. The count does not include the terminating null.
### Declaration
```cs
public int GetDataSize(
  string fieldName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fieldName | string | Specifies the field to check. |
### Remarks
The returned data size is 0 if the field is null, non-existent, or an internal object pointer. The method also returns 0 if the handle is not a valid Record handle.
If the data is in integer format, the property returns 2 or 4.
If the data is in string format, the property returns the character count (not including the NULL terminator).
If the data is in stream format, the property returns the byte count.

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The field name does not match any
            of the named fields in the Record. |
## GetInteger(field) Method {#getinteger_field}
Gets a field value as an integer.
### Declaration
```cs
public int GetInteger(
  int field
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| field | int | Specifies the field to retrieve. |
### Return value
`int` Integer value of the field, or 0 if the field is null.
### Remarks
Win32 MSI API: [MsiRecordGetInteger](http://msdn.microsoft.com/library/en-us/msi/setup/msirecordgetinteger.asp)

### See also
- M:WixToolset.Dtf.WindowsInstaller.Record.GetNullableInteger(System.Int32)
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The field is less than 0 or greater than the
            number of fields in the Record. |
## GetInteger(fieldName) Method {#getinteger_fieldname}
Gets a field value as an integer.
### Declaration
```cs
public int GetInteger(
  string fieldName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fieldName | string | Specifies the field to retrieve. |
### Return value
`int` Integer value of the field, or 0 if the field is null.
### See also
- M:WixToolset.Dtf.WindowsInstaller.Record.GetNullableInteger(System.String)
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The field name does not match any
            of the named fields in the Record. |
## GetNullableInteger(field) Method {#getnullableinteger_field}
Gets a field value as an integer.
### Declaration
```cs
public System.Nullable<System.Int32> GetNullableInteger(
  int field
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| field | int | Specifies the field to retrieve. |
### Return value
`System.Nullable<System.Int32>` Integer value of the field, or null if the field is null.
### Remarks
Win32 MSI API: [MsiRecordGetInteger](http://msdn.microsoft.com/library/en-us/msi/setup/msirecordgetinteger.asp)

### See also
- M:WixToolset.Dtf.WindowsInstaller.Record.GetInteger(System.Int32)
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The field is less than 0 or greater than the
            number of fields in the Record. |
## GetNullableInteger(fieldName) Method {#getnullableinteger_fieldname}
Gets a field value as an integer.
### Declaration
```cs
public System.Nullable<System.Int32> GetNullableInteger(
  string fieldName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fieldName | string | Specifies the field to retrieve. |
### Return value
`System.Nullable<System.Int32>` Integer value of the field, or null if the field is null.
### See also
- M:WixToolset.Dtf.WindowsInstaller.Record.GetInteger(System.String)
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The field name does not match any
            of the named fields in the Record. |
## GetStream(field, filePath) Method {#getstream_field_filepath}
Reads a record stream field into a file.
### Declaration
```cs
public void GetStream(
  int field,
  string filePath
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| field | int | Specifies the field of the Record to get. |
| filePath | string | Specifies the path to the file to contain the stream. |
### Remarks
This method is capable of directly extracting substorages. To do so, first select both the `Name` and `Data` column of the `_Storages` table, then get the stream of the `Data` field. However, substorages may only be extracted from a database that is open in read-only mode.
Win32 MSI API: [MsiRecordReadStream](http://msdn.microsoft.com/library/en-us/msi/setup/msirecordreadstream.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The field is less than 0 or greater than the
            number of fields in the Record. |
| T:System.NotSupportedException | Attempt to extract a storage from a database open
            in read-write mode, or from a database without an associated file path |
## GetStream(fieldName, filePath) Method {#getstream_fieldname_filepath}
Reads a record stream field into a file.
### Declaration
```cs
public void GetStream(
  string fieldName,
  string filePath
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fieldName | string | Specifies the field of the Record to get. |
| filePath | string | Specifies the path to the file to contain the stream. |
### Remarks
This method is capable of directly extracting substorages. To do so, first select both the `Name` and `Data` column of the `_Storages` table, then get the stream of the `Data` field. However, substorages may only be extracted from a database that is open in read-only mode.

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The field name does not match any
            of the named fields in the Record. |
| T:System.NotSupportedException | Attempt to extract a storage from a database open
            in read-write mode, or from a database without an associated file path |
## GetStream(field) Method {#getstream_field}
Gets a record stream field.
### Declaration
```cs
public System.IO.Stream GetStream(
  int field
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| field | int | Specifies the field of the Record to get. |
### Return value
`System.IO.Stream` A Stream that reads the field data.
### Remarks
This method is not capable of reading substorages. To extract a substorage, use «see M:WixToolset.Dtf.WindowsInstaller.Record.GetStream(System.Int32,System.String)» .
Win32 MSI API: [MsiRecordReadStream](http://msdn.microsoft.com/library/en-us/msi/setup/msirecordreadstream.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The field is less than 0 or greater than the
            number of fields in the Record. |
## GetStream(fieldName) Method {#getstream_fieldname}
Gets a record stream field.
### Declaration
```cs
public System.IO.Stream GetStream(
  string fieldName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fieldName | string | Specifies the field of the Record to get. |
### Return value
`System.IO.Stream` A Stream that reads the field data.
### Remarks
This method is not capable of reading substorages. To extract a substorage, use «see M:WixToolset.Dtf.WindowsInstaller.Record.GetStream(System.String,System.String)» .

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The field name does not match any
            of the named fields in the Record. |
## GetString(field) Method {#getstring_field}
Gets a field value as a string.
### Declaration
```cs
public string GetString(
  int field
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| field | int | Specifies the field to retrieve. |
### Return value
`string` String value of the field, or an empty string if the field is null.
### Remarks
Win32 MSI API: [MsiRecordGetString](http://msdn.microsoft.com/library/en-us/msi/setup/msirecordgetstring.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The field is less than 0 or greater than the
            number of fields in the Record. |
## GetString(fieldName) Method {#getstring_fieldname}
Gets a field value as a string.
### Declaration
```cs
public string GetString(
  string fieldName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fieldName | string | Specifies the field to retrieve. |
### Return value
`string` String value of the field, or an empty string if the field is null.
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The field name does not match any
            of the named fields in the Record. |
## IsNull(field) Method {#isnull_field}
Reports whether a record field is null.
### Declaration
```cs
public bool IsNull(
  int field
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| field | int | Specifies the field to check. |
### Return value
`bool` True if the field is null, false otherwise.
### Remarks
Win32 MSI API: [MsiRecordIsNull](http://msdn.microsoft.com/library/en-us/msi/setup/msirecordisnull.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The field is less than 0 or greater than the
            number of fields in the Record. |
## IsNull(fieldName) Method {#isnull_fieldname}
Reports whether a record field is null.
### Declaration
```cs
public bool IsNull(
  string fieldName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fieldName | string | Specifies the field to check. |
### Return value
`bool` True if the field is null, false otherwise.
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The field name does not match any
            of the named fields in the Record. |
## SetInteger(field, value) Method {#setinteger_field_value}
Sets the value of a field to an integer.
### Declaration
```cs
public void SetInteger(
  int field,
  int value
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| field | int | Specifies the field to set. |
| value | int | new value of the field |
### Remarks
Win32 MSI API: [MsiRecordSetInteger](http://msdn.microsoft.com/library/en-us/msi/setup/msirecordsetinteger.asp)

### See also
- M:WixToolset.Dtf.WindowsInstaller.Record.SetNullableInteger(System.Int32,System.Nullable{System.Int32})
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The field is less than 0 or greater than the
            number of fields in the Record. |
## SetInteger(fieldName, value) Method {#setinteger_fieldname_value}
Sets the value of a field to an integer.
### Declaration
```cs
public void SetInteger(
  string fieldName,
  int value
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fieldName | string | Specifies the field to set. |
| value | int | new value of the field |
### See also
- M:WixToolset.Dtf.WindowsInstaller.Record.SetNullableInteger(System.String,System.Nullable{System.Int32})
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The field name does not match any
            of the named fields in the Record. |
## SetStream(field, filePath) Method {#setstream_field_filepath}
Sets a record stream field from a file. Stream data cannot be inserted into temporary fields.
### Declaration
```cs
public void SetStream(
  int field,
  string filePath
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| field | int | Specifies the field of the Record to set. |
| filePath | string | Specifies the path to the file containing the stream. |
### Remarks
The contents of the specified file are read into a stream object. The stream persists if the Record is inserted into the Database and the Database is committed.
To reset the stream to its beginning you must pass in null for filePath. Do not pass an empty string, "", to reset the stream.
Setting a stream with this method is more efficient than setting a field to a FileStream object.
Win32 MSI API: [MsiRecordsetStream](http://msdn.microsoft.com/library/en-us/msi/setup/msirecordsetstream.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The field is less than 0 or greater than the
            number of fields in the Record. |
## SetStream(fieldName, filePath) Method {#setstream_fieldname_filepath}
Sets a record stream field from a file. Stream data cannot be inserted into temporary fields.
### Declaration
```cs
public void SetStream(
  string fieldName,
  string filePath
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fieldName | string | Specifies the field name of the Record to set. |
| filePath | string | Specifies the path to the file containing the stream. |
### Remarks
The contents of the specified file are read into a stream object. The stream persists if the Record is inserted into the Database and the Database is committed. To reset the stream to its beginning you must pass in null for filePath. Do not pass an empty string, "", to reset the stream.
Setting a stream with this method is more efficient than setting a field to a FileStream object.

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The field name does not match any
            of the named fields in the Record. |
## SetStream(field, stream) Method {#setstream_field_stream}
Sets a record stream field from a Stream object. Stream data cannot be inserted into temporary fields.
### Declaration
```cs
public void SetStream(
  int field,
  System.IO.Stream stream
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| field | int | Specifies the field of the Record to set. |
| stream | System.IO.Stream | Specifies the stream data. |
### Remarks
The stream persists if the Record is inserted into the Database and the Database is committed.
Win32 MSI API: [MsiRecordsetStream](http://msdn.microsoft.com/library/en-us/msi/setup/msirecordsetstream.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The field is less than 0 or greater than the
            number of fields in the Record. |
## SetStream(fieldName, stream) Method {#setstream_fieldname_stream}
Sets a record stream field from a Stream object. Stream data cannot be inserted into temporary fields.
### Declaration
```cs
public void SetStream(
  string fieldName,
  System.IO.Stream stream
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fieldName | string | Specifies the field name of the Record to set. |
| stream | System.IO.Stream | Specifies the stream data. |
### Remarks
The stream persists if the Record is inserted into the Database and the Database is committed.

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The field name does not match any
            of the named fields in the Record. |
## SetString(field, value) Method {#setstring_field_value}
Sets the value of a field to a string.
### Declaration
```cs
public void SetString(
  int field,
  string value
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| field | int | Specifies the field to set. |
| value | string | new value of the field |
### Remarks
Win32 MSI API: [MsiRecordSetString](http://msdn.microsoft.com/library/en-us/msi/setup/msirecordsetstring.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The field is less than 0 or greater than the
            number of fields in the Record. |
## SetString(fieldName, value) Method {#setstring_fieldname_value}
Sets the value of a field to a string.
### Declaration
```cs
public void SetString(
  string fieldName,
  string value
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fieldName | string | Specifies the field to set. |
| value | string | new value of the field |
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The field name does not match any
            of the named fields in the Record. |
## ToString() Method {#tostring_nop}
Gets a formatted string representation of the Record.
### Declaration
```cs
public string ToString()
```
### Return value
`string` A formatted string representation of the Record.
### Remarks
If field 0 of the Record is set to a nonempty string, it is used to format the data in the Record.
Win32 MSI API: [MsiFormatRecord](http://msdn.microsoft.com/library/en-us/msi/setup/msiformatrecord.asp)

### See also
- P:WixToolset.Dtf.WindowsInstaller.Record.FormatString
- M:WixToolset.Dtf.WindowsInstaller.Session.FormatRecord(WixToolset.Dtf.WindowsInstaller.Record)
## ToString(provider) Method {#tostring_provider}
Gets a formatted string representation of the Record, optionally using a Session to format properties.
### Declaration
```cs
public string ToString(
  System.IFormatProvider provider
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| provider | System.IFormatProvider | an optional Session instance that will be used to lookup any properties in the Record's format string |
### Return value
`string` A formatted string representation of the Record.
### Remarks
If field 0 of the Record is set to a nonempty string, it is used to format the data in the Record.
Win32 MSI API: [MsiFormatRecord](http://msdn.microsoft.com/library/en-us/msi/setup/msiformatrecord.asp)

### See also
- P:WixToolset.Dtf.WindowsInstaller.Record.FormatString
- M:WixToolset.Dtf.WindowsInstaller.Session.FormatRecord(WixToolset.Dtf.WindowsInstaller.Record)
## ToString(format) Method {#tostring_format}
Gets a formatted string representation of the Record.
### Declaration
```cs
public string ToString(
  string format
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| format | string | String to be used to format the data in the Record, instead of the Record's format string. |
### Return value
`string` A formatted string representation of the Record.
### Remarks
Win32 MSI API: [MsiFormatRecord](http://msdn.microsoft.com/library/en-us/msi/setup/msiformatrecord.asp)

## ToString(format, provider) Method {#tostring_format_provider}
Gets a formatted string representation of the Record, optionally using a Session to format properties.
### Declaration
```cs
public string ToString(
  string format,
  System.IFormatProvider provider
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| format | string | String to be used to format the data in the Record, instead of the Record's format string. |
| provider | System.IFormatProvider | an optional Session instance that will be used to lookup any properties in the Record's format string |
### Return value
`string` A formatted string representation of the Record.
### Remarks
Win32 MSI API: [MsiFormatRecord](http://msdn.microsoft.com/library/en-us/msi/setup/msiformatrecord.asp)

### See also
- P:WixToolset.Dtf.WindowsInstaller.Record.FormatString
- M:WixToolset.Dtf.WindowsInstaller.Session.FormatRecord(WixToolset.Dtf.WindowsInstaller.Record)
## FieldCount Property {#fieldcount}
Gets the number of fields in a record.
### Declaration
```cs
public int FieldCount { get; set; }
```
### Remarks
Win32 MSI API: [MsiRecordGetFieldCount](http://msdn.microsoft.com/library/en-us/msi/setup/msirecordgetfieldcount.asp)

## FormatString Property {#formatstring}
Gets or sets field 0 of the Record, which is the format string.
### Declaration
```cs
public string FormatString { get; set; }
```
## Item Property {#item}
Gets or sets a record field value.
### Declaration
```cs
public System.Object Item[
  string fieldName
] { get; set; }
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| fieldName | string | Specifies the name of the field of the Record to get or set. |
### Remarks
When getting a field, the type of the object returned depends on the type of the Record field. The object will be one of: Int16, Int32, String, Stream, or null.
When setting a field, the type of the object provided will be converted to match the View query that returned the record, or if Record was not returned from a view then the type of the object provided will determine the type of the Record field. The object should be one of: Int16, Int32, String, Stream, or null.

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The name does not match any known field of the Record. |
## Item Property {#item}
Gets or sets a record field value.
### Declaration
```cs
public System.Object Item[
  int field
] { get; set; }
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| field | int | Specifies the field of the Record to get or set. |
### Remarks
Record fields are indexed starting with 1. Field 0 is a special format field.
When getting a field, the type of the object returned depends on the type of the Record field. The object will be one of: Int16, Int32, String, Stream, or null. If the Record was returned from a View, the type will match that of the field from the View query. Otherwise, the type will match the type of the last value set for the field.
When setting a field, the type of the object provided will be converted to match the View query that returned the Record, or if Record was not returned from a View then the type of the object provided will determine the type of the Record field. The object should be one of: Int16, Int32, String, Stream, or null.
The type-specific getters and setters are slightly more efficient than this property, since they don't have to do the extra work to infer the value's type every time.
Win32 MSI APIs: [MsiRecordGetInteger](http://msdn.microsoft.com/library/en-us/msi/setup/msirecordgetinteger.asp) , [MsiRecordGetString](http://msdn.microsoft.com/library/en-us/msi/setup/msirecordgetstring.asp) , [MsiRecordSetInteger](http://msdn.microsoft.com/library/en-us/msi/setup/msirecordsetinteger.asp) , [MsiRecordSetString](http://msdn.microsoft.com/library/en-us/msi/setup/msirecordsetstring.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The field is less than 0 or greater than the
            number of fields in the Record. |
