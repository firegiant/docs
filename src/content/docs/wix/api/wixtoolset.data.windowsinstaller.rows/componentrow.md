---
title: ComponentRow Class
---
Specialization of a row for the Component table.
## Properties
| Property | Description |
| ------ | ----------- |
| [Component](#component) | Gets or sets the identifier for this Component row. |
| [Condition](#condition) | Gets or sets the condition of the Component. |
| [Directory](#directory) | Gets or sets the Directory_ of the Component. |
| [Guid](#guid) | Gets or sets the ComponentId for this Component row. |
| [Is64Bit](#is64bit) | Gets or sets the 64 bit attribute of the Component. |
| [IsLocalOnly](#islocalonly) | Gets or sets the local only attribute of the Component. |
| [IsOdbcDataSourceKeyPath](#isodbcdatasourcekeypath) | Gets or sets the ODBC data source key path attribute of the Component. |
| [IsOptional](#isoptional) | Gets or sets the optional attribute of the Component. |
| [IsPermanent](#ispermanent) | Gets or sets the permanent attribute of the Component. |
| [IsRegistryKeyPath](#isregistrykeypath) | Gets or sets the registry key path attribute of the Component. |
| [IsSharedDll](#isshareddll) | Gets or sets the shared dll ref count attribute of the Component. |
| [IsSourceOnly](#issourceonly) | Gets or sets the source only attribute of the Component. |
| [KeyPath](#keypath) | Gets or sets the key path of the Component. |
| [SourceFile](#sourcefile) | Gets or sets the source location to the file to fill in the Text of the control. |
`WixToolset.Data.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Component Property {#component}
Gets or sets the identifier for this Component row.
### Declaration
```cs
public string Component { get; set; }
```
## Condition Property {#condition}
Gets or sets the condition of the Component.
### Declaration
```cs
public string Condition { get; set; }
```
## Directory Property {#directory}
Gets or sets the Directory_ of the Component.
### Declaration
```cs
public string Directory { get; set; }
```
## Guid Property {#guid}
Gets or sets the ComponentId for this Component row.
### Declaration
```cs
public string Guid { get; set; }
```
## Is64Bit Property {#is64bit}
Gets or sets the 64 bit attribute of the Component.
### Declaration
```cs
public bool Is64Bit { get; set; }
```
## IsLocalOnly Property {#islocalonly}
Gets or sets the local only attribute of the Component.
### Declaration
```cs
public bool IsLocalOnly { get; set; }
```
## IsOdbcDataSourceKeyPath Property {#isodbcdatasourcekeypath}
Gets or sets the ODBC data source key path attribute of the Component.
### Declaration
```cs
public bool IsOdbcDataSourceKeyPath { get; set; }
```
## IsOptional Property {#isoptional}
Gets or sets the optional attribute of the Component.
### Declaration
```cs
public bool IsOptional { get; set; }
```
## IsPermanent Property {#ispermanent}
Gets or sets the permanent attribute of the Component.
### Declaration
```cs
public bool IsPermanent { get; set; }
```
## IsRegistryKeyPath Property {#isregistrykeypath}
Gets or sets the registry key path attribute of the Component.
### Declaration
```cs
public bool IsRegistryKeyPath { get; set; }
```
## IsSharedDll Property {#isshareddll}
Gets or sets the shared dll ref count attribute of the Component.
### Declaration
```cs
public bool IsSharedDll { get; set; }
```
## IsSourceOnly Property {#issourceonly}
Gets or sets the source only attribute of the Component.
### Declaration
```cs
public bool IsSourceOnly { get; set; }
```
## KeyPath Property {#keypath}
Gets or sets the key path of the Component.
### Declaration
```cs
public string KeyPath { get; set; }
```
## SourceFile Property {#sourcefile}
Gets or sets the source location to the file to fill in the Text of the control.
### Declaration
```cs
public string SourceFile { get; set; }
```
