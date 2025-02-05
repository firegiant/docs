---
title: Add or Remove Programs Entries
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 7
---

In the Programs and Features Control Panel tool, applications can have various entries like phone number and Internet contact information. To specify those, add any of the following properties to your source file:

    <Property Id='ARPCOMMENTS'>any comments</Property>
    <Property Id='ARPCONTACT'>contact info</Property>
    <Property Id='ARPHELPLINK'>URL for technical support</Property>
    <Property Id='ARPURLINFOABOUT'>URL for general info about the product</Property>
    <Property Id='ARPURLUPDATEINFO'>URL for product updates</Property>
    <Property Id='ARPHELPTELEPHONE'>URL for technical support</Property>
    <Property Id='ARPREADME'>path</Property>
    <Property Id='ARPSIZE'>app size in kilobytes</Property>

`ARPSIZE` seems to be superfluous at first sight. However, testing shows that Programs and Features reports a completely bogus value (over 4&nbsp;GB) for very small packages. In this case, providing the package size manually can help overcome this annoying but harmless nuisance.

To specify the icon used to the left of the application entry, use a reference to a `Icon/@Id` attribute (as we saw with the `Shortcut` tag, don't forget to append the same extension to the identifier, too).

    <Property Id='ARPPRODUCTICON'>appicon.ico</Property>
    ...
    <Icon Id="appicon.ico" SourceFile="Application.ico" />

A couple of other properties can control how the application behaves in Add or Remove Programs. To suppress the <em>Modify</em> button (or to force the installer into product removal instead of maintenance prior to Windows 2000), use:

    <Property Id='ARPNOMODIFY'>1</Property>

To disable the <em>Remove</em> button (or to completely remove the application from this list prior to Windows 2000), use:

    <Property Id='ARPNOREMOVE'>1</Property>

To remove the application altogether from this list on Windows 2000 or XP, you have to use this one instead:

    <Property Id='ARPSYSTEMCOMPONENT'>1</Property>

To suppress the <em>Repair</em> functionality, use:

    <Property Id='ARPNOREPAIR'>1</Property>
