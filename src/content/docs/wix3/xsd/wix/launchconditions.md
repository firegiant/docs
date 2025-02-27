---
title: LaunchConditions Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>Queries the LaunchCondition table and evaluates each conditional statement recorded there.  If any of these conditional statements fail, an error message is displayed to the user and the installation is terminated.  The LaunchConditions action is optional.  This action is normally the first in the sequence, but the AppSearch Action may be sequenced before the LaunchConditions action.  If there are launch conditions that do not apply to all installation modes, the appropriate installation mode property should be used in a conditional expression in the appropriate sequence table.  The condition for this action may be specified in the element's inner text.</dd>
  <dt>Windows Installer references</dt>
  <dd>
    <a href="http://msdn.microsoft.com/library/aa369751.aspx" target="_blank">LaunchConditions Action</a>
  </dd>
  <dt>Parents</dt>
  <dd>
    <a href="../adminexecutesequence/">AdminExecuteSequence</a>, <a href="../adminuisequence/">AdminUISequence</a>, <a href="../installexecutesequence/">InstallExecuteSequence</a>, <a href="../installuisequence/">InstallUISequence</a></dd>
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
    <a href="../">Wix Schema</a>, <a href="../condition/">Condition</a></dd>
</dl>
