---
title: ServiceConfig Element (Util Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>Service configuration information for failure actions.</dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../wix/component/">Component</a>, <a href="../../wix/serviceinstall/">ServiceInstall</a></dd>
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
        <td>FirstFailureActionType</td>
        <td>Enumeration</td>
        <td>Action to take on the first failure of the service.  This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>none</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>reboot</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>restart</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>runCommand</dfn></dt><dd></dd></dl></td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>ProgramCommandLine</td>
        <td>String</td>
        <td>If any of the three *ActionType attributes is "runCommand", this specifies the command to run when doing so.  This value is formatted.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>RebootMessage</td>
        <td>String</td>
        <td>If any of the three *ActionType attributes is "reboot", this specifies the message to broadcast to server users before doing so.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ResetPeriodInDays</td>
        <td>Integer</td>
        <td>Number of days after which to reset the failure count to zero if there are no failures.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>RestartServiceDelayInSeconds</td>
        <td>Integer</td>
        <td>If any of the three *ActionType attributes is "restart", this specifies the number of seconds to wait before doing so.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>SecondFailureActionType</td>
        <td>Enumeration</td>
        <td>Action to take on the second failure of the service.  This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>none</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>reboot</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>restart</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>runCommand</dfn></dt><dd></dd></dl></td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>ServiceName</td>
        <td>String</td>
        <td>Required if not under a ServiceInstall element.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ThirdFailureActionType</td>
        <td>Enumeration</td>
        <td>Action to take on the third failure of the service.  This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>none</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>reboot</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>restart</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>runCommand</dfn></dt><dd></dd></dl></td>
        <td>Yes</td>
      </tr>
    </table>
  </dd>
  <dt>Remarks</dt>
  <dd><dl><dd>Nesting a ServiceConfig element under a ServiceInstall element will result in the service being installed to be configured.</dd><dd>Nesting a ServiceConfig element under a component element will result in an already installed service to be configured.  If the service does not exist prior to the install of the MSI package, the install will fail.</dd></dl></dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Util Schema</a>
  </dd>
</dl>
