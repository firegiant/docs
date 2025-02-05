---
title: Custom Actions and User Interface
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 1
---

Our [SampleListbox](/system/files/samples/SampleListbox.zip) demonstrates how a custom action can collect data that is to be displayed in the user interface. We will use the WcaUtil custom action library bundled with WiX to help us accomplish this. This library contains many convenience functions that make it easier to write custom actions in C++. These include functions to get and set properties both in a raw format and formatted, modifying the installer databases or logging to the Windows Installer log file.

We will modify the stock UI slightly to accommodate a new dialog, `InstallDlg`. We've already seen in previous lessons how to accomplish this. So, there is nothing here we don't already know: we specify and schedule our custom action; we specify our listbox to be linked to a public property.

    <CustomAction Id="FillingListbox" BinaryKey="FillListbox" DllEntry="FillListbox" />

    <UI>
      <Dialog Id="InstallDlg" Width="370" Height="270" Title="[ProductName] Setup" NoMinimize="yes">
        ...
        <Control Id="FilledListbox" Type="ListBox" Sorted="yes" Indirect="no"
          Property="LISTBOXVALUES" X="10" Y="50" Width="200" Height="130" />
      </Dialog>

      <InstallUISequence>
        <Custom Action="FillingListbox" After="CostFinalize" />
        <Show Dialog="InstallDlg" After="FillingListbox" />
      </InstallUISequence>
    </UI>

    <Binary Id="FillListbox" SourceFile="FillListbox.dll" />

The custom action will use WcaUtil to initiate and close our connection to the installer as well as to inject the values appearing in the public property, reflected in the listbox connected to this property:

    #include <windows.h>
    #include <msi.h>
    #include <msiquery.h>
    #include "wcautil.h"

    #pragma comment(linker, "/EXPORT:FillListbox=_FillListbox@4")

    extern "C" UINT __stdcall FillListbox(MSIHANDLE hInstall) {
      HRESULT hResult = WcaInitialize(hInstall, "FillListbox");
      if (FAILED(hResult)) return ERROR_INSTALL_FAILURE;

      MSIHANDLE hTable = NULL;
      MSIHANDLE hColumns = NULL;

      hResult = WcaAddTempRecord(&hTable, &hColumns, L"ListBox", NULL, 0, 3, L"LISTBOXVALUES", 1, L"Item 1");
      hResult = WcaAddTempRecord(&hTable, &hColumns, L"ListBox", NULL, 0, 3, L"LISTBOXVALUES", 2, L"Item 2");
      hResult = WcaAddTempRecord(&hTable, &hColumns, L"ListBox", NULL, 0, 3, L"LISTBOXVALUES", 3, L"Item 3");

      if (hTable)
        MsiCloseHandle(hTable);
      if (hColumns)
        MsiCloseHandle(hColumns);
      return WcaFinalize(hResult);
    }

Apart from msi.lib, you also need to link against dutil.lib and wcautil.lib when building the DLL. Those files are installed with the WiX toolset.
