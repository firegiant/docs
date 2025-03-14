---
pagefind: false
title: WiX Toolset v3 Manual Table of Contents
---

* [Windows Installer XML (WiX)](main/)
   * [WiX Toolset License](main/license/)
   * [Getting Started Learning WiX](main/wix_learning/)
   * [Getting Help](main/help/)
* [Tools and Concepts](overview/)
   * [File Types](overview/files/)
   * [List of Tools](overview/alltools/)
   * [Tools and Concepts](overview/tools/)
   * [Preprocessor](overview/preprocessor/)
   * [Compiler](overview/candle/)
   * [Linker (light)](overview/light/)
   * [Library Tool (lit)](overview/lit/)
   * [Harvest Tool (Heat)](overview/heat/)
   * [Insignia](overview/insignia/)
   * [WixCop](overview/wixcop/)
   * [Unit-testing custom actions with Lux](overview/lux/)
   * [MSI Tables to WiX Schema](overview/msitowix/)
   * [Code Pages](overview/codepage/)
   * [Useful Windows Installer Information](overview/msi_useful_links/)
* [Working in Visual Studio](votive/)
   * [Project Templates](votive/votive_project_templates/)
   * [Item Templates](votive/votive_item_templates/)
   * [Project Property Pages](votive/votive_property_pages/)
   * [Reading the Default WiX Project Template](votive/votive_project_template_default/)
   * [Creating a simple setup](votive/authoring_first_votive_project/)
   * [Using Project References and Variables](votive/votive_project_references/)
* [Working with MSBuild](msbuild/)
   * [Creating a .wixproj File](msbuild/authoring_first_msbuild_project/)
   * [Integrating WiX Projects Into Daily Builds](msbuild/daily_builds/)
   * [Building WiX Projects In Team Foundation Build](msbuild/wix_with_team_build/)
   * [WiX MSBuild Target Reference](msbuild/target_reference/)
      * [HarvestDirectory Target](msbuild/target_reference/harvestdirectory/)
      * [HarvestFile Target](msbuild/target_reference/harvestfile/)
      * [HarvestProjects Target](msbuild/target_reference/harvestprojects/)
   * [WiX MSBuild Task Reference](msbuild/task_reference/)
      * [Candle Task](msbuild/task_reference/candle/)
      * [HeatDirectory Task](msbuild/task_reference/heatdirectory/)
      * [HeatFile Task](msbuild/task_reference/heatfile/)
      * [HeatProject Task](msbuild/task_reference/heatproject/)
      * [Insignia Task](msbuild/task_reference/insignia/)
      * [Light Task](msbuild/task_reference/light/)
      * [Lit Task](msbuild/task_reference/lit/)
* [WixUI Dialog Library](wixui/)
   * [Using Built-in WixUI Dialog Sets](wixui/wixui_dialog_library/)
   * [Customizing Built-in WixUI Dialog Sets](wixui/wixui_customizations/)
   * [Using Localized Versions of WixUI](wixui/wixui_localization/)
   * [WixUI Dialog Library Reference](wixui/dialog_reference/)
      * [WixUI_Advanced Dialog Set](wixui/dialog_reference/wixui_advanced/)
      * [WixUI_FeatureTree Dialog Set](wixui/dialog_reference/wixui_featuretree/)
      * [WixUI_InstallDir Dialog Set](wixui/dialog_reference/wixui_installdir/)
      * [WixUI_Minimal Dialog Set](wixui/dialog_reference/wixui_minimal/)
      * [WixUI_Mondo Dialog Set](wixui/dialog_reference/wixui_mondo/)
      * [WixUI Dialogs](wixui/dialog_reference/wixui_dialogs/)
* [Building Installation Package Bundles](bundle/)
   * [Create the Skeleton Bundle Authoring](bundle/authoring_bundle_skeleton/)
   * [Author Bootstrapper Application for a Bundle](bundle/authoring_bundle_application/)
   * [Author a Bundle Package Manifest](bundle/authoring_bundle_package_manifest/)
   * [Burn Built-in Variables](bundle/bundle_built_in_variables/)
   * [Define Searches Using Variables](bundle/bundle_define_searches/)
   * [Chain Packages into a Bundle](bundle/bundle_author_chain/)
   * [Working with WiX Standard Bootstrapper Application](bundle/wixstdba/)
      * [Specifying the WiX Standard Bootstrapper Application License](bundle/wixstdba/wixstdba_license/)
      * [Changing the WiX Standard Bootstrapper Application Branding](bundle/wixstdba/wixstdba_branding/)
      * [Customize the WiX Standard Bootstrapper Application Layout](bundle/wixstdba/wixstdba_customize/)
      * [Using WiX Standard Bootstrapper Application Variables](bundle/wixstdba/wixstdba_variables/)
   * [Building a Custom Bootstrapper Application](bundle/ba/)
      * [Bootstrapper Application Interface](bundle/ba/bootstrapper_application_interface/)
* [How To Guides](howtos/)
   * [How To: Files, Shortcuts and Registry](howtos/files_and_registry/)
      * [How To: Add a File to Your Installer](howtos/files_and_registry/add_a_file/)
      * [How To: Check the Version Number of a File During Installation](howtos/files_and_registry/check_the_version_number/)
      * [How To: Create a Shortcut on the Start Menu](howtos/files_and_registry/create_start_menu_shortcut/)
      * [How To: Create a Shortcut to a Webpage](howtos/files_and_registry/create_internet_shortcut/)
      * [How To: Create an Uninstall Shortcut](howtos/files_and_registry/create_uninstall_shortcut/)
      * [How To: NGen Managed Assemblies During Installation](howtos/files_and_registry/ngen_managed_assemblies/)
      * [How To: Reference another DirectorySearch element](howtos/files_and_registry/directorysearchref/)
      * [How To: Get the parent directory of a file search](howtos/files_and_registry/parentdirectorysearch/)
      * [How To: Read a Registry Entry During Installation](howtos/files_and_registry/read_a_registry_entry/)
      * [How To: Write a Registry Entry During Installation](howtos/files_and_registry/write_a_registry_entry/)
   * [How To: Redistributables and Install Checks](howtos/redistributables_and_install_checks/)
      * [How To: Block Installation Based on OS Version](howtos/redistributables_and_install_checks/block_install_on_os/)
      * [How To: Block Bootstrapper Installation Based on Registry Key](howtos/redistributables_and_install_checks/block_stdba_install_on_reg/)
      * [How To: Check for .NET Framework Versions](howtos/redistributables_and_install_checks/check_for_dotnet/)
      * [How To: Install DirectX 9.0 With Your Installer](howtos/redistributables_and_install_checks/install_directx9/)
      * [How To: Install the .NET Framework Using Burn](howtos/redistributables_and_install_checks/install_dotnet/)
      * [How To: Install the Visual C++ Redistributable with your installer](howtos/redistributables_and_install_checks/install_vcredist/)
   * [How To: User Interface and Localization](howtos/ui_and_localization/)
      * [How To: Build a Localized Version of Your Installer](howtos/ui_and_localization/build_a_localized_version/)
      * [Specifying Cultures to Build](howtos/ui_and_localization/specifying_cultures_to_build/)
      * [How To: Make your installer localizable](howtos/ui_and_localization/make_installer_localizable/)
      * [How To: Set Your Installer's Icon in Add/Remove Programs](howtos/ui_and_localization/configure_arp_appearance/)
      * [How To: Run the Installed Application After Setup](howtos/ui_and_localization/run_program_after_install/)
   * [How To: Updates](howtos/updates/)
      * [How To: Implement a Major Upgrade In Your Installer](howtos/updates/major_upgrade/)
   * [How to: Author product dependencies](howtos/author_product_dependencies/)
   * [How To: General How Tos](howtos/general/)
      * [How To: Use WiX Extensions](howtos/general/extension_usage_introduction/)
      * [How To: Generate a GUID](howtos/general/generate_guids/)
      * [How To: Get a Log of Your Installation for Debugging](howtos/general/get_a_log/)
      * [How To: Look Inside Your MSI With Orca](howtos/general/look_inside_msi/)
      * [How To: Optimize build speed](howtos/general/optimizing_builds/)
      * [How To: Specify source files](howtos/general/specifying_source_files/)
      * [How To: Install a Windows service](howtos/general/install_windows_service/)
* [Standard Custom Actions](customactions/)
   * [Using Standard Custom Actions](customactions/using_standard_customactions/)
   * [OSInfo custom actions](customactions/osinfo/)
   * [Performance Counter Custom Action](customactions/perfmon/)
   * [Quiet Execution Custom Action](customactions/qtexec/)
   * [ShellExecute CustomAction](customactions/shellexec/)
   * [WixDirectXExtension](customactions/wixdirectxextension/)
   * [WixExitEarlyWithSuccess Custom Action](customactions/wixexitearlywithsuccess/)
   * [WixFailWhenDeferred Custom Action](customactions/wixfailwhendeferred/)
   * [WixGamingExtension](customactions/wixgamingextension/)
   * [WixNetfxExtension](customactions/wixnetfxextension/)
   * [WixBroadcastSettingChange and WixBroadcastEnvironmentChange Custom Actions](customactions/wixsettingchange/)
   * [WixVSExtension](customactions/wixvsextension/)
   * [WixWaitForEvent Custom Action](customactions/wixwaitforevent/)
* [Creating patches](patching/)
   * [Using Patch Creation Properties](patching/patch_building/)
   * [Restrictions for Patches](patching/patch_restrictions/)
   * [Using Purely WiX](patching/wix_patching/)
* [WiX Schema References](xsd/)
   * [Bal Schema](xsd/bal/)
      * [Condition Element (Bal Extension)](xsd/bal/condition/)
      * [Overridable Attribute (Bal Extension)](xsd/bal/overridable/)
      * [PrereqSupportPackage Attribute (Bal Extension)](xsd/bal/prereqsupportpackage/)
      * [UseUILanguages Attribute (Bal Extension)](xsd/bal/useuilanguages/)
      * [WixManagedBootstrapperApplicationHost Element (Bal Extension)](xsd/bal/wixmanagedbootstrapperapplicationhost/)
      * [WixStandardBootstrapperApplication Element (Bal Extension)](xsd/bal/wixstandardbootstrapperapplication/)
   * [Complus Schema](xsd/complus/)
      * [ComPlusApplication Element (Complus Extension)](xsd/complus/complusapplication/)
      * [ComPlusApplicationRole Element (Complus Extension)](xsd/complus/complusapplicationrole/)
      * [ComPlusAssembly Element (Complus Extension)](xsd/complus/complusassembly/)
      * [ComPlusAssemblyDependency Element (Complus Extension)](xsd/complus/complusassemblydependency/)
      * [ComPlusComponent Element (Complus Extension)](xsd/complus/compluscomponent/)
      * [ComPlusGroupInApplicationRole Element (Complus Extension)](xsd/complus/complusgroupinapplicationrole/)
      * [ComPlusGroupInPartitionRole Element (Complus Extension)](xsd/complus/complusgroupinpartitionrole/)
      * [ComPlusInterface Element (Complus Extension)](xsd/complus/complusinterface/)
      * [ComPlusMethod Element (Complus Extension)](xsd/complus/complusmethod/)
      * [ComPlusPartition Element (Complus Extension)](xsd/complus/compluspartition/)
      * [ComPlusPartitionRole Element (Complus Extension)](xsd/complus/compluspartitionrole/)
      * [ComPlusPartitionUser Element (Complus Extension)](xsd/complus/compluspartitionuser/)
      * [ComPlusRoleForComponent Element (Complus Extension)](xsd/complus/complusroleforcomponent/)
      * [ComPlusRoleForInterface Element (Complus Extension)](xsd/complus/complusroleforinterface/)
      * [ComPlusRoleForMethod Element (Complus Extension)](xsd/complus/complusroleformethod/)
      * [ComPlusSubscription Element (Complus Extension)](xsd/complus/complussubscription/)
      * [ComPlusUserInApplicationRole Element (Complus Extension)](xsd/complus/complususerinapplicationrole/)
      * [ComPlusUserInPartitionRole Element (Complus Extension)](xsd/complus/complususerinpartitionrole/)
   * [Dependency Schema](xsd/dependency/)
      * [ProviderKey Attribute (Dependency Extension)](xsd/dependency/providerkey/)
      * [Provides Element (Dependency Extension)](xsd/dependency/provides/)
      * [Requires Element (Dependency Extension)](xsd/dependency/requires/)
      * [RequiresRef Element (Dependency Extension)](xsd/dependency/requiresref/)
   * [Difxapp Schema](xsd/difxapp/)
      * [Driver Element (Difxapp Extension)](xsd/difxapp/driver/)
   * [Firewall Schema](xsd/firewall/)
      * [FirewallException Element (Firewall Extension)](xsd/firewall/firewallexception/)
      * [RemoteAddress Element (Firewall Extension)](xsd/firewall/remoteaddress/)
   * [Gaming Schema](xsd/gaming/)
      * [Game Element (Gaming Extension)](xsd/gaming/game/)
      * [IsRichSavedGame Attribute (Gaming Extension)](xsd/gaming/isrichsavedgame/)
      * [PlayTask Element (Gaming Extension)](xsd/gaming/playtask/)
      * [SupportTask Element (Gaming Extension)](xsd/gaming/supporttask/)
   * [Http Schema](xsd/http/)
      * [UrlAce Element (Http Extension)](xsd/http/urlace/)
      * [UrlReservation Element (Http Extension)](xsd/http/urlreservation/)
   * [Iis Schema](xsd/iis/)
      * [Certificate Element (Iis Extension)](xsd/iis/certificate/)
      * [CertificateRef Element (Iis Extension)](xsd/iis/certificateref/)
      * [HttpHeader Element (Iis Extension)](xsd/iis/httpheader/)
      * [MimeMap Element (Iis Extension)](xsd/iis/mimemap/)
      * [RecycleTime Element (Iis Extension)](xsd/iis/recycletime/)
      * [WebAddress Element (Iis Extension)](xsd/iis/webaddress/)
      * [WebApplication Element (Iis Extension)](xsd/iis/webapplication/)
      * [WebApplicationExtension Element (Iis Extension)](xsd/iis/webapplicationextension/)
      * [WebAppPool Element (Iis Extension)](xsd/iis/webapppool/)
      * [WebDir Element (Iis Extension)](xsd/iis/webdir/)
      * [WebDirProperties Element (Iis Extension)](xsd/iis/webdirproperties/)
      * [WebError Element (Iis Extension)](xsd/iis/weberror/)
      * [WebFilter Element (Iis Extension)](xsd/iis/webfilter/)
      * [WebLog Element (Iis Extension)](xsd/iis/weblog/)
      * [WebProperty Element (Iis Extension)](xsd/iis/webproperty/)
      * [WebServiceExtension Element (Iis Extension)](xsd/iis/webserviceextension/)
      * [WebSite Element (Iis Extension)](xsd/iis/website/)
      * [WebVirtualDir Element (Iis Extension)](xsd/iis/webvirtualdir/)
   * [Lux Schema](xsd/lux/)
      * [Condition Element (Lux Extension)](xsd/lux/condition/)
      * [Expression Element (Lux Extension)](xsd/lux/expression/)
      * [Mutation Element (Lux Extension)](xsd/lux/mutation/)
      * [UnitTest Element (Lux Extension)](xsd/lux/unittest/)
      * [UnitTestRef Element (Lux Extension)](xsd/lux/unittestref/)
   * [Msmq Schema](xsd/msmq/)
      * [MessageQueue Element (Msmq Extension)](xsd/msmq/messagequeue/)
      * [MessageQueuePermission Element (Msmq Extension)](xsd/msmq/messagequeuepermission/)
   * [Netfx Schema](xsd/netfx/)
      * [NativeImage Element (Netfx Extension)](xsd/netfx/nativeimage/)
   * [Ps Schema](xsd/ps/)
      * [FormatsFile Element (Ps Extension)](xsd/ps/formatsfile/)
      * [RequiredVersion Attribute (Ps Extension)](xsd/ps/requiredversion/)
      * [SnapIn Element (Ps Extension)](xsd/ps/snapin/)
      * [TypesFile Element (Ps Extension)](xsd/ps/typesfile/)
   * [Sql Schema](xsd/sql/)
      * [SqlDatabase Element (Sql Extension)](xsd/sql/sqldatabase/)
      * [SqlFileSpec Element (Sql Extension)](xsd/sql/sqlfilespec/)
      * [SqlLogFileSpec Element (Sql Extension)](xsd/sql/sqllogfilespec/)
      * [SqlScript Element (Sql Extension)](xsd/sql/sqlscript/)
      * [SqlString Element (Sql Extension)](xsd/sql/sqlstring/)
   * [Tag Schema](xsd/tag/)
      * [Tag Element (Tag Extension)](xsd/tag/tag/)
      * [TagRef Element (Tag Extension)](xsd/tag/tagref/)
   * [Thmutil Schema](xsd/thmutil/)
      * [Billboard Element (Thmutil Extension)](xsd/thmutil/billboard/)
      * [Button Element (Thmutil Extension)](xsd/thmutil/button/)
      * [Checkbox Element (Thmutil Extension)](xsd/thmutil/checkbox/)
      * [Column Element (Thmutil Extension)](xsd/thmutil/column/)
      * [Combobox Element (Thmutil Extension)](xsd/thmutil/combobox/)
      * [Editbox Element (Thmutil Extension)](xsd/thmutil/editbox/)
      * [Font Element (Thmutil Extension)](xsd/thmutil/font/)
      * [Hyperlink Element (Thmutil Extension)](xsd/thmutil/hyperlink/)
      * [Hypertext Element (Thmutil Extension)](xsd/thmutil/hypertext/)
      * [Image Element (Thmutil Extension)](xsd/thmutil/image/)
      * [ImageList Element (Thmutil Extension)](xsd/thmutil/imagelist/)
      * [ListView Element (Thmutil Extension)](xsd/thmutil/listview/)
      * [Page Element (Thmutil Extension)](xsd/thmutil/page/)
      * [Progressbar Element (Thmutil Extension)](xsd/thmutil/progressbar/)
      * [Richedit Element (Thmutil Extension)](xsd/thmutil/richedit/)
      * [Static Element (Thmutil Extension)](xsd/thmutil/static/)
      * [Tab Element (Thmutil Extension)](xsd/thmutil/tab/)
      * [Text Element (Thmutil Extension)](xsd/thmutil/text/)
      * [Theme Element (Thmutil Extension)](xsd/thmutil/theme/)
      * [TreeView Element (Thmutil Extension)](xsd/thmutil/treeview/)
      * [Window Element (Thmutil Extension)](xsd/thmutil/window/)
   * [Util Schema](xsd/util/)
      * [CloseApplication Element (Util Extension)](xsd/util/closeapplication/)
      * [ComponentSearch Element (Util Extension)](xsd/util/componentsearch/)
      * [ComponentSearchRef Element (Util Extension)](xsd/util/componentsearchref/)
      * [DirectorySearch Element (Util Extension)](xsd/util/directorysearch/)
      * [DirectorySearchRef Element (Util Extension)](xsd/util/directorysearchref/)
      * [EventManifest Element (Util Extension)](xsd/util/eventmanifest/)
      * [EventSource Element (Util Extension)](xsd/util/eventsource/)
      * [FileSearch Element (Util Extension)](xsd/util/filesearch/)
      * [FileSearchRef Element (Util Extension)](xsd/util/filesearchref/)
      * [FileShare Element (Util Extension)](xsd/util/fileshare/)
      * [FileSharePermission Element (Util Extension)](xsd/util/filesharepermission/)
      * [Group Element (Util Extension)](xsd/util/group/)
      * [GroupRef Element (Util Extension)](xsd/util/groupref/)
      * [InternetShortcut Element (Util Extension)](xsd/util/internetshortcut/)
      * [PerfCounter Element (Util Extension)](xsd/util/perfcounter/)
      * [PerfCounterManifest Element (Util Extension)](xsd/util/perfcountermanifest/)
      * [PerformanceCategory Element (Util Extension)](xsd/util/performancecategory/)
      * [PerformanceCounter Element (Util Extension)](xsd/util/performancecounter/)
      * [PermissionEx Element (Util Extension)](xsd/util/permissionex/)
      * [ProductSearch Element (Util Extension)](xsd/util/productsearch/)
      * [ProductSearchRef Element (Util Extension)](xsd/util/productsearchref/)
      * [RegistrySearch Element (Util Extension)](xsd/util/registrysearch/)
      * [RegistrySearchRef Element (Util Extension)](xsd/util/registrysearchref/)
      * [RemoveFolderEx Element (Util Extension)](xsd/util/removefolderex/)
      * [RestartResource Element (Util Extension)](xsd/util/restartresource/)
      * [ServiceConfig Element (Util Extension)](xsd/util/serviceconfig/)
      * [User Element (Util Extension)](xsd/util/user/)
      * [XmlConfig Element (Util Extension)](xsd/util/xmlconfig/)
      * [XmlFile Element (Util Extension)](xsd/util/xmlfile/)
   * [Vs Schema](xsd/vs/)
      * [HelpCollection Element (Vs Extension)](xsd/vs/helpcollection/)
      * [HelpCollectionRef Element (Vs Extension)](xsd/vs/helpcollectionref/)
      * [HelpFile Element (Vs Extension)](xsd/vs/helpfile/)
      * [HelpFileRef Element (Vs Extension)](xsd/vs/helpfileref/)
      * [HelpFilter Element (Vs Extension)](xsd/vs/helpfilter/)
      * [HelpFilterRef Element (Vs Extension)](xsd/vs/helpfilterref/)
      * [PlugCollectionInto Element (Vs Extension)](xsd/vs/plugcollectioninto/)
      * [VsixPackage Element (Vs Extension)](xsd/vs/vsixpackage/)
   * [Wix Schema](xsd/wix/)
      * [AdminExecuteSequence Element](xsd/wix/adminexecutesequence/)
      * [AdminUISequence Element](xsd/wix/adminuisequence/)
      * [AdvertiseExecuteSequence Element](xsd/wix/advertiseexecutesequence/)
      * [All Element](xsd/wix/all/)
      * [AllocateRegistrySpace Element](xsd/wix/allocateregistryspace/)
      * [AppData Element](xsd/wix/appdata/)
      * [AppId Element](xsd/wix/appid/)
      * [ApprovedExeForElevation Element](xsd/wix/approvedexeforelevation/)
      * [AppSearch Element](xsd/wix/appsearch/)
      * [AssemblyName Element](xsd/wix/assemblyname/)
      * [Billboard Element](xsd/wix/billboard/)
      * [BillboardAction Element](xsd/wix/billboardaction/)
      * [Binary Element](xsd/wix/binary/)
      * [BinaryRef Element](xsd/wix/binaryref/)
      * [BindImage Element](xsd/wix/bindimage/)
      * [BootstrapperApplication Element](xsd/wix/bootstrapperapplication/)
      * [BootstrapperApplicationRef Element](xsd/wix/bootstrapperapplicationref/)
      * [Bundle Element](xsd/wix/bundle/)
      * [Catalog Element](xsd/wix/catalog/)
      * [Category Element](xsd/wix/category/)
      * [CCPSearch Element](xsd/wix/ccpsearch/)
      * [Chain Element](xsd/wix/chain/)
      * [Class Element](xsd/wix/class/)
      * [Column Element](xsd/wix/column/)
      * [ComboBox Element](xsd/wix/combobox/)
      * [CommandLine Element](xsd/wix/commandline/)
      * [ComplianceCheck Element](xsd/wix/compliancecheck/)
      * [ComplianceDrive Element](xsd/wix/compliancedrive/)
      * [Component Element](xsd/wix/component/)
      * [ComponentGroup Element](xsd/wix/componentgroup/)
      * [ComponentGroupRef Element](xsd/wix/componentgroupref/)
      * [ComponentRef Element](xsd/wix/componentref/)
      * [ComponentSearch Element](xsd/wix/componentsearch/)
      * [Condition Element](xsd/wix/condition/)
      * [Configuration Element](xsd/wix/configuration/)
      * [ConfigurationData Element](xsd/wix/configurationdata/)
      * [Container Element](xsd/wix/container/)
      * [ContainerRef Element](xsd/wix/containerref/)
      * [Control Element](xsd/wix/control/)
      * [CopyFile Element](xsd/wix/copyfile/)
      * [CostFinalize Element](xsd/wix/costfinalize/)
      * [CostInitialize Element](xsd/wix/costinitialize/)
      * [CreateFolder Element](xsd/wix/createfolder/)
      * [CreateFolders Element](xsd/wix/createfolders/)
      * [CreateShortcuts Element](xsd/wix/createshortcuts/)
      * [Custom Element](xsd/wix/custom/)
      * [CustomAction Element](xsd/wix/customaction/)
      * [CustomActionRef Element](xsd/wix/customactionref/)
      * [CustomProperty Element](xsd/wix/customproperty/)
      * [CustomTable Element](xsd/wix/customtable/)
      * [Data Element](xsd/wix/data/)
      * [DeleteServices Element](xsd/wix/deleteservices/)
      * [Dependency Element](xsd/wix/dependency/)
      * [Dialog Element](xsd/wix/dialog/)
      * [DialogRef Element](xsd/wix/dialogref/)
      * [DigitalCertificate Element](xsd/wix/digitalcertificate/)
      * [DigitalCertificateRef Element](xsd/wix/digitalcertificateref/)
      * [DigitalSignature Element](xsd/wix/digitalsignature/)
      * [Directory Element](xsd/wix/directory/)
      * [DirectoryRef Element](xsd/wix/directoryref/)
      * [DirectorySearch Element](xsd/wix/directorysearch/)
      * [DirectorySearchRef Element](xsd/wix/directorysearchref/)
      * [DisableRollback Element](xsd/wix/disablerollback/)
      * [DuplicateFiles Element](xsd/wix/duplicatefiles/)
      * [EmbeddedChainer Element](xsd/wix/embeddedchainer/)
      * [EmbeddedChainerRef Element](xsd/wix/embeddedchainerref/)
      * [EmbeddedUI Element](xsd/wix/embeddedui/)
      * [EmbeddedUIResource Element](xsd/wix/embeddeduiresource/)
      * [EnsureTable Element](xsd/wix/ensuretable/)
      * [Environment Element](xsd/wix/environment/)
      * [Error Element](xsd/wix/error/)
      * [Exclusion Element](xsd/wix/exclusion/)
      * [ExecuteAction Element](xsd/wix/executeaction/)
      * [ExePackage Element](xsd/wix/exepackage/)
      * [ExitCode Element](xsd/wix/exitcode/)
      * [Extension Element](xsd/wix/extension/)
      * [ExternalFile Element](xsd/wix/externalfile/)
      * [Failure Element](xsd/wix/failure/)
      * [Family Element](xsd/wix/family/)
      * [Feature Element](xsd/wix/feature/)
      * [FeatureGroup Element](xsd/wix/featuregroup/)
      * [FeatureGroupRef Element](xsd/wix/featuregroupref/)
      * [FeatureRef Element](xsd/wix/featureref/)
      * [File Element](xsd/wix/file/)
      * [FileCost Element](xsd/wix/filecost/)
      * [FileSearch Element](xsd/wix/filesearch/)
      * [FileSearchRef Element](xsd/wix/filesearchref/)
      * [FileTypeMask Element](xsd/wix/filetypemask/)
      * [FindRelatedProducts Element](xsd/wix/findrelatedproducts/)
      * [ForceReboot Element](xsd/wix/forcereboot/)
      * [Fragment Element](xsd/wix/fragment/)
      * [Icon Element](xsd/wix/icon/)
      * [IconRef Element](xsd/wix/iconref/)
      * [IgnoreModularization Element](xsd/wix/ignoremodularization/)
      * [IgnoreRange Element](xsd/wix/ignorerange/)
      * [IgnoreTable Element](xsd/wix/ignoretable/)
      * [Include Element](xsd/wix/include/)
      * [IniFile Element](xsd/wix/inifile/)
      * [IniFileSearch Element](xsd/wix/inifilesearch/)
      * [InstallAdminPackage Element](xsd/wix/installadminpackage/)
      * [InstallExecute Element](xsd/wix/installexecute/)
      * [InstallExecuteAgain Element](xsd/wix/installexecuteagain/)
      * [InstallExecuteSequence Element](xsd/wix/installexecutesequence/)
      * [InstallFiles Element](xsd/wix/installfiles/)
      * [InstallFinalize Element](xsd/wix/installfinalize/)
      * [InstallInitialize Element](xsd/wix/installinitialize/)
      * [InstallODBC Element](xsd/wix/installodbc/)
      * [InstallServices Element](xsd/wix/installservices/)
      * [InstallUISequence Element](xsd/wix/installuisequence/)
      * [InstallValidate Element](xsd/wix/installvalidate/)
      * [Instance Element](xsd/wix/instance/)
      * [InstanceTransforms Element](xsd/wix/instancetransforms/)
      * [Interface Element](xsd/wix/interface/)
      * [IsolateComponent Element](xsd/wix/isolatecomponent/)
      * [IsolateComponents Element](xsd/wix/isolatecomponents/)
      * [LaunchConditions Element](xsd/wix/launchconditions/)
      * [ListBox Element](xsd/wix/listbox/)
      * [ListItem Element](xsd/wix/listitem/)
      * [ListView Element](xsd/wix/listview/)
      * [Log Element](xsd/wix/log/)
      * [MajorUpgrade Element](xsd/wix/majorupgrade/)
      * [Media Element](xsd/wix/media/)
      * [MediaTemplate Element](xsd/wix/mediatemplate/)
      * [Merge Element](xsd/wix/merge/)
      * [MergeRef Element](xsd/wix/mergeref/)
      * [MigrateFeatureStates Element](xsd/wix/migratefeaturestates/)
      * [MIME Element](xsd/wix/mime/)
      * [Module Element](xsd/wix/module/)
      * [MoveFiles Element](xsd/wix/movefiles/)
      * [MsiPackage Element](xsd/wix/msipackage/)
      * [MsiProperty Element](xsd/wix/msiproperty/)
      * [MsiPublishAssemblies Element](xsd/wix/msipublishassemblies/)
      * [MsiUnpublishAssemblies Element](xsd/wix/msiunpublishassemblies/)
      * [MspPackage Element](xsd/wix/msppackage/)
      * [MsuPackage Element](xsd/wix/msupackage/)
      * [MultiStringValue Element](xsd/wix/multistringvalue/)
      * [ODBCDataSource Element](xsd/wix/odbcdatasource/)
      * [ODBCDriver Element](xsd/wix/odbcdriver/)
      * [ODBCTranslator Element](xsd/wix/odbctranslator/)
      * [OptimizeCustomActions Element](xsd/wix/optimizecustomactions/)
      * [OptionalUpdateRegistration Element](xsd/wix/optionalupdateregistration/)
      * [Package Element](xsd/wix/package/)
      * [PackageCertificates Element](xsd/wix/packagecertificates/)
      * [PackageGroup Element](xsd/wix/packagegroup/)
      * [PackageGroupRef Element](xsd/wix/packagegroupref/)
      * [Patch Element](xsd/wix/patch/)
      * [PatchBaseline Element](xsd/wix/patchbaseline/)
      * [PatchCertificates Element](xsd/wix/patchcertificates/)
      * [PatchCreation Element](xsd/wix/patchcreation/)
      * [PatchFamily Element](xsd/wix/patchfamily/)
      * [PatchFamilyGroup Element](xsd/wix/patchfamilygroup/)
      * [PatchFamilyGroupRef Element](xsd/wix/patchfamilygroupref/)
      * [PatchFamilyRef Element](xsd/wix/patchfamilyref/)
      * [PatchFiles Element](xsd/wix/patchfiles/)
      * [PatchInformation Element](xsd/wix/patchinformation/)
      * [PatchMetadata Element](xsd/wix/patchmetadata/)
      * [PatchProperty Element](xsd/wix/patchproperty/)
      * [PatchSequence Element](xsd/wix/patchsequence/)
      * [Payload Element](xsd/wix/payload/)
      * [PayloadGroup Element](xsd/wix/payloadgroup/)
      * [PayloadGroupRef Element](xsd/wix/payloadgroupref/)
      * [Permission Element](xsd/wix/permission/)
      * [PermissionEx Element](xsd/wix/permissionex/)
      * [ProcessComponents Element](xsd/wix/processcomponents/)
      * [Product Element](xsd/wix/product/)
      * [ProductSearch Element](xsd/wix/productsearch/)
      * [ProgId Element](xsd/wix/progid/)
      * [ProgressText Element](xsd/wix/progresstext/)
      * [Property Element](xsd/wix/property/)
      * [PropertyRef Element](xsd/wix/propertyref/)
      * [ProtectFile Element](xsd/wix/protectfile/)
      * [ProtectRange Element](xsd/wix/protectrange/)
      * [Publish Element](xsd/wix/publish/)
      * [PublishComponents Element](xsd/wix/publishcomponents/)
      * [PublishFeatures Element](xsd/wix/publishfeatures/)
      * [PublishProduct Element](xsd/wix/publishproduct/)
      * [RadioButton Element](xsd/wix/radiobutton/)
      * [RadioButtonGroup Element](xsd/wix/radiobuttongroup/)
      * [RegisterClassInfo Element](xsd/wix/registerclassinfo/)
      * [RegisterComPlus Element](xsd/wix/registercomplus/)
      * [RegisterExtensionInfo Element](xsd/wix/registerextensioninfo/)
      * [RegisterFonts Element](xsd/wix/registerfonts/)
      * [RegisterMIMEInfo Element](xsd/wix/registermimeinfo/)
      * [RegisterProduct Element](xsd/wix/registerproduct/)
      * [RegisterProgIdInfo Element](xsd/wix/registerprogidinfo/)
      * [RegisterTypeLibraries Element](xsd/wix/registertypelibraries/)
      * [RegisterUser Element](xsd/wix/registeruser/)
      * [Registry Element](xsd/wix/registry/)
      * [RegistryKey Element](xsd/wix/registrykey/)
      * [RegistrySearch Element](xsd/wix/registrysearch/)
      * [RegistrySearchRef Element](xsd/wix/registrysearchref/)
      * [RegistryValue Element](xsd/wix/registryvalue/)
      * [RelatedBundle Element](xsd/wix/relatedbundle/)
      * [RemotePayload Element](xsd/wix/remotepayload/)
      * [RemoveDuplicateFiles Element](xsd/wix/removeduplicatefiles/)
      * [RemoveEnvironmentStrings Element](xsd/wix/removeenvironmentstrings/)
      * [RemoveExistingProducts Element](xsd/wix/removeexistingproducts/)
      * [RemoveFile Element](xsd/wix/removefile/)
      * [RemoveFiles Element](xsd/wix/removefiles/)
      * [RemoveFolder Element](xsd/wix/removefolder/)
      * [RemoveFolders Element](xsd/wix/removefolders/)
      * [RemoveIniValues Element](xsd/wix/removeinivalues/)
      * [RemoveODBC Element](xsd/wix/removeodbc/)
      * [RemoveRegistryKey Element](xsd/wix/removeregistrykey/)
      * [RemoveRegistryValue Element](xsd/wix/removeregistryvalue/)
      * [RemoveRegistryValues Element](xsd/wix/removeregistryvalues/)
      * [RemoveShortcuts Element](xsd/wix/removeshortcuts/)
      * [ReplacePatch Element](xsd/wix/replacepatch/)
      * [RequiredPrivilege Element](xsd/wix/requiredprivilege/)
      * [ReserveCost Element](xsd/wix/reservecost/)
      * [ResolveSource Element](xsd/wix/resolvesource/)
      * [RMCCPSearch Element](xsd/wix/rmccpsearch/)
      * [RollbackBoundary Element](xsd/wix/rollbackboundary/)
      * [Row Element](xsd/wix/row/)
      * [ScheduleReboot Element](xsd/wix/schedulereboot/)
      * [SelfRegModules Element](xsd/wix/selfregmodules/)
      * [SelfUnregModules Element](xsd/wix/selfunregmodules/)
      * [ServiceArgument Element](xsd/wix/serviceargument/)
      * [ServiceConfig Element](xsd/wix/serviceconfig/)
      * [ServiceConfigFailureActions Element](xsd/wix/serviceconfigfailureactions/)
      * [ServiceControl Element](xsd/wix/servicecontrol/)
      * [ServiceDependency Element](xsd/wix/servicedependency/)
      * [ServiceInstall Element](xsd/wix/serviceinstall/)
      * [SetDirectory Element](xsd/wix/setdirectory/)
      * [SetODBCFolders Element](xsd/wix/setodbcfolders/)
      * [SetProperty Element](xsd/wix/setproperty/)
      * [SFPCatalog Element](xsd/wix/sfpcatalog/)
      * [SFPFile Element](xsd/wix/sfpfile/)
      * [Shortcut Element](xsd/wix/shortcut/)
      * [ShortcutProperty Element](xsd/wix/shortcutproperty/)
      * [Show Element](xsd/wix/show/)
      * [SlipstreamMsp Element](xsd/wix/slipstreammsp/)
      * [StartServices Element](xsd/wix/startservices/)
      * [StopServices Element](xsd/wix/stopservices/)
      * [Subscribe Element](xsd/wix/subscribe/)
      * [Substitution Element](xsd/wix/substitution/)
      * [SymbolPath Element](xsd/wix/symbolpath/)
      * [TargetFile Element](xsd/wix/targetfile/)
      * [TargetImage Element](xsd/wix/targetimage/)
      * [TargetProductCode Element](xsd/wix/targetproductcode/)
      * [TargetProductCodes Element](xsd/wix/targetproductcodes/)
      * [Text Element](xsd/wix/text/)
      * [TextStyle Element](xsd/wix/textstyle/)
      * [TypeLib Element](xsd/wix/typelib/)
      * [UI Element](xsd/wix/ui/)
      * [UIRef Element](xsd/wix/uiref/)
      * [UIText Element](xsd/wix/uitext/)
      * [UnpublishComponents Element](xsd/wix/unpublishcomponents/)
      * [UnpublishFeatures Element](xsd/wix/unpublishfeatures/)
      * [UnregisterClassInfo Element](xsd/wix/unregisterclassinfo/)
      * [UnregisterComPlus Element](xsd/wix/unregistercomplus/)
      * [UnregisterExtensionInfo Element](xsd/wix/unregisterextensioninfo/)
      * [UnregisterFonts Element](xsd/wix/unregisterfonts/)
      * [UnregisterMIMEInfo Element](xsd/wix/unregistermimeinfo/)
      * [UnregisterProgIdInfo Element](xsd/wix/unregisterprogidinfo/)
      * [UnregisterTypeLibraries Element](xsd/wix/unregistertypelibraries/)
      * [Update Element](xsd/wix/update/)
      * [Upgrade Element](xsd/wix/upgrade/)
      * [UpgradeFile Element](xsd/wix/upgradefile/)
      * [UpgradeImage Element](xsd/wix/upgradeimage/)
      * [UpgradeVersion Element](xsd/wix/upgradeversion/)
      * [UX Element](xsd/wix/ux/)
      * [Validate Element](xsd/wix/validate/)
      * [ValidateProductID Element](xsd/wix/validateproductid/)
      * [Variable Element](xsd/wix/variable/)
      * [Verb Element](xsd/wix/verb/)
      * [Wix Element](xsd/wix/wix/)
      * [WixVariable Element](xsd/wix/wixvariable/)
      * [WriteEnvironmentStrings Element](xsd/wix/writeenvironmentstrings/)
      * [WriteIniValues Element](xsd/wix/writeinivalues/)
      * [WriteRegistryValues Element](xsd/wix/writeregistryvalues/)
   * [Wixloc Schema](xsd/wixloc/)
      * [String Element (Wixloc Extension)](xsd/wixloc/string/)
      * [UI Element (Wixloc Extension)](xsd/wixloc/ui/)
      * [WixLocalization Element (Wixloc Extension)](xsd/wixloc/wixlocalization/)
* [Developing for WiX](wixdev/)
   * [Developing for Votive](wixdev/votive_development/)
   * [Adding to the WiX Documentation](wixdev/help_development/)
   * [Developing WiX Extensions](wixdev/extensions/)
      * [Introduction to Developing WiX Extensions](wixdev/extensions/extension_development_intro/)
      * [Extensions](wixdev/extensions/extensions/)
      * [Creating a Simple WiX Extension](wixdev/extensions/extension_development_simple_example/)
      * [Creating a Preprocessor Extension](wixdev/extensions/extension_development_preprocessor/)
      * [Adding Custom Actions](wixdev/extensions/authoring_custom_actions/)
      * [Localized Extensions](wixdev/extensions/localized_extensions/)
   * [Testing WiX](wixdev/tests/)
      * [Running WiX Tests](wixdev/tests/tests_runningtests/)
      * [Writing WiX Tests](wixdev/tests/tests_writingtests/)
