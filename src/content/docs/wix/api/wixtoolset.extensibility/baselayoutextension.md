---
title: BaseLayoutExtension Class
---
Base class for creating a resolver extension.
## Methods
| Method | Description |
| ------ | ----------- |
| [CopyFile(source, destination)](#copyfile_source_destination) | See «see M:WixToolset.Extensibility.ILayoutExtension.CopyFile(System.String,System.String)»  |
| [MoveFile(source, destination)](#movefile_source_destination) | See «see M:WixToolset.Extensibility.ILayoutExtension.MoveFile(System.String,System.String)»  |
| [PostLayout()](#postlayout_nop) | Called at the end of ayout. |
| [PreLayout()](#prelayout_nop) | Called at the beginning of layout. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Context](#context) | Context for use by the extension. |
| [Messaging](#messaging) | Messaging for use by the extension. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CopyFile(source, destination) Method {#copyfile_source_destination}
See «see M:WixToolset.Extensibility.ILayoutExtension.CopyFile(System.String,System.String)»
### Declaration
```cs
public bool CopyFile(
  string source,
  string destination
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| source | string |  |
| destination | string |  |
## MoveFile(source, destination) Method {#movefile_source_destination}
See «see M:WixToolset.Extensibility.ILayoutExtension.MoveFile(System.String,System.String)»
### Declaration
```cs
public bool MoveFile(
  string source,
  string destination
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| source | string |  |
| destination | string |  |
## PostLayout() Method {#postlayout_nop}
Called at the end of ayout.
### Declaration
```cs
public void PostLayout()
```
## PreLayout() Method {#prelayout_nop}
Called at the beginning of layout.
### Declaration
```cs
public void PreLayout()
```
## Context Property {#context}
Context for use by the extension.
### Declaration
```cs
protected Data.ILayoutContext Context { get; set; }
```
## Messaging Property {#messaging}
Messaging for use by the extension.
### Declaration
```cs
protected Services.IMessaging Messaging { get; set; }
```
