import React from 'react'

// replace(/\//g, '')  removes slashes //

const Heading = ({ location }) => {
	return <div>{location.pathname.replace(/\//g, '')}</div>
}

export default Heading
