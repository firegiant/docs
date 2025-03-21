---
pagefind: false
title: Define Searches Using Variables
---

Searches are used to detect if the target machine meets certain conditions. The result of a search is stored into a variable. Variables are then used to construct install conditions. The search schemas are in the WixUtilExtension. Here is the list of supported searches:

* [FileSearch](../xsd/util/filesearch/)
* [RegistrySearch](../xsd/util/registrysearch/)
* [DirectorySearch](../xsd/util/directorysearch/)
* [ComponentSearch](../xsd/util/componentsearch/)
* [ProductSearch](../xsd/util/productsearch/)

A search can be dependent on the result of another search. Keep in mind that all searches are in the WiXUtilExtension. So remember to add the WiXUtilExtension namespace in the authoring. Here is an example:
```xml
<?xml version="1.0"?>
<Wix xmlns="http://schemas.microsoft.com/wix/2006/wi"
     xmlns:util="http://schemas.microsoft.com/wix/UtilExtension">
  <Fragment>
    <util:RegistrySearch Id="Path"
        Variable="UniqueId"
        Root="HKLM"
        Key="Software\MyCompany\MyProduct\Unique Id\Product"
        Result="Value" />
    <util:RegistrySearch 
        Variable="patchLevel"
        Root="HKLM"
        Key="Software\MyCompany\MyProduct\[UniqueId]\Setup\PatchLevel"
        Result="Exists" 
        After="Path" />
  </Fragment>
</Wix>
```
After the searches are defined and stored into variables, the variables can then be used in install conditions. For example, you can use the result of the registry searches in the install condition of your package by adding both the searches and the install conditions. Here&apos;s an example of a complete fragment that contains a package definition with conditions and searches:

```
<?xml version="1.0"?>
 <Wix xmlns="http://schemas.microsoft.com/wix/2006/wi"
      xmlns:util="http://schemas.microsoft.com/wix/UtilExtension">
  <Fragment>
    <util:RegistrySearch Id="Path"
        Variable="UniqueId"
        Root="HKLM"
        Key="Software\MyCompany\MyProduct\Unique Id\Product"
        Result="Value" />
    <util:RegistrySearch 
        Variable="patchLevel"
        Root="HKLM"
        Key="Software\MyCompany\MyProduct\[UniqueId]\Setup\PatchLevel"
        Result="Exists" 
        After="Path" />

    <PackageGroup Id="MyPackage">
      <ExePackage 
        SourceFile="[sources]\packages\shared\MyPackage.exe"
        DownloadURL="http://mywebdomain.com/?mypackage.exe"
        InstallCommand="/q /ACTION=Install"
        RepairCommand="/q ACTION=Repair /hideconsole"
        UninstallCommand="/q ACTION=Uninstall /hideconsole"
        InstallCondition="x86 = 1 AND OSVersion >= v5.0.5121.0 AND patchLevel = 0" />
    </PackageGroup>
  </Fragment>
</Wix>
```

Now you have a fully-defined fragment that can be shared to be consumed by other Burn packages. To see how to chain this package into a Burn package, see [Chain Packages into a Bundle](bundle_author_chain/).
