---
title: FileTypeMask Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>FileType data for class Id registration.</dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../class/">Class</a>
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
        <td>Mask</td>
        <td><a href="../simple_type_hextype/">HexType</a></td>
        <td>Hex value that is AND'd against the bytes in the file at Offset.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Offset</td>
        <td>Integer</td>
        <td>Offset into file. If positive, offset is from the beginning; if negative, offset is from the end.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Value</td>
        <td><a href="../simple_type_hextype/">HexType</a></td>
        <td>If the result of the AND'ing of Mask with the bytes in the file is Value, the file is a match for this File Type.</td>
        <td>Yes</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>
  </dd>
</dl>
