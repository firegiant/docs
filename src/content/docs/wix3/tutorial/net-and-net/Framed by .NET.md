---
title: Framed by .NET
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 1
---

If you need to determine the presence of the .NET Framework on the user's computer, you can use the WixNetFxExtension extension module that comes with WiX. This extension sets a large number of properties (the complete list can be found in the WiX help file) for every version of the framework. The most important ones for us will be:

* **NETFRAMEWORKxx**: Set if the specified version of the framework is installed.
* **NETFRAMEWORKxx_SP_LEVEL**: Set to the Service Pack level of the framework.
* **NETFRAMEWORKxxINSTALLROOTDIR**: Set to the installation folder of the framework.

All you have to do to read the value of any of these properties is to reference them using a `PropertyRef` tag:

    <PropertyRef Id="NETFRAMEWORK10"/>
    <Condition Message='This setup requires the .NET Framework 1.0 installed.'>
      <![CDATA[Installed OR NETFRAMEWORK10]]>
    </Condition>

If you need to check for a Service Pack, you don't even have to check for the framework version itself, the SP property will only be set if the base framework is also present. However, you first need to check whether the property is set at all, then go on checking which value it actually has:

    <PropertyRef Id="NETFRAMEWORK20_SP_LEVEL"/>
    <Condition Message='This setup requires the .NET Framework 2.0 with Service Pack 1 installed.'>
      <![CDATA[Installed OR (NETFRAMEWORK20_SP_LEVEL AND NETFRAMEWORK20_SP_LEVEL = "#1")]]>
    </Condition>

With later framework versions, extra properties are also available:

    <PropertyRef Id="NETFRAMEWORK35_CLIENT"/>
    <Condition Message='This setup requires the .NET Framework 3.5 client profile installed.'>
      <![CDATA[Installed OR NETFRAMEWORK35_CLIENT]]>
    </Condition>

When you link the installer, don't forget to link against the <em>WixNetFxExtension</em> module:

    candle.exe SampleDotNET.wxs
    light.exe -ext WixNetFxExtension SampleDotNET.wixobj

You can download the complete <a href="/system/files/samples/SampleDotNET.zip">SampleDotNET.</a>
