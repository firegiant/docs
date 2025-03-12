---
title: FireGiant Advanced Harvesting
sidebar:
  order: 0
---

Advanced Harvesting gathers resources from MSBuild project references, folders and self-registration to generate .wxs code that installs those resources. Advanced Harvesting takes great care to organize the harvested resources according to the Windows Installer's best practices.

Harvesting is controlled by extension elements, `<HarvestProjectOutput/>` and `<HarvestFolder/>`. To get started with Advanced Harvesting add a package reference to the `FireGiant.HeatWave.BuildTools.wixext` extension--via [Manage NuGet Packages][add] in your .wixproj.

The parent element will act as the template for the harvesting. Let's look at a very simple example. Consider a *SetupProject1.wixproj* with a project reference to *ConsoleApplication1.csproj* which in turn has a project reference to *ClassLibrary1.csproj*. In *SetupProject1.wixproj*, list the outputs we want to harvest from the project by adding `HarvestOutputGroup` metadata. In this example, we'll harvest the build outputs and dependencies of *ConsoleApplication1.csproj*:

```xml title=SetupProject1.wixproj
<Project Sdk="WixToolset.Sdk/5.0.2">
  <ItemGroup>
    <ProjectReference Include="..\ConsoleApplication1\ConsoleApplication1.csproj" HarvestOutputGroup="BuiltProjectOutputGroup;BuiltProjectOutputGroupDependencies" />
  </ItemGroup>

  <ItemGroup>
    <PackageReference Include="FireGiant.HeatWave.BuildTools.wixext" Version="5.0.2" />
  </ItemGroup>
</Project>
```

Finally, let's add *ConsoleApp.wxs* that indicates where to install *ConsoleApplication1.exe* and its dependencies. Notice the use of the `http://www.firegiant.com/schemas/v4/wxs/heatwave/buildtools` namespace on the root `<Wix/>` element and the `HarvestProjectOutput` extension element in the `<Component/>`. The `Id` of the HarvestProjectOutput element matches the name of the project reference (without the file extension) from our *SetupProject1.wixproj*:

```xml title=ConsoleApp.wxs
<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs"
      xmlns:fg="http://www.firegiant.com/schemas/v4/wxs/heatwave/buildtools">
  <Fragment>
    <ComponentGroup Id="ConsoleAppComponents">
      <Component Directory="INSTALLFOLDER">
        <fg:HarvestProjectOutput Id="ConsoleApplication1" />
      </Component>
    </ComponentGroup>
  </Fragment>
</Wix>
```

When SetupProject1.wixproj is building, Advanced Harvesting harvests the outputs, find the <HarvestProjectOutput/> element, and expand the results to .wxs code functionally equivalent to:

```xml title=ConsoleApp.wxs
<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs"
      xmlns:fg="http://www.firegiant.com/schemas/v4/wxs/heatwave/buildtools">
  <Fragment>
    <ComponentGroup Id="ConsoleAppComponents">
      <Component Directory="INSTALLFOLDER">
        <File Source="path\to\ConsoleApplication1.exe" />
        <File Source="path\to\ConsoleApplication1.exe.config" />
      </Component>

      <Component Directory="INSTALLFOLDER">
        <File Source="path\to\ClassLibrary1.dll" />
      </Component>
    </ComponentGroup>
  </Fragment>
</Wix>
```

Notice that Advanced Harvesting included the *.exe.config* in the Component with the *.exe* it configures. This organization of resources makes the *.exe* the a versioned KeyPath for the Component. The versioned KeyPath provides an implicit version for the unversioned *.exe.config*  so the two files will be installed, upgraded and repaired together. See the [Strategy attribute documentation][strategies] for alternative Component organizations supported by Advanced Harvesting and when to use them.

List of commonly available output groups:

* BuiltProjectOutputGroup
* DebugSymbolsProjectOutputGroup
* DocumentationProjectOutputGroup
* SatelliteDllsProjectOutputGroup
* SourceFilesProjectOutputGroup
* ContentFilesProjectOutputGroup
* SGenFilesOutputGroup
* PublishItemsOutputGroup
* BuiltProjectOutputGroupDependencies
* DebugSymbolsProjectOutputGroupDependencies
* SatelliteDllsProjectOutputGroupDependencies
* DocumentationProjectOutputGroupDependencies
* SGenFilesOutputGroupDependencies

[add]: /heatwave/adding-wix-extensions/
[strategies]: /heatwave/build-tools/harvesting/strategies/
