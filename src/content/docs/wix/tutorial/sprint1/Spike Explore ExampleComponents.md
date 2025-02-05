---
title: "Spike: What's in ExampleComponents.wxs?"
sidebar:
  order: 7
---

HeatWave's template for a package includes an installed file because -- it turns out -- installing files is a pretty common job for an installer. HeatWave isn't psychic and can't guess what you want to install, so it just installs a placeholder file. For now, that's good enough. Soon enough we'll install something real.


```xml
<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs">
  <Fragment>
```

ExampleComponents.wxs is another WiX source file containing a fragment.

```xml
<ComponentGroup Id="ExampleComponents" Directory="INSTALLFOLDER">
```

Here's a concrete example of something we've talked about before: a component group. In fact, it's the very same component group that we referenced with a `ComponentGroupRef` element, back in Package.wxs, under the `Feature` element. That means that all the components (well, one in this placeholder case) are grouped together and brought in as one piece under the parent feature.
> Remember that WiX groups don't always have equivalents in MSI. `ComponentGroup`, for example, is a WiX concept to make it easier to build groups of components without worrying immediately which feature they go into. You can even build component groups out of other component groups: Use a `ComponentGroupRef` under `ComponentGroup`.


```xml
<Component>
  <File Source="ExampleComponents.wxs" />
</Component>
```

There is one component in the grand component group HeatWave named ExampleComponents. That component has a single file in it. The name of that file is ExampleComponents.wxs. Yes, that means that the lone file this package installs is a copy of one of the WiX source files used to create the package. Is that just the HeatWave template designer having a bit of fun? Maybe. But remember that this file (and component) (and component group) is just a placeholder, waiting for us to replace it with something much better. Soon!
