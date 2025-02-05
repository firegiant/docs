---
title: New User on the Block
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 8
---

<!-- fix:namespace -->
The WiX toolset has additional libraries that allow the installer to perform additional tasks like adding a new user account:

    <Component>
      <user:User Id='NewUser' Name='username' Password='password' />
    </Component>

When you link the installation package, you have to link it against the appropriate WiX extension module:

    light.exe -ext WixUtilExtension -out Sample.msi Sample.wixobj

This library also provides the means to create folder shares. Just put the following code fragment inside any `Component` to create a share on the folder the component installs into:

    <user:User Id='Everyone' Name='Everyone' CreateUser='no' FailIfExists='no' RemoveOnUninstall='no' />
    <user:FileShare Id='MainExecutableShare' Description='Foobar 1.0 share' Name='FoobarShare'>
      <user:Permission GenericRead='yes' ReadPermission='yes' Read='yes' GenericExecute='yes' User='Everyone' />
    </user:FileShare>

The attributes of `FileShare` are self-documenting. To specify the permissions that go with the share, you need to use a `Permission` element and that in turn requires a `User` to be specified. We don't want to create a new user here (see `CreateUser`) nor to remove it when we uninstall our product (see `RemoveOnUninstall`). For the actual permissions, we can chose from a selection of attributes like *Delete*, *Execute*, *Read*, *Write*, *GenericExecute*, *GenericRead*, *GenericWrite*, *TakeOwnership*, *ReadAttributes*, *WriteAttributes*. See the WiX help file to learn all available attributes.

Also note that you can use `Permission` tags inside `CreateFolder` elements as well. Some extra attributes *CreateChild*, *CreateFile*, *DeleteChild*, *Traverse*) are reserved for this case.
