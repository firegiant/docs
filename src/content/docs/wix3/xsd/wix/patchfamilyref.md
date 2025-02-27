---
title: PatchFamilyRef Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>                 This will cause the entire contents of the Fragment containing the referenced PatchFamily to be                 used in the process of creating a patch.             </dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../patch/">Patch</a>, <a href="../patchfamilygroup/">PatchFamilyGroup</a></dd>
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
        <td>The identifier of the PatchFamily to reference.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>ProductCode</td>
        <td><a href="../simple_type_guid/">Guid</a></td>
        <td>Specifies the ProductCode of the product that this family applies to.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td colspan="4">
          <span class="extension">Any Attribute (namespace='##other' processContents='lax')                      Extensibility point in the WiX XML Schema.  Schema extensions can register additional                     attributes at this point in the schema.                 </span>
        </td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>, <a href="../patchfamily/">PatchFamily</a></dd>
</dl>
