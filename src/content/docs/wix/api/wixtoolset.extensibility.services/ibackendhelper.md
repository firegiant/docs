---
title: IBackendHelper Interface
---
Interface provided to help backend extensions.
## Methods
| Method | Description |
| ------ | ----------- |
| [CreateGuid()](#createguid_nop) | Creates a MSI compatible GUID. |
| [CreateGuid(namespaceGuid, value)](#createguid_namespaceguid_value) | Creates a version 3 name-based UUID. |
| [CreateResolvedDirectory(directoryParent, name)](#createresolveddirectory_directoryparent_name) | Creates a resolved directory. |
| [GenerateIdentifier(prefix, args)](#generateidentifier_prefix_args) | Generate an identifier by hashing data from the row. |
| [GetMsiFileName(value, source, longName)](#getmsifilename_value_source_longname) | Get a source/target and short/long file name from an MSI Filename column. |
| [GetValidCodePage(value, allowNoChange, onlyAnsi, sourceLineNumbers)](#getvalidcodepage_value_allownochange_onlyansi_sourcelinenumbers) | Gets a valid code page from the given web name or integer value. |
| [IsValidBinderVariable(variable)](#isvalidbindervariable_variable) | Verifies if an identifier is a valid binder variable name. |
| [IsValidFourPartVersion(version)](#isvalidfourpartversion_version) | Verifies the given string is a valid 4-part version. |
| [IsValidIdentifier(id)](#isvalididentifier_id) | Determines if value is a valid identifier. |
| [IsValidLongFilename(filename, allowWildcards, allowRelative)](#isvalidlongfilename_filename_allowwildcards_allowrelative) | Verifies the given string is a valid long filename. |
| [IsValidMsiProductVersion(version)](#isvalidmsiproductversion_version) | Verifies the given string is a valid MSI product version. |
| [IsValidShortFilename(filename, allowWildcards)](#isvalidshortfilename_filename_allowwildcards) | Verifies the given string is a valid short filename. |
| [IsValidWixVersion(version)](#isvalidwixversion_version) | Verifies the given string is a valid WiX version. |
| [SplitMsiFileName(value)](#splitmsifilename_value) | Get the source/target and short/long file names from an MSI Filename column. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CreateGuid() Method {#createguid_nop}
Creates a MSI compatible GUID.
### Declaration
```cs
public string CreateGuid()
```
### Return value
`string` Creates an uppercase GUID with braces.
## CreateGuid(namespaceGuid, value) Method {#createguid_namespaceguid_value}
Creates a version 3 name-based UUID.
### Declaration
```cs
public string CreateGuid(
  System.Guid namespaceGuid,
  string value
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| namespaceGuid | System.Guid | The namespace UUID. |
| value | string | The value. |
### Return value
`string` The generated GUID for the given namespace and value.
## CreateResolvedDirectory(directoryParent, name) Method {#createresolveddirectory_directoryparent_name}
Creates a resolved directory.
### Declaration
```cs
public WixToolset.Extensibility.Data.IResolvedDirectory CreateResolvedDirectory(
  string directoryParent,
  string name
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| directoryParent | string | Directory parent identifier. |
| name | string | Name of directory. |
### Return value
`WixToolset.Extensibility.Data.IResolvedDirectory` Resolved directory.
## GenerateIdentifier(prefix, args) Method {#generateidentifier_prefix_args}
Generate an identifier by hashing data from the row.
### Declaration
```cs
public string GenerateIdentifier(
  string prefix,
  System.String[] args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| prefix | string | Three letter or less prefix for generated row identifier. |
| args | System.String[] | Information to hash. |
### Return value
`string` The generated identifier.
## GetMsiFileName(value, source, longName) Method {#getmsifilename_value_source_longname}
Get a source/target and short/long file name from an MSI Filename column.
### Declaration
```cs
public string GetMsiFileName(
  string value,
  bool source,
  bool longName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| value | string | The Filename value. |
| source | bool | true to get a source name; false to get a target name |
| longName | bool | true to get a long name; false to get a short name |
### Return value
`string` The requesed file name.
## GetValidCodePage(value, allowNoChange, onlyAnsi, sourceLineNumbers) Method {#getvalidcodepage_value_allownochange_onlyansi_sourcelinenumbers}
Gets a valid code page from the given web name or integer value.
### Declaration
```cs
public int GetValidCodePage(
  string value,
  bool allowNoChange,
  bool onlyAnsi,
  WixToolset.Data.SourceLineNumber sourceLineNumbers
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| value | string | A code page web name or integer value as a string. |
| allowNoChange | bool | Whether to allow -1 which does not change the database code pages. This may be the case with wxl files. |
| onlyAnsi | bool | Whether to allow Unicode (UCS) or UTF code pages. |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line information for the current authoring. |
### Return value
`int` A valid code page number.
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | The value is an integer less than 0 or greater than 65535. |
| T:System.ArgumentNullException |  is null. |
| T:System.NotSupportedException | The value doesn't not represent a valid code page name or integer value. |
| T:WixToolset.Data.WixException | The code page is invalid for summary information. |
## IsValidBinderVariable(variable) Method {#isvalidbindervariable_variable}
Verifies if an identifier is a valid binder variable name.
### Declaration
```cs
public bool IsValidBinderVariable(
  string variable
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| variable | string | Binder variable name to verify. |
### Return value
`bool` True if the identifier is a valid binder variable name.
## IsValidFourPartVersion(version) Method {#isvalidfourpartversion_version}
Verifies the given string is a valid 4-part version.
### Declaration
```cs
public bool IsValidFourPartVersion(
  string version
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| version | string | The version to verify. |
### Return value
`bool` True if version is a valid 4-part version.
## IsValidIdentifier(id) Method {#isvalididentifier_id}
Determines if value is a valid identifier.
### Declaration
```cs
public bool IsValidIdentifier(
  string id
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| id | string | Identifier to validate. |
### Return value
`bool` True if valid identifier, otherwise false.
## IsValidLongFilename(filename, allowWildcards, allowRelative) Method {#isvalidlongfilename_filename_allowwildcards_allowrelative}
Verifies the given string is a valid long filename.
### Declaration
```cs
public bool IsValidLongFilename(
  string filename,
  bool allowWildcards,
  bool allowRelative
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| filename | string | The filename to verify. |
| allowWildcards | bool | Allow wildcards in the filename. |
| allowRelative | bool | Allow long file name to be a relative path. |
### Return value
`bool` True if filename is a valid long filename.
## IsValidMsiProductVersion(version) Method {#isvalidmsiproductversion_version}
Verifies the given string is a valid MSI product version.
### Declaration
```cs
public bool IsValidMsiProductVersion(
  string version
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| version | string | The MSI product version to verify. |
### Return value
`bool` True if version is a valid MSI product version
## IsValidShortFilename(filename, allowWildcards) Method {#isvalidshortfilename_filename_allowwildcards}
Verifies the given string is a valid short filename.
### Declaration
```cs
public bool IsValidShortFilename(
  string filename,
  bool allowWildcards
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| filename | string | The filename to verify. |
| allowWildcards | bool | Allow wildcards in the filename. |
### Return value
`bool` True if filename is a valid short filename.
## IsValidWixVersion(version) Method {#isvalidwixversion_version}
Verifies the given string is a valid WiX version.
### Declaration
```cs
public bool IsValidWixVersion(
  string version
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| version | string | The version to verify. |
### Return value
`bool` True if version is a valid WiX version.
## SplitMsiFileName(value) Method {#splitmsifilename_value}
Get the source/target and short/long file names from an MSI Filename column.
### Declaration
```cs
public System.String[] SplitMsiFileName(
  string value
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| value | string | The Filename value. |
### Return value
`System.String[]` An array of strings of length 4. The contents are: short target, long target, short source, and long source.
### Remarks
If any particular file name part is not parsed, its set to null in the appropriate location of the returned array of strings. Thus the returned array will always be of length 4.
