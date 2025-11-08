---
title: FireGiant Bundle Application Framework
sidebar:
  order: 0
---

FireGiant Bundle Application Framework (FGBA) makes it easy to create custom bundle experiences, better known as "Bootstrapper Applications". Bootstrapper Applications are responsible for driving the bundle process and must handle many different scenarios. FGBA handles the complex edge cases for you so your bundle always installs and (often more importantly) uninstalls. It does this by abstracting away many of the low level details of Bootstrapper Applications allowing you to focus on the "Bundle UI".

:::caution[Licensed feature]
Like the other features in HeatWave Build Tools, a license file is required to use FireGiant Bundle Application. See the [FireGiant licensing documentation for more information](../firegiant-licensing/).
:::

Before digging into everything that FGBA provides, let's do a quick review of the key features of bundles from the Bootstrapper and Bundle Application point of view.

Part of the build process for a [`<Bundle/>`](/wix/schema/wxs/bundle/) is to embed the [`<BootstrapperApplication/>`](/wix/schema/wxs/bootstrapperapplication/) and all of its child [`<Payload/>`](/wix/schema/wxs/payload/) files into the bundle engine provided by WiX, called "Burn", to create your final bundle executable. When your customer runs your bundle, Burn unpacks your Bootstrapper Application and all of its payloads then launches your Bootstrapper Application executable. Since Bootstrapper Applications are executables that run in a separate process from Burn, they must connect back to Burn communicate about the bundle process.

FGBA makes this easy with one line of code:

```cs title=Program.cs {7}
using FireGiant.BundleApplicationFramework;

public static class Program
{
  public static int Main(string[] args)
  {
    FireGiantBundleApplication.Run();

    return 0;
  }
}
```

:::note[Exit code]
Always `return 0` from your Bootstrapper Application's entry point. That signals to Burn that your Bootstrapper Application executed properly. It is NOT how you communicate the final exit code for the overall process. We'll see how to communicate that later.
:::

Before we dig deeper into how you define your Bundle Application, let's complete our introduction to a few more key features of bundles.

## Bundle actions

Users can request six different actions from a bundle: Install, Modify, Repair, Uninstall, Layout, and Help.
* Install is the most well known action that typically has users select what options to install, possibly provide some configuration, then actually install the appropriate packages in the bundle.
* Modify is the same but occurs when the bundle is already installed.
* Repair is selected by users to fix a broken application.
* Uninstall is pretty self-explanatory; it is used to remove the bundle from the computer.
* Layout copies the bundle and all external payloads into a folder that can then be installed without network access.
* Help is the outlier, as it displays help UI and nothing else.

## Bundle phases

Bundle actions (except Help) go through three phases: Detect, Plan, and Apply.
* During the Detect phase, the Burn engine scans the user's machine and reports the current status of the bundle and all of its chained packages.
* During the Plan phase, the Burn engine takes a high-level directive (such as "install", "repair", or "uninstall") and determines what operations need to be done for each package.
* During the Apply phase, the operations from the Plan phase are executed. The Apply phase has two sub-phases Cache and Execute.
  * During Cache, packages are downloaded, copied, and/or extracted to a secure package store.
  * During Execute, the packages are installed, repaired, or uninstalled as per the plan.

## Bundle UI modes

Finally, bundles must handle the three UI modes: Full, Passive and Quiet.
* In Full UI mode, the user expects to be presented with the interactive user interface. Historically, this UI has been a wizard-like experience.
* In Passive UI mode, the user expects to be provided enough UI to know that the process is underway but with no other interaction. Commonly this is a simple UI that starts immediately, presents a progress bar then completes without any additional prompts.
* The Quiet UI mode is like Passive in that it starts immediately and does not prompt the user at all, but also shows no UI at all.

The six operations, three phases and three UI modes create many different permutations Bootstrapper Applications must handle. There are almost 100 events Burn can fire to transmit all the information about the active operation, phase and UI mode. Again, FGBA simplifies your UI development by capturing all Burn events to track the bundle state in an easy to use API and provide default implementations for the events that require responses. The result is your Bundle UI only overrides the callbacks it wants to customize.

Let's look at how to instantiate your Bundle UI next.
