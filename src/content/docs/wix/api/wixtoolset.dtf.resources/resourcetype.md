---
title: ResourceType Class
---
Represents either a standard integer resource type or a custom resource type name.
## Methods
| Method | Description |
| ------ | ----------- |
| [Equals(obj)](#equals_obj) | Tests whether one resource type equals another object. |
| [Equals(otherType)](#equals_othertype) | Tests whether one resource type equals another. |
| [GetHashCode()](#gethashcode_nop) | Gets a hash code suitable for using the resource type as a dictionary key. |
| [ToString()](#tostring_nop) | Gets a string representation of the resource type. |
## Properties
| Property | Description |
| ------ | ----------- |
| [IntegerValue](#integervalue) | Gets the integer value of the resource type, or -1 if the resource type is not an integer. |
| [IsInteger](#isinteger) | Gets a flag indicating whether the resource type is an integer type. |
`WixToolset.Dtf.Resources.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Equals(obj) Method {#equals_obj}
Tests whether one resource type equals another object.
### Declaration
```cs
public bool Equals(
  System.Object obj
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| obj | System.Object | Other object. |
### Return value
`bool` True if equal, else false.
## Equals(otherType) Method {#equals_othertype}
Tests whether one resource type equals another.
### Declaration
```cs
public bool Equals(
  ResourceType otherType
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| otherType | ResourceType | Other resource type. |
### Return value
`bool` True if equal, else false.
## GetHashCode() Method {#gethashcode_nop}
Gets a hash code suitable for using the resource type as a dictionary key.
### Declaration
```cs
public int GetHashCode()
```
### Return value
`int` Hash code based on the resource type string.
## ToString() Method {#tostring_nop}
Gets a string representation of the resource type.
### Declaration
```cs
public string ToString()
```
### Return value
`string` The custom resource name, or the name of a well-known resource type.
## IntegerValue Property {#integervalue}
Gets the integer value of the resource type, or -1 if the resource type is not an integer.
### Declaration
```cs
public int IntegerValue { get; set; }
```
## IsInteger Property {#isinteger}
Gets a flag indicating whether the resource type is an integer type.
### Declaration
```cs
public bool IsInteger { get; set; }
```
