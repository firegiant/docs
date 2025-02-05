---
title: Self-registration Advanced Harvesting
sidebar:
  order: 6
---

Allowing the Windows Installer to manage registry keys is much preferable to executing registration code, such as regsvr32.exe or regasm.exe, during installation. To that end, Advanced Harvesting can extract the registration out of harvested files. This includes:

* Native .DLL and .OCX files that export `DllRegisterServer`
* Native .EXE that support the `-RegServer` switch
* Managed assemblies that use regasm.exe
* TypeLibs
* Fonts
* 32-bit, 64-bit and ARM64

To enable self-registration harvesting add the `SelfReg="true"` attribute to the harvest directive. For example,

```xml title=SelfReg.wxs
<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs"
      xmlns:fg="http://www.firegiant.com/schemas/v4/wxs/heatwave/buildtools">
  <Fragment>
    <ComponentGroup Id="ConsoleAppComponents">
      <Component Directory="INSTALLFOLDER">
        <fg:HarvestProjectOutput Name="ConsoleApplication1"
            OutputGroups="BuiltProjectOutputGroup"
            SelfReg="yes" />
      </Component>

      <Component Directory="INSTALLFOLDER">
        <fg:HarvestFile Source="!(bindpath.Foo)\path\to\foo.dll"
            SelfReg="yes" />
      </Component>
    </ComponentGroup>
  </Fragment>
</Wix>
```

The harvested registry keys are included in the Component with the self-registered file.
