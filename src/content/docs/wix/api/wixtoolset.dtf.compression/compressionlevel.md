---
title: CompressionLevel Enumeration
---
Specifies the compression level ranging from minimum compresion to maximum compression, or no compression at all.
## Members
| Member | Description |
| ------ | ----------- |
| Max | Maximum compression; slowest. |
| Min | Minimum compression; fastest. |
| None | Do not compress files, only store. |
| Normal | A compromize between speed and compression efficiency. |
### Remarks
Although only four values are enumerated, any integral value between «see F:WixToolset.Dtf.Compression.CompressionLevel.Min» and «see F:WixToolset.Dtf.Compression.CompressionLevel.Max» can also be used.
`WixToolset.Dtf.Compression.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
