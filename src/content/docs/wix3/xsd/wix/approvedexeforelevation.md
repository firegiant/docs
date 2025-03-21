---
title: ApprovedExeForElevation Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>Provides information about an .exe so that the BA can request the engine to run it elevated from any secure location.</dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../wix/bundle/">Bundle</a>
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
        <td>The identifier of the ApprovedExeForElevation element.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Key</td>
        <td>String</td>
        <td>             The key path.             For security purposes, the root key will be HKLM and Variables are not supported.           </td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Value</td>
        <td>String</td>
        <td>             The value name.             For security purposes, Variables are not supported.           </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Win64</td>
        <td><a href="../simple_type_yesnotype/">YesNoType</a></td>
        <td>             Instructs the search to look in the 64-bit registry when the value is 'yes'.             When the value is 'no', the search looks in the 32-bit registry.             The default value is 'no'.           </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>
  </dd>
</dl>
