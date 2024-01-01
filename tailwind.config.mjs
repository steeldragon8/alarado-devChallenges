/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				lato: ['Lato', 'sans-serif'],
			},
			colors: {
				customBlue: '#2A4DD0',
				customGreen: '#4CA154',
				customBlack: '#111729',
				customDarkGray: '#223344',
				customGray: '#909193',
				customLightGray: '#F2F9FE',
				primary: '#111729',
				secondary: '#677489',
				background: '#F2F5F9',
			},
			backgroundImage: {
				'sun': 'url("../assets/Sun_fill.svg")',
				'moon': 'url("../assets/Moon_fill.svg")',
				'moon-light': 'url("../assets/Moon_fill_light.svg")',
			}
		},
	},
	plugins: [],
}
