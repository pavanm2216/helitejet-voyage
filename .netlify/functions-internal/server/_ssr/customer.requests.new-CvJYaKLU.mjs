import { r as __toESM } from "../_runtime.mjs";
import { i as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { s as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as ease } from "./motion-BlAnBXQf.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useAuth } from "./auth-B5gn9oy0.mjs";
import { t as PortalShell } from "./PortalShell-05wq88E0.mjs";
import { t as createRequest } from "./request-service-DC14Uu4j.mjs";
import { t as CUSTOMER_NAV } from "../_customer-nav-n8IhRf13.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/customer.requests.new-CvJYaKLU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var bookingConfig = {
	AVIATION: {
		label: "Aviation",
		description: "Private Jets & Helicopters",
		steps: [
			{
				id: "aircraft",
				title: "Flight or helicopter?",
				kicker: "Aircraft Type",
				fields: [{
					type: "select",
					id: "subtype",
					label: "Aircraft type",
					options: ["Private Jet", "Helicopter"],
					required: true
				}]
			},
			{
				id: "route",
				title: "Where are you flying?",
				kicker: "Route",
				fields: [
					{
						type: "combobox",
						id: "departure",
						label: "Departure airport or city",
						placeholder: "Search airports…",
						options: [
							"London Luton (EGGW)",
							"London Farnborough (EGLF)",
							"London Biggin Hill (EGKB)",
							"London Stansted (EGSS)",
							"Paris Le Bourget (LFPB)",
							"Nice Côte d'Azur (LFMN)",
							"Geneva (LSGG)",
							"Zurich (LSZH)",
							"Milan Linate (LIML)",
							"Rome Ciampino (LIRA)",
							"Madrid Barajas (LEMD)",
							"Barcelona (LEBL)",
							"Dubai (OMDB)",
							"Abu Dhabi (OMAA)",
							"New York Teterboro (KTEB)",
							"Miami Opa-locka (KOPF)",
							"Los Angeles Van Nuys (KVNY)",
							"Maldives Malé (VRMM)",
							"Mykonos (LGMK)",
							"Santorini (LGSR)",
							"Ibiza (LEIB)",
							"Monaco Heliport",
							"Cannes Mandelieu (LFMD)",
							"St Tropez La Môle (LFTZ)"
						],
						required: true
					},
					{
						type: "combobox",
						id: "destination",
						label: "Arrival airport or city",
						placeholder: "Search airports…",
						options: [
							"London Luton (EGGW)",
							"London Farnborough (EGLF)",
							"London Biggin Hill (EGKB)",
							"London Stansted (EGSS)",
							"Paris Le Bourget (LFPB)",
							"Nice Côte d'Azur (LFMN)",
							"Geneva (LSGG)",
							"Zurich (LSZH)",
							"Milan Linate (LIML)",
							"Rome Ciampino (LIRA)",
							"Madrid Barajas (LEMD)",
							"Barcelona (LEBL)",
							"Dubai (OMDB)",
							"Abu Dhabi (OMAA)",
							"New York Teterboro (KTEB)",
							"Miami Opa-locka (KOPF)",
							"Los Angeles Van Nuys (KVNY)",
							"Maldives Malé (VRMM)",
							"Mykonos (LGMK)",
							"Santorini (LGSR)",
							"Ibiza (LEIB)",
							"Monaco Heliport",
							"Cannes Mandelieu (LFMD)",
							"St Tropez La Môle (LFTZ)"
						],
						required: true
					},
					{
						type: "select",
						id: "trip_type",
						label: "Trip type",
						options: ["One Way", "Round Trip"],
						required: true
					}
				]
			},
			{
				id: "dates",
				title: "When do you depart?",
				kicker: "Dates",
				fields: [{
					type: "date",
					id: "start_date",
					label: "Departure date",
					required: true
				}, {
					type: "date",
					id: "end_date",
					label: "Return date (if round trip)"
				}]
			},
			{
				id: "passengers",
				title: "How many passengers?",
				kicker: "Passengers",
				fields: [{
					type: "stepper",
					id: "people_count",
					label: "Passengers",
					min: 1,
					max: 19
				}]
			},
			{
				id: "preferences",
				title: "Any preferences?",
				kicker: "Preferences",
				fields: [{
					type: "select",
					id: "budget_range",
					label: "Budget range",
					options: [
						"Under $25,000",
						"$25,000 – $75,000",
						"$75,000 – $150,000",
						"Above $150,000"
					]
				}, {
					type: "textarea",
					id: "additional_requirements",
					label: "Additional requirements",
					placeholder: "Catering, ground transport, specific aircraft model…"
				}]
			}
		]
	},
	YACHTS: {
		label: "Yachts",
		description: "Yacht Charter & Marine Experiences",
		steps: [
			{
				id: "yacht_type",
				title: "What kind of yacht?",
				kicker: "Yacht Type",
				fields: [{
					type: "select",
					id: "subtype",
					label: "Yacht type",
					options: [
						"Explorer Yacht",
						"Classic Motor Yacht",
						"Sailing Yacht"
					],
					required: true
				}]
			},
			{
				id: "route",
				title: "Where do you want to sail?",
				kicker: "Route",
				fields: [{
					type: "combobox",
					id: "departure",
					label: "Embarkation port",
					placeholder: "Search ports…",
					options: [
						"Monaco",
						"Antibes",
						"Cannes",
						"Nice",
						"St Tropez",
						"Ibiza",
						"Palma de Mallorca",
						"Barcelona",
						"Portofino",
						"Amalfi",
						"Positano",
						"Naples",
						"Capri",
						"Sardinia — Porto Cervo",
						"Sardinia — Olbia",
						"Sicily — Palermo",
						"Athens — Piraeus",
						"Mykonos",
						"Santorini",
						"Corfu",
						"Rhodes",
						"Dubrovnik",
						"Split",
						"Kotor",
						"Istanbul",
						"Bodrum",
						"Marmaris",
						"Dubai Marina",
						"Abu Dhabi",
						"Maldives — Malé"
					],
					required: true
				}, {
					type: "combobox",
					id: "destination",
					label: "Destination or cruising area",
					placeholder: "Search destinations…",
					options: [
						"French Riviera",
						"Amalfi Coast",
						"Greek Islands",
						"Balearic Islands",
						"Sardinia & Corsica",
						"Croatian Coast",
						"Turkish Riviera",
						"Adriatic",
						"Caribbean — St Barts",
						"Caribbean — BVI",
						"Caribbean — Antigua",
						"Maldives",
						"Seychelles",
						"Red Sea",
						"Norwegian Fjords",
						"Iceland",
						"Azores",
						"Canary Islands"
					],
					required: true
				}]
			},
			{
				id: "dates",
				title: "When is your charter?",
				kicker: "Dates",
				fields: [{
					type: "date",
					id: "start_date",
					label: "Embarkation date",
					required: true
				}, {
					type: "date",
					id: "end_date",
					label: "Disembarkation date",
					required: true
				}]
			},
			{
				id: "guests",
				title: "How many guests?",
				kicker: "Guests",
				fields: [{
					type: "stepper",
					id: "people_count",
					label: "Guests",
					min: 2,
					max: 20
				}]
			},
			{
				id: "preferences",
				title: "Any preferences?",
				kicker: "Preferences",
				fields: [{
					type: "select",
					id: "budget_range",
					label: "Weekly budget",
					options: [
						"Under $100,000",
						"$100,000 – $300,000",
						"$300,000 – $600,000",
						"Above $600,000"
					]
				}, {
					type: "textarea",
					id: "additional_requirements",
					label: "Additional requirements",
					placeholder: "Crew language, water toys, dietary requirements…"
				}]
			}
		]
	},
	MOBILITY: {
		label: "Mobility",
		description: "Luxury Cars & Chauffeurs",
		steps: [
			{
				id: "vehicle",
				title: "What do you need?",
				kicker: "Vehicle Type",
				fields: [{
					type: "select",
					id: "subtype",
					label: "Service type",
					options: [
						"Chauffeur Car",
						"Armoured Vehicle",
						"Helicopter Transfer",
						"Tender / Boat Transfer"
					],
					required: true
				}]
			},
			{
				id: "route",
				title: "Where to?",
				kicker: "Route",
				fields: [{
					type: "combobox",
					id: "departure",
					label: "Pickup location",
					placeholder: "Address, airport, hotel…",
					options: [
						"London Heathrow",
						"London Gatwick",
						"London City Airport",
						"London Farnborough",
						"Paris CDG",
						"Paris Le Bourget",
						"Nice Airport",
						"Geneva Airport",
						"Dubai Airport",
						"Dubai Marina",
						"Abu Dhabi Airport",
						"Monaco",
						"Cannes",
						"St Tropez",
						"Ibiza Town",
						"Mykonos Town",
						"Santorini — Oia"
					],
					required: true
				}, {
					type: "combobox",
					id: "destination",
					label: "Drop-off location",
					placeholder: "Address, airport, hotel…",
					options: [
						"London Heathrow",
						"London Gatwick",
						"London City Airport",
						"London Farnborough",
						"Paris CDG",
						"Paris Le Bourget",
						"Nice Airport",
						"Geneva Airport",
						"Dubai Airport",
						"Dubai Marina",
						"Abu Dhabi Airport",
						"Monaco",
						"Cannes",
						"St Tropez",
						"Ibiza Town",
						"Mykonos Town",
						"Santorini — Oia"
					],
					required: true
				}]
			},
			{
				id: "dates",
				title: "When do you need it?",
				kicker: "Date & Time",
				fields: [{
					type: "date",
					id: "start_date",
					label: "Date",
					required: true
				}, {
					type: "text",
					id: "departure",
					label: "Pickup time",
					placeholder: "e.g. 09:30"
				}]
			},
			{
				id: "passengers",
				title: "How many passengers?",
				kicker: "Passengers",
				fields: [{
					type: "stepper",
					id: "people_count",
					label: "Passengers",
					min: 1,
					max: 12
				}, {
					type: "textarea",
					id: "additional_requirements",
					label: "Additional notes",
					placeholder: "Luggage, child seats, security requirements…"
				}]
			}
		]
	},
	RESIDENCES: {
		label: "Residences",
		description: "Villas, Hotels & Private Stays",
		steps: [
			{
				id: "property",
				title: "What kind of property?",
				kicker: "Property Type",
				fields: [{
					type: "select",
					id: "subtype",
					label: "Property type",
					options: [
						"Villa",
						"Penthouse",
						"Chalet",
						"Estate",
						"Private Island"
					],
					required: true
				}]
			},
			{
				id: "destination",
				title: "Where would you like to stay?",
				kicker: "Destination",
				fields: [{
					type: "combobox",
					id: "destination",
					label: "Destination",
					placeholder: "Search destinations…",
					options: [
						"Monaco",
						"Cannes",
						"St Tropez",
						"Ibiza",
						"Mallorca",
						"Marbella",
						"Mykonos",
						"Santorini",
						"Capri",
						"Portofino",
						"Amalfi Coast",
						"Sardinia",
						"Gstaad",
						"St Moritz",
						"Verbier",
						"Courchevel",
						"Aspen",
						"Maldives",
						"Seychelles",
						"Bali",
						"Dubai",
						"Abu Dhabi",
						"New York",
						"Miami",
						"Los Angeles",
						"Paris",
						"London",
						"Tokyo"
					],
					required: true
				}, {
					type: "select",
					id: "setting",
					label: "Setting preference",
					options: [
						"Coastal",
						"City",
						"Alpine",
						"Countryside",
						"Island"
					]
				}]
			},
			{
				id: "dates",
				title: "When is your stay?",
				kicker: "Dates",
				fields: [{
					type: "date",
					id: "start_date",
					label: "Check-in",
					required: true
				}, {
					type: "date",
					id: "end_date",
					label: "Check-out",
					required: true
				}]
			},
			{
				id: "guests",
				title: "How many guests?",
				kicker: "Guests",
				fields: [{
					type: "stepper",
					id: "people_count",
					label: "Guests",
					min: 1,
					max: 20
				}]
			},
			{
				id: "preferences",
				title: "Any preferences?",
				kicker: "Preferences",
				fields: [{
					type: "select",
					id: "budget_range",
					label: "Weekly budget",
					options: [
						"Under $50,000",
						"$50,000 – $150,000",
						"$150,000 – $300,000",
						"Above $300,000"
					]
				}, {
					type: "textarea",
					id: "additional_requirements",
					label: "Additional requirements",
					placeholder: "Staff, chef, security, pet-friendly…"
				}]
			}
		]
	},
	EXPERIENCES: {
		label: "Experiences",
		description: "Curated Moments & Lasting Memories",
		steps: [
			{
				id: "category",
				title: "What kind of experience?",
				kicker: "Category",
				fields: [{
					type: "select",
					id: "subtype",
					label: "Category",
					options: [
						"Gastronomy",
						"Art & Culture",
						"Wellness",
						"Adventure",
						"Sport & Motorsport",
						"Celebration",
						"Fashion & Craft",
						"Nature & Wildlife"
					],
					required: true
				}]
			},
			{
				id: "destination",
				title: "Where should it happen?",
				kicker: "Destination",
				fields: [{
					type: "combobox",
					id: "destination",
					label: "Destination or location",
					placeholder: "Search destinations…",
					options: [
						"Paris",
						"London",
						"New York",
						"Tokyo",
						"Dubai",
						"Monaco",
						"Maldives",
						"Seychelles",
						"Bali",
						"Mykonos",
						"Santorini",
						"Ibiza",
						"Amalfi Coast",
						"Tuscany",
						"Marrakech",
						"Cape Town",
						"Aspen",
						"Gstaad",
						"St Moritz",
						"Open to suggestions"
					],
					required: true
				}]
			},
			{
				id: "dates",
				title: "When?",
				kicker: "Dates",
				fields: [{
					type: "date",
					id: "start_date",
					label: "Date",
					required: true
				}, {
					type: "date",
					id: "end_date",
					label: "End date (if multi-day)"
				}]
			},
			{
				id: "guests",
				title: "How many guests?",
				kicker: "Guests",
				fields: [{
					type: "stepper",
					id: "people_count",
					label: "Guests",
					min: 1,
					max: 50
				}]
			},
			{
				id: "brief",
				title: "Tell us more.",
				kicker: "Brief",
				fields: [{
					type: "select",
					id: "budget_range",
					label: "Budget",
					options: [
						"Under $25,000",
						"$25,000 – $100,000",
						"$100,000 – $500,000",
						"Above $500,000"
					]
				}, {
					type: "textarea",
					id: "additional_requirements",
					label: "Your brief",
					placeholder: "The more you tell us, the better we can compose it.",
					required: true
				}]
			}
		]
	},
	CONCIERGE: {
		label: "Concierge",
		description: "Personal Assistance",
		steps: [
			{
				id: "type",
				title: "What do you need?",
				kicker: "Request Type",
				fields: [{
					type: "select",
					id: "subtype",
					label: "Nature of request",
					options: [
						"Aviation",
						"Yachts",
						"Mobility",
						"Residences",
						"Experiences",
						"Destinations",
						"Other"
					],
					required: true
				}]
			},
			{
				id: "timeframe",
				title: "When do you need it?",
				kicker: "Timeframe",
				fields: [{
					type: "select",
					id: "timeframe",
					label: "Timeframe",
					options: [
						"Today",
						"Within the week",
						"Within the month",
						"Planning ahead"
					],
					required: true
				}, {
					type: "date",
					id: "start_date",
					label: "Specific date (if known)"
				}]
			},
			{
				id: "brief",
				title: "Tell the desk.",
				kicker: "Your Brief",
				fields: [{
					type: "textarea",
					id: "additional_requirements",
					label: "Your request",
					placeholder: "Where, when, for whom, and anything the desk should know.",
					required: true
				}, {
					type: "text",
					id: "destination",
					label: "Destination (if applicable)",
					placeholder: "City or country"
				}]
			}
		]
	}
};
var SERVICES = [
	"AVIATION",
	"YACHTS",
	"MOBILITY",
	"RESIDENCES",
	"EXPERIENCES",
	"CONCIERGE"
];
function ServiceSelector({ onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "whisper text-champagne/80",
			children: "New Request"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-4 font-serif text-5xl font-light text-ivory",
			children: "What can we arrange?"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
			children: SERVICES.map((key) => {
				const c = bookingConfig[key];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onSelect(key),
					className: "group border border-ivory/10 bg-white/[0.02] p-6 text-left transition-all duration-300 hover:border-champagne/40 hover:bg-champagne/[0.06]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-2xl font-light text-ivory",
							children: c.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 whisper text-ivory/40",
							children: c.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-6 block h-px w-8 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" })
					]
				}, key);
			})
		})
	] });
}
function StepperField({ label, value, min = 1, max = 50, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "whisper text-ivory/45",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 flex items-center gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onChange(Math.max(min, value - 1)),
				className: "flex h-12 w-12 items-center justify-center border border-ivory/20 text-2xl text-ivory/60 transition-colors hover:border-champagne hover:text-champagne",
				children: "−"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-serif text-6xl font-light text-ivory",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onChange(Math.min(max, value + 1)),
				className: "flex h-12 w-12 items-center justify-center border border-ivory/20 text-2xl text-ivory/60 transition-colors hover:border-champagne hover:text-champagne",
				children: "+"
			})
		]
	})] });
}
function ComboboxField({ field, value, onChange }) {
	const [query, setQuery] = (0, import_react.useState)(value);
	const [open, setOpen] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	const filtered = query.length > 0 ? field.options.filter((o) => o.toLowerCase().includes(query.toLowerCase())) : field.options;
	const showCustomOption = query.length > 0 && !field.options.some((o) => o.toLowerCase() === query.toLowerCase());
	(0, import_react.useEffect)(() => {
		function handleClick(e) {
			if (ref.current && !ref.current.contains(e.target)) setOpen(false);
		}
		document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	}, []);
	const select = (opt) => {
		setQuery(opt);
		onChange(opt);
		setOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "whisper text-ivory/45",
				children: [field.label, field.required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold",
					children: " *"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "text",
				value: query,
				placeholder: field.placeholder,
				className: "field",
				onFocus: () => setOpen(true),
				onChange: (e) => {
					setQuery(e.target.value);
					onChange(e.target.value);
					setOpen(true);
				},
				autoComplete: "off"
			})]
		}), open && (filtered.length > 0 || showCustomOption) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "absolute z-50 mt-1 max-h-56 w-full overflow-y-auto border border-ivory/15 bg-[#0d0d0d] py-1 shadow-xl",
			children: [filtered.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				onMouseDown: () => select(opt),
				className: `cursor-pointer px-4 py-3 font-serif text-base font-light transition-colors hover:bg-champagne/10 hover:text-champagne ${opt === value ? "text-champagne" : "text-ivory/80"}`,
				children: opt
			}, opt)), showCustomOption && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				onMouseDown: () => select(query),
				className: "cursor-pointer px-4 py-3 font-serif text-base font-light text-ivory/50 transition-colors hover:bg-champagne/10 hover:text-champagne",
				children: [
					"Use “",
					query,
					"”"
				]
			})]
		})]
	});
}
function FieldRenderer({ field, values, onChange }) {
	const val = values[field.id];
	if (field.type === "combobox") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComboboxField, {
		field,
		value: String(val ?? ""),
		onChange: (v) => onChange(field.id, v)
	});
	if (field.type === "stepper") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepperField, {
		label: field.label,
		value: Number(val) || field.min || 1,
		min: field.min,
		max: field.max,
		onChange: (v) => onChange(field.id, v)
	});
	if (field.type === "select") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "whisper text-ivory/45",
			children: [field.label, field.required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gold",
				children: " *"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			value: String(val ?? ""),
			onChange: (e) => onChange(field.id, e.target.value),
			className: "field appearance-none bg-transparent",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "",
				className: "bg-obsidian",
				children: "—"
			}), field.options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: o,
				className: "bg-obsidian",
				children: o
			}, o))]
		})]
	});
	if (field.type === "textarea") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "whisper text-ivory/45",
			children: [field.label, field.required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gold",
				children: " *"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			rows: 4,
			value: String(val ?? ""),
			onChange: (e) => onChange(field.id, e.target.value),
			placeholder: field.placeholder,
			className: "field resize-none"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "whisper text-ivory/45",
			children: [field.label, field.required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gold",
				children: " *"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: field.type,
			value: String(val ?? ""),
			onChange: (e) => onChange(field.id, e.target.value),
			placeholder: "placeholder" in field ? field.placeholder : void 0,
			className: "field"
		})]
	});
}
function ReviewRow({ label, value }) {
	if (!value) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-b border-ivory/10 py-4 grid grid-cols-[140px_1fr] gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whisper text-ivory/40",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-serif text-lg font-light text-ivory",
			children: value
		})]
	});
}
function BookingWizard({ profile }) {
	const navigate = useNavigate();
	const [service, setService] = (0, import_react.useState)(null);
	const [stepIndex, setStepIndex] = (0, import_react.useState)(0);
	const [values, setValues] = (0, import_react.useState)({ people_count: 2 });
	const [error, setError] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	const config = service ? bookingConfig[service] : null;
	const steps = config?.steps ?? [];
	const isReview = service !== null && stepIndex === steps.length;
	const currentStep = steps[stepIndex];
	const update = (id, v) => setValues((prev) => ({
		...prev,
		[id]: v
	}));
	const validate = () => {
		if (!currentStep) return "";
		for (const field of currentStep.fields) if (field.required && !values[field.id]) return `Please complete: ${field.label}`;
		return "";
	};
	const next = () => {
		const err = validate();
		if (err) {
			setError(err);
			return;
		}
		setError("");
		setStepIndex((i) => i + 1);
	};
	const back = () => {
		setError("");
		if (stepIndex === 0) {
			setService(null);
			return;
		}
		setStepIndex((i) => i - 1);
	};
	const submit = async (e) => {
		e.preventDefault();
		setPending(true);
		setError("");
		try {
			const req = await createRequest({
				serviceType: service,
				serviceSubtype: String(values.subtype ?? ""),
				peopleCount: Number(values.people_count) || 1,
				budget: void 0,
				currency: "EUR",
				departure: String(values.departure ?? ""),
				destination: String(values.destination ?? ""),
				startDate: String(values.start_date ?? ""),
				endDate: String(values.end_date ?? ""),
				tripType: String(values.trip_type ?? "ONE_WAY"),
				additionalRequirements: String(values.additional_requirements ?? ""),
				customerDetails: {
					name: profile?.full_name ?? "",
					email: profile?.email ?? "",
					mobile: profile?.mobile ?? "",
					country: profile?.country ?? ""
				},
				serviceDetails: {
					subtype: values.subtype,
					timeframe: values.timeframe,
					setting: values.setting,
					budget_range: values.budget_range
				}
			});
			await navigate({
				to: "/customer/requests/$id",
				params: { id: req.id }
			});
		} catch (err) {
			setError(err instanceof Error ? err.message : "Unable to submit. Please try again.");
			setPending(false);
		}
	};
	if (!service) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceSelector, { onSelect: (s) => {
		setService(s);
		setStepIndex(0);
		setValues({ people_count: 2 });
	} });
	const totalSteps = steps.length + 1;
	const currentNum = isReview ? totalSteps : stepIndex + 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 flex items-center gap-3",
				children: [Array.from({ length: totalSteps }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-px flex-1 transition-all duration-500 ${i < currentNum ? "bg-champagne" : "bg-ivory/15"}` }, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "whisper text-ivory/40 shrink-0",
					children: [
						currentNum,
						" / ",
						totalSteps
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: !isReview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: 24,
						filter: "blur(8px)"
					},
					animate: {
						opacity: 1,
						x: 0,
						filter: "blur(0px)"
					},
					exit: {
						opacity: 0,
						x: -24,
						filter: "blur(8px)"
					},
					transition: {
						duration: .45,
						ease
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "whisper text-champagne/80",
							children: [
								config?.label,
								" · ",
								currentStep?.kicker
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-serif text-4xl font-light leading-tight text-ivory md:text-5xl",
							children: currentStep?.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 space-y-8 max-w-lg",
							children: currentStep?.fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRenderer, {
								field,
								values,
								onChange: update
							}, field.id))
						})
					]
				}, stepIndex) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: 24,
						filter: "blur(8px)"
					},
					animate: {
						opacity: 1,
						x: 0,
						filter: "blur(0px)"
					},
					exit: {
						opacity: 0,
						x: -24,
						filter: "blur(8px)"
					},
					transition: {
						duration: .45,
						ease
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "whisper text-champagne/80",
							children: "Review"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-serif text-4xl font-light text-ivory",
							children: "Confirm your request."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 max-w-lg border-t border-ivory/10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewRow, {
									label: "Service",
									value: config?.label ?? ""
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewRow, {
									label: "Type",
									value: String(values.subtype ?? "")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewRow, {
									label: "From",
									value: String(values.departure ?? "")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewRow, {
									label: "To / Destination",
									value: String(values.destination ?? "")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewRow, {
									label: "Date",
									value: String(values.start_date ?? "")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewRow, {
									label: "Return",
									value: String(values.end_date ?? "")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewRow, {
									label: "Guests / Pax",
									value: String(values.people_count ?? "")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewRow, {
									label: "Budget",
									value: String(values.budget_range ?? "")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewRow, {
									label: "Timeframe",
									value: String(values.timeframe ?? "")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewRow, {
									label: "Notes",
									value: String(values.additional_requirements ?? "")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 whisper text-ivory/35",
							children: "Submitted to the HELITEJET desk. A concierge will be in touch within the hour."
						})
					]
				}, "review")
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "mt-6 border border-red-300/30 p-3 text-sm text-red-100",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex items-center justify-between border-t border-ivory/10 pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: back,
					className: "whisper text-ivory/50 transition-colors hover:text-champagne",
					children: "← Back"
				}), !isReview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: next,
					className: "group inline-flex items-center gap-4 whisper text-champagne transition-colors hover:text-ivory",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Next" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative block h-px w-12 overflow-hidden bg-gold/50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 origin-left scale-x-0 bg-ivory transition-transform duration-500 group-hover:scale-x-100" })
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					disabled: pending,
					className: "group inline-flex items-center gap-4 whisper text-champagne transition-colors hover:text-ivory disabled:opacity-50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: pending ? "Submitting…" : "Submit Request" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative block h-px w-12 overflow-hidden bg-gold/50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 origin-left scale-x-0 bg-ivory transition-transform duration-500 group-hover:scale-x-100" })
					})]
				})]
			})
		]
	});
}
function NewRequest() {
	const { profile } = useAuth();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalShell, {
		title: "New request",
		nav: CUSTOMER_NAV,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingWizard, { profile })
	});
}
//#endregion
export { NewRequest as component };
