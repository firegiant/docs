---
title: View Class
---
A View represents a result set obtained when processing a query using the «see M:WixToolset.Dtf.WindowsInstaller.Database.OpenView(System.String,System.Object[])» method of a «see P:WixToolset.Dtf.WindowsInstaller.View.Database» . Before any data can be transferred, the query must be executed using the «see M:WixToolset.Dtf.WindowsInstaller.View.Execute(WixToolset.Dtf.WindowsInstaller.Record)» method, passing to it all replaceable parameters designated within the SQL query string.
## Methods
| Method | Description |
| ------ | ----------- |
| [Assign(record)](#assign_record) | Updates or inserts a Record into the View. |
| [Delete(record)](#delete_record) | Deletes a Record from the View. |
| [Execute(executeParams)](#execute_executeparams) | Executes a SQL View query and supplies any required parameters. The query uses the question mark token to represent parameters as described in SQL Syntax. The values of these parameters are passed in as the corresponding fields of a parameter record. |
| [Execute()](#execute_nop) | Executes a SQL View query. |
| [Fetch()](#fetch_nop) | Fetches the next sequential record from the view, or null if there are no more records. |
| [GetEnumerator()](#getenumerator_nop) | Enumerates over the Records retrieved by the View. |
| [Insert(record)](#insert_record) | Inserts a Record into the view. |
| [InsertTemporary(record)](#inserttemporary_record) | Inserts a Record into the View. The inserted data is not persistent. |
| [Merge(record)](#merge_record) | Inserts or validates a record. |
| [Modify(mode, record)](#modify_mode_record) | Updates a fetched Record. |
| [Refresh(record)](#refresh_record) | Refreshes the data in a Record. |
| [Replace(record)](#replace_record) | Updates or deletes and inserts a Record into the View. |
| [Seek(record)](#seek_record) | Refreshes the information in the supplied record without changing the position in the result set and without affecting subsequent fetch operations. |
| [Update(record)](#update_record) | Updates the View with new data from the Record. |
| [Validate(record)](#validate_record) | Validates a record, returning information about any errors. |
| [ValidateDelete(record)](#validatedelete_record) | Validates a record that will be deleted later, returning information about any errors. |
| [ValidateFields(record)](#validatefields_record) | Validates fields of a fetched or new record, returning information about any errors. Can validate one or more fields of an incomplete record. |
| [ValidateNew(record)](#validatenew_record) | Validates a new record, returning information about any errors. |
## Properties
| Property | Description |
| ------ | ----------- |
| [Columns](#columns) | Gets the set of columns that were included in the query for this View, or null if this view is not a SELECT query. |
| [Database](#database) | Gets the Database on which this View was opened. |
| [QueryString](#querystring) | Gets the SQL query string used to open this View. |
| [Tables](#tables) | Gets the set of tables that were included in the SQL query for this View. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Assign(record) Method {#assign_record}
Updates or inserts a Record into the View.
### Declaration
```cs
public void Assign(
  Record record
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| record | Record | the Record to be assigned |
### Remarks
Updates record if the primary keys match an existing row and inserts if they do not match. Fails with a read-only database. This method cannot be used with a View containing joins.
See «see M:WixToolset.Dtf.WindowsInstaller.View.Modify(WixToolset.Dtf.WindowsInstaller.ViewModifyMode,WixToolset.Dtf.WindowsInstaller.Record)» for more remarks.
Win32 MSI API: [MsiViewModify](http://msdn.microsoft.com/library/en-us/msi/setup/msiviewmodify.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | the assignment failed |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the View handle is invalid |
## Delete(record) Method {#delete_record}
Deletes a Record from the View.
### Declaration
```cs
public void Delete(
  Record record
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| record | Record | the Record to be deleted |
### Remarks
The Record must have been obtained by calling «see M:WixToolset.Dtf.WindowsInstaller.View.Fetch» . Fails if the row has been deleted. Works only with read-write records. This method cannot be used with a View containing joins.
See «see M:WixToolset.Dtf.WindowsInstaller.View.Modify(WixToolset.Dtf.WindowsInstaller.ViewModifyMode,WixToolset.Dtf.WindowsInstaller.Record)» for more remarks.
Win32 MSI API: [MsiViewModify](http://msdn.microsoft.com/library/en-us/msi/setup/msiviewmodify.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | the deletion failed |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the View handle is invalid |
## Execute(executeParams) Method {#execute_executeparams}
Executes a SQL View query and supplies any required parameters. The query uses the question mark token to represent parameters as described in SQL Syntax. The values of these parameters are passed in as the corresponding fields of a parameter record.
### Declaration
```cs
public void Execute(
  Record executeParams
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| executeParams | Record | Optional Record that supplies the parameters. This Record contains values to replace the parameter tokens in the SQL query. |
### Remarks
Win32 MSI API: [MsiViewExecute](http://msdn.microsoft.com/library/en-us/msi/setup/msiviewexecute.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | the View could not be executed |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the View handle is invalid |
## Execute() Method {#execute_nop}
Executes a SQL View query.
### Declaration
```cs
public void Execute()
```
### Remarks
Win32 MSI API: [MsiViewExecute](http://msdn.microsoft.com/library/en-us/msi/setup/msiviewexecute.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | the View could not be executed |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the View handle is invalid |
## Fetch() Method {#fetch_nop}
Fetches the next sequential record from the view, or null if there are no more records.
### Declaration
```cs
public Record Fetch()
```
### Remarks
The Record object should be «see M:WixToolset.Dtf.WindowsInstaller.InstallerHandle.Close» d after use. It is best that the handle be closed manually as soon as it is no longer needed, as leaving lots of unused handles open can degrade performance.
Win32 MSI API: [MsiViewFetch](http://msdn.microsoft.com/library/en-us/msi/setup/msiviewfetch.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | the View is not in an active state |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the View handle is invalid |
## GetEnumerator() Method {#getenumerator_nop}
Enumerates over the Records retrieved by the View.
### Declaration
```cs
public IEnumerator<WixToolset.Dtf.WindowsInstaller.Record> GetEnumerator()
```
### Return value
`IEnumerator<WixToolset.Dtf.WindowsInstaller.Record>` An enumerator of Record objects.
### Remarks
Each Record object should be «see M:WixToolset.Dtf.WindowsInstaller.InstallerHandle.Close» d after use. It is best that the handle be closed manually as soon as it is no longer needed, as leaving lots of unused handles open can degrade performance. However, note that it is not necessary to complete the enumeration just for the purpose of closing handles, because Records are fetched lazily on each step of the enumeration.
Win32 MSI API: [MsiViewFetch](http://msdn.microsoft.com/library/en-us/msi/setup/msiviewfetch.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | The View was not d before attempting the enumeration. |
## Insert(record) Method {#insert_record}
Inserts a Record into the view.
### Declaration
```cs
public void Insert(
  Record record
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| record | Record | the Record to be inserted |
### Remarks
Fails if a row with the same primary keys exists. Fails with a read-only database. This method cannot be used with a View containing joins.
See «see M:WixToolset.Dtf.WindowsInstaller.View.Modify(WixToolset.Dtf.WindowsInstaller.ViewModifyMode,WixToolset.Dtf.WindowsInstaller.Record)» for more remarks.
Win32 MSI API: [MsiViewModify](http://msdn.microsoft.com/library/en-us/msi/setup/msiviewmodify.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | the insertion failed |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the View handle is invalid |
## InsertTemporary(record) Method {#inserttemporary_record}
Inserts a Record into the View. The inserted data is not persistent.
### Declaration
```cs
public void InsertTemporary(
  Record record
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| record | Record | the Record to be inserted |
### Remarks
Fails if a row with the same primary key exists. Works only with read-write records. This method cannot be used with a View containing joins.
See «see M:WixToolset.Dtf.WindowsInstaller.View.Modify(WixToolset.Dtf.WindowsInstaller.ViewModifyMode,WixToolset.Dtf.WindowsInstaller.Record)» for more remarks.
Win32 MSI API: [MsiViewModify](http://msdn.microsoft.com/library/en-us/msi/setup/msiviewmodify.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | the insertion failed |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the View handle is invalid |
## Merge(record) Method {#merge_record}
Inserts or validates a record.
### Declaration
```cs
public bool Merge(
  Record record
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| record | Record | the Record to be merged |
### Return value
`bool` true if the record was inserted or validated, false if there is an existing record with the same primary keys that is not identical
### Remarks
Works only with read-write records. This method cannot be used with a View containing joins.
See «see M:WixToolset.Dtf.WindowsInstaller.View.Modify(WixToolset.Dtf.WindowsInstaller.ViewModifyMode,WixToolset.Dtf.WindowsInstaller.Record)» for more remarks.
Win32 MSI API: [MsiViewModify](http://msdn.microsoft.com/library/en-us/msi/setup/msiviewmodify.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | the merge failed (for a reason other than invalid data) |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the View handle is invalid |
## Modify(mode, record) Method {#modify_mode_record}
Updates a fetched Record.
### Declaration
```cs
public void Modify(
  ViewModifyMode mode,
  Record record
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| mode | ViewModifyMode | specifies the modify mode |
| record | Record | the Record to modify |
### Remarks
You can update or delete a record immediately after inserting, or seeking provided you have NOT modified the 0th field of the inserted or sought record.
To execute any SQL statement, a View must be created. However, a View that does not create a result set, such as CREATE TABLE, or INSERT INTO, cannot be used with any of the Modify methods to update tables though the view.
You cannot fetch a record containing binary data from one database and then use that record to insert the data into another database. To move binary data from one database to another, you should export the data to a file and then import it into the new database using a query and the «see M:WixToolset.Dtf.WindowsInstaller.Record.SetStream(System.Int32,System.String)» . This ensures that each database has its own copy of the binary data.
Note that custom actions can only add, modify, or remove temporary rows, columns, or tables from a database. Custom actions cannot modify persistent data in a database, such as data that is a part of the database stored on disk.
Win32 MSI API: [MsiViewModify](http://msdn.microsoft.com/library/en-us/msi/setup/msiviewmodify.asp)

### See also
- M:WixToolset.Dtf.WindowsInstaller.View.Refresh(WixToolset.Dtf.WindowsInstaller.Record)
- M:WixToolset.Dtf.WindowsInstaller.View.Insert(WixToolset.Dtf.WindowsInstaller.Record)
- M:WixToolset.Dtf.WindowsInstaller.View.Update(WixToolset.Dtf.WindowsInstaller.Record)
- M:WixToolset.Dtf.WindowsInstaller.View.Assign(WixToolset.Dtf.WindowsInstaller.Record)
- M:WixToolset.Dtf.WindowsInstaller.View.Replace(WixToolset.Dtf.WindowsInstaller.Record)
- M:WixToolset.Dtf.WindowsInstaller.View.Delete(WixToolset.Dtf.WindowsInstaller.Record)
- M:WixToolset.Dtf.WindowsInstaller.View.InsertTemporary(WixToolset.Dtf.WindowsInstaller.Record)
- M:WixToolset.Dtf.WindowsInstaller.View.Seek(WixToolset.Dtf.WindowsInstaller.Record)
- M:WixToolset.Dtf.WindowsInstaller.View.Merge(WixToolset.Dtf.WindowsInstaller.Record)
- M:WixToolset.Dtf.WindowsInstaller.View.Validate(WixToolset.Dtf.WindowsInstaller.Record)
- M:WixToolset.Dtf.WindowsInstaller.View.ValidateNew(WixToolset.Dtf.WindowsInstaller.Record)
- M:WixToolset.Dtf.WindowsInstaller.View.ValidateFields(WixToolset.Dtf.WindowsInstaller.Record)
- M:WixToolset.Dtf.WindowsInstaller.View.ValidateDelete(WixToolset.Dtf.WindowsInstaller.Record)
### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | the modification failed,
            or a validation was requested and the data did not pass |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the View handle is invalid |
## Refresh(record) Method {#refresh_record}
Refreshes the data in a Record.
### Declaration
```cs
public void Refresh(
  Record record
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| record | Record | the Record to be refreshed |
### Remarks
The Record must have been obtained by calling «see M:WixToolset.Dtf.WindowsInstaller.View.Fetch» . Fails with a deleted Record. Works only with read-write Records.
See «see M:WixToolset.Dtf.WindowsInstaller.View.Modify(WixToolset.Dtf.WindowsInstaller.ViewModifyMode,WixToolset.Dtf.WindowsInstaller.Record)» for more remarks.
Win32 MSI API: [MsiViewModify](http://msdn.microsoft.com/library/en-us/msi/setup/msiviewmodify.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | the refresh failed |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the View handle is invalid |
## Replace(record) Method {#replace_record}
Updates or deletes and inserts a Record into the View.
### Declaration
```cs
public void Replace(
  Record record
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| record | Record | the Record to be replaced |
### Remarks
The Record must have been obtained by calling «see M:WixToolset.Dtf.WindowsInstaller.View.Fetch» . Updates record if the primary keys are unchanged. Deletes old row and inserts new if primary keys have changed. Fails with a read-only database. This method cannot be used with a View containing joins.
See «see M:WixToolset.Dtf.WindowsInstaller.View.Modify(WixToolset.Dtf.WindowsInstaller.ViewModifyMode,WixToolset.Dtf.WindowsInstaller.Record)» for more remarks.
Win32 MSI API: [MsiViewModify](http://msdn.microsoft.com/library/en-us/msi/setup/msiviewmodify.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | the replacement failed |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the View handle is invalid |
## Seek(record) Method {#seek_record}
Refreshes the information in the supplied record without changing the position in the result set and without affecting subsequent fetch operations.
### Declaration
```cs
public bool Seek(
  Record record
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| record | Record | the Record to be filled with the result of the seek |
### Remarks
After seeking, the Record may then be used for subsequent Update, Delete, and Refresh operations. All primary key columns of the table must be in the query and the Record must have at least as many fields as the query. Seek cannot be used with multi-table queries. This method cannot be used with a View containing joins.
See «see M:WixToolset.Dtf.WindowsInstaller.View.Modify(WixToolset.Dtf.WindowsInstaller.ViewModifyMode,WixToolset.Dtf.WindowsInstaller.Record)» for more remarks.
Win32 MSI API: [MsiViewModify](http://msdn.microsoft.com/library/en-us/msi/setup/msiviewmodify.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | the seek failed |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the View handle is invalid |
## Update(record) Method {#update_record}
Updates the View with new data from the Record.
### Declaration
```cs
public void Update(
  Record record
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| record | Record | the new data |
### Remarks
Only non-primary keys can be updated. The Record must have been obtained by calling «see M:WixToolset.Dtf.WindowsInstaller.View.Fetch» . Fails with a deleted Record. Works only with read-write Records.
See «see M:WixToolset.Dtf.WindowsInstaller.View.Modify(WixToolset.Dtf.WindowsInstaller.ViewModifyMode,WixToolset.Dtf.WindowsInstaller.Record)» for more remarks.
Win32 MSI API: [MsiViewModify](http://msdn.microsoft.com/library/en-us/msi/setup/msiviewmodify.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | the update failed |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the View handle is invalid |
## Validate(record) Method {#validate_record}
Validates a record, returning information about any errors.
### Declaration
```cs
public System.Collections.Generic.ICollection<WixToolset.Dtf.WindowsInstaller.ValidationErrorInfo> Validate(
  Record record
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| record | Record | the Record to be validated |
### Return value
`System.Collections.Generic.ICollection<WixToolset.Dtf.WindowsInstaller.ValidationErrorInfo>` null if the record was validated; if there is an existing record with the same primary keys that has conflicting data then error information is returned
### Remarks
The Record must have been obtained by calling «see M:WixToolset.Dtf.WindowsInstaller.View.Fetch» . Works with read-write and read-only records. This method cannot be used with a View containing joins.
See «see M:WixToolset.Dtf.WindowsInstaller.View.Modify(WixToolset.Dtf.WindowsInstaller.ViewModifyMode,WixToolset.Dtf.WindowsInstaller.Record)» for more remarks.
Win32 MSI APIs: [MsiViewModify](http://msdn.microsoft.com/library/en-us/msi/setup/msiviewmodify.asp) , [MsiViewGetError](http://msdn.microsoft.com/library/en-us/msi/setup/msiviewgeterror.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | the validation failed (for a reason other than invalid data) |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the View handle is invalid |
## ValidateDelete(record) Method {#validatedelete_record}
Validates a record that will be deleted later, returning information about any errors.
### Declaration
```cs
public System.Collections.Generic.ICollection<WixToolset.Dtf.WindowsInstaller.ValidationErrorInfo> ValidateDelete(
  Record record
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| record | Record | the Record to be validated |
### Return value
`System.Collections.Generic.ICollection<WixToolset.Dtf.WindowsInstaller.ValidationErrorInfo>` null if the record is safe to delete; if another row refers to the primary keys of this row then error information is returned
### Remarks
Validation does not check for the existence of the primary keys of this row in properties or strings. Does not check if a column is a foreign key to multiple tables. Works with read-write and read-only records. This method cannot be used with a View containing joins.
See «see M:WixToolset.Dtf.WindowsInstaller.View.Modify(WixToolset.Dtf.WindowsInstaller.ViewModifyMode,WixToolset.Dtf.WindowsInstaller.Record)» for more remarks.
Win32 MSI APIs: [MsiViewModify](http://msdn.microsoft.com/library/en-us/msi/setup/msiviewmodify.asp) , [MsiViewGetError](http://msdn.microsoft.com/library/en-us/msi/setup/msiviewgeterror.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | the validation failed (for a reason other than invalid data) |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the View handle is invalid |
## ValidateFields(record) Method {#validatefields_record}
Validates fields of a fetched or new record, returning information about any errors. Can validate one or more fields of an incomplete record.
### Declaration
```cs
public System.Collections.Generic.ICollection<WixToolset.Dtf.WindowsInstaller.ValidationErrorInfo> ValidateFields(
  Record record
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| record | Record | the Record to be validated |
### Return value
`System.Collections.Generic.ICollection<WixToolset.Dtf.WindowsInstaller.ValidationErrorInfo>` null if the record was validated; if there is an existing record with the same primary keys that has conflicting data then error information is returned
### Remarks
Works with read-write and read-only records. This method cannot be used with a View containing joins.
See «see M:WixToolset.Dtf.WindowsInstaller.View.Modify(WixToolset.Dtf.WindowsInstaller.ViewModifyMode,WixToolset.Dtf.WindowsInstaller.Record)» for more remarks.
Win32 MSI APIs: [MsiViewModify](http://msdn.microsoft.com/library/en-us/msi/setup/msiviewmodify.asp) , [MsiViewGetError](http://msdn.microsoft.com/library/en-us/msi/setup/msiviewgeterror.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | the validation failed (for a reason other than invalid data) |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the View handle is invalid |
## ValidateNew(record) Method {#validatenew_record}
Validates a new record, returning information about any errors.
### Declaration
```cs
public System.Collections.Generic.ICollection<WixToolset.Dtf.WindowsInstaller.ValidationErrorInfo> ValidateNew(
  Record record
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| record | Record | the Record to be validated |
### Return value
`System.Collections.Generic.ICollection<WixToolset.Dtf.WindowsInstaller.ValidationErrorInfo>` null if the record was validated; if there is an existing record with the same primary keys then error information is returned
### Remarks
Checks for duplicate keys. The Record must have been obtained by calling «see M:WixToolset.Dtf.WindowsInstaller.View.Fetch» . Works with read-write and read-only records. This method cannot be used with a View containing joins.
See «see M:WixToolset.Dtf.WindowsInstaller.View.Modify(WixToolset.Dtf.WindowsInstaller.ViewModifyMode,WixToolset.Dtf.WindowsInstaller.Record)» for more remarks.
Win32 MSI APIs: [MsiViewModify](http://msdn.microsoft.com/library/en-us/msi/setup/msiviewmodify.asp) , [MsiViewGetError](http://msdn.microsoft.com/library/en-us/msi/setup/msiviewgeterror.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | the validation failed (for a reason other than invalid data) |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the View handle is invalid |
## Columns Property {#columns}
Gets the set of columns that were included in the query for this View, or null if this view is not a SELECT query.
### Declaration
```cs
public ColumnCollection Columns { get; set; }
```
### Remarks
Win32 MSI API: [MsiViewGetColumnInfo](http://msdn.microsoft.com/library/en-us/msi/setup/msiviewgetcolumninfo.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | the View is not in an active state |
| T:WixToolset.Dtf.WindowsInstaller.InvalidHandleException | the View handle is invalid |
## Database Property {#database}
Gets the Database on which this View was opened.
### Declaration
```cs
public Database Database { get; set; }
```
## QueryString Property {#querystring}
Gets the SQL query string used to open this View.
### Declaration
```cs
public string QueryString { get; set; }
```
## Tables Property {#tables}
Gets the set of tables that were included in the SQL query for this View.
### Declaration
```cs
public IList<WixToolset.Dtf.WindowsInstaller.TableInfo> Tables { get; set; }
```
