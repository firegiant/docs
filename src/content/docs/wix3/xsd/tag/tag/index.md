---
title: Tag Element (Tag Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>               This extension implements the ISO/IEC 19770-2:2015 specification. A SWID tag file               will be generated an inserted into the Product or Bundle.           </dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../wix/bundle">Bundle</a>, <a href="../../wix/product">Product</a></dd>
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
        <td>Feature</td>
        <td>String</td>
        <td>Optional attribute to explicitly set the Feature when defining the software id tag                   in a Product. By default the software id tag will always be installed by a top-level hidden feature.                   It is recommended to <strong>not</strong> set this attribute.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>InstallDirectory</td>
        <td>String</td>
        <td>                     A reference to an existing Directory/@Id where the software is installed. The SWID tag file will be installed in a "swidtag" folder                     under that directory as per the specification. This attribute is required on a Tag element found under a Product element.                   </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>InstallPath</td>
        <td>String</td>
        <td>                     The path where the software is installed. The SWID tag file will be installed in a "swidtag" folder.                     This is a formatted attribute so it is possible to use Variables as the InstallPath by setting                     the value to, for example, "[ProgramFilesFolder]CompanyName\Product Name". This attribute is required                     on a Tag element found under a Bundle element.                   </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Licensed</td>
        <td>String</td>
        <td>This attribute has been deprecated.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>String</td>
        <td>                     Name to use in the filename for the software id tag. By default the filename                     uses the Bundle/@Name or Product/@Name. If the bundle name or product name contains                     invalid filename characters such as ":" or "?", use this attribute to provide                     a valid filename.                   </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Regid</td>
        <td>String</td>
        <td>                     The regid for the software manufacturer. A regid is a URI simplified for the common                     case. Namely, if the scheme is "http://", it can be removed. Additionally, the domain                     should be minimized as much as possible (for example, remove "www." prefix if unnecessary).<br/><br/>                    For example, the WiX toolset regid is "wixtoolset.org".                   </td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Type</td>
        <td>String</td>
        <td>This attribute has been deprecated.</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Win64</td>
        <td><a href="../simple_type_yesnotype">YesNoType</a></td>
        <td>                     This attribute facilitates the installation of packages that install both 32-bit and 64-bit files. Set this attribute to 'no'                     to indicate the software id tag is installed to a 32-bit location (such as "ProgramFilesFolder") or 'yes' when the tag is                     installed to a 64-bit location (such as "ProgramFiles64Folder"). The default default value is based on the platform set by                     the -arch switch to candle.exe or the InstallerPlatform property in a .wixproj MSBuild project:                     For x86 and ARM, the default value is 'no'.                     For x64 and IA64, the default value is 'yes'.<br/><br/>                    This attribute is only allowed on a Tag element found under a Product element.                   </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="..">Tag Schema</a>
  </dd>
</dl>
