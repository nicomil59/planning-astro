/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				title: 'Oswald, sans-serif', // Adds a new `font-display` class
			}
		},
	},
	plugins: [],
}
