---
title: IWindowsInstallerDecompilerHelper Interface
---
Interface provided to help Windows Installer decompiler extensions.
## Methods
| Method | Description |
| ------ | ----------- |
| [AddElementToRoot(name, content)](#addelementtoroot_name_content) | Creates an element from the standard WiX Toolset namespace and adds it to the root document. |
| [AddElementToRoot(name, content)](#addelementtoroot_name_content) | Creates an element with the specified name and adds it to the root document. |
| [AddElementToRoot(element)](#addelementtoroot_element) | Adds an existing element to the root document. |
| [CreateElement(name, content)](#createelement_name_content) | Creates an element from the standard WiX Toolset namespace. |
| [GetIndexedElement(row)](#getindexedelement_row) | Get an element index by a row's table and primary keys. |
| [GetIndexedElement(table, primaryKey)](#getindexedelement_table_primarykey) | Get an element index by table and primary key. |
| [GetIndexedElement(table, primaryKey1, primaryKey2)](#getindexedelement_table_primarykey1_primarykey2) | Get an element index by table and primary keys. |
| [GetIndexedElement(table, primaryKey1, primaryKey2, primaryKey3)](#getindexedelement_table_primarykey1_primarykey2_primarykey3) | Get an element index by table and primary keys. |
| [GetIndexedElement(table, primaryKeys)](#getindexedelement_table_primarykeys) | Get an element index by table and primary keys. |
| [IndexElement(row, element)](#indexelement_row_element) | Index an element by a row's table and primary keys. |
| [IndexElement(table, primaryKey, element)](#indexelement_table_primarykey_element) | Index an element by table and primary key. |
| [IndexElement(table, primaryKey1, primaryKey2, element)](#indexelement_table_primarykey1_primarykey2_element) | Index an element by table and primary keys. |
| [IndexElement(table, primaryKey1, primaryKey2, primaryKey3, element)](#indexelement_table_primarykey1_primarykey2_primarykey3_element) | Index an element by table and primary keys. |
| [IndexElement(table, primaryKeys, element)](#indexelement_table_primarykeys_element) | Index an element by table and primary keys. |
## Properties
| Property | Description |
| ------ | ----------- |
| [RootElement](#rootelement) | Gets or sets the root element of the decompiled output. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## AddElementToRoot(name, content) Method {#addelementtoroot_name_content}
Creates an element from the standard WiX Toolset namespace and adds it to the root document.
### Declaration
```cs
public System.Xml.Linq.XElement AddElementToRoot(
  string name,
  System.Object[] content
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | string | Name of the element to create and add. |
| content | System.Object[] | Optional content to add to the new element. |
### Return value
`System.Xml.Linq.XElement` Element in the standard namespace.
## AddElementToRoot(name, content) Method {#addelementtoroot_name_content}
Creates an element with the specified name and adds it to the root document.
### Declaration
```cs
public System.Xml.Linq.XElement AddElementToRoot(
  System.Xml.Linq.XName name,
  System.Object[] content
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | System.Xml.Linq.XName | Name of the element to create and add. |
| content | System.Object[] | Optional content to add to the new element. |
### Return value
`System.Xml.Linq.XElement` Element in the standard namespace.
## AddElementToRoot(element) Method {#addelementtoroot_element}
Adds an existing element to the root document.
### Declaration
```cs
public System.Xml.Linq.XElement AddElementToRoot(
  System.Xml.Linq.XElement element
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| element | System.Xml.Linq.XElement | Element to add. |
### Return value
`System.Xml.Linq.XElement` Same element provided.
## CreateElement(name, content) Method {#createelement_name_content}
Creates an element from the standard WiX Toolset namespace.
### Declaration
```cs
public System.Xml.Linq.XElement CreateElement(
  string name,
  System.Object[] content
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | string | Name of the element to create. |
| content | System.Object[] | Optional content to add to the new element. |
### Return value
`System.Xml.Linq.XElement` Element in the standard namespace.
## GetIndexedElement(row) Method {#getindexedelement_row}
Get an element index by a row's table and primary keys.
### Declaration
```cs
public System.Xml.Linq.XElement GetIndexedElement(
  WixToolset.Data.WindowsInstaller.Row row
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| row | WixToolset.Data.WindowsInstaller.Row | Row to get element. |
### Return value
`System.Xml.Linq.XElement` Element indexed for the row or null if not found.
## GetIndexedElement(table, primaryKey) Method {#getindexedelement_table_primarykey}
Get an element index by table and primary key.
### Declaration
```cs
public System.Xml.Linq.XElement GetIndexedElement(
  string table,
  string primaryKey
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| table | string | Table name for indexed element. |
| primaryKey | string | Primary key for indexed element. |
### Return value
`System.Xml.Linq.XElement` Element indexed for the table and primary key or null if not found.
## GetIndexedElement(table, primaryKey1, primaryKey2) Method {#getindexedelement_table_primarykey1_primarykey2}
Get an element index by table and primary keys.
### Declaration
```cs
public System.Xml.Linq.XElement GetIndexedElement(
  string table,
  string primaryKey1,
  string primaryKey2
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| table | string | Table name for indexed element. |
| primaryKey1 | string | Primary key for first column indexed element. |
| primaryKey2 | string | Primary key for second column indexed element. |
### Return value
`System.Xml.Linq.XElement` Element indexed for the table and primary keys or null if not found.
## GetIndexedElement(table, primaryKey1, primaryKey2, primaryKey3) Method {#getindexedelement_table_primarykey1_primarykey2_primarykey3}
Get an element index by table and primary keys.
### Declaration
```cs
public System.Xml.Linq.XElement GetIndexedElement(
  string table,
  string primaryKey1,
  string primaryKey2,
  string primaryKey3
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| table | string | Table name for indexed element. |
| primaryKey1 | string | Primary key for first column indexed element. |
| primaryKey2 | string | Primary key for second column indexed element. |
| primaryKey3 | string | Primary key for third column indexed element. |
### Return value
`System.Xml.Linq.XElement` Element indexed for the table and primary keys or null if not found.
## GetIndexedElement(table, primaryKeys) Method {#getindexedelement_table_primarykeys}
Get an element index by table and primary keys.
### Declaration
```cs
public System.Xml.Linq.XElement GetIndexedElement(
  string table,
  System.String[] primaryKeys
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| table | string | Table name for indexed element. |
| primaryKeys | System.String[] | Primary keys for indexed element. |
### Return value
`System.Xml.Linq.XElement` Element indexed for the table and primary keys or null if not found.
## IndexElement(row, element) Method {#indexelement_row_element}
Index an element by a row's table and primary keys.
### Declaration
```cs
public void IndexElement(
  WixToolset.Data.WindowsInstaller.Row row,
  System.Xml.Linq.XElement element
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| row | WixToolset.Data.WindowsInstaller.Row | Row to index element. |
| element | System.Xml.Linq.XElement | Element to index. |
## IndexElement(table, primaryKey, element) Method {#indexelement_table_primarykey_element}
Index an element by table and primary key.
### Declaration
```cs
public void IndexElement(
  string table,
  string primaryKey,
  System.Xml.Linq.XElement element
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| table | string | Table name to index element. |
| primaryKey | string | Primary key to index element. |
| element | System.Xml.Linq.XElement | Element to index. |
## IndexElement(table, primaryKey1, primaryKey2, element) Method {#indexelement_table_primarykey1_primarykey2_element}
Index an element by table and primary keys.
### Declaration
```cs
public void IndexElement(
  string table,
  string primaryKey1,
  string primaryKey2,
  System.Xml.Linq.XElement element
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| table | string | Table name to index element. |
| primaryKey1 | string | First column's primary key to index element. |
| primaryKey2 | string | Second column's primary key to index element. |
| element | System.Xml.Linq.XElement | Element to index. |
## IndexElement(table, primaryKey1, primaryKey2, primaryKey3, element) Method {#indexelement_table_primarykey1_primarykey2_primarykey3_element}
Index an element by table and primary keys.
### Declaration
```cs
public void IndexElement(
  string table,
  string primaryKey1,
  string primaryKey2,
  string primaryKey3,
  System.Xml.Linq.XElement element
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| table | string | Table name to index element. |
| primaryKey1 | string | First column's primary key to index element. |
| primaryKey2 | string | Second column's primary key to index element. |
| primaryKey3 | string | Third column's primary key to index element. |
| element | System.Xml.Linq.XElement | Element to index. |
## IndexElement(table, primaryKeys, element) Method {#indexelement_table_primarykeys_element}
Index an element by table and primary keys.
### Declaration
```cs
public void IndexElement(
  string table,
  System.String[] primaryKeys,
  System.Xml.Linq.XElement element
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| table | string | Table name to index element. |
| primaryKeys | System.String[] | Column's primary key to index element. |
| element | System.Xml.Linq.XElement | Element to index. |
## RootElement Property {#rootelement}
Gets or sets the root element of the decompiled output.
### Declaration
```cs
public System.Xml.Linq.XElement RootElement { get; set; }
```
