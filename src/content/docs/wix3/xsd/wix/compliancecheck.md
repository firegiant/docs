---
title: ComplianceCheck Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>Adds a row to the CCPSearch table.</dd>
  <dt>Windows Installer references</dt>
  <dd>
    <a href="http://msdn.microsoft.com/library/aa367846.aspx" target="_blank">CCPSearch Table</a>, <a href="http://msdn.microsoft.com/library/aa371853.aspx" target="_blank">Signature Table</a></dd>
  <dt>Parents</dt>
  <dd>
    <a href="../fragment/">Fragment</a>, <a href="../product/">Product</a></dd>
  <dt>Inner Text</dt>
  <dd>None</dd>
  <dt>Children</dt>
  <dd>Choice of elements (min: 0, max: unbounded)<ul><li>Sequence (min: 1, max: 1)<ol><li><a href="../compliancedrive/">ComplianceDrive</a> (min: 0, max: 1): Starts searches from the CCP_DRIVE.</li><li><a href="../componentsearch/">ComponentSearch</a> (min: 0, max: unbounded)</li><li><a href="../registrysearch/">RegistrySearch</a> (min: 0, max: unbounded)</li><li><a href="../inifilesearch/">IniFileSearch</a> (min: 0, max: unbounded)</li><li><a href="../directorysearch/">DirectorySearch</a> (min: 0, max: unbounded)</li></ol></li><li><span class="extension">Any Element (namespace='##other' processContents='Lax')                          Extensibility point in the WiX XML Schema.  Schema extensions can register additional                         elements at this point in the schema.                     </span></li></ul></dd>
  <dt>Attributes</dt>
  <dd>None</dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>, <a href="../property/">Property</a></dd>
</dl>
