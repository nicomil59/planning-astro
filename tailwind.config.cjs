/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				title: 'Oswald, sans-serif', // Adds a new `font-display` class
				text: 'Inter, sans-serif'
			},
			colors: {
				bleu: {
					950: '#103f79'
				},
				gold: {
					600: '#e1980d'
				},
				notiongray: {
					100: '#f1f1ef'
				},
				notionyellow: {
					50: '#f4f1e5',
					100: '#eee9d7',
					200: '#dbd1ac',
					300: '#c8b781',
					500: '#af8c51',
					600: '#8e6b40'
				},
				textplatform: {
					900: '#593e2e'
				},
				darkbg: {
					950: '#181a1c'
				},
				darktext: {
					200: '#cdc8c2'
				},
				darkbgBrown: {
					300: '#d0b786',
					950: '#272210'
				},
				selectionDarkbg: {
					900: '#40381c'
				},
				tableDarkbg: {
					950: '#2d2713'
				},
				platformDarkbg: {
					900: '#583a36',
					950: '#202325'
				},
				platformDarktext: {
					300: '#cdb09f'
				}
			}
		},
	},
	plugins: [],
	darkMode: 'class'
}
