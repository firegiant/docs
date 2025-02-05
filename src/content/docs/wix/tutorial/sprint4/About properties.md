---
title: About properties
sidebar:
  order: 1
---

What is a _property_, you might ask, given that we have to use it in our task. The one-sentence definition from the Windows Installer documentation says [_Properties are global variables that Windows Installer uses during an installation._](https://learn.microsoft.com/en-us/windows/win32/msi/properties) Like variables in a typical programming language, you can get the value from a property and use it in some kind of logic. You can also set property values to hard-coded values at build time and "calculated" values at runtime. Sometimes MSI sets property values for you. (Spoilers! WiX extensions that contain custom action code can also set property values.)

For now, we're focusing on properties that MSI sets for us. MSI has a lot of built-in properties; [if you're looking for a bit of light bedtime reading, you can see the official documentation of them all here](https://learn.microsoft.com/en-us/windows/win32/msi/property-reference). There are plenty of interesting properties here but the ones we're most interested are listed in the [Operating System Properties](https://learn.microsoft.com/en-us/windows/win32/msi/property-reference#operating-system-properties) section. In addition to support for some long-obsolete Microsoft products -- if you remember BackOffice, it's probably past time to get your shingles vaccine -- is the [`MsiNTProductType` property](https://learn.microsoft.com/en-us/windows/win32/msi/msintproducttype) which "for Windows 2000`(!)` and later operating systems" is set to the following values:

1. Windows 2000 Professional and later
2. Windows 2000 domain controller and later
3. Windows 2000 Server and later

The [underlying API documentation](https://learn.microsoft.com/en-us/windows/win32/api/winnt/ns-winnt-osversioninfoexa) clarifies that a value of 1:

> The operating system is Windows 8, Windows 7, Windows Vista, Windows XP Professional, Windows XP Home Edition, or Windows 2000 Professional.

(We'll take it as granted that Home editions of later OSes count and that the missing Windows 10 and Windows 11 entries are just an artifact of parts of the doc not getting updated.)

So that means that if `MsiNTProductType` is not `1`, we're running on some flavor of Windows Server and should therefore block installation. Now how do we turn that into a launch condition?
