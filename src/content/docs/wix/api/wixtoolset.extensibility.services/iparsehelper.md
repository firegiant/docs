---
title: IParseHelper Interface
---
Interface provided to help compiler and optimizer extensions parse.
## Methods
| Method | Description |
| ------ | ----------- |
| [ContainsProperty(possibleProperty)](#containsproperty_possibleproperty) | Checks if the string contains a property (i.e. "foo[Property]bar") |
| [CreateComplexReference(section, sourceLineNumbers, parentType, parentId, parentLanguage, childType, childId, isPrimary)](#createcomplexreference_section_sourcelinenumbers_parenttype_parentid_parentlanguage_childtype_childid_isprimary) | Creates WixComplexReference and WixGroup symbols in the active section. |
| [CreateCustomActionReference(sourceLineNumbers, section, customAction, platform, supportedPlatforms)](#createcustomactionreference_sourcelinenumbers_section_customaction_platform_supportedplatforms) | Create a reference in the specified section for a custom action specialized for specific platforms, given standard prefixes for naming and suffixes for platforms. |
| [CreateDirectorySymbol(section, sourceLineNumbers, id, parentId, name, shortName, sourceName, shortSourceName)](#createdirectorysymbol_section_sourcelinenumbers_id_parentid_name_shortname_sourcename_shortsourcename) | Creates a directory row from a name. |
| [CreateGuid(namespaceGuid, value)](#createguid_namespaceguid_value) | Creates a version 3 name-based UUID. |
| [CreateIdentifier(prefix, args)](#createidentifier_prefix_args) | Create an identifier by hashing data from the row. |
| [CreateIdentifierFromFilename(filename)](#createidentifierfromfilename_filename) | Create an identifier based on passed file name |
| [CreateIdentifierValueFromPlatform(name, currentPlatform, supportedPlatforms)](#createidentifiervaluefromplatform_name_currentplatform_supportedplatforms) | Append a suffix to the given name based on the current platform. If the current platform is not in the supported platforms, then it returns null. |
| [CreateRegistrySymbol(section, sourceLineNumbers, root, key, name, value, componentId, valueType, valueAction)](#createregistrysymbol_section_sourcelinenumbers_root_key_name_value_componentid_valuetype_valueaction) | Creates a Registry symbol in the active section. |
| [CreateRegistrySymbol(section, sourceLineNumbers, root, key, name, value, componentId)](#createregistrysymbol_section_sourcelinenumbers_root_key_name_value_componentid) | Creates a numeric Registry symbol in the active section. |
| [CreateSimpleReference(section, sourceLineNumbers, symbolName, primaryKey)](#createsimplereference_section_sourcelinenumbers_symbolname_primarykey) | Create a WixSimpleReference symbol in the active section. |
| [CreateSimpleReference(section, sourceLineNumbers, symbolName, primaryKeys)](#createsimplereference_section_sourcelinenumbers_symbolname_primarykeys) | Create a WixSimpleReference symbol in the active section. |
| [CreateSimpleReference(section, sourceLineNumbers, symbolDefinition, primaryKey)](#createsimplereference_section_sourcelinenumbers_symboldefinition_primarykey) | Create a WixSimpleReference symbol in the active section. |
| [CreateSimpleReference(section, sourceLineNumbers, symbolDefinition, primaryKeys)](#createsimplereference_section_sourcelinenumbers_symboldefinition_primarykeys) | Create a WixSimpleReference symbol in the active section. |
| [CreateSymbol(section, sourceLineNumbers, symbolName, identifier)](#createsymbol_section_sourcelinenumbers_symbolname_identifier) | Creates a symbol in the section. |
| [CreateSymbol(section, sourceLineNumbers, symbolDefinition, identifier)](#createsymbol_section_sourcelinenumbers_symboldefinition_identifier) | Creates a symbol in the section. |
| [CreateWixGroupSymbol(section, sourceLineNumbers, parentType, parentId, childType, childId)](#createwixgroupsymbol_section_sourcelinenumbers_parenttype_parentid_childtype_childid) | A symbol in the WixGroup table is added for this child node and its parent node. |
| [CreateWixSearchRelationSymbol(section, sourceLineNumbers, id, parentId, attributes)](#createwixsearchrelationsymbol_section_sourcelinenumbers_id_parentid_attributes) |  |
| [CreateWixSearchSymbol(section, sourceLineNumbers, elementName, id, variable, condition, after, bootstrapperExtensionId)](#createwixsearchsymbol_section_sourcelinenumbers_elementname_id_variable_condition_after_bootstrapperextensionid) | Creates a symbol in the WixSearch table. |
| [EnsureTable(section, sourceLineNumbers, tableName)](#ensuretable_section_sourcelinenumbers_tablename) | Add the appropriate symbols to make sure that the given table shows up in the resulting output. |
| [EnsureTable(section, sourceLineNumbers, tableDefinition)](#ensuretable_section_sourcelinenumbers_tabledefinition) | Add the appropriate symbols to make sure that the given table shows up in the resulting output. |
| [GetAttributeBundleVariableNameIdentifier(sourceLineNumbers, attribute)](#getattributebundlevariablenameidentifier_sourcelinenumbers_attribute) | Gets a bundle variable name identifier and displays an error for an illegal value. |
| [GetAttributeBundleVariableNameValue(sourceLineNumbers, attribute, nameRule)](#getattributebundlevariablenamevalue_sourcelinenumbers_attribute_namerule) | Gets a bundle variable name value and displays an error for an illegal value. |
| [GetAttributeGuidValue(sourceLineNumbers, attribute, generatable, canBeEmpty)](#getattributeguidvalue_sourcelinenumbers_attribute_generatable_canbeempty) | Get a guid attribute value and displays an error for an illegal guid value. |
| [GetAttributeIdentifier(sourceLineNumbers, attribute)](#getattributeidentifier_sourcelinenumbers_attribute) | Get an identifier attribute value and displays an error for an illegal identifier value. |
| [GetAttributeIdentifierValue(sourceLineNumbers, attribute)](#getattributeidentifiervalue_sourcelinenumbers_attribute) | Get an identifier attribute value and displays an error for an illegal identifier value. |
| [GetAttributeIntegerValue(sourceLineNumbers, attribute, minimum, maximum)](#getattributeintegervalue_sourcelinenumbers_attribute_minimum_maximum) | Get an integer attribute value and displays an error for an illegal integer value. |
| [GetAttributeLongFilename(sourceLineNumbers, attribute, allowWildcards, allowRelative)](#getattributelongfilename_sourcelinenumbers_attribute_allowwildcards_allowrelative) | Gets a long filename value and displays an error for an illegal long filename value. |
| [GetAttributeLongValue(sourceLineNumbers, attribute, minimum, maximum)](#getattributelongvalue_sourcelinenumbers_attribute_minimum_maximum) | Get a long integral attribute value and displays an error for an illegal long value. |
| [GetAttributeRegistryRootValue(sourceLineNumbers, attribute, allowHkmu)](#getattributeregistryrootvalue_sourcelinenumbers_attribute_allowhkmu) | Gets a RegistryRootType value and displays an error for an illegal value. |
| [GetAttributeValue(sourceLineNumbers, attribute, emptyRule)](#getattributevalue_sourcelinenumbers_attribute_emptyrule) | Get an attribute value and displays an error if the value is empty by default. |
| [GetAttributeVersionValue(sourceLineNumbers, attribute)](#getattributeversionvalue_sourcelinenumbers_attribute) | Gets a version value or possibly a binder variable and displays an error for an illegal version value. |
| [GetAttributeYesNoDefaultValue(sourceLineNumbers, attribute)](#getattributeyesnodefaultvalue_sourcelinenumbers_attribute) | Gets a yes/no/default value and displays an error for an illegal yes/no/default value. |
| [GetAttributeYesNoValue(sourceLineNumbers, attribute)](#getattributeyesnovalue_sourcelinenumbers_attribute) | Gets a yes/no value and displays an error for an illegal yes/no value. |
| [GetConditionInnerText(node)](#getconditioninnertext_node) | Gets node's inner text and ensure's it is safe for use in a condition by trimming any extra whitespace. |
| [GetSourceLineNumbers(element)](#getsourcelinenumbers_element) | Gets a source line number for an element. |
| [GetTrimmedInnerText(element)](#gettrimmedinnertext_element) | Get an element's inner text and trims any extra whitespace. |
| [InnerTextDisallowed(element)](#innertextdisallowed_element) | Validates that the element does not contain inner text. |
| [InnerTextDisallowed(element, attributeName)](#innertextdisallowed_element_attributename) | Validates that the element does not contain inner text and suggests which attribute to use instead. |
| [IsValidIdentifier(value)](#isvalididentifier_value) | Verifies that a value is a legal identifier. |
| [IsValidLocIdentifier(identifier)](#isvalidlocidentifier_identifier) | Verifies if an identifier is a valid loc identifier. |
| [IsValidLongFilename(filename, allowWildcards, allowRelative)](#isvalidlongfilename_filename_allowwildcards_allowrelative) | Verifies if a filename is a valid long filename. |
| [IsValidShortFilename(filename, allowWildcards)](#isvalidshortfilename_filename_allowwildcards) | Verifies if a filename is a valid short filename. |
| [ScheduleActionSymbol(section, sourceLineNumbers, access, sequence, name, condition, beforeAction, afterAction, overridable)](#scheduleactionsymbol_section_sourcelinenumbers_access_sequence_name_condition_beforeaction_afteraction_overridable) | Schedules an action symbol. |
| [UnexpectedAttribute(element, attribute)](#unexpectedattribute_element_attribute) | Called when the compiler encounters an unexpected attribute. |
| [UnexpectedElement(parentElement, childElement)](#unexpectedelement_parentelement_childelement) | Called when the compiler encounters an unexpected child element. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## ContainsProperty(possibleProperty) Method {#containsproperty_possibleproperty}
Checks if the string contains a property (i.e. "foo[Property]bar")
### Declaration
```cs
public bool ContainsProperty(
  string possibleProperty
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| possibleProperty | string | String to evaluate for properties. |
### Return value
`bool` True if a property is found in the string.
## CreateComplexReference(section, sourceLineNumbers, parentType, parentId, parentLanguage, childType, childId, isPrimary) Method {#createcomplexreference_section_sourcelinenumbers_parenttype_parentid_parentlanguage_childtype_childid_isprimary}
Creates WixComplexReference and WixGroup symbols in the active section.
### Declaration
```cs
public void CreateComplexReference(
  WixToolset.Data.IntermediateSection section,
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  WixToolset.Data.ComplexReferenceParentType parentType,
  string parentId,
  string parentLanguage,
  WixToolset.Data.ComplexReferenceChildType childType,
  string childId,
  bool isPrimary
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| section | WixToolset.Data.IntermediateSection | Section to create the reference in. |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line information. |
| parentType | WixToolset.Data.ComplexReferenceParentType | The parent type. |
| parentId | string | The parent id. |
| parentLanguage | string | The parent language. |
| childType | WixToolset.Data.ComplexReferenceChildType | The child type. |
| childId | string | The child id. |
| isPrimary | bool | Whether the child is primary. |
## CreateCustomActionReference(sourceLineNumbers, section, customAction, platform, supportedPlatforms) Method {#createcustomactionreference_sourcelinenumbers_section_customaction_platform_supportedplatforms}
Create a reference in the specified section for a custom action specialized for specific platforms, given standard prefixes for naming and suffixes for platforms.
### Declaration
```cs
public void CreateCustomActionReference(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  WixToolset.Data.IntermediateSection section,
  string customAction,
  WixToolset.Data.Platform platform,
  WixToolset.Extensibility.Data.CustomActionPlatforms supportedPlatforms
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line information. |
| section | WixToolset.Data.IntermediateSection | Section to create the reference in. |
| customAction | string | The custom action base name. |
| platform | WixToolset.Data.Platform | The platform being compiled. |
| supportedPlatforms | WixToolset.Extensibility.Data.CustomActionPlatforms | The platforms for which there are specialized custom actions. |
## CreateDirectorySymbol(section, sourceLineNumbers, id, parentId, name, shortName, sourceName, shortSourceName) Method {#createdirectorysymbol_section_sourcelinenumbers_id_parentid_name_shortname_sourcename_shortsourcename}
Creates a directory row from a name.
### Declaration
```cs
public WixToolset.Data.Identifier CreateDirectorySymbol(
  WixToolset.Data.IntermediateSection section,
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  WixToolset.Data.Identifier id,
  string parentId,
  string name,
  string shortName,
  string sourceName,
  string shortSourceName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| section | WixToolset.Data.IntermediateSection | Section to add the new symbol to. |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line information. |
| id | WixToolset.Data.Identifier | Optional identifier for the new row. |
| parentId | string | Optional identifier for the parent row. |
| name | string | Long name of the directory. |
| shortName | string | Optional short name of the directory. |
| sourceName | string | Optional source name for the directory. |
| shortSourceName | string | Optional short source name for the directory. |
### Return value
`WixToolset.Data.Identifier` Identifier for the newly created row.
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
## CreateIdentifier(prefix, args) Method {#createidentifier_prefix_args}
Create an identifier by hashing data from the row.
### Declaration
```cs
public WixToolset.Data.Identifier CreateIdentifier(
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
`WixToolset.Data.Identifier` The new identifier.
## CreateIdentifierFromFilename(filename) Method {#createidentifierfromfilename_filename}
Create an identifier based on passed file name
### Declaration
```cs
public WixToolset.Data.Identifier CreateIdentifierFromFilename(
  string filename
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| filename | string | File name to generate identifier from |
### Return value
`WixToolset.Data.Identifier` The new identifier.
## CreateIdentifierValueFromPlatform(name, currentPlatform, supportedPlatforms) Method {#createidentifiervaluefromplatform_name_currentplatform_supportedplatforms}
Append a suffix to the given name based on the current platform. If the current platform is not in the supported platforms, then it returns null.
### Declaration
```cs
public string CreateIdentifierValueFromPlatform(
  string name,
  WixToolset.Data.Platform currentPlatform,
  WixToolset.Extensibility.Data.BurnPlatforms supportedPlatforms
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | string | The base name for the identifier. |
| currentPlatform | WixToolset.Data.Platform | The platform being compiled. |
| supportedPlatforms | WixToolset.Extensibility.Data.BurnPlatforms | The platforms for which there are specialized implementations. |
### Return value
`string` The generated identifier value, or null if the current platform isn't supported.
## CreateRegistrySymbol(section, sourceLineNumbers, root, key, name, value, componentId, valueType, valueAction) Method {#createregistrysymbol_section_sourcelinenumbers_root_key_name_value_componentid_valuetype_valueaction}
Creates a Registry symbol in the active section.
### Declaration
```cs
public WixToolset.Data.Identifier CreateRegistrySymbol(
  WixToolset.Data.IntermediateSection section,
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  WixToolset.Data.Symbols.RegistryRootType root,
  string key,
  string name,
  string value,
  string componentId,
  WixToolset.Data.Symbols.RegistryValueType valueType,
  WixToolset.Data.Symbols.RegistryValueActionType valueAction
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| section | WixToolset.Data.IntermediateSection | Active section. |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source and line number of the current symbol. |
| root | WixToolset.Data.Symbols.RegistryRootType | The registry entry root. |
| key | string | The registry entry key. |
| name | string | The registry entry name. |
| value | string | The registry entry value. |
| componentId | string | The component which will control installation/uninstallation of the registry entry. |
| valueType | WixToolset.Data.Symbols.RegistryValueType | The registry value type. Default is string. |
| valueAction | WixToolset.Data.Symbols.RegistryValueActionType | The way to apply the registry value. Default is write. |
## CreateRegistrySymbol(section, sourceLineNumbers, root, key, name, value, componentId) Method {#createregistrysymbol_section_sourcelinenumbers_root_key_name_value_componentid}
Creates a numeric Registry symbol in the active section.
### Declaration
```cs
public WixToolset.Data.Identifier CreateRegistrySymbol(
  WixToolset.Data.IntermediateSection section,
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  WixToolset.Data.Symbols.RegistryRootType root,
  string key,
  string name,
  int value,
  string componentId
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| section | WixToolset.Data.IntermediateSection | Active section. |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source and line number of the current symbol. |
| root | WixToolset.Data.Symbols.RegistryRootType | The registry entry root. |
| key | string | The registry entry key. |
| name | string | The registry entry name. |
| value | int | The numeric registry entry value. |
| componentId | string | The component which will control installation/uninstallation of the registry entry. |
## CreateSimpleReference(section, sourceLineNumbers, symbolName, primaryKey) Method {#createsimplereference_section_sourcelinenumbers_symbolname_primarykey}
Create a WixSimpleReference symbol in the active section.
### Declaration
```cs
public void CreateSimpleReference(
  WixToolset.Data.IntermediateSection section,
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  string symbolName,
  string primaryKey
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| section | WixToolset.Data.IntermediateSection | Active section. |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line information for the row. |
| symbolName | string | The symbol name of the simple reference. |
| primaryKey | string | The primary key of the simple reference. |
## CreateSimpleReference(section, sourceLineNumbers, symbolName, primaryKeys) Method {#createsimplereference_section_sourcelinenumbers_symbolname_primarykeys}
Create a WixSimpleReference symbol in the active section.
### Declaration
```cs
public void CreateSimpleReference(
  WixToolset.Data.IntermediateSection section,
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  string symbolName,
  System.String[] primaryKeys
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| section | WixToolset.Data.IntermediateSection | Active section. |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line information for the row. |
| symbolName | string | The symbol name of the simple reference. |
| primaryKeys | System.String[] | The primary keys of the simple reference. |
## CreateSimpleReference(section, sourceLineNumbers, symbolDefinition, primaryKey) Method {#createsimplereference_section_sourcelinenumbers_symboldefinition_primarykey}
Create a WixSimpleReference symbol in the active section.
### Declaration
```cs
public void CreateSimpleReference(
  WixToolset.Data.IntermediateSection section,
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  WixToolset.Data.IntermediateSymbolDefinition symbolDefinition,
  string primaryKey
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| section | WixToolset.Data.IntermediateSection | Active section. |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line information for the row. |
| symbolDefinition | WixToolset.Data.IntermediateSymbolDefinition | The symbol definition of the simple reference. |
| primaryKey | string | The primary key of the simple reference. |
## CreateSimpleReference(section, sourceLineNumbers, symbolDefinition, primaryKeys) Method {#createsimplereference_section_sourcelinenumbers_symboldefinition_primarykeys}
Create a WixSimpleReference symbol in the active section.
### Declaration
```cs
public void CreateSimpleReference(
  WixToolset.Data.IntermediateSection section,
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  WixToolset.Data.IntermediateSymbolDefinition symbolDefinition,
  System.String[] primaryKeys
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| section | WixToolset.Data.IntermediateSection | Active section. |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line information for the row. |
| symbolDefinition | WixToolset.Data.IntermediateSymbolDefinition | The symbol definition of the simple reference. |
| primaryKeys | System.String[] | The primary keys of the simple reference. |
## CreateSymbol(section, sourceLineNumbers, symbolName, identifier) Method {#createsymbol_section_sourcelinenumbers_symbolname_identifier}
Creates a symbol in the section.
### Declaration
```cs
public WixToolset.Data.IntermediateSymbol CreateSymbol(
  WixToolset.Data.IntermediateSection section,
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  string symbolName,
  WixToolset.Data.Identifier identifier
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| section | WixToolset.Data.IntermediateSection | Section to add the new symbol to. |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source and line number of current symbol. |
| symbolName | string | Name of symbol definition. |
| identifier | WixToolset.Data.Identifier | Optional identifier for the symbol. |
### Return value
`WixToolset.Data.IntermediateSymbol` New symbol.
## CreateSymbol(section, sourceLineNumbers, symbolDefinition, identifier) Method {#createsymbol_section_sourcelinenumbers_symboldefinition_identifier}
Creates a symbol in the section.
### Declaration
```cs
public WixToolset.Data.IntermediateSymbol CreateSymbol(
  WixToolset.Data.IntermediateSection section,
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  WixToolset.Data.IntermediateSymbolDefinition symbolDefinition,
  WixToolset.Data.Identifier identifier
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| section | WixToolset.Data.IntermediateSection | Section to add the new symbol to. |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source and line number of current symbol. |
| symbolDefinition | WixToolset.Data.IntermediateSymbolDefinition | Symbol definition to create from. |
| identifier | WixToolset.Data.Identifier | Optional identifier for the symbol. |
### Return value
`WixToolset.Data.IntermediateSymbol` New symbol.
## CreateWixGroupSymbol(section, sourceLineNumbers, parentType, parentId, childType, childId) Method {#createwixgroupsymbol_section_sourcelinenumbers_parenttype_parentid_childtype_childid}
A symbol in the WixGroup table is added for this child node and its parent node.
### Declaration
```cs
public void CreateWixGroupSymbol(
  WixToolset.Data.IntermediateSection section,
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  WixToolset.Data.ComplexReferenceParentType parentType,
  string parentId,
  WixToolset.Data.ComplexReferenceChildType childType,
  string childId
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| section | WixToolset.Data.IntermediateSection | Section to create the reference in. |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line information for the row. |
| parentType | WixToolset.Data.ComplexReferenceParentType | Type of child's complex reference parent. |
| parentId | string | Id of the parenet node. |
| childType | WixToolset.Data.ComplexReferenceChildType | Complex reference type of child |
| childId | string | Id of the Child Node. |
## CreateWixSearchRelationSymbol(section, sourceLineNumbers, id, parentId, attributes) Method {#createwixsearchrelationsymbol_section_sourcelinenumbers_id_parentid_attributes}

### Declaration
```cs
public void CreateWixSearchRelationSymbol(
  WixToolset.Data.IntermediateSection section,
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  WixToolset.Data.Identifier id,
  string parentId,
  int attributes
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| section | WixToolset.Data.IntermediateSection | Section to create the reference in. |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line number for the parent element. |
| id | WixToolset.Data.Identifier | Identifier of the search (key into the WixSearch table) |
| parentId | string | Identifier of the search that comes before (key into the WixSearch table) |
| attributes | int | Further details about the relation between id and parentId. |
## CreateWixSearchSymbol(section, sourceLineNumbers, elementName, id, variable, condition, after, bootstrapperExtensionId) Method {#createwixsearchsymbol_section_sourcelinenumbers_elementname_id_variable_condition_after_bootstrapperextensionid}
Creates a symbol in the WixSearch table.
### Declaration
```cs
public void CreateWixSearchSymbol(
  WixToolset.Data.IntermediateSection section,
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  string elementName,
  WixToolset.Data.Identifier id,
  string variable,
  string condition,
  string after,
  string bootstrapperExtensionId
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| section | WixToolset.Data.IntermediateSection | Section to create the reference in. |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line number for the search element. |
| elementName | string | Name of search element. |
| id | WixToolset.Data.Identifier | Identifier of the search. |
| variable | string | The Burn variable to store the result into. |
| condition | string | A condition to test before evaluating the search. |
| after | string | The search that this one will execute after. |
| bootstrapperExtensionId | string | The id of the bootstrapper extension that handles this search. |
## EnsureTable(section, sourceLineNumbers, tableName) Method {#ensuretable_section_sourcelinenumbers_tablename}
Add the appropriate symbols to make sure that the given table shows up in the resulting output.
### Declaration
```cs
public void EnsureTable(
  WixToolset.Data.IntermediateSection section,
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  string tableName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| section | WixToolset.Data.IntermediateSection | Active section. |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line numbers. |
| tableName | string | Name of the table to ensure existance of. |
## EnsureTable(section, sourceLineNumbers, tableDefinition) Method {#ensuretable_section_sourcelinenumbers_tabledefinition}
Add the appropriate symbols to make sure that the given table shows up in the resulting output.
### Declaration
```cs
public void EnsureTable(
  WixToolset.Data.IntermediateSection section,
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  WixToolset.Data.WindowsInstaller.TableDefinition tableDefinition
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| section | WixToolset.Data.IntermediateSection | Active section. |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line numbers. |
| tableDefinition | WixToolset.Data.WindowsInstaller.TableDefinition | Definition of the table to ensure existance of. |
## GetAttributeBundleVariableNameIdentifier(sourceLineNumbers, attribute) Method {#getattributebundlevariablenameidentifier_sourcelinenumbers_attribute}
Gets a bundle variable name identifier and displays an error for an illegal value.
### Declaration
```cs
public WixToolset.Data.Identifier GetAttributeBundleVariableNameIdentifier(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  System.Xml.Linq.XAttribute attribute
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line information about the owner element. |
| attribute | System.Xml.Linq.XAttribute | The attribute containing the value to get. |
### Return value
`WixToolset.Data.Identifier` The attribute's identifier value or a special value if an error occurred.
## GetAttributeBundleVariableNameValue(sourceLineNumbers, attribute, nameRule) Method {#getattributebundlevariablenamevalue_sourcelinenumbers_attribute_namerule}
Gets a bundle variable name value and displays an error for an illegal value.
### Declaration
```cs
public string GetAttributeBundleVariableNameValue(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  System.Xml.Linq.XAttribute attribute,
  WixToolset.Extensibility.Data.BundleVariableNameRule nameRule
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line information about the owner element. |
| attribute | System.Xml.Linq.XAttribute | The attribute containing the value to get. |
| nameRule | WixToolset.Extensibility.Data.BundleVariableNameRule | A rule for the contents of the value. If the contents do not follow the rule, an error is thrown. |
### Return value
`string` The attribute's value.
## GetAttributeGuidValue(sourceLineNumbers, attribute, generatable, canBeEmpty) Method {#getattributeguidvalue_sourcelinenumbers_attribute_generatable_canbeempty}
Get a guid attribute value and displays an error for an illegal guid value.
### Declaration
```cs
public string GetAttributeGuidValue(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  System.Xml.Linq.XAttribute attribute,
  bool generatable,
  bool canBeEmpty
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line information about the owner element. |
| attribute | System.Xml.Linq.XAttribute | The attribute containing the value to get. |
| generatable | bool | Determines whether the guid can be automatically generated. |
| canBeEmpty | bool | If true, no error is raised on empty value. If false, an error is raised. |
### Return value
`string` The attribute's guid value or a special value if an error occurred.
## GetAttributeIdentifier(sourceLineNumbers, attribute) Method {#getattributeidentifier_sourcelinenumbers_attribute}
Get an identifier attribute value and displays an error for an illegal identifier value.
### Declaration
```cs
public WixToolset.Data.Identifier GetAttributeIdentifier(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  System.Xml.Linq.XAttribute attribute
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line information about the owner element. |
| attribute | System.Xml.Linq.XAttribute | The attribute containing the value to get. |
### Return value
`WixToolset.Data.Identifier` The attribute's identifier value or a special value if an error occurred.
## GetAttributeIdentifierValue(sourceLineNumbers, attribute) Method {#getattributeidentifiervalue_sourcelinenumbers_attribute}
Get an identifier attribute value and displays an error for an illegal identifier value.
### Declaration
```cs
public string GetAttributeIdentifierValue(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  System.Xml.Linq.XAttribute attribute
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line information about the owner element. |
| attribute | System.Xml.Linq.XAttribute | The attribute containing the value to get. |
### Return value
`string` The attribute's identifier value or a special value if an error occurred.
## GetAttributeIntegerValue(sourceLineNumbers, attribute, minimum, maximum) Method {#getattributeintegervalue_sourcelinenumbers_attribute_minimum_maximum}
Get an integer attribute value and displays an error for an illegal integer value.
### Declaration
```cs
public int GetAttributeIntegerValue(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  System.Xml.Linq.XAttribute attribute,
  int minimum,
  int maximum
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line information about the owner element. |
| attribute | System.Xml.Linq.XAttribute | The attribute containing the value to get. |
| minimum | int | The minimum legal value. |
| maximum | int | The maximum legal value. |
### Return value
`int` The attribute's integer value or a special value if an error occurred during conversion.
## GetAttributeLongFilename(sourceLineNumbers, attribute, allowWildcards, allowRelative) Method {#getattributelongfilename_sourcelinenumbers_attribute_allowwildcards_allowrelative}
Gets a long filename value and displays an error for an illegal long filename value.
### Declaration
```cs
public string GetAttributeLongFilename(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  System.Xml.Linq.XAttribute attribute,
  bool allowWildcards,
  bool allowRelative
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line information about the owner element. |
| attribute | System.Xml.Linq.XAttribute | The attribute containing the value to get. |
| allowWildcards | bool | true if wildcards are allowed in the filename. |
| allowRelative | bool | true if relative paths are allowed in the filename. |
### Return value
`string` The attribute's long filename value.
## GetAttributeLongValue(sourceLineNumbers, attribute, minimum, maximum) Method {#getattributelongvalue_sourcelinenumbers_attribute_minimum_maximum}
Get a long integral attribute value and displays an error for an illegal long value.
### Declaration
```cs
public System.Int64 GetAttributeLongValue(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  System.Xml.Linq.XAttribute attribute,
  System.Int64 minimum,
  System.Int64 maximum
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line information about the owner element. |
| attribute | System.Xml.Linq.XAttribute | The attribute containing the value to get. |
| minimum | System.Int64 | The minimum legal value. |
| maximum | System.Int64 | The maximum legal value. |
### Return value
`System.Int64` The attribute's long value or a special value if an error occurred during conversion.
## GetAttributeRegistryRootValue(sourceLineNumbers, attribute, allowHkmu) Method {#getattributeregistryrootvalue_sourcelinenumbers_attribute_allowhkmu}
Gets a RegistryRootType value and displays an error for an illegal value.
### Declaration
```cs
public System.Nullable<WixToolset.Data.Symbols.RegistryRootType> GetAttributeRegistryRootValue(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  System.Xml.Linq.XAttribute attribute,
  bool allowHkmu
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line information about the owner element. |
| attribute | System.Xml.Linq.XAttribute | The attribute containing the value to get. |
| allowHkmu | bool | Whether HKMU is returned as -1 (true), or treated as an error (false). |
### Return value
`System.Nullable<WixToolset.Data.Symbols.RegistryRootType>` The attribute's RegisitryRootType value.
## GetAttributeValue(sourceLineNumbers, attribute, emptyRule) Method {#getattributevalue_sourcelinenumbers_attribute_emptyrule}
Get an attribute value and displays an error if the value is empty by default.
### Declaration
```cs
public string GetAttributeValue(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  System.Xml.Linq.XAttribute attribute,
  WixToolset.Data.EmptyRule emptyRule
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line information about the owner element. |
| attribute | System.Xml.Linq.XAttribute | The attribute containing the value to get. |
| emptyRule | WixToolset.Data.EmptyRule | A rule for the contents of the value. If the contents do not follow the rule, an error is thrown. |
### Return value
`string` The attribute's value.
## GetAttributeVersionValue(sourceLineNumbers, attribute) Method {#getattributeversionvalue_sourcelinenumbers_attribute}
Gets a version value or possibly a binder variable and displays an error for an illegal version value.
### Declaration
```cs
public string GetAttributeVersionValue(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  System.Xml.Linq.XAttribute attribute
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line information about the owner element. |
| attribute | System.Xml.Linq.XAttribute | The attribute containing the value to get. |
### Return value
`string` The attribute's version value.
## GetAttributeYesNoDefaultValue(sourceLineNumbers, attribute) Method {#getattributeyesnodefaultvalue_sourcelinenumbers_attribute}
Gets a yes/no/default value and displays an error for an illegal yes/no/default value.
### Declaration
```cs
public WixToolset.Data.YesNoDefaultType GetAttributeYesNoDefaultValue(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  System.Xml.Linq.XAttribute attribute
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line information about the owner element. |
| attribute | System.Xml.Linq.XAttribute | The attribute containing the value to get. |
### Return value
`WixToolset.Data.YesNoDefaultType` The attribute's YesNoType value.
## GetAttributeYesNoValue(sourceLineNumbers, attribute) Method {#getattributeyesnovalue_sourcelinenumbers_attribute}
Gets a yes/no value and displays an error for an illegal yes/no value.
### Declaration
```cs
public WixToolset.Data.YesNoType GetAttributeYesNoValue(
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  System.Xml.Linq.XAttribute attribute
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line information about the owner element. |
| attribute | System.Xml.Linq.XAttribute | The attribute containing the value to get. |
### Return value
`WixToolset.Data.YesNoType` The attribute's YesNoType value.
## GetConditionInnerText(node) Method {#getconditioninnertext_node}
Gets node's inner text and ensure's it is safe for use in a condition by trimming any extra whitespace.
### Declaration
```cs
public string GetConditionInnerText(
  System.Xml.Linq.XElement node
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| node | System.Xml.Linq.XElement | The node to ensure inner text is a condition. |
### Return value
`string` The value converted into a safe condition.
## GetSourceLineNumbers(element) Method {#getsourcelinenumbers_element}
Gets a source line number for an element.
### Declaration
```cs
public WixToolset.Data.SourceLineNumber GetSourceLineNumbers(
  System.Xml.Linq.XElement element
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| element | System.Xml.Linq.XElement | Element to get source line number. |
### Return value
`WixToolset.Data.SourceLineNumber` Source line number.
## GetTrimmedInnerText(element) Method {#gettrimmedinnertext_element}
Get an element's inner text and trims any extra whitespace.
### Declaration
```cs
public string GetTrimmedInnerText(
  System.Xml.Linq.XElement element
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| element | System.Xml.Linq.XElement | The element with inner text to be trimmed. |
### Return value
`string` The node's inner text trimmed.
## InnerTextDisallowed(element) Method {#innertextdisallowed_element}
Validates that the element does not contain inner text.
### Declaration
```cs
public void InnerTextDisallowed(
  System.Xml.Linq.XElement element
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| element | System.Xml.Linq.XElement | Element to check for inner text. |
## InnerTextDisallowed(element, attributeName) Method {#innertextdisallowed_element_attributename}
Validates that the element does not contain inner text and suggests which attribute to use instead.
### Declaration
```cs
public void InnerTextDisallowed(
  System.Xml.Linq.XElement element,
  string attributeName
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| element | System.Xml.Linq.XElement | Element to check for inner text. |
| attributeName | string | Name of attribute to use instead of inner text. |
## IsValidIdentifier(value) Method {#isvalididentifier_value}
Verifies that a value is a legal identifier.
### Declaration
```cs
public bool IsValidIdentifier(
  string value
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| value | string | The value to verify. |
### Return value
`bool` true if the value is an identifier; false otherwise.
## IsValidLocIdentifier(identifier) Method {#isvalidlocidentifier_identifier}
Verifies if an identifier is a valid loc identifier.
### Declaration
```cs
public bool IsValidLocIdentifier(
  string identifier
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| identifier | string | Identifier to verify. |
### Return value
`bool` True if the identifier is a valid loc identifier.
## IsValidLongFilename(filename, allowWildcards, allowRelative) Method {#isvalidlongfilename_filename_allowwildcards_allowrelative}
Verifies if a filename is a valid long filename.
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
| filename | string | Filename to verify. |
| allowWildcards | bool | true if wildcards are allowed in the filename. |
| allowRelative | bool | true if relative paths are allowed in the filename. |
### Return value
`bool` True if the filename is a valid long filename
## IsValidShortFilename(filename, allowWildcards) Method {#isvalidshortfilename_filename_allowwildcards}
Verifies if a filename is a valid short filename.
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
| filename | string | Filename to verify. |
| allowWildcards | bool | Indicates whether wildcards are allowed in the filename. |
### Return value
`bool` True if the filename is a valid short filename
## ScheduleActionSymbol(section, sourceLineNumbers, access, sequence, name, condition, beforeAction, afterAction, overridable) Method {#scheduleactionsymbol_section_sourcelinenumbers_access_sequence_name_condition_beforeaction_afteraction_overridable}
Schedules an action symbol.
### Declaration
```cs
public WixToolset.Data.Symbols.WixActionSymbol ScheduleActionSymbol(
  WixToolset.Data.IntermediateSection section,
  WixToolset.Data.SourceLineNumber sourceLineNumbers,
  WixToolset.Data.AccessModifier access,
  WixToolset.Data.Symbols.SequenceTable sequence,
  string name,
  string condition,
  string beforeAction,
  string afterAction,
  bool overridable
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| section | WixToolset.Data.IntermediateSection | Section to add the symbol to. |
| sourceLineNumbers | WixToolset.Data.SourceLineNumber | Source line information about the owner element. |
| access | WixToolset.Data.AccessModifier | Access modifier for the scheduled action. |
| sequence | WixToolset.Data.Symbols.SequenceTable | Sequence to add the action to. |
| name | string | Name of action. |
| condition | string | Optional condition of action. |
| beforeAction | string | Optional action to schedule before. |
| afterAction | string | Option action to schedule after. |
| overridable | bool | Optional overridable flag. |
## UnexpectedAttribute(element, attribute) Method {#unexpectedattribute_element_attribute}
Called when the compiler encounters an unexpected attribute.
### Declaration
```cs
public void UnexpectedAttribute(
  System.Xml.Linq.XElement element,
  System.Xml.Linq.XAttribute attribute
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| element | System.Xml.Linq.XElement | Parent element that found unexpected attribute. |
| attribute | System.Xml.Linq.XAttribute | Unexpected attribute. |
## UnexpectedElement(parentElement, childElement) Method {#unexpectedelement_parentelement_childelement}
Called when the compiler encounters an unexpected child element.
### Declaration
```cs
public void UnexpectedElement(
  System.Xml.Linq.XElement parentElement,
  System.Xml.Linq.XElement childElement
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| parentElement | System.Xml.Linq.XElement | Parent element that found unexpected child. |
| childElement | System.Xml.Linq.XElement | Unexpected child element. |
