---
title: IEmbeddedUI Interface
---
[MSI 4.5] Interface for an embedded external user interface for an installation.
## Methods
| Method | Description |
| ------ | ----------- |
| [ProcessMessage(messageType, messageRecord, buttons, icon, defaultButton)](#processmessage_messagetype_messagerecord_buttons_icon_defaultbutton) | Processes information and progress messages sent to the user interface. |
| [Shutdown()](#shutdown_nop) | Shuts down the embedded UI at the end of the installation. |
### Remarks
Classes which implement this interface must have a public constructor that takes no parameters.
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## ProcessMessage(messageType, messageRecord, buttons, icon, defaultButton) Method {#processmessage_messagetype_messagerecord_buttons_icon_defaultbutton}
Processes information and progress messages sent to the user interface.
### Declaration
```cs
public MessageResult ProcessMessage(
  InstallMessage messageType,
  Record messageRecord,
  MessageButtons buttons,
  MessageIcon icon,
  MessageDefaultButton defaultButton
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| messageType | InstallMessage | Message type. |
| messageRecord | Record | Record that contains message data. |
| buttons | MessageButtons | Message buttons. |
| icon | MessageIcon | Message box icon. |
| defaultButton | MessageDefaultButton | Message box default button. |
### Return value
`MessageResult` Result of processing the message.
### Remarks
Win32 MSI API: [EmbeddedUIHandler](http://msdn.microsoft.com/library/en-us/msi/setup/embeddeduihandler.asp)

## Shutdown() Method {#shutdown_nop}
Shuts down the embedded UI at the end of the installation.
### Declaration
```cs
public void Shutdown()
```
### Remarks
If the installation was canceled during initialization, this method will not be called. If the installation was canceled or failed at any later point, this method will be called at the end.Win32 MSI API: [ShutdownEmbeddedUI](http://msdn.microsoft.com/library/en-us/msi/setup/shutdownembeddedui.asp)

