---
title: Simplifying Harvesting with HarvestFile
sidebar:
  order: 5
---

Often a few harvested files need special handling. For example, a service executable needs to be the file KeyPath of the Component with the `<ServiceInstall/>` element. It is possible to do this by adding a `<File/>` element for the service executable *and* adding an [Exclude element][exclude] to the harvest element used to bring in all of the files. But the `<HarvestFile/>` element provides an easier option.

The `<HarvestFile/>` element behaves much like the `<File/>` element with two extra abilities:

1. It supports the [SelfReg attribute][sr] to harvest registration out of the file. See the [SelfReg][sr] documentation for more information about harvesting registration.

2. It automatically excludes the file from all other harvest directives.

The second ability deserves an example. Consider the service executable example again. Let's say the build process output all files to the `build` folder. We want to include all of the files in the `build` folder in our installation package *and* we need to add the `<ServiceInstall/>` element to register the service executable. We can do that like this:


```xml title=MyService.wxs
<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs"
      xmlns:fg="http://www.firegiant.com/schemas/v4/wxs/heatwave/buildtools">
  <Fragment>
    <ComponentGroup Id="AllComponents" Directory="INSTALLFOLDER">
      <Component>
        <fg:HarvestFile Source="build\MyService.exe" />
        <ServiceInstall Name="MyService" Start="auto" Type="ownProcess" />
      </Component>

      <Component>
        <fg:HarvestFolder Source="build" />
      </Component>
    </ComponentGroup>
  </Fragment>
</Wix>
```

Notice that the `<HarvestFolder/>` element does not need an `<Exclude/>` element to prevent the `MyService.exe` from being added twice. The `<HarvestFile/>` element took care of including the file in the `<Component/>` element with the `<ServiceInstall/>` element and excluding from the `<HarvestFolder/>` element.


[exclude]: /heatwave/build-tools/harvesting/exclude-files/
[sr]: /heatwave/build-tools/harvesting/selfreg/
