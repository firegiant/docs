---
title: Think Localized
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 6
---

If we add our own dialogs to WixUI, we might want them to be localized as well. That doesn't require too much extra work. The main source file stays the same, we only have to modify our new dialog in `UserRegistrationDlg.wxs`. Instead of hardwired texts we will use localizable string references:

    <Fragment>
    ...
        <Dialog Id="UserRegistrationDlg" Width="370" Height="270" Title="!(loc.UserRegistrationDlg_Title)" NoMinimize="yes">
            <Control Id="NameLabel" Type="Text" X="45" Y="73" Width="100" Height="15" TabSkip="no" Text="!(loc.UserRegistrationDlg_UserName)" />
            <Control Id="OrganizationLabel" Type="Text" X="45" Y="110" Width="100" Height="15" TabSkip="no" Text="!(loc.UserRegistrationDlg_Organization)" />
    ...
    </Fragment>

Next, create localization files listing these strings in the appropriate culture. Let's call our file `UserRegistrationDlg.fr-fr.wxl` (the name is up to you, the extension is fixed). In the `WixLocalization` tag you have to specify the culture and its codepage. Create parallel copies for other languages you want to localize to.

    <?xml version="1.0" encoding="utf-8"?>
    <WixLocalization Culture="fr-fr" Codepage="1252" xmlns="http://schemas.microsoft.com/wix/2006/localization">
        <String Id="UserRegistrationDlg_Title" Overridable="yes">???</String>
        <String Id="UserRegistrationDlg_UserName" Overridable="yes">???</String>
        <String Id="UserRegistrationDlg_Organization" Overridable="yes">???</String>
        ...
    </WixLocalization>

To build the installer from the [source](/system/files/samples/SampleWixUIAddDlgLoc.zip), we also need to reference the localization file. In the integrated environment, just include the file in your project and it will be used automatically.

    candle.exe SampleWixUIAddDlgLoc.wxs UserRegistrationDlg.wxs
    light.exe -ext WixUIExtension -cultures:fr-fr -loc UserRegistrationDlg.fr-fr.wxl -out SampleWixUIAddDlgLoc.msi SampleWixUIAddDlgLoc.wixobj UserRegistrationDlg.wixobj
