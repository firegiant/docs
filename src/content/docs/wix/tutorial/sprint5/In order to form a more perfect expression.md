---
title: In order to form a more perfect expression
sidebar:
  order: 6
---

We know this launch condition:

```xml
<Launch Condition="WIX_NATIVE_MACHINE = 34404" Message="TODO  Must run only on an x64 machine!  TODO" />
```

blocks our current x64 package on an Arm64 machine. But can we come up with a launch condition (or maybe multiple launch conditions?) that will accomplish the goal when we're building both x64 and Arm64 packages? The condition `WIX_NATIVE_MACHINE = 34404` will be false when running on an Arm64 machine even in the (hypothetical) Arm64 package we create in the future.

Let's revisit our friend pseudocode. We want a condition that works like this:

```vb
IF IsX64Package == TRUE AND X64Machine == TRUE THEN
  REM OK!
ELSE IF IsArm64Package == TRUE AND Arm64Machine == TRUE THEN
  REM OK!
ELSE
  REM BLOCK!
ENDIF
```

It turns out that Windows Installer helps us out on the first `ELSE` block: Though you can run an x64 package on an Arm64 machine, the reverse is not true: An Arm64 package won't even open on an x64 machine. Instead, you'll get a message like this:

![Windows Installer message box showing incompatible package message](/images/docs/incompatible_package.png)

> Unfortunately, because MSI doesn't execute the package at all, there's no way to customize the error message. On the upside, MSI takes care of localizing it into the user's chosen language.

So all we have to do is construct a condition that means "if this is an x64 package, the machine must also be x64; otherwise, ignore." Hmmm...`IF P THEN Q` -- that sounds familiar...right, from the dusty recesses of college truth tables, it's [logical implication](https://en.wikiversity.org/wiki/Logical_implication). Implication is exactly what we want here: If it's not an x64 package, we don't care about the machine's platform. Using fancy logic symbols, the expression is

`IsX64Package` &rArr; `X64Machine`

> You might also have learned it as `IsX64Package` &sup; `X64Machine`, which is my personal favorite.

Most languages don't have an implication operator but of course the universe lets you construct it from more common operators:

`(`&not;`IsX64Package)` &or; `X64Machine`

Or in the almost-English of the Windows Installer expression syntax:

`(NOT IsX64Package) OR X64Machine`

But, believe it or not, [MSI has a logical implication operator](https://learn.microsoft.com/en-us/windows/win32/msi/conditional-statement-syntax#logical-operators)! No doubt due to the expression syntax's roots in BASIC (or Basic if you prefer), MSI implements an `IMP` operator:

`IsX64Package IMP X64Machine`

> The `IMP` operator is a bit esoteric but `(NOT IsX64Package) OR X64Machine` definitely doesn't make it obvious what the condition is trying to accomplish. Let's favor the clearer-but-more-esoteric `IMP` operator. And also, let's be on the lookout for ways we can use the `XOR` and `EQV` operators that MSI also provides!

The pseudocode `X64Machine` is equivalent to `WIX_NATIVE_MACHINE = 34404`:

`IsX64Package IMP WIX_NATIVE_MACHINE = 34404`

How do we replace `IsX64Package`? You might think there'd be a built-in property to determine the platform a package supports. Unfortunately, your thinking would be wrong. But no worries, because WiX has us covered. Without getting into too much detail, the WiX _preprocessor_ has a built-in variable named [`BUILDARCH` that contains "the platform (x86, x64, arm64) this package is compiled for"](https://wixtoolset.org/docs/tools/preprocessor/#built-in-system-variables).

> We'll cover the preprocessor in more depth in future sprints. Would you believe the preprocessor could have entirely avoided the need to dredge up memories of esoteric logical operators? It's true...but surely you wouldn't trade all that fun?

We end up with this condition:

```
"$(sys.BUILDARCH)" ~= "x64" IMP WIX_NATIVE_MACHINE = 34404
```

We surround the strings with double-quote marks. (Otherwise, MSI would try to look them up as properties.) We also use the `~=` operator, which is how MSI does case-insensitive string comparisons.

> The WiX documentation uses lowercase `x64` (and `x86` and `arm64`) and, a quick check in the WiX source code confirms that, in fact, the documentation is correct. But using the `~=` operator avoids the need to be 100% sure. Unfortunately, MSI chose to use the `~` prefix to mean a case-insensitive string comparison, which is a bit confusing if you're used to it meaning `NOT`. Remember that in MSI's BASIC-like expression dialect, not-equal is spelled `<>`.

That leaves us to prepare the launch condition in Package.wxs:

```xml
<util:QueryNativeMachine />

<Launch
  Condition='"$(sys.BUILDARCH)" ~= "x64" IMP WIX_NATIVE_MACHINE = 34404'
  Message="TODO  This package can run only on $(sys.BUILDARCH) machines!  TODO" />
```
