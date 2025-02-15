---
title: Creating a Database
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 1
---

To create an SQL database, we first need a user with the proper credentials. The user name and password are stored in properties, you can use any usual UI elements or custom actions to set them. Note that this is the same `User` tag we used to [create a new user account](/wix3/tutorial/com-expression-syntax-miscellanea/new-user-on-the-block) but it was used inside a `Component` tag then. Outside any component, it will not create the user, it only will define the credentials for other operations to use. As the tags, as well as the SQL functionality, are present in extension modules, we have to mention them in the opening tag of the source file:

    <Wix xmlns='http://schemas.microsoft.com/wix/2006/wi'
      xmlns:util='http://schemas.microsoft.com/wix/UtilExtension'
      xmlns:sql='http://schemas.microsoft.com/wix/SqlExtension'>

Also, because they belong the their own namespace, we have to decorate them during use:

    <util:User Id='SQLUser' Name='[SQLUSER]' Password='[SQLPASSWORD]' />

The creation of the database itself goes into a component, as usual. `SqlDatabase` refers to the previous `User` declaration, specifies the database name, server and instance. Not specifying `Server` will make it install on the SQL Server running on the target machine. Other attributes specify how to proceed in different situations. `ConfirmOverwrite` determines what to do if the database already exists and the `CreateOnInstall`, `CreateOnUninstall`, `DropOnInstall`, and `DropOnUninstall` attributes dictate the required behavior on install and uninstall.

The nested `SqlScript` tag will determine what to do with the empty database just created. We can execute any valid SQL script here, residing in a separate file. The `BinaryKey` attribute will provide the link to the .sql script file. Other attributes will specify the behavior if an error occurs (`ContinueOnError`) or will determine when to execute the script (`ExecuteOnInstall`, `ExecuteOnUninstall`, `RollbackOnInstall`, `RollbackOnUninstall`). With more than one script present for execution, they can be sequenced using the `Sequence` attribute.

    <Component Id='SqlComponent' Guid='YOURGUID-D8C7-4102-BA84-9702188FA316'>
      <sql:SqlDatabase Id='SqlDatabase' Database='Foobar' User='SQLUser' Server='[SQLSERVER]'
        CreateOnInstall='yes' DropOnUninstall='yes' ContinueOnError='yes'>
        <sql:SqlScript Id='CreateTable' BinaryKey='CreateTable' ExecuteOnInstall='yes' />
      </sql:SqlDatabase>
    </Component>

All that remains is to include the .sql file:

    <Binary Id='CreateTable' SourceFile='CreateTable.sql' />

The file it refers to will contain usual SQL commands to create a database table:

    CREATE TABLE Test (Value1 CHAR(50), Value2 INTEGER)
    CREATE INDEX TestIndex ON Test (Value1)

When building the installation package, you have to link it against the appropriate WiX modules:

    candle.exe -ext WixUtilExtension -ext WixSqlExtension SampleSQL.wxs
    light.exe -ext WixUtilExtension -ext WixSqlExtension SampleSQL.wixobj

You can download the complete [SampleSQL](/system/files/samples/SampleSQL.zip).
