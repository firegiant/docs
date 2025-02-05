---
title: WiX Toolset v4 and v5 Tutorial
description: WiX Toolset v4 and v5 Tutorial
---

[The WiX Toolset (WiX for short) is a collection of build tools, runtime tools, and libraries for building installers for Windows](/wix/). This tutorial aims to introduce you to WiX with modern tools like Visual Studio, [FireGiant HeatWave](/heatwave/), and [GitHub][github]. We're assuming you need to build installers and want to use WiX to do so.

You can follow along this whole tutorial one step at a time. You can also hop in and out on various topics that interest you.
<!-- Every step of the code is available in the tutorial's [Git repo on GitHub][gh]. -->


## System requirements

WiX is available as an MSBuild SDK and .NET tool when using a .NET 6.0 or later SDK. It is also available as an MSBuild SDK when using MSBuild in Visual Studio 2019 and later.

In this tutorial, we're using Visual Studio 2022 but you can use Visual Studio 2019 -- or even no Visual Studio at all. But sometimes the words and procedures are assuming the use of current versions of Visual Studio 2022. You can also just follow along and not actually play with the code...but where's the fun in that?


## The story so far

Here's the story of our tutorial: You're a developer working on a team that's creating a desktop client application that needs an installer. Your team follows a good, old-fashioned Scrum development model. Each [sprint](https://www.scrum.org/resources/what-is-a-sprint-in-scrum), we'll update the client application and make matching updates to the installer. It might not surprise you to know that the client application we're building is pretty simple. As in, as simple as we can make it. After all, the focus is on the installer, not the client app.

The client app is built in C# and WinForms. To build it, you'll need the `.NET desktop development` workload installed in Visual Studio.

<!--
## Something not right?

It is possible that you might discover a typo in this tutorial. While that would bring us great shame, we nonetheless request your help by reporting any such typo you might discover. You can do so by [opening an issue here in our GitHub repo][newissue] so we can fix them and pretend they never existed in the first place.

If you discover some other problem between what the glorious text says and what your screen says, you can report that too.

If you think of something you'd like the tutorial to cover, please open a request. We don't promise to fulfill every request, but we do promise to look at every one and give it some thought.
 -->

[github]: https://github.com
[gh]: todo://github/firegiant/wix4tutorial
[newissue]: todo://github/firegiant/wix4tutorial/issues/new/choose
