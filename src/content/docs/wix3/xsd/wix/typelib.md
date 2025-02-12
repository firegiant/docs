---
title: TypeLib Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>                 Register a type library (TypeLib).  Please note that in order to properly use this                 non-advertised, you will need use this element with Advertise='no' and also author the                 appropriate child Interface elements by extracting them from the type library itself.             </dd>
  <dt>Windows Installer references</dt>
  <dd>
    <a href="http://msdn.microsoft.com/library/aa372092.aspx" target="_blank">TypeLib Table</a>, <a href="http://msdn.microsoft.com/library/aa371168.aspx" target="_blank">Registry Table</a></dd>
  <dt>Parents</dt>
  <dd>
    <a href="../component/">Component</a>, <a href="../file/">File</a></dd>
  <dt>Inner Text</dt>
  <dd>None</dd>
  <dt>Children</dt>
  <dd>Choice of elements (min: 0, max: unbounded)<ul><li><a href="../appid/">AppId</a> (min: 0, max: unbounded)</li><li><a href="../class/">Class</a> (min: 0, max: unbounded)</li><li><a href="../interface/">Interface</a> (min: 0, max: unbounded)</li></ul></dd>
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
        <td><a href="../simple_type_guid/">Guid</a></td>
        <td>The GUID that identifes the type library.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Advertise</td>
        <td><a href="../simple_type_yesnotype/">YesNoType</a></td>
        <td>                     Value of 'yes' will create a row in the TypeLib table.                     Value of 'no' will create rows in the Registry table.                     The default value is 'no'.                 </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Control</td>
        <td><a href="../simple_type_yesnotype/">YesNoType</a></td>
        <td>                     Value of 'yes' means the type library describes controls, and should not be displayed in type browsers intended for nonvisual objects.                     This attribute can only be set if Advertise='no'.                 </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Cost</td>
        <td>Int</td>
        <td>                     The cost associated with the registration of the type library in bytes.  This attribute cannot be set if Advertise='no'.                 </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Description</td>
        <td>String</td>
        <td>The localizable description of the type library.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>HasDiskImage</td>
        <td><a href="../simple_type_yesnotype/">YesNoType</a></td>
        <td>                     Value of 'yes' means the type library exists in a persisted form on disk.  This attribute can only be set if Advertise='no'.                 </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>HelpDirectory</td>
        <td>String</td>
        <td>The identifier of the Directory element for the help directory.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Hidden</td>
        <td><a href="../simple_type_yesnotype/">YesNoType</a></td>
        <td>                     Value of 'yes' means the type library should not be displayed to users, although its use is not restricted.                     Should be used by controls.  Hosts should create a new type library that wraps the control with extended properties.                     This attribute can only be set if Advertise='no'.                 </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Language</td>
        <td>Integer</td>
        <td>The language of the type library.  This must be a non-negative integer.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>MajorVersion</td>
        <td>Integer</td>
        <td>The major version of the type library.  The value should be an integer from 0 - 255.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>MinorVersion</td>
        <td>Integer</td>
        <td>The minor version of the type library.  The value should be an integer from 0 - 255.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ResourceId</td>
        <td>Integer</td>
        <td>The resource id of a typelib.  The value is appended to the end of the typelib path in the registry.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Restricted</td>
        <td><a href="../simple_type_yesnotype/">YesNoType</a></td>
        <td>                     Value of 'yes' means the type library is restricted, and should not be displayed to users.  This attribute can only be set if Advertise='no'.                 </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>
  </dd>
</dl>
