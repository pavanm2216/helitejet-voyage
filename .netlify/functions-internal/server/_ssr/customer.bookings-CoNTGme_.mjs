import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PortalShell } from "./PortalShell-05wq88E0.mjs";
import { t as CUSTOMER_NAV } from "../_customer-nav-n8IhRf13.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/customer.bookings-CoNTGme_.js
var import_jsx_runtime = require_jsx_runtime();
function Bookings() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalShell, {
		title: "Bookings",
		nav: CUSTOMER_NAV,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border border-dashed border-white/15 p-10 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-2xl font-light text-ivory/50",
				children: "No confirmed bookings yet."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 whisper text-ivory/30",
				children: "Confirmed arrangements will appear here."
			})]
		})
	});
}
//#endregion
export { Bookings as component };
