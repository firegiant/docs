---
title: FireGiant Protected Services Extension
description: Documentation how to use the FireGiant Protected Services Extension
sidebar:
  order: 5
---

The FireGiant protected service extension can install, repair, upgrade, uninstall, and roll back protected services, such as those used by anti-malware software.

During installation, the FireGiant protected service extension:

- Installs the ELAM driver private certificate.
- Configures the service to launch as a protected service.

:::caution[Licensed feature]
Like the other features in HeatWave Build Tools, a license file is required to use FireGiant Protected Services Extension. See the [FireGiant licensing documentation for more information](../firegiant-licensing/).
:::

To use the protected service extension, add a reference to the `FireGiant.HeatWave.BuildTools.wixext` and access the extension by adding the following namespace to your .wxs code:

```xml title=ProtectedService.wxs
<Wix xmlns:fg="http://www.firegiant.com/schemas/v4/wxs/heatwave/buildtools">
```

To mark a service as protected, use the `ProtectedService` element in the `Component` that contains your protected service:

```xml title=ProtectedService.wxs
<Component Id="ProtectedService">
  <File Source="$(var.ProtectedServiceExe.TargetPath)" />
  <fg:ProtectedService Name="$(var.ProtectedServiceName)"
                       ElamFile="IdOfFileWithElamCertificate" />

  <ServiceInstall Id="InstallProtectedService"
                  Name="$(var.ProtectedServiceName)"
                  Type="ownProcess"
                  Start="auto"
                  ErrorControl="normal"
                  />

  <ServiceControl Id="ControlProtectedService"
                  Name="$(var.ProtectedServiceName)"
                  Remove="uninstall"
                  Start="install"
                  Stop="both"
                  Wait="yes"
                  />
</Component>
```

The `Name` attribute is required and specifies the service name (not the display name). It must match the `ServiceInstall/@Name` attribute used to install the service and `ServiceControl/@Name` attribute to start the service. (`ServiceInstall` is required to install the service. `ServiceControl` is optional if, for example, your driver or service requires a reboot.)

The `ElamFile` attribute is required and specifies the id of the driver file that contains the ELAM certificate information. `ElamFile` lets the protected service be registered and started without rebooting the user's machine.

During servicing (including uninstallation and upgrades), the protected service is directed to unprotect itself so that the service can be stopped and uninstalled before being removed or updated. Because each protected service has its own method for unprotecting itself, you must define custom actions that are invoked at the appropriate points during setup to unprotect the service. Three custom actions are required:

- `UnprotectService<ProtectedServiceName>`: Must be scheduled before the standard action `StopServices` to unprotect a protected service before Windows Installer stops it.

- `UnprotectStartServicesRollback<ProtectedServiceName>`: Must be scheduled after the standard action `StartServices` to unprotect a protected service before Windows Installer stops it during the rollback of a failed setup.

- `UnprotectInstallServicesRollback<ProtectedServiceName>`: Must be scheduled after the standard action `InstallServices` to unprotect a protected service before Windows Installer uninstalls it during the rollback of a failed setup.

Here's how these custom actions should be defined and scheduled. In this example, the custom actions invoke an executable stored in the Binary table with a command-line argument of `{SECRET}`; your custom actions can vary.

```xml title=ProtectedService.wxs
<Fragment>
  <CustomAction Id="UnprotectService$(var.ProtectedServiceName)" BinaryRef="SecretExe"
                ExeCommand="{SECRET}" Execute="deferred" Impersonate="no" />

  <CustomAction Id="UnprotectStartServicesRollback$(var.ProtectedServiceName)" BinaryRef="SecretExe"
                ExeCommand="{SECRET}" Execute="rollback" Impersonate="no" />

  <CustomAction Id="UnprotectInstallServicesRollback$(var.ProtectedServiceName)" BinaryRef="SecretExe"
                ExeCommand="{SECRET}" Execute="rollback" Impersonate="no" />

  <InstallExecuteSequence>
    <Custom Action="UnprotectService$(var.ProtectedServiceName)" Before="StopServices" />
    <Custom Action="UnprotectStartServicesRollback$(var.ProtectedServiceName)" After="StartServices" />
    <Custom Action="UnprotectInstallServicesRollback$(var.ProtectedServiceName)" After="InstallServices" />
  </InstallExecuteSequence>
</Fragment>
```

Your unprotect custom actions must not fail if the service is not installed or if it is already unprotected. The custom action ids include the service name so it is possible to have more than a single protected service in a package. Note that when you use the `ProtectedService` element, the three custom actions must be defined; an error will occur at link time if any of the custom actions are missing.
