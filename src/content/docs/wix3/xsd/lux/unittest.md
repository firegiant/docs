---
title: UnitTest Element (Lux Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>                 Describes a unit test to be executed against a particular custom action, resulting in a                 particular property value. Single-value properties, multi-value properties, and                 name/value-pair properties can all be tested declaratively.             </dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../wix/fragment/">Fragment</a>, <a href="../../lux/mutation" class="extension">Mutation</a>, <a href="../../lux/unittest" class="extension">UnitTest</a></dd>
  <dt>Inner Text</dt>
  <dd>None</dd>
  <dt>Children</dt>
  <dd>Choice of elements (min: 0, max: unbounded)<ul><li><a href="../../lux/condition" class="extension">Condition</a> (min: 0, max: unbounded)</li><li><a href="../../lux/expression" class="extension">Expression</a> (min: 0, max: unbounded)</li><li><a href="../../lux/unittest" class="extension">UnitTest</a> (min: 0, max: unbounded)</li></ul></dd>
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
        <td>CustomAction</td>
        <td>String</td>
        <td>                         Identifier of the custom action to be tested.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Id</td>
        <td>String</td>
        <td>                         Identifier of the unit test. If you omit this attribute, a stable identifier is generated for you.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Index</td>
        <td>String</td>
        <td>                         A formatted string that evaluates to either an integer index into a multi-value property or a string name of a name/value-pair multi-value property.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>NameValueSeparator</td>
        <td>String</td>
        <td>                         One character that is used to separate values in a name/value-pair multi-value property.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Operator</td>
        <td>Enumeration</td>
        <td>                         The operator to apply to the property and value. Default is "equal."                       This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>equal</dfn></dt><dd>                                     (Default) Compares Property to Value and succeeds if they are equal.                                 </dd><dt class="enumerationValue"><dfn>notEqual</dfn></dt><dd>                                     Compares Property to Value and succeeds if they are NOT equal.                                 </dd><dt class="enumerationValue"><dfn>caseInsensitiveEqual</dfn></dt><dd>                                     Compares Property to Value and succeeds if they are equal (ignoring case).                                 </dd><dt class="enumerationValue"><dfn>caseInsensitiveNotEqual</dfn></dt><dd>                                     Compares Property to Value and succeeds if they are NOT equal (ignoring case).                                 </dd></dl></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Property</td>
        <td>String</td>
        <td>                         Name of the property set by the custom action.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Value</td>
        <td>String</td>
        <td>                         The value to compare to the property.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ValueSeparator</td>
        <td>String</td>
        <td>                         One character that is used to separate values in a multi-value property.                     </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Lux Schema</a>
  </dd>
</dl>
