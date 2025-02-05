---
title: Adding the WiX extension namespace to our code
sidebar:
  order: 3
---

As we've mentioned, the WiX code that you get from HeatWave and that you write yourself is all in XML. And, among other aspects of XML, is the concept of [_namespaces_](https://en.wikipedia.org/wiki/XML_namespace). Here's a repeat of something we noted way back during Sprint 1:

> Note that XML namespaces are [uniform resource identifiers (URIs)](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) look like [uniform resource locators (URLs)](https://en.wikipedia.org/wiki/URL) but are not, in actual fact, URLs. WiX uses several namespaces, all of which start with `http://wixtoolset.org/schemas/`. However, the namespace names aren't valid URLs. You might expect the WiX schema documentation to live at the URLs matching the namespace URIs, but it lives at https://wixtoolset.org/docs/schema/ instead.

The namespace that WiX uses for the "core" language is `http://wixtoolset.org/schemas/v4/wxs`. WiX requires extensions to have their own, unique namespace when they add XML language elements. The namespace URI for `WixToolset.Util.wixext` is `http://wixtoolset.org/schemas/v4/wxs/util`.

So, to use an element from `WixToolset.Util.wixext`, we need to add `http://wixtoolset.org/schemas/v4/wxs/util` to the namespaces that are supported in the .wxs file. The easiest way to do that is to _declare_ the namespace in the root `Wix` element:

```xml
<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs"
     xmlns:util="http://wixtoolset.org/schemas/v4/wxs/util">
```

The namespace declaration breaks down into three parts:

- `xmlns`: "I am an XML _n_ ame _s_ pace."
- `util`: This is the prefix I will use for elements in this namespace.
- `http://wixtoolset.org/schemas/v4/wxs/util`: This is the namespace URI that is too long and annoying to type every time, so I will use the prefix as an abbreviation instead.

We're adding this functionality to the package itself, so modify the `Wix` element in Package.wxs.
