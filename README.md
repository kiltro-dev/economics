# LatAm Growth Monitor — 2000·2026

Monitor profesional del **crecimiento económico en Latinoamérica** — PIB real, var. anual %. Estilo económico oscuro (FT/Bloomberg), interactivo con D3.js.

**Live:** `https://kiltro-dev.github.io/economics/`

## Qué muestra
- **7 economías:** Chile, Colombia, Brasil, México, Perú, Argentina + promedio **LatAm** (ZJ)
- **Periodo completo 2000-2026:** 2000-2025 observado (Banco Mundial WDI 2026-07-13) + 2026 proyección (WB GEP Jun-2025). Selector de periodo: 2000-2026, 2010-2026, última década (2016-2026), 5A (2021-2026), década perdida 2015-2024, + slider custom y brush para zoom fino.
- **3 vistas:** Var. anual % / Índice acumulado (base 2000=100 o inicio=100) / Promedio del periodo
- **Interactividad:** leyenda filtrable, tooltip, brush, tabla filtrada por periodo, export CSV

## KPIs dinámicos
Promedio, total acumulado, CAGR, min/max para el periodo seleccionado. Insight contextual: trampa de bajo crecimiento (CEPAL: 4 años ~2.3%), década perdida 2015-2024 (+1.0% promedio LAC), rebote 2021 (+7.2% LAC).

## Datos
- **Principal 2000-2025:** Banco Mundial WDI `NY.GDP.MKTP.KD.ZG` (precios de mercado, año calendario). Última actualización 2026-07-13.
- **2026 forecast:** Banco Mundial GEP Jun-2025 (Chile 2.2, Colombia 2.7, Brasil 2.2, México 1.1, Perú 2.5, Argentina 4.5, LAC 2.4) — línea punteada.
- **Contraste:** BCCh Anuario 2024 (Chile 2021 11.7% y 2024 2.6%), CEPAL Balance 2025, IMF WEO Abr-2026.
- **Metodología:** CAGR = (Índice_fin/Índice_ini)^(1/años)-1. Acumulado = Π(1+g).

## Stack
D3.js v7, vanilla JS/CSS, sin build. Fuentes: Fraunces (títulos), IBM Plex Mono (números), Inter (cuerpo).

## Uso local
```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Historia
Este repo antes alojó el FX Dashboard 2022-2026 (tipo de cambio). Ahora es solo el Growth Monitor. FX archivado fuera de main.

— kiltro-dev • Ago 2026
