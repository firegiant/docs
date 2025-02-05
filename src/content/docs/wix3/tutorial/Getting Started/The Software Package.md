---
title: The Software Package
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 1
---

Our first WiX sample will install a very simple imaginary application: it consists of an executable, a DLL library and a user manual. We expect these files to be copied to an application specific folder. We will also want two shortcuts to appear in the usual place in the Start Menu, plus we will add an icon shortcut to the user desktop to launch our application.

As simple as this install package will be, the underlying Windows Installer will offer a great deal of functionality, including automatic inclusion of our program in the Programs and Features Control Panel tool. To make sure that Windows Installer can keep track of our program, we have to provide some means of identification. Although all applications have human readable names, Windows will require a more unique identifier than a mere name: GUIDs (those long, hexadecimal numbers like CE26AD1E-00D5-4E03-8CBE-6DA5C23AA833) to identify every part of our package. GUIDs come for free, you can generate as many as you like any time. They are guaranteed to be unique, no matter who else asks for GUIDs on their computers, they will never collide with yours. There are many utilities to ask for GUIDs, including this very simple [C program](/system/files/samples/UUIDgen.c) that can be compiled with practically any C/C++ compiler of your choice. If you use a different programming language, you can call the necessary Win32 functions (`CoCreateGuid` and `StringFromGUID2`) there, too. C compilers usually keep them in the `ole32.lib` library file, so if you receive linker errors, remember to link against this library as well. The Windows SDK you get by installing Visual Studio also contains a GUID-generation tool, available, for example, at `%ProgramFiles%\Microsoft SDKs\Windows\v7.1A\Bin\uuidgen.exe` or `%ProgramFiles%\Windows Kits\8.1\bin\x86\uuidgen.exe`.

Alternatively, many programmers' editors and integrated development environments can insert a freshly generated GUID into the source code on request. If the tool you use generates lowercase hexadecimal letters, convert them to uppercase before you present them to WiX.

**All GUIDs in this tutorial, including those in the downloadable samples, are invalid**&mdash;the first section is always changed to `YOURGUID`. This also means that the samples cannot be built straight away, without providing your own GUIDs first (you get a `fatal error CNDL0027: The 'Id' attribute has an invalid value according to its data type.` if you try). This is a small inconvenience but it is necessary to avoid the remote chance of several people using any of the samples verbatim, forgetting to change the GUIDs, and creating a risk of collision out there in the wild. Also note that you have to replace the complete GUID: never mix parts coming from different GUIDs (in other words, don't replace YOURGUID alone, replace the whole number). GUIDs are only guaranteed to be unique if used exactly as they were generated.

To start with, you'll need two GUIDs, one for your product and one for the installation package (actually, for any real world project, you'll also need an `UpgradeCode` GUID; be sure to check out the other lessons before you ship anything). While the other two have to be kept on file because you will probably need to refer to them later, `Package` GUIDs need to be different with each package you create. To make it easier and less likely to forget to issue a new one, we can instruct WiX to autogenerate one by typing an asterisk---but remember, this only applies to package GUIDs: all other GUIDs will need to stay unique and kept recorded for times to come. This with all other textual information about the product will go into the very first part of our `SampleFirst.wxs` file:

    <?xml version='1.0' encoding='windows-1252'?>
    <Wix xmlns='http://schemas.microsoft.com/wix/2006/wi'>
        <Product Name='Foobar 1.0' Manufacturer='Acme Ltd.'
            Id='YOURGUID-86C7-4D14-AEC0-86416A69ABDE' 
            UpgradeCode='YOURGUID-7349-453F-94F6-BCB5110BA4FD'
            Language='1033' Codepage='1252' Version='1.0.0'>
        <Package Id='*' Keywords='Installer' Description="Acme's Foobar 1.0 Installer"
            Comments='Foobar is a registered trademark of Acme Ltd.' Manufacturer='Acme Ltd.'
            InstallerVersion='100' Languages='1033' Compressed='yes' SummaryCodepage='1252' />

Product names and descriptions depend on you, of course. For the `Version` attribute, use the standard <em>major.minor.build</em> format. Windows Installer will ignore an eventual fourth field, <em>.revision</em> as it provides other means to differentiate revisions.

As you know, XML is quite liberal for a format. Use indentation and empty lines as you see fit. Enclose all attribute values in quotes but you can choose from single and double quotes at will. This makes it very easy to write values containing a quote (like `Description` above), just make sure you use the other kind of quote to enclose the string.

You can use both UTF-8 and ANSI to create the XML. If you don't plan to use anything but the usual ASCII characters or those accented letters available in the standard ANSI character set, the <em>windows-1252</em> setting depicted in this example is quite satisfactory. If you need a larger or different character set in your user interface, change to UTF-8 and use the appropriate [language][langids] and [code pages][codepages] For instance, for Japanese:

    <?xml version='1.0' encoding='utf-8'?>
    <Wix xmlns='http://schemas.microsoft.com/wix/2006/wi'>
      <Product Language='1041' Codepage='932' ...>
      <Package Languages='1041' SummaryCodepage='932' ...>

[langids]: https://docs.microsoft.com/en-us/previous-versions/windows/embedded/ms912047(v=winembedded.10)
[codepages]: https://docs.microsoft.com/en-us/windows/win32/intl/code-page-identifiers
