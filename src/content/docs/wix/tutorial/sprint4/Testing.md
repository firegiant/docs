---
title: Testing
sidebar:
  order: 9
---

Because we're testing launch conditions and launch conditions are evaluated early, before the UAC prompt, it's easy and safe to test them without going through the (minimal) effort of booting up Windows Sandbox. We have two scenarios to test:

1. We successfully block the package when running on a Windows Server machine.
2. We didn't accidentally prevent the package from installing on non-Server Windows machines.

Remember way back when this was going to be "easy and safe"? Well, it is, if you happen to have a Windows Server machine you can play with. Not everyone does, so to successfully test scenario #1, you'll want to prepare a virtual machine with Windows Server. That sounds like a lot of work, especially this early in the product development cycle -- maybe someone else will need to set up a Windows Server VM we can "borrow." Is there a way we can cheat? Ah, there are always ways to cheat, my friend.

Let's assume, for the sake of laziness, that the Windows Installer documentation is correct and we can rely on the documented values of `MsiNTProductType`. We can't change the value of `MsiNTProductType` because it's built in to Windows Installer. But we can change the conditional expression in our launch condition to _simulate_ that we're running on Windows Server. Instead of wanting the launch condition to prevent launching the package on Windows Server, we can reverse it to prevent launching on non-Server (Home and Professional).

```xml
<Launch Condition="MsiNTProductType &lt;&gt; 1" Message="TODO Wrong OS type! TODO" />
```

And with that fake condition in place, we get:

![Windows Installer message box showing launch condition failure message](/images/docs/fake_launch_condition_failure.png)

With that, we'll declare temporary success.

Undo that fake launch condition change:

```xml
<Launch Condition="MsiNTProductType = 1" Message="TODO Wrong OS type! TODO" />
```

Build and launch the package and you'll get a UAC prompt, not a launch condition failure message. Just cancel out of that and your easy and safe testing is concluded.
