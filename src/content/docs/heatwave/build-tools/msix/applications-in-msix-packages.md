---
title: Applications in MSIX Packages
sidebar:
  order: 2
---

MSI packages install resources (files, registry keys, shortcuts, etc) grouped into Components and Features. MSIX packages install applications which get tiles (like shortcuts) and extensions that reference an executable. To map these different points of view, the FireGiant MSIX Extension has a simple heuristic that can be overridden:

* If your MSI contains a single shortcut, that executable and shortcut will be used as the application. This is the automatic, simple, and common case. Note that this heuristic is not used if you explicitly define an application.
* If your MSI contains multiple shortcuts, the FireGiant MSIX Extension cannot guess which executable should be used as the application. In this case, an error will be displayed indicating that you must explicitly define your application.
* If your MSI does not contain any shortcuts, the FireGiant MSIX Extension will not search for an executable to use as the application. Again, an error will be displayed indicating that you must explicitly define your application.


## Explicit Application definition

There are three ways to explicitly define the Application. First, the `msix:Application` attribute can be added to an executable `File` element. This is the simplest way to define the Application:

```xml title=Application.wxs
<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs"
      xmlns:msix="http://www.firegiant.com/schemas/v4/wxs/heatwave/buildtools/msix">
  ...
  <Component Directory="INSTALLFOLDER">
    <File Id="MyFile" Source="path\to\my.exe" msix:Application="MyApp">
      <Shortcut Name="My Application" ... />
```

The second option is to add the `msix:Application` element as a child of the executable `File` element. The explicit `msix:Application` element allows for additional control of the Application if necessary:

```xml title=Application.wxs
<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs"
      xmlns:msix="http://www.firegiant.com/schemas/v4/wxs/heatwave/buildtools/msix">
  ...
  <Component Directory="INSTALLFOLDER">
    <File Id="MyFile" Source="path\to\my.exe">
      <msix:Application Id="MyApp" OverrideDisplayName="My Desktop Bridged Application" />
      <Shortcut Name="My Application" ... />
```

The third option is to move the `msix:Application` element out from under the `File` element. This can be used to group your MSIX related elements together:

```xml title=Package.wxs
<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs"
      xmlns:msix="http://www.firegiant.com/schemas/v4/wxs/heatwave/buildtools/msix">
  <Package ...>

    <msix:Msix Id="Example" Publisher="CN=Example" />
    <msix:Application Id="MyApp" ExecutableFile="MyFile" />
```

## Multiple Applications in an MSIX package

MSIX packages can include multiple Applications, but the Windows Store will accept only packages with a single Application. The FireGiant MSIX Extension will display a warning if multiple Applications are included in the package.
