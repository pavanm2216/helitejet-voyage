import { r as __toESM } from "../_runtime.mjs";
import { i as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PortalShell } from "./PortalShell-05wq88E0.mjs";
import { n as getRequest } from "./request-service-DC14Uu4j.mjs";
import { t as CUSTOMER_NAV } from "../_customer-nav-n8IhRf13.mjs";
import { t as Route } from "./customer.requests._id-_SPf46PG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/customer.requests._id-DVAap3O1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STATUS_STEPS = [
	"SUBMITTED",
	"UNDER_REVIEW",
	"SALES_CONTACTED",
	"OPTIONS_FOUND",
	"QUOTE_SENT",
	"CUSTOMER_APPROVAL",
	"PAYMENT_PENDING",
	"BOOKED",
	"COMPLETED"
];
var STATUS_LABEL = {
	SUBMITTED: "Submitted",
	UNDER_REVIEW: "Under Review",
	SALES_CONTACTED: "Desk Contacted",
	OPTIONS_FOUND: "Options Found",
	QUOTE_SENT: "Quote Sent",
	CUSTOMER_APPROVAL: "Awaiting Approval",
	PAYMENT_PENDING: "Payment Pending",
	BOOKED: "Booked",
	COMPLETED: "Completed",
	CANCELLED: "Cancelled",
	REJECTED: "Rejected",
	EXPIRED: "Expired"
};
var nav = CUSTOMER_NAV;
function RequestDetail() {
	const { id } = Route.useParams();
	const [request, setRequest] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		getRequest(id).then((data) => setRequest(data)).catch((err) => setError(err instanceof Error ? err.message : "Unable to load request."));
	}, [id]);
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalShell, {
		title: "Request",
		nav,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "border border-red-300/30 p-4 text-sm text-red-100",
			children: error
		})
	});
	if (!request) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalShell, {
		title: "Loading…",
		nav,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: [
				1,
				2,
				3
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 animate-pulse border border-ivory/10 bg-white/[0.02]" }, i))
		})
	});
	const status = String(request.status ?? "SUBMITTED");
	const statusIndex = STATUS_STEPS.indexOf(status);
	const isTerminal = [
		"CANCELLED",
		"REJECTED",
		"EXPIRED"
	].includes(status);
	const serviceDetails = request.service_details ?? {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalShell, {
		title: String(request.request_number ?? "Request"),
		nav,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "whisper text-champagne/80",
						children: "Status"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `whisper ${isTerminal ? "text-red-300" : "text-champagne"}`,
						children: STATUS_LABEL[status] ?? status
					})]
				}), !isTerminal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1",
					children: STATUS_STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-1 transition-all duration-700 ${i <= statusIndex ? "bg-champagne" : "bg-ivory/15"}` })
					}, s))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					["Service", String(request.service_type ?? "")],
					["Type", String(request.service_subtype ?? serviceDetails.subtype ?? "—")],
					["From", String(request.departure ?? "—")],
					["To", String(request.destination ?? "—")],
					["Date", String(request.start_date ?? "—")],
					["Return", String(request.end_date ?? "—")],
					["Guests / Pax", String(request.people_count ?? "—")],
					["Budget", String(serviceDetails.budget_range ?? "—")],
					["Trip Type", String(request.trip_type ?? "—")]
				].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-ivory/10 bg-white/[0.02] p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "whisper text-ivory/40",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-serif text-xl font-light text-ivory",
						children: value
					})]
				}, label))
			}),
			request.additional_requirements && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 border border-ivory/10 bg-white/[0.02] p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "whisper text-ivory/40",
					children: "Additional Requirements"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-serif text-lg font-light leading-relaxed text-ivory/80",
					children: String(request.additional_requirements)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex items-center justify-between border-t border-ivory/10 pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "whisper text-ivory/30",
					children: ["Submitted ", new Date(String(request.created_at)).toLocaleDateString("en-GB", {
						day: "numeric",
						month: "long",
						year: "numeric"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/customer/requests",
					className: "whisper text-ivory/40 transition-colors hover:text-champagne",
					children: "← All requests"
				})]
			})
		]
	});
}
//#endregion
export { RequestDetail as component };
