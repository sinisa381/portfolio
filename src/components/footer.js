import React from 'react'
import { Text } from '../components/shared'

const Footer = ({ site }) => {
	const { author } = site
	return (
		<footer
			css={theme => ({
				background: theme.color.sunny,
				fontFamily: theme.font.heading,
				marginTop: '2rem'
			})}
		>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<Text color='#eeeee'>© {new Date().getFullYear()} All rights reserved Sinisa Colic</Text>
			</div>
		</footer>
	)
}

export default Footer
