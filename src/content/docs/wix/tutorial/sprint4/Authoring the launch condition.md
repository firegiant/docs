---
title: Authoring the launch condition
sidebar:
  order: 4
---

OK, so we know what condition we need to check for, so let's write some WiX code! Launch conditions are represented by the [`Launch` element](/wix/schema/wxs/launch/), which typically lives as a child element of your `Package` element. You can start typing `<Launch` inside Visual Studio and Intellisense will helpfully list matching elements -- of which there is one that starts with `L` and is allowed under `Package`. Intellisense also shows you available attributes, making it easy to get this snippet:

```xml
<Launch Condition="" Message="" />
```

> Be careful when using Intellisense to find out available attributes. Intellisense is smart enough to know not to list elements that aren't legal child elements of the parent element but not so much with attributes. Those wicked-smart WiX developers spend a lot of time thinking about crafting the best WiX language possible, which means that the default values for a lot of available attributes are exactly what you want. You _can_ specify those default values, even every default value, to be extra pedantic about what you mean. But that comes at a cost of having _really_ verbose WiX code that is harder to understand. Don't do it; trust those wicked-smart WiX developers.

We know that the condition we want is `MsiNTProductType = 1`, which gives us:

```xml
<Launch Condition="MsiNTProductType = 1" Message="Launch Condition Failed Message Goes Here" />
```

If the launch condition is false, MSI pops up a simple message box, like this:

![Windows Installer message box showing launch condition failure message`](/images/docs/launch_condition_failure.png)

So what do we want the message to say? One approach is to pull out the thesaurus and try to write the perfect message. Another approach is to realize that someone in Marketing will want to rewrite to reduce the amount of information that's communicated while increasing the number of words, so don't bother writing anything fancy. Let's use that second, efficient ("lazy") approach.

```xml
<Launch Condition="MsiNTProductType = 1" Message="TODO Wrong OS type! TODO" />
```

> `TODO` comments are easy to search for and will never accidentally ship to users, right?
