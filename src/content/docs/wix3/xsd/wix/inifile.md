---
title: IniFile Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>                 Adds or removes .ini file entries.             </dd>
  <dt>Windows Installer references</dt>
  <dd>
    <a href="http://msdn.microsoft.com/library/aa369282.aspx" target="_blank">IniFile Table</a>, <a href="http://msdn.microsoft.com/library/aa371204.aspx" target="_blank">RemoveIniFile Table</a></dd>
  <dt>Parents</dt>
  <dd>
    <a href="../component/">Component</a>
  </dd>
  <dt>Inner Text</dt>
  <dd>None</dd>
  <dt>Children</dt>
  <dd>None</dd>
  <dt>Attributes</dt>
  <dd>
    <table cellspacing="0" cellpadding="0" class="schema">
      <tr>
        <th width="15%">Name</th>
        <th width="15%">Type</th>
        <th width="65%">Description</th>
        <th width="15%">Required</th>
      </tr>
      <tr>
        <td>Id</td>
        <td>String</td>
        <td>Identifier for ini file.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Action</td>
        <td>Enumeration</td>
        <td>The type of modification to be made.  This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>addLine</dfn></dt><dd>Creates or updates an .ini entry.</dd><dt class="enumerationValue"><dfn>addTag</dfn></dt><dd>Creates a new entry or appends a new comma-separated value to an existing entry.</dd><dt class="enumerationValue"><dfn>createLine</dfn></dt><dd>Creates an .ini entry only if the entry does no already exist.</dd><dt class="enumerationValue"><dfn>removeLine</dfn></dt><dd>Removes an .ini entry.</dd><dt class="enumerationValue"><dfn>removeTag</dfn></dt><dd>Removes a tag from an .ini entry.</dd></dl></td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Directory</td>
        <td>String</td>
        <td>Name of a property, the value of which is the full path of the folder containing the .ini file. Can be name of a directory in the Directory table, a property set by the AppSearch table, or any other property representing a full path.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Key</td>
        <td>String</td>
        <td>The localizable .ini file key within the section.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>LongName</td>
        <td><a href="../simple_type_longfilenametype/">LongFileNameType</a></td>
        <td>This attribute has been deprecated; please use the Name attribute instead.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Name</td>
        <td><a href="../simple_type_longfilenametype/">LongFileNameType</a></td>
        <td>                         In prior versions of the WiX toolset, this attribute specified the short name.                         This attribute's value may now be either a short or long name.                         If a short name is specified, the ShortName attribute may not be specified.                         If a long name is specified, the LongName attribute may not be specified.                         Also, if this value is a long name, the ShortName attribute may be omitted to                         allow WiX to attempt to generate a unique short name.                         However, if this name collides with another file or you wish to manually specify                         the short name, then the ShortName attribute may be specified.                     </td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Section</td>
        <td>String</td>
        <td>The localizable .ini file section.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>ShortName</td>
        <td><a href="../simple_type_shortfilenametype/">ShortFileNameType</a></td>
        <td>                         The short name of the in 8.3 format.                         This attribute should only be set if there is a conflict between generated short names                         or the user wants to manually specify the short name.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Value</td>
        <td>String</td>
        <td>                         The localizable value to be written or deleted.  This attribute must be set if                         the Action attribute's value is "addLine", "addTag", or "createLine".                     </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>
  </dd>
</dl>
