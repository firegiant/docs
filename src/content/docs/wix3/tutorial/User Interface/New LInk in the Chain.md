---
title: New Link in the Chain
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 5
---

Although the WixUI interface libraries can handle most usual setup scenarios, modifications or additions are sometimes required. To handle these cases, the [WiX source code](https://github.com/wixtoolset/wix3/archive/refs/heads/master.zip) has to be downloaded, too, because we will need to take a peek at some source files.

In our [sample](/system/files/samples/SampleWixUIAddDlg.zip), we will modify the *WixUI_Mondo* library, adding a new dialog to collect registration information (name, organization, serial number) from the user. The new dialog will appear between the License Agreement and Setup Type dialogs.

To achieve this, we have to provide a new `UserRegistrationDlg.wxs` file describing this new dialog. You can start with an existing dialog, modifying it, or writing your dialog from scratch. A [later lesson](/docs/wix/v3/tutorial/user-interface-revisited) describes how to create dialogs and use various interface elements in WiX. Here we only mention a few remarks:

    <?xml version='1.0' encoding='windows-1252'?>
    <Wix xmlns="http://schemas.microsoft.com/wix/2006/wi">

We have to author the new dialog as a separate fragment:

    <Fragment>
        <UI>
            <Dialog Id="UserRegistrationDlg" Width="370" Height="270" Title="[ProductName] Setup" NoMinimize="yes">
                <Control Id="NameLabel" Type="Text" X="45" Y="73" Width="100" Height="15" TabSkip="no" Text="&amp;User Name:" />
                <Control Id="NameEdit" Type="Edit" X="45" Y="85" Width="220" Height="18" Property="USERNAME" Text="{80}" />
                <Control Id="OrganizationLabel" Type="Text" X="45" Y="110" Width="100" Height="15" TabSkip="no" Text="&amp;Organization:" />
                <Control Id="OrganizationEdit" Type="Edit" X="45" Y="122" Width="220" Height="18" Property="COMPANYNAME" Text="{80}" />
                <Control Id="CDKeyLabel" Type="Text" X="45" Y="147" Width="50" Height="10" TabSkip="no">
                    <Text>CD &amp;Key:</Text>
                </Control>
                <Control Id="CDKeyEdit" Type="MaskedEdit" X="45" Y="159" Width="250" Height="16" Property="PIDKEY" Text="[PIDTemplate]" />

The dialog will be inserted into the original chain of dialogs. We have to specify which dialogs it will step forward or backward to in this chain: License Agreement and Setup Type. We can learn the actual identifiers of these dialogs if we look into the source file of *WixUI_Mondo*: `src\ext\UIExtension\wixlib\WixUI_Mondo.wxs` in the download source package. The names are _LicenseAgreementDlg_ and _SetupTypeDlg_, so this is how we refer to them from this new dialog:

                    <Control Id="Back" Type="PushButton" X="180" Y="243" Width="56" Height="17" Text="&amp;Back">
                        <Publish Event="NewDialog" Value="LicenseAgreementDlg">1</Publish>
                    </Control>
                    <Control Id="Next" Type="PushButton" X="236" Y="243" Width="56" Height="17" Default="yes" Text="&amp;Next">
                        <Publish Event="ValidateProductID" Value="0">1</Publish>
                        <Publish Event="SpawnWaitDialog" Value="WaitForCostingDlg">CostingComplete = 1</Publish>
                        <Publish Event="NewDialog" Value="SetupTypeDlg">ProductID</Publish>
                    </Control>
                    <Control Id="Cancel" Type="PushButton" X="304" Y="243" Width="56" Height="17" Cancel="yes" Text="Cancel">
                        <Publish Event="SpawnDialog" Value="CancelDlg">1</Publish>
                    </Control>
                    <Control Id="BannerBitmap" Type="Bitmap" X="0" Y="0" Width="370" Height="44" TabSkip="no" Text="WixUI_Bmp_Banner" />
                    <Control Id="Description" Type="Text" X="25" Y="23" Width="280" Height="15" Transparent="yes" NoPrefix="yes">
                        <Text>Please enter your customer information</Text>
                    </Control>
                    <Control Id="BottomLine" Type="Line" X="0" Y="234" Width="370" Height="0" />
                    <Control Id="Title" Type="Text" X="15" Y="6" Width="200" Height="15" Transparent="yes" NoPrefix="yes">
                        <Text>{\WixUI_Font_Title}Customer Information</Text>
                    </Control>
                    <Control Id="BannerLine" Type="Line" X="0" Y="44" Width="370" Height="0" />
                </Dialog>
            </UI>
        </Fragment>
    </Wix>

It is rather easy to incorporate the dialog into the original user interface. Instead of simply referencing *WixUI_Mondo* as we did earlier, we build our own interface with the `UI` tag. However, we still want to use the bulk of *WixUI_Mondo*, so we start by calling it with `UIRef` and only add our modifications: first, we refer to our new <em>UserRegistrationDlg</em> dialog.

Then we have to specify the remaining two links. The License Agreement dialog used to point to the Setup Type dialog as its successor and vice versa. Now that our own dialog is inserted between them, we have to modify their _Next_ and _Back_ links correspondingly. The easy way is to copy the relevant `Publish` tags from `WixUI_Mondo.wxs` and modify the `Value` attribute to point to our new dialog, without changing anything else:

    <UI Id="MyWixUI_Mondo">
      <UIRef Id="WixUI_Mondo" />
      <UIRef Id="WixUI_ErrorProgressText" />

      <DialogRef Id="UserRegistrationDlg" />

      <Publish Dialog="LicenseAgreementDlg" Control="Next" Event="NewDialog" Value="UserRegistrationDlg" Order="3">LicenseAccepted = "1"</Publish>
      <Publish Dialog="SetupTypeDlg" Control="Back" Event="NewDialog" Value="UserRegistrationDlg">1</Publish>
    </UI>

The main file will need to define the property we referred to. MaskedEdit controls use [various characters](https://msdn.microsoft.com/en-us/library/aa369797.aspx) to determine what and how will appear in the control, what kind of input the control will accept and how the final data assigned to the receiving property will be formed.

    <Property Id="PIDTemplate"><![CDATA[12345<### ###>@@@@@]]></Property>

And this is all there is to it. Now we can build our modified installer with the following commands:

    candle.exe SampleWixUIAddDlg.wxs UserRegistrationDlg.wxs
    light.exe -ext WixUIExtension -out SampleWixUIAddDlg.msi SampleWixUIAddDlg.wixobj UserRegistrationDlg.wixobj
