---
title: PerformanceCategory Element (Util Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>Used to create performance categories and configure performance counters.</dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../wix/component/">Component</a>
  </dd>
  <dt>Inner Text</dt>
  <dd>None</dd>
  <dt>Children</dt>
  <dd>Sequence (min: 1, max: 1)<ol><li><a href="../../util/performancecounter" class="extension">PerformanceCounter</a> (min: 0, max: unbounded)</li></ol></dd>
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
        <td>Close</td>
        <td>String</td>
        <td>Function entry point in to the Library DLL called when closing the performance counter.  The default is "ClosePerformanceData" which should be used for all managed code performance counters.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Collect</td>
        <td>String</td>
        <td>Function entry point in to the Library DLL called when collecting data from the performance counter.  The default is "CollectPerformanceData" which should be used for all managed code performance counters.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>DefaultLanguage</td>
        <td><a href="../../util/simple_type_performancecounterlanguagetype">PerformanceCounterLanguageType</a></td>
        <td>Default language for the performance category and contained counters' names and help text.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Help</td>
        <td>String</td>
        <td>Optional help text for the performance counter category.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Id</td>
        <td>String</td>
        <td>Unique identifier in your installation package for this performance counter category.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Library</td>
        <td>String</td>
        <td>DLL that contains the performance counter.  The default is "netfxperf.dll" which should be used for all managed code performance counters.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>MultiInstance</td>
        <td><a href="../../util/simple_type_yesnotype">YesNoType</a></td>
        <td>Flag that specifies whether the performance counter category is multi or single instanced.  Default is single instance.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>String</td>
        <td>Name for the performance counter category.  If this attribute is not provided the Id attribute is used as the name of the performance counter category.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Open</td>
        <td>String</td>
        <td>Function entry point in to the Library DLL called when opening the performance counter.  The default is "OpenPerformanceData" which should be used for all managed code performance counters.</td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Util Schema</a>
  </dd>
</dl>
