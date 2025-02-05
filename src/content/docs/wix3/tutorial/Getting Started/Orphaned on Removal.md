---
title: Orphaned on Removal
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 8
---

The application might create files during its functioning that were not present in the installation package originally (user data file, user settings, log files, etc). You might need to remove them when the product is uninstalled. To remove individual files, use `RemoveFile:`

    <Component>
        ...
        <RemoveFile Id='LogFile' On='uninstall' Name='Foobar10User.log' />
    </Component>

The `On` attribute will determine when the file will be removed (possible values are *install*, *uninstall* and *both*). The `Name` can contain wildcard characters, too. The file or files should be located in the same folder as the component itself. To override this folder, you can use either the `Directory` or the `Property` attribute. The second will allow us to remove files from a folder we don't yet know at the time of creating the installation package.

We have already seen how to signal the removal of folders during uninstallation. For folders created by the application rather than the installer, we will need to specify them separately:

    <Component>
        ...
        <RemoveFolder Id='LogFolder' On='uninstall' />
    </Component>

Again, `Directory` or `Property` can be used to specify the folder if it is not the one of the component itself.
