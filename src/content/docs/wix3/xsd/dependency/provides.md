---
title: Provides Element (Dependency Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>                 Describes the information for this product or feature that serves as a dependency of other products or features.             </dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../wix/component/">Component</a>, <a href="../../wix/exepackage/">ExePackage</a>, <a href="../../wix/msipackage/">MsiPackage</a>, <a href="../../wix/msppackage/">MspPackage</a>, <a href="../../wix/msupackage/">MsuPackage</a></dd>
  <dt>Inner Text</dt>
  <dd>None</dd>
  <dt>Children</dt>
  <dd>Choice of elements (min: 0, max: unbounded)<ul><li><a href="../requires" class="extension">Requires</a> (min: 0, max: unbounded)</li><li><a href="../requiresref" class="extension">RequiresRef</a> (min: 0, max: unbounded)</li></ul></dd>
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
        <td>DisplayName</td>
        <td>String</td>
        <td>                         Optional display name of the package. For MSI packages, the ProductName will be used by default.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Id</td>
        <td>String</td>
        <td>                         Dependency provider identity. If this attribute is not specified, an identifier will be generated automatically.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Key</td>
        <td>String</td>
        <td>                         Optional unique registry key name that identifies a product version range on which other products can depend.                         This attribute is required in package authoring, but optional for components.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Version</td>
        <td><a href="../simple_type_versiontype">VersionType</a></td>
        <td>                         The version of the package. For MSI packages, the ProductVersion will be used by default                         and this attribute should not be specified.                     </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>Remarks</dt>
  <dd><p>                         This element is required for any product, feature, or bundle that will use the Dependency feature to properly reference count                         other products or features. It should be authored into a component that is always installed and removed with the                         product or features that contain it. This guarantees that product dependencies are not removed before those products that                         depend on them.                     </p><p>                         The @Key attribute should identify a version range for your product that you guarantee will be backward compatible.                         This key is designed to persist throughout compatible upgrades so that dependent products do not have to be reinstalled                         and will not prevent your product from being upgraded. If this attribute is not authored, the value is the ProductCode                         and will not automatically support upgrades.                     </p><p>                         By default this uses the Product/@Id attribute value, which may be automatically generated.                     </p></dd>
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
    <a href="../">Dependency Schema</a>
  </dd>
</dl>
