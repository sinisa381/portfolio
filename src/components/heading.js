import React from 'react'
import styled from '@emotion/styled'

const Text = styled.div`
	margin-left: .5rem;
	color: rgba(0, 0, 0, .7);
	font-weight: bold;
	font-variant: small-caps;
`

// replace(/\//g, '')  removes slashes //

const Heading = ({ location }) => {
	if (location && location.pathname !== '/') {
		console.log(location.pathname)
		return <Text>{location.pathname.replace(/\//g, '')}</Text>
	} else if (location.pathname === '/') {
		return <Text>home</Text>
	}
}

export default Heading
