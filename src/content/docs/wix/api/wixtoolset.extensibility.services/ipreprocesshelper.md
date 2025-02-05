---
title: IPreprocessHelper Interface
---
Interface provided to help preprocessor extensions.
## Methods
| Method | Description |
| ------ | ----------- |
| [AddVariable(context, name, value)](#addvariable_context_name_value) | Add a variable. |
| [AddVariable(context, name, value, showWarning)](#addvariable_context_name_value_showwarning) | Add a variable. |
| [EvaluateFunction(context, function)](#evaluatefunction_context_function) | Evaluate a function. |
| [EvaluateFunction(context, prefix, function, args)](#evaluatefunction_context_prefix_function_args) | Evaluate a function. |
| [GetVariableValue(context, variable, allowMissingPrefix)](#getvariablevalue_context_variable_allowmissingprefix) | Get the value of a variable expression like var.name. |
| [GetVariableValue(context, prefix, name)](#getvariablevalue_context_prefix_name) | Get the value of a variable. |
| [PreprocessPragma(context, pragmaName, args, parent)](#preprocesspragma_context_pragmaname_args_parent) | Evaluate a Pragma. |
| [PreprocessString(context, value)](#preprocessstring_context_value) | Replaces parameters in the source text. |
| [RemoveVariable(context, name)](#removevariable_context_name) | Remove a variable. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## AddVariable(context, name, value) Method {#addvariable_context_name_value}
Add a variable.
### Declaration
```cs
public void AddVariable(
  WixToolset.Extensibility.Data.IPreprocessContext context,
  string name,
  string value
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| context | WixToolset.Extensibility.Data.IPreprocessContext | The preprocess context. |
| name | string | The variable name. |
| value | string | The variable value. |
## AddVariable(context, name, value, showWarning) Method {#addvariable_context_name_value_showwarning}
Add a variable.
### Declaration
```cs
public void AddVariable(
  WixToolset.Extensibility.Data.IPreprocessContext context,
  string name,
  string value,
  bool showWarning
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| context | WixToolset.Extensibility.Data.IPreprocessContext | The preprocess context. |
| name | string | The variable name. |
| value | string | The variable value. |
| showWarning | bool | Set to true to show variable overwrite warning. |
## EvaluateFunction(context, function) Method {#evaluatefunction_context_function}
Evaluate a function.
### Declaration
```cs
public string EvaluateFunction(
  WixToolset.Extensibility.Data.IPreprocessContext context,
  string function
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| context | WixToolset.Extensibility.Data.IPreprocessContext | The preprocess context. |
| function | string | The function expression including the prefix and name. |
### Return value
`string` The function value.
## EvaluateFunction(context, prefix, function, args) Method {#evaluatefunction_context_prefix_function_args}
Evaluate a function.
### Declaration
```cs
public string EvaluateFunction(
  WixToolset.Extensibility.Data.IPreprocessContext context,
  string prefix,
  string function,
  System.String[] args
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| context | WixToolset.Extensibility.Data.IPreprocessContext | The preprocess context. |
| prefix | string | The function prefix. |
| function | string | The function name. |
| args | System.String[] | The arguments for the function. |
### Return value
`string` The function value or null if the function is not defined.
## GetVariableValue(context, variable, allowMissingPrefix) Method {#getvariablevalue_context_variable_allowmissingprefix}
Get the value of a variable expression like var.name.
### Declaration
```cs
public string GetVariableValue(
  WixToolset.Extensibility.Data.IPreprocessContext context,
  string variable,
  bool allowMissingPrefix
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| context | WixToolset.Extensibility.Data.IPreprocessContext | The preprocess context. |
| variable | string | The variable expression including the optional prefix and name. |
| allowMissingPrefix | bool | true to allow the variable prefix to be missing. |
### Return value
`string` The variable value.
## GetVariableValue(context, prefix, name) Method {#getvariablevalue_context_prefix_name}
Get the value of a variable.
### Declaration
```cs
public string GetVariableValue(
  WixToolset.Extensibility.Data.IPreprocessContext context,
  string prefix,
  string name
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| context | WixToolset.Extensibility.Data.IPreprocessContext | The preprocess context. |
| prefix | string | The variable prefix. |
| name | string | The variable name. |
### Return value
`string` The variable value or null if the variable is not set.
## PreprocessPragma(context, pragmaName, args, parent) Method {#preprocesspragma_context_pragmaname_args_parent}
Evaluate a Pragma.
### Declaration
```cs
public void PreprocessPragma(
  WixToolset.Extensibility.Data.IPreprocessContext context,
  string pragmaName,
  string args,
  System.Xml.Linq.XContainer parent
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| context | WixToolset.Extensibility.Data.IPreprocessContext | The preprocess context. |
| pragmaName | string | The pragma's full name ({'<'}prefix{'>'}.{'<'}pragma{'>'}). |
| args | string | The arguments to the pragma. |
| parent | System.Xml.Linq.XContainer | The parent element of the pragma. |
## PreprocessString(context, value) Method {#preprocessstring_context_value}
Replaces parameters in the source text.
### Declaration
```cs
public string PreprocessString(
  WixToolset.Extensibility.Data.IPreprocessContext context,
  string value
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| context | WixToolset.Extensibility.Data.IPreprocessContext | The preprocess context. |
| value | string | Text that may contain parameters to replace. |
### Return value
`string` Text after parameters have been replaced.
## RemoveVariable(context, name) Method {#removevariable_context_name}
Remove a variable.
### Declaration
```cs
public void RemoveVariable(
  WixToolset.Extensibility.Data.IPreprocessContext context,
  string name
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| context | WixToolset.Extensibility.Data.IPreprocessContext | The preprocess context. |
| name | string | The variable name. |
