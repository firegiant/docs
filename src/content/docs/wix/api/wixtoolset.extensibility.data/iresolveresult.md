---
title: IResolveResult Interface
---
Result of resolving localization and bind variables.
## Properties
| Property | Description |
| ------ | ----------- |
| [Codepage](#codepage) | Resolved codepage, if provided. |
| [DelayedFields](#delayedfields) | Fields still requiring resolution. |
| [ExpectedEmbeddedFiles](#expectedembeddedfiles) | Files to extract from embedded .wixlibs. |
| [IntermediateRepresentation](#intermediaterepresentation) | Resolved intermediate. |
| [PackageLcid](#packagelcid) | Resolved package language, if provided. |
| [SummaryInformationCodepage](#summaryinformationcodepage) | Resolved summary information codepage, if provided. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Codepage Property {#codepage}
Resolved codepage, if provided.
### Declaration
```cs
public System.Nullable<System.Int32> Codepage { get; set; }
```
## DelayedFields Property {#delayedfields}
Fields still requiring resolution.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Extensibility.Data.IDelayedField> DelayedFields { get; set; }
```
## ExpectedEmbeddedFiles Property {#expectedembeddedfiles}
Files to extract from embedded .wixlibs.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Extensibility.Data.IExpectedExtractFile> ExpectedEmbeddedFiles { get; set; }
```
## IntermediateRepresentation Property {#intermediaterepresentation}
Resolved intermediate.
### Declaration
```cs
public WixToolset.Data.Intermediate IntermediateRepresentation { get; set; }
```
## PackageLcid Property {#packagelcid}
Resolved package language, if provided.
### Declaration
```cs
public System.Nullable<System.Int32> PackageLcid { get; set; }
```
## SummaryInformationCodepage Property {#summaryinformationcodepage}
Resolved summary information codepage, if provided.
### Declaration
```cs
public System.Nullable<System.Int32> SummaryInformationCodepage { get; set; }
```
