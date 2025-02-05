---
title: Version by version
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 12
---

The `InstallerVersion` attribute of the `Package` tag describes which Installer version the installation package requires. In the tutorial, we have been using the value 100 (meaning version 1.0) because we wanted to show the lowest common denominator. The actual versions are shown in this table in connection with the corresponding Windows version:

* **1.x: pre-XP**: Basic MSI support, 32-bit only
* **2.0: XP, 2000 Server SP3**: 64-bit support
* **3.0: XP SP2**: improved patching
* **3.1: XP SP3, 2003 Server SP2**: improved user interface
* **4.0: Vista, Server 2008**: UAC, restart manager
* **4.5: XP SP3, Vista and Server 2008 SP2**: multi-package transactions, embedded UI, embedded chainer, improved patching
* **5.0: Windows 7, 2008 Server R2**: permissions configuration, improved service control, improved UI, dual-mode per-user and per-machine packages

As a general rule, we suggest specifying up to version 3.1 unless a later version is really called for. This version of Windows Installer is supported back to Windows 2000.

There are more detailed [changelogs](http://msdn.microsoft.com/en-us/library/aa372796(VS.85).aspx) and [descriptions](http://msdn.microsoft.com/en-us/library/aa371185(VS.85).aspx) available. Those documents also note which packages are not automatically updated with Windows Update but are available as redistributable downloads.
