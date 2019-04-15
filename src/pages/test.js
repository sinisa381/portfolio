import React from 'react'
import styled from '@emotion/styled'
import Lottie from 'react-lottie'
import mobile from '../lotties/user_mobile.json'
import { css } from '@emotion/core'
import weiter from '../lotties/weiter.json'
import cube from '../lotties/cube.json'
import rocket from '../lotties/rocket.json'
import AnotherLotie from '../components/anotherlottieContainer.js'

const Weighter = styled.div`
	width: 11rem;
	height: 11rem;
	position: relative;
	z-index: 5;
`

const Rocket = styled.div`
	width: 5.8rem;
	height: 5.8rem;
	position: absolute;
	border-radius: 100%;
	overflow: hidden;
	top: 42%;
	left: 49.7%;
	transform: translate(-50%, -50%);
	z-index: 2;
`
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100wv;
	height: 100vh;
`

const Mobile = styled.div`
	width: 6.2rem;
	height: 6.2rem;
	position: absolute;
	border-radius: 100%;
	overflow: hidden;
	top: 42%;
	left: 49.7%;
	transform: translate(-50%, -50%);
	z-index: 1;
`
const IndexPage = ({ data, location }) => {
	return (
		<Container>
			<Weighter>
				<AnotherLotie lottie={weiter} />
			</Weighter>
			<Rocket>
				<AnotherLotie lottie={rocket} />
			</Rocket>
			<Mobile>
				<AnotherLotie lottie={mobile} />
			</Mobile>
		</Container>
	)
}
export default IndexPage
