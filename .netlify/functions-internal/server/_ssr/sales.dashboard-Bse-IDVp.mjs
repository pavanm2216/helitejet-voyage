import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useAuth } from "./auth-B5gn9oy0.mjs";
import { t as PortalShell } from "./PortalShell-05wq88E0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sales.dashboard-Bse-IDVp.js
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	{
		label: "01 Dashboard",
		to: "/sales/dashboard"
	},
	{
		label: "02 Requests",
		to: "/sales/requests"
	},
	{
		label: "03 My Requests",
		to: "/sales/requests"
	},
	{
		label: "04 Customers",
		to: "/sales/requests"
	},
	{
		label: "05 Aviation",
		to: "/sales/requests"
	},
	{
		label: "06 Yachts",
		to: "/sales/requests"
	},
	{
		label: "07 Quotes",
		to: "/sales/requests"
	},
	{
		label: "08 Bookings",
		to: "/sales/requests"
	},
	{
		label: "09 Messages",
		to: "/sales/requests"
	},
	{
		label: "10 Follow-ups",
		to: "/sales/requests"
	},
	{
		label: "11 Documents",
		to: "/sales/requests"
	},
	{
		label: "12 Profile",
		to: "/sales/requests"
	}
];
function SalesDashboard() {
	const { profile } = useAuth();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalShell, {
		title: `Good evening, ${profile?.full_name?.split(" ")[0] ?? "concierge"}.`,
		nav,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/sales/requests",
					className: "border border-champagne/40 bg-champagne/10 p-6 transition-colors hover:bg-champagne/20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "whisper text-champagne",
						children: "Operations"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-serif text-3xl",
						children: "Open requests →"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-white/10 bg-white/[0.03] p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "whisper text-ivory/50",
						children: "Quotes pending"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-serif text-4xl",
						children: "0"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-white/10 bg-white/[0.03] p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "whisper text-ivory/50",
						children: "Bookings"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-serif text-4xl",
						children: "0"
					})]
				})
			]
		})
	});
}
//#endregion
export { SalesDashboard as component };
