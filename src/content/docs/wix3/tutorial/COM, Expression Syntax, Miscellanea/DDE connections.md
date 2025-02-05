---
title: DDE connections
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 4
---

Shell connections using DDE (Dynamic Data Exchange) can be set up as follows:

    <ProgId Id='Program.xyz' Description='Program handling .xyz' Advertise='yes'>
      <Extension Id='xyz' ContentType='text/sql'>
        <Verb Id='open' Sequence='1' Command='Open' Argument='"%1"'/>
      </Extension>
      <Extension Id='xyz0' ContentType='text/sql'>
        <Verb Id='open' Sequence='1' Command='Open' Argument='"%1"'/>
      </Extension>
    </ProgId>

    <Component Id='regSetup' Guid='YOURGUID-6D8A-4AE2-9D9F-3E074F13A029'>
      <Registry Root='HKLM' KeyPath='yes' Key='SOFTWARE\Classes\Program.xyz\shell\open\ddeexec'
        Type='string' Value='[\[]open("%1")[\]]' />
      <Registry Root='HKLM' Key='SOFTWARE\Classes\Program.xyz\shell\open\ddeexec\application'
        Type='string' Value='Program.xyz' />
      <Registry Root='HKLM' Key='SOFTWARE\Classes\Program.xyz\shell\open\ddeexec\topic'
        Type='string' Value='System' />
    </Component>
