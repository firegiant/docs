---
title: Building WiX projects
description: HeatWave is FireGiant's Visual Studio extension for WiX v4
sidebar:
  order: 5
---

HeatWave supports all the typical build-related commands you'd expect for WiX projects: Build, Rebuild, Clean. WiX projects build along with any other project inside Visual Studio solutions. (Use [project references](../project-references/) to make sure dependent projects build first.)

![Visual Studio Solution Explorer with context menu showing build-related commands](/images/docs/sexplorer.png)

From the command line and on CI/CD build systems, you can build projects you created with HeatWave with MSBuild and `dotnet build`.
