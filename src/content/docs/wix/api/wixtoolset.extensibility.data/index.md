---
title: WixToolset.Extensibility.Data namespace
---
## Classes
| Class | Description |
| -------- | ----------- |
| [CommandLineHelp](commandlinehelp) | A command line option (switch or command) description. |
| [CommandLineHelpCommand](commandlinehelpcommand) | A command line command description. |
| [CommandLineHelpSwitch](commandlinehelpswitch) | A command line switch description. |
## Interfaces
| Interface | Description |
| -------- | ----------- |
| [IBindContext](ibindcontext) | Bind context. |
| [IBindPath](ibindpath) | Interface for a bind path. |
| [IBindResult](ibindresult) | Result of bind operation. |
| [ICommandLineArguments](icommandlinearguments) | Parsed command-line arguments. |
| [ICommandLineCommand](icommandlinecommand) | Custom command. |
| [ICommandLineContext](icommandlinecontext) | Command-line context. |
| [ICompileContext](icompilecontext) | Context provided to the compiler. |
| [IComponentKeyPath](icomponentkeypath) | Interface used to by extensions to define a component key path or (non-intuitively) the executable payload for a the bootstrapper application. |
| [IExtensionCacheLocation](iextensioncachelocation) | Location where extensions may be cached. |
| [IFileFacade](ifilefacade) | Interface that provides a common facade over file information. |
| [IFileTransfer](ifiletransfer) | Structure used for all file transfer information. |
| [IIncludedFile](iincludedfile) | Interface for an included file. |
| [ILayoutContext](ilayoutcontext) | Context for laying out files. |
| [ILibraryContext](ilibrarycontext) | Context provided during library creation operations. |
| [ILibraryResult](ilibraryresult) | Result of a library combine operation. |
| [ILinkContext](ilinkcontext) | Context provided during linking. |
| [IOptimizeContext](ioptimizecontext) | Context provided to the optimizer. |
| [IPreprocessContext](ipreprocesscontext) | Preprocessor context. |
| [IPreprocessResult](ipreprocessresult) | Result of preprocessing. |
| [IResolveContext](iresolvecontext) | Context for resolve. |
| [IResolvedDirectory](iresolveddirectory) | Used for resolved directory information. |
| [IResolveFileResult](iresolvefileresult) | Result of resolving a file. |
| [IResolveResult](iresolveresult) | Result of resolving localization and bind variables. |
| [ITrackedFile](itrackedfile) | Interface used to track all files processed. |
| [IWindowsInstallerDecompileContext](iwindowsinstallerdecompilecontext) | The context used to decompile a Windows Installer database. |
| [IWindowsInstallerDecompileResult](iwindowsinstallerdecompileresult) | The result from decompiling a Windows Installer database. |
## Enumerations
| Enumeration | Description |
| -------- | ----------- |
| [BindStage](bindstage) |  |
| [BundleConditionPhase](bundleconditionphase) | The Burn execution phase during which a Condition will be evaluated. |
| [BundleVariableNameRule](bundlevariablenamerule) | When validating a bundle variable name, which special restrictions to ignore. |
| [BurnPlatforms](burnplatforms) | Platforms that have been supported by Burn. |
| [CabinetBuildOption](cabinetbuildoption) | Options for building the cabinet. |
| [CustomActionPlatforms](customactionplatforms) | Platforms supported by custom actions. |
| [ExtensionCacheLocationScope](extensioncachelocationscope) | Extension cache location scope. |
| [PossibleKeyPathType](possiblekeypathtype) | Key path types. |
| [TrackedFileType](trackedfiletype) | Tracked file types. |
