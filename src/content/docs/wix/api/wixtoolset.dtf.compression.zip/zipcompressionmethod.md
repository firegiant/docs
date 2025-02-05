---
title: ZipCompressionMethod Enumeration
---
Identifies the compression method or "algorithm" used for a single file within a zip archive.
## Members
| Member | Description |
| ------ | ----------- |
| BZip2 | The file is compressed using the BZIP2 algorithm. |
| Deflate | The file is Deflated; the most common and widely-compatible form of zip compression. |
| Deflate64 | The file is Deflated using the enhanced Deflate64 method. |
| Implode | The file is Imploded |
| Lzma | The file is compressed using the LZMA algorithm. |
| Ppmd | The file is compressed using the PPMd algorithm. |
| Reduce1 | The file is Reduced with compression factor 1 |
| Reduce2 | The file is Reduced with compression factor 2 |
| Reduce3 | The file is Reduced with compression factor 3 |
| Reduce4 | The file is Reduced with compression factor 4 |
| Shrink | The file is Shrunk |
| Store | The file is stored (no compression) |
### Remarks
Proprietary zip implementations may define additional compression methods outside of those included here.
`WixToolset.Dtf.Compression.Zip.dll` version `5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8`
