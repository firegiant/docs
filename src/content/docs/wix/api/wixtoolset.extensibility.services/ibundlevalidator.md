---
title: IBundleValidator Interface
---
Interface provided to help with bundle validation.
## Methods
| Method | Description |
| ------ | ----------- |
| [GetCanonicalRelativePath(sourceLineNumbers, elementName, attributeName, relativePath)](#getcanonicalrelativepath_sourcelinenumbers_elementname_attributename_relativepath) | Validates path is relative and canonicalizes it. For example, "a\..\c\.\d.exe" ={'>'} "c\d.exe". |
| [ValidateBundleCondition(sourceLineNumbers, elementName, attributeName, condition, phase)](#validatebundlecondition_sourcelinenumbers_elementname_attributename_condition_phase) | Validates a bundle condition and displays an error for an illegal value. |
| [ValidateBundleMsiPropertyName(sourceLineNumbers, elementName, attributeName, propertyName)](#validatebundlemsipropertyname_sourcelinenumbers_elementname_attributename_propertyname) | Validates an MsiProperty name value and displays an error for an illegal value. |
| [ValidateBundleVariableNameDeclaration(sourceLineNumbers, elementName, attributeName, variableName)](#validatebundlevariablenamedeclaration_sourcelinenumbers_elementname_attributename_variablename) | Validates a Bundle variable name that is being used to declare a Variable in the bundle manifest and displays an error for an illegal value. |
| [ValidateBundleVariableNameTarget(sourceLineNumbers, elementName, attributeName, variableName)](#validatebundlevariablenametarget_sourcelinenumbers_elementname_attributename_variablename) | Validates a Bundle variable name that is being used to set its value and displays an error for an illegal value. |
| [ValidateBundleVariableNameValue(sourceLineNumbers, elementName, attributeName, variableName, nameRule)](#validatebundlevariablenamevalue_sourcelinenumbers_elementname_attributename_variablename_namerule) | Validates a Bundle variable name that is being used to reference a Variable and displays an error for an illegal value. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## GetCanonicalRelativePath(sourceLineNumbers, elementName, attributeName, relativePath) Method {#getcanonicalrelativepath_sourcelinenumbers_elementname_attributename_relativepath}
Validates path is relative and canonicalizes it. For example, "a\..\c\.\d.exe" ={'>'} "c\d.exe".
### Declaration
```cs
public string GetCanonicalRelativePath(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  string elementName,
  string attributeName,
  string relativePath
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber |  |
| elementName | string |  |
| attributeName | string |  |
| relativePath | string |  |
### Return value
`string` The original value if not relative, otherwise the canonicalized relative path.
## ValidateBundleCondition(sourceLineNumbers, elementName, attributeName, condition, phase) Method {#validatebundlecondition_sourcelinenumbers_elementname_attributename_condition_phase}
Validates a bundle condition and displays an error for an illegal value.
### Declaration
```cs
public bool ValidateBundleCondition(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  string elementName,
  string attributeName,
  string condition,
  WixToolset.Extensibility.Data.BundleConditionPhase phase
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber |  |
| elementName | string |  |
| attributeName | string |  |
| condition | string |  |
| phase | WixToolset.Extensibility.Data.BundleConditionPhase |  |
### Return value
`bool` Whether the condition is valid.
## ValidateBundleMsiPropertyName(sourceLineNumbers, elementName, attributeName, propertyName) Method {#validatebundlemsipropertyname_sourcelinenumbers_elementname_attributename_propertyname}
Validates an MsiProperty name value and displays an error for an illegal value.
### Declaration
```cs
public bool ValidateBundleMsiPropertyName(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  string elementName,
  string attributeName,
  string propertyName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber |  |
| elementName | string |  |
| attributeName | string |  |
| propertyName | string |  |
### Return value
`bool` Whether the name is valid.
## ValidateBundleVariableNameDeclaration(sourceLineNumbers, elementName, attributeName, variableName) Method {#validatebundlevariablenamedeclaration_sourcelinenumbers_elementname_attributename_variablename}
Validates a Bundle variable name that is being used to declare a Variable in the bundle manifest and displays an error for an illegal value.
### Declaration
```cs
public bool ValidateBundleVariableNameDeclaration(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  string elementName,
  string attributeName,
  string variableName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber |  |
| elementName | string |  |
| attributeName | string |  |
| variableName | string |  |
### Return value
`bool` Whether the name is valid.
## ValidateBundleVariableNameTarget(sourceLineNumbers, elementName, attributeName, variableName) Method {#validatebundlevariablenametarget_sourcelinenumbers_elementname_attributename_variablename}
Validates a Bundle variable name that is being used to set its value and displays an error for an illegal value.
### Declaration
```cs
public bool ValidateBundleVariableNameTarget(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  string elementName,
  string attributeName,
  string variableName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber |  |
| elementName | string |  |
| attributeName | string |  |
| variableName | string |  |
### Return value
`bool` Whether the name is valid.
## ValidateBundleVariableNameValue(sourceLineNumbers, elementName, attributeName, variableName, nameRule) Method {#validatebundlevariablenamevalue_sourcelinenumbers_elementname_attributename_variablename_namerule}
Validates a Bundle variable name that is being used to reference a Variable and displays an error for an illegal value.
### Declaration
```cs
public bool ValidateBundleVariableNameValue(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  string elementName,
  string attributeName,
  string variableName,
  WixToolset.Extensibility.Data.BundleVariableNameRule nameRule
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber |  |
| elementName | string |  |
| attributeName | string |  |
| variableName | string |  |
| nameRule | WixToolset.Extensibility.Data.BundleVariableNameRule |  |
### Return value
`bool` Whether the name is valid.
