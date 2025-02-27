---
title: Column Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>Column definition for a Custom Table</dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../customtable/">CustomTable</a>
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
        <td>Identifier for the column.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Category</td>
        <td>Enumeration</td>
        <td>                         Category of this column.                         This attribute must be specified with a value of 'Binary' if the Type attribute's value is 'binary'.                       This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>Text</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>UpperCase</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>LowerCase</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>Integer</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>DoubleInteger</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>TimeDate</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>Identifier</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>Property</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>Filename</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>WildCardFilename</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>Path</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>Paths</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>AnyPath</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>DefaultDir</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>RegPath</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>Formatted</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>FormattedSddl</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>Template</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>Condition</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>Guid</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>Version</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>Language</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>Binary</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>CustomSource</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>Cabinet</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>Shortcut</dfn></dt><dd></dd></dl></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Description</td>
        <td>String</td>
        <td>Description of this column.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>KeyColumn</td>
        <td>Integer</td>
        <td>Column in the table in KeyTable attribute.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>KeyTable</td>
        <td>String</td>
        <td>Table in which this column is an external key. Can be semicolon delimited.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Localizable</td>
        <td><a href="../simple_type_yesnotype/">YesNoType</a></td>
        <td>Whether this column can be localized.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>MaxValue</td>
        <td>Integer</td>
        <td>Maximum value for a numeric value, date or version in this column.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>MinValue</td>
        <td>Integer</td>
        <td>Minimum value for a numeric value, date or version in this column.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Modularize</td>
        <td>Enumeration</td>
        <td>How this column should be modularized, if at all.  This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>None</dfn></dt><dd>                                     Column should not be modularized.  This is the default value.                                 </dd><dt class="enumerationValue"><dfn>Column</dfn></dt><dd>                                     Column should be modularized.                                 </dd><dt class="enumerationValue"><dfn>Condition</dfn></dt><dd>                                     Column is a condition and should be modularized.                                 </dd><dt class="enumerationValue"><dfn>Icon</dfn></dt><dd>                                     When the column is an primary or foreign key to the Icon table it should be modularized special.                                 </dd><dt class="enumerationValue"><dfn>Property</dfn></dt><dd>                                     Any Properties in the column should be modularized.                                 </dd><dt class="enumerationValue"><dfn>SemicolonDelimited</dfn></dt><dd>                                     Semi-colon list of keys, all of which need to be modularized.                                 </dd></dl></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Nullable</td>
        <td><a href="../simple_type_yesnotype/">YesNoType</a></td>
        <td>Whether this column can be left null.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>PrimaryKey</td>
        <td><a href="../simple_type_yesnotype/">YesNoType</a></td>
        <td>Whether this column is a primary key.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Set</td>
        <td>String</td>
        <td>Semicolon delimited list of permissible values.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Type</td>
        <td>Enumeration</td>
        <td>The type of this column.  This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>binary</dfn></dt><dd>                                     Column contains a path to a file that will be inserted into the column as a binary object.                                     If this value is set, the Category attribute must also be set with a value of 'Binary' to pass ICE validation.                                 </dd><dt class="enumerationValue"><dfn>int</dfn></dt><dd>                                     Column contains an integer or datetime value (the MinValue and MaxValue attributes should also be set).                                 </dd><dt class="enumerationValue"><dfn>string</dfn></dt><dd>                                     Column contains a non-localizable string value.                                 </dd></dl></td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Width</td>
        <td>Integer</td>
        <td>Width of this column.</td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>
  </dd>
</dl>
