---
title: IOptimizeContext Interface
---
Context provided to the optimizer.
## Properties
| Property | Description |
| ------ | ----------- |
| [BindPaths](#bindpaths) | Collection of bindpaths used to bind files. |
| [BindVariables](#bindvariables) | Bind variables used during optimization. |
| [CancellationToken](#cancellationtoken) | Cancellation token. |
| [Extensions](#extensions) | Set of extensions provided to the optimizer. |
| [IntermediateFolder](#intermediatefolder) | Intermediate folder. |
| [Intermediates](#intermediates) | Collection of intermediates to optimize. |
| [Localizations](#localizations) | Collection of localization files to use in the optimizer. |
| [Platform](#platform) | Gets or sets the platform which the optimizer will use when defaulting 64-bit symbol properties. |
| [ServiceProvider](#serviceprovider) | Service provider made available to the optimizer and its extensions. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## BindPaths Property {#bindpaths}
Collection of bindpaths used to bind files.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Extensibility.Data.IBindPath> BindPaths { get; set; }
```
## BindVariables Property {#bindvariables}
Bind variables used during optimization.
### Declaration
```cs
public System.Collections.Generic.IDictionary<System.String,System.String> BindVariables { get; set; }
```
## CancellationToken Property {#cancellationtoken}
Cancellation token.
### Declaration
```cs
public System.Threading.CancellationToken CancellationToken { get; set; }
```
## Extensions Property {#extensions}
Set of extensions provided to the optimizer.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Extensibility.IOptimizerExtension> Extensions { get; set; }
```
## IntermediateFolder Property {#intermediatefolder}
Intermediate folder.
### Declaration
```cs
public string IntermediateFolder { get; set; }
```
## Intermediates Property {#intermediates}
Collection of intermediates to optimize.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Data.Intermediate> Intermediates { get; set; }
```
## Localizations Property {#localizations}
Collection of localization files to use in the optimizer.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Data.Localization> Localizations { get; set; }
```
## Platform Property {#platform}
Gets or sets the platform which the optimizer will use when defaulting 64-bit symbol properties.
### Declaration
```cs
public WixToolset.Data.Platform Platform { get; set; }
```
## ServiceProvider Property {#serviceprovider}
Service provider made available to the optimizer and its extensions.
### Declaration
```cs
public System.IServiceProvider ServiceProvider { get; set; }
```
