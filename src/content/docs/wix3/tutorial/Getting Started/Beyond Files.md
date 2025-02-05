---
title: Beyond Files
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 7
---

In the real life out there, you'll probably need more to do than to copy files into their final repository. To create a registry keys, include them inside a `RegistryKey` in the component:

    <RegistryKey Root='HKLM' Key='Software\Acme\Foobar 1.0'>
        <RegistryValue Type='string' Name='InstallDir' Value='[INSTALLDIR]'/>
        <RegistryValue Type='integer' Name='Flag' Value='0'/>
    </RegistryKey>

`Type` can be *string*, *integer*, *binary*, *expandable*, or *multiString*. If the `Name` attribute is omitted, the default key will be created.

In the case of a *multiString*, use one or more `MultiStringValue` children to specify the individual strings. You can also include the `Root` and `Key` attributes directly on the `RegistryValue` element:

    <RegistryValue Root='HKLM' Key='Software\Acme\Foobar 1.0' Type='multiString' Name='InstallDir'>
        <MultiStringValue>[TARGETDIR]</MultiStringValue>
        <MultiStringValue>[INSTALLDIR]</MultiStringValue>
        <MultiStringValue>[ProgramFilesFolder]</MultiStringValue>
    </RegistryValue>

If your application handles its own file data type, you will need to register a file association for it. Put a `ProgId` inside your component. `FileId` should refer to the `Id` attribute of the `File` element describing the file meant to handle the files of this extension:

    <ProgId Id='AcmeFoobar.xyzfile' Description='Acme Foobar data file'>
        <Extension Id='xyz' ContentType='application/xyz'>
            <Verb Id='open' Command='Open' TargetFile='FileId' Argument='"%1"' />
        </Extension>
    </ProgId>

To assign an icon to this file type, you have to specify where the icon should come from:

    <ProgId Id='AcmeFoobar.xyzfile' Description='Acme Foobar data file' Icon='Foobar.ico'>

or, if the icon comes from an executable or resource file containing several icons, you can specify which one:

    <ProgId Id='AcmeFoobar.xyzfile' Description='Acme Foobar data file' Icon='Foobar.exe' IconIndex='1'>

And finally, if you want to write an .ini file---although the registry is more in vogue these days---this is what you need in your component:

    <IniFile Id="WriteIntoIniFile" Directory="INSTALLDIR" Name="Foobar.ini" Action="addLine" Key="InstallDir" Section="Paths" Value="[INSTALLDIR]" />

In the next lesson we'll see how to implement a user interface so that the user can get a chance to decide what and where to install.
