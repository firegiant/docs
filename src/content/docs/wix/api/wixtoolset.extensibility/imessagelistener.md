---
title: IMessageListener Interface
---
Message listener.
## Methods
| Method | Description |
| ------ | ----------- |
| [CalculateMessageLevel(messaging, message, defaultMessageLevel)](#calculatemessagelevel_messaging_message_defaultmessagelevel) | Calculate a new level for a message. |
| [Write(message)](#write_message) | Writes a message. |
| [Write(message)](#write_message) | Writes a string message. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CalculateMessageLevel(messaging, message, defaultMessageLevel) Method {#calculatemessagelevel_messaging_message_defaultmessagelevel}
Calculate a new level for a message.
### Declaration
```cs
public WixToolset.Data.MessageLevel CalculateMessageLevel(
  Services.IMessaging messaging,
  WixToolset.Data.Message message,
  WixToolset.Data.MessageLevel defaultMessageLevel
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| messaging | Services.IMessaging | Messaging object. |
| message | WixToolset.Data.Message | Message to evaluate. |
| defaultMessageLevel | WixToolset.Data.MessageLevel | Current message level. |
## Write(message) Method {#write_message}
Writes a message.
### Declaration
```cs
public void Write(
  WixToolset.Data.Message message
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| message | WixToolset.Data.Message | Message to write. |
## Write(message) Method {#write_message}
Writes a string message.
### Declaration
```cs
public void Write(
  string message
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| message | string | String message to write. |
