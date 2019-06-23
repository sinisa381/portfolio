import { fp } from './index'
import { colors } from './colors'
const theme = {
	colors,
	breakpoints: [ '40em', '52em', '64em' ],
	fontSizes: [ 12, 14, 16, 20, 24, 32, 48, 64 ],
	fontWeights: [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ],
	space: [ 0, 4, 8, 16, 32, 64, 128, 256 ],
	lineHeights: {
		solid: 1,
		title: 1.25,
		copy: 1.5
	},
	letterSpacings: {
		normal: 'normal',
		tracked: '0.1em',
		tight: '-0.05em',
		mega: '0.25em'
	},

	fonts: {
		sans: 'system-ui, sans-serif',
		mono: 'Menlo, monospace',
		mont: 'Montserrat, sans-serif',
		roboto: 'Roboto, sans-serif',
		cooper: 'Cooper Hewitt',
		aleo: 'aleo',
		clear: 'Clear Sans',
		opensans: 'Open Sans Condensed, sans-serif'
	},
	borders: [ 0, '1px solid', '2px solid', '4px solid', '8px solid', '16px solid', '32px solid' ],
	radii: [ 0, 2, 4, 16, 9999, '100%' ],
	width: [ 16, 32, 64, 128, 256 ],
	heights: [ 16, 32, 64, 128, 256 ],
	maxWidths: [ 16, 32, 64, 128, 256, 512, 768, 1024, 1536 ],
	shadows: {
		small: '0 0 4px rgba(0, 0, 0, .125)',
		large: '0 0 24px rgba(0, 0, 0, .125)',
		normal: '0 0 16px rgba(0, 0, 0, .25)',
		medium: '0 2px 16px rgba(0, 0, 0, 0.25)',
		one: '0px 0px 4px 2px rgba( 0, 0, 0, 0.2 )',
		two: '0px 0px 8px 2px rgba( 0, 0, 0, 0.2 )',
		three: '2px 2px 4px 2px rgba( 0, 0, 0, 0.2 )',
		four: '2px 2px 8px 0px rgba( 0, 0, 0, 0.2 )',
		five: '4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )'
	},
	buttons: {
		primary: {
			color: '#fff',
			backgroundColor: '#07c'
		},
		outline: {
			color: '#07c',
			backgroundColor: 'transparent',
			boxShadow: 'inset 0 0 0 2px',
			transition: 'all .1s',
			'&:hover': {
				color: '#fff',
				backgroundColor: '#07c'
			}
		}
	},

	color: {
		primary: '#A0CED9',
		white: '#ffffff',
		green: '#2a6b64',
		darker: '#070707',
		dark: '#242424',
		light: '#DFFDFF',
		sunny: '#FCCF11',
		purple: '#6B717E',
		blood: '#E62117',
		sky: '#348BF8',
		contact: '#007987'
	},
	shadow: {
		one: '0px 0px 4px 2px rgba( 0, 0, 0, 0.2 )',
		two: '0px 0px 8px 2px rgba( 0, 0, 0, 0.2 )',
		three: '2px 2px 4px 2px rgba( 0, 0, 0, 0.2 )',
		four: '2px 2px 8px 0px rgba( 0, 0, 0, 0.2 )',
		five: '4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )'
	},
	font: {
		heading: 'Montserrat, sans-serif',
		lead: 'Roboto, sans-serif',
		text: 'Open Sans Condensed, sans-serif'
	},
	weight: {
		one: '100',
		two: '200',
		three: '300',
		four: '400'
	},
	fp
}

export default theme
