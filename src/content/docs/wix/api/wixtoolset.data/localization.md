---
title: Localization Class
---
Object that represents a localization file.
## Methods
| Method | Description |
| ------ | ----------- |
| [UpdateLocation(location)](#updatelocation_location) | Updates the location, if the location is a higher state than the current state. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Codepage](#codepage) | Gets the codepage. |
| [Culture](#culture) | Gets the culture. |
| [LocalizedControls](#localizedcontrols) | Gets the localized controls. |
| [Location](#location) | Gets the location the localization came from. |
| [SummaryInformationCodepage](#summaryinformationcodepage) | Gets the summary information codepage. |
| [Variables](#variables) | Gets the variables. |
`WixToolset.Data.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## UpdateLocation(location) Method {#updatelocation_location}
Updates the location, if the location is a higher state than the current state.
### Declaration
```cs
public Localization UpdateLocation(
  LocalizationLocation location
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| location | LocalizationLocation | Location to update to. |
### Return value
`Localization` This localization object.
## Codepage Property {#codepage}
Gets the codepage.
### Declaration
```cs
public System.Nullable<System.Int32> Codepage { get; set; }
```
## Culture Property {#culture}
Gets the culture.
### Declaration
```cs
public string Culture { get; set; }
```
## LocalizedControls Property {#localizedcontrols}
Gets the localized controls.
### Declaration
```cs
public System.Collections.Generic.ICollection<System.Collections.Generic.KeyValuePair`2<System.String,WixToolset.Data.LocalizedControl>> LocalizedControls { get; set; }
```
## Location Property {#location}
Gets the location the localization came from.
### Declaration
```cs
public LocalizationLocation Location { get; set; }
```
## SummaryInformationCodepage Property {#summaryinformationcodepage}
Gets the summary information codepage.
### Declaration
```cs
public System.Nullable<System.Int32> SummaryInformationCodepage { get; set; }
```
## Variables Property {#variables}
Gets the variables.
### Declaration
```cs
public System.Collections.Generic.ICollection<WixToolset.Data.Bind.BindVariable> Variables { get; set; }
```
