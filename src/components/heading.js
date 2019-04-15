import React from 'react'

// replace(/\//g, '')  removes slashes //

const Heading = ({ location }) => {
	if (location) {
		return <div>{location.pathname.replace(/\//g, '')}</div>
	} else {
		return <div>Loading...</div>
	}
}

export default Heading
