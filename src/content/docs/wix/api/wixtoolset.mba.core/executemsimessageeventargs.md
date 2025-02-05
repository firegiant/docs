---
title: ExecuteMsiMessageEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.ExecuteMsiMessage»
## Properties
| Property | Description |
| ------ | ----------- |
| [Data](#data) | Gets the extended data for the message. |
| [Message](#message) | Gets the message. |
| [MessageType](#messagetype) | Gets the type of this message. |
| [PackageId](#packageid) | Gets the identity of the package that yielded this message. |
| [UIHint](#uihint) | Gets the recommended display flags for this message. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## Data Property {#data}
Gets the extended data for the message.
### Declaration
```cs
public IList<System.String> Data { get; set; }
```
## Message Property {#message}
Gets the message.
### Declaration
```cs
public string Message { get; set; }
```
## MessageType Property {#messagetype}
Gets the type of this message.
### Declaration
```cs
public InstallMessage MessageType { get; set; }
```
## PackageId Property {#packageid}
Gets the identity of the package that yielded this message.
### Declaration
```cs
public string PackageId { get; set; }
```
## UIHint Property {#uihint}
Gets the recommended display flags for this message.
### Declaration
```cs
public int UIHint { get; set; }
```
