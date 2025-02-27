---
title: HttpHeader Element (Iis Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>Custom HTTP Header definition for IIS resources such as WebSite and WebVirtualDir.</dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../iis/website" class="extension">WebSite</a>, <a href="../../iis/webvirtualdir" class="extension">WebVirtualDir</a></dd>
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
        <td>Primary key for custom HTTP Header entry.  This will default to the Name attribute.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>String</td>
        <td>Name of the custom HTTP Header.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Value</td>
        <td>String</td>
        <td>Value for the custom HTTP Header. This attribute can contain a formatted string that is processed at install time to insert the values of properties using [PropertyName] syntax. Also supported are environment variables, file installation paths, and component installation directories; see <a href="http://msdn.microsoft.com/library/aa368609.aspx" target="_blank" xmlns="http://schemas.microsoft.com/wix/IIsExtension">Formatted</a> for details.</td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Iis Schema</a>
  </dd>
</dl>
