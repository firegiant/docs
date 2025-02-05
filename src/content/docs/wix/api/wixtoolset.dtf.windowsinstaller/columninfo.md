---
title: ColumnInfo Class
---
Defines a single column of a table in an installer database.
## Methods
| Method | Description |
| ------ | ----------- |
| [ToString()](#tostring_nop) | Gets the name of the column. |
## Properties
| Property | Description |
| ------ | ----------- |
| [ColumnDefinitionString](#columndefinitionstring) | Gets a short string defining the type and size of the column. |
| [DBType](#dbtype) | Gets the type of the column as an integer that can be cast to a System.Data.DbType. This is one of the following: Int16, Int32, String, or Binary |
| [IsLocalizable](#islocalizable) | Gets a value indicating whether the column is a string column that is localizable. |
| [IsRequired](#isrequired) | Gets a value indicating whether the column must be non-null when inserting a record. |
| [IsTemporary](#istemporary) | Gets a value indicating whether the column is temporary. Temporary columns are not persisted when the database is saved to disk. |
| [Name](#name) | Gets the name of the column. |
| [Size](#size) | Gets the size of the column. |
| [SqlCreateString](#sqlcreatestring) | Gets an SQL fragment that can be used to create this column within a CREATE TABLE statement. |
| [Type](#type) | Gets the type of the column as a System.Type. This is one of the following: Int16, Int32, String, or Stream |
### Remarks
Once created, a ColumnInfo object is immutable.
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## ToString() Method {#tostring_nop}
Gets the name of the column.
### Declaration
```cs
public string ToString()
```
### Return value
`string` Name of the column.
## ColumnDefinitionString Property {#columndefinitionstring}
Gets a short string defining the type and size of the column.
### Declaration
```cs
public string ColumnDefinitionString { get; set; }
```
### Remarks

- s? - String, variable length (?=1-255)
- s0 - String, variable length
- i2 - Short integer
- i4 - Long integer
- v0 - Binary Stream
- g? - Temporary string (?=0-255)
- j? - Temporary integer (?=0,1,2,4)
- O0 - Temporary object (stream)
- l? - Localizable string, variable length (?=1-255)
- l0 - Localizable string, variable length


## DBType Property {#dbtype}
Gets the type of the column as an integer that can be cast to a System.Data.DbType. This is one of the following: Int16, Int32, String, or Binary
### Declaration
```cs
public int DBType { get; set; }
```
## IsLocalizable Property {#islocalizable}
Gets a value indicating whether the column is a string column that is localizable.
### Declaration
```cs
public bool IsLocalizable { get; set; }
```
## IsRequired Property {#isrequired}
Gets a value indicating whether the column must be non-null when inserting a record.
### Declaration
```cs
public bool IsRequired { get; set; }
```
## IsTemporary Property {#istemporary}
Gets a value indicating whether the column is temporary. Temporary columns are not persisted when the database is saved to disk.
### Declaration
```cs
public bool IsTemporary { get; set; }
```
## Name Property {#name}
Gets the name of the column.
### Declaration
```cs
public string Name { get; set; }
```
## Size Property {#size}
Gets the size of the column.
### Declaration
```cs
public int Size { get; set; }
```
## SqlCreateString Property {#sqlcreatestring}
Gets an SQL fragment that can be used to create this column within a CREATE TABLE statement.
### Declaration
```cs
public string SqlCreateString { get; set; }
```
### Remarks
Examples:
- LONG
- SHORT TEMPORARY
- CHAR(0) LOCALIZABLE
- CHAR(72) NOT NULL LOCALIZABLE
- OBJECT


## Type Property {#type}
Gets the type of the column as a System.Type. This is one of the following: Int16, Int32, String, or Stream
### Declaration
```cs
public System.Type Type { get; set; }
```
