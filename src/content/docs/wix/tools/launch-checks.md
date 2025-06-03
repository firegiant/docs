---
sidebar_position: 91
---

# How To: Block installation based on OS version

It is often desirable to block installation of an application on too old Windows versions. The following sample demonstrates how to block installation on Windows versions prior to Windows 10 version 21H1.

```xml
<Property Id="WINDOWSBUILDNUMBER" Secure="yes">
    <RegistrySearch Id="BuildNumberSearch" Root="HKLM" Key="SOFTWARE\Microsoft\Windows NT\CurrentVersion" Name="CurrentBuildNumber" Type="raw" />
</Property>
<Launch Condition="Installed OR (WINDOWSBUILDNUMBER &gt;= 19044)" Message="This application require Windows 10 version 21H1 (build 19044) or newer." />
```

The sample uses the `SOFTWARE\Microsoft\Windows NT\CurrentVersion\CurrentBuildNumber` registry key to detect the current Windows version.
