---
title: WebVirtualDir Element (Iis Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>Defines an IIS virtual directory. When this element is a child of WebSite element, the virtual directory is defined within that web site. Otherwise this virtual directory must reference a WebSite element via the WebSite attribute</dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../wix/component/">Component</a>, <a href="../../iis/website" class="extension">WebSite</a>, <a href="../../iis/webvirtualdir" class="extension">WebVirtualDir</a></dd>
  <dt>Inner Text</dt>
  <dd>None</dd>
  <dt>Children</dt>
  <dd>Choice of elements (min: 0, max: unbounded)<ul><li><a href="../../iis/httpheader" class="extension">HttpHeader</a> (min: 0, max: unbounded)</li><li><a href="../../iis/mimemap" class="extension">MimeMap</a> (min: 0, max: unbounded)</li><li><a href="../../iis/webapplication" class="extension">WebApplication</a> (min: 0, max: 1)</li><li><a href="../../iis/webdirproperties" class="extension">WebDirProperties</a> (min: 0, max: 1)</li><li><a href="../../iis/weberror" class="extension">WebError</a> (min: 0, max: unbounded)</li><li><a href="../../iis/webvirtualdir" class="extension">WebVirtualDir</a> (min: 0, max: unbounded)</li></ul></dd>
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
        <td>&nbsp;</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Alias</td>
        <td>String</td>
        <td>Sets the application name, which is the URL relative path used to access this virtual directory</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Directory</td>
        <td>String</td>
        <td>References the Id attribute for a Directory element that points to the content for this virtual directory.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>DirProperties</td>
        <td>String</td>
        <td>                         References the Id attribute for a WebDirProperties element that specifies the security and access properties for this virtual directory.                         This attribute may not be specified if a WebDirProperties element is directly nested in this element.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>WebApplication</td>
        <td>String</td>
        <td>References the Id attribute for a WebApplication element that specifies web application settings for this virtual directory.  If a WebApplication child is not specified, the virtual directory does not host web applications.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>WebSite</td>
        <td>String</td>
        <td>References the Id attribute for a WebSite in which this virtual directory belongs. Required when this element is not a child of WebSite element.</td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Iis Schema</a>
  </dd>
</dl>
