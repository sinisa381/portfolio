import React from 'react'
import styled from '@emotion/styled'
import { graphql, StaticQuery } from 'gatsby'

import { StyledBackgroundSection, Portfolio } from './shared'

export default () => (
	<StaticQuery
		query={graphql`
			{
				file(relativePath: { eq: "adventure-clouds.jpg" }) {
					childImageSharp {
						fluid(maxWidth: 1200) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		`}
		render={data => {
			return (
				<Portfolio>
					<StyledBackgroundSection fluid={data.file.childImageSharp.fluid}>
						<p>View</p>
						<A
							href='
https://priceless-hypatia-841602.netlify.com/
'
							rel='noopener noreferrer'
							target='_blank'
						>
							<span>LANDING</span> <span>PAGE</span>
						</A>
					</StyledBackgroundSection>
					{/* <div style={{ width: '10rem', height: '10rem' }}>
						<Image fluid={data.file.childImageSharp.fluid} />
					</div> */}
				</Portfolio>
			)
		}}
	/>
)
const A = styled.a`
	text-decoration: none;
	color: #f8da74;
	display: flex;
	flex-direction: column;
	font-family: Lato, sans-serif;
	align-items: center;
	font-weight: bold;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	opacity: 1;
`
