---
title: SummaryInfoRowCollection Class
---
Indexed container class for summary information rows.
## Methods
| Method | Description |
| ------ | ----------- |
| [GetKeyForItem(row)](#getkeyforitem_row) | Gets the summary property ID for the _row_ . |
`WixToolset.Data.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
## GetKeyForItem(row) Method {#getkeyforitem_row}
Gets the summary property ID for the _row_ .
### Declaration
```cs
protected int GetKeyForItem(
  WixToolset.Data.WindowsInstaller.Row row
)
```
### Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| row | WixToolset.Data.WindowsInstaller.Row | The row to index. |
### Return value
`int` The summary property ID for the _row_ .
