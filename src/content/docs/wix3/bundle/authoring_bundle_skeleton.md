---
pagefind: false
title: Create the Skeleton Bundle Authoring
---

The root element of a bundle is [Bundle](/wix3/xsd/wix/bundle/). The [Bundle](/wix3/xsd/wix/bundle/) element is a child directly under the [Wix](/wix3/xsd/wix/wix/) element. Here&apos;s an example of an empty bundle:

```xml
<?xml version="1.0"?>
<Wix xmlns="http://schemas.microsoft.com/wix/2006/wi">
  <Bundle>
    <!-- Contents of the bundle goes here -->
  </Bundle>
</Wix>
```

In this example, you will be adding the following elements to the [Bundle](/wix3/xsd/wix/bundle/) element:

* [BootstrapperApplicationRef](/wix3/xsd/wix/bootstrapperapplicationref/)
* [Chain](/wix3/xsd/wix/chain/)
* [Variable](/wix3/xsd/wix/variable/)

As a start, add the two most common elements inside a [Bundle](/wix3/xsd/wix/bundle/) :

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

The [BootstrapperApplicationRef](/wix3/xsd/wix/bootstrapperapplicationref/) element will eventually point to the standard BootstrapperApplication provided by the WiX toolset and the [Chain](/wix3/xsd/wix/chain/) element will eventually contain the ordered list of packages that make up the bundle.

Now that you have the skeleton authoring of a Bundle, you can move on to adding information for the [BootstrapperApplicationRef](/wix3/xsd/wix/bootstrapperapplicationref/) element. See [Author the BootstrapperApplication for a Bundle](/wix3/bundle/authoring_bundle_application/).
