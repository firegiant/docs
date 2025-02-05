---
title: Services Rendered
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 5
---

Services can be installed and started automatically.

    <Component Id='ServiceExeComponent' Guid='YOURGUID-D752-4C4F-942A-657B02AE8325'
      SharedDllRefCount='no' KeyPath='no' NeverOverwrite='no' Permanent='no' Transitive='no'
      Win64='no' Location='either'>

      <File Id='ServiceExeFile' Name='ServiceExe.exe' Source='ServiceExe.exe'
        ReadOnly='no' Compressed='yes' KeyPath='yes' Vital='yes' Hidden='no' System='no'
        Checksum='no' PatchAdded='no' />

      <ServiceInstall Id='MyServiceInstall' DisplayName='My Test Service' Name='MyServiceExeName'
        ErrorControl='normal' Start='auto' Type='ownProcess' Vital='yes' />

      <ServiceControl Id='MyServiceControl' Name='MyServiceExeName'
        Start='install' Stop='uninstall' Remove='uninstall' />

    </Component>
