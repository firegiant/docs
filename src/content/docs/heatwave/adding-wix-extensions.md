---
title: Adding WiX Extensions
description: HeatWave is FireGiant's Visual Studio extension for WiX v4
sidebar:
  order: 3
---

WiX extensions are available as NuGet packages and HeatWave lets you choose them using the NuGet Package Manager in Visual Studio. Open NuGet Package Manager from the .wixproj context menu in Solution Explorer by choosing `Manage NuGet Packages`. One trick to finding all the extensions published by the WiX team is to search for `wixext` -- all the WiX extensions end in that name.

![Visual Studio NuGet Package Manager window showing WiX extensions from nuget.org](/images/docs/nupkegs.png)

Select the extension you want to add, like `WixToolset.Util.wixext`, and choose `Install`. HeatWave, Visual Studio, and NuGet will work together to get the WiX extension and add it as a dependency in your project. You can expand `Dependencies` to show that the extension is loaded and the NuGet package it came from.

![HeatWave .wixproj Dependencies node showing WiX extensions](/images/docs/hwdeps0.png)
