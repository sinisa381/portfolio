import React from 'react'
import { Text } from '../components/shared'

const Footer = ({ site }) => {
	const { author } = site
	return (
		<footer
			css={theme => ({
				background: theme.color.sunny,
				backgroundColor: '#FBCF1B',
				fontFamily: theme.font.heading,
				marginTop: '2rem',
				padding: '.5rem'
			})}
		>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<Text color='#eeeee'>© {new Date().getFullYear()} All rights reserved Sinisa Colic</Text>
			</div>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<Text color='#eeeee'>sinisa820@gmail.com</Text>
			</div>
		</footer>
	)
}

export default Footer
