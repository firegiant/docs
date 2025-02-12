---
title: ComponentSearch Element (Util Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>Describes a component search.</dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../wix/bundle/">Bundle</a>, <a href="../../wix/fragment/">Fragment</a></dd>
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
        <td>After</td>
        <td>String</td>
        <td>Id of the search that this one should come after.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Condition</td>
        <td>String</td>
        <td>Condition for evaluating the search. If this evaluates to false, the search is not executed at all.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Guid</td>
        <td>String</td>
        <td>Component to search for.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Id</td>
        <td>String</td>
        <td>Id of the search for ordering and dependency.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ProductCode</td>
        <td>String</td>
        <td>Optional ProductCode to determine if the component is installed.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Result</td>
        <td>Enumeration</td>
        <td>                         Rather than saving the matching key path into the variable, a ComponentSearch can save an attribute of the component instead.                       This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>directory</dfn></dt><dd>Saves the parent directory for the component's file key path; other types of key path are returned unmodified.</dd><dt class="enumerationValue"><dfn>state</dfn></dt><dd>Saves the state of the component: absent (2), locally installed (3), will run from source (4), or installed in default location (either local or from source) (5)</dd><dt class="enumerationValue"><dfn>keyPath</dfn></dt><dd>Saves the key path of the component if installed. This is the default.</dd></dl></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Variable</td>
        <td>String</td>
        <td>Name of the variable in which to place the result of the search.</td>
        <td>Yes</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Util Schema</a>
  </dd>
</dl>
