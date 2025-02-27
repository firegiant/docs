---
title: WebProperty Element (Iis Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>IIS Properties</dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../wix/component/">Component</a>
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
        <td>Enumeration</td>
        <td>This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>ETagChangeNumber</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>IIs5IsolationMode</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>MaxGlobalBandwidth</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>LogInUTF8</dfn></dt><dd></dd></dl></td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Value</td>
        <td>String</td>
        <td>                         The value to be used for the WebProperty specified in the Id attribute.  See                         the remarks section for information on acceptable values for each Id.                     </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>Remarks</dt>
  <dd>Here is an explanation of the acceptable values for each property and their meaning:                     <ul><li>                             For the Ids IIs5IsolationMode and LogInUTF8, no value should be specified since                             the presence of this property indicates that the setting should be set.                         </li><li>                             For the MaxGlobalBandwidth Id, the value should be specified in kilobytes.  The                             value should be a base 10 number.                         </li><li>                             ETagChangeNumber sets the machine-specific portion of ETag as a number. This value,                             when synchronized across servers in a web farm, allows the web farm to return an                             identical ETag for a given resource regardless of the server that handled the                             request.  The value should be a base 10 number.                         </li></ul></dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Iis Schema</a>
  </dd>
</dl>
