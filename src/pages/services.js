import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Image, Box, FlexBox, BackgroundTitle, Title, Text, Container, Abbr } from '../components/shared'
import services from '../images/undraw/blue/undraw_software_engineer_lvl5.svg'
import mobileService from '../images/undraw/undraw_mobile_marketing_iqbr.svg'

import { Fade } from 'react-reveal'

export default ({ location }) => (
	<Layout location={location}>
		<Container>
			<Box>
				<div style={{ marginBottom: '1.5rem' }}>
					<Title color='#000'>User friendly, responsive </Title>
					<Text color='#000'>
						Porro ex architecto incidunt vitae veniam quibusdam dicta voluptate quod at! Rem? Lorem ipsum
						dolor sit amet, consectetur adipisicing elit. Exercitationem dolor asperiores voluptas odio
						omnis ipsum sapiente nobis accusamus illo dolore!
					</Text>
				</div>
				<Fade>
					<Image src={mobileService} alt='react picture' />
				</Fade>
			</Box>
			<div style={{ maxwidth: '45rem', margin: '0 auto' }}>
				<Fade>
					<Image src={services} alt='react picture' />
				</Fade>
			</div>
		</Container>
	</Layout>
)

export const Query = graphql`
	query {
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						title
					}
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
		blacklaptop: file(relativePath: { eq: "black.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1200) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
