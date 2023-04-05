const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '300ms',
			},
			keyframes: {
				fadeIn: {
					from: {
						opacity: 0,
					},
					to: {
						opacity: 1,
					},
				},
			},
			animation: {
				fade: 'fadeIn .5s ease-in-out',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
		},
		screens: {
			'tablet': '768px',
			'laptop': '1024px',
			'desktop': '1280px',
			...defaultTheme.screens,
		},
		container: {
			center: true,
			padding: '1.25rem',
		},
	},
	plugins: [
		plugin(({ addComponents, theme, addUtilities }) => {
			addComponents({
				'.btn-primary': {
					backgroundColor: theme('colors.red.500'),
					color: 'white',
					padding: '10px 0',
					display: 'block',
					width: '100%',
					fontSize: 18,
					fontWeight: 'bold',

					'&:hover': {
						backgroundColor: theme('colors.orange.600'),
					},
				},
			}),
			addUtilities({
				'.text-shadow': {
					textShadow: '1px 1px rgba(0, 0, 0, 0.4)',
				},
			})
		}),
	],
}
