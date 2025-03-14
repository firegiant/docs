---
title: MajorUpgrade Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>                 Simplifies authoring for major upgrades, including support for preventing downgrades.<br/><br/>                The parent Product element must have valid UpgradeCode and Version attributes.<br/><br/>                When the FindRelatedProducts action detects a related product installed on the system,                 it appends the product code to the property named WIX_UPGRADE_DETECTED. After the                 FindRelatedProducts action is run, the value of the WIX_UPGRADE_DETECTED property is a                 list of product codes, separated by semicolons (;), detected on the system.             </dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../product/">Product</a>
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
        <td>AllowDowngrades</td>
        <td><a href="../simple_type_yesnotype/">YesNoType</a></td>
        <td>                     When set to no (the default), products with lower version numbers are blocked from                     installing when a product with a higher version is installed; the DowngradeErrorMessage                     attribute must also be specified.<br/><br/>                    When set to yes, any version can be installed over any other version.                 </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>AllowSameVersionUpgrades</td>
        <td><a href="../simple_type_yesnotype/">YesNoType</a></td>
        <td>                     When set to no (the default), installing a product with the same version and upgrade code                     (but different product code) is allowed and treated by MSI as two products. When set to yes,                     WiX sets the msidbUpgradeAttributesVersionMaxInclusive attribute, which tells MSI to treat                     a product with the same version as a major upgrade.<br/><br/>                    This is useful when two product versions differ only in the fourth version field. MSI                     specifically ignores that field when comparing product versions, so two products that                     differ only in the fourth version field are the same product and need this attribute set to                     yes to be detected.<br/><br/>                    Note that because MSI ignores the fourth product version field, setting this attribute to                     yes also allows downgrades when the first three product version fields are identical.                     For example, product version 1.0.0.1 will "upgrade" 1.0.0.2998 because they're seen as the                     same version (1.0.0). That could reintroduce serious bugs so the safest choice is to change                     the first three version fields and omit this attribute to get the default of no.<br/><br/>                    This attribute cannot be "yes" when AllowDowngrades is also "yes" -- AllowDowngrades                     already allows two products with the same version number to upgrade each other.                 </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Disallow</td>
        <td><a href="../simple_type_yesnotype/">YesNoType</a></td>
        <td>                       When set to yes, products with higer version numbers are blocked from                       installing when a product with a lower version is installed; the UpgradeErrorMessage                       attribute must also be specified.<br/><br/>                      When set to no (the default), any version can be installed over any lower version.                   </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>DisallowUpgradeErrorMessage</td>
        <td>String</td>
        <td>                   The message displayed if users try to install a product with a higer version number                   when a product with a lower version is installed. Used only when Disallow                   is yes.               </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>DowngradeErrorMessage</td>
        <td>String</td>
        <td>                         The message displayed if users try to install a product with a lower version number                         when a product with a higher version is installed. Used only when AllowDowngrades                         is no (the default).           </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>IgnoreRemoveFailure</td>
        <td><a href="../simple_type_yesnotype/">YesNoType</a></td>
        <td>                         When set to yes, failures removing the installed product during the upgrade will be                         ignored.<br/><br/>                        When set to no (the default), failures removing the installed product during the upgrade                         will be considered a failure and, depending on the scheduling, roll back the upgrade.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>MigrateFeatures</td>
        <td><a href="../simple_type_yesnotype/">YesNoType</a></td>
        <td>                         When set to yes (the default), the MigrateFeatureStates standard action will set the                         feature states of the upgrade product to those of the installed product.<br/><br/>                        When set to no, the installed features have no effect on the upgrade installation.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>RemoveFeatures</td>
        <td>String</td>
        <td>                         A formatted string that contains the list of features to remove from the installed                         product. The default is to remove all features. Note that if you use formatted property                         values that evaluate to an empty string, no features will be removed; only omitting                         this attribute defaults to removing all features.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Schedule</td>
        <td>Enumeration</td>
        <td>                         Determines the scheduling of the RemoveExistingProducts standard action, which is when                         the installed product is removed. The default is "afterInstallValidate" which removes                         the installed product entirely before installing the upgrade product. It's slowest but                         gives the most flexibility in changing components and features in the upgrade product.<br/><br/>                        For more information, see <a href="http://msdn.microsoft.com/en-us/library/aa371197.aspx" target="_blank">RemoveExistingProducts</a>.                       This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>afterInstallValidate</dfn></dt><dd>                                     (Default) Schedules RemoveExistingProducts after the InstallValidate standard                                     action. This scheduling removes the installed product entirely before installing                                     the upgrade product. It's slowest but gives the most flexibility in changing                                     components and features in the upgrade product. Note that if the installation                                     of the upgrade product fails, the machine will have neither version installed.                                 </dd><dt class="enumerationValue"><dfn>afterInstallInitialize</dfn></dt><dd>                                     Schedules RemoveExistingProducts after the InstallInitialize standard action.                                     This is similar to the afterInstallValidate scheduling, but if the installation                                     of the upgrade product fails, Windows Installer also rolls back the removal of                                     the installed product -- in other words, reinstalls it.                                 </dd><dt class="enumerationValue"><dfn>afterInstallExecute</dfn></dt><dd>                                     Schedules RemoveExistingProducts between the InstallExecute and InstallFinalize standard actions.                                     This scheduling installs the upgrade product "on top of" the installed product then lets                                     RemoveExistingProducts uninstall any components that don't also exist in the upgrade product.                                     Note that this scheduling requires strict adherence to the component rules because it relies                                     on component reference counts to be accurate during installation of the upgrade product and                                     removal of the installed product. For more information, see                                     <a href="http://www.joyofsetup.com/2008/12/30/paying-for-upgrades/" target="_blank">                                         Bob Arnson's blog post "Paying for Upgrades"                                     </a> for details. If installation of the upgrade product fails, Windows Installer                                     also rolls back the removal of the installed product -- in other words, reinstalls it.                                 </dd><dt class="enumerationValue"><dfn>afterInstallExecuteAgain</dfn></dt><dd>                                     Schedules RemoveExistingProducts between the InstallExecuteAgain and InstallFinalize standard actions.                                     This is identical to the afterInstallExecute scheduling but after the InstallExecuteAgain standard                                     action instead of InstallExecute.                                 </dd><dt class="enumerationValue"><dfn>afterInstallFinalize</dfn></dt><dd>                                     Schedules RemoveExistingProducts after the InstallFinalize standard action. This is similar to the                                     afterInstallExecute and afterInstallExecuteAgain schedulings but takes place outside the                                     installation transaction so if installation of the upgrade product fails, Windows Installer does                                     not roll back the removal of the installed product, so the machine will have both versions                                     installed.                                 </dd></dl></td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>
  </dd>
</dl>
