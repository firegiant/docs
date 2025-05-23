---
title: ComPlusApplication Element (Complus Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>         Defines a COM+ application. If this element is a descendent         of a Component element, the application will be created in association with         this component. If the element is a child of any of the Fragment, Module or         Product elements it is considered to be a locater, referencing an existing         application.<br/><br/>        If the element is a child of a ComPlusPartition element,         or have its Partition attribute set, the application will be installed under         the referenced partition.       </dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../complus/compluspartition" class="extension">ComPlusPartition</a>, <a href="../../wix/component/">Component</a>, <a href="../../wix/fragment/">Fragment</a>, <a href="../../wix/module/">Module</a>, <a href="../../wix/product/">Product</a></dd>
  <dt>Inner Text</dt>
  <dd>None</dd>
  <dt>Children</dt>
  <dd>Sequence (min: 1, max: 1)<ol><li>Choice of elements (min: 0, max: unbounded)<ul><li><a href="../../complus/complusapplicationrole" class="extension">ComPlusApplicationRole</a> (min: 0, max: unbounded)</li><li><a href="../../complus/complusassembly" class="extension">ComPlusAssembly</a> (min: 0, max: unbounded)</li></ul></li></ol></dd>
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
        <td>           Identifier for the element.         </td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>AccessChecksLevel</td>
        <td>Enumeration</td>
        <td>This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>applicationLevel</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>applicationComponentLevel</dfn></dt><dd></dd></dl></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Activation</td>
        <td>Enumeration</td>
        <td>This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>inproc</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>local</dfn></dt><dd></dd></dl></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ApplicationAccessChecksEnabled</td>
        <td><a href="../../complus/simple_type_yesnotype">YesNoType</a></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ApplicationDirectory</td>
        <td>String</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ApplicationId</td>
        <td>String</td>
        <td>           Id for the application. This attribute can be omitted, in           which case an id will be generated on install. If the element is a locater,           this attribute can be omitted if a value is provided for the Name attribute.         </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Authentication</td>
        <td>Enumeration</td>
        <td>This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>default</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>none</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>connect</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>call</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>packet</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>integrity</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>privacy</dfn></dt><dd></dd></dl></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>AuthenticationCapability</td>
        <td>Enumeration</td>
        <td>This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>none</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>secureReference</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>staticCloaking</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>dynamicCloaking</dfn></dt><dd></dd></dl></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Changeable</td>
        <td><a href="../../complus/simple_type_yesnotype">YesNoType</a></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>CommandLine</td>
        <td>String</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ConcurrentApps</td>
        <td>Int</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>CreatedBy</td>
        <td>String</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>CRMEnabled</td>
        <td><a href="../../complus/simple_type_yesnotype">YesNoType</a></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>CRMLogFile</td>
        <td>String</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Deleteable</td>
        <td><a href="../../complus/simple_type_yesnotype">YesNoType</a></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Description</td>
        <td>String</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>DumpEnabled</td>
        <td><a href="../../complus/simple_type_yesnotype">YesNoType</a></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>DumpOnException</td>
        <td><a href="../../complus/simple_type_yesnotype">YesNoType</a></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>DumpOnFailfast</td>
        <td><a href="../../complus/simple_type_yesnotype">YesNoType</a></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>DumpPath</td>
        <td>String</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>EventsEnabled</td>
        <td><a href="../../complus/simple_type_yesnotype">YesNoType</a></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Identity</td>
        <td>String</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ImpersonationLevel</td>
        <td>Enumeration</td>
        <td>This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>anonymous</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>identify</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>impersonate</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>delegate</dfn></dt><dd></dd></dl></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>IsEnabled</td>
        <td><a href="../../complus/simple_type_yesnotype">YesNoType</a></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>MaxDumpCount</td>
        <td>Int</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>String</td>
        <td>           Name of the application. This attribute can be omitted if           the element is a locater, and a value is provided for the PartitionId           attribute.         </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Partition</td>
        <td>String</td>
        <td>           If the element is not a child of a ComPlusPartition           element, this attribute can be provided with the id of a ComPlusPartition           element representing the partition the application belongs to.         </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Password</td>
        <td>String</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>QCAuthenticateMsgs</td>
        <td>Enumeration</td>
        <td>This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>secureApps</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>off</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>on</dfn></dt><dd></dd></dl></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>QCListenerMaxThreads</td>
        <td>Int</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>QueueListenerEnabled</td>
        <td><a href="../../complus/simple_type_yesnotype">YesNoType</a></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>QueuingEnabled</td>
        <td><a href="../../complus/simple_type_yesnotype">YesNoType</a></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>RecycleActivationLimit</td>
        <td>Int</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>RecycleCallLimit</td>
        <td>Int</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>RecycleExpirationTimeout</td>
        <td>Int</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>RecycleLifetimeLimit</td>
        <td>Int</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>RecycleMemoryLimit</td>
        <td>Int</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Replicable</td>
        <td><a href="../../complus/simple_type_yesnotype">YesNoType</a></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>RunForever</td>
        <td><a href="../../complus/simple_type_yesnotype">YesNoType</a></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ShutdownAfter</td>
        <td>Int</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>SoapActivated</td>
        <td><a href="../../complus/simple_type_yesnotype">YesNoType</a></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>SoapBaseUrl</td>
        <td>String</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>SoapMailTo</td>
        <td>String</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>SoapVRoot</td>
        <td>String</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>SRPEnabled</td>
        <td><a href="../../complus/simple_type_yesnotype">YesNoType</a></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>SRPTrustLevel</td>
        <td>Enumeration</td>
        <td>This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>disallowed</dfn></dt><dd></dd><dt class="enumerationValue"><dfn>fullyTrusted</dfn></dt><dd></dd></dl></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>ThreeGigSupportEnabled</td>
        <td><a href="../../complus/simple_type_yesnotype">YesNoType</a></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Complus Schema</a>
  </dd>
</dl>
