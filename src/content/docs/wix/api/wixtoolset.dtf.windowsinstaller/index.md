---
title: WixToolset.Dtf.WindowsInstaller namespace
---
## Classes
| Class | Description |
| -------- | ----------- |
| [BadQuerySyntaxException](badquerysyntaxexception) | A bad SQL query string was passed to «see M:WixToolset.Dtf.WindowsInstaller.Database.OpenView(System.String,System.Object[])» or «see M:WixToolset.Dtf.WindowsInstaller.Database.Execute(System.String,System.Object[])» . |
| [ColumnCollection](columncollection) | Collection of column information related to a «see T:WixToolset.Dtf.WindowsInstaller.TableInfo» or «see T:WixToolset.Dtf.WindowsInstaller.View» . |
| [ColumnInfo](columninfo) | Defines a single column of a table in an installer database. |
| [ComponentInfo](componentinfo) | Provides access to information about a component within the context of an installation session. |
| [ComponentInfoCollection](componentinfocollection) | Accessor for information about components within the context of an installation session. |
| [ComponentInstallation](componentinstallation) | Represents an instance of a registered component. |
| [CustomActionAttribute](customactionattribute) | Marks a method as a custom action entry point. |
| [CustomActionData](customactiondata) | Contains a collection of key-value pairs suitable for passing between immediate and deferred/rollback/commit custom actions. |
| [Database](database) | Accesses a Windows Installer database. |
| [FeatureInfo](featureinfo) | Provides access to information about a feature within the context of an installation session. |
| [FeatureInfoCollection](featureinfocollection) | Accessor for information about features within the context of an installation session. |
| [FeatureInstallation](featureinstallation) | Represents an instance of a feature of an installed product. |
| [Installation](installation) | Subclasses of this abstract class represent a unique instance of a registered product or patch installation. |
| [InstallationPart](installationpart) | Subclasses of this abstract class represent an instance of a registered feature or component. |
| [InstallCanceledException](installcanceledexception) | User Canceled the installation. |
| [Installer](installer) | Provides static methods for installing and configuring products and patches. |
| [InstallerException](installerexception) | Base class for Windows Installer exceptions. |
| [InstallerHandle](installerhandle) | Base class for Windows Installer handle types (Database, View, Record, SummaryInfo). |
| [InvalidHandleException](invalidhandleexception) | A method was called on an invalid installer handle. The handle may have been already closed. |
| [MergeException](mergeexception) | A failure occurred when executing «see M:WixToolset.Dtf.WindowsInstaller.Database.Merge(WixToolset.Dtf.WindowsInstaller.Database,System.String)» . The exception may contain details about the merge conflict. |
| [PatchInstallation](patchinstallation) | The Patch object represents a unique instance of a patch that has been registered or applied. |
| [ProductInstallation](productinstallation) | Represents a unique instance of a product that is either advertised, installed or unknown. |
| [Record](record) | The Record object is a container for holding and transferring a variable number of values. Fields within the record are numerically indexed and can contain strings, integers, streams, and null values. Record fields are indexed starting with 1. Field 0 is a special format field. |
| [Session](session) | The Session object controls the installation process. It opens the install database, which contains the installation tables and data. |
| [SourceList](sourcelist) | A list of sources for an installed product or patch. |
| [SourceMediaList](sourcemedialist) | A list of source media for an installed product or patch. |
| [SummaryInfo](summaryinfo) | Provides access to summary information of a Windows Installer database. |
| [TableCollection](tablecollection) | Contains information about all the tables in a Windows Installer database. |
| [TableInfo](tableinfo) | Defines a table in an installation database. |
| [Transaction](transaction) | [MSI 4.5] Handle to a multi-session install transaction. |
| [View](view) | A View represents a result set obtained when processing a query using the «see M:WixToolset.Dtf.WindowsInstaller.Database.OpenView(System.String,System.Object[])» method of a «see P:WixToolset.Dtf.WindowsInstaller.View.Database» . Before any data can be transferred, the query must be executed using the «see M:WixToolset.Dtf.WindowsInstaller.View.Execute(WixToolset.Dtf.WindowsInstaller.Record)» method, passing to it all replaceable parameters designated within the SQL query string. |
## Structures
| Structure | Description |
| -------- | ----------- |
| [InstallCost](installcost) | Represents a per-drive disk space cost for an installation. |
| [MediaDisk](mediadisk) | Represents a media disk source of a product or a patch. |
| [ShortcutTarget](shortcuttarget) | Holds information about the target of a shortcut file. |
| [ValidationErrorInfo](validationerrorinfo) | Contains specific information about an error encountered by the «see M:WixToolset.Dtf.WindowsInstaller.View.Validate(WixToolset.Dtf.WindowsInstaller.Record)» , «see M:WixToolset.Dtf.WindowsInstaller.View.ValidateNew(WixToolset.Dtf.WindowsInstaller.Record)» , or «see M:WixToolset.Dtf.WindowsInstaller.View.ValidateFields(WixToolset.Dtf.WindowsInstaller.Record)» methods of the «see T:WixToolset.Dtf.WindowsInstaller.View» class. |
## Interfaces
| Interface | Description |
| -------- | ----------- |
| [IEmbeddedUI](iembeddedui) | [MSI 4.5] Interface for an embedded external user interface for an installation. |
## Enumerations
| Enumeration | Description |
| -------- | ----------- |
| [ActionResult](actionresult) | Specifies a return status value for custom actions. |
| [ComponentAttributes](componentattributes) | Available values for the Attributes column of the Component table. |
| [ControlAttributes](controlattributes) | Defines flags for the Attributes column of the Control table. |
| [CustomActionTypes](customactiontypes) | Defines flags for the Type column of the CustomAction table. |
| [DatabaseOpenMode](databaseopenmode) | Specifies the open mode for a «see T:WixToolset.Dtf.WindowsInstaller.Database» . |
| [DialogAttributes](dialogattributes) | Defines flags for the Attributes column of the Dialog table. |
| [FeatureAttributes](featureattributes) | Available values for the Attributes column of the Feature table. |
| [FileAttributes](fileattributes) | Available values for the Attributes column of the File table. |
| [IniFileAction](inifileaction) | Defines values for the Action column of the IniFile and RemoveIniFile tables. |
| [InstallLogModes](installlogmodes) | Log modes available for «see M:WixToolset.Dtf.WindowsInstaller.Installer.EnableLog(WixToolset.Dtf.WindowsInstaller.InstallLogModes,System.String)» and «see M:WixToolset.Dtf.WindowsInstaller.Installer.SetExternalUI(WixToolset.Dtf.WindowsInstaller.ExternalUIHandler,WixToolset.Dtf.WindowsInstaller.InstallLogModes)» . |
| [InstallMessage](installmessage) | Type of message to be processed by «see M:WixToolset.Dtf.WindowsInstaller.Session.Message(WixToolset.Dtf.WindowsInstaller.InstallMessage,WixToolset.Dtf.WindowsInstaller.Record)» , «see T:WixToolset.Dtf.WindowsInstaller.ExternalUIHandler» , or «see T:WixToolset.Dtf.WindowsInstaller.ExternalUIRecordHandler» . |
| [InstallMode](installmode) | Specifies the install mode for «see M:WixToolset.Dtf.WindowsInstaller.Installer.ProvideComponent(System.String,System.String,System.String,WixToolset.Dtf.WindowsInstaller.InstallMode)» or «see M:WixToolset.Dtf.WindowsInstaller.Installer.ProvideQualifiedComponent(System.String,System.String,WixToolset.Dtf.WindowsInstaller.InstallMode,System.String)» . |
| [InstallRunMode](installrunmode) | Specifies the run mode for «see M:WixToolset.Dtf.WindowsInstaller.Session.GetMode(WixToolset.Dtf.WindowsInstaller.InstallRunMode)» . |
| [InstallState](installstate) | Installed state of a Component or Feature. |
| [InstallType](installtype) | Specifies the type of installation for «see M:WixToolset.Dtf.WindowsInstaller.Installer.ApplyPatch(System.String,System.String,WixToolset.Dtf.WindowsInstaller.InstallType,System.String)» . |
| [InstallUIOptions](installuioptions) | Level of the installation user interface, specified with «see M:WixToolset.Dtf.WindowsInstaller.Installer.SetInternalUI(WixToolset.Dtf.WindowsInstaller.InstallUIOptions)» . |
| [LocatorTypes](locatortypes) | Defines values for the Type column of the CompLocator, IniLocator, and RegLocator tables. |
| [MessageBoxStyles](messageboxstyles) |  |
| [MessageButtons](messagebuttons) | Specifies constants defining which buttons to display for a message. This can be cast to the MessageBoxButtons enum in System.Windows.Forms and System.Windows. |
| [MessageDefaultButton](messagedefaultbutton) | Specifies constants defining the default button on a message. This can be cast to the MessageBoxDefaultButton enum in System.Windows.Forms and System.Windows. |
| [MessageIcon](messageicon) | Specifies constants defining which information to display. This can be cast to the MessageBoxIcon enum in System.Windows.Forms and System.Windows. |
| [MessageResult](messageresult) | Specifies a return status value for message handlers. These values are returned by «see M:WixToolset.Dtf.WindowsInstaller.Session.Message(WixToolset.Dtf.WindowsInstaller.InstallMessage,WixToolset.Dtf.WindowsInstaller.Record)» , «see T:WixToolset.Dtf.WindowsInstaller.ExternalUIHandler» , and «see M:WixToolset.Dtf.WindowsInstaller.IEmbeddedUI.ProcessMessage(WixToolset.Dtf.WindowsInstaller.InstallMessage,WixToolset.Dtf.WindowsInstaller.Record,WixToolset.Dtf.WindowsInstaller.MessageButtons,WixToolset.Dtf.WindowsInstaller.MessageIcon,WixToolset.Dtf.WindowsInstaller.MessageDefaultButton)» . |
| [PatchStates](patchstates) | Specifies the different patch states for «see M:WixToolset.Dtf.WindowsInstaller.PatchInstallation.GetPatches(System.String,System.String,System.String,WixToolset.Dtf.WindowsInstaller.UserContexts,WixToolset.Dtf.WindowsInstaller.PatchStates)» . |
| [RegistryRoot](registryroot) | Defines values for the Root column of the Registry, RemoveRegistry, and RegLocator tables. |
| [ReinstallModes](reinstallmodes) | Specifies the reinstall mode for «see M:WixToolset.Dtf.WindowsInstaller.Installer.ReinstallFeature(System.String,System.String,WixToolset.Dtf.WindowsInstaller.ReinstallModes)» or «see M:WixToolset.Dtf.WindowsInstaller.Installer.ReinstallProduct(System.String,WixToolset.Dtf.WindowsInstaller.ReinstallModes)» . |
| [RemoveFileModes](removefilemodes) | Defines values for the InstallMode column of the RemoveFile table. |
| [ServiceAttributes](serviceattributes) | Defines values for the ServiceType, StartType, and ErrorControl columns of the ServiceInstall table. |
| [ServiceControlEvents](servicecontrolevents) | Defines values for the Event column of the ServiceControl table. |
| [TextStyles](textstyles) | Defines values for the StyleBits column of the TextStyle table. |
| [TransactionAttributes](transactionattributes) | Attributes for «see T:WixToolset.Dtf.WindowsInstaller.Transaction» methods. |
| [TransformErrors](transformerrors) | Transform error conditions available for «see M:WixToolset.Dtf.WindowsInstaller.Database.CreateTransformSummaryInfo(WixToolset.Dtf.WindowsInstaller.Database,System.String,WixToolset.Dtf.WindowsInstaller.TransformErrors,WixToolset.Dtf.WindowsInstaller.TransformValidations)» or «see M:WixToolset.Dtf.WindowsInstaller.Database.ApplyTransform(System.String,WixToolset.Dtf.WindowsInstaller.TransformErrors)» . |
| [TransformValidations](transformvalidations) | Transform validation flags available for «see M:WixToolset.Dtf.WindowsInstaller.Database.CreateTransformSummaryInfo(WixToolset.Dtf.WindowsInstaller.Database,System.String,WixToolset.Dtf.WindowsInstaller.TransformErrors,WixToolset.Dtf.WindowsInstaller.TransformValidations)» . |
| [UpgradeAttributes](upgradeattributes) | Defines values for the Attributes column of the Upgrade table. |
| [UserContexts](usercontexts) | Specifies the installation context for «see T:WixToolset.Dtf.WindowsInstaller.ProductInstallation» s, «see T:WixToolset.Dtf.WindowsInstaller.PatchInstallation» es, and «see M:WixToolset.Dtf.WindowsInstaller.Installer.DetermineApplicablePatches(System.String,System.String[],WixToolset.Dtf.WindowsInstaller.InapplicablePatchHandler,System.String,WixToolset.Dtf.WindowsInstaller.UserContexts)»  |
| [ValidationError](validationerror) | Defines the type of error encountered by the «see M:WixToolset.Dtf.WindowsInstaller.View.Validate(WixToolset.Dtf.WindowsInstaller.Record)» , «see M:WixToolset.Dtf.WindowsInstaller.View.ValidateNew(WixToolset.Dtf.WindowsInstaller.Record)» , or «see M:WixToolset.Dtf.WindowsInstaller.View.ValidateFields(WixToolset.Dtf.WindowsInstaller.Record)» methods of the «see T:WixToolset.Dtf.WindowsInstaller.View» class. |
| [ViewModifyMode](viewmodifymode) | Specifies the modify mode for «see M:WixToolset.Dtf.WindowsInstaller.View.Modify(WixToolset.Dtf.WindowsInstaller.ViewModifyMode,WixToolset.Dtf.WindowsInstaller.Record)» . |
## Delegates
| Delegate | Description |
| -------- | ----------- |
| [ExternalUIHandler](externaluihandler) | Defines a callback function that the installer calls for progress notification and error messages. |
| [ExternalUIRecordHandler](externaluirecordhandler) | [MSI 3.1] Defines a callback function that the installer calls for record-based progress notification and error messages. |
| [InapplicablePatchHandler](inapplicablepatchhandler) | Receives an exception from «see M:WixToolset.Dtf.WindowsInstaller.Installer.DetermineApplicablePatches(System.String,System.String[],WixToolset.Dtf.WindowsInstaller.InapplicablePatchHandler,System.String,WixToolset.Dtf.WindowsInstaller.UserContexts)» indicating the reason a particular patch is not applicable to a product. |
