---
title: AssemblyName Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>                 The MsiAssemblyName table specifies the schema for the elements of a strong assembly cache name for a .NET Framework or Win32 assembly.                 Consider using the Assembly attribute on File element to have the toolset populate these entries automatically.             </dd>
  <dt>Windows Installer references</dt>
  <dd>
    <a href="http://msdn.microsoft.com/library/aa370062.aspx" target="_blank">MsiAssemblyName Table</a>
  </dd>
  <dt>Parents</dt>
  <dd>
    <a href="../file/">File</a>
  </dd>
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
        <td>Name of the attribute associated with the value specified in the Value column.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Value</td>
        <td>String</td>
        <td>Value associated with the name specified in the Name column.</td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>
  </dd>
</dl>
