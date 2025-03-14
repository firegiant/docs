---
title: ComPlusApplicationRole Element (Complus Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>         Defines an application role. If this element is a descendent         of a Component element, the application role will be created in association         with this component. If the element is a child of any of the Fragment, Module         or Product elements it is considered to be a locater, referencing an existing         application role.       </dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../complus/complusapplication" class="extension">ComPlusApplication</a>, <a href="../../wix/component/">Component</a>, <a href="../../wix/fragment/">Fragment</a>, <a href="../../wix/module/">Module</a>, <a href="../../wix/product/">Product</a></dd>
  <dt>Inner Text</dt>
  <dd>None</dd>
  <dt>Children</dt>
  <dd>Sequence (min: 1, max: 1)<ol><li>Choice of elements (min: 0, max: unbounded)<ul><li><a href="../../complus/complusgroupinapplicationrole" class="extension">ComPlusGroupInApplicationRole</a> (min: 0, max: unbounded)</li><li><a href="../../complus/complususerinapplicationrole" class="extension">ComPlusUserInApplicationRole</a> (min: 0, max: unbounded)</li></ul></li></ol></dd>
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
        <td>Application</td>
        <td>String</td>
        <td>           If the element is not a child of a ComPlusApplication           element, this attribute should be provided with the id of a           ComPlusApplication element representing the application the role belongs to.         </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Description</td>
        <td>String</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>String</td>
        <td>           Name of the application role.         </td>
        <td>Yes</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Complus Schema</a>
  </dd>
</dl>
