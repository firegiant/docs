---
title: ProductInstallation Class
---
Represents a unique instance of a product that is either advertised, installed or unknown.
## Methods
| Method | Description |
| ------ | ----------- |
| [CollectUserInfo()](#collectuserinfo_nop) | Obtains and stores the user information and product ID from an installation wizard. |
| [GetComponentState(component)](#getcomponentstate_component) | Gets the installed state for a product component. |
| [GetFeatureState(feature)](#getfeaturestate_feature) | Gets the installed state for a product feature. |
| [GetProducts(productCode, userSid, context)](#getproducts_productcode_usersid_context) | Enumerates product installations based on certain criteria. |
| [GetRelatedProducts(upgradeCode)](#getrelatedproducts_upgradecode) | Gets the set of all products with a specified upgrade code. This method lists the currently installed and advertised products that have the specified UpgradeCode property in their Property table. |
## Properties
| Property | Description |
| ------ | ----------- |
| [AdvertisedLanguage](#advertisedlanguage) | Product language. |
| [AdvertisedPackageCode](#advertisedpackagecode) | Identifier of the package that a product is installed from. |
| [AdvertisedPackageName](#advertisedpackagename) | Name of the installation package for the advertised product. |
| [AdvertisedPerMachine](#advertisedpermachine) | True if the product is advertised per-machine; false if it is per-user or not advertised. |
| [AdvertisedProductIcon](#advertisedproducticon) | Primary icon for the package. |
| [AdvertisedProductName](#advertisedproductname) | Human readable product name. |
| [AdvertisedTransforms](#advertisedtransforms) | Transforms. |
| [AdvertisedVersion](#advertisedversion) | Version of the advertised product. |
| [AllProducts](#allproducts) | Enumerates all product installations on the system. |
| [Features](#features) | Gets the set of published features for the product. |
| [HelpLink](#helplink) | The support link. |
| [HelpTelephone](#helptelephone) | The support telephone. |
| [InstallDate](#installdate) | Date and time the product was installed. |
| [InstallLocation](#installlocation) | The installation location. |
| [InstallSource](#installsource) | The installation source. |
| [IsAdvertised](#isadvertised) | Gets a value indicating whether this product is advertised on the current system. |
| [IsElevated](#iselevated) | Checks whether the product is installed with elevated privileges. An application is called a "managed application" if elevated (system) privileges are used to install the application. |
| [IsInstalled](#isinstalled) | Gets a value indicating whether this product is installed on the current system. |
| [Item](#item) | Gets information about an installation of a product. |
| [LocalPackage](#localpackage) | The local cached package. |
| [PrivilegedPatchingAuthorized](#privilegedpatchingauthorized) | True if the advertised product can be serviced by non-administrators without elevation. |
| [ProductCode](#productcode) | Gets the ProductCode (GUID) of the product. |
| [ProductId](#productid) | The product identifier. |
| [ProductName](#productname) | The installed product name. |
| [ProductVersion](#productversion) | The product version. |
| [Publisher](#publisher) | The publisher. |
| [RegCompany](#regcompany) | The company that is registered to use the product. |
| [RegOwner](#regowner) | The owner who is registered to use the product. |
| [SourceList](#sourcelist) | Gets the source list of this product installation. |
| [UrlInfoAbout](#urlinfoabout) | URL about information. |
| [UrlUpdateInfo](#urlupdateinfo) | The URL update information. |
`WixToolset.Dtf.WindowsInstaller.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## CollectUserInfo() Method {#collectuserinfo_nop}
Obtains and stores the user information and product ID from an installation wizard.
### Declaration
```cs
public void CollectUserInfo()
```
### Remarks
This method is typically called by an application during the first run of the application. The application first gets the «see P:WixToolset.Dtf.WindowsInstaller.ProductInstallation.ProductId» or «see P:WixToolset.Dtf.WindowsInstaller.ProductInstallation.RegOwner» . If those properties are missing, the application calls CollectUserInfo. CollectUserInfo opens the product's installation package and invokes a wizard sequence that collects user information. Upon completion of the sequence, user information is registered. Since this API requires an authored user interface, the user interface level should be set to full by calling «see M:WixToolset.Dtf.WindowsInstaller.Installer.SetInternalUI(WixToolset.Dtf.WindowsInstaller.InstallUIOptions)» as «see F:WixToolset.Dtf.WindowsInstaller.InstallUIOptions.Full» .
The CollectUserInfo method invokes a FirstRun dialog from the product installation database.
Win32 MSI API: [MsiCollectUserInfo](http://msdn.microsoft.com/library/en-us/msi/setup/msicollectuserinfo.asp)

## GetComponentState(component) Method {#getcomponentstate_component}
Gets the installed state for a product component.
### Declaration
```cs
public InstallState GetComponentState(
  string component
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| component | string | The component being queried; GUID of the component as found in the ComponentId column of the Component table. |
### Return value
`InstallState` Installation state of the component for the product instance: either «see F:WixToolset.Dtf.WindowsInstaller.InstallState.Local» or «see F:WixToolset.Dtf.WindowsInstaller.InstallState.Source» .
### Remarks
Win32 MSI API: [MsiQueryComponentState](http://msdn.microsoft.com/library/en-us/msi/setup/msiquerycomponnetstate.asp)

## GetFeatureState(feature) Method {#getfeaturestate_feature}
Gets the installed state for a product feature.
### Declaration
```cs
public InstallState GetFeatureState(
  string feature
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| feature | string | The feature being queried; identifier from the Feature table |
### Return value
`InstallState` Installation state of the feature for the product instance: either «see F:WixToolset.Dtf.WindowsInstaller.InstallState.Local» , «see F:WixToolset.Dtf.WindowsInstaller.InstallState.Source» , or «see F:WixToolset.Dtf.WindowsInstaller.InstallState.Advertised» .
### Remarks
Win32 MSI APIs: [MsiQueryFeatureState](http://msdn.microsoft.com/library/en-us/msi/setup/msiqueryfeaturestate.asp) , [MsiQueryFeatureStateEx](http://msdn.microsoft.com/library/en-us/msi/setup/msiqueryfeaturestateex.asp)

## GetProducts(productCode, userSid, context) Method {#getproducts_productcode_usersid_context}
Enumerates product installations based on certain criteria.
### Declaration
```cs
public static IEnumerable<WixToolset.Dtf.WindowsInstaller.ProductInstallation> GetProducts(
  string productCode,
  string userSid,
  UserContexts context
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| productCode | string | ProductCode (GUID) of the product instances to be enumerated. Only instances of products within the scope of the context specified by the and parameters will be enumerated. This parameter may be set to null to enumerate all products in the specified context. |
| userSid | string | Specifies a security identifier (SID) that restricts the context of enumeration. A SID value other than s-1-1-0 is considered a user SID and restricts enumeration to the current user or any user in the system. The special SID string s-1-1-0 (Everyone) specifies enumeration across all users in the system. This parameter can be set to null to restrict the enumeration scope to the current user. When is set to the machine context only, must be null. |
| context | UserContexts | Specifies the user context. |
### Return value
`IEnumerable<WixToolset.Dtf.WindowsInstaller.ProductInstallation>` An enumeration of product objects for enumerated product instances.
### Remarks
Win32 MSI API: [MsiEnumProductsEx](http://msdn.microsoft.com/library/en-us/msi/setup/msienumproductsex.asp)

## GetRelatedProducts(upgradeCode) Method {#getrelatedproducts_upgradecode}
Gets the set of all products with a specified upgrade code. This method lists the currently installed and advertised products that have the specified UpgradeCode property in their Property table.
### Declaration
```cs
public static IEnumerable<WixToolset.Dtf.WindowsInstaller.ProductInstallation> GetRelatedProducts(
  string upgradeCode
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| upgradeCode | string | Upgrade code of related products |
### Return value
`IEnumerable<WixToolset.Dtf.WindowsInstaller.ProductInstallation>` Enumeration of product codes
### Remarks
Win32 MSI API: [MsiEnumRelatedProducts](http://msdn.microsoft.com/library/en-us/msi/setup/msienumrelatedproducts.asp)

## AdvertisedLanguage Property {#advertisedlanguage}
Product language.
### Declaration
```cs
public string AdvertisedLanguage { get; set; }
```
## AdvertisedPackageCode Property {#advertisedpackagecode}
Identifier of the package that a product is installed from.
### Declaration
```cs
public string AdvertisedPackageCode { get; set; }
```
## AdvertisedPackageName Property {#advertisedpackagename}
Name of the installation package for the advertised product.
### Declaration
```cs
public string AdvertisedPackageName { get; set; }
```
## AdvertisedPerMachine Property {#advertisedpermachine}
True if the product is advertised per-machine; false if it is per-user or not advertised.
### Declaration
```cs
public bool AdvertisedPerMachine { get; set; }
```
## AdvertisedProductIcon Property {#advertisedproducticon}
Primary icon for the package.
### Declaration
```cs
public string AdvertisedProductIcon { get; set; }
```
## AdvertisedProductName Property {#advertisedproductname}
Human readable product name.
### Declaration
```cs
public string AdvertisedProductName { get; set; }
```
## AdvertisedTransforms Property {#advertisedtransforms}
Transforms.
### Declaration
```cs
public string AdvertisedTransforms { get; set; }
```
## AdvertisedVersion Property {#advertisedversion}
Version of the advertised product.
### Declaration
```cs
public System.Version AdvertisedVersion { get; set; }
```
## AllProducts Property {#allproducts}
Enumerates all product installations on the system.
### Declaration
```cs
public static IEnumerable<WixToolset.Dtf.WindowsInstaller.ProductInstallation> AllProducts { get; set; }
```
### Remarks
Win32 MSI API: [MsiEnumProducts](http://msdn.microsoft.com/library/en-us/msi/setup/msienumproducts.asp) ,

## Features Property {#features}
Gets the set of published features for the product.
### Declaration
```cs
public IEnumerable<WixToolset.Dtf.WindowsInstaller.FeatureInstallation> Features { get; set; }
```
### Remarks
Because features are not ordered, any new feature has an arbitrary index, meaning this property can return features in any order.
Win32 MSI API: [MsiEnumFeatures](http://msdn.microsoft.com/library/en-us/msi/setup/msienumfeatures.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | The installer configuration data is corrupt |
## HelpLink Property {#helplink}
The support link.
### Declaration
```cs
public string HelpLink { get; set; }
```
## HelpTelephone Property {#helptelephone}
The support telephone.
### Declaration
```cs
public string HelpTelephone { get; set; }
```
## InstallDate Property {#installdate}
Date and time the product was installed.
### Declaration
```cs
public System.DateTime InstallDate { get; set; }
```
## InstallLocation Property {#installlocation}
The installation location.
### Declaration
```cs
public string InstallLocation { get; set; }
```
## InstallSource Property {#installsource}
The installation source.
### Declaration
```cs
public string InstallSource { get; set; }
```
## IsAdvertised Property {#isadvertised}
Gets a value indicating whether this product is advertised on the current system.
### Declaration
```cs
public bool IsAdvertised { get; set; }
```
## IsElevated Property {#iselevated}
Checks whether the product is installed with elevated privileges. An application is called a "managed application" if elevated (system) privileges are used to install the application.
### Declaration
```cs
public bool IsElevated { get; set; }
```
### Remarks
Note that this property does not take into account policies such as AlwaysInstallElevated, but verifies that the local system owns the product's registry data.

## IsInstalled Property {#isinstalled}
Gets a value indicating whether this product is installed on the current system.
### Declaration
```cs
public bool IsInstalled { get; set; }
```
## Item Property {#item}
Gets information about an installation of a product.
### Declaration
```cs
public string Item[
  string propertyName
] { get; set; }
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| propertyName | string | Name of the property being retrieved. |
### Remarks
Win32 MSI APIs: [MsiGetProductInfo](http://msdn.microsoft.com/library/en-us/msi/setup/msigetproductinfo.asp) , [MsiGetProductInfoEx](http://msdn.microsoft.com/library/en-us/msi/setup/msigetproductinfoex.asp)

### Exceptions
| Exception | Description |
| --------- | ----------- |
| T:System.ArgumentOutOfRangeException | An unknown product or property was requested |
| T:WixToolset.Dtf.WindowsInstaller.InstallerException | The installer configuration data is corrupt |
## LocalPackage Property {#localpackage}
The local cached package.
### Declaration
```cs
public string LocalPackage { get; set; }
```
## PrivilegedPatchingAuthorized Property {#privilegedpatchingauthorized}
True if the advertised product can be serviced by non-administrators without elevation.
### Declaration
```cs
public bool PrivilegedPatchingAuthorized { get; set; }
```
## ProductCode Property {#productcode}
Gets the ProductCode (GUID) of the product.
### Declaration
```cs
public string ProductCode { get; set; }
```
## ProductId Property {#productid}
The product identifier.
### Declaration
```cs
public string ProductId { get; set; }
```
### Remarks
For more information, see [ProductID](http://msdn.microsoft.com/library/en-us/msi/setup/productid.asp)

## ProductName Property {#productname}
The installed product name.
### Declaration
```cs
public string ProductName { get; set; }
```
## ProductVersion Property {#productversion}
The product version.
### Declaration
```cs
public System.Version ProductVersion { get; set; }
```
## Publisher Property {#publisher}
The publisher.
### Declaration
```cs
public string Publisher { get; set; }
```
## RegCompany Property {#regcompany}
The company that is registered to use the product.
### Declaration
```cs
public string RegCompany { get; set; }
```
## RegOwner Property {#regowner}
The owner who is registered to use the product.
### Declaration
```cs
public string RegOwner { get; set; }
```
## SourceList Property {#sourcelist}
Gets the source list of this product installation.
### Declaration
```cs
public SourceList SourceList { get; set; }
```
## UrlInfoAbout Property {#urlinfoabout}
URL about information.
### Declaration
```cs
public System.Uri UrlInfoAbout { get; set; }
```
## UrlUpdateInfo Property {#urlupdateinfo}
The URL update information.
### Declaration
```cs
public System.Uri UrlUpdateInfo { get; set; }
```
