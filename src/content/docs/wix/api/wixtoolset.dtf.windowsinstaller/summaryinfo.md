---
title: SummaryInfo Class
---
Provides access to summary information of a Windows Installer database.
## Methods
| Method | Description |
| ------ | ----------- |
| [Persist()](#persist_nop) | Formats and writes the previously stored properties into the standard summary information stream. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Author](#author) | Gets or sets the Author summary information property. |
| [CharacterCount](#charactercount) | Gets or sets the CharacterCount summary information property. |
| [CodePage](#codepage) | Gets or sets the CodePage summary information property. |
| [Comments](#comments) | Gets or sets the Comments summary information property. |
| [CreateTime](#createtime) | Gets or sets the CreateTime summary information property. |
| [CreatingApp](#creatingapp) | Gets or sets the CreatingApp summary information property. |
| [Keywords](#keywords) | Gets or sets the Keywords summary information property. |
| [LastPrintTime](#lastprinttime) | Gets or sets the LastPrintTime summary information property. |
| [LastSavedBy](#lastsavedby) | Gets or sets the LastSavedBy summary information property. |
| [LastSaveTime](#lastsavetime) | Gets or sets the LastSaveTime summary information property. |
| [PageCount](#pagecount) | Gets or sets the PageCount summary information property. |
| [RevisionNumber](#revisionnumber) | Gets or sets the RevisionNumber summary information property. |
| [Security](#security) | Gets or sets the Security summary information property. |
| [Subject](#subject) | Gets or sets the Subject summary information property. |
| [Template](#template) | Gets or sets the Template summary information property. |
| [Title](#title) | Gets or sets the Title summary information property. |
| [WordCount](#wordcount) | Gets or sets the WordCount summary information property. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Persist() Method {#persist_nop}
Formats and writes the previously stored properties into the standard summary information stream.
### Declaration
```cs
public void Persist()
```
### Remarks
This method may only be called once after all the property values have been set. Properties may still be read after the stream is written.
Win32 MSI API: [MsiSummaryInfoPersist](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfopersist.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | The stream cannot be successfully written. |
## Author Property {#author}
Gets or sets the Author summary information property.
### Declaration
```cs
public string Author { get; set; }
```
### Remarks
The Author summary information property conveys to a file browser the manufacturer of the installation database. This value is typically set from the installer property Manufacturer.
Win32 MSI APIs: [MsiSummaryInfoGetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfogetproperty.asp) , [MsiSummaryInfoSetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfosetproperty.asp)

## CharacterCount Property {#charactercount}
Gets or sets the CharacterCount summary information property.
### Declaration
```cs
public int CharacterCount { get; set; }
```
### Remarks
The CharacterCount summary information property is only used in transforms. This part of the summary information stream is divided into two 16-bit words. The upper word contains the transform validation flags. The lower word contains the transform error condition flags.
Win32 MSI APIs: [MsiSummaryInfoGetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfogetproperty.asp) , [MsiSummaryInfoSetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfosetproperty.asp)

## CodePage Property {#codepage}
Gets or sets the CodePage summary information property.
### Declaration
```cs
public System.Int16 CodePage { get; set; }
```
### Remarks
The Codepage summary information property is the numeric value of the ANSI code page used for any strings that are stored in the summary information. Note that this is not the same code page for strings in the installation database. The Codepage summary information property is used to translate the strings in the summary information into Unicode when calling the Unicode API functions. The Codepage summary information property must be set before any string properties are set in the summary information.
Win32 MSI APIs: [MsiSummaryInfoGetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfogetproperty.asp) , [MsiSummaryInfoSetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfosetproperty.asp)

## Comments Property {#comments}
Gets or sets the Comments summary information property.
### Declaration
```cs
public string Comments { get; set; }
```
### Remarks
The Comments summary information property conveys the general purpose of the installer database. By convention, the value for this summary property is set to the following:
"This installer database contains the logic and data required to install {'<'}product name{'>'}."
where {'<'}product name{'>'} is the name of the product being installed. In general the value for this summary property only changes in the product name, nothing else.
Win32 MSI APIs: [MsiSummaryInfoGetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfogetproperty.asp) , [MsiSummaryInfoSetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfosetproperty.asp)

## CreateTime Property {#createtime}
Gets or sets the CreateTime summary information property.
### Declaration
```cs
public System.DateTime CreateTime { get; set; }
```
### Remarks
The CreateTime summary information property conveys when the installer database was created.
Win32 MSI APIs: [MsiSummaryInfoGetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfogetproperty.asp) , [MsiSummaryInfoSetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfosetproperty.asp)

## CreatingApp Property {#creatingapp}
Gets or sets the CreatingApp summary information property.
### Declaration
```cs
public string CreatingApp { get; set; }
```
### Remarks
The CreatingApp summary information property conveys which application created the installer database. In general the value for this summary property is the name of the software used to author this database.
Win32 MSI APIs: [MsiSummaryInfoGetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfogetproperty.asp) , [MsiSummaryInfoSetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfosetproperty.asp)

## Keywords Property {#keywords}
Gets or sets the Keywords summary information property.
### Declaration
```cs
public string Keywords { get; set; }
```
### Remarks
The Keywords summary information property is used by file browsers to hold keywords that permit the database file to be found in a keyword search. The set of keywords typically includes "Installer" as well as product-specific keywords, and may be localized.
Win32 MSI APIs: [MsiSummaryInfoGetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfogetproperty.asp) , [MsiSummaryInfoSetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfosetproperty.asp)

## LastPrintTime Property {#lastprinttime}
Gets or sets the LastPrintTime summary information property.
### Declaration
```cs
public System.DateTime LastPrintTime { get; set; }
```
### Remarks
The LastPrintTime summary information property can be set to the date and time during an administrative installation to record when the administrative image was created. For non-administrative installations this property is the same as the CreateTime summary information property.
Win32 MSI APIs: [MsiSummaryInfoGetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfogetproperty.asp) , [MsiSummaryInfoSetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfosetproperty.asp)

## LastSavedBy Property {#lastsavedby}
Gets or sets the LastSavedBy summary information property.
### Declaration
```cs
public string LastSavedBy { get; set; }
```
### Remarks
The installer sets the Last Saved By summary information property to the value of the LogonUser property during an administrative installation. The installer never uses this property and a user never needs to modify it. Developers of a database editing tool may use this property to track the last person to modify the database. This property should be left set to null in a final shipping database.
In a transform, this summary property contains the platform and language ID(s) that a database should have after it has been transformed. The property specifies to what the Template should be set in the new database.
Win32 MSI APIs: [MsiSummaryInfoGetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfogetproperty.asp) , [MsiSummaryInfoSetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfosetproperty.asp)

## LastSaveTime Property {#lastsavetime}
Gets or sets the LastSaveTime summary information property.
### Declaration
```cs
public System.DateTime LastSaveTime { get; set; }
```
### Remarks
The LastSaveTime summary information property conveys when the last time the installer database was modified. Each time a user changes an installation the value for this summary property is updated to the current system time/date at the time the installer database was saved. Initially the value for this summary property is set to null to indicate that no changes have yet been made.
Win32 MSI APIs: [MsiSummaryInfoGetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfogetproperty.asp) , [MsiSummaryInfoSetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfosetproperty.asp)

## PageCount Property {#pagecount}
Gets or sets the PageCount summary information property.
### Declaration
```cs
public int PageCount { get; set; }
```
### Remarks
For an installation package, the PageCount summary information property contains the minimum installer version required. For Windows Installer version 1.0, this property must be set to the integer 100. For 64-bit Windows Installer Packages, this property must be set to the integer 200.
For a transform package, the PageCount summary information property contains minimum installer version required to process the transform. Set to the greater of the two PageCount summary information property values belonging to the databases used to generate the transform.
The PageCount summary information property is set to null in patch packages.
This summary property is REQUIRED.
Win32 MSI APIs: [MsiSummaryInfoGetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfogetproperty.asp) , [MsiSummaryInfoSetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfosetproperty.asp)

## RevisionNumber Property {#revisionnumber}
Gets or sets the RevisionNumber summary information property.
### Declaration
```cs
public string RevisionNumber { get; set; }
```
### Remarks
The Revision Number summary information property contains the package code for the installer package. The package code is a unique identifier of the installer package.
The Revision Number summary information property of a patch package specifies the GUID patch code for the patch. This is followed by a list of patch code GUIDs for obsolete patches that are removed when this patch is applied. The patch codes are concatenated with no delimiters separating GUIDs in the list.
The Revision Number summary information property of a transform package lists the product code GUIDs and version of the new and original products and the upgrade code GUID. The list is separated with semicolons as follows.
Original-Product-Code Original-Product-Version ; New-Product Code New-Product-Version; Upgrade-Code
This summary property is REQUIRED.
Win32 MSI APIs: [MsiSummaryInfoGetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfogetproperty.asp) , [MsiSummaryInfoSetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfosetproperty.asp)

## Security Property {#security}
Gets or sets the Security summary information property.
### Declaration
```cs
public int Security { get; set; }
```
### Remarks
The Security summary information property conveys whether the package should be opened as read-only. The database editing tool should not modify a read-only enforced database and should issue a warning at attempts to modify a read-only recommended database. The following values of this property are applicable to Windows Installer files:
- 0 - no restriction
- 2 - read only recommended
- 4 - read only enforced

This property should be set to read-only recommended (2) for an installation database and to read-only enforced (4) for a transform or patch.
Win32 MSI APIs: [MsiSummaryInfoGetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfogetproperty.asp) , [MsiSummaryInfoSetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfosetproperty.asp)

## Subject Property {#subject}
Gets or sets the Subject summary information property.
### Declaration
```cs
public string Subject { get; set; }
```
### Remarks
The Subject summary information property conveys to a file browser the product that can be installed using the logic and data in this installer database. For example, the value of the summary property for Microsoft Office 97 would be "Microsoft Office 97 Professional". This value is typically set from the installer property ProductName.
Win32 MSI APIs: [MsiSummaryInfoGetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfogetproperty.asp) , [MsiSummaryInfoSetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfosetproperty.asp)

## Template Property {#template}
Gets or sets the Template summary information property.
### Declaration
```cs
public string Template { get; set; }
```
### Remarks
The Template summary information propery indicates the platform and language versions supported by the database.
The syntax of the Template Summary property information is: [platform property][,platform property][,...];[language id][,language id][,...]
For example, the following are all valid values for the Template Summary property:
- Intel;1033
- Intel64;1033
- ;1033
- ;
- Intel ;1033,2046
- Intel64;1033,2046
- Intel;0

If this is a 64-bit Windows Installer, enter Intel64 in the Template summary information property. Note that an installation package cannot have both the Intel and Intel64 properties set.
If the current platform does not match one of the platforms specified then the installer will not process the package. Not specifying a platform implies that the package is platform-independent.
Entering 0 in the language ID field of the Template summary information property, or leaving this field empty, indicates that the package is language neutral.
There are variations of this property depending on whether it is in a source installer database or a transform.
Source Installer Database - Only one language can be specified in a source installer database. Merge Modules are the only packages that may have multiple languages. For more information, see Multiple Language Merge Modules.
Transform - In a transform file, only one language may be specified. The specified platform and language determine whether a transform can be applied to a particular database. The platform property and the language property can be left blank if no transform restriction relies on them to validate the transform.
This summary property is REQUIRED.
Win32 MSI APIs: [MsiSummaryInfoGetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfogetproperty.asp) , [MsiSummaryInfoSetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfosetproperty.asp)

## Title Property {#title}
Gets or sets the Title summary information property.
### Declaration
```cs
public string Title { get; set; }
```
### Remarks
The Title summary information property briefly describes the type of installer package. Phrases such as "Installation Database" or "Transform" or "Patch" may be used for this property.
Win32 MSI APIs: [MsiSummaryInfoGetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfogetproperty.asp) , [MsiSummaryInfoSetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfosetproperty.asp)

## WordCount Property {#wordcount}
Gets or sets the WordCount summary information property.
### Declaration
```cs
public int WordCount { get; set; }
```
### Remarks
The WordCount summary information property indicates the type of source file image. If this property is not present, it defaults to 0. Note that this property is stored in place of the standard Count property.
This property is a bit field. New bits may be added in the future. At present the following bits are available:
- Bit 0: 0 = long file names, 1 = short file names
- Bit 1: 0 = source is uncompressed, 1 = source is compressed
- Bit 2: 0 = source is original media, 1 = source is administrative installation
- [MSI 4.0] Bit 3: 0 = elevated privileges can be required to install, 1 = elevated privileges are not required to install

These are combined to give the WordCount summary information property one of the following values indicating a type of source file image:
- 0 - Original source using long file names. Matches tree in Directory table.
- 1 - Original source using short file names. Matches tree in Directory table.
- 2 - Compressed source files using long file names. Matches cabinets and files in the Media table.
- 3 - Compressed source files using short file names. Matches cabinets and files in the Media table.
- 4 - Administrative image using long file names. Matches tree in Directory table.
- 5 - Administrative image using short file names. Matches tree in Directory table.

Note that if the package is marked as compressed (bit 1 is set), the installer only installs files located at the root of the source. In this case, even files marked as uncompressed in the File table must be located at the root to be installed. To specify a source image that has both a cabinet file (compressed files) and uncompressed files that match the tree in the Directory table, mark the package as uncompressed by leaving bit 1 unset (value=0) in the WordCount summary information property and set «see F:WixToolset.Dtf.WindowsInstaller.FileAttributes.Compressed» (value=16384) in the Attributes column of the File table for each file in the cabinet.
For a patch package, the WordCount summary information property specifies the patch engine that was used to create the patch files. The default value is 1 and indicates that MSPATCH was used to create the patch A value of "2" means that the patch is using smaller, optimized, files available only with Windows Installer version 1.2 or later. A patch with a WordCount of "2" fails immediately if used with a Windows Installer version earlier than 1.2. A patch with a WordCount of "3" fails immediately if used with a Windows Installer version earlier than 2.0.
This summary property is REQUIRED.
Win32 MSI APIs: [MsiSummaryInfoGetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfogetproperty.asp) , [MsiSummaryInfoSetProperty](http://msdn.microsoft.com/library/en-us/msi/setup/msisummaryinfosetproperty.asp)

