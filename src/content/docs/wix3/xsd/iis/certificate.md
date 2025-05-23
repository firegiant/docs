---
title: Certificate Element (Iis Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>                 Used to install and uninstall certificates.             </dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../wix/component/">Component</a>
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
        <td>                         Unique identifier for this certificate in the installation package.                     </td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>BinaryKey</td>
        <td>String</td>
        <td>                         Reference to a Binary element that will store the certificate as a stream inside the package.  This attribute cannot be specified with                         the CertificatePath attribute.                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>CertificatePath</td>
        <td>String</td>
        <td>                         If the Request attribute is "no" then this attribute is the path to the certificate file outside of the package.                         If the Request attribute is "yes" then this atribute is the certificate authority to request the certificate from.                         This attribute may be set via a formatted Property (e.g. [MyProperty]).                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>String</td>
        <td>                         Name of the certificate that will be installed or uninstalled in the specified store.                         This attribute may be set via a formatted Property (e.g. [MyProperty]).                     </td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Overwrite</td>
        <td><a href="../../iis/simple_type_yesnotype">YesNoType</a></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>PFXPassword</td>
        <td>String</td>
        <td>                         If the Binary stream or path to the file outside of the package is a password protected PFX file, the password for that                         PFX must be specified here.  This attribute may be set via a formatted Property (e.g. [MyProperty]).                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Request</td>
        <td><a href="../../iis/simple_type_yesnotype">YesNoType</a></td>
        <td>                         This attribute controls whether the CertificatePath attribute is a path to a certificate file (Request='no') or the                         certificate authority to request the certificate from  (Request='yes').                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>StoreLocation</td>
        <td>Enumeration</td>
        <td>This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>currentUser</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>localMachine</dfn></dt><dd></dd></dl></td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>StoreName</td>
        <td>Enumeration</td>
        <td>This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>ca</dfn></dt><dd>                                     Contains the certificates of certificate authorities that the user trusts to issue certificates to others. Certificates in these stores are normally supplied with the operating system or by the user's network administrator.                                 </dd><dt class="enumerationValue"><dfn>my</dfn></dt><dd>                                     Use the "personal" value instead.                                 </dd><dt class="enumerationValue"><dfn>personal</dfn></dt><dd>                                     Contains personal certificates. These certificates will usually have an associated private key. This store is often                                     referred to as the "MY" certificate store.                                 </dd><dt class="enumerationValue"><dfn>request</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>root</dfn></dt><dd>                                     Contains the certificates of certificate authorities that the user trusts to issue certificates to others. Certificates in these stores are normally supplied with the operating system or by the user's network administrator. Certificates in this store are typically self-signed.                                 </dd><dt class="enumerationValue"><dfn>otherPeople</dfn></dt><dd>                                     Contains the certificates of those that the user normally sends enveloped messages to or receives signed messages from.                                     See <a href="http://msdn.microsoft.com/library/aa388160.aspx" target="_blank" xmlns="http://schemas.microsoft.com/wix/IIsExtension">MSDN documentation</a> for more information.                                 </dd><dt class="enumerationValue"><dfn>trustedPeople</dfn></dt><dd>                                     Contains the certificates of those directly trusted people and resources.                                     See <a href="http://msdn.microsoft.com/en-us/library/system.security.cryptography.x509certificates.storename.aspx" target="_blank" xmlns="http://schemas.microsoft.com/wix/IIsExtension">MSDN documentation</a> for more information.                                 </dd><dt class="enumerationValue"><dfn>trustedPublisher</dfn></dt><dd>                                     Contains the certificates of those publishers who are trusted.                                     See <a href="http://msdn.microsoft.com/en-us/library/system.security.cryptography.x509certificates.storename.aspx" target="_blank" xmlns="http://schemas.microsoft.com/wix/IIsExtension">MSDN documentation</a> for more information.                                 </dd></dl></td>
        <td>Yes</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Iis Schema</a>, <a href="../../iis/certificateref" class="extension">CertificateRef</a></dd>
</dl>
