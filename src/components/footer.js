import React from 'react'
import styled from '@emotion/styled'
import { FlexBox } from '../components/shared'
import { mq } from './globals'
import { Flip } from 'react-reveal'

export default ({ site }) => {
	const { author } = site
	return (
		<Flip left>
			<Footer>
				<FlexBox>
					<Text size='5px' color='#eeeee'>
						© {new Date().getFullYear()} All rights reserved Sinisa Colic
					</Text>
				</FlexBox>
				<FlexBox>
					<Text size='50px' color='#eeeee'>
						sinisa820@gmail.com
					</Text>
				</FlexBox>
			</Footer>
		</Flip>
	)
}

const Text = styled.p`
	font-family: 'Hind madurai', sans-serif;
	font-size: 15px;
	margin: 0;
`
const Footer = styled.footer`
	max-width: 80%;
	padding: .5rem;
	margin: 0 auto;
	margin-top: 2rem;
	${mq[1]} {
		margin-top: 3rem;
	}
`
