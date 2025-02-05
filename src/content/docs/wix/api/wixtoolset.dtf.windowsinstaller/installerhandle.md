---
title: InstallerHandle Class
---
Base class for Windows Installer handle types (Database, View, Record, SummaryInfo).
## Methods
| Method | Description |
| ------ | ----------- |
| [Close()](#close_nop) | Closes the handle. After closing a handle, further method calls may throw an «see T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException» . |
| [Dispose()](#dispose_nop) | Closes the handle. After closing a handle, further method calls may throw an «see T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException» . |
| [Dispose(disposing)](#dispose_disposing) | Closes the handle. After closing a handle, further method calls may throw an «see T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException» . |
| [Equals(obj)](#equals_obj) | Tests whether this handle object is equal to another handle object. Two handle objects are equal if their types are the same and their native integer handles are the same. |
| [GetHashCode()](#gethashcode_nop) | Gets a hash value for the handle object. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Handle](#handle) | Gets the native integer handle. |
| [IsClosed](#isclosed) | Checks if the handle is closed. When closed, method calls on the handle object may throw an «see T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException» . |
### Remarks
These classes implement the «see T:System.IDisposable» interface, because they hold unmanaged resources (MSI handles) that should be properly disposed when no longer needed.

`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Close() Method {#close_nop}
Closes the handle. After closing a handle, further method calls may throw an «see T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException» .
### Declaration
```cs
public void Close()
```
### Remarks
The finalizer of this class will NOT close the handle if it is still open, because finalization can run on a separate thread from the application, resulting in potential problems if handles are closed from that thread. It is best that the handle be closed manually as soon as it is no longer needed, as leaving lots of unused handles open can degrade performance.
This method is merely an alias for the «see M:WixToolset.Dtf.WindowsInstaller.InstallerHandle.Dispose» method.
Win32 MSI API: [MsiCloseHandle](http://msdn.microsoft.com/library/en-us/msi/setup/msiclosehandle.asp)

## Dispose() Method {#dispose_nop}
Closes the handle. After closing a handle, further method calls may throw an «see T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException» .
### Declaration
```cs
public void Dispose()
```
### Remarks
The finalizer of this class will NOT close the handle if it is still open, because finalization can run on a separate thread from the application, resulting in potential problems if handles are closed from that thread. It is best that the handle be closed manually as soon as it is no longer needed, as leaving lots of unused handles open can degrade performance.
Win32 MSI API: [MsiCloseHandle](http://msdn.microsoft.com/library/en-us/msi/setup/msiclosehandle.asp)

### See also
- M:WixToolset.Dtf.WindowsInstaller.InstallerHandle.Close
## Dispose(disposing) Method {#dispose_disposing}
Closes the handle. After closing a handle, further method calls may throw an «see T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException» .
### Declaration
```cs
protected void Dispose(
  bool disposing
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| disposing | bool | If true, the method has been called directly or indirectly by a user's code, so managed and unmanaged resources will be disposed. If false, the method has been called by the runtime from inside the finalizer, and only unmanaged resources will be disposed. |
## Equals(obj) Method {#equals_obj}
Tests whether this handle object is equal to another handle object. Two handle objects are equal if their types are the same and their native integer handles are the same.
### Declaration
```cs
public bool Equals(
  System.Object obj
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| obj | System.Object | The handle object to compare with the current handle object. |
### Return value
`bool` true if the specified handle object is equal to the current handle object; otherwise false
## GetHashCode() Method {#gethashcode_nop}
Gets a hash value for the handle object.
### Declaration
```cs
public int GetHashCode()
```
### Return value
`int` A hash code for the handle object.
### Remarks
The hash code is derived from the native integer handle.

## Handle Property {#handle}
Gets the native integer handle.
### Declaration
```cs
public IntPtr Handle { get; set; }
```
## IsClosed Property {#isclosed}
Checks if the handle is closed. When closed, method calls on the handle object may throw an «see T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException» .
### Declaration
```cs
public bool IsClosed { get; set; }
```
