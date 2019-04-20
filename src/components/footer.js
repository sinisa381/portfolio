import React from 'react'
import styled from '@emotion/styled'
// import { Text } from '../components/shared'

const Footer = ({ site }) => {
	const { author } = site
	return (
		<footer
			css={theme => ({
				background: theme.color.sunny,
				backgroundColor: '#ffffff',
				fontFamily: theme.font.heading,
				maxWidth: '80%',
				marginTop: '2rem',
				padding: '.5rem',
				margin: '0 auto'
			})}
		>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<Text size='5px' color='#eeeee'>
					© {new Date().getFullYear()} All rights reserved Sinisa Colic
				</Text>
			</div>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<Text size='50px' color='#eeeee'>
					sinisa820@gmail.com
				</Text>
			</div>
		</footer>
	)
}

export default Footer

const Text = styled.p`
	font-family: 'Hind madurai', sans-serif;
	font-size: 15px;
	margin: 0;
`
