---
title: BaseBinderExtension Class
---
Base class for creating a resolver extension.
## Methods
| Method | Description |
| ------ | ----------- |
| [PostBind()](#postbind_nop) | Called at the end of bind. |
| [PreBind()](#prebind_nop) | Called at the beginning of bind. |
## Properties
| Property | Description |
| ------ | ----------- |
| [BackendHelper](#backendhelper) | BackendHelper for use by the extension. |
| [Context](#context) | Context for use by the extension. |
| [Messaging](#messaging) | Messaging for use by the extension. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## PostBind() Method {#postbind_nop}
Called at the end of bind.
### Declaration
```cs
public void PostBind()
```
## PreBind() Method {#prebind_nop}
Called at the beginning of bind.
### Declaration
```cs
public void PreBind()
```
## BackendHelper Property {#backendhelper}
BackendHelper for use by the extension.
### Declaration
```cs
protected Services.IBackendHelper BackendHelper { get; set; }
```
## Context Property {#context}
Context for use by the extension.
### Declaration
```cs
protected Data.IBindContext Context { get; set; }
```
## Messaging Property {#messaging}
Messaging for use by the extension.
### Declaration
```cs
protected Services.IMessaging Messaging { get; set; }
```
