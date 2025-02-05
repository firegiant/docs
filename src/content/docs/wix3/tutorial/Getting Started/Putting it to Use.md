---
title: Putting it to Use

description: WiX v3 tutorial (deprecated)
sidebar:
  order: 3
---

If you copy all these fragments together (or, to spare some elbow grease, download the [SampleFirst archive](/system/files/samples/SampleFirst.zip)), you can build the installer package with the commands:

    candle.exe SampleFirst.wxs
    light.exe SampleFirst.wixobj

You should get no error message from either tool, and you should find a `SampleFirst.msi` file in your folder upon completion. If not, check for typos everywhere. Please, also note that the required syntax of the .wxs files might undergo some minor changes as the WiX toolset develops.

This tutorial always assumes the most current version of the WiX toolset and the samples should all compile without any error message straight out of the box (provided you correct the invalid GUIDs as described earlier). If you do receive compiler errors or warnings, please, compare your toolset version to the current one available for download.

To test your first installer, simply click on it. It will not greet you or offer any options, just show a progress dialog for a few seconds. But as soon as it finishes without errors, you should be able to find your three files in `Program Files\Acme\Foobar 1.0` all right. Note that the actual files deployed are 1-byte placeholder files, so the installed "application" will, naturally, refuse to run.

To remove this huge application again, go to the Programs and Features Control Panel tool, find Foobar 1.0 in the list, click `Remove`. (`Change` will accomplish nothing at this stage.) Both the three files and the `Acme\Foobar 1.0` folders will be removed.

If you experience any problems---or just for fun---start the installer with logging turned on:

    msiexec /i SampleFirst.msi /l* SampleFirst.log

or even

    msiexec /i SampleFirst.msi /l*v SampleFirst.log

The log will be rather verbose (especially in the second case) but it will pinpoint the error that might cause the installation to fail.

During testing, you might find it more convenient to remove the package without having to open the Programs and Features Control Panel tool. Just enter the command instead:

    msiexec /x SampleFirst.msi
