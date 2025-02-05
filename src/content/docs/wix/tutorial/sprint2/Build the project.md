---
title: Build the project
sidebar:
  order: 9
---

To build the MSI package project in Visual Studio using HeatWave, right-click the `WixTutorialPackage` project in Solution Explorer and choose `Build`. The Output window should show that the App project built before the WixTutorialPackage project and that none of our other changes during this sprint broke the world. Yay for us!

```
Build started...
1>------ Build started: Project: App, Configuration: Debug Any CPU ------
1>  App -> x:\path\to\App\bin\Debug\App.exe
2>------ Build started: Project: WixTutorialPackage, Configuration: Debug x86 ------
2>WixTutorialPackage -> x:\path\to\WixTutorialPackage\bin\x86\Debug\en-US\WixTutorialPackage.msi
========== Build: 2 succeeded, 0 failed, 0 up-to-date, 0 skipped ==========
========== Build started at 8:35 PM and took 01.579 seconds ==========
```
