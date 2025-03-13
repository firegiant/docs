---
title: Launch conditions
---

# How To: Block installation based on OS version

It's common to want to block installers from running on old versions of Windows. The following sample blocks installation on versions of Windows earlier than Windows 10 version 21H1. You can choose different minimum versions by replacing `19044` with a different version number.

```xml
<Property Id="WINDOWSBUILDNUMBER" Secure="yes">
    <RegistrySearch Id="BuildNumberSearch" Root="HKLM" Key="SOFTWARE\Microsoft\Windows NT\CurrentVersion" Name="CurrentBuildNumber" Type="raw" />
</Property>
<Launch Condition="Installed OR (WINDOWSBUILDNUMBER &gt;= 19044)" Message="This application require Windows 10 version 21H1 (build 19044) or newer." />
```

The sample uses the `SOFTWARE\Microsoft\Windows NT\CurrentVersion\CurrentBuildNumber` registry key to detect the current Windows version.
