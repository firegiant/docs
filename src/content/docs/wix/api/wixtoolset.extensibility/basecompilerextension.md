---
title: BaseCompilerExtension Class
---
Base class for creating a compiler extension.
## Methods
| Method | Description |
| ------ | ----------- |
| [CreateComponentKeyPath()](#createcomponentkeypath_nop) | Creates a component key path. |
| [PostCompile()](#postcompile_nop) | Called at the end of the compilation of a source file. |
| [PreCompile()](#precompile_nop) | Called at the beginning of the compilation of a source file. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Context](#context) | Context for use by the extension. |
| [Messaging](#messaging) | Messaging for use by the extension. |
| [Namespace](#namespace) | Gets the schema namespace for this extension. |
| [ParseHelper](#parsehelper) | ParserHelper for use by the extension. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CreateComponentKeyPath() Method {#createcomponentkeypath_nop}
Creates a component key path.
### Declaration
```cs
protected Data.IComponentKeyPath CreateComponentKeyPath()
```
## PostCompile() Method {#postcompile_nop}
Called at the end of the compilation of a source file.
### Declaration
```cs
public void PostCompile()
```
## PreCompile() Method {#precompile_nop}
Called at the beginning of the compilation of a source file.
### Declaration
```cs
public void PreCompile()
```
## Context Property {#context}
Context for use by the extension.
### Declaration
```cs
protected Data.ICompileContext Context { get; set; }
```
## Messaging Property {#messaging}
Messaging for use by the extension.
### Declaration
```cs
protected Services.IMessaging Messaging { get; set; }
```
## Namespace Property {#namespace}
Gets the schema namespace for this extension.
### Declaration
```cs
public System.Xml.Linq.XNamespace Namespace { get; set; }
```
## ParseHelper Property {#parsehelper}
ParserHelper for use by the extension.
### Declaration
```cs
protected Services.IParseHelper ParseHelper { get; set; }
```
