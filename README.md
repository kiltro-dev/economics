# LatAm FX Dashboard — ¿Rally de corto plazo? 2022-2026

Dashboard interactivo que responde a la pregunta del artículo de CNN Chile (25 ago 2026): *¿Chile queda fuera del rally cambiario y es la única moneda que se deprecia vs USD?*

**Respuesta:** Sí, pero es una foto de 8 meses (YTD +1,4% para CLP). En 55 meses (Ene 2022 - Jul 2026) todas las monedas muestran reversiones bruscas.

## Datos
- **Fuente:** BCRPData — Banco Central de Reserva del Perú (FMI/Reuters)
  - `PN01227XM` CLP, `PN01229XM` COP, `PN01230XM` MXN, `PN01225XM` BRL (UM por US$)
  - `PN01210PM` PEN (S/ por US$ bancario promedio)
- **MSCI EM Currency Index:** 1.919,39 pts máx 21 ago 2026, YTD +0,76% (19 jun), 1a +1,95%, 3a +3,27% ann.
- **CNN Chile / XTB / Portafolio / Bloomberg:** CLP -1,4% YTD, COP +21%, BRL +6,3%, MXN +6,1%, PEN +0,6% al 25 ago (corte diario, difiere levemente del promedio mensual BCRP).

## Qué incluye
- Gráfico D3.js índice base 100 (Ene 2022) + valores absolutos + escala log, con leyenda filtrable, tooltip y brush para zoom
- Tabla de variaciones por ventanas (Ene22→Jul26, 12m, YTD, etc.)
- Tabla mensual 55 filas con buscador, orden y export CSV
- KPIs y extremos (min/max)

## Uso local
```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Deploy GitHub Pages
Push a `main` → GitHub Pages (Actions o branch `gh-pages`)

## Stack
- D3.js v7 (CDN)
- Vanilla CSS/JS, responsive, sin build step

> No es recomendación de inversión. Última actualización: Jul 2026 (BCRP 05-08-2026).

— kiltro-dev • Aug 2026

---
## Nuevo: Crecimiento 2021-2026
- `crecimiento.html` — Dashboard PIB real 2021-2026 para Chile, Colombia, Brasil, México, Perú, Argentina y promedio LatAm
- Datos: WB GEP Jun-2025, BCCh Anuario 2024 (Chile 11.7% 2021 y 2.6% 2024), CEPAL Balance 2025, IMF WEO Abr-2026
- Gráfico crecimiento anual + índice acumulado 2020=100 + barras 2024 vs 2025f
