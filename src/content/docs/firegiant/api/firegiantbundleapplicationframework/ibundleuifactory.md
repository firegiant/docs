---
title: IBundleUIFactory Interface
pagefind: false
---
BundleUI factory interface.
## Methods
| Method | Description |
| ------ | ----------- |
| [CreateBundleUI(IBundleApplication)](#createbundleui_ibundleapplication) | Called by the framework to request a BundleUI. |

`FireGiant.BundleApplicationFramework v6.0.1`
## CreateBundleUI(IBundleApplication bundleApplication) Method {#createbundleui_ibundleapplication}
Called by the framework to request a BundleUI.
### Declaration
```cs
public IBundleUI CreateBundleUI(
  IBundleApplication bundleApplication
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| bundleApplication | IBundleApplication | Bundle application provided by the framework. |
### Return value
`IBundleUI` BundleUI or null if this factory does not support the parameters provided by the bundleApplication.
