---
title: Testing
sidebar:
  order: 9
---

Like in Sprint 4, because we're testing launch conditions and launch conditions are evaluated early, we know we can live life a little bit dangerously and not bother with Windows Sandbox for our testing.

We also have the same class of problem with our launch condition from Sprint 4: We can test that we didn't break normal behavior with an x64 package on an x64 machine -- actually, we've already done that -- but verifying that we've blocked an x64 package on an Arm64 machine is a bit tougher because our lowly selves don't qualify for an Arm64 machine. Two things we can do:

1. Cheat. We've gotten really good at it, after all.
2. Try to guilt one of the senior folks to borrow one of the Arm64 devices.

Let's start with the cheating.

Our current launch condition is:

```xml
<Launch
  Condition='"$(sys.BUILDARCH)" ~= "x64" IMP WIX_NATIVE_MACHINE = 34404'
  Message="TODO  This package can run only on $(sys.BUILDARCH) machines!  TODO" />
```

We could just change the `34404` to `43620`, which is the Arm64 magic number. That would mimic what `WIX_NATIVE_MACHINE` would return on an actual Arm64 machine. The results are, unsurprisingly, exactly what we expected and hoped for:

![Windows Installer message box showing launch condition failure message on an x64 device](/images/docs/fake_launch_condition_failure.png)

And, after a bit of sad eyes at one of the more human senior devs and a cross-your-heart promise not to break anything, we reverted the cheating test and got the opportunity to try our package on a genuine Arm64 device. The results are intriguing:

![Windows Installer message box showing launch condition failure message on an Arm64 device](/images/docs/arm64_launch_condition_failure.png)

As the meme goes, corporate wants you to find the difference between these two error messages. They are, in fact, the same.
