import { h as subscriptionContent } from "./site-FtusKPuW.mjs";
import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useAuth } from "./auth-B5gn9oy0.mjs";
import { t as PortalShell } from "./PortalShell-05wq88E0.mjs";
import { t as CUSTOMER_NAV } from "../_customer-nav-n8IhRf13.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/customer.dashboard-BhRGro9B.js
var import_jsx_runtime = require_jsx_runtime();
var CLUB_MAP = {
	HORIZON: {
		...subscriptionContent.clubs[0],
		price: "£12,000 / year"
	},
	RESERVE: {
		...subscriptionContent.clubs[1],
		price: "£28,000 / year"
	},
	HOUSE: {
		...subscriptionContent.clubs[2],
		price: "£65,000 / year"
	}
};
function CustomerDashboard() {
	const { profile } = useAuth();
	const club = profile?.subscription_club ? CLUB_MAP[profile.subscription_club] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalShell, {
		title: `Good evening, ${profile?.full_name?.split(" ")[0] ?? "member"}.`,
		nav: CUSTOMER_NAV,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-white/10 bg-white/[0.03] p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "whisper text-ivory/50",
						children: "Active requests"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-serif text-4xl",
						children: "0"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-white/10 bg-white/[0.03] p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "whisper text-ivory/50",
						children: "Pending quotes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-serif text-4xl",
						children: "0"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/customer/requests/new",
					className: "border border-champagne/40 bg-champagne/10 p-6 transition-colors hover:bg-champagne/20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "whisper text-champagne",
						children: "Begin"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-serif text-3xl",
						children: "New request →"
					})]
				})
			]
		}), club ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mt-8 border p-6 bg-white/[0.03] ${profile?.subscription_status === "ACTIVE" ? "border-gold/30" : "border-champagne/20"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "whisper text-champagne/80",
									children: club.tag
								}),
								profile?.subscription_status === "PENDING" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "whisper text-champagne/50",
									children: "· Awaiting confirmation"
								}),
								profile?.subscription_status === "ACTIVE" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "whisper text-gold",
									children: "· Active"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-serif text-3xl font-light text-ivory",
							children: club.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-serif text-base font-light text-ivory/60",
							children: club.blurb
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/customer/subscription",
						className: "whisper shrink-0 text-champagne hover:text-ivory transition-colors",
						children: profile?.subscription_status === "PENDING" ? "View request →" : "View benefits →"
					})]
				}),
				profile?.subscription_status === "ACTIVE" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid gap-2 sm:grid-cols-2",
					children: club.perks.map((perk) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 text-ivory/65",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-1.5 w-1.5 rounded-full bg-gold shrink-0",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-sm font-light",
							children: perk
						})]
					}, perk))
				}),
				profile?.subscription_status === "PENDING" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-serif text-sm font-light text-ivory/45",
					children: "The desk will contact you within 24 hours to arrange payment."
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 border border-white/10 bg-white/[0.03] p-6 flex items-center justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "whisper text-ivory/50",
				children: "No active subscription"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-serif text-lg font-light text-ivory/70",
				children: "Explore our clubs to unlock priority access and dedicated benefits."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/customer/subscription",
				className: "whisper shrink-0 text-champagne hover:text-ivory transition-colors",
				children: "Explore clubs →"
			})]
		})]
	});
}
//#endregion
export { CustomerDashboard as component };
