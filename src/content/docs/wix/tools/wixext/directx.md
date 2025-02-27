---
title: DirectX custom action
---

The [GetCapabilities](../../schema/directx/getcapabilities/) element in the [Directx schema](../../schema/directx/) schedules a custom action that detects DirectX capabilities and sets properties based on the results.

| Property | Description |
| -------- | ----------- |
| WIX_DIRECTX_PIXELSHADERVERSION | Pixel shader version capability, expressed as major*100 + minor. For example, a shader model 3.0-compliant system would have a WIX_DIRECTX_PIXELSHADERVERSION value of 300. |
| WIX_DIRECTX_VERTEXSHADERVERSION | Vertex shader version capability, expressed as major*100 + minor. For example, a shader model 3.0-compliant system would have a WIX_DIRECTX_VERTEXSHADERVERSION value of 300. |
