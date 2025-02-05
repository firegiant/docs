---
title: Field Class
---
Field containing data for a column in a row.
## Methods
| Method | Description |
| ------ | ----------- |
| [AsInteger()](#asinteger_nop) | Gets the field as an integer. |
| [AsNullableInteger()](#asnullableinteger_nop) | Gets the field as an integer that could be null. |
| [AsString()](#asstring_nop) | Gets the field as a string. |
| [BestEffortSet(value)](#besteffortset_value) | Sets the value of a particular field in the row without validating. |
| [Create(columnDefinition)](#create_columndefinition) | Instantiate a new Field object of the correct type. |
| [IsIdentical(field)](#isidentical_field) | Determine if this field is identical to another field. |
| [ToString()](#tostring_nop) | Overrides the built in object implementation to return the field's data as a string. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Column](#column) | Gets or sets the column definition for this field. |
| [Data](#data) | Gets or sets the data for this field. |
| [Modified](#modified) | Gets or sets whether this field is modified. |
| [PreviousData](#previousdata) | Gets or sets the previous data. |
`WixToolset.Data.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## AsInteger() Method {#asinteger_nop}
Gets the field as an integer.
### Declaration
```cs
public int AsInteger()
```
### Return value
`int` Field's data as an integer.
## AsNullableInteger() Method {#asnullableinteger_nop}
Gets the field as an integer that could be null.
### Declaration
```cs
public System.Nullable<System.Int32> AsNullableInteger()
```
### Return value
`System.Nullable<System.Int32>` Field's data as an integer that could be null.
## AsString() Method {#asstring_nop}
Gets the field as a string.
### Declaration
```cs
public string AsString()
```
### Return value
`string` Field's data as a string.
## BestEffortSet(value) Method {#besteffortset_value}
Sets the value of a particular field in the row without validating.
### Declaration
```cs
public bool BestEffortSet(
  System.Object value
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| value | System.Object | Value of a field in the row. |
### Return value
`bool` True if successful, false if validation failed.
## Create(columnDefinition) Method {#create_columndefinition}
Instantiate a new Field object of the correct type.
### Declaration
```cs
public static Field Create(
  ColumnDefinition columnDefinition
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| columnDefinition | ColumnDefinition | The column definition for the field. |
### Return value
`Field` The new Field object.
## IsIdentical(field) Method {#isidentical_field}
Determine if this field is identical to another field.
### Declaration
```cs
public bool IsIdentical(
  Field field
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| field | Field | The other field to compare to. |
### Return value
`bool` true if they are equal; false otherwise.
## ToString() Method {#tostring_nop}
Overrides the built in object implementation to return the field's data as a string.
### Declaration
```cs
public string ToString()
```
### Return value
`string` Field's data as a string.
## Column Property {#column}
Gets or sets the column definition for this field.
### Declaration
```cs
public ColumnDefinition Column { get; set; }
```
## Data Property {#data}
Gets or sets the data for this field.
### Declaration
```cs
public System.Object Data { get; set; }
```
## Modified Property {#modified}
Gets or sets whether this field is modified.
### Declaration
```cs
public bool Modified { get; set; }
```
## PreviousData Property {#previousdata}
Gets or sets the previous data.
### Declaration
```cs
public string PreviousData { get; set; }
```
