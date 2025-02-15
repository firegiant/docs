---
pagefind: false
title: WixUI_FeatureTree Dialog Set
---

WixUI_FeatureTree is a simpler version of [WixUI_Mondo](../wixui_mondo/) that omits the setup type dialog. Instead, the wizard proceeds directly from the license agreement dialog to the feature customization dialog. WixUI_FeatureTree is more appropriate than WixUI_Mondo when your product installs all features by default.

This dialog set is defined in the file **WixUI_FeatureTree.wxs** in the WixUIExtension in the WiX source code.

## WixUI_FeatureTree Dialogs

WixUI_FeatureTree includes the following dialogs:

* BrowseDlg
* CustomizeDlg
* DiskCostDlg
* LicenseAgreementDlg
* WelcomeDlg

In addition, WixUI_FeatureTree includes the following common dialogs that appear in all WixUI dialog sets:

* CancelDlg
* ErrorDlg
* ExitDlg
* FatalError
* FilesInUse
* MaintenanceTypeDlg
* MaintenanceWelcomeDlg
* MsiRMFilesInUse
* OutOfDiskDlg
* OutOfRbDiskDlg
* PrepareDlg
* ProgressDlg
* ResumeDlg
* UserExit
* VerifyReadyDlg
* WaitForCostingDlg

See [the WixUI dialog reference](../wixui_dialogs/) for detailed descriptions of each of the above dialogs.
