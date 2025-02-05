---
title: ICommandLineParser Interface
---
Provides the command-line arguments.
## Methods
| Method | Description |
| ------ | ----------- |
| [GetArgumentAsFilePathOrError(argument, fileType)](#getargumentasfilepathorerror_argument_filetype) | Gets the current argument as a file or displays an error. |
| [GetNextArgumentAsDirectoryOrError(argument)](#getnextargumentasdirectoryorerror_argument) | Gets the next argument as a directory or displays an error. |
| [GetNextArgumentAsFilePathOrError(argument, filePurpose)](#getnextargumentasfilepathorerror_argument_filepurpose) | Gets the next argument as a file or displays an error. |
| [GetNextArgumentOrError(argument)](#getnextargumentorerror_argument) | Gets the next argument or displays error if no argument is available. |
| [IsSwitch(argument)](#isswitch_argument) | Validates that a valid switch (starts with "/" or "-"), and returns a bool indicating its validity |
| [PeekNextArgument()](#peeknextargument_nop) | Looks ahead to the next argument without moving to the next argument. |
| [ReportErrorArgument(argument, message)](#reporterrorargument_argument_message) | Reports a command line error for the provided argument. |
## Properties
| Property | Description |
| ------ | ----------- |
| [ErrorArgument](#errorargument) | Gets the argument that caused the error. |
`WixToolset.Extensibility.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## GetArgumentAsFilePathOrError(argument, fileType) Method {#getargumentasfilepathorerror_argument_filetype}
Gets the current argument as a file or displays an error.
### Declaration
```cs
public string GetArgumentAsFilePathOrError(
  string argument,
  string fileType
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| argument | string | Current argument used in the error message if necessary. |
| fileType | string | Type of file displayed in the error message if necessary. |
### Return value
`string` The fully expanded path if the argument is a file path, otherwise null.
## GetNextArgumentAsDirectoryOrError(argument) Method {#getnextargumentasdirectoryorerror_argument}
Gets the next argument as a directory or displays an error.
### Declaration
```cs
public string GetNextArgumentAsDirectoryOrError(
  string argument
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| argument | string | Current argument used in the error message if necessary. |
### Return value
`string` The fully expanded path if the argument is a directory, otherwise null.
## GetNextArgumentAsFilePathOrError(argument, filePurpose) Method {#getnextargumentasfilepathorerror_argument_filepurpose}
Gets the next argument as a file or displays an error.
### Declaration
```cs
public string GetNextArgumentAsFilePathOrError(
  string argument,
  string filePurpose
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| argument | string | Current argument used in the error message if necessary. |
| filePurpose | string | Purpose of the required file. |
### Return value
`string` The fully expanded path if the argument is a file path, otherwise null.
## GetNextArgumentOrError(argument) Method {#getnextargumentorerror_argument}
Gets the next argument or displays error if no argument is available.
### Declaration
```cs
public string GetNextArgumentOrError(
  string argument
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| argument | string | Current argument used in the error message if necessary. |
### Return value
`string` The next argument if present or null
## IsSwitch(argument) Method {#isswitch_argument}
Validates that a valid switch (starts with "/" or "-"), and returns a bool indicating its validity
### Declaration
```cs
public bool IsSwitch(
  string argument
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| argument | string | The string check. |
### Return value
`bool` True if a valid switch, otherwise false.
## PeekNextArgument() Method {#peeknextargument_nop}
Looks ahead to the next argument without moving to the next argument.
### Declaration
```cs
public string PeekNextArgument()
```
### Return value
`string` Next argument if available, otherwise null.
## ReportErrorArgument(argument, message) Method {#reporterrorargument_argument_message}
Reports a command line error for the provided argument.
### Declaration
```cs
public void ReportErrorArgument(
  string argument,
  WixToolset.Data.Message message
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| argument | string | Argument that caused the error. |
| message | WixToolset.Data.Message | Message to report. |
## ErrorArgument Property {#errorargument}
Gets the argument that caused the error.
### Declaration
```cs
public string ErrorArgument { get; set; }
```
