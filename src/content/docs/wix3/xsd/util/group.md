---
title: Group Element (Util Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>                 Finds user groups on the local machine or specified Active Directory domain. The local machine will be                 searched for the group first then fallback to looking in Active Directory. This element is not capable                 of creating new groups but can be used to add new or existing users to an existing group.             </dd>
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
        <td>Unique identifier in your installation package for this group.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Domain</td>
        <td>String</td>
        <td>An optional <a href="http://msdn.microsoft.com/library/aa368609.aspx" target="_blank">Formatted</a> string that specifies the domain for the group.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>String</td>
        <td>A <a href="http://msdn.microsoft.com/library/aa368609.aspx" target="_blank">Formatted</a> string that contains the name of the group to be found.</td>
        <td>Yes</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Util Schema</a>
  </dd>
</dl>
