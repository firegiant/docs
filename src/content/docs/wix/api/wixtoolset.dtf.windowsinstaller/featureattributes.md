---
title: FeatureAttributes Enumeration
---
Available values for the Attributes column of the Feature table.
## Members
| Member | Description |
| ------ | ----------- |
| DisallowAdvertise | Set this attribute to prevent the feature from being advertised. |
| FavorAdvertise | Set this attribute and the feature state is Advertise. |
| FavorSource | Components of this feature not marked for local installation are installed to run from the source CD-ROM or server. |
| FollowParent | Set this attribute and the state of the feature is the same as the state of the feature's parent. You cannot use this option if the feature is located at the root of a feature tree. |
| None | Favor local - Components of this feature that are not marked for installation from source are installed locally. |
| NoUnsupportedAdvertise | Set this attribute and advertising is disabled for the feature if the operating system shell does not support Windows Installer descriptors. |
| UIDisallowAbsent | Set this attribute and the user interface does not display an option to change the feature state to Absent. Setting this attribute forces the feature to the installation state, whether or not the feature is visible in the UI. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
