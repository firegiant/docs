---
title: Checking for Oldies
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 1
---

The first task when doing any kind of update or upgrade is to make sure we have the previous version we want to change. 

Windows Installer relies on the `UpgradeCode` attribute of the `Product` tag to do that. Therefore, it is very important to always include an UpgradeCode, even if you don't plan your current program to be upgraded later. You never know and once it's out there, you can't provide it any more.

Keep the same `UpgradeCode` GUID as long as you want the products to be upgraded by the same upgrade version. In the usual case, this would mean one code for all 1.x versions, another one for the 2.x versions, etc:

    <?xml version='1.0' encoding='windows-1252'?>
    <Wix xmlns='http://schemas.microsoft.com/wix/2006/wi'>
        <Product Name='Foobar 1.0' Id='PUT-GUID-1-HERE' UpgradeCode='PUT-GUID-2-HERE'
            Language='1033' Codepage='1252' Version='1.0.0' Manufacturer='Acme Ltd.'>
            <Package Description="Acme's Foobar 1.0 Installer" Compressed='yes' />

            ...
        </Product>
    </Wix>

Our current [SampleUpgrade](/system/files/samples/SampleUpgrade.zip) now consists of two installation packages. Both are based on the simple UI installer, SampleWixUI.

The second version of SampleUpgrade is meant to replace one of the deployed files with a newer version. As we will now consider this a *minor upgrade*, we change the `Version`. Cosmetic changes to the human readable `Name` and `Description` are obvious:

    <Product Name='Foobar 1.0.1' Id='PUT-GUID-1-HERE' UpgradeCode='PUT-GUID-2-HERE'
        Version='1.0.1' Manufacturer='Acme Ltd.' Language='1033' Codepage='1252' >
    <Package Id='*' Keywords='Installer' Description="Acme's Foobar 1.0.1 Updater" ... >

We also need a description of what product versions we plan to replace with this upgrade. The `Id` attribute of the `Upgrade` tag refers back to the `UpgradeCode` GUID of the original installation package (the older SampleUpgrade in our case). The internal `UpgradeVersion` tag describes the details of the versions to be updated. `OnlyDetect` tells the installer not to remove the previous product (remember, we're doing a minor upgrade, we keep the old version of the product in place but replace one file. If we were doing a major upgrade, we would probably *remove* 1.0.0 and *install* 1.1.0 instead).

`Minimum` and `Maximum` specify the range of versions we are supposed to update with this upgrade. `IncludeMaximum` and `IncludeMinimum` specify whether the bound value is actually included in the range or not (`IncludeMaximum=yes` meaning to find versions *less than or equal to* the version specified in `Maximum` while `IncludeMaximum=no` only finds those *less than* the `Maximum`). Although these attributes have their default values, we don't rely on those here and always include them---it's better to spell them out for the sake of clarity and self-documentation.

    <Upgrade Id='PUT-GUID-2-HERE'>
        <UpgradeVersion OnlyDetect='yes' Property='SELFFOUND'
            Minimum='1.0.1' IncludeMinimum='yes'
            Maximum='1.0.1' IncludeMaximum='yes' />
        <UpgradeVersion OnlyDetect='yes' Property='NEWERFOUND'
            Minimum='1.0.1' IncludeMinimum='no' />
    </Upgrade>

Using an `Upgrade` tag in our source file triggers the inclusion of a new standard action, `FindRelatedProducts`. It is scheduled to run before `AppSearch`, if any. If necessary, we can re-schedule it inside the `InstallExecuteSequence` tag.

`FindRelatedProducts` works its way through our `Upgrade` tag and checks for each version listed there. If one is found, its `Product` GUID will be appended to the property specified in the `UpgradeVersion` `Property` attribute (`SELFFOUND` and `NEWERFOUND` in our example). Needless to say, the Installer can only find products that have been installed using an .msi package with `UpgradeCode` specified---so now you know why it's so important to always specify one.

If you develop localized software packages, you can also specify a `Language` attribute in both `UpgradeVersion` and `Product` tags. Use the usual Windows decimal language identifier to specify the language. If specified, `FindRelatedProducts` will only locate products with matching languages.

After the check has run, we can take the appropriate actions based on the existence and value of the properties involved:

    <CustomAction Id='AlreadyUpdated' Error='Foobar 1.0 has already been updated to 1.0.1 or newer.' />
    <CustomAction Id='NoDowngrade' Error='A later version of [ProductName] is already installed.' />

    <InstallExecuteSequence>
        <Custom Action='AlreadyUpdated' After='FindRelatedProducts'>SELFFOUND</Custom>
        <Custom Action='NoDowngrade' After='FindRelatedProducts'>NEWERFOUND</Custom>
    </InstallExecuteSequence>

For some strange reason, small updates and minor upgrades cannot be run simply by clicking on the .msi file. They give the error: `Another version of this product is already installed.`

We know, stupid. Anyway, you have to start it with the command:

    msiexec /i SampleUpgrade.msi REINSTALL=ALL REINSTALLMODE=vomus

Don't ask me how this would fare with the average user. You'd better start it from an Autorun.inf file or devise an outer Setup.exe shell to launch it.

As you can see, this upgrade version will behave properly in both directions. It will replace the earlier package but it will also handle the case where the program might be upgraded even further in the future (eg, 1.0.2 and later). It will not downgrade a possible later version back to 1.0.1. To be absolutely correct and foolproof, we have to plan that early. Even the very first installer we ship should already have this safety lock built in:

    <Upgrade Id='PUT-GUID-2-HERE'>
        <UpgradeVersion OnlyDetect='yes' Property='NEWERFOUND' Minimum='1.0.0' IncludeMinimum='no' />
    </Upgrade>

    <CustomAction Id='NoDowngrade' Error='A later version of [ProductName] is already installed.' />

    <InstallExecuteSequence>
        <Custom Action='NoDowngrade' After='FindRelatedProducts'>NEWERFOUND</Custom>
    </InstallExecuteSequence>
