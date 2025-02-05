---
title: Out of Order
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 8
---

There are a few dialog boxes that don't fit into the normal sequence of wizard pages but represent errors or similar out-of-sequence conditions. We can specify them using the `OnExit` attribute in the `Show` tag used for scheduling. The value can be *success*, *cancel*, *error* or *suspend*:

    <InstallUISequence>
      <Show Dialog="FatalError" OnExit="error" />
      <Show Dialog="UserExit" OnExit="cancel" />
      <Show Dialog="ExitDialog" OnExit="success" />
      ...
    </InstallUISequence>
