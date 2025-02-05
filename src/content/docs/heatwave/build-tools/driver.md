---
title: FireGiant Driver Extension
description: Documentation how to use the FireGiant Driver Extension
sidebar:
  order: 4
---

The FireGiant Driver Extension can install, repair, upgrade, uninstall, and roll back kernel and file system drivers.
This WiX Extension is very lightweight and robust and avoids all the complexity DifxApp requires to install plug and play (PnP) drivers. All you need is your system driver, FG-WiX and one line of XML.

Here is a snippet of .wxs code that can install a simple kernel driver:

```xml title=FooDriver.wxs
<Fragment>
  <Component Directory="SystemFolder">
    <File Source="build\path\to\foo.sys" />

    <fg:Driver Name="Foo" DisplayName="Foo example driver" Type="kernel"
                ErrorControl="ignore" Start="boot" BinaryPath="System32\foo.sys" />
  </Component>
</Fragment>
```

Drivers can also be part of a load ordering group using the `LoadOrderGroup` attribute and define dependencies on other drivers
and system services using the `DriverDependency` element. For example, a file system driver dependent on another driver `Bar` and
load ordering group `Baz`:

```xml title=FooDriver.wxs
<fg:Driver Name='FooFs' DisplayName='Foo example file system driver'
              Type='fileSystem' ErrorControl='ignore' Start='boot'
              LoadOrderGroup='System Reserved' BinaryPath='foofs.sys'>
  <fg:DriverDependency Name='Bar' />
  <fg:DriverDependency Name='Baz' Group='yes' />
</fg:Driver>
```

To use the Driver Extension, add a reference to the `FireGiant.HeatWave.BuildTools.wixext` and access the extension
by adding the following namespace to your .wxs code:

```xml title=FooDriver.wxs
<Wix xmlns:fg="http://www.firegiant.com/schemas/v4/wxs/heatwave/buildtools">
```
