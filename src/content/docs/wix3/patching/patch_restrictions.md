---
pagefind: false
title: Restrictions for Patches
---

There are different restrictions for patches based on what type of patch is to be installed. There are three types of patches:

* <b>Small updates</b> do not change the ProductVersion property of a target product and typically represent a small subset of files to be updated.
* <b>Minor upgrades</b> do change the ProductVersion property of a target product and typically represent a larger subset of files to be updated. Minor upgrades might also be installed as upgrade MSIs.
* <b>Major upgrades</b> change both the ProductVersion and ProductCode and contain all files in a product. Shipping major upgrades as a patch is, however, not recommended and WiX does not support building major upgrade patches because of the problems they create.

For information about restrictions for each type of patch, read <a href="http://msdn.microsoft.com/en-us/library/aa367850.aspx" target="_blank">Changing the Product Code</a>.

## Uninstallable Patches

For a patch to be uninstallable, the MsiPatchMetadata table must exist in the patch package and must contain the AllowRemoval property set to 1. This can be authored into the [Patch Creation Properties](patch_building/) file using the [PatchMetadata](../xsd/wix/patchmetadata/)/@AllowRemoval attribute or into the [patch XML](wix_patching/) file using the [Patch](../xsd/wix/patch/)/@AllowRemoval attribute.

Beside that, certain tables cannot be modified in the upgrade package from which a patch is built. Read <a href="http://msdn.microsoft.com/en-us/library/aa372102.aspx" target="_blank">Uninstallable Patches</a> for the current list of tables. Pyro.exe will error if one of these tables would be modified when building a [patch XML](wix_patching/) file.

The following table lists tables and corresponding elements or attributes in WiX.

<table border="1" cellspacing="0" cellpadding="2" class="style1">
  <tr>
    <td valign="top">
      <p><b>Table</b></p>
    </td>
    <td valign="top">
      <p><b>Element or Attribute</b></p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>BindImage</p>
    </td>
    <td valign="top">
      <p>[File](../xsd/wix/file/)/@BindPath</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>Class</p>
    </td>
    <td valign="top">
      <p>[Class](../xsd/wix/class/)</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>Complus</p>
    </td>
    <td valign="top">
      <p>[Component](../xsd/wix/component/)/@ComPlusFlags</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>CreateFolder</p>
    </td>
    <td valign="top">
      <p>[CreateFolder](../xsd/wix/createfolder/)</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>DuplicateFile</p>
    </td>
    <td valign="top">
      <p>[CopyFile](../xsd/wix/copyfile/)</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>Environment</p>
    </td>
    <td valign="top">
      <p>[Environment](../xsd/wix/environment/)</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>Extension</p>
    </td>
    <td valign="top">
      <p>[Extension](../xsd/wix/extension/)</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>Font</p>
    </td>
    <td valign="top">
      <p>[File](../xsd/wix/file/)/@FontTitle</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>IniFile</p>
    </td>
    <td valign="top">
      <p>[IniFile](../xsd/wix/inifile/)</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>IsolatedComponent</p>
    </td>
    <td valign="top">
      <p>[IsolatedComponent](../xsd/wix/isolatecomponent/)</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>LockPermissions</p>
    </td>
    <td valign="top">
      <p>[Permission](../xsd/wix/permission/)</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>MIME</p>
    </td>
    <td valign="top">
      <p>[MIME](../xsd/wix/mime/)</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>MoveFile</p>
    </td>
    <td valign="top">
      <p>[CopyFile](../xsd/wix/copyfile/)</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>ODBCAttribute</p>
    </td>
    <td valign="top">
      <p>[ODBCDriver](../xsd/wix/odbcdriver/)/[Property](../xsd/wix/property/)</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>ODBCDataSource</p>
    </td>
    <td valign="top">
      <p>[ODBCDataSource](../xsd/wix/odbcdatasource/)</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>ODBCDriver</p>
    </td>
    <td valign="top">
      <p>[ODBCDriver](../xsd/wix/odbcdriver/)</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>ODBCSourceAttribute</p>
    </td>
    <td valign="top">
      <p>[ODBCDataSource](../xsd/wix/odbcdatasource/)/[Property](../xsd/wix/property/)</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>ODBCTranslator</p>
    </td>
    <td valign="top">
      <p>[ODBCTranslator](../xsd/wix/odbctranslator/)</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>ProgId</p>
    </td>
    <td valign="top">
      <p>[ProgId](../xsd/wix/progid/)</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>PublishComponent</p>
    </td>
    <td valign="top">
      <p>[Category](../xsd/wix/category/)</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>RemoveIniFile</p>
    </td>
    <td valign="top">
      <p>[IniFile](../xsd/wix/inifile/)</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>SelfReg</p>
    </td>
    <td valign="top">
      <p>[File](../xsd/wix/file/)/@SelfRegCost</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>ServiceControl</p>
    </td>
    <td valign="top">
      <p>[ServiceControl](../xsd/wix/servicecontrol/)</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>ServiceInstall</p>
    </td>
    <td valign="top">
      <p>[ServiceInstall](../xsd/wix/serviceinstall/)</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>TypeLib</p>
    </td>
    <td valign="top">
      <p>[TypeLib](../xsd/wix/typelib/)</p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <p>Verb</p>
    </td>
    <td valign="top">
      <p>[Verb](../xsd/wix/verb/)</p>
    </td>
  </tr>
</table>

Major upgrade patches are not uninstallable.
