---
title: Adding the WiX extension to our project
sidebar:
  order: 2
---

With a bit of help [from our very smart and helpful friends at FireGiant](https://www.firegiant.com/services/), we know that the WiX extension we need is `WixToolset.Util.wixext`. Before we can run the code that tells us the actual type of processor we're running on, we need to get `WixToolset.Util.wixext` into our project.


## WiX extensions are NuGet packages

You might have heard somewhere that "WiX extensions are NuGet packages," but that's not exactly true. WiX extensions are just assemblies that you tell WiX to load when building your package. They contain code that tells WiX what functionality to expose and frequently contain an embedded library that lets them put things like custom action code into your package. However, those assemblies are -- at least for WiX's own extensions -- bundled up as NuGet packages and are available on nuget.org for you to reference in your WiX project like any other NuGet packages from nuget.org that your projects might use.

[You can see all the WiX extensions lovingly handcrafted by the WiX team here on nuget.org.](https://www.nuget.org/packages?q=wixtoolset+wixext)


## Adding a WiX extension to a WiX project

Because WiX's extensions are shipped as NuGet packages on nuget.org, you add them to a WiX project the very same way you'd add them to a C# project:

- Right-click on `WixTutorialPackage`.
- Choose `Manage NuGet Packages`.
- Click `Browse` in the upper left. (Some might wonder why Visual Studio doesn't start there when the project has no NuGet packages installed.) (Others might wonder why the "tabs" look like plain ol' text instead of more like buttons or, you know, tabs. Those people are frequently labeled UI curmudgeons.)
- Enter `wixext` in the search box.
- Find `WixToolset.Util.wixext` in the list.
  - If you can't find `WixToolset.Util.wixext` or get a `No packages found` message, make sure `nuget.org` or `All` is selected in the `Package source` drop-down.
- Choose `WixToolset.Util.wixext` in the list and click `Install` in the detail panel that magically appears on the right side of the NuGet Package Manager window.
- You might get a `Preview Changes` dialog that shows you're installing `WixToolset.Util.wixext` in your project. (There's a `Don't show this again` checkbox so maybe you already prevented this annoying dialog from showing up.) If it appears, choose `Apply`.

Visual Studio churns a bit and when it's done, you can see that the `WixToolset.Util.wixext` is installed by looking in the `Dependencies` node of Solution Explorer:

![Visual Studio Solution Explorer showing `WixToolset.Util.wixext` under the `Dependencies node`](/images/docs/solution_explorer_with_wixext.png)
