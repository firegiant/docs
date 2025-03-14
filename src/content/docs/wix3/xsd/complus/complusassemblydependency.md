---
title: ComPlusAssemblyDependency Element (Complus Extension)
pagefind: false
---
<dl>
  <dt>Description</dt>
  <dd>         Defines a dependency between two assemblies. This element         affects the order in which assembles are registered. Any assemblies referenced         by this element are guarantied to be registered before, and unregistered after,         the assembly referenced by the parent ComPlusAssembly element.       </dd>
  <dt>Windows Installer references</dt>
  <dd>None</dd>
  <dt>Parents</dt>
  <dd>
    <a href="../../complus/complusassembly" class="extension">ComPlusAssembly</a>
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
        <td>RequiredAssembly</td>
        <td>String</td>
        <td>           Reference to the id of the assembly required by the parent           ComPlusAssembly element.         </td>
        <td>Yes</td>
      </tr>
    </table>
  </dd>
  <dt>Remarks</dt>
  <dd>It is only necessary to explicitly specify dependencies between           assemblies contained in the same package (MSI or MSM). Assemblies merged in to a           package from a merge module will always be installed before any assemblies           specified in the base package. Assemblies merged in from different merge           modules are sequenced using the ModuleDependency MSI table. It is not possible           to have cross dependencies between merge modules or have an assembly in a merge           module depend on an assembly in the base package.</dd>
  <dt>See Also</dt>
  <dd>
    <a href="../">Complus Schema</a>
  </dd>
</dl>
