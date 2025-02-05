---
title: InstallerException Class
---
Base class for Windows Installer exceptions.
## Methods
| Method | Description |
| ------ | ----------- |
| [GetErrorRecord()](#geterrorrecord_nop) | Gets extended information about the error, or null if no further information is available. |
| [GetObjectData(info, context)](#getobjectdata_info_context) | Sets the SerializationInfo with information about the exception. |
## Properties
| Property | Description |
| ------ | ----------- |
| [ErrorCode](#errorcode) | Gets the system error code that resulted in this exception, or 0 if not applicable. |
| [Message](#message) | Gets a message that describes the exception. This message may contain detailed formatted error data if it was available. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## GetErrorRecord() Method {#geterrorrecord_nop}
Gets extended information about the error, or null if no further information is available.
### Declaration
```cs
public Record GetErrorRecord()
```
### Return value
`Record` A Record object. Field 1 of the Record contains the installer message code. Other fields contain data specific to the particular error.
### Remarks
If the record is passed to «see M:WixToolset.Dtf.WindowsInstaller.Session.Message(WixToolset.Dtf.WindowsInstaller.InstallMessage,WixToolset.Dtf.WindowsInstaller.Record)» , it is formatted by looking up the string in the current database. If there is no installation session, the formatted error message may be obtained by a query on the Error table using the error code, followed by a call to «see M:WixToolset.Dtf.WindowsInstaller.Record.ToString» . Alternatively, the standard MSI message can by retrieved by calling the «see M:WixToolset.Dtf.WindowsInstaller.Installer.GetErrorMessage(WixToolset.Dtf.WindowsInstaller.Record,System.Globalization.CultureInfo)» method.
The following methods and properties may report extended error data:
- «see T:WixToolset.Dtf.WindowsInstaller.Database» (constructor)
- «see T:WixToolset.Dtf.WindowsInstaller.Database» . «see M:WixToolset.Dtf.WindowsInstaller.Database.ApplyTransform(System.String,WixToolset.Dtf.WindowsInstaller.TransformErrors)»
- «see T:WixToolset.Dtf.WindowsInstaller.Database» . «see M:WixToolset.Dtf.WindowsInstaller.Database.Commit»
- «see T:WixToolset.Dtf.WindowsInstaller.Database» . «see M:WixToolset.Dtf.WindowsInstaller.Database.Execute(System.String,System.Object[])»
- «see T:WixToolset.Dtf.WindowsInstaller.Database» . «see M:WixToolset.Dtf.WindowsInstaller.Database.ExecuteQuery(System.String,System.Object[])»
- «see T:WixToolset.Dtf.WindowsInstaller.Database» . «see M:WixToolset.Dtf.WindowsInstaller.Database.ExecuteIntegerQuery(System.String,System.Object[])»
- «see T:WixToolset.Dtf.WindowsInstaller.Database» . «see M:WixToolset.Dtf.WindowsInstaller.Database.ExecuteStringQuery(System.String,System.Object[])»
- «see T:WixToolset.Dtf.WindowsInstaller.Database» . «see M:WixToolset.Dtf.WindowsInstaller.Database.Export(System.String,System.String)»
- «see T:WixToolset.Dtf.WindowsInstaller.Database» . «see M:WixToolset.Dtf.WindowsInstaller.Database.ExportAll(System.String)»
- «see T:WixToolset.Dtf.WindowsInstaller.Database» . «see M:WixToolset.Dtf.WindowsInstaller.Database.GenerateTransform(WixToolset.Dtf.WindowsInstaller.Database,System.String)»
- «see T:WixToolset.Dtf.WindowsInstaller.Database» . «see M:WixToolset.Dtf.WindowsInstaller.Database.Import(System.String)»
- «see T:WixToolset.Dtf.WindowsInstaller.Database» . «see M:WixToolset.Dtf.WindowsInstaller.Database.ImportAll(System.String)»
- «see T:WixToolset.Dtf.WindowsInstaller.Database» . «see M:WixToolset.Dtf.WindowsInstaller.Database.Merge(WixToolset.Dtf.WindowsInstaller.Database,System.String)»
- «see T:WixToolset.Dtf.WindowsInstaller.Database» . «see M:WixToolset.Dtf.WindowsInstaller.Database.OpenView(System.String,System.Object[])»
- «see T:WixToolset.Dtf.WindowsInstaller.Database» . «see P:WixToolset.Dtf.WindowsInstaller.Database.SummaryInfo»
- «see T:WixToolset.Dtf.WindowsInstaller.Database» . «see M:WixToolset.Dtf.WindowsInstaller.Database.ViewTransform(System.String)»
- «see T:WixToolset.Dtf.WindowsInstaller.View» . «see M:WixToolset.Dtf.WindowsInstaller.View.Assign(WixToolset.Dtf.WindowsInstaller.Record)»
- «see T:WixToolset.Dtf.WindowsInstaller.View» . «see M:WixToolset.Dtf.WindowsInstaller.View.Delete(WixToolset.Dtf.WindowsInstaller.Record)»
- «see T:WixToolset.Dtf.WindowsInstaller.View» . «see M:WixToolset.Dtf.WindowsInstaller.View.Execute(WixToolset.Dtf.WindowsInstaller.Record)»
- «see T:WixToolset.Dtf.WindowsInstaller.View» . «see M:WixToolset.Dtf.WindowsInstaller.View.Insert(WixToolset.Dtf.WindowsInstaller.Record)»
- «see T:WixToolset.Dtf.WindowsInstaller.View» . «see M:WixToolset.Dtf.WindowsInstaller.View.InsertTemporary(WixToolset.Dtf.WindowsInstaller.Record)»
- «see T:WixToolset.Dtf.WindowsInstaller.View» . «see M:WixToolset.Dtf.WindowsInstaller.View.Merge(WixToolset.Dtf.WindowsInstaller.Record)»
- «see T:WixToolset.Dtf.WindowsInstaller.View» . «see M:WixToolset.Dtf.WindowsInstaller.View.Modify(WixToolset.Dtf.WindowsInstaller.ViewModifyMode,WixToolset.Dtf.WindowsInstaller.Record)»
- «see T:WixToolset.Dtf.WindowsInstaller.View» . «see M:WixToolset.Dtf.WindowsInstaller.View.Refresh(WixToolset.Dtf.WindowsInstaller.Record)»
- «see T:WixToolset.Dtf.WindowsInstaller.View» . «see M:WixToolset.Dtf.WindowsInstaller.View.Replace(WixToolset.Dtf.WindowsInstaller.Record)»
- «see T:WixToolset.Dtf.WindowsInstaller.View» . «see M:WixToolset.Dtf.WindowsInstaller.View.Seek(WixToolset.Dtf.WindowsInstaller.Record)»
- «see T:WixToolset.Dtf.WindowsInstaller.View» . «see M:WixToolset.Dtf.WindowsInstaller.View.Update(WixToolset.Dtf.WindowsInstaller.Record)»
- «see T:WixToolset.Dtf.WindowsInstaller.View» . «see M:WixToolset.Dtf.WindowsInstaller.View.Validate(WixToolset.Dtf.WindowsInstaller.Record)»
- «see T:WixToolset.Dtf.WindowsInstaller.View» . «see M:WixToolset.Dtf.WindowsInstaller.View.ValidateFields(WixToolset.Dtf.WindowsInstaller.Record)»
- «see T:WixToolset.Dtf.WindowsInstaller.View» . «see M:WixToolset.Dtf.WindowsInstaller.View.ValidateDelete(WixToolset.Dtf.WindowsInstaller.Record)»
- «see T:WixToolset.Dtf.WindowsInstaller.View» . «see M:WixToolset.Dtf.WindowsInstaller.View.ValidateNew(WixToolset.Dtf.WindowsInstaller.Record)»
- «see T:WixToolset.Dtf.WindowsInstaller.SummaryInfo» (constructor)
- «see T:WixToolset.Dtf.WindowsInstaller.Record» . «see M:WixToolset.Dtf.WindowsInstaller.Record.SetStream(System.Int32,System.String)»
- «see T:WixToolset.Dtf.WindowsInstaller.Session» . «see M:WixToolset.Dtf.WindowsInstaller.Session.SetInstallLevel(System.Int32)»
- «see T:WixToolset.Dtf.WindowsInstaller.Session» . «see M:WixToolset.Dtf.WindowsInstaller.Session.GetSourcePath(System.String)»
- «see T:WixToolset.Dtf.WindowsInstaller.Session» . «see M:WixToolset.Dtf.WindowsInstaller.Session.GetTargetPath(System.String)»
- «see T:WixToolset.Dtf.WindowsInstaller.Session» . «see M:WixToolset.Dtf.WindowsInstaller.Session.SetTargetPath(System.String,System.String)»
- «see T:WixToolset.Dtf.WindowsInstaller.ComponentInfo» . «see P:WixToolset.Dtf.WindowsInstaller.ComponentInfo.CurrentState»
- «see T:WixToolset.Dtf.WindowsInstaller.FeatureInfo» . «see P:WixToolset.Dtf.WindowsInstaller.FeatureInfo.CurrentState»
- «see T:WixToolset.Dtf.WindowsInstaller.FeatureInfo» . «see P:WixToolset.Dtf.WindowsInstaller.FeatureInfo.ValidStates»
- «see T:WixToolset.Dtf.WindowsInstaller.FeatureInfo» . «see M:WixToolset.Dtf.WindowsInstaller.FeatureInfo.GetCost(System.Boolean,System.Boolean,WixToolset.Dtf.WindowsInstaller.InstallState)»

The Record object should be «see M:WixToolset.Dtf.WindowsInstaller.InstallerHandle.Close» d after use. It is best that the handle be closed manually as soon as it is no longer needed, as leaving lots of unused handles open can degrade performance.
Win32 MSI API: [MsiGetLastErrorRecord](http://msdn.microsoft.com/library/en-us/msi/setup/msigetlasterrorrecord.asp)

## GetObjectData(info, context) Method {#getobjectdata_info_context}
Sets the SerializationInfo with information about the exception.
### Declaration
```cs
public void GetObjectData(
  System.Runtime.Serialization.SerializationInfo info,
  System.Runtime.Serialization.StreamingContext context
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| info | System.Runtime.Serialization.SerializationInfo | The SerializationInfo that holds the serialized object data about the exception being thrown. |
| context | System.Runtime.Serialization.StreamingContext | The StreamingContext that contains contextual information about the source or destination. |
## ErrorCode Property {#errorcode}
Gets the system error code that resulted in this exception, or 0 if not applicable.
### Declaration
```cs
public int ErrorCode { get; set; }
```
## Message Property {#message}
Gets a message that describes the exception. This message may contain detailed formatted error data if it was available.
### Declaration
```cs
public string Message { get; set; }
```
