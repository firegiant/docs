---
title: Silence, Please!
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 2
---

The standard custom action to start an executable might not be the best solution if the program to be launched happens to be a console application rather than something with the usual graphical user interface. In these cases, we might want to avoid the command line console windows to flash up for a moment.

WixUtilExtension has a special custom action called `CAQuietExec` just for these occasions. It expects to find the command line to be run in a predetermined property called `QtExecCmdLine`. The execution can be either immediate or deferred.

    <Property Id="QtExecCmdLine" Value="something.exe"/>
    <CustomAction Id="SilentLaunch" BinaryKey="WixCA" DllEntry="CAQuietExec" Execute="immediate" Return="check" />

    <InstallExecuteSequence>
      <Custom Action="SilentLaunch" After="..." />
    </InstallExecuteSequence>

To run 64-bit executables, use the `CAQuietExec64` custom action and `QtExec64CmdLine` property instead.

To build, we have to link against the standard library:

    candle.exe Sample.wxs
    light.exe -ext WixUtilExtension Sample.wixobj
