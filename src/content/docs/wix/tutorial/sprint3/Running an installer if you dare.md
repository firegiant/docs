---
title: Running an installer...if you dare
sidebar:
  order: 2
---

When you build the solution in Visual Studio, you get the placeholder app .exe and the .msi that installs it:

```
Build started...
1>------ Build started: Project: App, Configuration: Debug Any CPU ------
1>  App -> X:\sprint3\App\bin\Debug\App.exe
2>------ Build started: Project: WixTutorialPackage, Configuration: Debug x86 ------
2>WixTutorialPackage -> X:\sprint3\WixTutorialPackage\bin\x86\Debug\en-US\WixTutorialPackage.msi
========== Build: 2 succeeded, 0 failed, 0 up-to-date, 0 skipped ==========
========== Build started at 13:37 and took 03.589 seconds ==========
```

The file at `X:\sprint3\WixTutorialPackage\bin\x86\Debug\en-US\WixTutorialPackage.msi` is ready to be installed. Go ahead, double-click it. We'll wait. Go on, dare you. _Double-dog_ dare you!

Take it from us experts: Installing that .msi is perfectly safe. It's just installing a file, something Windows Installer has probably done quadrillions of times since its [1999 release with Office 2000](https://en.wikipedia.org/wiki/Windows_Installer#Versions). You won't have any problems installing it and after uninstalling it, you'll have a clean machine (or at least as clean as it was before).

Nonetheless, software developers are naturally and appropriately cautious about installing random builds of software that's early in development.

In the long ago, you might have a machine or two dedicated to testing, so when your software went bad, it was fast to just format and reinstall the operating system. Then came virtual machines, proof of a benevolent universe: They allow you to run an entire fake machine on your "host" machine, from the comfort of your desk. Boot it up, wreak havoc, and click a button to make it go away. It's like the gods of software asked a setup developer what would make their jobs bearable and delivered the answer on a cushioned silver platter.

We're fans.

Windows has included its [Hyper-V hypervisor](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/) in the client editions of Windows since Windows 8. Windows 10 introduced [Windows Sandbox](https://learn.microsoft.com/en-us/windows/security/application-security/application-isolation/windows-sandbox/windows-sandbox-overview) which

> provides a lightweight desktop environment to safely run applications in isolation.

Why, that sounds exactly what we're looking for! Sandbox comes with Windows, is lighter weight than a typical Hyper-V virtual machine and, conveniently, starts up faster too. The only real disadvantage of Sandbox over a full Hyper-V VM is that Sandbox can only run the same version of Windows as on the host machine. You'll need other machines, presumably virtual, to test those different versions. That will be a problem for us eventually, but for now, the benefits of Sandbox way outweigh the downsides, so we'll start testing inside Windows Sandbox.
