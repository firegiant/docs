---
title: BOOTSTRAPPER_CACHE_TYPE Enumeration
---
The cache strategy to be used for the package.
## Members
| Member | Description |
| ------ | ----------- |
| Force | The package will always be cached and stay in the cache, unless the package and bundle are both being uninstalled. |
| Keep | The package will be cached in order to run the package, and then kept in the cache until the package is uninstalled. |
| Remove | The package will be cached in order to securely run the package, but will always be cleaned from the cache at the end. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
