---
title: ErrorEventArgs Class
---
Event arguments for «see E:WixToolset.Mba.Core.IDefaultBootstrapperApplication.Error»
## Properties
| Property | Description |
| ------ | ----------- |
| [Data](#data) | Gets the extended data for the error. |
| [ErrorCode](#errorcode) | Gets the error code. |
| [ErrorMessage](#errormessage) | Gets the error message. |
| [ErrorType](#errortype) | Gets the type of error that occurred. |
| [PackageId](#packageid) | Gets the identity of the package that yielded the error. |
| [UIHint](#uihint) | Gets the recommended display flags for an error dialog. |
`WixToolset.Mba.Core.dll` version `4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040`
## Data Property {#data}
Gets the extended data for the error.
### Declaration
```cs
public IList<System.String> Data { get; set; }
```
## ErrorCode Property {#errorcode}
Gets the error code.
### Declaration
```cs
public int ErrorCode { get; set; }
```
## ErrorMessage Property {#errormessage}
Gets the error message.
### Declaration
```cs
public string ErrorMessage { get; set; }
```
## ErrorType Property {#errortype}
Gets the type of error that occurred.
### Declaration
```cs
public ErrorType ErrorType { get; set; }
```
## PackageId Property {#packageid}
Gets the identity of the package that yielded the error.
### Declaration
```cs
public string PackageId { get; set; }
```
## UIHint Property {#uihint}
Gets the recommended display flags for an error dialog.
### Declaration
```cs
public int UIHint { get; set; }
```
