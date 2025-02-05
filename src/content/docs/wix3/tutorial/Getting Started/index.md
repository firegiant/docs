---
title: Getting Started
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 0
---

As we have already mentioned in the introduction, the WiX toolset uses XML source files describing the components that make up the installation process of our application as well as additional data about shortcuts, registry or .ini file changes, services and similar. In addition to the files you want to copy to the disk of the user, the installation package can also carry helper files that take part in the installation but will not be actually installed (these can include dialogs, icons and bitmaps for the installation UI, license or readme files, or custom DLLs to carry out any programmatic task the Windows Installer doesn't support, including any kind of user registration or key checking logic you might want to implement).

All these will be described in the source files fed to the WiX compiler. The toolset consists of several parts and we will use two of them to compile our installation packages. Assuming we have prepared a `Sample.wxs` file, the command

    candle.exe Sample.wxs

will perform the first phase of the compilation, creating `Sample.wixobj`, a half-digested file (this one is still XML but its internal structure is irrelevant to us; think about it as an object file in usual compiler parlance). The second command

    light.exe Sample.wixobj

will turn this intermediate representation into our final package, a `Sample.msi` file. Much like a compiler and a linker. Actually, even more: the linker, unless we specifically tell it not to do so, also runs a verification step that checks the finished installer database for hundreds of possible issues and problems.

As is usual with compilers today, you are not limited to the command line any more. Integrated development environments like Microsoft Visual Studio or SharpDevelop also have support for WiX projects: either coming bundled with the IDE itself or as an addin. In the case of Visual Studio, the WiX package installs the VS support automatically. Using this approach, you can create a separate setup solution or even include the setup as a part project of a complete solution. In this case, you don't even have to leave your programming environment in order to build the final setup package.

But, although the analogy of a compiler and linker is very straightforward and might help us understand how WiX actually builds installation packages, you shouldn't consider the WiX source we will start to write in a minute anything like a script or programming language. We won't collect steps or operations required to install our application. The .msi file we want to distribute our application with is not a setup application but an installation database. The programming logic, the knowledge about how to install an application, how to modify registry keys, how to create shortcuts, users and network shares, how to manipulate web directories or services resides in Windows Installer. Our setup file only describes _what_ we expect Windows Installer to do and provides the files to be deployed (as well as interface elements used in the process).

This database approach means that our WiX source files are not built like regular programs. There is no notion of sequential execution in WiX, the first source line is not supposed to be executed prior to the second one. There will be no declarations that need to precede the references. Various elements might be described in different places and, wherever a link is required between them, one will refer to the other using unique identifiers we need to provide. If you need to think in terms of programming languages, consider WiX as a functional, descriptive language rather than an imperative, prescriptive one.

Also note that WiX is not an installation environment of its own. To put it simply, it is a comfortable, XML-style way to describe your installation requirements that gets translated into Windows Installer .msi databases by its compiler and linker. In this respect, WiX is a relatively thin wrapper around Windows Installer technology, and while it does provide extra features to help the setup developers, its abilities are dictated by the underlying technology and its limitations are not of its own but the limitations of Windows Installer itself.
