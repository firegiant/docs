---
title: Advanced Harvest Strategies Explained
sidebar:
  order: 1
---

Advanced Harvesting has three different strategies for organizing resources into Components. The `default` strategy is generally recommended and is the default if no `Strategy` attribute is present on a `<HarvestProjectOutput/>` or `<HarvestFolder/>` element. Here is an example overriding the default:

```xml title=Content.wxs
<Component Directory="ContentFolder">
  <fg:HarvestFolder Source="path\to\content\**"
                    Strategy="singleFileComponents" />
</Component>
```

## Default

The `default` strategy applies simple heuristics to organize files that align with FireGiant best practices. This is the recommended strategy. The `default` strategy is used if no `Strategy` attribute is present.

## Single File Components

The `singleFileComponents` strategy forces each harvested file into a separate Component. The `default` strategy is preferred.

## Content File Components With Generated KeyPath

Every Component adds a bit of overhead to the Windows Installer's operations on an MSI package. When harvesting thousands of unversioned files that overhead can overwhelm the Windows Installer. In those cases, consider using the `contentFileComponentsWithGeneratedKeyPath` strategy to group unversioned resources by directory. Advanced Harvesting will generate a resource .DLL with the MSI package's version to act as the KeyPath.

*Note: The `contentFileComponentsWithGeneratedKeyPath` strategy should only be used in MSI packages that always major upgrade early (`<MajorUpgrade Schedule='afterInstallValidate' />` which is the default) to avoid potential Component Rule violations.*
