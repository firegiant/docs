---
title: Creating Directories
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 5
---

In some cases we have to create new directories without actually installing any file into them. Here is how:

    <Directory Id="TARGETDIR" Name="SourceDir">
      <Directory Id="ProgramFilesFolder" Name="PFiles">
        <Directory Id="test" Name="test">
          <Component Id="test" Guid="YOURGUID-4884-4A01-AA04-84B92D222428"
            SharedDllRefCount="no" KeyPath="no" NeverOverwrite="no" Permanent="no" Transitive="no"
            Win64="no" Location="either">
            <CreateFolder/>
          </Component>
        </Directory>
      </Directory>
    </Directory>

    <Feature Id="test" Title="testfolder" Level="1">
      <ComponentRef Id="test"/>
    </Feature>
