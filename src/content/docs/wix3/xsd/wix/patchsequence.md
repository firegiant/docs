---
title: PatchSequence Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>Sequence information for this patch database. Sequence information is generated automatically in most cases, and rarely needs to be set explicitly.</dd>
  <dt>Windows Installer references</dt>
  <dd>
    <a href="http://msdn.microsoft.com/library/aa370350.aspx" target="_blank">MsiPatchSequence Table</a>
  </dd>
  <dt>Parents</dt>
  <dd>
    <a href="../patchcreation/">PatchCreation</a>
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
        <td>PatchFamily</td>
        <td>String</td>
        <td>Identifier which indicates a sequence family to which this patch belongs.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>ProductCode</td>
        <td><a href="../simple_type_guid/">Guid</a></td>
        <td>                         Specifies the ProductCode of the product that this family applies to.                         This attribute cannot the specified if the TargetImage attribute is specified.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Sequence</td>
        <td>String</td>
        <td>Used to populate the sequence column of the MsiPatchSequence table in the final MSP file. Specified in x.x.x.x format. See documentation for Sequence column of MsiPatchSequence table in MSI SDK.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Supersede</td>
        <td><a href="../simple_type_yesnotype/">YesNoType</a></td>
        <td>                         Set this value to 'yes' to indicate that this patch will supersede all previous patches in this patch family.                         The default value is 'no'.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Target</td>
        <td>String</td>
        <td>This attribute has been deprecated; please use the TargetImage attribute instead.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>TargetImage</td>
        <td>String</td>
        <td>                         Specifies the TargetImage that this family applies to.                         This attribute cannot the specified if the ProductCode attribute is specified.                     </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>
  </dd>
</dl>
