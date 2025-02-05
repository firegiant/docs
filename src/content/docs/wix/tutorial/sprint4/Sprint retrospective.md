---
title: Sprint 4 retrospective
sidebar:
  order: 10
---

Sprint retrospectives end the sprint and give opportunities for the team to talk honestly about what worked well, what didn't, and how the team can do better. For Sprint 4, how did we do?


## What worked well?

We set out to write some WiX code and we did. We rock! We learned a bit about Windows Installer internals and how to use them to accomplish foundational functionality: Ensure users are going to end up in a supported configuration -- well, preventing them from ending up in an unsupported configuration.


## What could work better?

We discovered one of the challenges about working in setup: We frequently need to work with multiple versions and flavors of operating system -- even if "it's all just Windows." Typically, even small businesses will standardize on one version of Windows, to keep everything boringly the same. But out in the wide world of users, you likely need to support a wider variety of Windows versions and editions. When it comes to setup, you can typically develop and test on a small number of operating systems, but you need to be prepared to test on more, depending on what your product supports. We need to figure out how we'll do that.


## What will we improve next sprint?

We actually feel pretty good about what we did this sprint and how we did it. We know we need to figure out the "many Windows" problem, but hopefully we'll have a bit of time to work on that.
