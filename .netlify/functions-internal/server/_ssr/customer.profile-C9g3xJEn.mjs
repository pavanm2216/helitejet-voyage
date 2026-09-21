import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as useAuth } from "./auth-B5gn9oy0.mjs";
import { t as PortalShell } from "./PortalShell-05wq88E0.mjs";
import { t as CUSTOMER_NAV } from "../_customer-nav-n8IhRf13.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/customer.profile-C9g3xJEn.js
var import_jsx_runtime = require_jsx_runtime();
function Profile() {
	const { profile } = useAuth();
	const rows = [
		["Full name", profile?.full_name ?? "—"],
		["Email", profile?.email ?? "—"],
		["Mobile", profile?.mobile ?? "—"],
		["Country", profile?.country ?? "—"],
		["Company", profile?.company ?? "—"],
		["Club", profile?.subscription_club ?? "No active subscription"],
		["Club status", profile?.subscription_status ?? "—"]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalShell, {
		title: "Profile",
		nav: CUSTOMER_NAV,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-lg border-t border-ivory/10",
			children: rows.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[140px_1fr] gap-4 border-b border-ivory/10 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "whisper text-ivory/40",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-serif text-lg font-light text-ivory",
					children: value
				})]
			}, label))
		})
	});
}
//#endregion
export { Profile as component };
