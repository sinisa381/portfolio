import React from 'react'
import { A } from '../components/shared'
import { graphql, useStaticQuery } from 'gatsby'

import { StyledBackgroundSection, Portfolio } from './shared'

export default () => {
	const priceless = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "adventure-clouds.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1200) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)
	return (
		<Portfolio>
			<StyledBackgroundSection fluid={priceless.file.childImageSharp.fluid}>
				<p>View</p>
				<A href=' https://priceless-hypatia-841602.netlify.com/' rel='noopener noreferrer' target='_blank'>
					<span>LANDING</span> <span>PAGE</span>
				</A>
			</StyledBackgroundSection>
		</Portfolio>
	)
}
