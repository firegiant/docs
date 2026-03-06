---
title: Configurable scope bundles
sidebar:
  order: 7
---

:::tip
Configurable scope bundles are available in WiX v7 and later.
:::

Burn supports ["dual-purpose" packages](https://learn.microsoft.com/en-us/windows/win32/msi/single-package-authoring) that can be installed either per-user or per-machine. Bundles that contain a dual-purpose package are considered configurable-scope bundles. When such bundles are installed, their bootstrapper application tells Burn how to install the dual-purpose packages:

- Default: Install dual-purpose packages based on their authoring. `Package/@Scope="perUserOrMachine` packages are installed per-user by default. `Package/@Scope="perMachineOrUser` packages are installed per-machine by default.
- PerUser: Dual-purpose packages are installed per-user.
- PerMachine: Dual-purpose packages are installed per-machine.

:::tip
Single-purpose per-user or per-machine packages do not change their scope based on the BA's choice. They're fixed in scope at build time.
:::


## Supporting configurable-scope bundles with custom bootstrapper applications

Custom bootstrapper applications can offer UI or business logic to determine the scope a bundle will be installed with. Once the scope decision has been made, the BA provides it to Burn during planning. To do so, pass the scope argument to the `Plan` function. 

In a managed-code BA, pass one of `BundleScope.Default`, `BundleScope.PerUser`, or `BundleScope.PerMachine` to `Plan`.

In a native-code BA, pass one of `BOOTSTRAPPER_SCOPE_DEFAULT`, `BOOTSTRAPPER_SCOPE_PER_USER`, or `BOOTSTRAPPER_SCOPE_PER_MACHINE` to `Plan`.


## Supporting configurable-scope bundles with WixStandardBootstrapperApplication 

WixStdBA supports configurable-scope bundles and all the stock WixStdBA themes include scope-selection radio buttons on the Options page. WixStdBA relies on the bundle variable `WixStdBAScope` to be set either to `PerUser` for per-user scope or `PerMachine` for per-machine scope. The stock WixStdBA themes accomplish this with radio buttons like this:

```xml
<RadioButtons Name="WixStdBAScope">
  <RadioButton X="11" Y="180" Height="20" Width="-11" Value="PerUser" EnableCondition="WixBundleAuthoredScope = 2 OR WixBundleAuthoredScope = 3" HideWhenDisabled="yes" FontId="3">#(loc.OptionsPerUserScopeText)</RadioButton>
  <RadioButton X="11" Y="200" Height="20" Width="-11" Value="PerMachine" EnableCondition="WixBundleAuthoredScope = 2 OR WixBundleAuthoredScope = 3" HideWhenDisabled="yes" FontId="3">#(loc.OptionsPerMachineScopeText)</RadioButton>
</RadioButtons>
```

The `EnableCondition="WixBundleAuthoredScope = 2 OR WixBundleAuthoredScope = 3"` attribute value enables the scope-selection radio buttons only when a configurable-scope bundle is being executed.

You can have an entirely custom theme using any UI you prefer: Just have it set `WixStdBAScope` to either `PerUser` for per-user scope or `PerMachine` for per-machine scope. You can also set `WixStdBAScope` to a static value in your `Bundle` authoring if you want to force a particular scope for any dual-purpose packages.


## Configurable-scope bundle variables

Burn adds some variables that you can use in WixStdBA custom themes or in your own BAs to detect that a bundle has configurable scope.

- WixBundleAuthoredScope: Reports the bundle's scope at build time:
  - 1: Per-machine
  - 2: Per-machine or per-user
  - 3: Per-user or per-machine
  - 4: Per-user
- WixBundleDetectedScope: Reports the scope of the bundle when it was originally installed:
  - 1: Per-machine
  - 2: Per-user
- WixBundlePlannedScope: Reports the scope of the bundle when the BA began the planning phase:
  - 1: Per-machine
  - 2: Per-user


## Configurable-scope bundles as `BundlePackage`s

Bundles can include configurable-scope bundles in their chains. When the consuming bundle is built, XXX
