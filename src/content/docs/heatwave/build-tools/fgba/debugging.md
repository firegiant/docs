---
title: Debugging a Bundle UI
sidebar:
  order: 3
---

Bundle UIs are challenging to debug. They are an executable carried as a payload in a bundle that is extracted then launched from Burn. That means every change to your Bundle UI requires rebuilding the Bundle UI .csproj then your bundle .wixproj. Additionally, the process you need to debug is not the produced bundle .exe but a process started by that process. Fortunately, there is a mechanism to make the Bundle UI process pause at startup and display a message box so you can attach a debugger.

## One-time debug configuration

1. Set a **system** environment variable named `WixDebugBootstrapperApplication` to the file name of the Bundle UI executable.

   For example, if your Bundle UI is named `mybundleui.csproj` then the output is probably `mybundleui.exe` (unless you customize the .csproj). Set a system environment variable `WixDebugBootstrapperApplication` to `mybundleui.exe`.

2. Restart Visual Studio to pick up the new environment variable.


## Debugging

1. Make your Bundle UI changes
2. Build the Bundle UI .csproj with those changes
3. Build the bundle .wixproj
4. Start the output bundle .exe
5. A message box will appear with the process id for the Bundle UI .exe
6. Attach a debugger to the Bundle UI process
7. Set a breakpoint in the Bundle UI code to debug
8. Continue in the debugger to hit the break point


