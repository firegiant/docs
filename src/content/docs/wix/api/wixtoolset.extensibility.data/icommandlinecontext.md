---
title: ICommandLineContext Interface
---
Command-line context.
## Properties
| Property | Description |
| ------ | ----------- |
| [Arguments](#arguments) | Command-line arguments. |
| [ExtensionManager](#extensionmanager) | Extension manager. |
| [ServiceProvider](#serviceprovider) | Service provider. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Arguments Property {#arguments}
Command-line arguments.
### Declaration
```cs
public ICommandLineArguments Arguments { get; set; }
```
## ExtensionManager Property {#extensionmanager}
Extension manager.
### Declaration
```cs
public WixToolset.Extensibility.Services.IExtensionManager ExtensionManager { get; set; }
```
## ServiceProvider Property {#serviceprovider}
Service provider.
### Declaration
```cs
public System.IServiceProvider ServiceProvider { get; set; }
```
