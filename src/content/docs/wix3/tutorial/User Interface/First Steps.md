---
title: First Steps
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 1
---

We will expand our previous sample with a nice user interface. But before we delve into details, download [SampleWixUI](/system/files/samples/SampleWixUI.zip). Compile and run it to get a feeling about what it can do. Build it with the following commands (we will discuss the new linker command line argument later):

    candle.exe SampleWixUI.wxs
    light.exe -ext WixUIExtension SampleWixUI.wixobj

Try the Custom installation and try to change the target folder you install to. When done, start the installation package again, this time it will allow you to modify or remove the program (the same as you can do in the Programs and Features Control Panel tool by clicking on Change).

Let's see how we could achieve all this functionality. The first part remains the same---after all, we want to install the same product, the same files, same components, same features:

    <?xml version='1.0' encoding='windows-1252'?>
    <Wix xmlns='http://schemas.microsoft.com/wix/2006/wi'>

        <Product Name='Foobar 1.0' Id='YOURGUID-86C7-4D14-AEC0-86416A69ABDE' 
            UpgradeCode='YOURGUID-7349-453F-94F6-BCB5110BA4FD'
            Language='1033' Codepage='1252' Version='1.0.0' Manufacturer='Acme Ltd.'>

        <Package Id='*' Keywords='Installer' Description="Acme's Foobar 1.0 Installer"
            Comments='Foobar is a registered trademark of Acme Ltd.' Manufacturer='Acme Ltd.'
            InstallerVersion='100' Languages='1033' Compressed='yes' SummaryCodepage='1252' />

            ...

            <Directory Id="DesktopFolder" Name="Desktop" />
        </Directory>

No surprise so far. The structure of the following segment will also look familiar but we have a couple of new attributes: <!-- fix: colorization within code block -->

    <Feature Id='Complete' Title='Foobar 1.0' Description='The complete package.'
        Display='expand' Level='1' ConfigurableDirectory='INSTALLDIR'>
        <Feature Id='MainProgram' Title='Program' Description='The main executable.' Level='1'>
            <ComponentRef Id='MainExecutable' />
            <ComponentRef Id='HelperLibrary' />
            <ComponentRef Id='ProgramMenuDir' />
        </Feature>

        <Feature Id='Documentation' Title='Description' Description='The instruction manual.' Level='1000'>
            <ComponentRef Id='Manual' />
        </Feature>
    </Feature>

We will have a user interface now, so we need to display something to the user, to inform them about the choice of features they have. Hence the need for some human readable descriptions. Start the compiled installer package again and navigate to the custom setup so that you can see where and how the various UI texts appear.

The contents of the `Title` attributes are used to populate the treeview on the left of the dialog. The `Description` texts will appear on the right side inside the rectangle when you click on an item in the tree. The `Display` attribute (possible values are *collapse*, *expand*, and *hidden*) determines whether the specified tree part will be displayed collapsed or expanded initially, or will not be displayed at all.

`Level` allows us to decide which features will be installed. The usual scenario is to offer three choices to the user: *Typical*, *Complete*, and *Custom*. The last two are simple (*Complete* includes everything and *Custom* will allow the user to specify everything in finer details) but we have to specify what belongs to *Typical*. Or, if necessary, we can have more choices. When the installer runs, there will be a prefabricated property called `INSTALLLEVEL` that can have any value between 1 and 32,767. A feature will be installed if its level is non-zero and not higher than the current value of `INSTALLLEVEL`.

In our user interface, we will set this `INSTALLLEVEL` to 3 for a Typical installation and to 1,000 for a Complete one (this second number is rather arbitrary, we could use any other available number). Consequently, we have to mark those features we don't want to include in a Typical with this level. As `INSTALLLEVEL` will be 3 during such an installation, only those features having a level of 1 to 3 will be installed, anything above that---including our `Level=1000` features---will be left alone.

And finally, the most important part: `ConfigurableDirectory.` By including this attribute and making it refer to `INSTALLDIR`, thus creating the link to the intended target directory as specified in the innermost `Directory` tag a few lines earlier, we allow the user to change our originally intended target. If we don't use this attribute, the user can enable and disable the various features the same way but won't be able to modify the installation directory.
