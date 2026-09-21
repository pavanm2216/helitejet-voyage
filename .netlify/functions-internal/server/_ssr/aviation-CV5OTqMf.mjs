import { r as __toESM } from "../_runtime.mjs";
import { i as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as CinematicPage } from "./CinematicPage-CPGJjItP.mjs";
import { n as AviationSections } from "./sections-CnoRkywO.mjs";
import { t as world } from "./aviation-DZrwuTdN.mjs";
import { t as JourneyPlanner } from "./JourneyPlanner-BshWTFz_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/aviation-CV5OTqMf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const [inquiryOpen, setInquiryOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CinematicPage, {
		world,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AviationSections, { onOpenInquiry: () => setInquiryOpen(true) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyPlanner, {
		context: "flights",
		open: inquiryOpen,
		onClose: () => setInquiryOpen(false)
	})] });
}
//#endregion
export { Page as component };
