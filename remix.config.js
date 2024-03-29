import { config } from "@netlify/remix-adapter";

/** @type {import('@remix-run/dev').AppConfig} */
export default {
	...(process.env.NODE_ENV === "production" ? config : undefined),
	postcss: true,
	tailwind: true,
	ignoredRouteFiles: ["**/.*"],
	serverDependenciesToBundle: ["remix-i18next"],
	watchPaths: ["./tailwind.config.ts"],
	cacheDirectory: "./node_modules/.cache/remix",
};
