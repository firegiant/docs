---
title: Morphing Installers
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 1
---

One interesting reason to use transforms is to modify the user interface strings to another language. As we have already discussed earlier, WiX allows the WixUI interface languages to be localized. Using that, we could provide installers in various languages. But if we need more than one language, this simpler solution only allows us to create parallel installers, all of them in their own language all right but storing all files to be deployed several times.

Transforms can help us in this case. We can start with our basic installer (this could be English or anything else). Each language we add will practically be an on-the-fly patch, called by Windows Installer before the first page appears, to translate the UI strings to a specific language. Thus, all languages will share the same installation package, the files to be installed only appearing once, and each new language will only add a small amount to the package size.

We can start our installation with a small bootstrapper. The bootstrapper can list the available languages, maybe defaulting to the language of the operating system it is running on but allowing the user to chose any language. When finished, the bootstrapper can launch the actual installation specifying which transform to apply.

To create such a multi-language installer, there is surprisingly little to change:

    <?xml version='1.0' encoding='windows-1252'?>
    <Wix xmlns='http://schemas.microsoft.com/wix/2006/wi'>

      <Product Name='Foobar 1.0' Id='YOURGUID-86C7-4D14-AEC0-86416A69ABDE' UpgradeCode='YOURGUID-7349-453F-94F6-BCB5110BA4FD'
        Language='1033' Codepage='$(var.codepage)' Version='1.0.0' Manufacturer='Acme Ltd.'>

        <Package Id='*' Keywords='Installer' Description="Acme's Foobar 1.0 Installer"
          Comments='Foobar is a registered trademark of Acme Ltd.' Manufacturer='Acme Ltd.'
          InstallerVersion='100' Languages='1033' Compressed='yes' SummaryCodepage='$(var.codepage)' />

      ...
    </Wix>

As the first step, we will build these separate localized installers, much like before but each file should have the appropriate codepage specified, as shown in the table of supported languages:

    candle.exe SampleMulti.wxs -dcodepage=1252
    light.exe -ext WixUIExtension -cultures:en-us -out SampleMulti.msi SampleMulti.wixobj

    candle.exe SampleMulti.wxs -dcodepage=1250
    light.exe -ext WixUIExtension -cultures:hu-hu -out Sample_Hu-hu.msi SampleMulti.wixobj

    candle.exe SampleMulti.wxs -dcodepage=1252
    light.exe -ext WixUIExtension -cultures:fr-fr -out Sample_Fr-fr.msi SampleMulti.wixobj

Then WiX's transform tool, Torch, compares each localized installer to the base one (SampleMulti.msi) and creates an .mst transform file in turn comprising the differences between the two:

    torch.exe -p -t language SampleMulti.msi Sample_Hu-hu.msi -out hu-hu.mst
    torch.exe -p -t language SampleMulti.msi Sample_Fr-fr.msi -out fr-fr.mst

Our bootstrap installer can then call the base installer package with the appropriate language package specified:

    msiexec /i SampleMulti.msi TRANSFORMS="fr-fr.mst"

Apart from the need for the bootstrapper, we also need to distribute the transform files separately. A better approach (not currently supported by WiX but available with the [EmbedTransform tool](/system/files/samples/EmbedTransform.zip) is to embed the transforms into the original package:

    EmbedTransform.exe SampleMulti.msi hu-hu.mst
    EmbedTransform.exe SampleMulti.msi fr-fr.mst

The only difference in its use is that a colon preceding the name instructs Windows Installer to look for the transform file inside the package:

    msiexec /i SampleMulti.msi TRANSFORMS=":fr-fr.mst"