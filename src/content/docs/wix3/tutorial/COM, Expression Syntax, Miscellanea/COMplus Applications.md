---
title: COM+ Applications
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 11
---

The WiX toolset has a custom action library that allows the installer to create COM+ packages, add components to them and create and set roles.

When you build the installation package, you have to compile and link it against the appropriate WiX library. The candle and light command lines to do this are:

    candle -ext WixComPlusExtension Sample.wxs
    light -ext WixComPlusExtension Sample.wixobj

You also need to reference the COM+ schema in your WiX source as follows:

    <?xml version="1.0" encoding="UTF-8"?>
    <Wix xmlns="http://schemas.microsoft.com/wix/2006/wi" xmlns:complus="http://schemas.microsoft.com/wix/ComPlusExtension">

To create a package (My COM+ Application) and add a standard COM DLL (MyCOM.dll) to the package:

    <Component Id="MyCOM_dll" DiskId="1" Guid="YOURGUID-242F-4B82-BDC7-588E59E9F393">
      <File Id="MyCOM_dll" Name="MyCOM.dll" Source="MyCOM.dll" KeyPath="yes" Vital="yes" />
      <complus:ComPlusApplication Id="MyCOM" Name="My COM+ Application">
        <complus:ComPlusAssembly Id="MyComPlusAssembly" Type="native" DllPath="[#MyCOM_dll]">
          <complus:ComPlusComponent Id="MyCOM" CLSID="YOURCLSID-CA74-4DC7-BAEF-25AF03BC5F67" />
        </complus:ComPlusAssembly>
      </complus:ComPlusApplication>
    </Component>

To create a package (My COM+ Application) and add a .Net assembly (MydotNet.dll) that is not in the GAC to the package:

    <Component Id="MydotNet_dll" DiskId="1" Guid="YOURGUID-242F-4B82-BDC7-588E59E9F393">
      <File Id="MydotNet_dll" Name="MydotNet.dll" Source="MydotNet.dll" KeyPath="yes" Assembly="no" />
      <complus:ComPlusApplication  Id="MydotNet" Name="My COM+ Application">
        <complus:ComPlusAssembly Id="MyComPlusAssembly" DllPath="[#MydotNet_dll]" TlbPath="[#MydotNet_tlb]" Type=".net" RegisterInCommit="yes">
          <complus:ComPlusComponent Id="CheckInterface" CLSID="YOURCLSID-241E-4472-8C71-61A22BAF9914"/>
        </complus:ComPlusAssembly>
      </complus:ComPlusApplication>
    </Component>

    <Component Id="MydotNet_tlb" DiskId="1" Guid="YOURGUID-242F-4B82-BDC7-588E59E9F394">
      <File Id="MydotNet_tlb" Name="MydotNet.tlb" Source="MydotNet.tlb" KeyPath="yes" />
    </Component>

To create a package (My COM+ Application) and add a .Net assembly (MydotNet.dll) that is in the GAC to the package:

    <Component Id="MydotNet_dll" DiskId="1" Guid="YOURGUID-242F-4B82-BDC7-588E59E9F393">
      <File Id="MydotNet_dll" Name="MydotNet.dll" Source="MydotNet.dll" KeyPath="yes" Assembly=".net" />
      <complus:ComPlusApplication Id="MydotNet" Name="My COM+ Application">
        <complus:ComPlusAssembly Id="MyComPlusAssembly" TlbPath="[#MydotNet_tlb]" Type=".net" DllPathFromGAC="yes" RegisterInCommit="yes">
          <complus:ComPlusComponent Id="CheckInterface" CLSID="YOURCLSID-241E-4472-8C71-61A22BAF9914"/>
        </complus:ComPlusAssembly>
      </complus:ComPlusApplication>
    </Component>

    <Component Id="MydotNet_tlb" DiskId="1" Guid="YOURGUID-242F-4B82-BDC7-588E59E9F394">
      <File Id="MydotNet_tlb" Name="MydotNet.tlb" Source="MydotNet.tlb" KeyPath="yes" />
    </Component>
