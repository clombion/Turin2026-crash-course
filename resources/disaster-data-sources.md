# Disaster Data Sources

A reference list of open data sources relevant to disaster preparedness projects. Use this if you are stuck finding data for your angle.

---

## Disaster events

### GDACS (Global Disaster Alerting Coordination System)
- **What**: Real-time disaster alerts and recent events. Earthquakes, cyclones, floods, volcanoes, droughts, forest fires.
- **Coverage**: Global, current and recent events (best for last few years).
- **Format**: GeoJSON, RSS, KML
- **Access**: Free, no registration. Public API.
- **API example**: `https://www.gdacs.org/gdacsapi/api/events/geteventlist/SEARCH?eventlist=FL&fromDate=2023-01-01&toDate=2025-01-01&alertlevel=Green;Orange;Red`
- **Useful for**: Mapping recent disaster events by type and severity.

### FloodArchive (Dartmouth Flood Observatory)
- **What**: Historical record of large flood events worldwide, 1985-present. Derived from news, government, instrumental, and remote sensing sources.
- **Coverage**: Global. Includes coordinates, dates, severity, casualties, cause.
- **Format**: Shapefile, Excel (.xlsx)
- **Access**: Free download at `https://ckan.rimes.int/dataset/global-active-archive-of-large-flood-events` (hosted by RIMES). Last updated May 2024. An older CSV version (up to 2021) is also available in the crash course resources (`FloodArchive_clustered.csv`).
- **Useful for**: Historical flood patterns. Good for showing long-term exposure.

### EM-DAT (International Disaster Database)
- **What**: The reference disaster database used by UN agencies and researchers. All disaster types, natural and technological, from 1900 to present. ~26,000 events.
- **Coverage**: Global. Includes deaths, injured, affected, displaced, economic damage.
- **Format**: Excel/CSV download
- **Access**: Free but requires registration and approval at emdat.be. No public API.
- **Useful for**: Historical analysis, cross-country comparison, casualty and damage data.

### ReliefWeb / OCHA
- **What**: Humanitarian reports, situation updates, and maps from UN OCHA.
- **Coverage**: Global, ongoing crises.
- **Format**: Reports (PDF, HTML), some datasets via HDX.
- **Access**: Free, no registration. API available at `https://api.reliefweb.int/v1/`
- **Useful for**: Context, situation reports, and finding references to other datasets.

---

## Infrastructure

### healthsites.io
- **What**: Health facility locations worldwide (hospitals, clinics, pharmacies).
- **Coverage**: Global, crowdsourced + official data. Quality varies by country.
- **Format**: JSON/GeoJSON
- **Access**: Free API at `https://healthsites.io/api/v3/`
- **Useful for**: Mapping health infrastructure relative to disaster risk.

### OpenStreetMap / Overpass API
- **What**: Community-mapped infrastructure: roads, buildings, schools, shelters, health facilities, water points.
- **Coverage**: Global. Quality varies; strong in urban areas, weaker in remote regions.
- **Format**: JSON, GeoJSON
- **Access**: Free, no registration. Overpass API at `https://overpass-api.de/api/`
- **Useful for**: Any infrastructure mapping. Very flexible queries.

---

## Population

### Meta High Resolution Population Density Maps
- **What**: ML-derived population density at 30m resolution. Demographic breakdowns: overall, women, men, children (0-5), youth (15-24), elderly (60+).
- **Coverage**: Most countries. Data from 2020-2021. No longer updated.
- **Format**: GeoTIFF (raster)
- **Access**: Free download from HDX (Humanitarian Data Exchange). Search "high resolution population density" + your country on data.humdata.org.
- **Useful for**: Identifying where people actually live, especially in areas without recent census data.

### WorldPop
- **What**: Population density grids and demographic estimates.
- **Coverage**: Global, multiple years.
- **Format**: GeoTIFF, CSV
- **Access**: Free download at worldpop.org.
- **Useful for**: Similar to Meta maps. Multiple years available for trend analysis.

---

## Country context

### REST Countries
- **What**: Country-level data: population, area, region, languages, currencies.
- **Format**: JSON
- **Access**: Free API at `https://restcountries.com/v3.1/`
- **Useful for**: Quick country context. Good for normalising data (per capita calculations).

### HDX (Humanitarian Data Exchange)
- **What**: A data sharing platform for humanitarian data. Thousands of datasets per country: admin boundaries, displacement, food security, health, education.
- **Coverage**: Focus on crisis-affected countries, but broad.
- **Format**: Mixed (CSV, GeoJSON, Excel, shapefiles)
- **Access**: Free, no registration for most datasets. Browse at data.humdata.org.
- **Useful for**: Discovery. If you need humanitarian data for a specific country, start here.

---

## Climate

### CHIRPS (Climate Hazards Group InfraRed Precipitation with Station data)
- **What**: Rainfall estimates at ~5km resolution, 1981-present.
- **Coverage**: 50°S-50°N (tropics and subtropics).
- **Format**: GeoTIFF, NetCDF
- **Access**: Free download at chc.ucsb.edu/data/chirps
- **Useful for**: Rainfall patterns, drought analysis, flood risk context.

### Open-Meteo
- **What**: Weather forecast and historical weather API.
- **Coverage**: Global.
- **Format**: JSON
- **Access**: Free API, no registration for non-commercial use. `https://api.open-meteo.com/v1/`
- **Useful for**: Historical weather data for a specific location. Easy to query.
