---
title: PropertyRef Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>Reference to a Property value.</dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../fragment/">Fragment</a>, <a href="../module/">Module</a>, <a href="../patchfamily/">PatchFamily</a>, <a href="../product/">Product</a>, <a href="../ui/">UI</a></dd>
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
        <td>Identifier of Property to reference.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td colspan="4">
          <span class="extension">Any Attribute (namespace='##other' processContents='lax')                      Extensibility point in the WiX XML Schema.  Schema extensions can register additional                     attributes at this point in the schema.                 </span>
        </td>
      </tr>
    </table>
  </dd>
  <dt>How Tos and Examples</dt>
  <dd>
    <ul>
      <li>
        <a href="../../../howtos/redistributables_and_install_checks/check_for_dotnet">How To: Check for .NET Framework versions</a>
      </li>
    </ul>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>, <a href="../property/">Property</a></dd>
</dl>
