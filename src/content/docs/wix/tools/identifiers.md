---
title: Identifiers
---

Identifiers in WiX follow familiar rules for allowed characters:

- All characters must be in the ASCII range.
- The first character must be a letter (`A-Z` or `a-z`) or an underscore (`_`).
- The remaining characters must be a letter (`A-Z` or `a-z`), an underscore (`_`), a period (`.`), or a digit (`0-9`).

These rules match Windows Installer's own rules. [MSI has additional rules and conventions.](https://learn.microsoft.com/en-us/windows/win32/msi/about-properties)


## Access modifiers

WiX supports specifying scope to identifiers, much like access modifiers in languages like C#:

- `global`: Indicates the identifier is globally visible to all other sections.
- `library`: Indicates the identifier is visible only to sections in the same library.
- `file`: Indicates the identifier is visible only to sections in the same source file.
- `section`: Indicates the identifier is visible only to the section where it is defined.
- `virtual`: Indicates the identifier can be overridden by another symbol. Virtual identifiers are always `global`.
- `override`: Indicates the identifier overrides a virtual symbol. Overridden virtual identifiers are always `global`.

Identifiers are `global` by default. Global identifiers are recorded in the output (package or bundle, for example) literally. Library, file, and section identifiers are given stable, calculated identifiers in the output so they cannot be referred to except as allowed by the access modifier. For example, an identifier of `section Foo` cannot be referred to except within the section (fragment, for example); if an identifier is required by the output (such as a file id in an MSI package), WiX supplies a stable, calculated identifier instead of `Foo`. That lets you keep `Foo` "private."

### Virtual and overridden identifiers

It's frequently useful to provide a default aspect to an identifier but allow the developer to override that default. The canonical example is to schedule a custom action at a particular point in `InstallExecuteSequence` but to allow a developer to override the default scheduling. (Note that such overrides aren't always a good idea; consider carefully why the default is what it is.)

For example, WiX extensions define custom action scheduling with the `virtual` access modifier:

```xml
<InstallExecuteSequence>
    <Custom
        Action="virtual $(var.Prefix)CloseApplications$(var.Suffix)"
        Before="InstallFiles"
        Condition="VersionNT &gt; 400" />
</InstallExecuteSequence>
```

To reschedule it, use the `override` access modifier to override the scheduling provided by the `virtual` symbol:

```xml
<InstallExecuteSequence>
    <Custom
        Action="override Wix4CloseApplications_$(sys.BUILDARCHSHORT)"
        After="InstallInitialize" />
</InstallExecuteSequence>
```
