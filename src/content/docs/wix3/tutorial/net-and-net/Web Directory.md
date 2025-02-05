---
title: Web Directory
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 4
---

<!-- fix: v3 -->
The WiX toolset has additional libraries that allow the installer to perform additional tasks like creating a web directory in IIS. To use these extensions, all you have to do is to link against the appropriate WiX library. The linker will include the necessary helper DLLs into the installation package automatically.

First, we have to create the web site with the files belonging to it:

    <Directory Id='TARGETDIR' Name='SourceDir'>
        <Directory Id='ProgramFilesFolder' Name='PFiles'>
            <Directory Id='InstallDir' Name='Acme'>
                <Component Id='default.phpComponent' Guid='YOURGUID-5314-4689-83CA-9DB5C04D5742'>
                    <File Id='default.htmFile' Name='default.htm' Source='default.htm' DiskId='1' KeyPath='yes' />
                </Component>
            </Directory>
        </Directory>
    </Directory>

The next step is to create the virtual directory:

    <Component Id='TestWebVirtualDirComponent' Guid='YOURGUID-6304-410E-A808-E3585379EADB'>
        <WebVirtualDir Id='TestWebVirtualDir' Alias='Test' Directory='InstallDir' WebSite='DefaultWebSite'>
            <WebApplication Id='TestWebApplication' Name='Test' />
        </WebVirtualDir>
    </Component>

Finally, create an entry to reference the web site:

    <WebSite Id='DefaultWebSite' Description='Default Web Site'>
        <WebAddress Id='AllUnassigned' Port='80' />
    </WebSite>

When you link the installation package, you have to link it against the appropriate WiX library. As you pass more than one WiX object file to the linker, you also have to specify the name of the output file:

    light.exe -out SampleWebDir.msi SampleWebDir.wixobj path\sca.wixlib

You can download the complete [SampleWebDir](/system/files/samples/SampleWebDir.zip).