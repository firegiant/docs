---
title: ProgId Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>                 ProgId registration for parent Component.  If ProgId has an associated Class, it must be a child of that element.             </dd>
  <dt>Windows Installer references</dt>
  <dd>
    <a href="http://msdn.microsoft.com/library/aa370879.aspx" target="_blank">ProgId Table</a>, <a href="http://msdn.microsoft.com/library/aa367861.aspx" target="_blank">Class Table</a>, <a href="http://msdn.microsoft.com/library/aa371168.aspx" target="_blank">Registry Table</a>, <a href="http://msdn.microsoft.com/library/aa369210.aspx" target="_blank">Icon Table</a></dd>
  <dt>Parents</dt>
  <dd>
    <a href="../class/">Class</a>, <a href="../component/">Component</a>, <a href="../progid/">ProgId</a></dd>
  <dt>Inner Text</dt>
  <dd>None</dd>
  <dt>Children</dt>
  <dd>Sequence (min: 1, max: 1)<ol><li><a href="../progid/">ProgId</a> (min: 0, max: unbounded): The version-independent ProgId must be the first child element of actual ProgId.  Nesting other ProgId elements within the Version-independent ProgId will create COM+ aliases, see <a href="http://support.microsoft.com/kb/305745">http://support.microsoft.com/kb/305745</a> for more information.</li><li><a href="../extension/">Extension</a> (min: 0, max: unbounded): Extensions that refer to this ProgId</li></ol></dd>
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
        <td>&nbsp;</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Advertise</td>
        <td><a href="../simple_type_yesnotype/">YesNoType</a></td>
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
        <td>Icon</td>
        <td>String</td>
        <td>For an advertised ProgId, the Id of an Icon element. For a non-advertised ProgId, this is the Id of a file containing an icon resource.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>IconIndex</td>
        <td>Integer</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>NoOpen</td>
        <td>String</td>
        <td>Specifies that the associated ProgId should not be opened by users. The value is presented as a warning to users. An empty string is also valid for this attribute.</td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>
  </dd>
</dl>
