---
title: BundleUIWindowContext Class
pagefind: false
---
Context returned when the BundleUI window is created.
## Properties
| Property | Description |
| ------ | ----------- |
| [SynchronizationContext](#synchronizationcontext) | An optional synchronization context (a new DispatcherSynchronizationContext() for WPF or
             WindowsFormsSynchronizationContext.Current after a WinForms form is created) can be used
             and all IBundleUI methods will be called from the UI thread. This makes updating the UI
             trivial but care must be taken to not do to much work during the callbacks as UI thread
             is blocked.
            
             Alternatively, using null means IBundleUI methods will be called from a background thread.
             In this case, care must be taken to update the UI from the UI thread. |
| [WindowHandle](#windowhandle) | A window handle is required even when no UI is displayed to ensure all Windows messages are
            processed during then bundle process. |

`FireGiant.BundleApplicationFramework v6.0.1`
## SynchronizationContext Property {#synchronizationcontext}
An optional synchronization context (a new DispatcherSynchronizationContext() for WPF or
             WindowsFormsSynchronizationContext.Current after a WinForms form is created) can be used
             and all IBundleUI methods will be called from the UI thread. This makes updating the UI
             trivial but care must be taken to not do to much work during the callbacks as UI thread
             is blocked.
            
             Alternatively, using null means IBundleUI methods will be called from a background thread.
             In this case, care must be taken to update the UI from the UI thread.
### Declaration
```cs
public System.Threading.SynchronizationContext SynchronizationContext { get; set; } 
```
## WindowHandle Property {#windowhandle}
A window handle is required even when no UI is displayed to ensure all Windows messages are
            processed during then bundle process.
### Declaration
```cs
public object WindowHandle { get; set; } 
```
