---
title: Exclude Files from Advanced Harvesting
sidebar:
  order: 4
---

Often it is easier to harvest all the files in a directory or project and exclude the few that are not desired. This is easy with the `<Exclude/>` element. The Files attribute uses a syntax like MSBuild to include all directories, `**`, and wildcards.

For example, to include a directory tree of files without any *.pdb* files use the following:

```xml title=Files.wxs
<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs"
      xmlns:fg="http://www.firegiant.com/schemas/v4/wxs/heatwave/buildtools">
  <Fragment>/wix/schema/wxs/files/
    <ComponentGroup Id="HarvestedComponents">
      <Component Directory="InstallFolder">
        <fg:HarvestFolder Source="path\to\harvest\**">
          <fg:Exclude Files="**\*.pdb" />
        </fg:HarvestFolder>
      </Component>
    </ComponentGroup>
  </Fragment>
</Wix>
```

Use multiple `<Exclude/>` elements to prevent different sets of files from being included. For example,

```xml title=Example.wxs
<Component Directory="SourceFolder">
  <fg:HarvestProjectOutput Name="ExampleProject"
      OutputGroups="SourceFilesProjectOutputGroup">
    <fg:Exclude Files="README.txt" />
    <fg:Exclude Files="**\*.ignore" />
  </fg:HarvestProjectOutput>
</Component>
```

Sometimes it is necessary to specialize a single file from a harvested folder. Rather than use the `<Exclude/>` element to prevent the file from being harvested and then add an explicit `<File/>` element to include the file in the installation package, consider using the [HarvestFile element][hf] instead.

[hf]: /heatwave/build-tools/harvesting/harvestfile/
