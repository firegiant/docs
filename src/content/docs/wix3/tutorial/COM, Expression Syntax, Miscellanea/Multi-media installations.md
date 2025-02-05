---
title: Multi-media installations
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 6
---

We have already mentioned multi-media installations (where the files don't fit on a single CD, for instance) in the first lesson. You will need several `Media` tags in your source file to describe the separate physical media. Unlike with the earlier installations, you can't embed the file archives into the .msi file, of course. Also, you have to specify both a readable (and localizable, if necessary) prompt for the benefit of the user and a volume label (that has to match the actual volume label on the physical media). The installer will use this second to decide whether the user has inserted the expected media:

    <Media Id='1' Cabinet='Sample1.cab' EmbedCab='no'
      DiskPrompt="CD-ROM #1" VolumeLabel="FOOBAR_DISK1" />

    <Media Id='2' Cabinet='Sample2.cab' EmbedCab='no'
      DiskPrompt="CD-ROM #2" VolumeLabel="FOOBAR_DISK2" />

To craft the actual message asking the user to insert the correct media, Windows Installer requires a `DiskPrompt` property, too. You need to use a formatted string, `[1]` will be replaced with the contents of the `DiskPrompt` attribute of the corresponding `Media` tag:

    <Property Id='DiskPrompt' Value="Acme's Foobar 1.0 Installation [1]" />
