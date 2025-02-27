---
title: ServiceDependency Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>                 Service or group of services that must start before the parent service.             </dd>
  <dt>Windows Installer references</dt>
  <dd>
    <a href="http://msdn.microsoft.com/library/aa371637.aspx" target="_blank">ServiceInstall Table</a>
  </dd>
  <dt>Parents</dt>
  <dd>
    <a href="../serviceinstall/">ServiceInstall</a>
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
        <td>                         The value of this attribute should be one of the following:                         <ol><li>The name (not the display name) of a previously installed service.</li><li>The name of a service group (in which case the Group attribute must be set to 'yes').</li></ol></td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Group</td>
        <td><a href="../simple_type_yesnotype/">YesNoType</a></td>
        <td>                         Set to 'yes' to indicate that the value in the Id attribute is the name of a group of services.                     </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>
  </dd>
</dl>
