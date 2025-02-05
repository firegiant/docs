---
title: "Spike: What's in Folders.wxs?"
sidebar:
  order: 6
---

Folders.wxs is another WiX source file that, as the name suggests, contains the WiX source code for the folders used in the installer. It doesn't have to include _all_ the folders; typically, directories used multiple times can be centralized to avoid duplication.

> This is a small file, so it might seem like overkill to separate the source code into its own file. And it _is_ overkill, at least for what's in the file right now. But as installers grow in complexity, separating by "concept" is one good way of splitting the code.

```xml
<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs">
```

Folders.wxs has the same root element and namespace as for Package.wxs. The same is true of every WiX source file. (There are a couple of other root elements and namespaces that we'll talk about later.)

```xml
<Fragment>
```

Back in Package.wxs, the main element (under `Wix`) is `Package`. That tells WiX you're building a package. Here the main element is `Fragment`. That tells WiX you're building a...something. What is a fragment? In WiX, fragments are just a way to organize authoring. Here in Folders.wxs, there is one fragment that contains authoring that's referenced from Package.wxs.

> When you reference something in a fragment, WiX includes _everything_ in that fragment. The rationale is that you can have one reference, like `ComponentGroupRef`, and get all the things that make up that component group. That means that, in general, your fragments should include only things that are related to one another.

You can have multiple `Fragment`s in a single .wxs file. You can also have multiple `Fragment`s in the same .wxs file as your `Package` element.

> Technically, `Package` and `Fragment` (and a couple others, to be discussed later), introduce what WiX calls _sections_. Some sections, like `Package`, are called entry sections and are special because they identify what kind of thing is being built. There can be only one entry section built at one time. Fragment sections aren't nearly as special; there can be any number of fragments built at one time.


```xml
<StandardDirectory Id="ProgramFiles6432Folder">
```

The `StandardDirectory` element lets you use one of the so-called standard directories as the parent directory of your package's directories. [There are a large number of possible parent directories](https://wixtoolset.org/docs/schema/wxs/standarddirectorytype/). Most of them are the [MSI system folder property ids](https://learn.microsoft.com/en-us/windows/win32/msi/property-reference#system-folder-properties). The rest are the WiX standard directories:

- CommonFiles6432Folder
- ProgramFiles6432Folder
- System6432Folder

These ids are special in that they don't exist in MSI. Instead, WiX picks the appropriate directory based on the bitness of the package.

> Some people have suggested "bitness" isn't a real word and to those people, we roll our eyes in an aggressive manner. We could use "architecture" instead, but in this case, the only thing that matters is whether the directory is the Program Files directory for 32-bit code or the Program Files directory for 64-bit code. So, "bitness" is technically correct ([the best kind of correct](https://www.youtube.com/watch?v=0ZEuWJ4muYc)).

So, `ProgramFiles6432Folder` turns into one of the standard MSI directories based on package bitness. With a 32-bit package, `ProgramFiles6432Folder` resolves as `ProgramFilesFolder`, which is typically `C:\Program Files (x86)`. With a 64-bit package, `ProgramFiles6432Folder` resolves as `ProgramFiles64Folder`, which is typically `C:\Program Files`.

HeatWave provided us with a package that can be _x86_, _x64_, or _Arm64_ but the default is _x86_ so until we pick a different architecture, we'll be working with a 32-bit MSI package for x86.

```xml
<Directory Id="INSTALLFOLDER"
  Name="!(bind.Property.Manufacturer) !(bind.Property.ProductName)" />
```

The `Directory` element creates a new directory as a child directory of the directory identified in its parent element.
> To be pedantic, just listing a directory doesn't actually _create_ a directory on disk. Instead, MSI creates directories as needed to install files. You can also explicitly create an empty directory.

The `Id` attribute lets you specify an id that you'll use when referencing this directory. For example, if you have a bunch of files you want to install into this directory, you might use a `ComponentGroup` element, which helpfully takes a `Directory` attribute that takes the id of a directory and uses that directory as the home for all the files in the component group.

The `Name` attribute, as most people would guess, is the name of the directory on disk. Usually, that's a simple string like `My Awesome Product`. However, the HeatWave template gave us something a fair bit removed from a simple string.

You might remember from our exploration of Package.wxs, HeatWave gave us a `Package` element with several attributes. Among them were:

```xml
<Package
  Name="WixTutorialPackage"
  Manufacturer="TODO Manufacturer"
```

WiX lets you refer to those attributes (albeit indirectly). We might get back to the gory details of how these work but for now, let's just take it as read that the syntax `!(bind.Property.Manufacturer)` takes the value of the `Package/Manufacturer` attribute and `!(bind.Property.ProductName)` takes the value of the `Package/Name` attribute.

So

```xml
<Directory Id="INSTALLFOLDER"
  Name="!(bind.Property.Manufacturer) !(bind.Property.ProductName)" />
```

is equivalent to

```xml
<Directory Id="INSTALLFOLDER"
  Name="TODO Manufacturer WixTutorialPackage" />
```

> Was that worth the funky syntax? Probably. Avoiding duplication is usually a good thing. Any change you make to the `Manufacturer` and `Name` attributes is automatically reflected here in the directory name.


```xml
    </StandardDirectory>
  </Fragment>
</Wix>
```

Nothing new here: XML files must have all their elements closed.
