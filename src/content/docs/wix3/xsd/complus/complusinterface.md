---
title: ComPlusInterface Element (Complus Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>       Represents an interface for a COM+ component.     </dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../complus/compluscomponent" class="extension">ComPlusComponent</a>
  </dd>
  <dt>Inner Text</dt>
  <dd>None</dd>
  <dt>Children</dt>
  <dd>Sequence (min: 1, max: 1)<ol><li>Choice of elements (min: 0, max: unbounded)<ul><li><a href="../../complus/complusmethod" class="extension">ComPlusMethod</a> (min: 0, max: unbounded)</li><li><a href="../../complus/complusroleforinterface" class="extension">ComPlusRoleForInterface</a> (min: 0, max: unbounded)</li></ul></li></ol></dd>
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
        <td>Description</td>
        <td>String</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>IID</td>
        <td><a href="../../complus/simple_type_uuid">Uuid</a></td>
        <td>           IID of the interface.         </td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>QueuingEnabled</td>
        <td><a href="../../complus/simple_type_yesnotype">YesNoType</a></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Complus Schema</a>
  </dd>
</dl>
