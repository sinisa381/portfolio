import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import { StyledBackgroundSection } from '../components/shared'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = () => (
	<StaticQuery
		query={graphql`
			query {
				blacklaptop: file(relativePath: { eq: "black.jpg" }) {
					childImageSharp {
						fluid(maxWidth: 1200) {
							...GatsbyImageSharpFluid
						}
					}
				}
				whitelaptop: file(relativePath: { eq: "black-contemporary-desk-296115.jpg" }) {
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
				<React.Fragment>
					<StyledBackgroundSection Tag='blacklaptop' fluid={data.blacklaptop.childImageSharp.fluid}>
						<h1>sinisa</h1>
					</StyledBackgroundSection>
					<StyledBackgroundSection Tag='whitelaptop' fluid={data.whitelaptop.childImageSharp.fluid}>
						<h1>sinisa</h1>
					</StyledBackgroundSection>
				</React.Fragment>
			)
		}}
	/>
)

export default BackgroundSection
