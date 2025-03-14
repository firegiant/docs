---
title: ProtectRange Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>Specifies part of a file that cannot be overwritten during patching.</dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../externalfile/">ExternalFile</a>, <a href="../protectfile/">ProtectFile</a>, <a href="../targetfile/">TargetFile</a></dd>
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
        <td>Length</td>
        <td>Int</td>
        <td>Length of the range.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Offset</td>
        <td>Int</td>
        <td>Offset of the start of the range.</td>
        <td>Yes</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>
  </dd>
</dl>
