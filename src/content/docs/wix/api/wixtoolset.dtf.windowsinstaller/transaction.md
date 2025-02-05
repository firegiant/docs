---
title: Transaction Class
---
[MSI 4.5] Handle to a multi-session install transaction.
## Methods
| Method | Description |
| ------ | ----------- |
| [Commit()](#commit_nop) | Ends the install transaction and commits all changes to the system belonging to the transaction. |
| [FromHandle(handle, ownsHandle)](#fromhandle_handle_ownshandle) | Creates a new Transaction object from an integer handle. |
| [Join(attributes)](#join_attributes) | Makes the current process the owner of the multi-package installation transaction. |
| [Rollback()](#rollback_nop) | Ends the install transaction and undoes changes to the system belonging to the transaction. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Name](#name) | Gets the name of the transaction. |
## Events
| Event | Description |
| ------ | ----------- |
| [OwnerChanged](#ownerchanged) | Notifies listeners when the process that owns the transaction changed. |
### Remarks
Win32 MSI APIs: [MsiBeginTransaction](http://msdn.microsoft.com/library/en-us/msi/setup/msibegintransaction.asp)  [MsiJoinTransaction](http://msdn.microsoft.com/library/en-us/msi/setup/msijointransaction.asp)  [MsiEndTransaction](http://msdn.microsoft.com/library/en-us/msi/setup/msiendtransaction.asp)

`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Commit() Method {#commit_nop}
Ends the install transaction and commits all changes to the system belonging to the transaction.
### Declaration
```cs
public void Commit()
```
### Remarks
Runs any Commit Custom Actions and commits to the system any changes to Win32 or common language runtime assemblies. Deletes the rollback script, and after using this option, the transaction's changes can no longer be undone with a Rollback Installation.
This method can only be called by the current owner of the transaction.
Win32 MSI API: [MsiEndTransaction](http://msdn.microsoft.com/library/en-us/msi/setup/msiendtransaction.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | The transaction could not be committed. |
## FromHandle(handle, ownsHandle) Method {#fromhandle_handle_ownshandle}
Creates a new Transaction object from an integer handle.
### Declaration
```cs
public static Transaction FromHandle(
  IntPtr handle,
  bool ownsHandle
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| handle | IntPtr | Integer transaction handle |
| ownsHandle | bool | true to close the handle when this object is disposed |
## Join(attributes) Method {#join_attributes}
Makes the current process the owner of the multi-package installation transaction.
### Declaration
```cs
public void Join(
  TransactionAttributes attributes
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| attributes | TransactionAttributes | Select optional behavior when joining the transaction. |
### Remarks
Win32 MSI API: [MsiJoinTransaction](http://msdn.microsoft.com/library/en-us/msi/setup/msijointransaction.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | The transaction handle is not valid. |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | The transaction could not be joined. |
## Rollback() Method {#rollback_nop}
Ends the install transaction and undoes changes to the system belonging to the transaction.
### Declaration
```cs
public void Rollback()
```
### Remarks
This method can only be called by the current owner of the transaction.
Win32 MSI API: [MsiEndTransaction](http://msdn.microsoft.com/library/en-us/msi/setup/msiendtransaction.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | The transaction could not be rolled back. |
## Name Property {#name}
Gets the name of the transaction.
### Declaration
```cs
public string Name { get; set; }
```
## OwnerChanged Event {#ownerchanged}
Notifies listeners when the process that owns the transaction changed.
### Declaration
```cs
public System.EventHandler<System.EventArgs> OwnerChanged
```
### Value
`System.EventHandler<System.EventArgs>`
