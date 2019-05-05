import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import { mq, theme } from './globals'
import Image from 'gatsby-image'

import { StyledBackgroundSection, Portfolio } from './shared'

const BackgroundSection = () => (
	<StaticQuery
		query={graphql`
			{
				file(relativePath: { eq: "black.jpg" }) {
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
						<a href='https://www.google.com' rel='noopener noreferrer' target='__blank'>
							visit
						</a>
					</StyledBackgroundSection>
					{/* <div style={{ width: '10rem', height: '10rem' }}>
						<Image fluid={data.file.childImageSharp.fluid} />
					</div> */}
				</Portfolio>
			)
		}}
	/>
)

export default BackgroundSection
