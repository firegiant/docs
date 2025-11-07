---
title: FireGiant Licensing
sidebar:
  order: 1
---

The HeatWave Build Tools require a license file, a `.fglic`, to be available on developer and build machines. The license file is only used by the build tools and does **not** need to be distributed with the built installation packages. You can download your license file from [your FireGiant Account's License page][lp].


## License file placement

There are three options where you can place the license file.

1. Machine wide license store - you can copy the .fglic file to the `C:\ProgramData\FireGiant\Licenses` folder. Every .wixproj built on the machine will be supported. However, this option only works well when you have access to the computer. Hosted build servers often do not provide such access so one of the other two options is required.

2. Project file relative - you can place the .fglic file in the same folder as your .wixproj or any parent folder. For example, you could put the .fglic file in the root of your source code repository and all .wixprojs in that repository will be covered by that license. The .fglic file is text so it should play well with source control systems.

3. MSBuild Property - if for some reason, a common parent folder for your .wixprojs is not available you can set the `FireGiantLicenseFile` property in your .wixproj to the full path to your .fglic file. When this option is used, the other two options are ignored.


Again, a license file is only necessary for the build tools. The installation packages you create do not need to be concerned with FireGiant licensing. [Download (or create) your license file now][lp].


[lp]: https://account.firegiant.com/licenses/
