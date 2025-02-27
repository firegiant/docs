---
title: RequiresRef Element (Dependency Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>                 References existing authoring for a dependency on a provider for the current component or package.             </dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../dependency/provides" class="extension">Provides</a>
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
        <td>Id</td>
        <td>String</td>
        <td>                         The identifier of the Requires element to reference.                     </td>
        <td>Yes</td>
      </tr>
    </table>
  </dd>
  <dt>Remarks</dt>
  <dd><p>                         This element references a dependency on any product that uses the Provides element. If that product is uninstalled                         before a product that requires it, the uninstall will err or warn the user that other products are installed                         which depend on that product. This behavior can be modified by changing the attribute values on the Requires element.                     </p></dd>
  <dt>How Tos and Examples</dt>
  <dd>
    <ul>
      <li>
        <a href="../../../howtos/author_product_dependencies">How To: Author product dependencies</a>
      </li>
    </ul>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Dependency Schema</a>, <a href="../../dependency/requires" class="extension">Requires</a></dd>
</dl>
