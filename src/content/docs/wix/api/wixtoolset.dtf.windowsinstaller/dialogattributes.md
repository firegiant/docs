---
title: DialogAttributes Enumeration
---
Defines flags for the Attributes column of the Dialog table.
## Members
| Member | Description |
| ------ | ----------- |
| Bidirectional | This is a combination of the RightToLeftReadingOrder, RightAligned, and the LeftScroll dialog style bits. |
| Error | If this bit is set, the dialog box is an error dialog. |
| KeepModeless | If this bit is set, the other dialogs stay alive when this dialog box is created. |
| LeftScroll | If this style bit is set, the scroll bar is located on the left side of the dialog box. |
| Minimize | If this bit is set, the dialog box can be minimized. This bit is ignored for modal dialog boxes, which cannot be minimized. |
| Modal | If this bit is set, the dialog box is modal, other dialogs of the same application cannot be put on top of it, and the dialog keeps the control while it is running. |
| RightAligned | If this style bit is set, the text is aligned on the right side of the dialog box. |
| RightToLeftReadingOrder | If this style bit is set the text in the dialog box is displayed in right-to-left-reading order. |
| SysModal | If this style bit is set, the dialog box will stop all other applications and no other applications can take the focus. |
| TrackDiskSpace | If this bit is set, the dialog box periodically calls the installer. If the property changes, it notifies the controls on the dialog. |
| UseCustomPalette | If this bit is set, the pictures on the dialog box are created with the custom palette (one per dialog received from the first control created). |
| Visible | If this bit is set, the dialog is originally created as visible, otherwise it is hidden. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
