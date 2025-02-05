---
title: Fix our company name
sidebar:
  order: 5
---

As we discussed during [Sprint 1](https://www.firegiant.com/docs/wix/tutorial/sprint1/spike-explore-package/), one of the required attributes on the `Package` element is `Manufacturer`, to give the package an owner. HeatWave gives us a default to avoid giving us a project that doesn't immediately build. And it gives us a manufacturer name that's like to be noticed and fixed: `TODO Manufacturer`. So let's fix that name.

Open Package.wxs and change the value of the `Manufacturer` attribute from `TODO Manufacturer` to `Edgerock Concepts`.

```xml
<Package
  Name="WixTutorialPackage"
  Manufacturer="Edgerock Concepts"
  Version="1.0.0.0"
  UpgradeCode="64deef2a-cf99-4a0c-be41-5faa802a9502">
```

Easy.
