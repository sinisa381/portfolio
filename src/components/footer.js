import React from 'react'
import styled from '@emotion/styled'
import { FlexBox } from '../components/shared'
// import { mq } from './globals'
import { Flip } from 'react-reveal/'
import shark from '../lotties/shark.json'
import LottieContainer from '../components/anotherlottieContainer'

export default ({ site }) => {
	// const { author } = site
	return (
		<React.Fragment>
			<div style={{ marginTop: '3rem' }}>
				<LottieContainer lottie={shark} width='10rem' />
			</div>
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
		</React.Fragment>
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
`
