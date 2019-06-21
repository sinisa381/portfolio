import React from 'react'
import styled from '@emotion/styled'
import Lottie from 'react-lottie'
import userMobile from '../lotties/user_mobile.json'
import { css } from '@emotion/core'
import weiter from '../lotties/weiter.json'
import cube from '../lotties/cube.json'
import rocket from '../lotties/rocket.json'
import welcome from '../lotties/cool.json'
// import { mq } from './globals'

const UncontrolledLottie = ({ location }) => {
	const Contact = css`
		width: 6.2rem;
		height: 6.2rem;
		position: absolute;
		left: -4px;
	`

	const Weiter = css`
		width: 11rem;
		height: 11rem;
		position: absolute;
		left: -54px;
		top: 5px;
	`

	const Rocket = css`
		width: 5.8rem;
		height: 5.8rem;
		border-radius: 100%;
		overflow: hidden;
		margin-top: .3rem;
	`
	const About = css`
		width: 5rem;
		height: 5rem;
		overflow: hidden;
		margin-top: .3rem;
		margin-left: .4rem;
	`
	const Home = css`
		width: 100%;
		height: 5rem;
		border-radius: 100%;
		overflow: hidden;
		margin-top: .3rem;
		margin-left: -.5rem;
	`
	const LottieContainer = styled.div`
		${location && location.pathname === '/services/' && Weiter};
		${location && location.pathname === '/portfolio/' && Rocket};
		${location && location.pathname === '/about/' && About};
		${location && location.pathname === '/contact/' && Contact};
		${location && location.pathname === '/' && Home};
	`

	function animationData() {
		if (location) {
			switch (location.pathname) {
				case '/contact/':
					return userMobile
				case '/portfolio/':
					return rocket
				case '/services/':
					return weiter
				case '/':
					return cube
				case '/about/':
					return welcome
				default:
					return userMobile
			}
		}
	}
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData(),
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}
	return (
		<LottieContainer>
			<Lottie options={defaultOptions} />
		</LottieContainer>
	)
}

export default UncontrolledLottie
