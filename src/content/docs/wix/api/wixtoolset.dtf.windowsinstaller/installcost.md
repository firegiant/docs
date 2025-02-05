---
title: InstallCost Struct
---
Represents a per-drive disk space cost for an installation.
## Properties
| Property | Description |
| ------ | ----------- |
| [Cost](#cost) | The installation cost on this drive, as a number of bytes. |
| [DriveName](#drivename) | The name of the drive this cost data applies to. |
| [TempCost](#tempcost) | The temporary disk space required on this drive, as a number of bytes. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## Cost Property {#cost}
The installation cost on this drive, as a number of bytes.
### Declaration
```cs
public System.Int64 Cost { get; set; }
```
## DriveName Property {#drivename}
The name of the drive this cost data applies to.
### Declaration
```cs
public string DriveName { get; set; }
```
## TempCost Property {#tempcost}
The temporary disk space required on this drive, as a number of bytes.
### Declaration
```cs
public System.Int64 TempCost { get; set; }
```
### Remarks
This temporary space requirement is space needed only for the duration of the installation, over the final footprint on disk.

