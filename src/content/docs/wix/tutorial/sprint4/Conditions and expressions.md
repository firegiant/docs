---
title: Conditions and expressions
sidebar:
  order: 2
---

So we need to detect when the built-in `MsiNTProductType` property is set to something -- anything -- other than `1`. In a language like C, C++, or C# (or really any of your typical curly-brace programming languages), you'd end up with an _expression_:

```
MsiNTProductType != 1
```

Windows Installer, while definitely not your typical programming language, nonetheless supports expressions like that.

> In general, MSI has extensive support for _conditions_. It offers them in launch conditions, component conditions, feature conditions, and others that we'll talk about in the fullness of time. (Part of the reason for such extensive support for conditions is that MSI is definitely not your typical programming language -- but baking conditions into the engine let you simulate **if** statements. Support for **for** loops remains elusive.)

But Windows Installer does not embrace the curly-brace programming paradigm. Its expression syntax is a lot closer to that of your old-school Basic (or BASIC, back in the day) or some flavors of SQL. You can see the [syntax details in the Windows Installer SDK](https://learn.microsoft.com/en-us/windows/win32/msi/conditional-statement-syntax) but the two differences that matter most to us is that the equality operator is `=`, not `==`, and the inequality operator is `<>`, not `!=`.

So the expression up above, in MSI-speak, is:

```
MsiNTProductType <> 1
```

Almost.

As we've discussed in earlier sprints, the WiX language is expressed in XML. XML has a bunch of rules, which on the one hand, make it an excellent, if a bit verbose, markup language...but on the other hand, are really, _really_ annoying. One of those rules is that the `<` and `>` characters are special and to be used only for enclosing the names of elements. You can't use them in any other way, even inside quoted strings. Instead, XML requires you to use _entities_ instead. The entities for `<` and `>` are `&lt;` and `&gt;`, respectively. So that means ```MsiNTProductType != 1``` is not ```MsiNTProductType <> 1``` but instead is:

```
MsiNTProductType &lt;&gt; 1
```

