---
title: WiX Toolset v3 Tutorial
description: WiX v3 Tutorial (deprecated)
sidebar:
  order: 0
---

:::caution[Going out of service]
All WiX v3 versions will be out of community service on February 6th, 2025.
After that date, there will be no additional fixes, even for security issues for consumers of WiX v3.

Note: [WiX Developer Direct customers](https://www.firegiant.com/wix-developer-direct/) do receive bug and security fixes
in WiX v3, as per their contract.
:::

The [WiX Toolset](https://www.firegiant.com/wixtoolset/) is a set of tools that build Windows installation packages from XML source code. The toolset provides both a command line environment that developers may either integrate into their oldstyle Makefile build processes or use the newer MSBuild technology from inside integrated development environments like Microsoft Visual Studio or SharpDevelop to build their MSI and MSM setup packages.

WiX is an open source project, originally developed by Microsoft and maintained by Rob Mensching. This tutorial covers the last stable version of WiX v3, 3.14.

The toolset is written in C# and requires the .NET Framework to run. However, this only applies to the toolset itself. The installation packages you create with the toolset do not require any extra framework or software to be installed on the target computer. Similarly, there might be a few additional utilities required for some special applications (merge modules, patches) but only on your build computer, the client will only need the finished and self-contained installer package, nothing else.

There is a friendly community of WiX developers and users all over the Internet. [A list of resources is available on the WiX web site.](/wix/gethelp/)


# Introduction
Finishing the development of an application is still far from ending it. During the recent years, users have learned to expect a full-fledged, complete setup solution bundled with your product---and as the setup is the very first part of the application the end user becomes acquainted with, the importance of its integrity and reliability cannot be overestimated.

Traditional setup tools used a programmatic, script-based approach to describe the various steps involved in the deployment of the application to be installed on the target machine: files to be copied, registry settings to be created, device drivers and services to be started. The technology behind Windows Installer, while it maintains a comparable look and feel for the end user, underwent important philosophical changes. The fundamental change was to move from the imperative description to a declarative one: rather than to describe the individual steps of installation, the declarative form specifies the state the target machine should be left in after various phases of installation and uninstallation. While the imperative description seems to be quite sufficient until some error occurs, the declarative one makes it possible to cope with unexpected conditions, differing target machine environments, aborted installations, shared resources. It is of paramount importance for setup developers to make sure that whatever happens during the process, the target machine should be left in a known, stable state, without introducing any detrimental side effects.

The developers of the widely used setup tools also embraced the new technology and started to offer new versions of their tools to create setup programs of this nature. However, as the experience of many developers shows, while these tools are perfectly capable of creating simpler installation packages, they often prove too limiting, inflexible when it comes to more complex requirements.

The toolset we are about to introduce, WiX, uses a different approach. Instead of a tool with a graphical interface that allows the developers to collect the files and other related tasks making up the installation process manually, it is much more like a programming language. Integrating perfectly with the usual process of creating applications, it uses a text file (based on the XML format) to describe all the elements of the installation process. The toolset has a compiler and a linker that will create the setup program just like our usual compiler creates our application from the source files. Therefore, WiX can be made part of any automated application build process very easily, be that based either on the classical technology of makefiles or the similar features of contemporary integrated development environments.

In addition to this integration, providing basically nothing more but developer comfort, WiX offers another level of integration, far more advantageous than the first one: the integration of the setup development process with that of the application. Traditionally, setup programs were only written when the main application had already been finished; often even by different developers. This approach requires a tedious and error prone process of collecting information about all the resources making up the application. While the files themselves are usually obvious, registry entries, services and most forms of inter-resource dependencies are often hard to reconstruct in a later stage: if solid development documentation is lacking, the setup developers have to collect all pieces of information from the original developers or try to extract it from the source code.

In an integrated application/setup development environment, the original developer should modify the WiX source files in sync with the application development. As soon as a new module has been started, a new registry entry, service or other dependency has been coded, the appropriate setup modification should be made in parallel. Using this approach, no important information will ever be lost and, as a bonus, the setup program will be practically finished together with the application itself.

As a consequence, WiX is not equally suited to all developers. The relatively steep learning curve (although our primary goal is to help overcome this difficulty with our tutorial) and the unavoidable exposure to the internal details and, sometimes, intricacies of the underlying Windows Installer technology suggest that less experienced developers or those who don't really need the unlimited and unparalleled performance WiX can offer might be better served by a simpler, GUI-based setup authoring tool, of which there are both commercial and freeware solutions available.

To summarize the features and advantages of the toolset:

* declarative approach
* unrestricted access to Windows Installer functionality
* source code instead of GUI-based assembly of information
* complete integration into application build processes
* possible integration with application development
* support for team development, both in-house and third-party
* free, open source

You might wonder if WiX is already mature enough for the installation of large, complex applications with a large number of files to be deployed. Well, Microsoft itself uses WiX with all its major software packages. Just as an example, the setup of Microsoft Office was developed entirely with WiX.

I'd like to express my thanks to Rob Mensching for creating the toolset in the first place, and to Neil Sleightholm, Vadym Stetsyak, Robert Pickering, Marc Borgers, John DeSoi, Markus Karg, Greg Glass, Stefan Kr&uuml;ger, Nobuo Kihara, Phil Wilson, Peter Tewkesbury, Nicholas Muguira, David Adams, Mike Green, Chesong Lee and Christophe Michel for the material contributed to the tutorial.

(Ed. note: FireGiant wants to thank G&aacute;bor DE&Aacute;K JAHN for creating and hosting the WiX Tutorial for so many years.)