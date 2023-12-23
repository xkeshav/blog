import {
	defineConfig,
	presetIcons,
	presetUno,
	presetWebFonts,
	transformerDirectives,
} from 'unocss';

export default defineConfig({
	shortcuts: [
		{ 'i-logo': 'i-logos-astro w-6em h-6em transform transition-800' },
	],
	transformers: [
		transformerDirectives(),
	],
	presets: [
		presetUno(),
		presetIcons({
			scale: 1.2,
			cdn: 'https://esm.sh/',
			extraProperties: {
				'display': 'inline-block',
				'vertical-align': 'middle',
			},
		}),
		presetWebFonts({
			provider: 'google', // default provider
			fonts: {
				// these will extend the default theme
				sans: 'Roboto',
				mono: ['Fira Code', 'Fira Mono:400,700'],
				// custom ones
				lobster: 'Lobster',
				lato: [
					{
						name: 'Lato',
						weights: ['400', '700'],
						italic: true,
					},
					{
						name: 'sans-serif',
						provider: 'none',
					},
				],
			},
		}),
	],
})