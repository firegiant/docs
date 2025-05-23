---
title: WebError Element (Iis Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>Custom Web Errors used by WebSites and Virtual Directories.</dd>
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
        <td>ErrorCode</td>
        <td>Integer</td>
        <td>HTTP 1.1 error code.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>File</td>
        <td>String</td>
        <td>File to be sent to the client for this error code and sub code.  This can be formatted.  For example: [#FileId].</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>SubCode</td>
        <td>Integer</td>
        <td>Error sub code.  Set to 0 to get the wild card "*".</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>URL</td>
        <td>String</td>
        <td>URL to be sent to the client for this error code and sub code.  This can be formatted.</td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>Remarks</dt>
  <dd>You can only use error code and sub code combinations which are supported by IIS.  Attempting to set a custom error for                     an error code and sub code combination that is not supported by IIS (in the default list of error codes) will result in                     an installation failure.</dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Iis Schema</a>
  </dd>
</dl>
