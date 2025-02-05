---
title: 'Spike: Explore the project'
sidebar:
  order: 4
---
What did HeatWave give us? The `MSI Package (WiX v4)` template in HeatWave gives us four files. In order of importance, they are:

- Package.wxs
- Folders.wxs
- ExampleComponents.wxs
- Package.en-us.wxl

Let's take a look at them.


## File extensions

The files that HeatWave conjured for us have these two extensions:

- .wxs, for **W**i**X** **S**ource file.
- .wxl, for **W**i**X** **L**ocalization file.

> WiX doesn't force you to use particular extensions for your WiX source files but if you stick with the defaults, your life will be easier. (For example, if you supply a file with a .wxl extension, WiX knows to treat it as a localization file, but if you want to use a different extension, you have to use a switch to tell WiX it's a localization file.)
