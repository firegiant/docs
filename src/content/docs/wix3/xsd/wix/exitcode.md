---
title: ExitCode Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>Describes map of exit code returned from executable package to a bootstrapper behavior.</dd>
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
        <td>Behavior</td>
        <td>Enumeration</td>
        <td>Choose one of the supported behaviors error codes: success, error, scheduleReboot, forceReboot.  This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>success</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>error</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>scheduleReboot</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>forceReboot</dfn></dt><dd></dd></dl></td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Value</td>
        <td>Integer</td>
        <td>Exit code returned from executable package. If no value is provided it means all values not explicitly set default to this behavior.</td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>
  </dd>
</dl>
