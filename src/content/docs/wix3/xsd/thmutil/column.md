---
title: Column Element (Thmutil Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>A column of a list.</dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../listview" class="extension">ListView</a>
  </dd>
  <dt>Inner Text (xs:string)</dt>
  <dd>Text for the column header.</dd>
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
        <td>Expands</td>
        <td><a href="../simple_type_yesnotype">YesNoType</a></td>
        <td>Whether or not this column can grow to fill available width of the listview.                                 More than one column can be marked with yes - all expandable columns will share available extra space.                                 This is especially useful if the Window/@AutoResize is yes.                             </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Width</td>
        <td>Int</td>
        <td>Width of the column.</td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Thmutil Schema</a>
  </dd>
</dl>
