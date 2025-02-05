---
title: BaseLinkerExtension Class
---
Base class for creating a linker extension.
## Methods
| Method | Description |
| ------ | ----------- |
| [PostLink()](#postlink_nop) | Called at the end of the linking. |
| [PreLink()](#prelink_nop) | Called at the beginning of the linking. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Context](#context) | Context for use by the extension. |
| [Messaging](#messaging) | Messaging for use by the extension. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## PostLink() Method {#postlink_nop}
Called at the end of the linking.
### Declaration
```cs
public void PostLink()
```
## PreLink() Method {#prelink_nop}
Called at the beginning of the linking.
### Declaration
```cs
public void PreLink()
```
## Context Property {#context}
Context for use by the extension.
### Declaration
```cs
protected Data.ILinkContext Context { get; set; }
```
## Messaging Property {#messaging}
Messaging for use by the extension.
### Declaration
```cs
protected Services.IMessaging Messaging { get; set; }
```
