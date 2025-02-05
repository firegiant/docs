---
title: Using WiX extensions
sidebar:
  order: 0
---
At its most basic, WiX is a set of build tools to make packages for Windows Installer. But WiX does more than just that -- and one of those things is to add functionality that's not baked into Windows Installer. WiX packages up that extra functionality in _WiX extensions_. As one might guess from the name, WiX extensions are not built into WiX, so there are a couple of extra steps you have to take to use them. (Don't worry; those same smart and funny folks that wrote WiX also wrote a bunch of WiX extensions for your packaging pleasure.)

Here are our tasks for this sprint:

- Needing a WiX extension
- Adding the WiX extension to our project
- Adding the WiX extension namespace to our code
- Invoking the WiX extension
- Using the WiX extension's results

This time, because we're working with launch conditions, like the last sprint, our sprint exit criteria are also similar: Test our launch conditions to make sure we:

1. Accomplished our goal (met the requirement, in other words).
2. Didn't accidentally break something else.
