---
title: RemoveFolder Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>                 Remove an empty folder if the parent component is selected for installation or removal.  By default, the folder                 is the directory of the parent component.  This can be overridden by specifying the Directory attribute                 with a value corresponding to the Id of the directory, or by specifying the Property attribute with a value                 corresponding to a property that will have a value that resolves to the full path of the folder.             </dd>
  <dt>Windows Installer references</dt>
  <dd>
    <a href="http://msdn.microsoft.com/library/aa371201.aspx" target="_blank">RemoveFile Table</a>
  </dd>
  <dt>Parents</dt>
  <dd>
    <a href="../component/">Component</a>
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
        <td>Id</td>
        <td>String</td>
        <td>Primary key used to identify this particular entry.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Directory</td>
        <td>String</td>
        <td>                     Overrides the directory of the parent component with a specific Directory.  This Directory must exist in the                     installer database at creation time.  This attribute cannot be specified in conjunction with the Property attribute.                 </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>On</td>
        <td><a href="../simple_type_installuninstalltype/">InstallUninstallType</a></td>
        <td>                         This value determines the time at which the folder may be removed, based on the install/uninstall of the parent component.                         For 'install', the folder will be removed only when the parent component is being installed (msiInstallStateLocal or                         msiInstallStateSource); for 'uninstall', the folder will be removed only when the parent component                         is being removed (msiInstallStateAbsent); for 'both', the folder will be removed in both cases.                     </td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Property</td>
        <td>String</td>
        <td>                     Overrides the directory of the parent component with the value of the specified property.  The property                     should have a value that resolves to the full path of the source directory.  The property does not have                     to exist in the installer database at creation time; it could be created at installation time by a custom                     action, on the command line, etc.  This attribute cannot be specified in conjunction with the Directory attribute.                 </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>, <a href="../createfolder/">CreateFolder</a></dd>
</dl>
