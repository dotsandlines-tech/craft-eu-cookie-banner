module.exports = {
	purge: [
		"./src/templates/**/*.html",
		"./src/templates/**/*.twig",
		"./src/**/*.js",
	],
	prefix: "cb-",
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	theme: {
		extend: {},
		colors: {
			blue: "#2e40da",
			white: "#ffffff",
		},
	},
	corePlugins: {
		preflight: false,
	},
	variants: {},
	plugins: [],
}
