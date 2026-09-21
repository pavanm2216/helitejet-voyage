import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PortalShell } from "./PortalShell-05wq88E0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.dashboard-rOUVWVwT.js
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	{
		label: "01 Dashboard",
		to: "/admin/dashboard"
	},
	{
		label: "02 Customers",
		to: "/admin/requests"
	},
	{
		label: "03 Sales Team",
		to: "/admin/requests"
	},
	{
		label: "04 Requests",
		to: "/admin/requests"
	},
	{
		label: "05 Aircraft",
		to: "/admin/requests"
	},
	{
		label: "06 Yachts",
		to: "/admin/requests"
	},
	{
		label: "07 Operators",
		to: "/admin/requests"
	},
	{
		label: "08 Quotes",
		to: "/admin/requests"
	},
	{
		label: "09 Bookings",
		to: "/admin/requests"
	},
	{
		label: "10 Voice Assistant",
		to: "/admin/requests"
	},
	{
		label: "11 Analytics",
		to: "/admin/requests"
	},
	{
		label: "12 Pricing",
		to: "/admin/requests"
	},
	{
		label: "13 Content",
		to: "/admin/requests"
	},
	{
		label: "14 Notifications",
		to: "/admin/requests"
	},
	{
		label: "15 Audit Logs",
		to: "/admin/requests"
	},
	{
		label: "16 Settings",
		to: "/admin/requests"
	}
];
function AdminDashboard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalShell, {
		title: "Platform overview",
		nav,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/admin/requests",
					className: "border border-champagne/40 bg-champagne/10 p-6 transition-colors hover:bg-champagne/20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "whisper text-champagne",
						children: "Administration"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-serif text-3xl",
						children: "All requests →"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-white/10 bg-white/[0.03] p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "whisper text-ivory/50",
						children: "Customers"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-serif text-4xl",
						children: "—"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-white/10 bg-white/[0.03] p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "whisper text-ivory/50",
						children: "Bookings"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-serif text-4xl",
						children: "—"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 border border-ivory/10 bg-white/[0.02] p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "whisper text-champagne",
					children: "Admin Bootstrap"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 font-serif text-sm text-ivory/60",
					children: [
						"To create Sales accounts, use the Supabase dashboard or run the SQL below in the Supabase SQL editor. Sales users log in through ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-champagne",
							children: "/login"
						}),
						" and are redirected to their dashboard automatically."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "mt-4 overflow-x-auto border border-ivory/10 bg-obsidian p-4 text-xs text-ivory/50",
					children: `-- Create a Sales user (run in Supabase SQL editor as service role)
-- 1. Create auth user via Supabase Auth dashboard or API
-- 2. Then update their profile role:
UPDATE public.profiles
SET role = 'SALES'
WHERE email = 'sales@example.com';`
				})
			]
		})]
	});
}
//#endregion
export { AdminDashboard as component };
