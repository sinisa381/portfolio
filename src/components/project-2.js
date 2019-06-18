import React from 'react'
import { A } from '../components/shared'
import { graphql, StaticQuery } from 'gatsby'
import { StyledBackgroundSection, Portfolio } from './shared'

export default () => (
	<StaticQuery
		query={graphql`
			{
				hotel: file(relativePath: { eq: "hotehotels.png" }) {
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
					<StyledBackgroundSection fluid={data.hotel.childImageSharp.fluid}>
						<p>View</p>
						<A
							href=' https://priceless-hypatia-841602.netlify.com/'
							rel='noopener noreferrer'
							target='_blank'
						>
							<span>Hotel</span> <span>rooms</span>
						</A>
					</StyledBackgroundSection>
				</Portfolio>
			)
		}}
	/>
)
