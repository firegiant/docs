---
title: MessageQueue Element (Msmq Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>None</dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../wix/component/">Component</a>
  </dd>
  <dt>Inner Text</dt>
  <dd>None</dd>
  <dt>Children</dt>
  <dd>Sequence (min: 1, max: 1)<ol><li><a href="../messagequeuepermission" class="extension">MessageQueuePermission</a> (min: 0, max: unbounded)</li></ol></dd>
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
        <td>Authenticate</td>
        <td><a href="../simple_type_yesnotype">YesNoType</a></td>
        <td>           Default: No.         </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>BasePriority</td>
        <td>Integer</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Journal</td>
        <td><a href="../simple_type_yesnotype">YesNoType</a></td>
        <td>           Default: No.         </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>JournalQuota</td>
        <td>Integer</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Label</td>
        <td>String</td>
        <td>&nbsp;</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>MulticastAddress</td>
        <td>String</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>PathName</td>
        <td>String</td>
        <td>&nbsp;</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>PrivLevel</td>
        <td>Enumeration</td>
        <td>This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>none</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>optional</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>body</dfn></dt><dd></dd></dl></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Quota</td>
        <td>Integer</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ServiceTypeGuid</td>
        <td>String</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Transactional</td>
        <td><a href="../simple_type_yesnotype">YesNoType</a></td>
        <td>           Default: No.         </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Msmq Schema</a>
  </dd>
</dl>
