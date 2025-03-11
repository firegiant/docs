---
title: Converting WiX v3 projects
description: HeatWave is FireGiant's Visual Studio extension for WiX v4
sidebar:
  order: 2
---

With HeatWave, you can convert WiX v3 .wixproj projects to modern WiX using the `Upgrade to latest WiX version...` command on the Project menu or context menu in Solution Explorer.

![HeatWave converter screenshot](/images/docs/converter0.png)

When you confirm, HeatWave converts the WiX v3 .wixproj to the latest version of WiX as an SDK-style MSBuild project. It also converts the WiX source files you selected. If HeatWave encountered any errors during the automated conversion, it shows them in a .log file so you can rectify the problem using human-brain-style conversion. [The WiX team is collecting real-world reports of how to handle manual conversion here.](/wix/fourthree/)

