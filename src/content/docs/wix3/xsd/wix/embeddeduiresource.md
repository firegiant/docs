---
title: EmbeddedUIResource Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>                 Defines a resource for use by the embedded UI.             </dd>
  <dt>Windows Installer references</dt>
  <dd>
    <a href="http://msdn.microsoft.com/library/bb736317.aspx" target="_blank">MsiEmbeddedUI Table</a>
  </dd>
  <dt>Parents</dt>
  <dd>
    <a href="../embeddedui/">EmbeddedUI</a>
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
        <td>Identifier for the embedded UI resource.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Name</td>
        <td><a href="../simple_type_longfilenametype/">LongFileNameType</a></td>
        <td>                         The name for the resource when it is extracted from the Product for use by the embedded UI DLL. (Windows                         Installer does not support the typical short filename and long filename combination for embedded UI files                         as it does for other kinds of files.) If this attribute is not specified the Id attribute will be used.                     </td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>SourceFile</td>
        <td>String</td>
        <td>Path to the binary file that is the embedded UI resource.</td>
        <td>Yes</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>, <a href="../embeddedui/">EmbeddedUI</a></dd>
</dl>
