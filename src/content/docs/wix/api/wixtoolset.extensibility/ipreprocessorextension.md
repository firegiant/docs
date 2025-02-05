---
title: IPreprocessorExtension Interface
---
Interface for extending the WiX toolset preprocessor.
## Methods
| Method | Description |
| ------ | ----------- |
| [EvaluateFunction(prefix, function, args)](#evaluatefunction_prefix_function_args) | Evaluates a function defined in the extension. |
| [GetVariableValue(prefix, name)](#getvariablevalue_prefix_name) | Gets the value of a variable whose prefix matches the extension. |
| [PostPreprocess()](#postpreprocess_nop) | Called at the end of the preprocessing of a source file. |
| [PrePreprocess()](#prepreprocess_nop) | Called at the beginning of the preprocessing of a source file. |
| [ProcessPragma(prefix, pragma, args, parent)](#processpragma_prefix_pragma_args_parent) | Processes a pragma defined in the extension. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Prefixes](#prefixes) | Gets the variable prefixes for the extension. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## EvaluateFunction(prefix, function, args) Method {#evaluatefunction_prefix_function_args}
Evaluates a function defined in the extension.
### Declaration
```cs
public string EvaluateFunction(
  string prefix,
  string function,
  System.String[] args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| prefix | string | The prefix of the function to be processed by the extension. |
| function | string | The name of the function. |
| args | System.String[] | The list of arguments. |
### Return value
`string` The value of the function or null if the function is not defined.
## GetVariableValue(prefix, name) Method {#getvariablevalue_prefix_name}
Gets the value of a variable whose prefix matches the extension.
### Declaration
```cs
public string GetVariableValue(
  string prefix,
  string name
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| prefix | string | The prefix of the variable to be processed by the extension. |
| name | string | The name of the variable. |
### Return value
`string` The value of the variable or null if the variable is undefined.
## PostPreprocess() Method {#postpreprocess_nop}
Called at the end of the preprocessing of a source file.
### Declaration
```cs
public void PostPreprocess()
```
## PrePreprocess() Method {#prepreprocess_nop}
Called at the beginning of the preprocessing of a source file.
### Declaration
```cs
public void PrePreprocess()
```
## ProcessPragma(prefix, pragma, args, parent) Method {#processpragma_prefix_pragma_args_parent}
Processes a pragma defined in the extension.
### Declaration
```cs
public bool ProcessPragma(
  string prefix,
  string pragma,
  string args,
  System.Xml.Linq.XContainer parent
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| prefix | string | The prefix of the pragma to be processed by the extension. |
| pragma | string | The name of the pragma. |
| args | string | The pragma's arguments. |
| parent | System.Xml.Linq.XContainer | The parent node of the pragma. |
### Return value
`bool` false if the pragma is not defined.
## Prefixes Property {#prefixes}
Gets the variable prefixes for the extension.
### Declaration
```cs
public System.String[] Prefixes { get; set; }
```
