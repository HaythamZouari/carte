// ============================================================
// Données des projets EnR en Tunisie
// Sources: ANME, STEG, Plan Solaire Tunisien, régime des concessions
// ============================================================

const PROJECTS = {
    solar: [
        {
            name: "Centrale PV Tozeur 1",
            lat: 33.92, lng: 8.13,
            capacity: 10, status: "operational", year: 2019,
            developer: "STEG",
            description: "Première grande centrale PV connectée au réseau en Tunisie"
        },
        {
            name: "Centrale PV Tozeur 2",
            lat: 33.90, lng: 8.10,
            capacity: 10, status: "operational", year: 2020,
            developer: "STEG",
            description: "Extension du site solaire de Tozeur"
        },
        {
            name: "Centrale PV Tataouine",
            lat: 32.93, lng: 10.45,
            capacity: 10, status: "operational", year: 2021,
            developer: "STEG / ANME",
            description: "Centrale solaire dans le sud tunisien"
        },
        {
            name: "PV Kairouan",
            lat: 35.67, lng: 10.10,
            capacity: 100, status: "construction", year: 2025,
            developer: "Consortium international",
            description: "Projet sous régime des concessions"
        },
        {
            name: "PV Sidi Bouzid",
            lat: 34.88, lng: 9.48,
            capacity: 50, status: "construction", year: 2025,
            developer: "Scatec Solar",
            description: "Projet autorisé sous le régime des concessions"
        },
        {
            name: "PV Gafsa",
            lat: 34.42, lng: 8.78,
            capacity: 50, status: "approved", year: 2026,
            developer: "AMEA Power",
            description: "Projet solaire dans la zone minière de Gafsa"
        },
        {
            name: "PV Médenine",
            lat: 33.35, lng: 10.50,
            capacity: 100, status: "planned", year: 2027,
            developer: "À déterminer",
            description: "Grand projet PV dans le gouvernorat de Médenine"
        },
        {
            name: "PV Kébili",
            lat: 33.70, lng: 8.97,
            capacity: 200, status: "planned", year: 2027,
            developer: "À déterminer",
            description: "Méga-projet solaire au sud - zone à forte irradiation"
        },
        {
            name: "PV Kasserine",
            lat: 35.17, lng: 8.83,
            capacity: 60, status: "approved", year: 2026,
            developer: "Consortium tuniso-européen",
            description: "Projet solaire dans les hauts plateaux"
        },
        {
            name: "PV Gabès",
            lat: 33.88, lng: 10.10,
            capacity: 50, status: "construction", year: 2025,
            developer: "Engie",
            description: "Projet connecté à la zone industrielle de Gabès"
        },
        {
            name: "PV Sfax Nord",
            lat: 34.80, lng: 10.76,
            capacity: 30, status: "operational", year: 2023,
            developer: "STEG ER",
            description: "Installation PV périurbaine"
        },
        {
            name: "PV El Metbasta (Nabeul)",
            lat: 36.45, lng: 10.73,
            capacity: 10, status: "operational", year: 2022,
            developer: "STEG",
            description: "Centrale PV dans le Cap Bon"
        },
        {
            name: "PV Siliana",
            lat: 36.08, lng: 9.37,
            capacity: 50, status: "planned", year: 2027,
            developer: "À déterminer",
            description: "Projet PV dans le nord-ouest"
        },
        {
            name: "PV Jendouba",
            lat: 36.50, lng: 8.78,
            capacity: 30, status: "approved", year: 2026,
            developer: "Voltalia",
            description: "Projet solaire au nord de la Tunisie"
        },
    ],

    wind: [
        {
            name: "Parc éolien Sidi Daoud",
            lat: 37.02, lng: 10.90,
            capacity: 54, status: "operational", year: 2000,
            developer: "STEG",
            description: "Premier parc éolien de Tunisie, Cap Bon"
        },
        {
            name: "Parc éolien Bizerte (Metline-Kchabta)",
            lat: 37.13, lng: 9.78,
            capacity: 190, status: "operational", year: 2012,
            developer: "STEG",
            description: "Plus grand parc éolien opérationnel en Tunisie"
        },
        {
            name: "Parc éolien Kébili",
            lat: 33.80, lng: 8.80,
            capacity: 120, status: "construction", year: 2025,
            developer: "UPC Renewables",
            description: "Parc éolien dans le sud tunisien"
        },
        {
            name: "Parc éolien Tataouine",
            lat: 33.00, lng: 10.40,
            capacity: 100, status: "approved", year: 2026,
            developer: "Consortium AMEA",
            description: "Extension éolienne dans le sud"
        },
        {
            name: "Parc éolien Jebel Abderrahmane",
            lat: 36.80, lng: 10.70,
            capacity: 30, status: "operational", year: 2023,
            developer: "STEG ER",
            description: "Parc éolien dans le Cap Bon, zone montagneuse"
        },
        {
            name: "Parc éolien Tbaga (Kébili)",
            lat: 33.98, lng: 8.35,
            capacity: 300, status: "planned", year: 2028,
            developer: "À déterminer",
            description: "Méga-projet éolien dans le couloir venteux du sud"
        },
        {
            name: "Parc éolien Gaâfour (Siliana)",
            lat: 36.32, lng: 9.32,
            capacity: 60, status: "approved", year: 2026,
            developer: "Siemens Gamesa / partenaire local",
            description: "Parc éolien dans les montagnes du nord-ouest"
        },
        {
            name: "Parc éolien Thala (Kasserine)",
            lat: 35.57, lng: 8.67,
            capacity: 100, status: "planned", year: 2027,
            developer: "À déterminer",
            description: "Projet éolien sur les hauts plateaux"
        },
        {
            name: "Parc éolien El Alia (Bizerte)",
            lat: 37.17, lng: 10.03,
            capacity: 50, status: "construction", year: 2025,
            developer: "Engie / partenaire local",
            description: "Nouveau parc éolien dans la zone de Bizerte"
        },
        {
            name: "Parc éolien Fernana (Jendouba)",
            lat: 36.66, lng: 8.70,
            capacity: 80, status: "planned", year: 2028,
            developer: "À déterminer",
            description: "Exploitation du potentiel venteux de la Kroumirie"
        },
    ],

    csp: [
        {
            name: "TuNur CSP Export",
            lat: 33.50, lng: 8.50,
            capacity: 4500, status: "planned", year: 2030,
            developer: "TuNur Ltd",
            description: "Méga-projet CSP avec exportation vers l'Europe via câble sous-marin"
        },
        {
            name: "CSP Akarit (Gabès)",
            lat: 34.05, lng: 9.95,
            capacity: 50, status: "planned", year: 2028,
            developer: "STEG / partenaire",
            description: "Projet pilote CSP avec stockage thermique"
        },
        {
            name: "CSP Nefta",
            lat: 33.87, lng: 7.88,
            capacity: 100, status: "planned", year: 2029,
            developer: "Consortium international",
            description: "Centrale à concentration solaire avec tour"
        },
    ]
};

// ============================================================
// Zones de ressources solaires (GHI - Global Horizontal Irradiance)
// Données approximatives basées sur l'Atlas Solaire Tunisien
// ============================================================
const SOLAR_ZONES = [
    {
        name: "Sahara tunisien",
        bounds: [[32.5, 7.5], [34.0, 10.5]],
        ghi: 2200,
        color: "#e31a1c",
        description: "Irradiation exceptionnelle > 2200 kWh/m²/an"
    },
    {
        name: "Sud tunisien",
        bounds: [[34.0, 8.0], [35.0, 10.5]],
        ghi: 2000,
        color: "#fd8d3c",
        description: "Très forte irradiation ~2000 kWh/m²/an"
    },
    {
        name: "Centre tunisien",
        bounds: [[35.0, 8.5], [36.0, 10.8]],
        ghi: 1850,
        color: "#feb24c",
        description: "Forte irradiation ~1850 kWh/m²/an"
    },
    {
        name: "Nord tunisien",
        bounds: [[36.0, 8.0], [37.3, 11.5]],
        ghi: 1700,
        color: "#fed976",
        description: "Bonne irradiation ~1700 kWh/m²/an"
    },
];

// ============================================================
// Zones de potentiel éolien
// Basé sur l'Atlas Éolien de la Tunisie (ANME)
// ============================================================
const WIND_ZONES = [
    {
        name: "Cap Bon",
        center: [37.0, 10.8],
        radius: 35000,
        speed: 9,
        color: "#084594",
        description: "Zone à très fort potentiel éolien, vitesse moyenne > 9 m/s"
    },
    {
        name: "Bizerte côtier",
        center: [37.15, 9.85],
        radius: 30000,
        speed: 8.5,
        color: "#2171b5",
        description: "Corridor éolien nord, vitesse ~8.5 m/s"
    },
    {
        name: "Couloir sud (Kébili-Tozeur)",
        center: [33.9, 8.5],
        radius: 50000,
        speed: 8,
        color: "#2171b5",
        description: "Couloir venteux du sud, accélération thermique ~8 m/s"
    },
    {
        name: "Tataouine-Médenine",
        center: [33.2, 10.4],
        radius: 40000,
        speed: 7.5,
        color: "#4292c6",
        description: "Potentiel éolien significatif ~7.5 m/s"
    },
    {
        name: "Hauts plateaux (Kasserine-Siliana)",
        center: [35.8, 9.0],
        radius: 40000,
        speed: 7,
        color: "#4292c6",
        description: "Effet de relief, vitesse ~7 m/s"
    },
    {
        name: "Kroumirie (Jendouba)",
        center: [36.6, 8.7],
        radius: 25000,
        speed: 6.5,
        color: "#9ecae1",
        description: "Potentiel modéré en altitude ~6.5 m/s"
    },
];

// Points de chaleur pour la heatmap solaire
const SOLAR_HEATMAP_DATA = [
    // Sahara - très haute irradiation
    [32.8, 8.0, 1.0], [32.9, 8.5, 1.0], [33.0, 9.0, 1.0],
    [33.2, 8.2, 1.0], [33.3, 9.5, 0.95], [33.5, 8.8, 1.0],
    [33.1, 10.0, 0.95], [32.7, 9.2, 1.0], [33.4, 7.8, 0.95],
    [33.6, 8.3, 0.95], [33.0, 10.2, 0.9], [32.6, 8.8, 1.0],
    // Sud
    [34.2, 8.5, 0.85], [34.4, 9.0, 0.85], [34.1, 9.8, 0.8],
    [34.6, 8.8, 0.8], [34.3, 10.2, 0.75], [34.8, 9.5, 0.75],
    [34.0, 8.2, 0.85], [34.5, 10.5, 0.7], [34.7, 9.2, 0.8],
    // Centre
    [35.2, 9.0, 0.7], [35.4, 9.5, 0.65], [35.0, 10.0, 0.7],
    [35.6, 9.8, 0.6], [35.3, 10.5, 0.6], [35.8, 10.2, 0.55],
    [35.1, 8.8, 0.7], [35.5, 9.2, 0.65],
    // Nord
    [36.2, 9.5, 0.5], [36.5, 10.0, 0.45], [36.8, 10.5, 0.4],
    [36.3, 9.0, 0.5], [36.7, 9.8, 0.45], [37.0, 10.2, 0.35],
    [36.1, 10.3, 0.5], [36.4, 8.5, 0.5], [36.9, 9.5, 0.4],
    [36.6, 10.7, 0.4], [37.1, 10.8, 0.35],
];

// Gouvernorats de Tunisie (frontières simplifiées pour overlay)
const GOVERNORATES = [
    { name: "Tunis", center: [36.8, 10.18] },
    { name: "Ariana", center: [36.86, 10.19] },
    { name: "Ben Arous", center: [36.75, 10.22] },
    { name: "Manouba", center: [36.81, 10.0] },
    { name: "Nabeul", center: [36.45, 10.73] },
    { name: "Zaghouan", center: [36.4, 10.14] },
    { name: "Bizerte", center: [37.27, 9.87] },
    { name: "Béja", center: [36.73, 9.18] },
    { name: "Jendouba", center: [36.5, 8.78] },
    { name: "Le Kef", center: [36.18, 8.7] },
    { name: "Siliana", center: [36.08, 9.37] },
    { name: "Sousse", center: [35.83, 10.64] },
    { name: "Monastir", center: [35.78, 10.83] },
    { name: "Mahdia", center: [35.5, 11.06] },
    { name: "Sfax", center: [34.74, 10.76] },
    { name: "Kairouan", center: [35.67, 10.1] },
    { name: "Kasserine", center: [35.17, 8.83] },
    { name: "Sidi Bouzid", center: [34.88, 9.48] },
    { name: "Gabès", center: [33.88, 10.1] },
    { name: "Médenine", center: [33.35, 10.5] },
    { name: "Tataouine", center: [32.93, 10.45] },
    { name: "Gafsa", center: [34.42, 8.78] },
    { name: "Tozeur", center: [33.92, 8.13] },
    { name: "Kébili", center: [33.7, 8.97] },
];
