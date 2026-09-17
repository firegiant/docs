---
title: Release notes
description: HeatWave release notes
sidebar:
  order: 6
---

This page provides a quick overview of the fixes, improvements, and new features included in each HeatWave
release. The notes are organized chronologically to show how HeatWave has evolved from one release to the
next.

## v1.0.8 - 2026-04-07

- Updated the WiX Dependencies Solution Explorer node icon.
- Fixed the Delete key in text editors when HeatWave is installed.

## v1.0.7 - 2026-04-04

- Added WiX v7 support.
- Updated C# and C++ custom-action templates to use the project name for the custom-action name.

## v1.0.6 - 2025-04-21

- Added WiX v6 support.
- Fixed PackageReference restore.
- Prevented project references from being rebuilt unnecessarily while building inside HeatWave.

## v1.0.5 - 2025-02-24

- Removed Visual Studio 2019 support and updated the Visual Studio 2022 packages to 17.12.
- Improved project-reference builds by passing `BuildingInsideHeatWave` through to referenced projects.
- Updated the project-upgrade command text.

## v1.0.4 - 2024-07-23

- Updated the WiX XSDs with the latest bug fixes.
- Enforced Visual Studio 2022 version 17.8 as the minimum version for installing HeatWave.

## v1.0.3 - 2024-03-28

- Added WiX v5 support.
- Updated templates to remove the `(WiX v4)` suffix.
- Changed NuGet Package Manager behavior so prerelease packages are not preferred by default.
- Updated Votive project conversion to turn `PreBuildEvent` and `PostBuildEvent` properties into targets.
- Fixed the default value of the `RunPostBuildEvent` MSBuild property.

## v1.0.2 - 2023-09-12

- Added MSIX as a recognized project output type.
- Added HeatWave Build Tools XSDs and a new Visual Studio 17.8 design-time target.
- Added project templates that select the WiX version dynamically.
- Added a HeatWave Build Tools package reference when harvesting.
- Renamed the `LibBindFiles` MSBuild property to `BindFiles`.
- Fixed the Paths property page browse buttons so selected paths are saved to the project file.
- Fixed the project designer message shown when deleting binder and preprocessor variables.

## v1.0.1 - 2023-04-06

- Added WiX v4 support.
- Initial HeatWave Community public release.
