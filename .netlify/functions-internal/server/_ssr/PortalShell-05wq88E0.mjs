import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link, l as useRouterState, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useAuth } from "./auth-B5gn9oy0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PortalShell-05wq88E0.js
var import_jsx_runtime = require_jsx_runtime();
function PortalShell({ children, title, nav, onLogout }) {
	const { profile, logout } = useAuth();
	const navigate = useNavigate();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	async function handleLogout() {
		if (onLogout) {
			onLogout();
			return;
		}
		await logout();
		await navigate({ to: "/login" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-obsidian text-ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-white/10 px-5 py-3 lg:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "font-serif text-xl tracking-[0.2em] text-ivory",
				children: "HJ"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => void handleLogout(),
				className: "whisper text-ivory/40 transition-colors hover:text-champagne",
				children: "Logout →"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl gap-8 p-5 sm:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hidden w-64 shrink-0 lg:block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "font-serif text-2xl tracking-[0.2em] text-ivory",
						children: "HJ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 whisper text-champagne",
						children: profile?.role ?? "PORTAL"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-ivory/40",
						children: profile?.full_name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-10 space-y-1",
						children: nav.map((item) => {
							const active = pathname === item.to;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: `block border px-3 py-2 text-sm transition-colors ${active ? "border-champagne/30 bg-champagne/10 text-champagne" : "border-transparent text-ivory/55 hover:border-white/10 hover:text-ivory"}`,
								children: item.label
							}, item.label);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => void handleLogout(),
						className: "mt-10 whisper text-ivory/40 transition-colors hover:text-champagne",
						children: "Logout →"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "mb-8 border-b border-white/10 pb-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "whisper text-champagne",
							children: "Private portal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-serif text-5xl font-light",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-ivory/50",
							children: profile?.email
						})
					]
				}), children]
			})]
		})]
	});
}
//#endregion
export { PortalShell as t };
