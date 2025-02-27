---
title: Driver Element (Difxapp Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>                 Installs a driver. To use this element, you need to reference the WixDifxAppExtension extension and add the                  .wixlib appropriate for the target platform (difxapp_x86.wixlib or difxapp_x64.wixlib)                  to your project.             </dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../wix/component/">Component</a>
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
        <td>AddRemovePrograms</td>
        <td><a href="../simple_type_yesnotype">YesNoType</a></td>
        <td>                         Specifies that the DIFxApp CustomActions should add an entry in the Add/Remove Programs Control                         Panel applet.  The default is 'yes'.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>DeleteFiles</td>
        <td><a href="../simple_type_yesnotype">YesNoType</a></td>
        <td>                         If set to "yes", configures DIFxApp to delete binary files that were copied to the system from the driver                         store when a driver package was installed. If this attribute is set to "no" or not present, DIFxApp does not                         remove these files from a system. Note that configuring DIFxApp to delete these files is controlled by the                         Flags entry value of the component that represents the driver package in the MsiDriverPackages custom table.                         Setting DeleteFiles to "yes" sets the corresponding bit in the Flags entry value. Setting DeleteFiles to "no"                         clears the corresponding bit in the Flags entry value. If this attribute is not present, DIFxApp uses a                         default value of "no".                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ForceInstall</td>
        <td><a href="../simple_type_yesnotype">YesNoType</a></td>
        <td>                         Specifies that the DIFxApp CustomActions should force the installation of a new Plug and Play driver                         on a device, even if the currently installed driver on the device is a better match than the new driver.                         Specifying 'no' is an excellent way to ensure the DIFxApp CustomActions recognize the Component contains                         a driver for installation.  The default is null which means the Component does not install a driver via                         DIFxApp CustomActions. See <a href="http://www.microsoft.com/whdc/driver/install/difxtools.mspx">http://www.microsoft.com/whdc/driver/install/difxtools.mspx</a>                         for more information.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Legacy</td>
        <td><a href="../simple_type_yesnotype">YesNoType</a></td>
        <td>                         If set to "yes", configures DIFxApp to install unsigned driver packages and driver packages with missing                         files. For more information, see "Installing Unsigned Driver Packages in Legacy Mode" earlier in this paper.                         If this attribute is set to "no" or not present, DIFxApp will install only signed driver packages. Note                         that configuring DIFxApp to install unsigned drivers is controlled by the Flags entry value of the component                         that represents the driver package in the MsiDriverPackages custom table. Setting Legacy to "yes" sets                         the corresponding bit in the Flags entry value. Setting Legacy to "no" clears the bit in the Flags                         entry value that configures DIFxApp to install unsigned driver packages. If this attribute is not present,                         DIFxApp uses a default value of "no".                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>PlugAndPlayPrompt</td>
        <td><a href="../simple_type_yesnotype">YesNoType</a></td>
        <td>                         Specifies that the DIFxApp CustomActions should prompt the user to connect the Plug and Play                         device if it is not connected.  The default is 'yes'.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Sequence</td>
        <td>Integer</td>
        <td>                         Specifies an optional installation sequence number. DIFxApp CustomActions install the driver packages in                         an installation package in the order of increasing sequence numbers. The same sequence number can be used                         for more than one driver; however, the order in which packages with the same sequence number are actually                         installed cannot be determined.                     </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Difxapp Schema</a>
  </dd>
</dl>
