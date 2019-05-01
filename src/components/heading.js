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
	if (location) console.log(location.pathname)
	if (location && location.pathname === '/contact/success/') {
		return <Text>success</Text>
	} else if (location && location.pathname === '/') {
		return <Text>home</Text>
	} else {
		return <Text>{location.pathname.replace(/\//g, '')}</Text>
	}
}

export default Heading
