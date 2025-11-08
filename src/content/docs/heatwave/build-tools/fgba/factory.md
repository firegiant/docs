---
title: Implementing a BundleUIFactory
sidebar:
  order: 1
---

In addition to communicating with Burn, [`FireGiantBundleApplication.Run()`](/firegiant/api/firegiantbundleapplicationframework/firegiantbundleapplication/) finds an implementation of [`IBundleUIFactory`](/firegiant/api/firegiantbundleapplicationframework/ibundleui/) and calls that to create your Bundle UI object. The following is an implementation that should be sufficient for 99.999% of Bundle UIs. This factory pattern exists for those 0.001% of cases that need to do something special.

## Standard Bundle UI factory

```cs title=ExampleBundleUIFactory.cs
using FireGiant.BundleApplicationFramework;

public class ExampleBundleUIFactory : IBundleUIFactory
{
  public IBundleUI CreateBundleUI(IBundleApplication bundleApplication)
  {
      return new ExampleWpfBundleUI(bundleApplication);
  }
}
```

Now that we can create Bundle UI using our factory, let's look at how to implement the Bundle UI itself.
