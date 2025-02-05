---
title: UI Wizardry
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 3
---

And here comes the real magic. WixUI has five different flavors, depending on how sophisticated you want your user interface to be:

* *WixUI_Mondo* offers the complete interface, welcome page, license agreement, setup type (typical, custom and complete), allows for feature customization, browsing for the target directory and offers disk costing. Maintenance mode dialogs are also included. You should use this flavor when some of your product's features shouldn't be installed by default (in other words, there is a significant and meaningful difference between typical and complete installs).
* *WixUI_FeatureTree* is similar to the full set but it doesn't allow the user to chose between setup types. It always assumes Custom and goes directly to the feature customization dialog after the user has accepted the license agreement.
* *WixUI_InstallDir* allows the user to select a destination directory but without presenting the usual customized features page. After having selected the directory, the installation will proceed automatically*.
* *WixUI_Minimal* features a simplistic user interface with a single dialog combining the welcome and license agreement pages. After that, the installation goes on automatically without allowing the user to customize anything. Use it when your application has no optional features to install.
* *WixUI_Advanced* is rather similar to WixUI_Minimal as it offers a simple, one-click install but it also allows selecting features and folders if the user chooses to do so.

\*Note that if you use the WixUI_InstallDir dialog set, you'll have to provide an extra property somewhere in your source:

    <Property Id="WIXUI_INSTALLDIR" Value="INSTALLDIR" />

In order to get a full user interface, all we have to do is to add two lines to include the WixUI interface library into our project:

    <UIRef Id="WixUI_Mondo" />
    <UIRef Id="WixUI_ErrorProgressText" />

The first reference includes the appropriate user interface library but it doesn't automatically use the localized (or modified, in case of English) error and action texts in the language files. Without the second reference, the installer package will be slightly smaller and will use the stock messages inside Windows Installer.

And, finally, we finish it just like in our earlier samples:

        <Icon Id="Foobar10.exe" SourceFile="FoobarAppl10.exe" />
      </Product>
    </Wix>

All the user interface variants come in a common precompiled library. We simply link against this extension library using the command line switch we have already mentioned. When working inside an integrated development environment, we have to add a reference to this library to achieve the same effect.

    candle.exe SampleWixUI.wxs
    light.exe -ext WixUIExtension SampleWixUI.wixobj

You can customize some visual aspects of the user interface by simply providing replacement files. The default ones reside inside the toolset but you're allowed to create your own replacement bitmaps, icons and license text there. You can also replace selected files, not all of them. Their paths are stored in variables that you can specify either on the command line or directly in the source code:

    <WixVariable Id="WixUILicenseRtf" Value="path\License.rtf" />
    <WixVariable Id="WixUIBannerBmp" Value="path\banner.bmp" />
    <WixVariable Id="WixUIDialogBmp" Value="path\dialog.bmp" />
    <WixVariable Id="WixUIExclamationIco" Value="path\exclamation.ico" />
    <WixVariable Id="WixUIInfoIco" Value="path\information.ico" />
    <WixVariable Id="WixUINewIco" Value="path\new.ico" />
    <WixVariable Id="WixUIUpIco" Value="path\up.ico" />

Their meaning and details are:

* WixUIBannerBmp
    493 by 58 pixels, this bitmap will appear at the top of all but the first page of the installer.
* WixUIDialogBmp
    493 by 312 pixels, this bitmap will appear on the first page of the installer.
* WixUIExclamationIco
    32 by 32 pixels, exclamation mark icon.
* WixUIInfoIco
    32 by 32 pixels, information sign icon.
* WixUINewIco
    16 by 16 pixels, new folder icon.
* WixUIUpIco
    16 by 16 pixels, parent folder icon.
* WixUILicenseRtf
    Preferably, use a simple editor like Wordpad to create it, or if you insist on overly complex applications like Word, consider resaving the final version from Wordpad, anyway. The RTF will be less complicated and smaller.
