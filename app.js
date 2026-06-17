// ============================================================
// Initialisation de la carte
// ============================================================
const map = L.map('map', {
    center: [34.5, 9.5],
    zoom: 7,
    minZoom: 6,
    maxZoom: 18,
    zoomControl: true
});

// ============================================================
// Fonds de carte (Basemaps)
// ============================================================
const basemaps = {
    osm: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19
    }),
    satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; Esri, Maxar, Earthstar Geographics',
        maxZoom: 18
    }),
    topo: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://opentopomap.org">OpenTopoMap</a>',
        maxZoom: 17
    })
};

basemaps.osm.addTo(map);

// ============================================================
// Couche : Zones d'irradiation solaire (heatmap + rectangles)
// ============================================================
const solarHeatLayer = L.heatLayer(SOLAR_HEATMAP_DATA, {
    radius: 40,
    blur: 30,
    maxZoom: 10,
    max: 1.0,
    gradient: {
        0.0: '#ffffcc',
        0.25: '#ffeda0',
        0.4: '#fed976',
        0.55: '#feb24c',
        0.7: '#fd8d3c',
        0.85: '#fc4e2a',
        1.0: '#e31a1c'
    }
});

const solarZonesLayer = L.layerGroup();
SOLAR_ZONES.forEach(zone => {
    const rect = L.rectangle(zone.bounds, {
        color: zone.color,
        weight: 1,
        fillColor: zone.color,
        fillOpacity: 0.12,
        dashArray: '5, 5'
    });
    rect.bindTooltip(
        `<strong>${zone.name}</strong><br>GHI: ~${zone.ghi} kWh/m²/an`,
        { className: 'zone-tooltip', sticky: true }
    );
    solarZonesLayer.addLayer(rect);
});

const solarResourceLayer = L.layerGroup([solarHeatLayer, solarZonesLayer]);
solarResourceLayer.addTo(map);

// ============================================================
// Couche : Potentiel éolien (cercles)
// ============================================================
const windResourceLayer = L.layerGroup();
WIND_ZONES.forEach(zone => {
    const circle = L.circle(zone.center, {
        radius: zone.radius,
        color: zone.color,
        weight: 2,
        fillColor: zone.color,
        fillOpacity: 0.18,
        dashArray: '8, 4'
    });
    circle.bindTooltip(
        `<strong>${zone.name}</strong><br>Vent moyen: ~${zone.speed} m/s à 100m`,
        { className: 'zone-tooltip', sticky: true }
    );
    windResourceLayer.addLayer(circle);
});
windResourceLayer.addTo(map);

// ============================================================
// Helpers : Marqueurs de projets
// ============================================================
function createMarkerIcon(type, capacity) {
    const size = Math.max(28, Math.min(48, 20 + Math.sqrt(capacity) * 2));
    const icons = { solar: '☀️', wind: '💨', csp: '🔆' };
    const classes = { solar: 'marker-solar', wind: 'marker-wind', csp: 'marker-csp' };

    return L.divIcon({
        html: `<div class="custom-marker ${classes[type]}" style="width:${size}px;height:${size}px">${icons[type]}</div>`,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
        className: ''
    });
}

function statusLabel(status) {
    const labels = {
        operational: 'En service',
        construction: 'En construction',
        approved: 'Approuvé',
        planned: 'Planifié'
    };
    return labels[status] || status;
}

function createPopup(project, type) {
    const typeLabels = { solar: 'Solaire PV', wind: 'Éolien', csp: 'CSP' };
    return `
        <div class="project-popup">
            <h3>${project.name}</h3>
            <div class="popup-row">
                <span class="label">Type</span>
                <span class="value">${typeLabels[type]}</span>
            </div>
            <div class="popup-row">
                <span class="label">Capacité</span>
                <span class="value">${project.capacity} MW</span>
            </div>
            <div class="popup-row">
                <span class="label">Développeur</span>
                <span class="value">${project.developer}</span>
            </div>
            <div class="popup-row">
                <span class="label">Année</span>
                <span class="value">${project.year}</span>
            </div>
            <div style="margin-top:8px">
                <span class="status-badge status-${project.status}">${statusLabel(project.status)}</span>
            </div>
            <p style="margin-top:8px;font-size:0.8rem;color:#666">${project.description}</p>
        </div>
    `;
}

// ============================================================
// Couches : Projets solaires PV
// ============================================================
const solarProjectsLayer = L.markerClusterGroup({
    maxClusterRadius: 40,
    iconCreateFunction: function(cluster) {
        const count = cluster.getChildCount();
        return L.divIcon({
            html: `<div class="custom-marker marker-solar" style="width:40px;height:40px;font-size:13px">${count}</div>`,
            iconSize: [40, 40],
            className: ''
        });
    }
});

PROJECTS.solar.forEach(p => {
    const marker = L.marker([p.lat, p.lng], { icon: createMarkerIcon('solar', p.capacity) });
    marker.bindPopup(createPopup(p, 'solar'), { maxWidth: 280 });
    solarProjectsLayer.addLayer(marker);
});
solarProjectsLayer.addTo(map);

// ============================================================
// Couches : Projets éoliens
// ============================================================
const windProjectsLayer = L.markerClusterGroup({
    maxClusterRadius: 40,
    iconCreateFunction: function(cluster) {
        const count = cluster.getChildCount();
        return L.divIcon({
            html: `<div class="custom-marker marker-wind" style="width:40px;height:40px;font-size:13px">${count}</div>`,
            iconSize: [40, 40],
            className: ''
        });
    }
});

PROJECTS.wind.forEach(p => {
    const marker = L.marker([p.lat, p.lng], { icon: createMarkerIcon('wind', p.capacity) });
    marker.bindPopup(createPopup(p, 'wind'), { maxWidth: 280 });
    windProjectsLayer.addLayer(marker);
});
windProjectsLayer.addTo(map);

// ============================================================
// Couches : Projets CSP
// ============================================================
const cspProjectsLayer = L.layerGroup();
PROJECTS.csp.forEach(p => {
    const marker = L.marker([p.lat, p.lng], { icon: createMarkerIcon('csp', p.capacity) });
    marker.bindPopup(createPopup(p, 'csp'), { maxWidth: 280 });
    cspProjectsLayer.addLayer(marker);
});
cspProjectsLayer.addTo(map);

// ============================================================
// Étiquettes des gouvernorats
// ============================================================
const govLabels = L.layerGroup();
GOVERNORATES.forEach(g => {
    const label = L.marker(g.center, {
        icon: L.divIcon({
            html: `<div style="font-size:10px;color:#555;white-space:nowrap;text-shadow:1px 1px 2px #fff,-1px -1px 2px #fff;font-weight:500">${g.name}</div>`,
            className: '',
            iconAnchor: [0, 0]
        }),
        interactive: false
    });
    govLabels.addLayer(label);
});

map.on('zoomend', () => {
    if (map.getZoom() >= 8) {
        if (!map.hasLayer(govLabels)) govLabels.addTo(map);
    } else {
        if (map.hasLayer(govLabels)) map.removeLayer(govLabels);
    }
});

// ============================================================
// Contrôles de couches (sidebar)
// ============================================================
const layerMap = {
    'layer-solar': solarResourceLayer,
    'layer-wind': windResourceLayer,
    'layer-solar-projects': solarProjectsLayer,
    'layer-wind-projects': windProjectsLayer,
    'layer-csp-projects': cspProjectsLayer
};

Object.entries(layerMap).forEach(([id, layer]) => {
    document.getElementById(id).addEventListener('change', function() {
        if (this.checked) {
            map.addLayer(layer);
        } else {
            map.removeLayer(layer);
        }
    });
});

// Basemap toggle
document.querySelectorAll('input[name="basemap"]').forEach(radio => {
    radio.addEventListener('change', function() {
        Object.values(basemaps).forEach(bm => map.removeLayer(bm));
        basemaps[this.value].addTo(map);
    });
});

// Sidebar toggle
document.getElementById('sidebar-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('collapsed');
});

// ============================================================
// Calcul des statistiques
// ============================================================
function updateStats() {
    const all = [...PROJECTS.solar, ...PROJECTS.wind, ...PROJECTS.csp];
    const total = all.length;
    const totalCapacity = all.reduce((s, p) => s + p.capacity, 0);
    const solarCap = [...PROJECTS.solar, ...PROJECTS.csp].reduce((s, p) => s + p.capacity, 0);
    const windCap = PROJECTS.wind.reduce((s, p) => s + p.capacity, 0);

    document.getElementById('stat-total').textContent = total;
    document.getElementById('stat-capacity').textContent = totalCapacity.toLocaleString('fr-FR');
    document.getElementById('stat-solar').textContent = solarCap.toLocaleString('fr-FR');
    document.getElementById('stat-wind').textContent = windCap.toLocaleString('fr-FR');
}

updateStats();

// ============================================================
// Échelle
// ============================================================
L.control.scale({ imperial: false, position: 'bottomright' }).addTo(map);

// ============================================================
// Frontière approximative de la Tunisie
// ============================================================
const tunisiaBorder = L.polyline([
    [37.35, 8.40], [37.07, 8.67], [36.95, 8.60], [36.83, 8.37],
    [36.51, 8.22], [36.33, 8.35], [35.82, 8.25], [35.48, 8.23],
    [35.20, 8.32], [34.95, 8.23], [34.57, 8.10], [34.35, 7.50],
    [33.90, 7.73], [33.50, 7.60], [33.20, 7.80], [32.88, 8.20],
    [32.70, 8.60], [32.50, 9.00], [32.35, 9.50], [32.40, 10.20],
    [33.10, 11.05], [33.20, 11.20], [33.50, 11.10], [33.80, 11.00],
    [34.20, 10.85], [34.60, 11.10], [35.00, 11.05], [35.30, 11.10],
    [35.80, 11.00], [36.30, 10.80], [36.60, 10.90], [36.85, 11.05],
    [37.05, 11.05], [37.25, 10.35], [37.35, 10.15], [37.35, 9.80],
    [37.35, 9.40], [37.35, 8.85], [37.35, 8.40]
], {
    color: '#d32f2f',
    weight: 2.5,
    opacity: 0.7,
    dashArray: '10, 6',
    fill: false
}).addTo(map);
