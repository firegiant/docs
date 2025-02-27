---
title: ReserveCost Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>                 Disk cost to reserve in a folder for running locally and/or from source.             </dd>
  <dt>Windows Installer references</dt>
  <dd>
    <a href="http://msdn.microsoft.com/library/aa371226.aspx" target="_blank">ReserveCost Table</a>
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
        <td>A primary key that uniquely identifies this ReserveCost entry.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Directory</td>
        <td>String</td>
        <td>                         Adds the amount of disk space specified in RunFromSource or RunLocal to the volume cost of the device containing the directory.                         If this attribute is not set, it will default to the directory of parent component.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>RunFromSource</td>
        <td>Integer</td>
        <td>The number of bytes of disk space to reserve if the component is installed to run from source.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>RunLocal</td>
        <td>Integer</td>
        <td>The number of bytes of disk space to reserve if the component is installed to run locally.</td>
        <td>Yes</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>
  </dd>
</dl>
