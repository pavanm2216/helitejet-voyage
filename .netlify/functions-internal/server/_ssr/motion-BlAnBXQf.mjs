import { t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/motion-BlAnBXQf.js
/** Central place for the site's motion language. */
var ease = [
	.22,
	1,
	.36,
	1
];
function useCinematicMotion() {
	return { reduced: !!useReducedMotion() };
}
//#endregion
export { useCinematicMotion as n, ease as t };
