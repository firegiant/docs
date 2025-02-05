---
title: Conditional Installation
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 6
---

We've already covered launch conditions. Using them will abort the whole installation if the specified condition is false. There are finer uses of conditions, too, when they don't disable the whole process, only help us determine what to do. To make room for that, we divide the previous single feature into two separate ones---then we can use our conditions to decide which one to install.

    <Feature Id='Complete' Level='1'>
        <Feature Id='MainProgram' Level='1'>
            <ComponentRef Id='MainExecutable' />
        </Feature>

        <Feature Id='Documentation' Level='1'>
            <ComponentRef Id='Manual' />
        </Feature>
    </Feature>

<!-- todo: improve with INSTALLLEVEL discussion and avoid Level=0 -->
Building this sample as it is now wouldn't result in anything interesting, the MainProgram feature would install the EXE and the DLL, plus the associated shortcuts while the Documentation feature would do the rest, the PDF and its associated shortcut. So, in the end, the same files are installed. But if you note the `Level` attribute we haven't discussed so far, a non-zero value means *install* while a zero value means that the parent feature of the condition (the `Feature` tag directly enclosing the condition) will *not* be installed:

    <Feature Id='Documentation' Level='0'>
        <ComponentRef Id='Manual' />
        <Condition Level="1">FILEEXISTS</Condition>
    </Feature>

The PDF and its shortcut will only be installed if the file Lookfor.txt can be found in the folder referenced by our registry entry. To try this out on your computer, download [SampleCondition](/system/files/samples/SampleCondition.zip).
You can use all the conditions we have already seen as well, for instance, to disable the feature for a non-administrator user:

    <Feature Id='Documentation' Level='0'>
        <ComponentRef Id='Manual' />
        <Condition Level="1">Privileged</Condition>
    </Feature>
