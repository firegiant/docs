---
title: Wix Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>             This is the top-level container element for every wxs file.  Among the possible children,             the Bundle, Product, Module, Patch, and PatchCreation elements are analogous to the main function in a C program.             There can only be one of these present when linking occurs.  Product compiles into an msi file,             Module compiles into an msm file, PatchCreation compiles into a pcp file.  The Fragment element             is an atomic unit which ultimately links into either a Product, Module, or PatchCreation.  The             Fragment can either be completely included or excluded during linking.         </dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>None</dd>
  <dt>Inner Text</dt>
  <dd>None</dd>
  <dt>Children</dt>
  <dd>Choice of elements (min: 0, max: 1)<ul><li><a href="../patchcreation/">PatchCreation</a> (min: 0, max: 1)</li><li>Sequence (min: 1, max: 1)<ol><li>Choice of elements (min: 0, max: 1)<ul><li><a href="../bundle/">Bundle</a> (min: 0, max: 1)</li><li><a href="../module/">Module</a> (min: 0, max: 1)</li><li><a href="../patch/">Patch</a> (min: 0, max: 1)</li><li><a href="../product/">Product</a> (min: 0, max: 1)</li></ul></li><li><a href="../fragment/">Fragment</a> (min: 0, max: unbounded)</li></ol></li></ul></dd>
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
        <td>RequiredVersion</td>
        <td><a href="../simple_type_versiontype/">VersionType</a></td>
        <td>Required version of the WiX toolset to compile this input file.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td colspan="4">
          <span class="extension">Any Attribute (namespace='##other' processContents='lax')                      Extensibility point in the WiX XML Schema. Schema extensions can register additional attributes at this point in the schema.                 </span>
          <tr>
            <td>
              <span class="extension">RequiredVersion</span>
            </td>
            <td>String</td>
            <td>         The version of this extension required to compile the defining source.        (http://schemas.microsoft.com/wix/PSExtension)</td>
            <td>&nbsp;</td>
          </tr>
        </td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>
  </dd>
</dl>
