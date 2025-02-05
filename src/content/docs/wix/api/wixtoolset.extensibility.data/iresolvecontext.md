---
title: IResolveContext Interface
---
Context for resolve.
## Properties
| Property | Description |
| ------ | ----------- |
| [AllowUnresolvedVariables](#allowunresolvedvariables) | Indicates whether to allow localization and bind variables to remain unresolved. |
| [BindPaths](#bindpaths) | Bind paths used during resolution. |
| [BindVariables](#bindvariables) | Bind variables used during resolution. |
| [CancellationToken](#cancellationtoken) | Cancellation token. |
| [ExtensionData](#extensiondata) | Extension data. |
| [Extensions](#extensions) | Resolve extensions. |
| [FilterCultures](#filtercultures) | List of cultures to filter the localizations. |
| [IntermediateFolder](#intermediatefolder) | Intermediate folder. |
| [IntermediateRepresentation](#intermediaterepresentation) | Intermediate to resolve. |
| [Localizations](#localizations) | Localizations used to resolve. |
| [OutputPath](#outputpath) | Output path. |
| [ServiceProvider](#serviceprovider) | Service provider. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## AllowUnresolvedVariables Property {#allowunresolvedvariables}
Indicates whether to allow localization and bind variables to remain unresolved.
### Declaration
```cs
public bool AllowUnresolvedVariables { get; set; }
```
## BindPaths Property {#bindpaths}
Bind paths used during resolution.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Extensibility.Data.IBindPath> BindPaths { get; set; }
```
## BindVariables Property {#bindvariables}
Bind variables used during resolution.
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
## ExtensionData Property {#extensiondata}
Extension data.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Extensibility.IExtensionData> ExtensionData { get; set; }
```
## Extensions Property {#extensions}
Resolve extensions.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Extensibility.IResolverExtension> Extensions { get; set; }
```
## FilterCultures Property {#filtercultures}
List of cultures to filter the localizations.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<System.String> FilterCultures { get; set; }
```
## IntermediateFolder Property {#intermediatefolder}
Intermediate folder.
### Declaration
```cs
public string IntermediateFolder { get; set; }
```
## IntermediateRepresentation Property {#intermediaterepresentation}
Intermediate to resolve.
### Declaration
```cs
public WixToolset.Data.Intermediate IntermediateRepresentation { get; set; }
```
## Localizations Property {#localizations}
Localizations used to resolve.
### Declaration
```cs
public System.Collections.Generic.IReadOnlyCollection<WixToolset.Data.Localization> Localizations { get; set; }
```
## OutputPath Property {#outputpath}
Output path.
### Declaration
```cs
public string OutputPath { get; set; }
```
## ServiceProvider Property {#serviceprovider}
Service provider.
### Declaration
```cs
public System.IServiceProvider ServiceProvider { get; set; }
```
