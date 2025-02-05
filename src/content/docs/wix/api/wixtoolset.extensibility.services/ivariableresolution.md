---
title: IVariableResolution Interface
---
Result when resolving a variable.
## Properties
| Property | Description |
| ------ | ----------- |
| [DelayedResolve](#delayedresolve) | Indicates if the value contains variables that cannot be resolved yet. |
| [IsDefault](#isdefault) | Indicates whether a bind variables default value was used in the resolution. |
| [UpdatedValue](#updatedvalue) | Indicates whether the resolution updated the value. |
| [Value](#value) | The resolved value. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## DelayedResolve Property {#delayedresolve}
Indicates if the value contains variables that cannot be resolved yet.
### Declaration
```cs
public bool DelayedResolve { get; set; }
```
## IsDefault Property {#isdefault}
Indicates whether a bind variables default value was used in the resolution.
### Declaration
```cs
public bool IsDefault { get; set; }
```
## UpdatedValue Property {#updatedvalue}
Indicates whether the resolution updated the value.
### Declaration
```cs
public bool UpdatedValue { get; set; }
```
## Value Property {#value}
The resolved value.
### Declaration
```cs
public string Value { get; set; }
```
