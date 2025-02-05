---
title: QRecord Class
---
Generic record entity for queryable databases, and base for strongly-typed entity subclasses.
## Methods
| Method | Description |
| ------ | ----------- |
| [Assign()](#assign_nop) | Not yet implemented. |
| [Delete()](#delete_nop) | Deletes the record from the table if it exists. |
| [I(index)](#i_index) | Used by subclasses to get a field as an integer. |
| [Insert()](#insert_nop) | Inserts the record in the database. |
| [Insert(temporary)](#insert_temporary) | Inserts the record into the table. |
| [Merge()](#merge_nop) | Not yet implemented. |
| [NI(index)](#ni_index) | Used by subclasses to get a field as a nullable integer. |
| [Refresh()](#refresh_nop) | Not yet implemented. |
| [ToString()](#tostring_nop) | Dumps all record fields to a string. |
| [Validate()](#validate_nop) | Not yet implemented. |
| [ValidateDelete()](#validatedelete_nop) | Not yet implemented. |
| [ValidateFields()](#validatefields_nop) | Not yet implemented. |
| [ValidateNew()](#validatenew_nop) | Not yet implemented. |
## Properties
| Property | Description |
| ------ | ----------- |
| [FieldCount](#fieldcount) | Gets the number of fields in the record. |
| [Item](#item) | Gets or sets a record field. |
| [Item](#item) | Gets or sets a record field. |
### Remarks
Several predefined specialized subclasses are provided for common standard tables. Subclasses for additional standard tables or custom tables are not necessary, but they are easy to create and make the coding experience much nicer.When creating subclasses, the following attributes may be useful: «see T:WixToolset.Dtf.WindowsInstaller.Linq.DatabaseTableAttribute» , «see T:WixToolset.Dtf.WindowsInstaller.Linq.DatabaseColumnAttribute»

`WixToolset.Dtf.WindowsInstaller.Linq.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Assign() Method {#assign_nop}
Not yet implemented.
### Declaration
```cs
public void Assign()
```
## Delete() Method {#delete_nop}
Deletes the record from the table if it exists.
### Declaration
```cs
public void Delete()
```
## I(index) Method {#i_index}
Used by subclasses to get a field as an integer.
### Declaration
```cs
protected int I(
  int index
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| index | int | zero-based column index of the field |
## Insert() Method {#insert_nop}
Inserts the record in the database.
### Declaration
```cs
public void Insert()
```
### Remarks
The record (primary keys) may not already exist in the table.Use «see M:WixToolset.Dtf.WindowsInstaller.Linq.QTable`1.NewRecord» to get a new record. Prmary keys and all required fields must be filled in before insertion.

## Insert(temporary) Method {#insert_temporary}
Inserts the record into the table.
### Declaration
```cs
public void Insert(
  bool temporary
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| temporary | bool | true if the record is temporarily inserted, to be visible only as long as the database is open |
### Remarks
The record (primary keys) may not already exist in the table.Use «see M:WixToolset.Dtf.WindowsInstaller.Linq.QTable`1.NewRecord» to get a new record. Prmary keys and all required fields must be filled in before insertion.

## Merge() Method {#merge_nop}
Not yet implemented.
### Declaration
```cs
public bool Merge()
```
## NI(index) Method {#ni_index}
Used by subclasses to get a field as a nullable integer.
### Declaration
```cs
protected System.Nullable<System.Int32> NI(
  int index
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| index | int | zero-based column index of the field |
## Refresh() Method {#refresh_nop}
Not yet implemented.
### Declaration
```cs
public void Refresh()
```
## ToString() Method {#tostring_nop}
Dumps all record fields to a string.
### Declaration
```cs
public string ToString()
```
## Validate() Method {#validate_nop}
Not yet implemented.
### Declaration
```cs
public System.Collections.Generic.ICollection<WixToolset.Dtf.WindowsInstaller.ValidationErrorInfo> Validate()
```
## ValidateDelete() Method {#validatedelete_nop}
Not yet implemented.
### Declaration
```cs
public System.Collections.Generic.ICollection<WixToolset.Dtf.WindowsInstaller.ValidationErrorInfo> ValidateDelete()
```
## ValidateFields() Method {#validatefields_nop}
Not yet implemented.
### Declaration
```cs
public System.Collections.Generic.ICollection<WixToolset.Dtf.WindowsInstaller.ValidationErrorInfo> ValidateFields()
```
## ValidateNew() Method {#validatenew_nop}
Not yet implemented.
### Declaration
```cs
public System.Collections.Generic.ICollection<WixToolset.Dtf.WindowsInstaller.ValidationErrorInfo> ValidateNew()
```
## FieldCount Property {#fieldcount}
Gets the number of fields in the record.
### Declaration
```cs
public int FieldCount { get; set; }
```
## Item Property {#item}
Gets or sets a record field.
### Declaration
```cs
public string Item[
  string field
] { get; set; }
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| field | string | column name of the field |
### Remarks
Setting a field value will automatically update the database.
## Item Property {#item}
Gets or sets a record field.
### Declaration
```cs
public string Item[
  int index
] { get; set; }
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| index | int | zero-based column index of the field |
### Remarks
Setting a field value will automatically update the database.
