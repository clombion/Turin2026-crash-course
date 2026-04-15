// Initialize the map centered on Senegal
const map = L.map('map').setView([14.4974, -14.4524], 7);

// 1. Base Map Layer
const lightMap = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

// 2. Create Layer Groups (Containers for our data)
const floodLayer = L.layerGroup().addTo(map);
const allHealthLayer = L.layerGroup();
const atRiskLayer = L.layerGroup().addTo(map); // Show at-risk by default

// 3. Load Flood Data
fetch('senegal_floods.json')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: (feature, latlng) => {
                let color = "#3388ff"; 
                if (feature.properties.Severity == 2) color = "#ff9900";
                if (feature.properties.Severity == 3) color = "#ff0000";
                return L.circleMarker(latlng, {
                    radius: 8, fillColor: color, color: "#fff", weight: 2, fillOpacity: 0.9
                });
            },
            onEachFeature: (feature, layer) => {
                const p = feature.properties;
                layer.bindPopup(`<b>Flood Event</b><br>Date: ${p.Began}<br>Severity: ${p.Severity}`);
            }
        }).addTo(floodLayer);
    });

// 4. Load All Health Sites
fetch('health_sites.json')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: (feature, latlng) => {
                return L.circleMarker(latlng, {
                    radius: 3, fillColor: "#28a745", color: "#fff", weight: 1, fillOpacity: 0.6
                });
            },
            onEachFeature: (feature, layer) => {
                const p = feature.properties;
                layer.bindPopup(`<b>${p.name || 'Health Site'}</b><br>Type: ${p.amenity || 'N/A'}`);
            }
        }).addTo(allHealthLayer);
    });

// 5. Load At-Risk Health Sites
fetch('at_risk_health_sites.json')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: (feature, latlng) => {
                // Choice: Red squares for high-risk sites
                return L.marker(latlng, {
                    icon: L.divIcon({
                        className: 'at-risk-icon',
                        html: '<div style="background-color: #d9534f; width: 12px; height: 12px; border: 2px solid white; border-radius: 2px;"></div>',
                        iconSize: [12, 12]
                    })
                });
            },
            onEachFeature: (feature, layer) => {
                const p = feature.properties;
                layer.bindPopup(`
                    <div style="color: #d9534f;">
                        <strong>⚠️ AT RISK OF FLOODING</strong><br>
                        <b>Name:</b> ${p.name || 'Unnamed Site'}<br>
                        <b>Type:</b> ${p.amenity || 'N/A'}<br>
                        <b>Proximity:</b> ${p.distance_to_flood_km} km to nearest flood
                    </div>
                `);
            }
        }).addTo(atRiskLayer);
    });

// 6. Add the Filter Control (Top Right)
const overlayMaps = {
    "🌊 Historical Floods": floodLayer,
    "🏥 All Health Sites": allHealthLayer,
    "⚠️ At-Risk Health Sites": atRiskLayer
};

L.control.layers(null, overlayMaps, { collapsed: false }).addTo(map);

// 7. Add Legend
const legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {
    const div = L.DomUtil.create('div', 'legend');
    div.innerHTML += '<h4>Map Legend</h4>';
    div.innerHTML += '<i style="background: #3388ff"></i> Flood Event<br>';
    div.innerHTML += '<i style="background: #28a745; width: 10px; height: 10px;"></i> Health Site (All)<br>';
    div.innerHTML += '<i style="background: #d9534f; width: 10px; height: 10px; border-radius: 0;"></i> At-Risk Site (< 1km)<br>';
    return div;
};
legend.addTo(map);
