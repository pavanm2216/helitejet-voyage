export type ServiceKey = "AVIATION" | "YACHTS" | "MOBILITY" | "RESIDENCES" | "EXPERIENCES" | "CONCIERGE";

export type FieldDef =
  | { type: "text"; id: string; label: string; placeholder?: string; required?: boolean }
  | { type: "date"; id: string; label: string; required?: boolean }
  | { type: "number"; id: string; label: string; min?: number; max?: number; required?: boolean }
  | { type: "select"; id: string; label: string; options: string[]; required?: boolean }
  | { type: "combobox"; id: string; label: string; options: string[]; placeholder?: string; required?: boolean }
  | { type: "textarea"; id: string; label: string; placeholder?: string; required?: boolean }
  | { type: "stepper"; id: string; label: string; min?: number; max?: number };

export type BookingStep = {
  id: string;
  title: string;
  kicker: string;
  fields: FieldDef[];
};

export type ServiceConfig = {
  label: string;
  description: string;
  steps: BookingStep[];
};

export const bookingConfig: Record<ServiceKey, ServiceConfig> = {
  AVIATION: {
    label: "Aviation",
    description: "Private Jets & Helicopters",
    steps: [
      {
        id: "aircraft",
        title: "Flight or helicopter?",
        kicker: "Aircraft Type",
        fields: [
          { type: "select", id: "subtype", label: "Aircraft type", options: ["Private Jet", "Helicopter"], required: true },
        ],
      },
      {
        id: "route",
        title: "Where are you flying?",
        kicker: "Route",
        fields: [
          { type: "combobox", id: "departure", label: "Departure airport or city", placeholder: "Search airports…", options: ["London Luton (EGGW)", "London Farnborough (EGLF)", "London Biggin Hill (EGKB)", "London Stansted (EGSS)", "Paris Le Bourget (LFPB)", "Nice Côte d'Azur (LFMN)", "Geneva (LSGG)", "Zurich (LSZH)", "Milan Linate (LIML)", "Rome Ciampino (LIRA)", "Madrid Barajas (LEMD)", "Barcelona (LEBL)", "Dubai (OMDB)", "Abu Dhabi (OMAA)", "New York Teterboro (KTEB)", "Miami Opa-locka (KOPF)", "Los Angeles Van Nuys (KVNY)", "Maldives Malé (VRMM)", "Mykonos (LGMK)", "Santorini (LGSR)", "Ibiza (LEIB)", "Monaco Heliport", "Cannes Mandelieu (LFMD)", "St Tropez La Môle (LFTZ)"], required: true },
          { type: "combobox", id: "destination", label: "Arrival airport or city", placeholder: "Search airports…", options: ["London Luton (EGGW)", "London Farnborough (EGLF)", "London Biggin Hill (EGKB)", "London Stansted (EGSS)", "Paris Le Bourget (LFPB)", "Nice Côte d'Azur (LFMN)", "Geneva (LSGG)", "Zurich (LSZH)", "Milan Linate (LIML)", "Rome Ciampino (LIRA)", "Madrid Barajas (LEMD)", "Barcelona (LEBL)", "Dubai (OMDB)", "Abu Dhabi (OMAA)", "New York Teterboro (KTEB)", "Miami Opa-locka (KOPF)", "Los Angeles Van Nuys (KVNY)", "Maldives Malé (VRMM)", "Mykonos (LGMK)", "Santorini (LGSR)", "Ibiza (LEIB)", "Monaco Heliport", "Cannes Mandelieu (LFMD)", "St Tropez La Môle (LFTZ)"], required: true },
          { type: "select", id: "trip_type", label: "Trip type", options: ["One Way", "Round Trip"], required: true },
        ],
      },
      {
        id: "dates",
        title: "When do you depart?",
        kicker: "Dates",
        fields: [
          { type: "date", id: "start_date", label: "Departure date", required: true },
          { type: "date", id: "end_date", label: "Return date (if round trip)" },
        ],
      },
      {
        id: "passengers",
        title: "How many passengers?",
        kicker: "Passengers",
        fields: [
          { type: "stepper", id: "people_count", label: "Passengers", min: 1, max: 19 },
        ],
      },
      {
        id: "preferences",
        title: "Any preferences?",
        kicker: "Preferences",
        fields: [
          { type: "select", id: "budget_range", label: "Budget range", options: ["Under $25,000", "$25,000 – $75,000", "$75,000 – $150,000", "Above $150,000"] },
          { type: "textarea", id: "additional_requirements", label: "Additional requirements", placeholder: "Catering, ground transport, specific aircraft model…" },
        ],
      },
    ],
  },

  YACHTS: {
    label: "Yachts",
    description: "Yacht Charter & Marine Experiences",
    steps: [
      {
        id: "yacht_type",
        title: "What kind of yacht?",
        kicker: "Yacht Type",
        fields: [
          { type: "select", id: "subtype", label: "Yacht type", options: ["Explorer Yacht", "Classic Motor Yacht", "Sailing Yacht"], required: true },
        ],
      },
      {
        id: "route",
        title: "Where do you want to sail?",
        kicker: "Route",
        fields: [
          { type: "combobox", id: "departure", label: "Embarkation port", placeholder: "Search ports…", options: ["Monaco", "Antibes", "Cannes", "Nice", "St Tropez", "Ibiza", "Palma de Mallorca", "Barcelona", "Portofino", "Amalfi", "Positano", "Naples", "Capri", "Sardinia — Porto Cervo", "Sardinia — Olbia", "Sicily — Palermo", "Athens — Piraeus", "Mykonos", "Santorini", "Corfu", "Rhodes", "Dubrovnik", "Split", "Kotor", "Istanbul", "Bodrum", "Marmaris", "Dubai Marina", "Abu Dhabi", "Maldives — Malé"], required: true },
          { type: "combobox", id: "destination", label: "Destination or cruising area", placeholder: "Search destinations…", options: ["French Riviera", "Amalfi Coast", "Greek Islands", "Balearic Islands", "Sardinia & Corsica", "Croatian Coast", "Turkish Riviera", "Adriatic", "Caribbean — St Barts", "Caribbean — BVI", "Caribbean — Antigua", "Maldives", "Seychelles", "Red Sea", "Norwegian Fjords", "Iceland", "Azores", "Canary Islands"], required: true },
        ],
      },
      {
        id: "dates",
        title: "When is your charter?",
        kicker: "Dates",
        fields: [
          { type: "date", id: "start_date", label: "Embarkation date", required: true },
          { type: "date", id: "end_date", label: "Disembarkation date", required: true },
        ],
      },
      {
        id: "guests",
        title: "How many guests?",
        kicker: "Guests",
        fields: [
          { type: "stepper", id: "people_count", label: "Guests", min: 2, max: 20 },
        ],
      },
      {
        id: "preferences",
        title: "Any preferences?",
        kicker: "Preferences",
        fields: [
          { type: "select", id: "budget_range", label: "Weekly budget", options: ["Under $100,000", "$100,000 – $300,000", "$300,000 – $600,000", "Above $600,000"] },
          { type: "textarea", id: "additional_requirements", label: "Additional requirements", placeholder: "Crew language, water toys, dietary requirements…" },
        ],
      },
    ],
  },

  MOBILITY: {
    label: "Mobility",
    description: "Luxury Cars & Chauffeurs",
    steps: [
      {
        id: "vehicle",
        title: "What do you need?",
        kicker: "Vehicle Type",
        fields: [
          { type: "select", id: "subtype", label: "Service type", options: ["Chauffeur Car", "Armoured Vehicle", "Helicopter Transfer", "Tender / Boat Transfer"], required: true },
        ],
      },
      {
        id: "route",
        title: "Where to?",
        kicker: "Route",
        fields: [
          { type: "combobox", id: "departure", label: "Pickup location", placeholder: "Address, airport, hotel…", options: ["London Heathrow", "London Gatwick", "London City Airport", "London Farnborough", "Paris CDG", "Paris Le Bourget", "Nice Airport", "Geneva Airport", "Dubai Airport", "Dubai Marina", "Abu Dhabi Airport", "Monaco", "Cannes", "St Tropez", "Ibiza Town", "Mykonos Town", "Santorini — Oia"], required: true },
          { type: "combobox", id: "destination", label: "Drop-off location", placeholder: "Address, airport, hotel…", options: ["London Heathrow", "London Gatwick", "London City Airport", "London Farnborough", "Paris CDG", "Paris Le Bourget", "Nice Airport", "Geneva Airport", "Dubai Airport", "Dubai Marina", "Abu Dhabi Airport", "Monaco", "Cannes", "St Tropez", "Ibiza Town", "Mykonos Town", "Santorini — Oia"], required: true },
        ],
      },
      {
        id: "dates",
        title: "When do you need it?",
        kicker: "Date & Time",
        fields: [
          { type: "date", id: "start_date", label: "Date", required: true },
          { type: "text", id: "departure", label: "Pickup time", placeholder: "e.g. 09:30" },
        ],
      },
      {
        id: "passengers",
        title: "How many passengers?",
        kicker: "Passengers",
        fields: [
          { type: "stepper", id: "people_count", label: "Passengers", min: 1, max: 12 },
          { type: "textarea", id: "additional_requirements", label: "Additional notes", placeholder: "Luggage, child seats, security requirements…" },
        ],
      },
    ],
  },

  RESIDENCES: {
    label: "Residences",
    description: "Villas, Hotels & Private Stays",
    steps: [
      {
        id: "property",
        title: "What kind of property?",
        kicker: "Property Type",
        fields: [
          { type: "select", id: "subtype", label: "Property type", options: ["Villa", "Penthouse", "Chalet", "Estate", "Private Island"], required: true },
        ],
      },
      {
        id: "destination",
        title: "Where would you like to stay?",
        kicker: "Destination",
        fields: [
          { type: "combobox", id: "destination", label: "Destination", placeholder: "Search destinations…", options: ["Monaco", "Cannes", "St Tropez", "Ibiza", "Mallorca", "Marbella", "Mykonos", "Santorini", "Capri", "Portofino", "Amalfi Coast", "Sardinia", "Gstaad", "St Moritz", "Verbier", "Courchevel", "Aspen", "Maldives", "Seychelles", "Bali", "Dubai", "Abu Dhabi", "New York", "Miami", "Los Angeles", "Paris", "London", "Tokyo"], required: true },
          { type: "select", id: "setting", label: "Setting preference", options: ["Coastal", "City", "Alpine", "Countryside", "Island"] },
        ],
      },
      {
        id: "dates",
        title: "When is your stay?",
        kicker: "Dates",
        fields: [
          { type: "date", id: "start_date", label: "Check-in", required: true },
          { type: "date", id: "end_date", label: "Check-out", required: true },
        ],
      },
      {
        id: "guests",
        title: "How many guests?",
        kicker: "Guests",
        fields: [
          { type: "stepper", id: "people_count", label: "Guests", min: 1, max: 20 },
        ],
      },
      {
        id: "preferences",
        title: "Any preferences?",
        kicker: "Preferences",
        fields: [
          { type: "select", id: "budget_range", label: "Weekly budget", options: ["Under $50,000", "$50,000 – $150,000", "$150,000 – $300,000", "Above $300,000"] },
          { type: "textarea", id: "additional_requirements", label: "Additional requirements", placeholder: "Staff, chef, security, pet-friendly…" },
        ],
      },
    ],
  },

  EXPERIENCES: {
    label: "Experiences",
    description: "Curated Moments & Lasting Memories",
    steps: [
      {
        id: "category",
        title: "What kind of experience?",
        kicker: "Category",
        fields: [
          { type: "select", id: "subtype", label: "Category", options: ["Gastronomy", "Art & Culture", "Wellness", "Adventure", "Sport & Motorsport", "Celebration", "Fashion & Craft", "Nature & Wildlife"], required: true },
        ],
      },
      {
        id: "destination",
        title: "Where should it happen?",
        kicker: "Destination",
        fields: [
          { type: "combobox", id: "destination", label: "Destination or location", placeholder: "Search destinations…", options: ["Paris", "London", "New York", "Tokyo", "Dubai", "Monaco", "Maldives", "Seychelles", "Bali", "Mykonos", "Santorini", "Ibiza", "Amalfi Coast", "Tuscany", "Marrakech", "Cape Town", "Aspen", "Gstaad", "St Moritz", "Open to suggestions"], required: true },
        ],
      },
      {
        id: "dates",
        title: "When?",
        kicker: "Dates",
        fields: [
          { type: "date", id: "start_date", label: "Date", required: true },
          { type: "date", id: "end_date", label: "End date (if multi-day)" },
        ],
      },
      {
        id: "guests",
        title: "How many guests?",
        kicker: "Guests",
        fields: [
          { type: "stepper", id: "people_count", label: "Guests", min: 1, max: 50 },
        ],
      },
      {
        id: "brief",
        title: "Tell us more.",
        kicker: "Brief",
        fields: [
          { type: "select", id: "budget_range", label: "Budget", options: ["Under $25,000", "$25,000 – $100,000", "$100,000 – $500,000", "Above $500,000"] },
          { type: "textarea", id: "additional_requirements", label: "Your brief", placeholder: "The more you tell us, the better we can compose it.", required: true },
        ],
      },
    ],
  },

  CONCIERGE: {
    label: "Concierge",
    description: "Personal Assistance",
    steps: [
      {
        id: "type",
        title: "What do you need?",
        kicker: "Request Type",
        fields: [
          { type: "select", id: "subtype", label: "Nature of request", options: ["Aviation", "Yachts", "Mobility", "Residences", "Experiences", "Destinations", "Other"], required: true },
        ],
      },
      {
        id: "timeframe",
        title: "When do you need it?",
        kicker: "Timeframe",
        fields: [
          { type: "select", id: "timeframe", label: "Timeframe", options: ["Today", "Within the week", "Within the month", "Planning ahead"], required: true },
          { type: "date", id: "start_date", label: "Specific date (if known)" },
        ],
      },
      {
        id: "brief",
        title: "Tell the desk.",
        kicker: "Your Brief",
        fields: [
          { type: "textarea", id: "additional_requirements", label: "Your request", placeholder: "Where, when, for whom, and anything the desk should know.", required: true },
          { type: "text", id: "destination", label: "Destination (if applicable)", placeholder: "City or country" },
        ],
      },
    ],
  },
};
