---
title: WebApplication Element (Iis Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>Defines properties for a web application. These properties can be used for more than one application defined in a web site or vroot, by defining this element in a common location and referring to it by setting the WebApplication attribute of the WebSite and WebVirtualDir elements.</dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../wix/fragment/">Fragment</a>, <a href="../../wix/module/">Module</a>, <a href="../../wix/product/">Product</a>, <a href="../../iis/webdir" class="extension">WebDir</a>, <a href="../../iis/website" class="extension">WebSite</a>, <a href="../../iis/webvirtualdir" class="extension">WebVirtualDir</a></dd>
  <dt>Inner Text</dt>
  <dd>None</dd>
  <dt>Children</dt>
  <dd>Sequence (min: 1, max: 1)<ol><li><a href="../../iis/webapplicationextension" class="extension">WebApplicationExtension</a> (min: 0, max: unbounded)</li></ol></dd>
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
        <td>AllowSessions</td>
        <td><a href="../../iis/simple_type_yesnodefaulttype">YesNoDefaultType</a></td>
        <td>Sets the Enable Session State option. When enabled, you can set the session timeout using the SessionTimeout attribute.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Buffer</td>
        <td><a href="../../iis/simple_type_yesnodefaulttype">YesNoDefaultType</a></td>
        <td>Sets the option that enables response buffering in the application, which allows ASP script to set response headers anywhere in the script.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ClientDebugging</td>
        <td><a href="../../iis/simple_type_yesnodefaulttype">YesNoDefaultType</a></td>
        <td>Enable ASP client-side script debugging.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>DefaultScript</td>
        <td>Enumeration</td>
        <td>Sets the default script language for the site.  This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>VBScript</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>JScript</dfn></dt><dd></dd></dl></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Isolation</td>
        <td>Enumeration</td>
        <td>                         Sets the application isolation level for this application for pre-IIS 6 applications.                       This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>low</dfn></dt><dd>                                     Means the application executes within the IIS process.                                 </dd><dt class="enumerationValue"><dfn>medium</dfn></dt><dd>                                     Executes pooled in a separate process.                                 </dd><dt class="enumerationValue"><dfn>high</dfn></dt><dd>                                     Means execution alone in a separate process.                                 </dd></dl></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>String</td>
        <td>Sets the name of this application.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>ParentPaths</td>
        <td><a href="../../iis/simple_type_yesnodefaulttype">YesNoDefaultType</a></td>
        <td>Sets the parent paths option, which allows a client to use relative paths to reach parent directories from this application.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ScriptTimeout</td>
        <td>Integer</td>
        <td>Sets the timeout value in seconds for executing ASP scripts.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ServerDebugging</td>
        <td><a href="../../iis/simple_type_yesnodefaulttype">YesNoDefaultType</a></td>
        <td>Enable ASP server-side script debugging.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>SessionTimeout</td>
        <td>Integer</td>
        <td>Sets the timeout value for sessions in minutes.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>WebAppPool</td>
        <td>String</td>
        <td>References the Id attribute of a WebAppPool element to use as the application pool for this application in IIS 6 applications.</td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Iis Schema</a>
  </dd>
</dl>
