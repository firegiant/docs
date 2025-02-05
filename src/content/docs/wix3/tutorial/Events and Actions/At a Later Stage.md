---
title: At a Later Stage
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 6
---

Many custom actions that set properties, feature or component states, target directories or schedule system operations by inserting rows into sequence tables, can in many cases use immediate execution safely. Other custom actions that require to change the system directly or to call another system service must be deferred to such time when the installation script is executed. The Windows Installer writes these _deferred_ custom actions into the installation script for later execution.

Deferred custom actions are defined in the following way:

    <CustomAction Id="MyAction" Return="check" Execute="deferred" BinaryKey="CustomActionsLibrary" DllEntry="MyAction" HideTarget="yes"/>

The `Execute` attribute will specify the deferred status of our custom action. We need to refer to the DLL function we need to call using the `DllEntry` attribute (don't forget the decoration for C++-style names like `_MyAction@4` if your compiling environment requires this). And finally, `HideTarget` will allow us to disable logging the parameters passed to this custom action if security considerations so dictate.

Because the installation script will be executed outside of the normal installation session, this session may no longer exist during the execution of the deferred action; neither the original session handle nor any property data set during the installation sequence will be available to the deferred action. The very limited amount of information the custom action can obtain consists of three properties:



* CustomActionData
    Value at time custom action is processed in sequence table. This property is only available to deferred execution custom actions, immediate ones do not have access to it.
* ProductCode
    The unique GUID code for the product.
* UserSID
    The user's security identifier (SID), set by the installer.

If we need to pass any other property data to the deferred action, we can use a secondary custom action to set this value beforehand. The simplest solution is a property assignment custom action. Set it up in a way that the name of the property set will be the same as the `Id` attribute of the deferred custom action:

    <Property Id="SOME_PUBLIC_PROPERTY">Hello, from deferred CA</Property>
    <CustomAction Id="MyAction.SetProperty" Return="check" Property="MyAction" Value="[SOME_PUBLIC_PROPERTY]" />

Scheduling the property assignment _before_ the deferred action is important, too:

    <InstallExecuteSequence>
        <Custom Action="MyAction.SetProperty" After="ValidateProductID" />
        <Custom Action="MyAction" After="MyAction.SetProperty" />
    </InstallExecuteSequence>

The data we wanted to pass will appear in the `CustomActionData` property. Should we need to pass more than one piece of information, we have to devise a way to incorporate them into this single property, for instance, to use a semicolon separated list of `Name=Value` pairs.

    #include <windows.h>
    #include <msi.h>
    #include <msiquery.h>
    #include <tchar.h>

    #pragma comment(linker, "/EXPORT:MyAction=_MyAction@4")

    extern "C" UINT __stdcall MyAction (MSIHANDLE hInstall) 
    {
        TCHAR szActionData[MAX_PATH] = {0};
        DWORD dActionDataLen = MAX_PATH;

        MsiGetProperty(hInstall, "CustomActionData", szActionData, &dActionDataLen);
        MessageBox(NULL, szActionData, _T("Deferred Custom Action"), MB_OK | MB_ICONINFORMATION);
        return ERROR_SUCCESS;
    }
