---
title: Net and .NET
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 0
---

When you plan to distribute programs based on the .NET Framework, you have to make sure the user has the framework installed. Microsoft allows you to redistribute their framework but only in its original form (see their [description](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/cpguide/html/cpconDistributingCommonLanguageRuntime.asp)).

This also means that you can't build the framework into your own .msi package. There is no merge module or similar available. You have to provide a separate bootstrap installer, Setup.exe, that looks for the installed framework and starts your .NET Framework redistributable (or, alternatively, downloads and installs it from the Net). When finished, it will call your own installation package.

However, you don't have to write such a bootstrap installer yourself. Starting with WiX v3.6, you can [use the Burn chainer to install .NET Framework](http://wixtoolset.org/documentation/manual/v3/howtos/redistributables_and_install_checks/install_dotnet.html).
