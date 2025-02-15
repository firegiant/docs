---
title: Replace placeholder component
sidebar:
  order: 3
---

As you might [recall from last sprint](/wix/tutorial/sprint1/spike-explore-examplecomponents/), the HeatWave template gave us a component to be packaged into the installer...but it was just a placeholder. So let's replace it with something real. Well, not really real, yet -- we'll be replacing the template placeholder with _our_ app placeholder. It's ours and that makes it special.

To further refresh your memory, this is what the component looks like:

```xml
<Component>
  <File Source="ExampleComponents.wxs" />
</Component>
```

Our goal is to change it so that instead of the WiX source file getting installed (because that makes no sense), what gets installed is the app that we created earlier in this sprint.

It probably won't surprise you that to install our app instead of the file named ExampleComponents.wxs, we just need to change the value of the `Source` attribute. But what value should we use?

You could always use a hard-coded absolute path:

```xml
<Component>
  <File Source="x:\path\to\App\bin\Debug\App.exe" />
</Component>
```

But your co-workers might not appreciate needing to have the very same paths for their clones of the Git repos your team uses. Also, there's no chance your hard-coded paths would work on your CI/CD build system hosted in the cloud.

Another approach is to use relative paths. The app and package projects are in the same Visual Studio solution and the same directory tree, so relative paths might work. C# .NET Framework projects build their .exe output to a directory like `bin\Debug\App.exe`. That path is relative to the C# project so from the package project, we could use a relative path like this:

```xml
<Component>
  <File Source="..\App\bin\Debug\App.exe" />
</Component>
```

But is the output path always relative like that? Turns out that it usually is, but not always. You might also have noticed that we're hard-coding the `Debug` part of the path. Is there a way to respect the solution configuration that we're building with? Helpfully, the WiX MSBuild targets anticipated this kind of problem and turns the `Configuration` MSBuild property into a WiX preprocessor variable with the same name. You can reference it using the same syntax MSBuild uses: `$(variable_name)` So the relative path with that variable looks like this:

```xml
<Component>
  <File Source="..\App\bin\$(Configuration)\App.exe" />
</Component>
```

That's not bad but can we do better? You bet your app we can. The WiX MSBuild targets, while not themselves sentient, reflect the thoughts of the WiX developers, including the thought that it should be simple to package the files from referenced projects. It does so by generating _bind paths_ for the output of every referenced project. Bind paths are paths that WiX searches for files being packaged. Because the bind path includes the directory, all we need to do is reference the file name itself:

```xml
<Component>
  <File Source="App.exe" />
</Component>
```

That's it. Perfection achieved.
