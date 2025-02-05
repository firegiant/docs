---
title: XML
description: WiX v3 tutorial (deprecated)
sidebar:
  order: 10
---

More and more programs use XML-based configuration files these days instead of the older .ini style. WiX contains prefabricated custom actions to modify such files during installation and uninstallation. Let's suppose that we install a Settings.xml file together with our application. Originally, the file only contains the outermost tags:

    <settings>
    </settings>

We want the installer to add new nodes, one of those with attribute values:

    <settings>
      <add key="a_key" value="a_value">key_item
        <inside>inside_item</inside>
      </add>
    </settings>

To achieve this, we can use the `XmlFile` tag. Apart from its usual attributes like `Id` and `File,` its `Action, Name` and `Value` attributes will determine what to do in the XML file while the `ElementPath` specifies where to do it. This last attribute uses the standard [XPath specification language](http://www.w3.org/TR/xpath) to describe the XML node the actual operation will be applied to.

* Action=createElement
    a new element named `Name` will be created as a child of the one specified in `ElementPath`
* Action=setValue
    If `Name` is omitted, the inner text of the element specified in `ElementPath` will be set to `Value`.
    If both `Name` and `Value` are specified, the node specified in `ElementPath` will receive an attribute named `Name` with a value of `Value`.
* Action=deleteValue
    If both `Name` and `Value` are omitted, the inner text of the element specified in `ElementPath` will be deleted.
    If `Name` is specified, the attribute named `Name` will be deleted from the node specified in ElementPath.

So, to carry out the modifications we planned, we need the following entries (note that we have to provide our own sequencing, this is important to ensure that the changes will be removed in the proper reverse order upon uninstallation):

    <Component Id='Settings' Guid='YOURGUID-574D-4A9A-A266-5B5EC2C022A4'>
      <File Id='XmlSettings' Name='settings.xml' DiskId='1' Source='settings.xml' Vital='yes' />
      <util:XmlFile Id='XmlSettings1' File='[INSTALLDIR]settings.xml'
        Action='createElement' Name='add' ElementPath='//settings' Sequence='1' />
      <util:XmlFile Id='XmlSettings2' File='[INSTALLDIR]settings.xml'
        Action='setValue' Name='key' Value='a_key' ElementPath='//settings/add' Sequence='2' />
      <util:XmlFile Id='XmlSettings3' File='[INSTALLDIR]settings.xml'
        Action='setValue' Name='value' Value='a_value' ElementPath='//settings/add' Sequence='3' />
      <util:XmlFile Id='XmlSettings4' File='[INSTALLDIR]settings.xml'
        Action='setValue' Value='key_item' ElementPath='//settings/add' Sequence='4' />
      <util:XmlFile Id='XmlSettings5' File='[INSTALLDIR]settings.xml'
        Action='createElement' Name='inside' ElementPath='//settings/add' Sequence='5' />
      <util:XmlFile Id='XmlSettings6' File='[INSTALLDIR]settings.xml'
        Action='setValue' Value='inside_item' ElementPath='//settings/add/inside' Sequence='6' />
    </Component>

If there are several nodes of the same name in the XML file, we can use the usual XPath format of `'node[@attr=&quot;value&quot;]'` to specify which one we refer to. As `ElementPath` expects a formatted string, we have to escape the brackets with backslashes (`[\[]` and `[\]]`) to keep them from being evaluated as properties.

As this functionality resides in the standard utilities module, we have to link against that:

    light.exe -ext WixUtilExtension -out Sample.msi Sample.wixobj
