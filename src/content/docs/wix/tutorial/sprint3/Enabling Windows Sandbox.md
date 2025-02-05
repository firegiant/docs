---
title: Enabling Windows Sandbox
sidebar:
  order: 3
---

Windows Sandbox comes with Windows but isn't installed by default. [The documentation](https://learn.microsoft.com/en-us/windows/security/application-security/application-isolation/windows-sandbox/windows-sandbox-overview) tells you to search from the taskbar for `Turn Windows Features on or off` to bring up the feature list. Another way to get to that list is to visit our old friend ARP (Programs and Features) and click on the `Turn Windows Features on or off` link on the left.

That brings up a list of features. Scroll to almost the bottom of the list and you'll see `Windows Sandbox`. If you _don't_ see it, that means your machine isn't modern enough to satisfy Windows's cravings for the newest CPUs. If it's there and checked, you're all done. If it's there and unchecked, check it and click OK. You'll have to go through a reboot and spinner churn as Sandbox is installed.

Once it's installed, search for `sandbox` and choose the `Windows Sandbox` shortcut. The first time you run it, it might take a little while to come up (newbie jitters) but soon enough, you'll have a window with a familiar-looking Windows desktop.

Now let's get an installer to test.
