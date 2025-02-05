---
title: CustomActionData Class
---
Contains a collection of key-value pairs suitable for passing between immediate and deferred/rollback/commit custom actions.
## Methods
| Method | Description |
| ------ | ----------- |
| [Add(key, value)](#add_key_value) | Adds a key and value to the data collection. |
| [Clear()](#clear_nop) | Removes all items from the data. |
| [ContainsKey(key)](#containskey_key) | Determines whether the data contains an item with the specified key. |
| [GetEnumerator()](#getenumerator_nop) | Returns an enumerator that iterates through the collection. |
| [Remove(key)](#remove_key) | Removes the item with the specified key from the data. |
| [ToString()](#tostring_nop) | Gets a string representation of the data suitable for persisting in a property. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Count](#count) | Gets the number of items in the data. |
| [IsReadOnly](#isreadonly) | Gets a value indicating whether the data is read-only. |
| [Item](#item) | Gets or sets a data value with a specified key. |
| [Keys](#keys) | Gets a collection object containing all the keys of the data. |
| [Values](#values) | Gets a collection containing all the values of the data. |
## Fields
| Field | Description |
| ------ | ----------- |
| PropertyName | "CustomActionData" literal property name. |
### Remarks
Call the «see M:WixToolset.Dtf.WindowsInstaller.CustomActionData.ToString» method to get a string suitable for storing in a property and reconstructing the custom action data later.
### See also
- P:WixToolset.Dtf.WindowsInstaller.Session.CustomActionData
- M:WixToolset.Dtf.WindowsInstaller.Session.DoAction(System.String,WixToolset.Dtf.WindowsInstaller.CustomActionData)
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Add(key, value) Method {#add_key_value}
Adds a key and value to the data collection.
### Declaration
```cs
public void Add(
  string key,
  string value
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| key | string | Case-sensitive data key. |
| value | string | Data value (may be null). |
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentException | the key does not consist solely of letters,
            numbers, and the period, underscore, and space characters. |
## Clear() Method {#clear_nop}
Removes all items from the data.
### Declaration
```cs
public void Clear()
```
## ContainsKey(key) Method {#containskey_key}
Determines whether the data contains an item with the specified key.
### Declaration
```cs
public bool ContainsKey(
  string key
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| key | string | Case-sensitive data key. |
### Return value
`bool` true if the data contains an item with the key; otherwise, false
## GetEnumerator() Method {#getenumerator_nop}
Returns an enumerator that iterates through the collection.
### Declaration
```cs
public IEnumerator<System.Collections.Generic.KeyValuePair`2<System.String,System.String>> GetEnumerator()
```
### Return value
`IEnumerator<System.Collections.Generic.KeyValuePair`2<System.String,System.String>>` An enumerator that can be used to iterate through the collection.
## Remove(key) Method {#remove_key}
Removes the item with the specified key from the data.
### Declaration
```cs
public bool Remove(
  string key
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| key | string | Case-sensitive data key. |
### Return value
`bool` true if the item was successfully removed from the data; false if an item with the specified key was not found
## ToString() Method {#tostring_nop}
Gets a string representation of the data suitable for persisting in a property.
### Declaration
```cs
public string ToString()
```
### Return value
`string` Data string in the form "Key1=Value1;Key2=Value2"
## Count Property {#count}
Gets the number of items in the data.
### Declaration
```cs
public int Count { get; set; }
```
## IsReadOnly Property {#isreadonly}
Gets a value indicating whether the data is read-only.
### Declaration
```cs
public bool IsReadOnly { get; set; }
```
## Item Property {#item}
Gets or sets a data value with a specified key.
### Declaration
```cs
public string Item[
  string key
] { get; set; }
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| key | string | Case-sensitive data key. |
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentException | the key does not consist solely of letters,
            numbers, and the period, underscore, and space characters. |
## Keys Property {#keys}
Gets a collection object containing all the keys of the data.
### Declaration
```cs
public System.Collections.Generic.ICollection<System.String> Keys { get; set; }
```
## Values Property {#values}
Gets a collection containing all the values of the data.
### Declaration
```cs
public System.Collections.Generic.ICollection<System.String> Values { get; set; }
```
