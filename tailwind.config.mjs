/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				customBlue: '#2A4DD0',
				customGreen: '#4CA154',
				customBlack: '#111729',
				customDarkGray: '#223344',
				customGray: '#909193',
				customLightGray: '#F2F9FE',
			},
			backgroundImage: {
				'sun': 'url("../assets/Sun_fill.svg")',
				'moon': 'url("../assets/Moon_fill.svg")',
				'moon-light': 'url("../assets/Moon_fill_light.svg")',
				/* 'close': 'url("../assets/icon-close.svg")',
				'open': 'url("../assets/icon-open.svg")', */
			}
		},
	},
	plugins: [],
}
