---
title: Custom Settings
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 2
---

In this treeview, each entry will have an associated context menu, allowing the user to decide which features should be installed and how. The menu defaults to the following entries:

* This feature will be installed on local hard drive.
* This feature, and all subfeatures, will be installed on local hard drive.
* This feature will be installed to run from network.*
* This feature, and all subfeatures, will be installed to run from network.*
* This feature will be installed when required.
* This feature will not be available.

\* There seems to be a bug in Windows Installer. With features having no files inside, this entry will appear in the context menu even if you use the attributes outlined above to remove it. In this case, add an empty component (with no files inside) to the feature.

Using various attributes of `Feature`, some of these items can be removed or modified, leaving only those that make sense for the feature in question. Basically, there are five possibilities: to install the feature on the local hard drive, to let it run from the installation media, to run it from the network, to install on demand (the feature will be installed when the user tries to activate it for the first time; this is only supported on more recent operating systems) and to not install it at all.

* **AllowAdvertise='no'**: `This feature will be installed when required` will be removed from the context menu. The user is not allowed to install this feature on demand.
* **AllowAdvertise='yes'**: `This feature will be installed when required` will appear in the context menu. The user is allowed to install this feature on demand.
* **AllowAdvertise='system'**: `This feature will be installed when required` will only appear in the context menu, allowing the user to install the feature on demand, if the operating system supports this.
* **InstallDefault='local'**: `This feature, [and all subfeatures,] will be installed on local hard drive` will appear in the context menu.
* **InstallDefault='source'**: `This feature, [and all subfeatures,] will be installed to run from CD` will appear in the context menu instead of the original entry `...installed on local hard drive`.
* **InstallDefault='followParent'**: The actual state (either *local* or *source*) will follow the one set in the parent feature.
* **Absent='allow'**: `This feature will not be available` will appear in the context menu. The user can decide whether to install this feature or not.
* **Absent='disallow'**: `This feature will not be available` will be removed from the context menu. The feature is always required, the user is not allowed to turn its installation off.
