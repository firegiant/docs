---
title: Building a BundleUI
sidebar:
  order: 2
---

The Bundle UI is the central object in the FireGiant Bundle Application Framework that you create to manage your UI. It inherits from [`FireGiant.BundleApplicationFramework.BundleUIBase`](/firegiant/api/firegiantbundleapplicationframework/bundleuibase/) and must implement three methods: CreateWindow, Run, and Stop.
* `CreateWindow()` is called to get the Bundle UI's window handle and appropriate threading context. A window handle is _always_ required because some Burn operations must pump Windows messages. The window may not be displayed to the user (and should be created hidden) but Burn requires it.
* `Run()` is called for the Bundle UI to enter its main event loop. When the Bundle UI exits this function, the bundle application exits.
* `Stop()` is called when the Bundle UI should exit. This method sends the quit message to the Bundle UI's main event loop.

## Minimal Bundle UI

Here is the minimal WPF-based Bundle UI. It stores a reference to the [`FireGiant.BundleApplicationFramework.IBundleApplication`](/firegiant/api/firegiantbundleapplicationframework/ibundleapplication/) to communicate with Burn and its WPF-based `MainWindow` starts out hidden.

```cs title=ExampleWpfBundleUI.cs
using FireGiant.BundleApplicationFramework;

public class ExampleWpfBundleUI : BundleUIBase
{
    private readonly IBundleApplication _bundleApplication;
    private MainWindow _window;

    public ExampleWpfBundleUI(IBundleApplication bundleApplication)
    {
      _bundleApplication = bundleApplication;
    }

  public override BundleUIWindowContext CreateWindow()
  {
    _window = new MainWindow();

    return new BundleUIWindowContext
    {
      WindowHandle = new WindowInteropHelper(_window).EnsureHandle(),
      SynchronizationContext = new DispatcherSynchronizationContext(),
    };
  }

  public override void Run()
  {
    Dispatcher.Run();
  }

  public override void Stop()
  {
    Dispatcher.CurrentDispatcher.InvokeShutdown();
  }
```

:::note[IBundleApplication]
Technically speaking, this minimal Bundle UI does not need the `IBundleApplication` reference. But as we'll see, every realistic Bundle UI will use the `_bundleApplication`. The `IBundleApplication` provides methods to read/write variables, log messages, cancel progress, and much more.
:::

With the most minimal Bundle UI created, let's look at the callbacks that are available to customize your Bundle UI's behavior.

## Bundle UI callbacks

Without overriding any other Bundle UI methods, your Bundle UI supports all bundle actions (Install, Modify, Repair, Uninstall, etc) and all phases (Detect, Plan, Apply) without displaying any UI or customization. Since the goal of implementing a Bundle UI is to customize the bundle experience and/or display some UI, let's explore the available customization callbacks.

### Bundle action handling

A Bundle UI has three callbacks for each bundle action: Initialize, Start and Start Progress.
* `OnInititialize{Action}()` is called before any action related operations have occured. It is not very common to use this callback because very little is known at this time. In Burn terms, the `Initialize` callbacks happen before the Detect phase is executed.
* `OnStart{Action}(bool fullUI)` is called after the bundle has completed the Detect phase so the current state of the machine is known. The Bundle UI should set any configuration at this time. It can display UI to interact with the user if `fullUI` is true. Otherwise, it should do any configuration silently then call `IBundleApplication.Go()`. In Burn terms, the `Start` callbacks happen after the Detect phase completes and `Go()` starts the Plan phase.
* `OnStartProgress{Action}(bool showUI)` is called after the bundle has planned its work and is ready to start. The BundleUI should display UI (such as a progress bar) if `showUI` is true. In Burn terms, the `StartProgress` callbacks, happen at the beginning of the Apply phase.

The following is a example of a Bundle UI that shows UI for install and uninstall.

```cs title=ExampleWpfBundleUI.cs
public class ExampleWpfBundleUI : BundleUIBase
{
  private readonly IBundleApplication _bundleApplication;
  private MainWindow _window;

  ...

  public override bool OnStartInstall(bool fullUI)
  {
    if (fullUI)
    {
      _window.Model = new ExampleInstallViewModel(_bundleApplication);
      _window.Show();

      // Let FGBA know that we're handling this callback because the
      // window and viewmodel will call _bundleApplication.Go() when
      // the user presses the "Install" button.
      return true;
    }

    // Let the default handle the non-UI case.
    return base.OnStartInstall(fullUI);
  }

  public override bool OnStartUninstall(bool fullUI)
  {
    if (fullUI)
    {
      _window.Model = new ExampleUninstallViewModel(_bundleApplication);
      _window.Show();

      // Let FGBA know that we're handling this callback because the
      // window and viewmodel will call _bundleApplication.Go() when
      // the user presses the "Ok" button to start the uninstall.
      return true;
    }

    // Let the default handle the non-UI case.
    return base.OnStartUninstall(fullUI);
  }

  public override void OnStartProgressInstall(bool showUI)
  {
    if (showUI)
    {
      _window.Model = new ExampleProgressViewModel(_bundleApplication, "Installing...");
      _window.Show();
    }
  }

  public override void OnStartProgressUninstall(bool showUI)
  {
    if (showUI)
    {
      _window.Model = new ExampleProgressViewModel(_bundleApplication, "Uninstalling...");
      _window.Show();
    }
  }

  // Other callbacks.

  // Initialization, these are rarely needed.
  // OnInitializeHelp()
  // OnInitializeLayout()
  // OnInitializeInstall()
  // OnInitializeModify()
  // OnInitializeRepair()
  // OnInitializeUninstall()

  // Show a custom UI for any of these actions.
  // OnStartHelp()
  // OnStartLayout()
  // OnStartInstall() - seen above
  // OnStartModify()
  // OnStartRepair()
  // OnStartUninstall() - seen above

  // Show progress page and handle progress updates.
  // OnStartProgressLayout
  // OnStartProgressInstall - seen above
  // OnStartProgressModify
  // OnStartProgressRepair
  // OnStartProgressUninstall - seen above
```

:::note[Callback code duplication]
You may find there is some duplication between callbacks for a particular action. Feel free to refactor as you see fit.
:::

### Progress callbacks

During the Apply phase of the bundle, there are several callbacks that can report what is happening in Burn. These callbacks can be useful to show progress and potentially prompt the user for input.

```cs title=ExampleWpfBundleUI.cs
    public virtual void OnProgress(BundleOverallProgress progress)
    {
      if (_window.Model is ExampleProgressViewModel vm)
      {
        vm.ProgressBarPercentage = progress.OverallPercentage;
      }

      base.OnProgress(progress);
    }

    public virtual void OnPackageProgress(BundlePackageProgress packageProgress)
    {
      if (_window.Model is ExampleProgressViewModel vm)
      {
        vm.CurrentPackageName = packageProgress.Package.DisplayName;
      }

      base.OnPackageProgress(packageProgress);
    }

    public virtual void OnPackageComplete(
      BundlePackage package,
      BundleProgressAction action,
      int errorCode)
    {
      if (_window.Model is ExampleProgressViewModel vm)
      {
        vm.CurrentPackageName = null;
      }

      base.OnPackageComplete(package, action, errorCode);
    }


  // Other useful callbacks.
  // OnMsiMessage
  // OnResolveSource
```

### Completion callbacks

The FireGiant Bundle Application Framework calls the Bundle UI when the bundle action has completed with success, error or was canceled by the user. You can use the following callbacks to show the appropriate UI.

```cs title=ExampleWpfBundleUI.cs
  public override void OnCompleteCancel(bool restartRequired, bool fullUI)
  {
    if (fullUI)
    {
      // ExampleDoneViewModel will need to call this.Stop() when the user clicks "Ok" or
      // closes the dialog.
      _window.Model = new ExampleDoneViewModel(this, _bundleApplication, restartRequired,
                                               "Canceled...");
      _window.Show();
    }
    else
    {
      base.OnCompleteCancel(restartRequired, fullUI);
    }
  }

  public override void OnCompleteFailure(bool restartRequired, int errorCode, bool fullUI)
  {
    if (fullUI)
    {
      // ExampleDoneViewModel will need to call this.Stop() when the user clicks "Ok" or
      // closes the dialog.
      _window.Model = new ExampleDoneViewModel(this, _bundleApplication, restartRequired,
                                               "Failed :(", errorCode);
      _window.Show();
    }
    else
    {
      base.OnCompleteCancel(restartRequired, fullUI);
    }
  }

  public override void OnCompleteSuccess(bool restartRequired, bool fullUI)
  {
    if (fullUI)
    {
      // ExampleDoneViewModel will need to call this.Stop() when the user clicks "Ok" or
      // closes the dialog.
      _window.Model = new ExampleDoneViewModel(this, _bundleApplication, restartRequired,
                                               "Success!!!");
      _window.Show();
    }
    else
    {
      base.OnCompleteCancel(restartRequired, fullUI);
    }
  }
```

:::tip[Show UI]
Notice in the example that the `_window` will be shown in `fullUI`. This is important becuase it is possible the bundle will complete without calling any of the OnStart callbacks. This usually happens when there is an error very early in the initialization of the bundle.
:::

Feel free to explore the other callbacks that a Bundle UI can override in the [`BundleUIBase`](/firegiant/api/firegiantbundleapplicationframework/bundleuibase/).
