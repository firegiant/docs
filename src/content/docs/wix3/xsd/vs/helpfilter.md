---
title: HelpFilter Element (Vs Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>                 Filter for Help Namespace.             </dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../wix/fragment/">Fragment</a>, <a href="../../wix/module/">Module</a>, <a href="../../wix/product/">Product</a></dd>
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
        <td>Primary Key for HelpFilter.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>FilterDefinition</td>
        <td>String</td>
        <td>Query String for Help Filter.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>String</td>
        <td>Friendly name for Filter.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>SuppressCustomActions</td>
        <td><a href="../../vs/simple_type_yesnotype">YesNoType</a></td>
        <td>Suppress linking Help registration custom actions.  Help redistributable merge modules will be required.  Use this when building a merge module.</td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Vs Schema</a>
  </dd>
</dl>
