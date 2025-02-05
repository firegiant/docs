---
title: VersionStringTable Class
---
Represents a string table of a file version resource.
## Methods
| Method | Description |
| ------ | ----------- |
| [Clear()](#clear_nop) | Removes all strings from the string table. |
| [GetEnumerator()](#getenumerator_nop) | Gets an enumeration over all strings in the table. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Count](#count) | Gets the number of strings in the table. |
| [Item](#item) | Gets or sets a string value. |
| [Keys](#keys) | Gets a collection of all the names of the strings in the table. |
| [Locale](#locale) | Gets the locale (LCID) of the string table. |
| [Values](#values) | Gets a collection of all the values in the table. |
`WixToolset.Dtf.Resources.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Clear() Method {#clear_nop}
Removes all strings from the string table.
### Declaration
```cs
public void Clear()
```
## GetEnumerator() Method {#getenumerator_nop}
Gets an enumeration over all strings in the table.
### Declaration
```cs
public IEnumerator<System.Collections.Generic.KeyValuePair`2<System.String,System.String>> GetEnumerator()
```
### Return value
`IEnumerator<System.Collections.Generic.KeyValuePair`2<System.String,System.String>>` Enumeration of string name and value pairs
## Count Property {#count}
Gets the number of strings in the table.
### Declaration
```cs
public int Count { get; set; }
```
## Item Property {#item}
Gets or sets a string value.
### Declaration
```cs
public string Item[
  string key
] { get; set; }
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| key | string | Name of the string. |
## Keys Property {#keys}
Gets a collection of all the names of the strings in the table.
### Declaration
```cs
public System.Collections.Generic.ICollection<System.String> Keys { get; set; }
```
## Locale Property {#locale}
Gets the locale (LCID) of the string table.
### Declaration
```cs
public int Locale { get; set; }
```
## Values Property {#values}
Gets a collection of all the values in the table.
### Declaration
```cs
public System.Collections.Generic.ICollection<System.String> Values { get; set; }
```
