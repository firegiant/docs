---
title: How to Manage?
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 5
---

A common question is whether custom actions can be written in managed code, C#, VB.NET or something similar. After all, these runtime environments offer a much richer set of features, besides, there might be some programmers working with these languages who are less familiar with other programming languages.

Earlier, in the WiX version 2 era, writing custom actions in managed code was only possible with hacks and was considered very bad and dangerous practice. Version 3 brought changes with the introduction of its Deployment Tools Foundation (DTF), a set of .NET class libraries and related resources. If you can accept the obvious dependency limitations (you have to make sure .NET is present on the installation machine, possibly using a bootstrap installer first, and you can have problems during uninstallation as well, if the user removes the .NET Framework before uninstalling your application), here is our previous sample custom action ported to C#:

```csharp
namespace WiXTutorial.Samples
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using Microsoft.Deployment.WindowsInstaller;

    public class SampleCheckPID
    {
        [CustomAction]
        public static ActionResult CheckPID(Session session)
        {
            string Pid = session["PIDKEY"];
            session["PIDACCEPTED"] = Pid.StartsWith("1") ? "1" : "0";
            return ActionResult.Success;
        }
    }
}
```

There is one tiny bit we have to modify in our source code of <a href="/system/files/samples/SampleAskKeyNET.zip">SampleAskKeyNET.</a> The name of the DLL will be different because the straight managed DLL has to be wrapped into a special package bridging the gap between Windows Installer and the managed world:

```xml
<Binary Id="CheckPID" SourceFile="CheckPIDPackage.dll" />
```

Also prepare a small `CustomAction.config` file. It will describe the runtime your managed custom action is dependent upon.

```xml
<?xml version="1.0" encoding="utf-8" ?>
<configuration>
  <startup>
    <supportedRuntime version="v2.0.50727"/>
  </startup>
</configuration>
```

There is a price to pay for the relative simplicity of working with a .NET language: the build process is more complicated. If you use an IDE, it might be simpler, you can find a sample project file under the DTF branch of the WiX source package. Here we only can show you the command line way. Look for `Microsoft.Deployment.WindowsInstaller.dll`, `MakeSfxCA.exe`, and `sfxca.dll` in your installed WiX toolset, you will find them there. Where we indicated a *path*, you have to supply an absolute full path or else MakeSfxCA will give an error message and the resulting DLL will not be usable.

```bash
csc.exe /target:library /reference:path\Microsoft.Deployment.WindowsInstaller.dll /out:CheckPID.dll CheckPID.cs
MakeSfxCA.exe path\CheckPIDPackage.dll path\sfxca.dll path\CheckPID.dll path\CustomAction.config path\Microsoft.Deployment.WindowsInstaller.dll
candle.exe SampleAskKeyNET.wxs UserRegistrationDlg.wxs
light.exe -ext WixUIExtension -out SampleAskKeyNET.msi SampleAskKeyNET.wixobj UserRegistrationDlg.wixobj
```

DTF has its own documentation in the toolset, thus we won't discuss it further in our tutorial. Just use the documentation and the sample code there.
