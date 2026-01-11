// Comprehensive watch brand and model database
const watchDatabase = {
    brands: [
        // Luxury Swiss
        { name: "Rolex", tier: "luxury", country: "Switzerland" },
        { name: "Omega", tier: "luxury", country: "Switzerland" },
        { name: "Patek Philippe", tier: "ultra-luxury", country: "Switzerland" },
        { name: "Audemars Piguet", tier: "ultra-luxury", country: "Switzerland" },
        { name: "Vacheron Constantin", tier: "ultra-luxury", country: "Switzerland" },
        { name: "Jaeger-LeCoultre", tier: "luxury", country: "Switzerland" },
        { name: "IWC Schaffhausen", tier: "luxury", country: "Switzerland" },
        { name: "Breitling", tier: "luxury", country: "Switzerland" },
        { name: "Tag Heuer", tier: "premium", country: "Switzerland" },
        { name: "Tudor", tier: "premium", country: "Switzerland" },
        { name: "Zenith", tier: "luxury", country: "Switzerland" },
        { name: "Hublot", tier: "luxury", country: "Switzerland" },
        { name: "Cartier", tier: "luxury", country: "Switzerland" },
        { name: "Panerai", tier: "luxury", country: "Switzerland" },
        { name: "Chopard", tier: "luxury", country: "Switzerland" },
        { name: "Blancpain", tier: "luxury", country: "Switzerland" },
        { name: "Breguet", tier: "ultra-luxury", country: "Switzerland" },
        { name: "Girard-Perregaux", tier: "luxury", country: "Switzerland" },
        { name: "Ulysse Nardin", tier: "luxury", country: "Switzerland" },
        { name: "Longines", tier: "premium", country: "Switzerland" },
        { name: "Oris", tier: "premium", country: "Switzerland" },
        { name: "Tissot", tier: "accessible", country: "Switzerland" },
        { name: "Hamilton", tier: "accessible", country: "Switzerland" },
        { name: "Mido", tier: "accessible", country: "Switzerland" },
        { name: "Certina", tier: "accessible", country: "Switzerland" },
        { name: "Rado", tier: "premium", country: "Switzerland" },
        { name: "Baume & Mercier", tier: "premium", country: "Switzerland" },
        { name: "Maurice Lacroix", tier: "premium", country: "Switzerland" },
        { name: "Frederique Constant", tier: "premium", country: "Switzerland" },
        { name: "Alpina", tier: "premium", country: "Switzerland" },
        { name: "Ball Watch", tier: "premium", country: "Switzerland" },
        { name: "Corum", tier: "luxury", country: "Switzerland" },
        { name: "Carl F. Bucherer", tier: "luxury", country: "Switzerland" },
        { name: "Movado", tier: "accessible", country: "Switzerland" },
        { name: "Raymond Weil", tier: "premium", country: "Switzerland" },
        { name: "Ebel", tier: "premium", country: "Switzerland" },
        { name: "Glycine", tier: "accessible", country: "Switzerland" },
        { name: "Swatch", tier: "fashion", country: "Switzerland" },

        // Japanese
        { name: "Seiko", tier: "accessible", country: "Japan" },
        { name: "Grand Seiko", tier: "luxury", country: "Japan" },
        { name: "Citizen", tier: "accessible", country: "Japan" },
        { name: "Casio", tier: "accessible", country: "Japan" },
        { name: "Orient", tier: "accessible", country: "Japan" },
        { name: "Casio G-Shock", tier: "accessible", country: "Japan" },
        { name: "Seiko Prospex", tier: "accessible", country: "Japan" },
        { name: "Seiko Presage", tier: "accessible", country: "Japan" },

        // German
        { name: "A. Lange & Söhne", tier: "ultra-luxury", country: "Germany" },
        { name: "Glashütte Original", tier: "luxury", country: "Germany" },
        { name: "Nomos Glashütte", tier: "premium", country: "Germany" },
        { name: "Junghans", tier: "accessible", country: "Germany" },
        { name: "Sinn", tier: "premium", country: "Germany" },
        { name: "Tutima", tier: "premium", country: "Germany" },
        { name: "MeisterSinger", tier: "premium", country: "Germany" },
        { name: "Montblanc", tier: "premium", country: "Germany" },
        { name: "Stowa", tier: "accessible", country: "Germany" },
        { name: "Laco", tier: "accessible", country: "Germany" },

        // American
        { name: "Timex", tier: "accessible", country: "USA" },
        { name: "Bulova", tier: "accessible", country: "USA" },
        { name: "Fossil", tier: "fashion", country: "USA" },
        { name: "Shinola", tier: "accessible", country: "USA" },
        { name: "Weiss", tier: "premium", country: "USA" },
        { name: "RGM", tier: "luxury", country: "USA" },
        { name: "Kobold", tier: "premium", country: "USA" },

        // British
        { name: "Bremont", tier: "premium", country: "UK" },
        { name: "Christopher Ward", tier: "accessible", country: "UK" },
        { name: "Vertex", tier: "premium", country: "UK" },
        { name: "Farer", tier: "accessible", country: "UK" },
        { name: "Pinion", tier: "accessible", country: "UK" },
        { name: "Sekonda", tier: "budget", country: "UK" },

        // Italian
        { name: "Panerai", tier: "luxury", country: "Italy" },
        { name: "Bulgari", tier: "luxury", country: "Italy" },
        { name: "Anonimo", tier: "premium", country: "Italy" },

        // French
        { name: "Bell & Ross", tier: "premium", country: "France" },
        { name: "Pequignet", tier: "premium", country: "France" },
        { name: "Yema", tier: "accessible", country: "France" },
        { name: "Herbelin", tier: "accessible", country: "France" },

        // Fashion/Designer
        { name: "Michael Kors", tier: "fashion", country: "USA" },
        { name: "Daniel Wellington", tier: "fashion", country: "Sweden" },
        { name: "MVMT", tier: "fashion", country: "USA" },
        { name: "Skagen", tier: "fashion", country: "Denmark" },
        { name: "Nixon", tier: "fashion", country: "USA" },
        { name: "Guess", tier: "fashion", country: "USA" },
        { name: "Armani", tier: "fashion", country: "Italy" },
        { name: "Hugo Boss", tier: "fashion", country: "Germany" },
        { name: "Tommy Hilfiger", tier: "fashion", country: "USA" },
        { name: "Lacoste", tier: "fashion", country: "France" },
        { name: "Diesel", tier: "fashion", country: "Italy" },
        { name: "Marc Jacobs", tier: "fashion", country: "USA" },
        { name: "Kate Spade", tier: "fashion", country: "USA" },
        { name: "Coach", tier: "fashion", country: "USA" },

        // Vintage/Historical
        { name: "Elgin", tier: "vintage", country: "USA" },
        { name: "Waltham", tier: "vintage", country: "USA" },
        { name: "Hamilton (vintage)", tier: "vintage", country: "USA" },
        { name: "Gruen", tier: "vintage", country: "USA" },
        { name: "Benrus", tier: "vintage", country: "USA" },
        { name: "Wittnauer", tier: "vintage", country: "USA" },
        { name: "Bulova (vintage)", tier: "vintage", country: "USA" },
        { name: "Longines (vintage)", tier: "vintage", country: "Switzerland" },
        { name: "Universal Genève", tier: "vintage", country: "Switzerland" },
        { name: "Eterna", tier: "vintage", country: "Switzerland" },
        { name: "Doxa", tier: "vintage", country: "Switzerland" },
        { name: "Zodiac", tier: "vintage", country: "Switzerland" },
        { name: "Enicar", tier: "vintage", country: "Switzerland" },
        { name: "Favre-Leuba", tier: "vintage", country: "Switzerland" },

        // Smartwatch
        { name: "Apple Watch", tier: "smart", country: "USA" },
        { name: "Samsung Galaxy Watch", tier: "smart", country: "South Korea" },
        { name: "Garmin", tier: "smart", country: "USA" },
        { name: "Fitbit", tier: "smart", country: "USA" },
        { name: "Suunto", tier: "smart", country: "Finland" },
        { name: "Polar", tier: "smart", country: "Finland" },
        { name: "Amazfit", tier: "smart", country: "China" },

        // Microbrand/Independent
        { name: "Halios", tier: "microbrand", country: "Canada" },
        { name: "Baltic", tier: "microbrand", country: "France" },
        { name: "Lorier", tier: "microbrand", country: "USA" },
        { name: "Monta", tier: "microbrand", country: "USA" },
        { name: "Autodromo", tier: "microbrand", country: "USA" },
        { name: "Brew", tier: "microbrand", country: "USA" },
        { name: "Traska", tier: "microbrand", country: "USA" },
        { name: "Nodus", tier: "microbrand", country: "USA" },
        { name: "Melbourne Watch Company", tier: "microbrand", country: "Australia" },
        { name: "Anordain", tier: "microbrand", country: "UK" },
        { name: "Fears", tier: "microbrand", country: "UK" },
        { name: "Kurono Tokyo", tier: "microbrand", country: "Japan" },
        { name: "Minase", tier: "microbrand", country: "Japan" },

        // Other
        { name: "Other / Unlisted Brand", tier: "other", country: "Other" }
    ],

    // Popular models by brand
    models: {
        "Rolex": [
            "Submariner", "Datejust", "Day-Date (President)", "GMT-Master II",
            "Daytona", "Explorer", "Explorer II", "Sea-Dweller", "Yacht-Master",
            "Air-King", "Milgauss", "Oyster Perpetual", "Sky-Dweller", "Cellini"
        ],
        "Omega": [
            "Speedmaster Professional (Moonwatch)", "Speedmaster Reduced",
            "Seamaster 300", "Seamaster Planet Ocean", "Seamaster Diver 300M",
            "Seamaster Aqua Terra", "Constellation", "De Ville", "Railmaster"
        ],
        "Tag Heuer": [
            "Carrera", "Monaco", "Aquaracer", "Formula 1", "Autavia", "Link"
        ],
        "Breitling": [
            "Navitimer", "Chronomat", "Superocean", "Avenger", "Premier",
            "Aerospace", "Colt", "Transocean"
        ],
        "Tudor": [
            "Black Bay", "Black Bay 58", "Black Bay GMT", "Pelagos",
            "Ranger", "1926", "Royal"
        ],
        "IWC Schaffhausen": [
            "Portugieser", "Pilot's Watch", "Portofino", "Aquatimer", "Ingenieur"
        ],
        "Patek Philippe": [
            "Nautilus", "Aquanaut", "Calatrava", "Grand Complications",
            "Complications", "Twenty~4"
        ],
        "Audemars Piguet": [
            "Royal Oak", "Royal Oak Offshore", "Royal Oak Concept", "Code 11.59"
        ],
        "Seiko": [
            "SKX007", "SKX009", "Turtle (SRP)", "Samurai", "Monster",
            "Cocktail Time", "Alpinist", "5 Sports", "Prospex Diver"
        ],
        "Grand Seiko": [
            "Snowflake (SBGA211)", "Heritage Collection", "Sport Collection",
            "Elegance Collection", "Spring Drive Diver"
        ],
        "Citizen": [
            "Eco-Drive", "Promaster Diver", "Promaster Skyhawk", "Corso",
            "Chandler", "Paradigm"
        ],
        "Casio G-Shock": [
            "DW-5600", "GA-2100 (CasiOak)", "GW-M5610", "Mudmaster",
            "Rangeman", "Frogman", "MR-G"
        ],
        "Hamilton": [
            "Khaki Field", "Khaki Aviation", "Jazzmaster", "Ventura",
            "American Classic", "Khaki Navy"
        ],
        "Tissot": [
            "PRX", "Le Locle", "Gentleman", "Seastar", "T-Race",
            "Chemin des Tourelles", "Visodate"
        ],
        "Longines": [
            "HydroConquest", "Master Collection", "Spirit", "Heritage",
            "Conquest", "DolceVita", "Legend Diver"
        ],
        "Oris": [
            "Divers Sixty-Five", "Aquis", "Big Crown", "ProPilot", "Artelier"
        ],
        "Cartier": [
            "Tank", "Santos", "Ballon Bleu", "Panthère", "Drive", "Pasha"
        ],
        "Panerai": [
            "Luminor", "Luminor Marina", "Luminor Due", "Submersible", "Radiomir"
        ],
        "Jaeger-LeCoultre": [
            "Reverso", "Master Ultra Thin", "Master Control", "Polaris", "Duomètre"
        ],
        "Zenith": [
            "El Primero", "Chronomaster", "Defy", "Pilot"
        ],
        "Hublot": [
            "Big Bang", "Classic Fusion", "Spirit of Big Bang"
        ],
        "A. Lange & Söhne": [
            "Lange 1", "Saxonia", "1815", "Zeitwerk", "Odysseus"
        ],
        "Nomos Glashütte": [
            "Tangente", "Orion", "Ludwig", "Club", "Tetra", "Metro"
        ],
        "Timex": [
            "Weekender", "Expedition", "Marlin", "Q Timex", "Waterbury", "Easy Reader"
        ],
        "Bulova": [
            "Precisionist", "Lunar Pilot", "Computron", "Classic", "Marine Star"
        ]
    }
};

// Get all brand names for autocomplete
function getAllBrands() {
    return watchDatabase.brands.map(b => b.name).sort();
}

// Get models for a specific brand
function getModelsForBrand(brandName) {
    return watchDatabase.models[brandName] || [];
}

// Search brands by partial match
function searchBrands(query) {
    if (!query || query.length < 1) return [];
    const lowerQuery = query.toLowerCase();
    return watchDatabase.brands
        .filter(b => b.name.toLowerCase().includes(lowerQuery))
        .map(b => b.name)
        .slice(0, 10); // Limit to 10 results
}

// Search models by partial match
function searchModels(brandName, query) {
    const models = watchDatabase.models[brandName] || [];
    if (!query || query.length < 1) return models.slice(0, 10);
    const lowerQuery = query.toLowerCase();
    return models
        .filter(m => m.toLowerCase().includes(lowerQuery))
        .slice(0, 10);
}

// Get brand info
function getBrandInfo(brandName) {
    return watchDatabase.brands.find(b => b.name === brandName);
}
