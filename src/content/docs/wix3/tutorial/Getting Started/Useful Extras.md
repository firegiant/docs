---
title: Useful Extras
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 4
---

Needless to say, we can do much more than to simply copy a couple of files around. To start with, we can have launch conditions: we check for some global settings and stop the installation if our conditions are not met. Just add this line to our previous sample somewhere not within a feature (for instance, between the `Package` and `Media` tags) and it will refuse to run if you're not an administrator on your machine:

    <Condition Message="You need to be an administrator to install this product.">
        Privileged
    </Condition>

On Vista, use:

    <Condition Message="You need to be an administrator to install this product.">
        AdminUser
    </Condition>

Note that the messages will appear and the installation will be aborted if the condition between the starting and closing tags evaluates to *false*. In other words, don't specify the error condition, specify the case you want to proceed with the installation in:

    <Condition Message='This application only runs on Windows 95/98/ME.'>
        Version9X
    </Condition>

There are quite a few standard properties you can use in similar conditions but the most important ones would be those specifying the version of Windows the setup is running on. `Version9X` is true on Windows 95, 98 and ME. `VersionNT` is true on NT 4.0 and later. `VersionNT64` signals a 64-bit operating system.

    <Condition Message='Windows 95'>Version9X = 400</Condition>
    <Condition Message='Windows 95 OSR2.5'>Version9X = 400 AND WindowsBuild = 1111</Condition>
    <Condition Message='Windows 98'>Version9X = 410</Condition>
    <Condition Message='Windows 98 SE'>Version9X = 410 AND WindowsBuild = 2222</Condition>
    <Condition Message='Windows ME'>Version9X = 490</Condition>
    <Condition Message='Windows NT4'>VersionNT = 400</Condition>
    <Condition Message='Windows NT4 SPn'>VersionNT = 400 AND ServicePackLevel = n</Condition>
    <Condition Message='Windows 2000'>VersionNT = 500</Condition>
    <Condition Message='Windows 2000 SPn'>VersionNT = 500 AND ServicePackLevel = n</Condition>
    <Condition Message='Windows XP'>VersionNT = 501</Condition>
    <Condition Message='Windows XP SPn'>VersionNT = 501 AND ServicePackLevel = n</Condition>
    <Condition Message='Windows XP Home SPn'>VersionNT = 501 AND MsiNTSuitePersonal AND ServicePackLevel = n</Condition>
    <Condition Message='Windows Server 2003'>VersionNT = 502</Condition>
    <Condition Message='Windows Vista'>VersionNT = 600</Condition>
    <Condition Message='Windows Vista SP1'>VersionNT = 600 AND ServicePackLevel = 1</Condition>
    <Condition Message='Windows Server 2008'>VersionNT = 600 AND MsiNTProductType = 3</Condition>
    <Condition Message='Windows 7'>VersionNT = 601</Condition>

There are [many more properties like these](http://msdn.microsoft.com/en-us/library/aa370905(VS.85).aspx#operating_system_properties) to choose from. For instance, `MsiNTProductType` allows you to differentiate between Workstation, Domain Controller and Server. Be sure to check out the other `MsiNT` properties as well.
