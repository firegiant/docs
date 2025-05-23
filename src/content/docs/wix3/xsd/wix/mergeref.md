---
title: MergeRef Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>Merge reference to connect a Merge Module to parent Feature</dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../feature/">Feature</a>, <a href="../featuregroup/">FeatureGroup</a>, <a href="../featureref/">FeatureRef</a></dd>
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
        <td>The unique identifier for the Merge element to be referenced.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Primary</td>
        <td><a href="../simple_type_yesnotype/">YesNoType</a></td>
        <td>Specifies whether the feature containing this MergeRef is the primary feature for advertising the merge module's components.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td colspan="4">
          <span class="extension">Any Attribute (namespace='##other' processContents='lax')                      Extensibility point in the WiX XML Schema.  Schema extensions can register additional                     attributes at this point in the schema.                 </span>
        </td>
      </tr>
    </table>
  </dd>
  <dt>How Tos and Examples</dt>
  <dd>
    <ul>
      <li>
        <a href="../../../howtos/redistributables_and_install_checks/install_vcredist">How To: Install the Visual C++ Redistributable with your installer</a>
      </li>
    </ul>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>, <a href="../merge/">Merge</a></dd>
</dl>
