---
title: RemoveExistingProducts Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>Goes through the product codes listed in the ActionProperty column of the Upgrade table and removes the products in sequence.  Special actions don't have a built-in sequence number and thus must appear relative to another action.  The suggested way to do this is by using the Before or After attribute.  InstallExecute and InstallExecuteAgain can optionally appear anywhere between InstallInitialize and InstallFinalize.</dd>
  <dt>Windows Installer references</dt>
  <dd>
    <a href="http://msdn.microsoft.com/library/aa371197.aspx" target="_blank">RemoveExistingProducts Action</a>
  </dd>
  <dt>Parents</dt>
  <dd>
    <a href="../installexecutesequence/">InstallExecuteSequence</a>
  </dd>
  <dt>Inner Text (xs:string)</dt>
  <dd>Text node specifies the condition of the action.</dd>
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
        <td>After</td>
        <td>String</td>
        <td>The name of an action that this action should come after.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Before</td>
        <td>String</td>
        <td>The name of an action that this action should come before.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Overridable</td>
        <td><a href="../simple_type_yesnotype/">YesNoType</a></td>
        <td>                             If "yes", the sequencing of this action may be overridden by sequencing elsewhere.                         </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Sequence</td>
        <td>Integer</td>
        <td>A value used to indicate the position of this action in a sequence.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Suppress</td>
        <td><a href="../simple_type_yesnotype/">YesNoType</a></td>
        <td>If yes, this action will not occur.</td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>
  </dd>
</dl>
