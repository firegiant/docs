---
title: Control Your Controls
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 4
---

Granted, what we've just done was not elegant. We should check right when the user enters the key, display a warning and give the user a chance to re-enter the key instead of aborting the installation in a later phase. Let's see how we can accomplish this.

We can link custom actions to two kinds of user interface controls, push buttons and check boxes. We can use the `Publish` tag we already know to accomplish this. The `Value` attribute carries the name of the custom action:

```xml
<Control Id="..." Type="PushButton" ...>
  <Publish Event="DoAction" Value="CheckingPID">1</Publish>
</Control>
```

This will cause the custom action to call our DLL when the user presses the Next button of the User Information page. The custom action will be linked to this UI event, thus we no longer need to schedule it in the `InstallExecuteSequence` tag. However, the custom action definition remains in the source:

```xml
<CustomAction Id='CheckingPID' BinaryKey='CheckPID' DllEntry='CheckPID' />
```

To warn the user, we need a message box. This is just another dialog, similar to our previously created User Information page. We can put it into a separate source file as a fragment and refer to it using a `DialogRef` tag, as earlier. Just to illustrate that there is another solution as well, we now specify it directly in our main source file, right inside the `UI` section.

```xml
<Dialog Id="InvalidPidDlg" Width="260" Height="85" Title="[ProductName] Setup" NoMinimize="yes">
  <Control Id="Icon" Type="Icon" X="15" Y="15" Width="24" Height="24" ToolTip="Information icon" FixedSize="yes" IconSize="32" Text="Exclam.ico" />
  <Control Id="Return" Type="PushButton" X="100" Y="57" Width="56" Height="17" Default="yes" Cancel="yes" Text="&amp;Return">
    <Publish Event="EndDialog" Value="Return">1</Publish>
  </Control>
  <Control Id="Text" Type="Text" X="48" Y="15" Width="194" Height="30" TabSkip="no">
    <Text>
      The user key you entered is invalid. Please, enter the key printed on the label
      of the jewel case of the installation CD.
    </Text>
  </Control>
</Dialog>
```

We also have to update the User Information page because we have to call our custom action and the new message box from this dialog:

```xml
<Control Id="Next" Type="PushButton" X="236" Y="243" Width="56" Height="17" Default="yes" Text="[ButtonText_Next]">
  <Publish Event="DoAction" Value="CheckingPID">1</Publish>
  <Publish Event="SpawnDialog" Value="InvalidPidDlg">PIDACCEPTED = "0"</Publish>
  <Publish Event="NewDialog" Value="SetupTypeDlg">PIDACCEPTED = "1"</Publish>
</Control>
```

Now, when the user presses the Next button, the function in the DLL is called (every time because the `1` condition evaluates to _true_). The function in our DLL will check the `PIDKEY` property and set `PIDACCEPTED` to signal whether the key was accepted. If it was, we go on to `SetupTypeDlg`. If it wasn't, we display our error message.

There is only one small item left, as we mentioned an icon in the message box, we also have to provide it in the installer:

```xml
<Binary Id="Exclam.ico" SourceFile="Exclam.ico" />
```

The full source can be downloaded as [SampleAskKey](/system/files/samples/SampleAskKey.zip).

By the way, it's not necessarily a nice and safe thing to have the user key appear in the log file. To avoid this, use the `Hidden` attribute:

```xml
<Property Id="PIDKEY" Hidden='yes' />
```
