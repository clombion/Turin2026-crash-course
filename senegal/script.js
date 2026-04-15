// Initialize the map centered on Senegal
const map = L.map('map').setView([14.4974, -14.4524], 7);

// Using a clean, light-colored basemap (CartoDB Positron)
// Choice: Light colors make the colorful flood points stand out better.
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

// Load the Senegal specific data
fetch('senegal_floods.json')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                let color = "#3388ff"; // Severity 1: Blue
                if (feature.properties.Severity == 2) color = "#ff9900"; // Severity 2: Orange
                if (feature.properties.Severity == 3) color = "#ff0000"; // Severity 3: Red
                
                // Choice: Larger markers (radius: 8) because we have fewer points
                return L.circleMarker(latlng, {
                    radius: 8,
                    fillColor: color,
                    color: "#fff",
                    weight: 2,
                    opacity: 1,
                    fillOpacity: 0.9
                });
            },
            onEachFeature: function (feature, layer) {
                const p = feature.properties;
                layer.bindPopup(`
                    <div style="min-width: 150px;">
                        <h3 style="margin: 0 0 10px 0; color: #333;">Flood Event</h3>
                        <b>Date:</b> ${p.Began}<br>
                        <b>Cause:</b> ${p.MainCause}<br>
                        <b>Severity:</b> ${p.Severity}<br>
                        <hr style="border: 0; border-top: 1px solid #eee;">
                        <b>Displaced:</b> ${p.Displaced || '0'}<br>
                        <b>Deaths:</b> ${p.Dead || '0'}
                    </div>
                `);
            }
        }).addTo(map);
    });

// Add a simple legend
const legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {
    const div = L.DomUtil.create('div', 'legend');
    div.innerHTML += '<h4>Severity</h4>';
    div.innerHTML += '<i style="background: #3388ff"></i> 1 (Standard)<br>';
    div.innerHTML += '<i style="background: #ff9900"></i> 2 (Severe)<br>';
    div.innerHTML += '<i style="background: #ff0000"></i> 3 (Extreme)<br>';
    return div;
};
legend.addTo(map);
