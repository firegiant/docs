---
title: BundleConditionPhase Enumeration
---
The Burn execution phase during which a Condition will be evaluated.
## Members
| Member | Description |
| ------ | ----------- |
| Detect | Condition is evaluated during Detect (ExePackage/@DetectCondition). |
| Execute | Condition is evaluated during Apply (MsiProperty/@Condition). |
| Plan | Condition is evaluated during Plan (ExePackage/@InstallCondition). |
| Shutdown | Condition is evaluated after Apply. |
| Startup | Condition is evaluated by the engine before loading the BootstrapperApplication (Bundle/@Condition). |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
