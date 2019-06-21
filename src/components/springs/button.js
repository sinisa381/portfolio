import React, { useState } from 'react'
import { useSpring, animated, config } from 'react-spring'
import { colors } from '../globals/colors'
import styled from '@emotion/styled'

const Button = ({ children, path }) => {
	let [ hovering, setHover ] = useState(false)
	let props = useSpring({
		config: config.stiff,

		to: {
			backgroundColor: hovering ? colors.blue : colors.whites[9],
			color: hovering ? colors.whites[10] : colors.blue
		}
	})
	return (
		<Link
			style={props}
			href={path}
			rel='noopener noreferrer'
			target='_blank'
			onMouseOver={() => setHover(true)}
			onMouseOut={() => setHover(false)}
		>
			{children}
		</Link>
	)
}

export default Button

const Link = styled(animated.a)`
	display: inline-block;
  border-radius: 8px;
  padding:0 5px;
	margin: 1rem 0 3rem;
`
