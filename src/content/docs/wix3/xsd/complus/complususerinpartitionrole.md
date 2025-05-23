---
title: ComPlusUserInPartitionRole Element (Complus Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>         This element represents a user membership in a partition         role. When the parent component of this element is installed, the user will be         added to the associated partition role.       </dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../complus/compluspartitionrole" class="extension">ComPlusPartitionRole</a>, <a href="../../wix/component/">Component</a></dd>
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
        <td>PartitionRole</td>
        <td>String</td>
        <td>           The id of a ComPlusPartitionRole element representing the           partition the user should be added to.         </td>
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
