---
title: XmlConfig Element (Util Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>                 Adds or removes .xml file entries.  If you use the XmlConfig element you must reference WixUtilExtension.dll as it contains the XmlConfig custom actions.             </dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../wix/component/">Component</a>, <a href="../../util/xmlconfig" class="extension">XmlConfig</a></dd>
  <dt>Inner Text (xs:string)</dt>
  <dd>This element may have inner text.</dd>
  <dt>Children</dt>
  <dd>Sequence (min: 1, max: 1)<ol><li><a href="../../util/xmlconfig" class="extension">XmlConfig</a> (min: 0, max: unbounded)</li></ol></dd>
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
        <td>Identifier for xml file modification.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Action</td>
        <td>Enumeration</td>
        <td>This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>create</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>delete</dfn></dt><dd></dd></dl></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ElementId</td>
        <td>String</td>
        <td>The Id of another XmlConfig to add attributes to.  In this case, the 'ElementPath', 'Action', 'Node', and 'On' attributes must be omitted.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ElementPath</td>
        <td>String</td>
        <td>The XPath of the parent element being modified.  Note that this is a formatted field and therefore, square brackets in the XPath must be escaped. In addition, XPaths allow backslashes to be used to escape characters, so if you intend to include literal backslashes, you must escape them as well by doubling them in this attribute. The string is formatted by MSI first, and the result is consumed as the XPath.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>File</td>
        <td>String</td>
        <td>Path of the .xml file to configure.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>String</td>
        <td>Name of XML node to set/add to the specified element.  Not setting this attribute causes the element's text value to be set.  Otherwise this specified the attribute name that is set.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Node</td>
        <td>Enumeration</td>
        <td>This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>element</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>value</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>document</dfn></dt><dd></dd></dl></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>On</td>
        <td>Enumeration</td>
        <td>This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>install</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>uninstall</dfn></dt><dd></dd></dl></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>PreserveModifiedDate</td>
        <td><a href="../../util/simple_type_yesnotype">YesNoType</a></td>
        <td>Specifies wheter or not the modification should preserve the modified date.  Preserving the modified date will allow the file to be patched if no other modifications have been made.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Sequence</td>
        <td>Integer</td>
        <td>Specifies the order in which the modification is to be attempted on the XML file.  It is important to ensure that new elements are created before you attempt to add an attribute to them.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Value</td>
        <td>String</td>
        <td>                         The value to be written.  See the <a href="http://msdn.microsoft.com/library/aa368609(VS.85).aspx" target="_blank">Formatted topic</a> for information how to escape square brackets in the value.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>VerifyPath</td>
        <td>String</td>
        <td>The XPath to the element being modified.  This is required for 'delete' actions.  For 'create' actions, VerifyPath is used to decide if the element already exists. Note that this is a formatted field and therefore, square brackets in the XPath must be escaped. In addition, XPaths allow backslashes to be used to escape characters, so if you intend to include literal backslashes, you must escape them as well by doubling them in this attribute. The string is formatted by MSI first, and the result is consumed as the XPath.</td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Util Schema</a>
  </dd>
</dl>
