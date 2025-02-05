---
title: Add a project reference
sidebar:
  order: 2
---

We now have an app project that we want to compile and then include in our installer. To do that, we need to do at least two things (among others):

1. Make sure the app project is built before the package project, so the app itself is available when the package is built.
2. Provide some way for the package project to find the output of the app project.

The best way to accomplish these with WiX is to use a _project reference_ -- specifically, a reference from the package project to the app project. With a project reference, Visual Studio (and MSBuild in your CI build system) will build the projects in the right order: app first, then package.

Then the WiX MSBuild targets kick in and do something special to make it easy to pick up the output from the app project. We'll talk about that later this sprint.

To add a project reference in Visual Studio:

1. Right-click `Dependencies` under the `WixTutorialPackage` package in Solution Explorer.
2. Choose `Add Project Reference`.
3. Check the `App` project and choose `OK`.
