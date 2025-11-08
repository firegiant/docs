---
title: BundlePackageType Enumeration
pagefind: false
---
Package type.
## Members
| Member | Description |
| ------ | ----------- |
| BundleAddon | Addon bundle to this bundle. |
| BundleDependentAddon | This bundle is an addon to the related bundle. |
| BundleDependentPatch | This bundle is a patch for the related bundle. |
| BundleDetect | Arbitrary detected bundle (`RelatedBundle/@Action=Detect`). |
| BundleNested | Bundle is part of chain in this bundle. |
| BundlePatch | Patch bundle for this bundle. |
| BundleUpdate | Related bundle is newer than this bundle. |
| BundleUpgrade | Upgrade code is shared with this bundle. |
| Exe | Executable package. |
| Msi | MSI package. |
| Msp | MSP patch. |
| Msu | MSU package. |
| Unknown | Unknown package type. |

`FireGiant.BundleApplicationFramework v6.0.1`
