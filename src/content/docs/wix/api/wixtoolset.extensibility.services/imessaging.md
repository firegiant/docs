---
title: IMessaging Interface
---
Interface for handling messages (error/warning/verbose).
## Methods
| Method | Description |
| ------ | ----------- |
| [ElevateWarningMessage(warningNumber)](#elevatewarningmessage_warningnumber) | Adds a warning message id to be elevated to an error message. |
| [SetListener(listener)](#setlistener_listener) | Sets the listener for messaging. |
| [SuppressWarningMessage(warningNumber)](#suppresswarningmessage_warningnumber) | Adds a warning message id to be suppressed in message output. |
| [Write(message)](#write_message) | Sends a message with the given arguments. |
| [Write(message, verbose)](#write_message_verbose) | Sends a message with the given arguments. |
## Properties
| Property | Description |
| ------ | ----------- |
| [EncounteredError](#encounterederror) | Indicates whether an error has been found. |
| [ErrorCount](#errorcount) | Gets the number of errors encountered thus far. |
| [LastErrorNumber](#lasterrornumber) | Gets the last error code encountered during messaging. |
| [ShowVerboseMessages](#showverbosemessages) | Gets or sets the option to show verbose messages. |
| [SuppressAllWarnings](#suppressallwarnings) | Gets or sets the option to suppress all warning messages. |
| [WarningsAsError](#warningsaserror) | Gets and sets the option to treat warnings as errors. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## ElevateWarningMessage(warningNumber) Method {#elevatewarningmessage_warningnumber}
Adds a warning message id to be elevated to an error message.
### Declaration
```cs
public void ElevateWarningMessage(
  int warningNumber
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| warningNumber | int | Id of the message to elevate. |
## SetListener(listener) Method {#setlistener_listener}
Sets the listener for messaging.
### Declaration
```cs
public void SetListener(
  WixToolset.Extensibility.IMessageListener listener
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| listener | WixToolset.Extensibility.IMessageListener |  |
## SuppressWarningMessage(warningNumber) Method {#suppresswarningmessage_warningnumber}
Adds a warning message id to be suppressed in message output.
### Declaration
```cs
public void SuppressWarningMessage(
  int warningNumber
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| warningNumber | int | Id of the message to suppress. |
## Write(message) Method {#write_message}
Sends a message with the given arguments.
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
## Write(message, verbose) Method {#write_message_verbose}
Sends a message with the given arguments.
### Declaration
```cs
public void Write(
  string message,
  bool verbose
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| message | string | Message to write. |
| verbose | bool | Indicates where to write a verbose message. |
## EncounteredError Property {#encounterederror}
Indicates whether an error has been found.
### Declaration
```cs
public bool EncounteredError { get; set; }
```
## ErrorCount Property {#errorcount}
Gets the number of errors encountered thus far.
### Declaration
```cs
public int ErrorCount { get; set; }
```
## LastErrorNumber Property {#lasterrornumber}
Gets the last error code encountered during messaging.
### Declaration
```cs
public int LastErrorNumber { get; set; }
```
## ShowVerboseMessages Property {#showverbosemessages}
Gets or sets the option to show verbose messages.
### Declaration
```cs
public bool ShowVerboseMessages { get; set; }
```
## SuppressAllWarnings Property {#suppressallwarnings}
Gets or sets the option to suppress all warning messages.
### Declaration
```cs
public bool SuppressAllWarnings { get; set; }
```
## WarningsAsError Property {#warningsaserror}
Gets and sets the option to treat warnings as errors.
### Declaration
```cs
public bool WarningsAsError { get; set; }
```
