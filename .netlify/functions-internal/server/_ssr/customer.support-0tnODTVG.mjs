import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PortalShell } from "./PortalShell-05wq88E0.mjs";
import { t as CUSTOMER_NAV } from "../_customer-nav-n8IhRf13.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/customer.support-0tnODTVG.js
var import_jsx_runtime = require_jsx_runtime();
function Support() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalShell, {
		title: "Support",
		nav: CUSTOMER_NAV,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6 max-w-lg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-ivory/10 bg-white/[0.02] p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-xl font-light text-ivory",
						children: "Concierge desk"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 whisper text-ivory/40",
						children: "Available 24 / 7"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:desk@helitejet.com",
						className: "mt-4 block whisper text-champagne transition-colors hover:text-ivory",
						children: "desk@helitejet.com →"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-ivory/10 bg-white/[0.02] p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-xl font-light text-ivory",
						children: "Emergency line"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 whisper text-ivory/40",
						children: "For time-critical arrangements"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "tel:+442079460330",
						className: "mt-4 block whisper text-champagne transition-colors hover:text-ivory",
						children: "+44 20 7946 0330 →"
					})
				]
			})]
		})
	});
}
//#endregion
export { Support as component };
