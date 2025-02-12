---
title: ComPlusPartitionUser Element (Complus Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>         Represents a default partition definition for a user. When         the parent component of this element is installed, the default partition of the         user will be set to the referenced partition.       </dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../complus/compluspartition" class="extension">ComPlusPartition</a>, <a href="../../wix/component/">Component</a></dd>
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
        <td>           Identifier for the element.         </td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Partition</td>
        <td>String</td>
        <td>           The id of a ComPlusPartition element representing the           partition that will be the default partition for the user.         </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>User</td>
        <td>String</td>
        <td>           Foreign key into the User table.         </td>
        <td>Yes</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Complus Schema</a>
  </dd>
</dl>
