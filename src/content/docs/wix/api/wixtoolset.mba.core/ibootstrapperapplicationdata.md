---
title: IBootstrapperApplicationData Interface
---
Interface for BootstrapperApplicationData.xml.
## Properties
| Property | Description |
| ------ | ----------- |
| [BADataFile](#badatafile) | The BootstrapperApplicationData.xml file. |
| [Bundle](#bundle) | The BA manifest. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## BADataFile Property {#badatafile}
The BootstrapperApplicationData.xml file.
### Declaration
```cs
public System.IO.FileInfo BADataFile { get; set; }
```
## Bundle Property {#bundle}
The BA manifest.
### Declaration
```cs
public IBundleInfo Bundle { get; set; }
```
