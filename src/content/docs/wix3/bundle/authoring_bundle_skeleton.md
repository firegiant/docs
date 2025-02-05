---
pagefind: false
title: Create the Skeleton Bundle Authoring
---

The root element of a bundle is [Bundle](../xsd/wix/bundle/). The [Bundle](../xsd/wix/bundle/) element is a child directly under the [Wix](../xsd/wix/wix/wix/) element. Here&apos;s an example of an empty bundle:

```xml
<?xml version="1.0"?>
<Wix xmlns="http://schemas.microsoft.com/wix/2006/wi">
  <Bundle>
    <!-- Contents of the bundle goes here -->
  </Bundle>
</Wix>
```

In this example, you will be adding the following elements to the [Bundle](../xsd/wix/bundle/) element:

* [BootstrapperApplicationRef](../xsd/wix/bootstrapperapplicationref/)
* [Chain](../xsd/wix/chain/)
* [Variable](../xsd/wix/variable/)

As a start, add the two most common elements inside a [Bundle](../xsd/wix/bundle/) :

```xml
<?xml version="1.0"?>
<Wix xmlns="http://schemas.microsoft.com/wix/2006/wi">
  <Bundle>
    <BootstrapperApplicationRef />
    <Chain>
    </Chain>
  </Bundle>
</Wix>
```

The [BootstrapperApplicationRef](../xsd/wix/bootstrapperapplicationref/) element will eventually point to the standard BootstrapperApplication provided by the WiX toolset and the [Chain](../xsd/wix/chain/) element will eventually contain the ordered list of packages that make up the bundle.

Now that you have the skeleton authoring of a Bundle, you can move on to adding information for the [BootstrapperApplicationRef](../xsd/wix/bootstrapperapplicationref/) element. See [Author the BootstrapperApplication for a Bundle](authoring_bundle_application/).
