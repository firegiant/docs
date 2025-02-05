---
title: Using HarvestFolder to Harvest Directory Trees
sidebar:
  order: 2
---

The `<HarvestProjectOutput/>` element is very useful to harvest output from other projects in Visual Studio. However, sometimes significant amounts of content exists outside of Visual Studio. In that case, it is easier to organize the content in a directory tree that matches the desired install locations and instruct Advanced harvesting to gather the content.

```xml title=Content.wxs
<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs"
      xmlns:fg="http://www.firegiant.com/schemas/v4/wxs/heatwave/buildtools">
  <Fragment>
    <ComponentGroup Id="ContentComponents">
      <Component Directory="ContentFolder">
        <fg:HarvestFolder Source="path\to\content\**" />
      </Component>
    </ComponentGroup>
  </Fragment>
</Wix>
```

The `Source` attribute uses a syntax similar to MSBuild to include files. The `**` syntax includes files in the current directory and all sub-directories. It is also possible to include files that match a pattern. For example, the following includes all *.txt* files in the *content* folder.

```xml title=Content.wxs
<Component Directory="ContentFolder">
  <fg:HarvestFolder Source="path\to\content\*.txt" />
</Component>
```

And the following example includes all *.txt* files below the *content* folder.

```xml title=Content.wxs
<Component Directory="ContentFolder">
  <fg:HarvestFolder Source="path\to\content\**\*.txt" />
</Component>
```

Careful use of the `Source` attribute with the [Exclude element][exclude] can harvest any directory tree. But before using Excludes, check out the [HarvestFile element][hf] because it can make referencing key files very easy.

[exclude]: /heatwave/build-tools/harvesting/exclude-files/
[hf]: /heatwave/build-tools/harvesting/harvestfile/
