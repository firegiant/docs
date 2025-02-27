---
title: Requires Element (Dependency Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>                 Describes a dependency on a provider for the current component or package.             </dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../wix/bundle/">Bundle</a>, <a href="../../wix/fragment/">Fragment</a>, <a href="../../wix/module/">Module</a>, <a href="../../wix/product/">Product</a>, <a href="../../dependency/provides" class="extension">Provides</a></dd>
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
        <td>                         Dependency requirement identity. If this attribute is not specified, an identifier will be generated automatically.                         If this element is not authored under a Provides element, this attribute is required.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>IncludeMaximum</td>
        <td><a href="../../dependency/simple_type_yesnotype">YesNoType</a></td>
        <td>                         Set to "yes" to make the range of dependency provider versions required include the value specified in Maximum.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>IncludeMinimum</td>
        <td><a href="../../dependency/simple_type_yesnotype">YesNoType</a></td>
        <td>                         Set to "yes" to make the range of dependency provider versions required include the value specified in Minimum.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Maximum</td>
        <td><a href="../../dependency/simple_type_versiontype">VersionType</a></td>
        <td>                         The maximum version of the dependency provider required to be installed. The default is unbound.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Minimum</td>
        <td><a href="../../dependency/simple_type_versiontype">VersionType</a></td>
        <td>                         The minimum version of the dependency provider required to be installed. The default is unbound.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ProviderKey</td>
        <td>String</td>
        <td>                         The unique registry key name for the dependency provider to require during installation of this product.                     </td>
        <td>Yes</td>
      </tr>
    </table>
  </dd>
  <dt>Remarks</dt>
  <dd><p>                         This element declares a dependency on any product that uses the Provides element. If that product is uninstalled                         before a product that requires it, the uninstall will err or warn the user that other products are installed                         which depend on that product. This behavior can be modified by changing the attribute values on the Requires element.                     </p><p>                         If you do not nest this element under a Provides element, you must specify the @Id attribute                         so that it can be referenced by a RequiresRef element nested under a Provides element.                     </p></dd>
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
    <a href="../">Dependency Schema</a>, <a href="../../dependency/requiresref" class="extension">RequiresRef</a></dd>
</dl>
