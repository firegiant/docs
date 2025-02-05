---
title: TransformFlags Enumeration
---
Summary information values for the CharCount property in transforms.
## Members
| Member | Description |
| ------ | ----------- |
| ErrorAddExistingRow | Ignore error when adding a row that exists. |
| ErrorAddExistingTable | Ignore error when adding a table that exists. |
| ErrorChangeCodePage | Ignore error when transform and database code pages do not match, and their code pages are neutral. |
| ErrorDeleteMissingRow | Ignore error when deleting a row that does not exist. |
| ErrorDeleteMissingTable | Ignore error when deleting a table that does not exist. |
| ErrorUpdateMissingRow | Ignore error when updating a row that does not exist. |
| InstanceTransformDefault | Default value for instance transforms. |
| LanguageTransformDefault | Default value for language transforms. |
| PatchTransformDefault | Default value for patch transforms. |
| ProductVersionMask | Masks all version checks on ProductVersion. |
| ProductVersionOperatorMask | Masks all operations on ProductVersion. |
| ValidateLanguage | Default language must match base database. |
| ValidateMajorVersion | Check major version only. |
| ValidateMinorVersion | Check major and minor versions only. |
| ValidateNewEqualBaseVersion | Installed version eq base version. |
| ValidateNewGreaterBaseVersion | Installed version gt base version. |
| ValidateNewGreaterEqualBaseVersion | Installed version gte base version. |
| ValidateNewLessBaseVersion | Installed version lt base version. |
| ValidateNewLessEqualBaseVersion | Installed version lte base version. |
| ValidateProduct | Product must match base database. |
| ValidateUpdateVersion | Check major, minor, and update versions. |
| ValidateUpgradeCode | UpgradeCode must match base database. |
`WixToolset.Data.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
