---
title: Formatted Strings
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 3
---

Strings appearing in control texts can be formatted. We have already used property names in square brackets but there are more complicated rules around here, too. First if the property name is not valid in `[Property]`, the whole substring is left unchanged.

This rule is somewhat different if the square brackets are nested. `[[Property]]` will first look up `Property`, then use its value as another property name, then look this second property up. In any of these property names are not found, the whole substring will be considered an empty string.

Blackslashes can be used as escape characters to denote characters otherwise having special meaning (like square brackets).

The substring `[~]` is replaced with a null character. This makes is possible to compile REG_MULTI_SZ registry strings.

The `[#filekey]` notation will return the full path of the file with the specified `Id` but only after _CostInitialize_, _FileCost_ or _CostFinalize_ have been run. The path will depend on whether the file belongs to a component that is installed locally or from the source.

The `[$componentkey]` notation will return the install directory of the specified component but only after _CostInitialize_, _FileCost_ or _CostFinalize_ have been run. The path will depend on whether the file belongs to a component that is installed locally or from the source.

The `[!filekey]` notation is usually equivalent to `[#filekey]` with the exception of the `Value` attribute of `Registry` or `IniFile` tags. In these cases, it will return the full short path of the file.

WiX makes it possible to inject strings defined outside (eg. on a command line) to be used in the source. The compiler, Candle, supports preprocessor variables and uses the `$(var.Foo)` syntax. You can provide the value either in the source file itself:

    <?define Foo = "bar" ?>

or with a command line switch:

    candle -dFoo=bar

Light, the linker, has a similar scheme with bind-time variables and uses a slightly different syntax: `!(wix.Foo)`. The command line is similar:

    light -dFoo=bar

Localized strings use the `!(loc.Foo)` notation. The linker expects these strings to be provided in a `.wxl` localization file with the syntax:

    <String Id="Foo" Overridable="yes">bar</String>

The localization file is also specified on the command line:

    light -loc path

The main difference between localization and other string is the overridable nature of the former. While a library or extension module can have a default value for the string, it can be overridden late during the process of linking.

In order to assign any of these values to a regular Windows Installer property, use the `Property` tag:

    <Property Id="Foo1" Value="$(var.Foo)" />
    <Property Id="Foo2" Value="!(wix.Foo)" />
    <Property Id="Foo3" Value="$(env.Foo)" />

Environment variables can be accessed using the `$(env.Foo)` syntax.
