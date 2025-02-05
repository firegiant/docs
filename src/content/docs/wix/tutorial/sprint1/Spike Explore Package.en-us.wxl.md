---
title: "Spike: What's in Package.en-us.wxl?"
sidebar:
  order: 8
---

The fourth and last file HeatWave gave us is the first that isn't a WiX source file. It's a localization file, which is processed during the WiX build process to let you create packages with different languages. For now, there is one localization file and it's US English. You can have as many localization files as your tongues can handle.


```xml
<!--
This file contains the declaration of all the localizable strings.
-->
```

A noteworthy first: XML files can contain comments. Comments might have been useful before, but we'll take what we can get.


```xml
<WixLocalization xmlns="http://wixtoolset.org/schemas/v4/wxl" Culture="en-US">
```

As localization files are not WiX source files, they use a different root element and namespace. The `Culture` attribute identifies the culture (language and region) used in the localization.
> `Culture` is the name of a culture following the rules of the [.NET `CultureInfo` class](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.cultureinfo#culture-names-and-identifiers) which itself follows the [Internet standard](https://datatracker.ietf.org/doc/html/rfc5646).


```xml
<String Id="DowngradeError" Value="A newer version of [ProductName] is already installed." />
```

Localization files mostly (usually) contain a bunch of strings. Each string has an id and a value that is the string localized in the culture specified in the `WixLocalization/@Culture` attribute. WiX lets you reference a localization string wherever a hard-coded string is supported. In this case, the DowngradeError string is used back in Package.wxs to provide an error message for the `MajorUpgrade` element:

```xml
<MajorUpgrade
  DowngradeErrorMessage="!(loc.DowngradeError)" />
```

As discussed above, the `!(loc.DowngradeError)` syntax is how you refer to a localization string by its id. When you're building a package for US English, WiX uses the DowngradeError string from the localization file with culture `en-US`. Likewise for other cultures like `de-DE` for German in Germany, `ja-JP` for Japanese in Japan, or `tlh` for [Klingon](https://en.wikipedia.org/wiki/Klingon_language).
