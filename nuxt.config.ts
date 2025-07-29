import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	modules: [
		"@vueuse/nuxt",
		"@nuxt/image",
		"@nuxt/eslint",
		"@nuxt/fonts",
		"@nuxt/icon",
		"nuxt-svgo"
	],
	app: {
		head: {
			title: "Nuxt 4 template",
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{ name: "theme-color", content: "#fff" },
				{ name: "format-detection", content: "no" }
			],
			noscript: [
				{ textContent: "JavaScript is required to run this project" }
			]
		}
	},
	css: [
		"@/assets/css/main.css"
	],
	fonts: {
		defaults: {
			weights: ["100 900"]
		}
	},
	image: {
		provider: "ipx"
	},
	icon: {
		mode: "svg"
	},
	svgo: {
		autoImportPath: "./assets/"
	},
	// imports: {
	// 	presets: [
	// 		{
	// 			from: "",
	// 			imports: [""]
	// 		}
	// 	]
	// },
	vite: {
        plugins: [tailwindcss()],
    },
	eslint: {
		config: {
			standalone: false
		}
	},
	experimental: {
		typedPages: true
	},
	future: {
		compatibilityVersion: 4
	},
	compatibilityDate: "2025-07-01"
});
