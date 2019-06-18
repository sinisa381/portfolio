import React from 'react'
import { A } from '../components/shared'
import { graphql, useStaticQuery } from 'gatsby'
import { StyledBackgroundSection, Portfolio } from './shared'

export default () => {
	const room = useStaticQuery(graphql`
		query {
			hotel: file(relativePath: { eq: "hotehotels.png" }) {
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
			<StyledBackgroundSection fluid={room.hotel.childImageSharp.fluid}>
				<p>View</p>
				<A href=' https://priceless-hypatia-841602.netlify.com/' rel='noopener noreferrer' target='_blank'>
					<span>Hotel</span> <span>rooms</span>
				</A>
			</StyledBackgroundSection>
		</Portfolio>
	)
}
