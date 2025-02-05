---
title: LockPermissionConstants Class
---
------------------------------------------------------------------------------------------------- Layout of an Access Mask (from https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2003/cc783530(v=ws.10)) ------------------------------------------------------------------------------------------------- |31|30|29|28|27|26|25|24|23|22|21|20|19|18|17|16|15|14|13|12|11|10|09|08|07|06|05|04|03|02|01|00| ------------------------------------------------------------------------------------------------- |GR|GW|GE|GA| Reserved |AS|StandardAccessRights| Object-Specific Access Rights | Key GR = Generic Read GW = Generic Write GE = Generic Execute GA = Generic All AS = Right to access SACL
## Fields
| Field | Description |
| ------ | ----------- |
| FilePermissions | File Access Rights (per WinNT.h) ------------------ FILE_READ_DATA ( 0x0001 ) FILE_WRITE_DATA ( 0x0002 ) FILE_APPEND_DATA ( 0x0004 ) FILE_READ_EA ( 0x0008 ) FILE_WRITE_EA ( 0x0010 ) FILE_EXECUTE ( 0x0020 ) via mask FILE_ALL_ACCESS ( 0x0040 ) FILE_READ_ATTRIBUTES ( 0x0080 ) FILE_WRITE_ATTRIBUTES ( 0x0100 ) STANDARD_RIGHTS_REQUIRED (0x000F0000L) FILE_ALL_ACCESS (STANDARD_RIGHTS_REQUIRED | SYNCHRONIZE | 0x1FF) |
| FolderPermissions | Object-Specific Access Rights ============================= Directory Access Rights (per WinNT.h) ----------------------- FILE_LIST_DIRECTORY ( 0x0001 ) FILE_ADD_FILE ( 0x0002 ) FILE_ADD_SUBDIRECTORY ( 0x0004 ) FILE_READ_EA ( 0x0008 ) FILE_WRITE_EA ( 0x0010 ) FILE_TRAVERSE ( 0x0020 ) FILE_DELETE_CHILD ( 0x0040 ) FILE_READ_ATTRIBUTES ( 0x0080 ) FILE_WRITE_ATTRIBUTES ( 0x0100 ) |
| GenericPermissions | Generic Access Rights (per WinNT.h) --------------------- GENERIC_ALL (0x10000000L) GENERIC_EXECUTE (0x20000000L) GENERIC_WRITE (0x40000000L) GENERIC_READ (0x80000000L) |
| RegistryPermissions | Registry Access Rights ---------------------- |
| StandardPermissions | Standard Access Rights (per WinNT.h) ---------------------- DELETE (0x00010000L) READ_CONTROL (0x00020000L) WRITE_DAC (0x00040000L) WRITE_OWNER (0x00080000L) SYNCHRONIZE (0x00100000L) |
`WixToolset.Data.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
