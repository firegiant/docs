---
title: Planning our testing
sidebar:
  order: 1
---

When last we left our installer, we'd refactored it a bit to clean up some naming and got it installing our placeholder app. (The real app? After a "planning off-site" to narrow in on the UI framework and development language, the dev team did the opposite and added three UI frameworks and two cool new languages they want to use. We still have time before they catch up to us.) So far, installing the placeholder app is the only bit of "real" functionality we've done. Or is it?

One of the nice things about building Windows Installer packages with WiX is that we get access to all the functionality of Windows Installer. (Also we get access to all the functionality of WiX, but we'll talk more about that later.) For example, an MSI package contains all the data needed to let MSI create the directories needed to lay out the files that are inside it. That means it also contains the data MSI needs to _uninstall_ the file and delete the directories. We didn't have to write any XML for that and even WiX didn't do anything for us behind the scenes; that behavior is part of Windows Installer itself.

<aside class="tutorial">
Because Windows Installer works off descriptions of how we want the machine to look after installation ("this directory goes under this other directory," "here are the files that should go in this directory") instead of scripted instructions ("create these directories," "copy these files"), we call it <i>declarative</i>, compared to the <i>imperative</i> approach of scripting. Back in the 1990s, that was a big change in how installation was done. The idea is that it's easier to make one engine do all the heavy lifting and get it to work well than it is to make thousands or millions of individual installers do everything and do it perfectly.
</aside>

OK, so we can test install and uninstall. Is there anything else? Oh my, yes -- wait until we want to test patch uninstall failure rollback -- but for now, let's stick with those two scenarios.

The steps in the test plan need to cover how to install and uninstall and which directories and files to check. We know from [Sprint 1](/docs/wix/tutorial/sprint1/spike-explore-folders/) and our update during [Sprint 2](/docs/wix/tutorial/sprint2/fix-our-company-name/), where our package will install the placeholder app: `C:\Program Files (x86)\Edgerock Concepts WixTutorialPackage\App.exe`.

So our test plan looks something like this:

1. Ensure the installer installs the placeholder app.
    1. Double-click the .msi file.
    1. Wait for the install to finish.
    1. Make sure `C:\Program Files (x86)\Edgerock Concepts WixTutorialPackage\App.exe` exists and is the placeholder app we just built.
    1. Open `Installed apps` (aka ARP) and verify `WixTutorialPackage` is listed.
1. Ensure the installer uninstalls the placeholder app and cleans up.
    1. Open `Installed apps`, select `WixTutorialPackage`, click the `...` button, and choose `Uninstall`.
    1. Confirm the uninstall and wait for the uninstall to finish.
    1. Make sure `C:\Program Files (x86)\Edgerock Concepts WixTutorialPackage\App.exe` has been deleted.
    1. Make sure the `C:\Program Files (x86)\Edgerock Concepts WixTutorialPackage` directory has been deleted.
    1. Re-open `Installed apps` and verify `WixTutorialPackage` is _not_ listed.

That's good enough that if the interns weren't busy gophering coffee for marketing, we could've gotten their help with the grunt work.
