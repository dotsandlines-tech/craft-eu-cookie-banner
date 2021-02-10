
const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

let StyleLintPlugin = require("stylelint-webpack-plugin");
let ESLintPlugin = require("eslint-webpack-plugin");

require("mix-tailwindcss");



mix.webpackConfig({
	plugins: [
		new StyleLintPlugin({
			files: "./src/src/**/*.scss",
			configFile: "./.stylelintrc.json",
		}),
		new ESLintPlugin({
			files: "./src/src/**/*.js",
		}),
	],
});


if (mix.inProduction) {
	mix.disableNotifications();

}


mix.options({
	processCssUrls: false,
});

mix.setPublicPath("./src/assetbundles/cookiebanner/dist")
	.sass("./src/src/scss/cookiebanner.scss", "css")
	.options({
		processCssUrls: false,
        postCss: [tailwindcss("tailwind.js"), require("autoprefixer")],
	})
	.js("./src/src/js/cookiebanner.js", "./src/assetbundles/cookiebanner/dist/js/cookiebanner.js")
	.version()
	.copy("./src/src/fonts", "./src/assetbundles/cookiebanner/dist/fonts")
	.copy("./src/src/img", "./src/assetbundles/cookiebanner/dist/img")

