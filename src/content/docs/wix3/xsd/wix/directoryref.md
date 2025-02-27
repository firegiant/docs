---
title: DirectoryRef Element
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>Create a reference to a Directory element in another Fragment.</dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../fragment/">Fragment</a>, <a href="../module/">Module</a>, <a href="../patchfamily/">PatchFamily</a>, <a href="../product/">Product</a></dd>
  <dt>Inner Text</dt>
  <dd>None</dd>
  <dt>Children</dt>
  <dd>Choice of elements (min: 0, max: unbounded)<ul><li><a href="../component/">Component</a> (min: 0, max: unbounded)</li><li><a href="../directory/">Directory</a> (min: 0, max: unbounded)</li><li><a href="../merge/">Merge</a> (min: 0, max: unbounded)</li><li><span class="extension">Any Element (namespace='##other' processContents='Lax')                          Extensibility point in the WiX XML Schema.  Schema extensions can register additional                         elements at this point in the schema.                     </span></li></ul></dd>
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
        <td>The identifier of the Directory element to reference.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>DiskId</td>
        <td><a href="../simple_type_diskidtype/">DiskIdType</a></td>
        <td>                         Sets the default disk identifier for the files contained in this directory.                         This attribute's value may be overridden by a child Component, Directory,                         Merge or File element. See the File or Merge elements' DiskId attribute for                         more information.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>FileSource</td>
        <td>String</td>
        <td>Used to set the file system source for this DirectoryRef's child elements. For more information, see <a href="../../../howtos/general/specifying_source_files">Specifying source files</a>.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>src</td>
        <td>String</td>
        <td>This attribute has been deprecated; please use the FileSource attribute instead.</td>
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
        <a href="../../../howtos/files_and_registry/add_a_file">How To: Add a file to your installer</a>
      </li>
    </ul>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Wix Schema</a>, <a href="../directory/">Directory</a></dd>
</dl>
