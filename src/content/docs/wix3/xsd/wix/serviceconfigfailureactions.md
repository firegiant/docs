---
title: ServiceConfigFailureActions Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>                 Configures the failure actions for a service being installed or one that already exists. This element's functionality is available starting with MSI 5.0.             </dd>
  <dt>Windows Installer references</dt>
  <dd>
    <a href="http://msdn.microsoft.com/en-us/library/dd408037.aspx" target="_blank">MsiServiceConfigFailureActions Table</a>
  </dd>
  <dt>Parents</dt>
  <dd>
    <a href="../component/">Component</a>, <a href="../serviceinstall/">ServiceInstall</a></dd>
  <dt>Inner Text</dt>
  <dd>None</dd>
  <dt>Children</dt>
  <dd>Choice of elements (min: 0, max: unbounded)<ul><li><a href="../failure/">Failure</a> (min: 0, max: unbounded): Ordered list of failure actions to apply to service.</li></ul></dd>
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
        <td>Command</td>
        <td>String</td>
        <td>                     This attribute specifies command to execute when a "runCommand" failure action hit.  If an empty string is provided it clears                     the existing command. If this attribute is not present the setting is not changed.                 </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Id</td>
        <td>String</td>
        <td>                     Unique identifier for this service configuration. This value will default to the ServiceName attribute if not                     specified.                 </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>OnInstall</td>
        <td><a href="../simple_type_yesnotype/">YesNoType</a></td>
        <td>                     Specifies whether to configure the service when the parent Component is installed. This attribute may be combined with OnReinstall                     and OnUninstall.                 </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>OnReinstall</td>
        <td><a href="../simple_type_yesnotype/">YesNoType</a></td>
        <td>                     Specifies whether to configure the service when the parent Component is reinstalled. This attribute may be combined with OnInstall                     and OnUninstall.                 </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>OnUninstall</td>
        <td><a href="../simple_type_yesnotype/">YesNoType</a></td>
        <td>                     Specifies whether to configure the service when the parent Component is uninstalled. This attribute may be combined with OnInstall                     and OnReinstall.                 </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>RebootMessage</td>
        <td>String</td>
        <td>                     Specifies the message to show for a reboot failure action. If an empty string is provided it clears any existing reboot message. If this                     attribute is not present the setting is not changed.                 </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ResetPeriod</td>
        <td>String</td>
        <td>                     Specifies the time in seconds to reset the failure count. If this attribute is not present the failure count will not be reset.                 </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ServiceName</td>
        <td>String</td>
        <td>                     Specifies the name of the service to configure. This value will default to the ServiceInstall/@Name attribute when nested under                     a ServiceInstall element.                 </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>
  </dd>
</dl>
