---
title: WebApplicationExtension Element (Iis Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>Extension for WebApplication</dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../iis/webapplication" class="extension">WebApplication</a>
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
        <td>CheckPath</td>
        <td><a href="../../iis/simple_type_yesnotype">YesNoType</a></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Executable</td>
        <td>String</td>
        <td>usually a Property that resolves to short file name path</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Extension</td>
        <td>String</td>
        <td>Extension being registered. Do not prefix with a '.' (e.g. you should use "html", not ".html").  To register for all extensions, use Extension="*".  To register a wildcard application map (which handles all requests, even those for directories or files with no extension) omit the Extension attribute completely.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Script</td>
        <td><a href="../../iis/simple_type_yesnotype">YesNoType</a></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Verbs</td>
        <td>String</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Iis Schema</a>
  </dd>
</dl>
