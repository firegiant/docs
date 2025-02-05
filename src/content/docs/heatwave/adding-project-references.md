---
title: Adding project references
description: HeatWave is FireGiant's Visual Studio extension for WiX v4
sidebar:
  order: 4
---

If your WiX project consumes the output of another project---like a .wixproj that packages the .exe from a .csproj into an .msi---you can add a project reference to ensure that Visual Studio (and MSBuild for command line and CI/CD builds) builds the projects in the right order.

To add a project reference, right-click `Dependencies` in the WiX project in Solution Explorer and choose `Add Project Reference`.

![HeatWave Reference Manager dialog](/images/docs/hwprojref0.png)

In Reference Manager, select the projects to reference and choose OK.

Now when you build, the referenced projects will build before your WiX project.
