import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
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
				</Portfolio>
			)
		}}
	/>
)

export default BackgroundSection
