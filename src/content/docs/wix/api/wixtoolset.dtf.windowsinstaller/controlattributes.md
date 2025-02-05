---
title: ControlAttributes Enumeration
---
Defines flags for the Attributes column of the Control table.
## Members
| Member | Description |
| ------ | ----------- |
| Bidirectional | This is a combination of the RightToLeftReadingOrder, RightAligned, and LeftScroll attributes. |
| Bitmap | If this bit is set, the text in the control is replaced by a bitmap image. The Text column in the Control table is a foreign key into the Binary table. |
| CdromVolume | If this bit is set, the control shows CD-ROM volumes. |
| ComboList | If this bit is set on a combo box, the edit field is replaced by a static text field. This prevents a user from entering a new value and requires the user to choose only one of the predefined values. |
| ElevationShield | If this bit is set, and the installation is not yet running with elevated privileges, the control is created with a UAC icon. |
| Enabled | specifies if the given control is enabled or disabled. Most controls appear gray when disabled. |
| FixedSize | If this bit is set, the picture is cropped or centered in the control without changing its shape or size. |
| FixedVolume | If this bit is set, the control shows fixed internal hard drives. |
| FloppyVolume | If this bit is set, the control shows floppy volumes. |
| FormatSize | If this bit is set for a text control, the control will automatically attempt to format the displayed text as a number representing a count of bytes. |
| HasBorder | If this bit is set, the RadioButtonGroup has text and a border displayed around it. |
| Icon | If this bit is set, text is replaced by an icon image and the Text column in the Control table is a foreign key into the Binary table. |
| IconSize16 | Specifies which size of the icon image to load. If none of the bits are set, the first image is loaded. |
| IconSize32 | Specifies which size of the icon image to load. If none of the bits are set, the first image is loaded. |
| IconSize48 | Specifies which size of the icon image to load. If none of the bits are set, the first image is loaded. |
| Indirect | The Indirect control attribute specifies whether the value displayed or changed by this control is referenced indirectly. |
| Integer | If this bit is set on a control, the associated property specified in the Property column of the Control table is an integer. |
| LeftScroll | If this bit is set, the scroll bar is located on the left side of the control, otherwise it is on the right. |
| Multiline | If this bit is set on an Edit control, the installer creates a multiple line edit control with a vertical scroll bar. |
| NoPrefix | If this bit is set on a text control, the occurrence of the character "&" in a text string is displayed as itself. |
| NoWrap | If this bit is set the text in the control is displayed on a single line. |
| PasswordInput | This attribute creates an edit control for entering passwords. The control displays each character as an asterisk (*) as they are typed into the control. |
| Progress95 | If this bit is set on a ProgressBar control, the bar is drawn as a series of small rectangles in Microsoft Windows 95-style. Otherwise it is drawn as a single continuous rectangle. |
| PushLike | If this bit is set on a check box or a radio button group, the button is drawn with the appearance of a push button, but its logic stays the same. |
| RamDiskVolume | If this bit is set, the control shows RAM disk volumes. |
| RemoteVolume | If this bit is set, the control shows remote volumes. |
| RemovableVolume | If this bit is set, the control shows removable volumes. |
| RightAligned | If this style bit is set, text in the control is aligned to the right. |
| RightToLeftReadingOrder | If this bit is set the text in the control is displayed in a right-to-left reading order. |
| ShowRollbackCost | Specifies whether or not the rollback backup files are included in the costs displayed by the VolumeCostList control. |
| Sorted | If this bit is set, the items listed in the control are displayed in a specified order. Otherwise, items are displayed in alphabetical order. |
| Sunken | If this bit is set, the control is displayed with a sunken, three dimensional look. |
| Transparent | If this bit is set on a text control, the control is displayed transparently with the background showing through the control where there are no characters. |
| UsersLanguage | If this bit is set, fonts are created using the user's default UI code page. Otherwise it is created using the database code page. |
| Visible | If this bit is set, the control is visible on the dialog box. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
