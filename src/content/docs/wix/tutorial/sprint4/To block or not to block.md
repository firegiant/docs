---
title: To block or not to block
sidebar:
  order: 3
---

Our goal is to block our package from running on a Server edition of Windows. Windows Installer has launch conditions, which allow us to implement the blocking behavior that we're looking for, but launch conditions aren't _technically_ blockers. Instead, launch conditions are intended to be taken literally: Conditions that must be met to launch the package. If the condition is not met, a message is shown (blocking the package). So, from a purely pedantic perspective, launch conditions are _not_ blockers, they're _not not_ blockers. In pseudo-code, it works like this:

```
IF launch_condition = FALSE THEN
  SHOW launch_condition_message
ENDIF
```

It's a little backward because the launch condition message doesn't match the launch condition expression.

But wait. We discovered that the blocker condition we wanted is ```MsiNTProductType <> 1``` (```MsiNTProductType &lt;&gt; 1``` in XML) but to turn it into a launch condition, we want the opposite. The opposite of `<>` is `=`, so the launch condition expression we want is ```MsiNTProductType = 1```.

> Yes, MSI has a `NOT` operator, so you could, if you're feeling that way, express the launch condition as `NOT (MsiNTProductType <> 1)`. That's definitely not at all confusing. Stick with the `=` and avoid the `&lt;` and `&gt;` XML weirdness.

Back to the pseudo-code, it would look like this:

```
IF (MsiNTProductType = 1) = FALSE THEN
  SHOW launch_condition_message
ENDIF
```

Now let's write some WiX code.
