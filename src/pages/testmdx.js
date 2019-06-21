import React from 'react'
import useMdx from '../components/hooks/use-mdx'

const MdxTest = props => {
	const data = useMdx()
	console.log(data)
	return <div>hello</div>
}

export default MdxTest
