import { r as __toESM } from "../_runtime.mjs";
import { i as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link, f as useMatchRoute, p as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PortalShell } from "./PortalShell-05wq88E0.mjs";
import { r as listCustomerRequests } from "./request-service-DC14Uu4j.mjs";
import { t as CUSTOMER_NAV } from "../_customer-nav-n8IhRf13.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/customer.requests-DMSCUc7L.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nav = CUSTOMER_NAV;
var STATUS_COLOR = {
	SUBMITTED: "text-ivory/60",
	UNDER_REVIEW: "text-champagne",
	SALES_CONTACTED: "text-champagne",
	OPTIONS_FOUND: "text-gold",
	QUOTE_SENT: "text-gold",
	CUSTOMER_APPROVAL: "text-gold",
	PAYMENT_PENDING: "text-gold",
	BOOKED: "text-green-300",
	COMPLETED: "text-green-300",
	CANCELLED: "text-red-300",
	REJECTED: "text-red-300",
	EXPIRED: "text-red-300"
};
function RequestsList() {
	const [requests, setRequests] = (0, import_react.useState)([]);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		listCustomerRequests().then((data) => setRequests(data)).catch((err) => setError(err instanceof Error ? err.message : "Unable to load requests."));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalShell, {
		title: "My requests",
		nav,
		children: [
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "border border-red-300/30 p-4 text-sm text-red-100",
				children: error
			}),
			!error && !requests.length && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-dashed border-white/15 p-10 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-2xl font-light text-ivory/50",
					children: "No requests yet."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/customer/requests/new",
					className: "mt-6 inline-block whisper text-champagne transition-colors hover:text-ivory",
					children: "Make your first request →"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: requests.map((req) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/customer/requests/$id",
					params: { id: String(req.id) },
					className: "group flex items-center justify-between border border-ivory/10 bg-white/[0.02] p-5 transition-colors hover:border-champagne/30 hover:bg-champagne/[0.04]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "whisper text-champagne/80",
							children: String(req.request_number)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-serif text-2xl font-light text-ivory",
							children: String(req.service_type)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-ivory/50",
							children: [
								String(req.destination ?? "Destination TBC"),
								req.start_date ? ` · ${String(req.start_date)}` : "",
								req.people_count ? ` · ${String(req.people_count)} guests` : ""
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `whisper ${STATUS_COLOR[String(req.status)] ?? "text-ivory/50"}`,
							children: String(req.status).replace(/_/g, " ")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-ivory/30 transition-colors group-hover:text-champagne",
							children: "→"
						})]
					})]
				}, String(req.id)))
			})
		]
	});
}
function Requests() {
	return useMatchRoute()({
		to: "/customer/requests",
		fuzzy: false
	}) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequestsList, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
}
//#endregion
export { Requests as component };
