---
title: PatchFamilyGroup Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>         Groups together multiple patch families to be used in other locations.       </dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../fragment/">Fragment</a>, <a href="../patch/">Patch</a></dd>
  <dt>Inner Text</dt>
  <dd>None</dd>
  <dt>Children</dt>
  <dd>Choice of elements (min: 0, max: unbounded)<ul><li><a href="../patchfamily/">PatchFamily</a> (min: 0, max: unbounded)</li><li><a href="../patchfamilygroupref/">PatchFamilyGroupRef</a> (min: 0, max: unbounded)</li><li><a href="../patchfamilyref/">PatchFamilyRef</a> (min: 0, max: unbounded)</li><li><span class="extension">Any Element (namespace='##other' processContents='Lax')                Extensibility point in the WiX XML Schema.  Schema extensions can register additional               elements at this point in the schema.             </span></li></ul></dd>
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
        <td>Identifier for the PatchFamilyGroup.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td colspan="4">
          <span class="extension">Any Attribute (namespace='##other' processContents='lax')              Extensibility point in the WiX XML Schema.  Schema extensions can register additional             attributes at this point in the schema.         </span>
        </td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>, <a href="../patchfamilygroupref/">PatchFamilyGroupRef</a></dd>
</dl>
