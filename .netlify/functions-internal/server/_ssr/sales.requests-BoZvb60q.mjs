import { r as __toESM } from "../_runtime.mjs";
import { i as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as PortalShell } from "./PortalShell-05wq88E0.mjs";
import { i as listStaffRequests } from "./request-service-DC14Uu4j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sales.requests-BoZvb60q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SalesRequests() {
	const [requests, setRequests] = (0, import_react.useState)([]);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		listStaffRequests().then((data) => setRequests(data)).catch((err) => setError(err instanceof Error ? err.message : "Unable to load requests."));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalShell, {
		title: "Requests",
		nav: [{
			label: "Dashboard",
			to: "/sales/dashboard"
		}, {
			label: "Requests",
			to: "/sales/requests"
		}],
		children: [
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "border border-red-300/30 p-4 text-red-100",
				children: error
			}),
			!error && !requests.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "border border-dashed border-white/15 p-10 text-center text-ivory/50",
				children: "No requests found."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: requests.map((request) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border border-white/10 p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "whisper text-champagne",
								children: String(request.request_number)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-serif text-2xl",
								children: String(request.service_type)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-ivory/50",
								children: [
									String(request.destination ?? "Pending destination"),
									" · ",
									String(request.people_count),
									" people"
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-champagne",
							children: String(request.status)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 border-t border-white/10 pt-3 text-xs text-ivory/50",
						children: [
							"Customer ID: ",
							String(request.customer_id),
							" · Documents: ",
							Array.isArray(request.request_documents) ? request.request_documents.length : 0
						]
					})]
				}, String(request.id)))
			})
		]
	});
}
//#endregion
export { SalesRequests as component };
