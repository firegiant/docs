---
title: FireGiantBundleApplication Class
pagefind: false
---
Connects to the Burn engine and runs the bundle.
## Methods
| Method | Description |
| ------ | ----------- |
| [Run()](#run_nop) | Runs the bundle application. |
| [Run(System.Reflection.Assembly)](#run_systemreflectionassembly) | Runs the bundle application. |

`FireGiant.BundleApplicationFramework v6.0.1`
## Run() Method {#run_nop}
Runs the bundle application.
### Declaration
```cs
public void Run()
```
### Remarks
The calling assembly will be used as the UI assembly.
## Run(System.Reflection.Assembly uiAssembly) Method {#run_systemreflectionassembly}
Runs the bundle application.
### Declaration
```cs
public void Run(
  System.Reflection.Assembly uiAssembly
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| uiAssembly | System.Reflection.Assembly | Assembly containing the IBundleUIFactory created when run. |
