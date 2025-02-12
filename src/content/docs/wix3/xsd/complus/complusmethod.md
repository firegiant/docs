---
title: ComPlusMethod Element (Complus Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>         Represents a method for an interface.       </dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../complus/complusinterface" class="extension">ComPlusInterface</a>
  </dd>
  <dt>Inner Text</dt>
  <dd>None</dd>
  <dt>Children</dt>
  <dd>Sequence (min: 1, max: 1)<ol><li><a href="../../complus/complusroleformethod" class="extension">ComPlusRoleForMethod</a> (min: 0, max: unbounded)</li></ol></dd>
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
        <td>             Identifier for the element.           </td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>AutoComplete</td>
        <td><a href="../../complus/simple_type_yesnotype">YesNoType</a></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Description</td>
        <td>String</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Index</td>
        <td>Int</td>
        <td>             Dispatch id of the method. If this attribute is not set a             value must be provided for the Name attribute.           </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>String</td>
        <td>             Name of the method. If this attribute is not set a value             must be provided for the Index attribute.           </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Complus Schema</a>
  </dd>
</dl>
