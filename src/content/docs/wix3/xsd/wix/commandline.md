---
title: CommandLine Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>Describes additional, conditional command-line arguments for an ExePackage.</dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../exepackage/">ExePackage</a>
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
        <td>Condition</td>
        <td>String</td>
        <td>               The condition that controls whether the command-line arguments specified in the               InstallArgument, UninstallArgument, or RepairArgument attributes are appended to the               command line passed to the ExePackage. Which attribute is used depends on the               action being applied to the ExePackage. For example, when the ExePackage is               being installed, the InstallArgument attribute value is appended to the command               line when the ExePackage is executed.           </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>InstallArgument</td>
        <td>String</td>
        <td>Additional command-line arguments to apply during package installation if Condition is true.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>RepairArgument</td>
        <td>String</td>
        <td>Additional command-line arguments to apply during package repair if Condition is true.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>UninstallArgument</td>
        <td>String</td>
        <td>Additional command-line arguments to apply during package uninstallation if Condition is true.</td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>
  </dd>
</dl>
