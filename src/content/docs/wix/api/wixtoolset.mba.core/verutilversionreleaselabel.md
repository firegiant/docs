---
title: VerUtilVersionReleaseLabel Class
---
A release label from a «see T:WixToolset.Mba.Core.VerUtilVersion» .
## Properties
| Property | Description |
| ------ | ----------- |
| [IsNumeric](#isnumeric) | Whether the label was parsed as a number. |
| [Label](#label) | The string version of the label. |
| [Value](#value) | If «see P:WixToolset.Mba.Core.VerUtilVersionReleaseLabel.IsNumeric» then the value that was parsed. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## IsNumeric Property {#isnumeric}
Whether the label was parsed as a number.
### Declaration
```cs
public bool IsNumeric { get; set; }
```
## Label Property {#label}
The string version of the label.
### Declaration
```cs
public string Label { get; set; }
```
## Value Property {#value}
If «see P:WixToolset.Mba.Core.VerUtilVersionReleaseLabel.IsNumeric» then the value that was parsed.
### Declaration
```cs
public System.UInt32 Value { get; set; }
```
