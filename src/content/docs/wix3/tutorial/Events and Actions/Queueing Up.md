---
title: Queueing Up
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 1
---

There are many steps, so-called actions the Windows Installer carries out during an installation. The basic ones and those additional items required by the specific installer (this depends on the features you use, registry searches, user interface, etc) are automatically scheduled, in other words, their sequence is predetermined by the toolset when it creates the installer database. For a common .msi file, this might look like:

* AppSearch
* LaunchConditions
* ValidateProductID
* CostInitialize
* FileCost
* CostFinalize
* InstallValidate
* InstallInitialize
* ProcessComponents
* UnpublishFeatures
* RemoveShortcuts
* RemoveFiles
* InstallFiles
* CreateShortcuts
* RegisterUser
* RegisterProduct
* PublishFeatures
* PublishProduct
* InstallFinalize
* RemoveExistingProducts

You can check out the actual action sequence in an installer using Orca, an MSI editor from the [Windows Installer SDK](https://learn.microsoft.com/en-us/windows/win32/msi/platform-sdk-components-for-windows-installer-developers).

Reordering these events can be done using the appropriate tags. Actually, we have as many as four of them:

* AdminUISequence
* InstallUISequence
* AdminExecuteSequence
* InstallExecuteSequence

The ones starting with `Admin` refer to administrative installs (launched using `msiexec /a`). These type of installations create a source image of the application onto the network so that users in the workgroup can later install from this source image instead of the original media. This functionality comes for free, we've never bothered with it so far, yet our previous samples can all be installed this way (try it!).

So, for the moment, this only leaves two tags. `InstallExecuteSequence` is always consulted by the installer to determine the actions, `InstallUISequence` is only considered when the installer runs in full or reduced UI mode (yet another functionality to experiment with, try `msiexec`'s `/qn`, `/qb` and `/qr` switches). Because we need to schedule our registry search before the launch condition in all UI cases, insert that line into both tags.<!-- fix: unnecessary --> Compile and run, it should work now, keep renaming the registry key to check.

You can see the sequence order numbers in Orca. Although you can use these numbers as well, it is much easier not to bother with them, just tell WiX the relative sequence of your actions: simply specify which sequence your action should come `Before` or `After`. To remove an action from the chain of execution, use the `Suppress=yes` attribute.

    <InstallExecuteSequence>
        <LaunchConditions After='AppSearch' />
        <RemoveExistingProducts After='InstallFinalize' />
    </InstallExecuteSequence>
