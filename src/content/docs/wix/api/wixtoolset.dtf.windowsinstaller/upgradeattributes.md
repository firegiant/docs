---
title: UpgradeAttributes Enumeration
---
Defines values for the Attributes column of the Upgrade table.
## Members
| Member | Description |
| ------ | ----------- |
| IgnoreRemoveFailure | Continues installation upon failure to remove a product or application. |
| LanguagesExclusive | Detects all languages, excluding the languages listed in the Language column. |
| MigrateFeatures | Migrates feature states by enabling the logic in the MigrateFeatureStates action. |
| OnlyDetect | Detects products and applications but does not remove. |
| VersionMaxInclusive | Dectects the range of versions including the value in VersionMax. |
| VersionMinInclusive | Detects the range of versions including the value in VersionMin. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
