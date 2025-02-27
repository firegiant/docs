---
title: PerformanceCounter Element (Util Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>Creates a performance counter in a performance category.</dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../util/performancecategory" class="extension">PerformanceCategory</a>
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
        <td>Help</td>
        <td>String</td>
        <td>Optional help text for the performance counter.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Language</td>
        <td><a href="../../util/simple_type_performancecounterlanguagetype">PerformanceCounterLanguageType</a></td>
        <td>Language for the peformance counter name and help.  The default is to use the parent PerformanceCategory element's DefaultLanguage attribute.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>String</td>
        <td>Name for the performance counter.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Type</td>
        <td><a href="../../util/simple_type_performancecountertypestype">PerformanceCounterTypesType</a></td>
        <td>Type of the performance counter.</td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Util Schema</a>
  </dd>
</dl>
