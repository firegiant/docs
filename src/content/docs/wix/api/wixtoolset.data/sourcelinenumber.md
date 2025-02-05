---
title: SourceLineNumber Class
---
Represents file name and line number for source file
## Methods
| Method | Description |
| ------ | ----------- |
| [CreateFromEncoded(encodedSourceLineNumbers)](#createfromencoded_encodedsourcelinenumbers) | Creates a source line number from an encoded string. |
| [CreateFromUri(uri)](#createfromuri_uri) | Creates a source line number from a URI. |
| [CreateFromXObject(node, offset)](#createfromxobject_node_offset) | Creates a source line number from an XObject. |
| [Equals(obj)](#equals_obj) | Determines if two SourceLineNumbers are equivalent. |
| [GetEncoded()](#getencoded_nop) | Returns the SourceLineNumber and parents encoded as a string. |
| [GetFromXAnnotation(node)](#getfromxannotation_node) | Get the source line information for the current element. Typically this information is set by the precompiler for each element that it encounters. |
| [GetHashCode()](#gethashcode_nop) | Serves as a hash code for a particular type. |
| [ToString()](#tostring_nop) | Shows a string representation of a source line number. |
## Properties
| Property | Description |
| ------ | ----------- |
| [FileName](#filename) | Gets the file name of the source. |
| [LineNumber](#linenumber) | Gets or sets the line number of the source. |
| [Parent](#parent) | Gets or sets the parent source line number that included this source line number. |
| [QualifiedFileName](#qualifiedfilename) | Gets the file name and line information. |
`WixToolset.Data.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CreateFromEncoded(encodedSourceLineNumbers) Method {#createfromencoded_encodedsourcelinenumbers}
Creates a source line number from an encoded string.
### Declaration
```cs
public static SourceLineNumber CreateFromEncoded(
  string encodedSourceLineNumbers
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| encodedSourceLineNumbers | string | Encoded string to parse. |
## CreateFromUri(uri) Method {#createfromuri_uri}
Creates a source line number from a URI.
### Declaration
```cs
public static SourceLineNumber CreateFromUri(
  string uri
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| uri | string | Uri to convert into source line number |
## CreateFromXObject(node, offset) Method {#createfromxobject_node_offset}
Creates a source line number from an XObject.
### Declaration
```cs
public static SourceLineNumber CreateFromXObject(
  System.Xml.Linq.XObject node,
  int offset
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| node | System.Xml.Linq.XObject | XML node to create source line number from. |
| offset | int | Optional line number offset into XML file not already included in the line information. |
## Equals(obj) Method {#equals_obj}
Determines if two SourceLineNumbers are equivalent.
### Declaration
```cs
public bool Equals(
  System.Object obj
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| obj | System.Object | Object to compare. |
### Return value
`bool` True if SourceLineNumbers are equivalent.
## GetEncoded() Method {#getencoded_nop}
Returns the SourceLineNumber and parents encoded as a string.
### Declaration
```cs
public string GetEncoded()
```
## GetFromXAnnotation(node) Method {#getfromxannotation_node}
Get the source line information for the current element. Typically this information is set by the precompiler for each element that it encounters.
### Declaration
```cs
public static SourceLineNumber GetFromXAnnotation(
  System.Xml.Linq.XObject node
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| node | System.Xml.Linq.XObject | Element to get source line information for. |
### Return value
`SourceLineNumber` The source line number used to author the element being processed or null if the preprocessor did not process the element or the node is not an element.
## GetHashCode() Method {#gethashcode_nop}
Serves as a hash code for a particular type.
### Declaration
```cs
public int GetHashCode()
```
### Return value
`int` The hash code.
## ToString() Method {#tostring_nop}
Shows a string representation of a source line number.
### Declaration
```cs
public string ToString()
```
### Return value
`string` String representation of a source line number.
## FileName Property {#filename}
Gets the file name of the source.
### Declaration
```cs
public string FileName { get; set; }
```
## LineNumber Property {#linenumber}
Gets or sets the line number of the source.
### Declaration
```cs
public System.Nullable<System.Int32> LineNumber { get; set; }
```
## Parent Property {#parent}
Gets or sets the parent source line number that included this source line number.
### Declaration
```cs
public SourceLineNumber Parent { get; set; }
```
## QualifiedFileName Property {#qualifiedfilename}
Gets the file name and line information.
### Declaration
```cs
public string QualifiedFileName { get; set; }
```
