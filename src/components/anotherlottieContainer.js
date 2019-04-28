import React from 'react'
import Lottie from 'react-lottie'
const AnotherLotie = props => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: props.lottie,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}

	return <Lottie options={defaultOptions} style={{ width: props.width, height: '100%' }} />
}
export default AnotherLotie
