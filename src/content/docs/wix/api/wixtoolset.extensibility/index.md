---
title: WixToolset.Extensibility namespace
---
## Classes
| Class | Description |
| -------- | ----------- |
| [BaseBinderExtension](basebinderextension) | Base class for creating a resolver extension. |
| [BaseBurnBackendBinderExtension](baseburnbackendbinderextension) | Base class for creating a Burn backend extension. |
| [BaseCommandLineCommand](basecommandlinecommand) | Base class for a command-line command. |
| [BaseCompilerExtension](basecompilerextension) | Base class for creating a compiler extension. |
| [BaseExtensionCommandLine](baseextensioncommandline) | Base class for extensions to be able to parse the command-line. |
| [BaseExtensionData](baseextensiondata) | Base class for creating a resolver extension. |
| [BaseExtensionFactory](baseextensionfactory) | Base class for extension factories. Implementations may request an IWixToolsetCoreServiceProvider at instantiation by having a single parameter constructor for it. |
| [BaseLayoutExtension](baselayoutextension) | Base class for creating a resolver extension. |
| [BaseLibrarianExtension](baselibrarianextension) | Base class for creating a librarian extension. |
| [BaseLinkerExtension](baselinkerextension) | Base class for creating a linker extension. |
| [BaseOptimizerExtension](baseoptimizerextension) | Base class for creating an optimizer extension. |
| [BasePreprocessorExtension](basepreprocessorextension) | Base class for creating a preprocessor extension. |
| [BaseResolverExtension](baseresolverextension) | Base class for creating a resolver extension. |
| [BaseWindowsInstallerBackendBinderExtension](basewindowsinstallerbackendbinderextension) | Base class for creating a windows installer backend extension. |
| [BaseWindowsInstallerDecompilerExtension](basewindowsinstallerdecompilerextension) | Base class for creating a windows installer decompiler extensions. |
| [CompilerConstants](compilerconstants) | Constants used by compiler. |
| [DecompilerConstants](decompilerconstants) | Constants used by decompiler. |
## Interfaces
| Interface | Description |
| -------- | ----------- |
| [IBackend](ibackend) | Interface all backends implement. |
| [IBackendFactory](ibackendfactory) | Implemented by extensions that are backends. |
| [IBinderExtension](ibinderextension) | Interface all binder extensions implement. |
| [IBurnBackendBinderExtension](iburnbackendbinderextension) | Interface all Burn backend extensions implement. |
| [ICompilerExtension](icompilerextension) | Interface all compiler extensions implement. |
| [IExtensionCommandLine](iextensioncommandline) | Interface extensions implement to be able to parse the command-line. |
| [IExtensionData](iextensiondata) | Interface extensions implement to provide data. |
| [IExtensionFactory](iextensionfactory) | Implementations may request an IWixToolsetCoreServiceProvider at instantiation by having a single parameter constructor for it. |
| [IFileSystemExtension](ifilesystemextension) | Interface all file system extensions implement. |
| [ILayoutExtension](ilayoutextension) | Interface all layout extensions implement. |
| [ILibrarianExtension](ilibrarianextension) | Interface all librarian extensions implement. |
| [ILinkerExtension](ilinkerextension) | Interface all linker extensions implement. |
| [IMessageListener](imessagelistener) | Message listener. |
| [IOptimizerExtension](ioptimizerextension) | Interface that all optimizer extensions implement. |
| [IPreprocessorExtension](ipreprocessorextension) | Interface for extending the WiX toolset preprocessor. |
| [IResolverExtension](iresolverextension) | Interface all resolver extensions implement. |
| [IWindowsInstallerBackendBinderExtension](iwindowsinstallerbackendbinderextension) | Interface all binder extensions implement. |
| [IWindowsInstallerDecompilerExtension](iwindowsinstallerdecompilerextension) | Interface all windows installer decompiler extensions implement. |
