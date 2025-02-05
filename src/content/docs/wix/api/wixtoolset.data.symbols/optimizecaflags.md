---
title: OptimizeCAFlags Enumeration
---
Values for the OptimizeCA MsiPatchMetdata property, which indicates whether custom actions can be skipped when applying the patch.
## Members
| Member | Description |
| ------ | ----------- |
| None | No custom actions are skipped. |
| SkipAssignment | Skip property (type 51) and directory (type 35) assignment custom actions. |
| SkipDeferred | Skip custom actions that run within the script. |
| SkipImmediate | Skip immediate custom actions that are not property or directory assignment custom actions. |
`WixToolset.Data.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
