---
title: Environmentally Friendly
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 9
---

To install environment variables, use the `Environment` tag in a component:

    <Environment Id='UpdatePath' Name='PATH' Action='set' Permanent='yes' System='yes' Part='last' Value='[INSTALLDIR]' />

The `Action` attribute specifies what to do when the component is installed, its possible values are *create*, *set* and *remove*. The `Part` attribute governs the way the new value is assigned: *all* replaces the previous value with the new one, *first* prepends it to the original value, *last* appends to it. `Permanent='yes'` makes the environment variable stay when the product is removed, otherwise, it will be removed as well. `System` specifies whether the environment variable should be added to the system or the user environment space. Make sure you use all-uppercase names.
