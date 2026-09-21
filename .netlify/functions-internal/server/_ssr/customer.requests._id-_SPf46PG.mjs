import { h as createFileRoute, m as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as requireRoleAccess } from "./auth-B5gn9oy0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/customer.requests._id-_SPf46PG.js
var $$splitComponentImporter = () => import("./customer.requests._id-DVAap3O1.mjs");
var Route = createFileRoute("/customer/requests/$id")({
	beforeLoad: () => {
		if (typeof window !== "undefined") return requireRoleAccess(["CUSTOMER"]);
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
