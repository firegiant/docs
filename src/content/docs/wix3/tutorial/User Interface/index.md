---
title: User Interface
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 0
---

In the previous lesson we have learned how to describe the files we want to be installed. Although we saw some simple implementations of automated installer logic to determine whether a given product has already been installed previously, everything went without the customary user interface giving the user a chance to say anything about the installation. So this is the topic we will be treating in this installment.

The Windows Installer doesn't have its built-in user interface (except for a simple progress dialog we've already seen and a few message boxes popping up to inform the user about various errors). Installer packages have to define their own user interface, compile it and carry it around inside their own .msi file. This makes this file somewhat larger (an .msi file with a typical user interface will start just below 300KB, although this will also depend on the size of the icons and other graphical elements inside) but, in return to this size, will be perfectly customizable to every possible need.

It wouldn't be too much fun to start to develop a complete user interface for ourselves. Fortunately, there is no need to do that. The WiX toolset comes with a standard user interface library, WixUI. This user interface is based on the prefabricated interface in the [MSI SDK](https://docs.microsoft.com/en-us/windows/win32/msi/platform-sdk-components-for-windows-installer-developers). The WixUI library provides the complete user interface of a standard installer package, including all standard wizard pages: license agreement, customer information, typical/custom/complete setup types, customization of install target folder, calculation of disk usage requirements, modify/repair/remove and rollback. The only difference is that---for sake of individuality---its dominant color is reddish instead of bluish. However, it only takes to modify a couple of bitmaps and icons if you want to customize that.
