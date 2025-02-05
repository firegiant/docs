---
title: Replacing Ourselves
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 2
---

If our intention is a major upgrade, that is, complete and automatic removal of the previous version when a new one arrives, we just need to set `OnlyDetect=no` and to set the version numbers accordingly. `Minimum` will then specify the first version we allow to replace with the current one (and we include this minimum version in the range) while `Maximum` can be set to the current version number (but _not_ included in the range). Then, any version between the first and the previous one before the current version will be removed automatically during the installation of the current version. Also note that this same installer works as a first time installer as well: if it finds a previous version, it will remove the previous version and install the current one. If it is run on a clean system, it will simply install the current application; there is no need to create separate upgrade and full installers.

    <Upgrade Id='YOURGUID-7349-453F-94F6-BCB5110BA4FD'>
        <UpgradeVersion OnlyDetect='no' Property='PREVIOUSFOUND'
            Minimum='1.0.0' IncludeMinimum='yes'
            Maximum='3.0.0' IncludeMaximum='no' />
    </Upgrade>

The removal of the previous version is completely automatic. If, for any reason, we need to perform any action when this previous version is removed, we can author a custom action whose condition is the UPGRADINGPRODUCTCODE property. The Windows Installer only sets this property when the automatic removal is in progress, not when the application is manually uninstalled using the Programs and Features Control Panel tool.

    <InstallExecuteSequence>
        <Custom Action=' ... ' After=' ... '>UPGRADINGPRODUCTCODE</Custom>
        <RemoveExistingProducts Before="InstallInitialize" />
    </InstallExecuteSequence>

Note that both `Upgrade` and `UpgradeVersion` only work if you are doing a major upgrade.
