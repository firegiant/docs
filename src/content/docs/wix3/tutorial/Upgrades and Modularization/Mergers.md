---
title: Mergers
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 5
---

Fragments help divide a large package into manageable chunks of source code and make developer co-operation and code reuse possible. Therefore, it is best suited to in-house development where WiX source code can and will be shared. But there is another mechanism capable of providing complete installation packages for other parties to use: merge modules. If, say, your product A depends on product B of another vendor, you can use their merge module meant to install their product and make it a part of your own so that both will be installed at the same time.

Setting up a merge module is very similar to the standalone source files we've used so far. However, instead of a `Product,` we specify a `Module` tag. Unlike with earlier packages, here we have to provide a unique GUID ourselves:

    <?xml version="1.0" encoding="windows-1252"?>
    <Wix xmlns="http://schemas.microsoft.com/wix/2006/wi">
        <Module Id="File1" Language="0" Version="1.2.3">
            <Package Id="YOURGUID-8DEE-4410-990A-1802896C4209" InstallerVersion="100"
                Languages="1033" Manufacturer="dev" SummaryCodepage="1252" AdminImage="no" />

            <Directory Id='TARGETDIR' Name='SourceDir'>
                <Directory Id='ProgramFilesFolder' Name='PFiles'>
                    <Directory Id='Acme' Name='Acme'>
                        <Directory Id='INSTALLDIR' Name='Foobar 1.0'>
                            <Component Id="File1" Guid="YOURGUID-CF0E-40AB-ACC5-0E9A5F112628">
                                <File Id="File1.txt" Name="File1.txt" Source="File1.txt" KeyPath='yes' />
                            </Component>
                        </Directory>
                    </Directory>
                </Directory>
            </Directory>
        </Module>
    </Wix>

In our sample, we use a second merge module as well. Its source file almost identical to the previous one, with the following differences: we refer to a different file to deploy and we include a `Dependency` tag to indicate that the second module is dependent on the first one. For the dependency, we use the `Module/@Id` identifier with the module's `Package` GUID appended---but we have to replace the original dashes by underscore characters:

    <Module Id="File2" Language="0" Version="1.2.3">
        ...
        <File Id="File2.txt" Name="File2.txt" Source="File2.txt" KeyPath='yes' />
        ...
        <Dependency RequiredId="File1.YOURGUID_8DEE_4410_990A_1802896C4209"
            RequiredLanguage="0" RequiredVersion="1.2.3" />
    </Module>

To create a unified installation package, we write a usual standalone WiX source file:

    <?xml version="1.0" encoding="windows-1252"?>
    <Wix xmlns="http://schemas.microsoft.com/wix/2006/wi">
      <Product Name='Foobar 1.0' Id='YOURGUID-86C7-4D14-AEC0-86416A69ABDE' UpgradeCode='YOURGUID-7349-453F-94F6-BCB5110BA4FD'
        Language='1033' Codepage='1252' Version='1.0.0' Manufacturer='Acme Ltd.'>

        <Package Id='*' Keywords='Installer' Description="Acme's Foobar 1.0 Installer"
          Comments='Foobar is a registered trademark of Acme Ltd.' Manufacturer='Acme Ltd.'
          InstallerVersion='100' Languages='1033' Compressed='yes' SummaryCodepage='1252' />

        <Media Id="1" Cabinet="product.cab" EmbedCab="yes" />

        <Directory Id='TARGETDIR' Name='SourceDir'>
          <Directory Id='ProgramFilesFolder' Name='PFiles'>
            <Directory Id='Acme' Name='Acme'>
              <Directory Id='INSTALLDIR' Name='Foobar 1.0'>

Instead of the usual components, we refer to the merge modules. The `SourceFile` mentions the .msm files:

                <Merge Id="file1" Language="1033" SourceFile="Module1.msm" DiskId="1" />
                <Merge Id="file2" Language="1033" SourceFile="Module2.msm" DiskId="1" />

              </Directory>
            </Directory>
          </Directory>
        </Directory>

        <Feature Id="Msm" Title="Msm" Level="1">
          <MergeRef Id="file1" />
          <MergeRef Id="file2" />
        </Feature>

      </Product>
    </Wix>

You can download the complete [SampleMergeModule](/system/files/samples/SampleMergeModule.zip). You need to build the merge modules separately:

    candle.exe Module1.wxs
    light.exe Module1.wixobj

    candle.exe Module2.wxs
    light.exe Module2.wixobj

    candle.exe SampleMerge.wxs
    light.exe SampleMerge.wixobj
