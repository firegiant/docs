---
title: Extra Actions
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 2
---

There are many other [standard actions](http://msdn.microsoft.com/en-us/library/windows/desktop/aa372023(v=vs.85).aspx) available but not scheduled by default. `ScheduleReboot,` for instance, will instruct the user to reboot after the installation:

    <InstallExecuteSequence>
        <ScheduleReboot After='InstallFinalize' />
    </InstallExecuteSequence>

If the need to reboot depends on a condition (for instance, the operating system the installer is running on), use a condition:

    <InstallExecuteSequence>
        <ScheduleReboot After='InstallFinalize'>Version9X</ScheduleReboot>
    </InstallExecuteSequence>

It's not only these so-called standard actions that you can schedule and re-schedule. There are a couple of custom actions as well (_custom_ here means that they don't appear in the standard course of events but you can use them wherever and whenever you like). A very common need is to launch the application you've just installed.

Custom actions need to be mentioned in two places in the source file. First as a child of the `Product` tag (for instance, between the closing `Feature` and the `UI` tag). This `CustomAction` tag will specify what to do. To launch an executable we've just installed, refer to it using the `Id` identifier of the `File` tag specifying the file. You also have to provide a command line, although it can be left empty if not needed:

    <CustomAction Id='LaunchFile' FileKey='FoobarEXE' ExeCommand='' Return='asyncNoWait' />

Second, we have to schedule the action the usual way. The link between the action and the scheduling entry is provided by the matching `Id`/`Action` attribute pair. If the execution of the custom action is conditional, we can specify the condition inside the `Custom` tag. We need the condition here so that we only launch the executable when we make an installation but not when we remove the product:

    <InstallExecuteSequence>
        ...
        <Custom Action='LaunchFile' After='InstallFinalize'>NOT Installed</Custom>
    </InstallExecuteSequence>

In some cases, we want to start a helper utility we carry along in the installation package but we don't install on the user's machine (for instance, a readme file viewer or a special configuration utility). Instead of the `File,` we refer to the identifier in a `Binary` tag. The scheduling is the same:

    <CustomAction Id='LaunchFile' BinaryKey='FoobarEXE' ExeCommand='' Return='asyncNoWait' />

We can also launch any other executable on the user's machine if we provide its name in a property:

    <Property Id='NOTEPAD'>Notepad.exe</Property>
    <CustomAction Id='LaunchFile' Property='NOTEPAD' ExeCommand='[SourceDir]Readme.txt' Return='asyncNoWait' />

Custom actions can also specify how their return will be handled, using a `Return` attribute. Possible values are: _check_ will wait for the custom action to finish and check its return value, _ignore_ will wait for the action but the return value will be ignored, _asyncWait_ will run asynchronously but the installer will wait for the return value at the end of the scheduling sequence and _asyncNoWait_ will simply launch the action and then leave it alone, the action might still be running after the installer finishes. This last value is the one we use when we want to launch an application or a readme file after the installation.

If we encounter an error the normal machinery can't report, we can display an error message and terminate the installation. The `Error` attribute can contain either the actual message text or the `Id` identifier of an `Error` tag:

    <CustomAction Id='AbortError' Error='Cannot solve this riddle. Giving up.' />

There is no direct way to assign the value of a property to another one but a custom action can bridge this gap. The `Value` attribute can be a formatted string, thus we can perform some string manipulation, too (note that path references always have their trailing backslash automatically, there is no need to add an extra one):

    <CustomAction Id='PropertyAssign' Property='PathProperty' Value='[INSTALLDIR][FilenameProperty].[ExtensionProperty]' />

A directory can also be set to a similarly formatted string representing a path:

    <CustomAction Id='PropertyAssign' Directory='INSTALLDIR' Value='[TARGETDIR]\Program Files\Acme\Foobar 1.0\bin' />
