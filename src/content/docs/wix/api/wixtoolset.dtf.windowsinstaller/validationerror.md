---
title: ValidationError Enumeration
---
Defines the type of error encountered by the «see M:WixToolset.Dtf.WindowsInstaller.View.Validate(WixToolset.Dtf.WindowsInstaller.Record)» , «see M:WixToolset.Dtf.WindowsInstaller.View.ValidateNew(WixToolset.Dtf.WindowsInstaller.Record)» , or «see M:WixToolset.Dtf.WindowsInstaller.View.ValidateFields(WixToolset.Dtf.WindowsInstaller.Record)» methods of the «see T:WixToolset.Dtf.WindowsInstaller.View» class.
## Members
| Member | Description |
| ------ | ----------- |
| BadCabinet | An invalid cabinet name was supplied. |
| BadCase | The case was invalid. The case must be all uppercase or all lowercase. |
| BadCategory | The category column of the _Validation table for the column is invalid. |
| BadCondition | An invalid conditional statement was supplied. |
| BadCustomSource | An invalid string was supplied in the CustomSource column of the CustomAction table. |
| BadDefaultDir | An invalid string was supplied in the DefaultDir column of the Directory table. |
| BadFileName | An invalid file name was supplied. |
| BadFormatted | An invalid format string was supplied. |
| BadGuid | An invalid GUID was supplied. |
| BadIdentifier | An invalid identifier was supplied. |
| BadKeyTable | The table in the Keytable column of the _Validation table was not found or loaded. |
| BadLanguage | Invalid language IDs were supplied. |
| BadLink | The corresponding record in a foreign table was not found. |
| BadLocalizeAttrib | An invalid localization attribute was supplied. (Primary keys cannot be localized.) |
| BadMaxMinValues | The value in the MaxValue column of the _Validation table is less than the value in the MinValue column. |
| BadPath | An invalid path was supplied. |
| BadProperty | An invalid property string was supplied. |
| BadRegPath | An invalid registry path string was supplied. |
| BadShortcut | An invalid shortcut target name was supplied. |
| BadTemplate | An invalid template string was supplied. |
| BadVersion | An invalid version string was supplied. |
| BadWildcard | An invalid wildcard file name was supplied, or the use of wildcards was invalid. |
| DuplicateKey | The new record duplicates primary keys of the existing record in a table. |
| MissingData | The _Validation table is missing a reference to a column. |
| None | No error. |
| NotInSet | The data is not a member of the values permitted in the set. |
| Overflow | The data is greater than the maximum value allowed. |
| Required | There are no null values allowed, or the column is about to be deleted but is referenced by another row. |
| StringOverflow | The string is too long for the length specified by the column definition. |
| Underflow | The data is less than the minimum value allowed. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
