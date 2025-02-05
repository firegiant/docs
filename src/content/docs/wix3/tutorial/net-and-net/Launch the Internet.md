---
title: Launch the Internet
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 3
---

There are cases when you want to launch something in a browser, either locally or online. To do this, you can create an URL link on the user's disk. These files are actually formatted as .ini files, thus we can use `IniFile` to create them:

    <Component>
      ...
      <IniFile Id='Launch' Action='addLine' Name='Launch.url' Directory='INSTALLDIR'
      Section='InternetShortcut' Key='URL' Value='http://www.acmefoobar.com' />
      ...
    </Component>

To launch the default browser directly, first we have to query it, then use this path in the usual way to launch a custom action after we have finished the installation (but only when we install, not when we uninstall). Please, make sure you use this solution to make sure that the user's preferred browser will start: _never hardwire any specific browser_.

    <Property Id="BROWSER">
      <RegistrySearch Id='DefaultBrowser' Type='raw' Root='HKCR' Key='http\shell\open\command' />
    </Property>

    <CustomAction Id='LaunchBrowser' Property='BROWSER' ExeCommand='www.something.com' Return='asyncNoWait' />

    <InstallExecuteSequence>
      ...
      <Custom Action='LaunchBrowser' After='InstallFinalize'>NOT Installed</Custom>
    </InstallExecuteSequence>

You can download the complete [SampleBrowser](/system/files/samples/SampleBrowser.zip).

To add a shortcut to the desktop or the Start menu that launches the default browser and jumps to a specific web site is even simpler. The only thing we have to look out for is to use a property for the URL: writing the URL directly into the `Target` attribute of the Shortcut would fail because the compiler would think it is the name of a local file to be deployed:

    <Property Id="URL" Value="http://www.something.com" />
    ...
    <Shortcut Id="WebShortcut" Name="Web URL" Description="Jump to our website" Target="[URL]" />
