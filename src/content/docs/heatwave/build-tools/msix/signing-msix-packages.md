---
title: Signing MSIX Packages
sidebar:
  order: 3
---

Unlike MSIs, MSIX packages must be signed with a certificate that matches the `Msix` element's `Publisher` attribute before the package can be installed. In your .wixproj, you can override the `SignMsix` target that operates much like the [`SignMsi` target](http://wixtoolset.org/documentation/manual/v3/overview/insignia.html).

For example add the following to the bottom of your .wixproj, just above the final `</Project>` element:

```xml title=MySetup.wixproj
<Target Name="SignMsix">
  <Exec Command='"$(WixToolPath)\x86\signtool.exe" sign /fd SHA256 /a /f path\to\your.pfx /p yourpfxpwd "@(SignMsix)"' />
</Target>
```

Note: The `signtool.exe` included with WEP at `"$(WixToolPath)\x86\signtool.exe"` has support for signing SignMsix packages. Older versions of `signtool.exe` may not and will fail so we recommend using the provided path.

## Create your own test certificate

If you don't have a certificate already, you can create a test certificate using the following commands:

```cmd
"C:\Program Files (x86)\Windows Kits\10\bin\x86\makecert.exe" /n "CN=Your Company Subject" /r /h 0
    /eku "1.3.6.1.5.5.7.3.3,1.3.6.1.4.1.311.10.3.13" /e 12/12/2018 /sv path\to\your.pvk path\to\your.cer
```

That command will prompt you to provide a password for the resulting certificate. Use that password in the next command line:

```cmd
"C:\Program Files (x86)\Windows Kits\10\bin\x86\Pvk2Pfx.exe" /pvk path\to\your.pvk /pi YourPasswordFromStepAbove
    /spc path\to\your.cer /pfx path\to\your.pfx
```

This will result in the .pfx file you can use to sign your .msix package. The .cer file from the first step should be added to your test machine's "Trusted People" certificate store to allow you to install your test signed package.

The [MSDN documentation][msdnsign] is also quite good for this topic.

There is also an [option using PowerShell][pssign] that is now recommended over makecert.exe. But we're a bit old fashioned and still like to use cmd.exe.

It is important to ensure that the value in your Msix/@Publisher attribute match the "CN=Your Company Subject" in the makecert.exe command-line. If those don't match you will get very cryptic error messages when signing.


[msdnsign]: https://learn.microsoft.com/en-us/windows/win32/appxpkg/how-to-create-a-package-signing-certificate
[pssign]: https://learn.microsoft.com/en-us/windows/msix/package/create-certificate-package-signing
