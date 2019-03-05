import React, { Fragment } from 'react'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const Players = ({ players }) =>
	players.map(({ node }) => (
		<Fragment>
			<h1
				css={css`
					background-color: #000000;
					color: red;
					text-transform: capitalize;
				`}
			>
				{node.name}
			</h1>
			<MaxWidth>{node.image && <Image fluid={node.image.fluid} width={300} />}</MaxWidth>
		</Fragment>
	))
const MaxWidth = styled.div`
	width: 40rem;
	margin: auto;
`
export default Players
