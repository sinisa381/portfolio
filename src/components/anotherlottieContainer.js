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

	return <Lottie options={defaultOptions} style={{ width: '100%', height: '100%' }} />
}
export default AnotherLotie
