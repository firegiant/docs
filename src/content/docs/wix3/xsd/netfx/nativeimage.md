---
title: NativeImage Element (Netfx Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>                 Improves the performance of managed applications by creating native images.                 Requires the .NET Framework 2.0 or newer to be installed on the target machine since                 it runs <a href="http://msdn.microsoft.com/en-us/library/6t9t5wcf.aspx">NGen</a>.             </dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../wix/file/">File</a>
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
        <td>                         The identifier for this NativeImage.                     </td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>AppBaseDirectory</td>
        <td>String</td>
        <td><p>                             The directory to use for locating dependent assemblies.                             For DLL assemblies and assemblies installed to the Global Assembly Cache (GAC),                             this attribute should be set to the directory of the application which loads this                             assembly.  For EXE assemblies, this attribute does not need to be set because NGen                             will use the directory of the assembly file by default.                         </p><p>                             The value can be in the form of a directory identifier, or a formatted string                             that resolves to either a directory identifier or a full path to a directory.                         </p></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>AssemblyApplication</td>
        <td>String</td>
        <td><p>                             The application which will load this assembly.                             For DLL assemblies which are loaded via reflection, this attribute should                             be set to indicate the application which will load this assembly.                             The configuration of the application (usually specified via an exe.config file) will be used                             to determine how to resolve dependencies for this assembly.                         </p><p>                             The value can be in the form of a file identifier, or a formatted string                             that resolves to either a file identifier or a full path to a file.                         </p><p>                             When a shared component is loaded at run time, using the Load method, the                             application's configuration file determines the dependencies that are loaded                             for the shared component — for example, the version of a dependency that is loaded.                             This attribute gives guidance on which dependencies would be loaded at run time in order                             to figure out which dependency assemblies will also need to have native images generated                             (assuming the Dependency attribute is not set to "no").                         </p><p>                             This attribute cannot be set if the AssemblyApplication attribute is set on the parent                             File element (please note that these attributes both refer to the same application                             assembly but do very different things: specifiying File/@AssemblyApplication will force                             an assembly to install to a private location next to the indicated application, whereas                             this AssemblyApplication attribute will be used to help resolve dependent assemblies                             while generating native images for this assembly).                         </p></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Debug</td>
        <td><a href="../simple_type_yesnotype">YesNoType</a></td>
        <td>                         Set to "yes" to generate native images that can be used under a debugger.                         The default value is "no".                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Dependencies</td>
        <td><a href="../simple_type_yesnotype">YesNoType</a></td>
        <td>                         Set to "no" to generate the minimum number of native images.                         The default value is "yes".                     </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Platform</td>
        <td>Enumeration</td>
        <td>                         Sets the platform(s) for which native images will be generated.                       This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>32bit</dfn></dt><dd>                                     Attempt to generate native images only for the 32-bit version of the .NET Framework                                     on the target machine.  If the 32-bit version of the .NET Framework 2.0 or newer is not                                     present on the target machine, native image custom actions will not be scheduled.                                     This is the default value.                                 </dd><dt class="enumerationValue"><dfn>64bit</dfn></dt><dd>                                     Attempt to generate native images only for the 64-bit version of the .NET Framework                                     on the target machine.  If a 64-bit version of the .NET Framework 2.0 or newer is not                                     present on the target machine, native image custom actions will not be scheduled.                                 </dd><dt class="enumerationValue"><dfn>all</dfn></dt><dd>                                     Attempt to generate native images for the 32-bit and 64-bit versions of the .NET Framework                                     on the target machine.  If a version of the .NET Framework 2.0 or newer is not present on the                                     target machine for a processor architecture, native image custom actions will not be                                     scheduled for that processor architecture.                                 </dd></dl></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Priority</td>
        <td>Enumeration</td>
        <td>                         Sets the priority of generating the native images for this assembly.                       This attribute's value must be one of the following:<dl><dt class="enumerationValue"><dfn>0</dfn></dt><dd>                                     This is the highest priority, it means that image generation occurs syncronously                                     during the setup process.  This option will slow down setup performance.                                 </dd><dt class="enumerationValue"><dfn>1</dfn></dt><dd>                                     This will queue image generation to the NGen service to occur immediately.                                     This option will slow down setup performance.                                 </dd><dt class="enumerationValue"><dfn>2</dfn></dt><dd>                                     This will queue image generation to the NGen service to occur after all priority 1                                     assemblies have completed.                                     This option will slow down setup performance.                                 </dd><dt class="enumerationValue"><dfn>3</dfn></dt><dd>                                     This is the lowest priority, it will queue image generation to occur when the                                     machine is idle.                                     This option should not slow down setup performance.                                     This is the default value.                                 </dd></dl></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Profile</td>
        <td><a href="../simple_type_yesnotype">YesNoType</a></td>
        <td>                         Set to "yes" to generate native images that can be used under a profiler.                         The default value is "no".                     </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </dd>
  <dt>Remarks</dt>
  <dd><p>                         Native images are files containing compiled processor-specific machine code, which                         are installed into the native image cache on the local computer. The runtime                         can use native images from the cache instead using the just-in-time (JIT)                         compiler to compile the original assembly.                     </p><p>                         The native image custom actions are configured to ignore failures so that failing                         to generate or remove a native image will not cause setup to fail and roll back.                     </p><p><b>Note for patches:</b> if you built your target, or baseline, MSI with                         previous versions 3.0 or 3.5 of this extension and want to upgrade to formattable                         values for @AssemblyApplication or @AppBaseDirectory you must also include a                         BinaryRef to "NetFxCA" to pull in necessary changes. If you do use formattable                         values and do not include the binary changes ngen.exe will not optimize your                         native images for the specified application.                     </p><p>                         This should be a rare occurrence, however. Because you cannot remove components                         in a patch - and pyro does validate you do not - it is not practical to switch                         from using identifiers to formattable values in a patch. One practical possibility                         is if you wanted to use a different application to optimize your native images                         and that application is not already installed with the MSI to be updated.                     </p></dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Netfx Schema</a>
  </dd>
</dl>
