import { r as __toESM } from "../_runtime.mjs";
import { _ as worlds, h as subscriptionContent } from "./site-FtusKPuW.mjs";
import { i as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { s as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as ease } from "./motion-BlAnBXQf.mjs";
import { _ as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CinematicPage } from "./CinematicPage-CPGJjItP.mjs";
import { l as SubscriptionsSections } from "./sections-CnoRkywO.mjs";
import { t as supabase } from "./client-BuyXFJoz.mjs";
import { a as useAuth } from "./auth-B5gn9oy0.mjs";
import { a as TextArea, i as SubmitLine, n as Received, r as SelectField, t as GlassPanel } from "./fields-CwZRJ04l.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/customer.subscription-CmyVixTT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
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
var PAYMENT_METHODS = [
	"Bank Transfer (SWIFT / IBAN)",
	"Bank Transfer (Domestic)",
	"Cheque",
	"Cryptocurrency",
	"Other — desk will advise"
];
function CustomerSubscription() {
	const { profile, logout, refreshProfile } = useAuth();
	const navigate = useNavigate();
	const [requestingClub, setRequestingClub] = (0, import_react.useState)(null);
	const [paymentMethod, setPaymentMethod] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	async function handleLogout() {
		await logout();
		await navigate({ to: "/login" });
	}
	function openRequest(key) {
		setRequestingClub(key);
		setPaymentMethod("");
		setMessage("");
		setDone(false);
		setError(null);
	}
	function closeRequest() {
		setRequestingClub(null);
		setDone(false);
		setError(null);
	}
	async function handleSubmit(e) {
		e.preventDefault();
		if (!requestingClub || !profile) return;
		if (!paymentMethod) {
			setError("Please select a payment method.");
			return;
		}
		setSubmitting(true);
		setError(null);
		const { error: insertError } = await supabase.from("subscription_requests").insert({
			customer_id: profile.id,
			club: requestingClub,
			payment_method: paymentMethod,
			billing_cycle: "YEARLY",
			message: message || null,
			status: "PENDING"
		});
		if (insertError) {
			setError("Something went wrong. Please try again.");
			setSubmitting(false);
			return;
		}
		await supabase.from("profiles").update({
			subscription_club: requestingClub,
			subscription_status: "PENDING"
		}).eq("id", profile.id);
		await refreshProfile();
		setSubmitting(false);
		setDone(true);
	}
	const club = requestingClub ? CLUB_MAP[requestingClub] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/10 bg-obsidian/90 px-6 py-3 backdrop-blur-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/customer/dashboard",
						className: "whisper text-ivory/50 transition-colors hover:text-champagne",
						children: "← Dashboard"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "whisper text-ivory/30",
						children: "Private Portal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => void handleLogout(),
						className: "whisper text-ivory/40 transition-colors hover:text-champagne",
						children: "Logout →"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-[45px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CinematicPage, {
					world: worlds.subscriptions,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubscriptionsSections, {
						activeClub: profile?.subscription_club ?? null,
						activeStatus: profile?.subscription_status ?? null,
						onSelect: openRequest,
						selecting: null
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: requestingClub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				transition: {
					duration: .5,
					ease
				},
				className: "fixed inset-0 z-[60] flex items-center justify-center bg-obsidian/80 px-5 backdrop-blur-sm",
				onClick: (e) => {
					if (e.target === e.currentTarget) closeRequest();
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 40
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: 24
					},
					transition: {
						duration: .6,
						ease
					},
					className: "w-full max-w-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassPanel, {
						className: "px-8 py-10 md:px-12 md:py-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								exit: { opacity: 0 },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Received, {
									title: "Request received.",
									body: "The desk will contact you within 24 hours to arrange payment and activate your club."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-10 text-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: closeRequest,
										className: "whisper text-ivory/40 transition-colors hover:text-champagne",
										children: "Close"
									})
								})]
							}, "done") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								exit: { opacity: 0 },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-8 flex items-start justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "whisper text-champagne/80",
												children: club?.tag
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "mt-2 font-serif text-3xl font-light text-ivory",
												children: club?.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 font-serif text-lg font-light text-champagne/70",
												children: [club?.price, " · Billed annually"]
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: closeRequest,
											"aria-label": "Close",
											className: "whisper text-ivory/30 transition-colors hover:text-ivory mt-1",
											children: "✕"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-8 border border-white/10 bg-white/[0.03] px-5 py-4 space-y-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "whisper text-ivory/40",
												children: "Member details — pre-filled from your profile"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-serif text-base font-light text-ivory/70",
												children: profile?.full_name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-serif text-sm font-light text-ivory/50",
												children: profile?.email
											}),
											profile?.mobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-serif text-sm font-light text-ivory/50",
												children: profile.mobile
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										onSubmit: (e) => void handleSubmit(e),
										className: "space-y-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
												label: "Preferred payment method",
												name: "payment_method",
												options: PAYMENT_METHODS,
												required: true,
												value: paymentMethod,
												onChange: (e) => setPaymentMethod(e.target.value)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
												label: "Message to the desk",
												name: "message",
												placeholder: "Any questions or preferences before the desk calls.",
												value: message,
												onChange: (e) => setMessage(e.target.value)
											}),
											error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												role: "alert",
												className: "font-serif text-base italic text-red-400",
												children: error
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between gap-6 border-t border-white/10 pt-6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubmitLine, {
													pending: submitting,
													children: "Send request"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "whisper !normal-case !tracking-[0.12em] text-ivory/30",
													children: "Held in confidence."
												})]
											})
										]
									})
								]
							}, "form")
						})
					})
				})
			}, "overlay") })
		]
	});
}
//#endregion
export { CustomerSubscription as component };
