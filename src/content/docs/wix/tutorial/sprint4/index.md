---
title: Blocking packages
sidebar:
  order: 0
---
As the team budget continues to grow (the shrimp catering budget for the senior team meetings is orders of magnitude bigger than the weenie catering budget for the peon meetings), the money types are looking for ways to grow revenue. They're still working out the details, but the rumor mill suggests we'll have to put together an expensive "ultimate" edition (codename: Project FOMO) and restrict the "classic" edition. One of the restrictions that's been put on our product backlog is to prevent the product from installing on a Server edition of Windows. We'll need to create those editions and relax the restriction for the enterprise edition, but those tasks will come later.

So we need a way to:

1. Detect that we're running on a Server edition of Windows.
2. If we are, show a message and quit the installer.

In an pleasant change of luck, Windows Installer can do both of those things for us. MSI has a number of _built-in properties_ that let us detect the edition of Windows the package is running on and a facility -- named _launch conditions_ -- to block packages if user-specified conditions aren't met.

Here are our tasks for this sprint:

- Find the right property that identifies Windows Server.
- Author the launch condition with the right condition and a clear message for the user.

Our sprint exit criteria this time around are getting more serious: We need to verify that our intended behavior works and that we didn't introduce any failures. (Wouldn't it be so much easier if we didn't care about introducing failures?)
