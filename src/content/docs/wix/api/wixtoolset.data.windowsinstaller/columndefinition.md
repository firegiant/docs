---
title: ColumnDefinition Class
---
Definition of a table's column.
## Methods
| Method | Description |
| ------ | ----------- |
| [CompareTo(other)](#compareto_other) | Compare this column definition to another column definition. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Added](#added) | Gets whether this column was added via a transform. |
| [Category](#category) | Gets the validation category for this column. |
| [Description](#description) | Gets the description for this column. |
| [IsLocalizable](#islocalizable) | Gets if the column is localizable. Can be because the type is localizable, or because the column was explicitly set to be so. |
| [KeyColumn](#keycolumn) | Gets the foreign key column that this column refers to. |
| [KeyTable](#keytable) | Gets the table that has the foreign key for this column |
| [Length](#length) | Gets the length of the column. |
| [MaxValue](#maxvalue) | Gets the maximum value for the column. |
| [MinValue](#minvalue) | Gets the minimum value for the column. |
| [ModularizeType](#modularizetype) | Gets the type of modularization for this column. |
| [Name](#name) | Gets the name of the column. |
| [Nullable](#nullable) | Gets if the column is nullable. |
| [Possibilities](#possibilities) | Gets the set of possibilities for this column. |
| [PrimaryKey](#primarykey) | Gets if the column is a primary key. |
| [Type](#type) | Gets the type of the column. |
| [Unreal](#unreal) | Gets if column is Unreal. |
| [UseCData](#usecdata) | Gets if whitespace should be preserved in a CDATA node. |
`WixToolset.Data.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CompareTo(other) Method {#compareto_other}
Compare this column definition to another column definition.
### Declaration
```cs
public int CompareTo(
  ColumnDefinition other
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| other | ColumnDefinition | The to compare with this one. |
### Return value
`int` 0 if the columns' core propeties are the same; otherwise, non-0.
### Remarks
Only Windows Installer traits are compared, allowing for updates to WiX-specific table definitions.
## Added Property {#added}
Gets whether this column was added via a transform.
### Declaration
```cs
public bool Added { get; set; }
```
## Category Property {#category}
Gets the validation category for this column.
### Declaration
```cs
public ColumnCategory Category { get; set; }
```
## Description Property {#description}
Gets the description for this column.
### Declaration
```cs
public string Description { get; set; }
```
## IsLocalizable Property {#islocalizable}
Gets if the column is localizable. Can be because the type is localizable, or because the column was explicitly set to be so.
### Declaration
```cs
public bool IsLocalizable { get; set; }
```
## KeyColumn Property {#keycolumn}
Gets the foreign key column that this column refers to.
### Declaration
```cs
public System.Nullable<System.Int32> KeyColumn { get; set; }
```
## KeyTable Property {#keytable}
Gets the table that has the foreign key for this column
### Declaration
```cs
public string KeyTable { get; set; }
```
## Length Property {#length}
Gets the length of the column.
### Declaration
```cs
public int Length { get; set; }
```
## MaxValue Property {#maxvalue}
Gets the maximum value for the column.
### Declaration
```cs
public System.Nullable<System.Int64> MaxValue { get; set; }
```
## MinValue Property {#minvalue}
Gets the minimum value for the column.
### Declaration
```cs
public System.Nullable<System.Int64> MinValue { get; set; }
```
## ModularizeType Property {#modularizetype}
Gets the type of modularization for this column.
### Declaration
```cs
public ColumnModularizeType ModularizeType { get; set; }
```
## Name Property {#name}
Gets the name of the column.
### Declaration
```cs
public string Name { get; set; }
```
## Nullable Property {#nullable}
Gets if the column is nullable.
### Declaration
```cs
public bool Nullable { get; set; }
```
## Possibilities Property {#possibilities}
Gets the set of possibilities for this column.
### Declaration
```cs
public string Possibilities { get; set; }
```
## PrimaryKey Property {#primarykey}
Gets if the column is a primary key.
### Declaration
```cs
public bool PrimaryKey { get; set; }
```
## Type Property {#type}
Gets the type of the column.
### Declaration
```cs
public ColumnType Type { get; set; }
```
## Unreal Property {#unreal}
Gets if column is Unreal.
### Declaration
```cs
public bool Unreal { get; set; }
```
## UseCData Property {#usecdata}
Gets if whitespace should be preserved in a CDATA node.
### Declaration
```cs
public bool UseCData { get; set; }
```
