// 1. Initialize the map centered on Senegal
const map = L.map('map', {
    zoomControl: false // Move zoom for a cleaner look
}).setView([14.4974, -14.4524], 7);

// 2. Beautiful Basemap Options
const darkMap = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO'
}).addTo(map);

const lightMap = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO'
});

const satelliteMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri'
});

// 3. Layer Containers
const floodLayer = L.layerGroup().addTo(map);
const allHealthLayer = L.layerGroup();
const atRiskLayer = L.layerGroup().addTo(map);

// 4. Custom Styling & Logic for Floods
fetch('senegal_floods.json')
    .then(r => r.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: (feature, latlng) => {
                const color = feature.properties.Severity == 3 ? "#ff4d4d" : "#3498db";
                return L.circleMarker(latlng, {
                    radius: 9, fillColor: color, color: "#fff", weight: 2, fillOpacity: 0.7
                });
            },
            onEachFeature: (feature, layer) => {
                const p = feature.properties;
                layer.bindPopup(`<div class="popup-card"><h3>Flood Event</h3><p><b>Date:</b> ${p.Began}</p><p><b>Cause:</b> ${p.MainCause}</p></div>`);
            }
        }).addTo(floodLayer);
    });

// 5. All Health Sites - Minimalist Look
fetch('health_sites.json')
    .then(r => r.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: (feature, latlng) => {
                return L.circleMarker(latlng, {
                    radius: 2, fillColor: "#2ecc71", color: "transparent", fillOpacity: 0.5
                });
            },
            onEachFeature: (feature, layer) => {
                const p = feature.properties;
                layer.bindPopup(`<div class="popup-card"><h3>${p.name || 'Site'}</h3><p>Type: ${p.amenity}</p></div>`);
            }
        }).addTo(allHealthLayer);
    });

// 6. At-Risk Sites - ANIMATED PULSE
fetch('at_risk_health_sites.json')
    .then(r => r.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: (feature, latlng) => {
                return L.marker(latlng, {
                    icon: L.divIcon({
                        className: 'at-risk-pulse-wrapper',
                        html: '<div class="at-risk-pulse"></div>',
                        iconSize: [12, 12]
                    })
                });
            },
            onEachFeature: (feature, layer) => {
                const p = feature.properties;
                layer.bindPopup(`
                    <div class="popup-card">
                        <h3>Vulnerable Site</h3>
                        <p><b>Name:</b> ${p.name || 'Unnamed Clinic'}</p>
                        <p><b>Type:</b> ${p.amenity}</p>
                        <span class="status-badge" style="background: #ff4d4d; color: white;">🚨 Risk Alert</span>
                        <p style="margin-top: 5px;">Only ${p.distance_to_flood_km}km from flood center.</p>
                    </div>
                `);
            }
        }).addTo(atRiskLayer);
    });

// 7. Modern UI Controls
const baseMaps = {
    "🌙 Dark Mode": darkMap,
    "☀️ Light Mode": lightMap,
    "🌍 Satellite": satelliteMap
};

const overlayMaps = {
    "🌊 Floods": floodLayer,
    "🏥 All Sites": allHealthLayer,
    "⚠️ At-Risk": atRiskLayer
};

L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);
L.control.zoom({ position: 'bottomleft' }).addTo(map);

// 8. Custom Legend
const legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {
    const div = L.DomUtil.create('div', 'legend');
    div.innerHTML = `
        <h4>Map Legend</h4>
        <div class="legend-item"><div class="legend-color" style="background: #3498db"></div> Flood Area</div>
        <div class="legend-item"><div class="legend-color" style="background: #2ecc71"></div> Health Site</div>
        <div class="legend-item"><div class="legend-color" style="background: #ff4d4d"></div> At Risk (Pulsing)</div>
    `;
    return div;
};
legend.addTo(map);
