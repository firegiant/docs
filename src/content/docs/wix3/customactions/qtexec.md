---
pagefind: false
title: Quiet Execution Custom Action
---

The QtExec custom action allows you to run an arbitrary command line in an MSI-based setup in silent mode. QtExec is commonly used to suppress console windows that would otherwise appear appear when invoking the executable directly. The custom action is located in the WixCA library, which is a part of the WixUtilExtension.


## Naming in WiX v3.x and WiX v4.0

Prior to WiX v3.10, only `CAQuietExec` and `CAQuietExec64` are available, which used the properties `QtExecCmdTimeout` (used for both 32-bit and 64-bit custom actions), `QtExecCmdLine`, and `QtExec64CmdLine`.

Starting in WiX v3.10, those same identifiers are available but the new, preferred custom action names are `WixQuietExec` and `WixQuietExec64` with properties named `WixQuietExecCmdTimeout`, `WixQuietExec64CmdTimeout`, `WixQuietExecCmdLine`, and `WixQuietExec64CmdLine`.

In WiX v4.0, only the `WixQuietExec` names will be supported.

The `WixSilentExec` actions introduced in WiX v3.10 already support the new naming scheme.


## Immediate execution

When the QtExec action is run as an immediate custom action, it will try to execute the command stored in the WixQuietExecCmdLine property. The following is an example of authoring an immediate QtExec custom action:

```xml
    <Property Id="WixQuietExecCmdLine" Value="command line to run"/>
    <CustomAction Id="QtExecExample" BinaryKey="WixCA" DllEntry="WixQuietExec" Execute="immediate" Return="check"/>
    .
    .
    .
    <InstallExecuteSequence>
      <Custom Action="QtExecExample" After="TheActionYouWantItAfter"/>
    </InstallExecuteSequence>
```

This will result in running the command line in the immediate sequence. If the exit code of the command line in this example indicates an error (meaning that the return code is not equal to 0) then the setup will fail because the Return value is set to "check". Changing the Return value to "ignore" will cause the setup to log the failure but skip it and continue instead of failing the entire setup.

If you want to run more than one command line in the immediate sequence then you will need to schedule multiple QtExec custom actions and set the WixQuietExecCmdLine property to a new value by scheduling a property-setting custom action immediately before each instance of the QtExec custom action.

## Silent execution

If you need to run a program without logging any of the input parameters or output of the executable __for example, for security or privacy reasons,__ you want WixSilentExec:

```xml
    <Property Id="WixSilentExecCmdLine" Value="command line to run" Hidden="yes"/>
    <CustomAction Id="SilentExecExample" BinaryKey="WixCA" DllEntry="WixSilentExec" Execute="immediate" Return="check"/>
    .
    .
    .
    <InstallExecuteSequence>
      <Custom Action="SilentExecExample" After="TheActionYouWantItAfter"/>
    </InstallExecuteSequence>
```

The *only* difference in behavior between WixQuietExec and WixSilentExec is that WixSilentExec never logs the input or output of the command line. Take special note to mark the input property and other properties as hidden if you do not want them logged automatically by MSI.

## Deferred execution

When the WixQuietExec (or WixSilentExec) action is run as a deferred custom action, it will try to execute the command line stored in the value of the custom action data. For deferred QtExec custom actions, the custom action data is a property that has the same Id value as the custom action Id. The following is an example of authoring a deferred QtExec custom action:

```xml
    <Property Id="QtExecDeferredExample" Value="command line to run"/>
    <CustomAction Id="QtExecDeferredExample" BinaryKey="WixCA" DllEntry="WixQuietExec"
                Execute="deferred" Return="check" Impersonate="no"/>
    .
    .
    .
    <InstallExecuteSequence>
      <Custom Action="QtExecDeferredExample" After="TheActionYouWantItAfter"/>
    </InstallExecuteSequence>
```

If you need to set a command line that uses other Windows Installer properties, you must schedule an immediate custom action to set the command line property value and schedule a deferred custom action to run QtExec. The property Id used in the SetProperty custom action must match the Id value used in the deferred custom action. A common use of this pattern for QtExec custom actions is to run an executable that will be installed as a part of the setup. The following is an example of authoring a deferred QtExec custom action that relies on another property value:

```xml
    <SetProperty Id="QtExecDeferredExampleWithProperty" Value=""[#MyExecutable.exe]""
                Sequence="execute" Before="QtExecDeferredExampleWithProperty" />
    <CustomAction Id="QtExecDeferredExampleWithProperty" BinaryKey="WixCA" DllEntry="WixQuietExec"
                Execute="deferred" Return="check" Impersonate="no"/>
    .
    .
    .
    <InstallExecuteSequence>
      <Custom Action="QtExecDeferredExampleWithProperty" After="TheActionYouWantItAfter"/>
    </InstallExecuteSequence>
```

## Running 64-bit executables

If you need to run a 64-bit executable, use the 64-bit aware QtExec. To use the 64-bit QtExec (or WixSilentExec) change the CustomAction element&apos;s DllEntry attribute to "WixQuietExec64" (or "WixSilentExec64") and for immediate execution use the "WixQuietExec64CmdLine" (or "WixSilentExec64CmdLine") property. The following example combines the examples above the 64-bit aware QtExec for both. Notice that the CustomAction element&apos;s Id attributes do not need to change:

```xml
    <Property Id="WixQuietExec64CmdLine" Value="64-bit command line to run"/>
    <CustomAction Id="QtExecExample" BinaryKey="WixCA" DllEntry="WixQuietExec64" Execute="immediate" Return="check"/>
    .
    .
    .
    <SetProperty Id="QtExecDeferredExampleWithProperty" Value=""[#MyExecutable.exe]"" 
                Before="QtExecDeferredExampleWithProperty" Sequence="execute" />
    <CustomAction Id="QtExecDeferredExampleWithProperty" BinaryKey="WixCA" DllEntry="WixQuietExec64"
                Execute="deferred" Return="check" Impersonate="no"/>
    .
    .
    .
    <InstallExecuteSequence>
      <Custom Action="QtExecExample" After="TheImmediateActionYouWantItAfter"/>
      <Custom Action="QtExecDeferredExampleWithProperty" After="TheDeferredActionYouWantItAfter"/>
    </InstallExecuteSequence>
```

## Building an MSI that uses QtExec

In order to use QtExec, you must include a reference to the WixUtilExtension when building your MSI. To do this, add the command line argument `-ext WixUtilExtension.dll` when calling Light.exe.
