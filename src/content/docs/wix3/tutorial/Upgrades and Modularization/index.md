---
title: Upgrades and Modularization
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 0
---

At the end of the previous lesson, we have already learned how to do everything that can be thought of when it comes to installation packages, right? After all, even if Windows Installer doesn't provide an immediate solution, we just fire up our trusty old compiler and write it for ourselves, right?

In a way, yes. And in a way, no. We know how to assemble our original installation package but what shall we do when it comes to shipping an upgrade? Or a patch? Shall we ask the user to uninstall the previous version and reinstall the new one? And what happens to the settings our user has made during the use of the software? Shall they start everything from scratch again?

Of course not. So, let's see how Windows Installer can help solve such problems. It divides product changes into three categories:

* *Small updates* mean small changes to one or a few files where the change doesn't warrant changing the product version (major.minor.build) or product ID GUID.
    
    Note that you always have to change the Package GUID when you create a new .msi file that is different from the previous ones in any respect. The Installer keeps track of your installed programs and finds them when the user wants to change or remove the installation using these GUIDs. Using the same GUID for different packages will confuse the Installer.

* *Minor upgrades* denote changes where the product version will already change. Modify the `Version` attribute of the `Product` tag. The product will remain the same, so you don't need to change the `Product` GUID but, of course, get a new `Package` GUID.

* *Major upgrades* denote significant changes like going from one full version to another. Change everything: `Version` attribute, `Product` and `Package` GUIDs.

There are cases when the Windows Installer forces you to use a major upgrade (in other words, to change the `Product` GUID). You have to when you expect the old and new versions to coexist on the user's computer. You have to when you change the name of the .msi file for any reason. You have to when you need to change any `Component` GUID in the package. You have to when a component has been removed. You have to when there are any changes in the feature hierarchy (child feature moving out of a parent, or a parent feature getting a new child).

So, major upgrades are a clear cut but the line between small updates and minor upgrades can be blurred. Think about it this way: if you'll ever need to differentiate between the current and the new versions in your future products, vote for the minor upgrade. In most of the usual cases, however, unless the product is rather large and downloading and deploying it again would be out of question, major upgrades are the safest because they provide the smoothest solution without the risks of the other two variants.

When you change GUIDs, keep track of the old ones. You will need them to use the sophisticated upgrade features of Windows Installer.
