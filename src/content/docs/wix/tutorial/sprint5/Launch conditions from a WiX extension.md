---
title: Launch conditions from a WiX extension
sidebar:
  order: 5
---

So we now have the `WIX_NATIVE_MACHINE` property that the `WixToolset.Util.wixext` custom action has set to the appropriate magic number.

Our goal, as dictated by management, is to require that the user be running an x64 machine to use our package. Now that we think about it, we didn't actually pick a platform when creating our package. It turns out that HeatWave defaults to creating an x64 package by default. We can check that inside Visual Studio by choosing `Build`|`Configuration Manager`:

![Visual Studio Configuration Manager showing the platforms for our App and WixTutorialPackage](/images/docs/configuration_manager.png)

Remember the product backlog item and its summary:

> Require a matching platform in the installer. That means the x64 package can only be installed on an x64 machine and likewise for Arm64.

Technically, that presupposes that we have (at least) two packages: one for x64 and one for Arm64. So far, we have only one. That means we have to do the following:

1. Make sure our current package installs only on an x64 machine.
2. Theoretically ensure a future Arm64 package installs only on an Arm64 machine.
3. In the future, actually make one package for x64 and a separate package for Arm64.

We'll address the first two in this sprint.

During Sprint 4, we saw how to build an expression for a launch condition using a built-in MSI property. Doing so using a custom property set from the code inside a WiX extension is...well, pretty much exactly the same.

Comparing the `WIX_NATIVE_MACHINE` property value to the x64 magic number lets us build an expression for a launch condition:

```xml
<Launch Condition="WIX_NATIVE_MACHINE = 34404" Message="TODO  Must run only on an x64 machine!  TODO" />
```

If you were to try that on a typical x64 machine, the installer would run, just as you might expect. If you ran it on an Arm64 machine, you'd get a launch condition message:

![Windows Installer message box showing launch condition failure message](/images/docs/not-x64.png)

So we're done! Well, we're done if we want to cheat. Let's try to accomplish step #2 and write a launch condition that also blocks the x64 package on an Arm64 machine. If that gets too hard, we can always fall back to cheating.

