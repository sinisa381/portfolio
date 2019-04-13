import React from 'react'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { fp, mq, sizes } from './globals'
import t from './globals/theme-utils'

const Players = ({ players }) =>
	players &&
	players.map(({ node }, i) => (
		<div key={i}>
			<H1
			// css={theme => ({
			// 	[mq[0]]: {
			// 		fontSize: '2rem'
			// 	},
			// 	[mq[1]]: {
			// 		color: theme.color.pink,
			// 		fontSize: '3rem'
			// 	}
			// })}
			>
				{node.name}
			</H1>
			>
			<p
				css={theme => ({
					[mq[0]]: {
						fontSize: '1rem',
						backgroundColor: t.color.pink,
						padding: '1rem'
					},
					[mq[1]]: {
						fontSize: '3rem',
						backgroundColor: t.color.black,
						color: t.color.white
					}
				})}
			>
				lorem10 tralala
			</p>
			<h2 css={fp({ fontSize: [ ...sizes.h2 ] })}>testing sinisa earn some money</h2>
			<MaxWidth>{node.image && <Image fluid={node.image.fluid} width={300} />}</MaxWidth>
		</div>
	))

// const responsive = fp({})
const H1 = styled.h1`
	${fp({
		color: t.color.white,
		padding: '.4rem',
		textTransform: 'uppercase',
		fontSize: [ ...t.sizes.p ]
	})};
`

const MaxWidth = styled.div`
	width: 100%;
	margin: auto;
	display: none;
	${mq[0]} {
		display: block;
	}
`
export default Players
