import { r as __toESM } from "../_runtime.mjs";
import { m as scenes, r as brand, u as menu } from "./site-FtusKPuW.mjs";
import { i as require_jsx_runtime, n as QueryClientProvider, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, n as useSpring, s as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as useCinematicMotion, t as ease } from "./motion-BlAnBXQf.mjs";
import { _ as Link, c as HeadContent, d as createRouter, g as createRootRouteWithContext, h as createFileRoute, l as useRouterState, m as lazyRouteComponent, p as Outlet, s as Scripts, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ScrollTrack, s as worldHead } from "./CinematicPage-CPGJjItP.mjs";
import { t as world } from "./about-FkVTGito.mjs";
import { a as useAuth, i as requireRoleAccess, r as requireGuestAccess, t as AuthProvider } from "./auth-B5gn9oy0.mjs";
import { t as world$1 } from "./aviation-DZrwuTdN.mjs";
import { t as world$2 } from "./concierge-C9XR3jR3.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Route$32 } from "./customer.requests._id-_SPf46PG.mjs";
import { t as world$3 } from "./destinations-CFo-RTjh.mjs";
import { t as world$4 } from "./experiences-CCgZM2ld.mjs";
import { t as world$5 } from "./membership-ISpdUxOY.mjs";
import { t as world$6 } from "./mobility-4iFjepX4.mjs";
import { t as world$7 } from "./private-BSiSGLLd.mjs";
import { t as world$8 } from "./request-access-B70GrsN6.mjs";
import { t as world$9 } from "./residences-CkeY8YJv.mjs";
import { t as world$10 } from "./routes-CFCY44xk.mjs";
import { t as world$11 } from "./subscriptions-Ccfd14m_.mjs";
import { t as world$12 } from "./yachts-D2mM800O.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CYkItIuk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Bc9WGYSS.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
/**
* Fullscreen navigation. Sits above every layer, locks the page behind it,
* scrolls independently so no choice is ever clipped, and keeps CLOSE in view.
*/
function NavigationOverlay({ open, current, onClose }) {
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const { body, documentElement } = document;
		const gap = window.innerWidth - documentElement.clientWidth;
		const prev = {
			overflow: body.style.overflow,
			pad: body.style.paddingRight
		};
		body.style.overflow = "hidden";
		if (gap > 0) body.style.paddingRight = `${gap}px`;
		return () => {
			body.style.overflow = prev.overflow;
			body.style.paddingRight = prev.pad;
		};
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => e.key === "Escape" && onClose();
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open, onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		current,
		onClose
	}) });
}
function Panel({ current, onClose }) {
	const { reduced } = useCinematicMotion();
	const [hover, setHover] = (0, import_react.useState)(null);
	const active = hover ?? menu.find((m) => m.to === current) ?? menu[0];
	const scrollRef = (0, import_react.useRef)(null);
	const closeRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({ container: scrollRef });
	(0, import_react.useEffect)(() => {
		closeRef.current?.focus({ preventScroll: true });
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		id: "cinematic-menu",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Site menu",
		initial: reduced ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" },
		animate: reduced ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" },
		exit: reduced ? { opacity: 0 } : { clipPath: "inset(100% 0 0 0)" },
		transition: {
			duration: .9,
			ease
		},
		className: "fixed inset-0 z-[60] bg-obsidian grain",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "sync",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						src: scenes[active.image],
						alt: "",
						width: 1920,
						height: 1080,
						loading: "lazy",
						decoding: "async",
						initial: {
							opacity: 0,
							scale: reduced ? 1 : 1.06
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						exit: { opacity: 0 },
						transition: {
							duration: 1.4,
							ease
						},
						className: "absolute inset-0 h-full w-full object-cover"
					}, active.image)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-obsidian/75 md:bg-[linear-gradient(90deg,var(--obsidian)_0%,var(--obsidian)_42%,oklch(0.12_0.008_275/0.45)_100%)]" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 top-0 z-20 flex items-center justify-between px-7 py-7 md:px-10 md:py-9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					onClick: onClose,
					className: "font-serif text-2xl font-light tracking-[0.18em] text-ivory",
					children: brand.mark
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					ref: closeRef,
					type: "button",
					onClick: onClose,
					className: "whisper flex items-center gap-4 text-ivory outline-none focus-visible:text-champagne",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Close" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative block h-3 w-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 top-1/2 h-px w-full rotate-45 bg-current" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 top-1/2 h-px w-full -rotate-45 bg-current" })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scrollRef,
				className: "absolute inset-0 z-10 overflow-y-auto overscroll-contain pt-[88px] pb-[72px] md:pt-[104px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Primary",
					className: "flex min-h-full flex-col justify-center px-7 py-6 md:px-[8vw]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-1 md:space-y-0",
						children: menu.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
							initial: reduced ? false : {
								opacity: 0,
								x: -24
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: {
								duration: .8,
								ease,
								delay: .2 + i * .045
							},
							onMouseEnter: () => setHover(m),
							onMouseLeave: () => setHover(null),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: m.to,
								onClick: onClose,
								onFocus: () => setHover(m),
								className: "group flex items-baseline gap-5 py-1 outline-none md:gap-8",
								activeProps: { "aria-current": "page" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "whisper w-6 text-gold/70",
									children: m.numeral
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `font-serif font-light leading-[1.08] transition-all duration-500 text-[8vw] md:text-[3.3vw] ${active.to === m.to ? "text-ivory md:translate-x-3" : "text-ivory/40 group-hover:text-ivory group-focus-visible:text-ivory"}`,
									children: m.label
								})]
							})
						}, m.to))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollTrack, {
				progress: scrollYProgress,
				className: "absolute right-6 top-1/2 z-10 -translate-y-1/2 md:right-10"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: { delay: .9 },
				className: "absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-7 pb-6 pt-3 md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "whisper text-ivory/40",
					children: brand.tagline
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `mailto:${brand.email}`,
					className: "whisper hidden text-ivory/40 hover:text-champagne md:block",
					children: brand.email
				})]
			})
		]
	});
}
var roleDashboard = {
	ADMIN: "/admin/dashboard",
	SALES: "/sales/dashboard",
	CUSTOMER: "/customer/dashboard"
};
function Chrome() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const { scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, {
		stiffness: 80,
		damping: 30
	});
	const close = (0, import_react.useCallback)(() => setOpen(false), []);
	const { role, isLoading } = useAuth();
	(0, import_react.useEffect)(() => setOpen(false), [pathname]);
	const dashboardTo = role ? roleDashboard[role] : "/login";
	const dashboardLabel = role === "ADMIN" ? "Admin" : role === "SALES" ? "Sales" : role === "CUSTOMER" ? "Dashboard" : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between px-7 py-7 mix-blend-difference md:px-10 md:py-9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				"aria-label": `${brand.name} home`,
				className: "pointer-events-auto font-serif text-2xl font-light tracking-[0.18em] text-ivory",
				children: brand.mark
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-auto flex items-center gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => window.dispatchEvent(new Event("helitejet-voice-activate")),
						"aria-label": "Open HELITEJET voice concierge",
						className: "whisper flex items-center gap-2 text-ivory/80 transition-colors hover:text-champagne",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-2 w-2 rounded-full border border-current",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Voice" })]
					}),
					!isLoading && (dashboardLabel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: dashboardTo,
						className: "whisper flex items-center gap-2 text-ivory/80 transition-colors hover:text-champagne",
						children: dashboardLabel
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "whisper flex items-center gap-2 text-ivory/80 transition-colors hover:text-champagne",
						children: "Login"
					})),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setOpen(true),
						"aria-expanded": open,
						"aria-controls": "cinematic-menu",
						"aria-haspopup": "dialog",
						className: "whisper flex items-center gap-4 text-ivory",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Menu" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative block h-3 w-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 top-0 h-px w-full bg-ivory" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 left-0 h-px w-full bg-ivory" })]
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			style: {
				scaleY: progress,
				originY: 0
			},
			className: "pointer-events-none fixed left-0 top-0 z-40 h-screen w-px bg-gradient-to-b from-gold via-champagne to-gold"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationOverlay, {
			open,
			current: pathname,
			onClose: close
		})
	] });
}
/**
* A restrained veil that closes over the old page and lifts from the new one.
* It never touches route rendering, so navigation stays instant and reliable.
*/
function PageTransition() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const { reduced } = useCinematicMotion();
	const first = (0, import_react.useRef)(true);
	const [veil, setVeil] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (first.current) {
			first.current = false;
			return;
		}
		setVeil(pathname);
		const t = window.setTimeout(() => setVeil(null), reduced ? 250 : 1100);
		return () => window.clearTimeout(t);
	}, [pathname, reduced]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: veil && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		"aria-hidden": true,
		initial: { opacity: 1 },
		animate: { opacity: 1 },
		exit: {
			opacity: 0,
			transition: {
				duration: reduced ? .2 : .9,
				ease
			}
		},
		className: "pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-obsidian",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			initial: {
				opacity: 0,
				letterSpacing: "0.6em"
			},
			animate: {
				opacity: 1,
				letterSpacing: "0.3em"
			},
			transition: {
				duration: .8,
				ease
			},
			className: "font-serif text-2xl font-light text-ivory/70",
			children: brand.mark
		}), !reduced && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			initial: { scaleX: 0 },
			animate: { scaleX: 1 },
			transition: {
				duration: .9,
				ease
			},
			className: "absolute left-[30%] right-[30%] top-1/2 mt-8 h-px origin-left bg-gold/60"
		})]
	}, veil) });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$31 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "author",
				content: "HELITEJET"
			},
			{
				name: "theme-color",
				content: "#141318"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Manrope:wght@400;500&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIvFH3O4dBsrab34JqzqW5qRKIetrXfnBtEtpT_Jg4--fEBjzkexT5Fw&s=10"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$31.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chrome, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTransition, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		] })
	});
}
var $$splitComponentImporter$30 = () => import("./routes-99-9uMR-.mjs");
var Route$30 = createFileRoute("/")({
	head: () => worldHead(world$10),
	component: lazyRouteComponent($$splitComponentImporter$30, "component")
});
var $$splitComponentImporter$29 = () => import("./about-DkfNH3rf.mjs");
var Route$29 = createFileRoute("/about")({
	head: () => worldHead(world),
	component: lazyRouteComponent($$splitComponentImporter$29, "component")
});
var $$splitComponentImporter$28 = () => import("./aviation-CV5OTqMf.mjs");
var Route$28 = createFileRoute("/aviation")({
	head: () => worldHead(world$1),
	component: lazyRouteComponent($$splitComponentImporter$28, "component")
});
var $$splitComponentImporter$27 = () => import("./concierge-BohkM-GK.mjs");
var Route$27 = createFileRoute("/concierge")({
	head: () => worldHead(world$2),
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./destinations-CBMHnVdI.mjs");
var Route$26 = createFileRoute("/destinations")({
	head: () => worldHead(world$3),
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./experiences-BtCctZJl.mjs");
var Route$25 = createFileRoute("/experiences")({
	head: () => worldHead(world$4),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var $$splitComponentImporter$24 = () => import("./forgot-password-CpScgqFb.mjs");
var Route$24 = createFileRoute("/forgot-password")({
	beforeLoad: () => {
		if (typeof window !== "undefined") return requireGuestAccess();
	},
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./login-csIgRoCq.mjs");
var Route$23 = createFileRoute("/login")({
	beforeLoad: () => {
		if (typeof window !== "undefined") return requireGuestAccess();
	},
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./membership-CC4BMLxV.mjs");
var Route$22 = createFileRoute("/membership")({
	head: () => worldHead(world$5),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./mobility-BWiGOmDM.mjs");
var Route$21 = createFileRoute("/mobility")({
	head: () => worldHead(world$6),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./private-Cmj2S7RX.mjs");
var Route$20 = createFileRoute("/private")({
	head: () => worldHead(world$7),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./register-RPBaibxs.mjs");
var Route$19 = createFileRoute("/register")({
	beforeLoad: () => {
		if (typeof window !== "undefined") return requireGuestAccess();
	},
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./request-access-CFDZivXN.mjs");
var Route$18 = createFileRoute("/request-access")({
	head: () => worldHead(world$8),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./reset-password-DCwYKssF.mjs");
var Route$17 = createFileRoute("/reset-password")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./residences-BbkFut_p.mjs");
var Route$16 = createFileRoute("/residences")({
	head: () => worldHead(world$9),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./subscriptions-B-8YnBp5.mjs");
var Route$15 = createFileRoute("/subscriptions")({
	head: () => worldHead(world$11),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./yachts-CDMu8Jm8.mjs");
var Route$14 = createFileRoute("/yachts")({
	head: () => worldHead(world$12),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./admin.dashboard-rOUVWVwT.mjs");
var Route$13 = createFileRoute("/admin/dashboard")({
	beforeLoad: () => {
		if (typeof window !== "undefined") return requireRoleAccess(["ADMIN"]);
	},
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./admin.requests-CxbVh8aW.mjs");
var Route$12 = createFileRoute("/admin/requests")({
	beforeLoad: () => {
		if (typeof window !== "undefined") return requireRoleAccess(["ADMIN"]);
	},
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./customer.bookings-CoNTGme_.mjs");
var Route$11 = createFileRoute("/customer/bookings")({
	beforeLoad: () => {
		if (typeof window !== "undefined") return requireRoleAccess(["CUSTOMER"]);
	},
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./customer.dashboard-BhRGro9B.mjs");
var Route$10 = createFileRoute("/customer/dashboard")({
	beforeLoad: () => {
		if (typeof window !== "undefined") return requireRoleAccess(["CUSTOMER"]);
	},
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./customer.documents-D07DhwCw.mjs");
var Route$9 = createFileRoute("/customer/documents")({
	beforeLoad: () => {
		if (typeof window !== "undefined") return requireRoleAccess(["CUSTOMER"]);
	},
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./customer.notifications-DunIiOaM.mjs");
var Route$8 = createFileRoute("/customer/notifications")({
	beforeLoad: () => {
		if (typeof window !== "undefined") return requireRoleAccess(["CUSTOMER"]);
	},
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./customer.profile-C9g3xJEn.mjs");
var Route$7 = createFileRoute("/customer/profile")({
	beforeLoad: () => {
		if (typeof window !== "undefined") return requireRoleAccess(["CUSTOMER"]);
	},
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./customer.quotes-CaE6AN7V.mjs");
var Route$6 = createFileRoute("/customer/quotes")({
	beforeLoad: () => {
		if (typeof window !== "undefined") return requireRoleAccess(["CUSTOMER"]);
	},
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./customer.requests-DMSCUc7L.mjs");
var Route$5 = createFileRoute("/customer/requests")({
	beforeLoad: () => {
		if (typeof window !== "undefined") return requireRoleAccess(["CUSTOMER"]);
	},
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./customer.subscription-CmyVixTT.mjs");
var Route$4 = createFileRoute("/customer/subscription")({
	beforeLoad: () => {
		if (typeof window !== "undefined") return requireRoleAccess(["CUSTOMER"]);
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./customer.support-0tnODTVG.mjs");
var Route$3 = createFileRoute("/customer/support")({
	beforeLoad: () => {
		if (typeof window !== "undefined") return requireRoleAccess(["CUSTOMER"]);
	},
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./sales.dashboard-Bse-IDVp.mjs");
var Route$2 = createFileRoute("/sales/dashboard")({
	beforeLoad: () => {
		if (typeof window !== "undefined") return requireRoleAccess(["SALES"]);
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./sales.requests-BoZvb60q.mjs");
var Route$1 = createFileRoute("/sales/requests")({
	beforeLoad: () => {
		if (typeof window !== "undefined") return requireRoleAccess(["SALES"]);
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./customer.requests.new-CvJYaKLU.mjs");
var Route = createFileRoute("/customer/requests/new")({
	beforeLoad: () => {
		if (typeof window !== "undefined") return requireRoleAccess(["CUSTOMER"]);
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$30.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$31
});
var AboutRoute = Route$29.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$31
});
var AviationRoute = Route$28.update({
	id: "/aviation",
	path: "/aviation",
	getParentRoute: () => Route$31
});
var ConciergeRoute = Route$27.update({
	id: "/concierge",
	path: "/concierge",
	getParentRoute: () => Route$31
});
var DestinationsRoute = Route$26.update({
	id: "/destinations",
	path: "/destinations",
	getParentRoute: () => Route$31
});
var ExperiencesRoute = Route$25.update({
	id: "/experiences",
	path: "/experiences",
	getParentRoute: () => Route$31
});
var ForgotPasswordRoute = Route$24.update({
	id: "/forgot-password",
	path: "/forgot-password",
	getParentRoute: () => Route$31
});
var LoginRoute = Route$23.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$31
});
var MembershipRoute = Route$22.update({
	id: "/membership",
	path: "/membership",
	getParentRoute: () => Route$31
});
var MobilityRoute = Route$21.update({
	id: "/mobility",
	path: "/mobility",
	getParentRoute: () => Route$31
});
var PrivateRoute = Route$20.update({
	id: "/private",
	path: "/private",
	getParentRoute: () => Route$31
});
var RegisterRoute = Route$19.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => Route$31
});
var RequestAccessRoute = Route$18.update({
	id: "/request-access",
	path: "/request-access",
	getParentRoute: () => Route$31
});
var ResetPasswordRoute = Route$17.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$31
});
var ResidencesRoute = Route$16.update({
	id: "/residences",
	path: "/residences",
	getParentRoute: () => Route$31
});
var SubscriptionsRoute = Route$15.update({
	id: "/subscriptions",
	path: "/subscriptions",
	getParentRoute: () => Route$31
});
var YachtsRoute = Route$14.update({
	id: "/yachts",
	path: "/yachts",
	getParentRoute: () => Route$31
});
var AdminDashboardRoute = Route$13.update({
	id: "/admin/dashboard",
	path: "/admin/dashboard",
	getParentRoute: () => Route$31
});
var AdminRequestsRoute = Route$12.update({
	id: "/admin/requests",
	path: "/admin/requests",
	getParentRoute: () => Route$31
});
var CustomerBookingsRoute = Route$11.update({
	id: "/customer/bookings",
	path: "/customer/bookings",
	getParentRoute: () => Route$31
});
var CustomerDashboardRoute = Route$10.update({
	id: "/customer/dashboard",
	path: "/customer/dashboard",
	getParentRoute: () => Route$31
});
var CustomerDocumentsRoute = Route$9.update({
	id: "/customer/documents",
	path: "/customer/documents",
	getParentRoute: () => Route$31
});
var CustomerNotificationsRoute = Route$8.update({
	id: "/customer/notifications",
	path: "/customer/notifications",
	getParentRoute: () => Route$31
});
var CustomerProfileRoute = Route$7.update({
	id: "/customer/profile",
	path: "/customer/profile",
	getParentRoute: () => Route$31
});
var CustomerQuotesRoute = Route$6.update({
	id: "/customer/quotes",
	path: "/customer/quotes",
	getParentRoute: () => Route$31
});
var CustomerRequestsRoute = Route$5.update({
	id: "/customer/requests",
	path: "/customer/requests",
	getParentRoute: () => Route$31
});
var CustomerSubscriptionRoute = Route$4.update({
	id: "/customer/subscription",
	path: "/customer/subscription",
	getParentRoute: () => Route$31
});
var CustomerSupportRoute = Route$3.update({
	id: "/customer/support",
	path: "/customer/support",
	getParentRoute: () => Route$31
});
var SalesDashboardRoute = Route$2.update({
	id: "/sales/dashboard",
	path: "/sales/dashboard",
	getParentRoute: () => Route$31
});
var SalesRequestsRoute = Route$1.update({
	id: "/sales/requests",
	path: "/sales/requests",
	getParentRoute: () => Route$31
});
var CustomerRequestsRouteChildren = {
	CustomerRequestsIdRoute: Route$32.update({
		id: "/$id",
		path: "/$id",
		getParentRoute: () => CustomerRequestsRoute
	}),
	CustomerRequestsNewRoute: Route.update({
		id: "/new",
		path: "/new",
		getParentRoute: () => CustomerRequestsRoute
	})
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AviationRoute,
	ConciergeRoute,
	DestinationsRoute,
	ExperiencesRoute,
	ForgotPasswordRoute,
	LoginRoute,
	MembershipRoute,
	MobilityRoute,
	PrivateRoute,
	RegisterRoute,
	RequestAccessRoute,
	ResetPasswordRoute,
	ResidencesRoute,
	SubscriptionsRoute,
	YachtsRoute,
	AdminDashboardRoute,
	AdminRequestsRoute,
	CustomerBookingsRoute,
	CustomerDashboardRoute,
	CustomerDocumentsRoute,
	CustomerNotificationsRoute,
	CustomerProfileRoute,
	CustomerQuotesRoute,
	CustomerRequestsRoute: CustomerRequestsRoute._addFileChildren(CustomerRequestsRouteChildren),
	CustomerSubscriptionRoute,
	CustomerSupportRoute,
	SalesDashboardRoute,
	SalesRequestsRoute
};
var routeTree = Route$31._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
