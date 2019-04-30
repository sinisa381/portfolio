import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { Image, IconsBox, Box, FlexBox, BackgroundTitle, Title, Text, Container, Abbr } from '../components/shared'
import services from '../images/undraw/blue/undraw_software_engineer_lvl5.svg'
import mobileService from '../images/undraw/undraw_mobile_marketing_iqbr.svg'
import { FaWordpress } from 'react-icons/fa'

import { Fade } from 'react-reveal'

export default class Services extends React.Component {
	render() {
		const contentful = this.props.data.contentful.childImageSharp.fluid
		const location = this.props.location
		return (
			<Layout location={location}>
				<Container>
					<Box>
						<div style={{ marginBottom: '1.5rem' }}>
							<Title color='#000'>User friendly, responsive </Title>
							<Text color='#000'>
								Porro ex architecto incidunt vitae veniam quibusdam dicta voluptate quod at! Rem? Lorem
								ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolor asperiores
								voluptas odio omnis ipsum sapiente nobis accusamus illo dolore!
							</Text>
						</div>
						<Fade>
							<Image src={mobileService} alt='react picture' />
						</Fade>
					</Box>
					<div style={{ marginBottom: '3rem' }} />
					<div style={{ textAlign: 'center' }}>
						<Title color='#000'>CMS bases</Title>
						<IconsBox justify='center'>
							<Abbr title='wordpress'>
								<FaWordpress size='2rem' />
							</Abbr>
							<Abbr title='contentful'>
								<Img fluid={contentful} style={{ width: '2rem', display: 'inline-block' }} />
							</Abbr>
						</IconsBox>
					</div>
					<TextBox>
						<Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus expedita, maiores aut
							nisi ducimus ipsum quibusdam rem sunt unde ipsa! Incidunt nesciunt officiis nisi iste dolore
							earum quod molestias laboriosam illum repellat, doloribus voluptatibus reiciendis facere
							illo. Mollitia asperiores sunt, voluptatem, nemo nostrum voluptatibus nisi repellat voluptas
							dicta, rem nam?
						</Text>
					</TextBox>
					<WomanCmsContainer>
						<Fade>
							<Image src={services} alt='react picture' />
						</Fade>
					</WomanCmsContainer>
				</Container>
			</Layout>
		)
	}
}

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
		contentful: file(relativePath: { eq: "contentful.png" }) {
			childImageSharp {
				fluid(maxWidth: 1200) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
const WomanCmsContainer = styled.div`
	max-width: '45rem';
	margin: '0 auto';
	margin-top: '1rem';
`
const TextBox = styled.div`
	margin: 1rem 0;
	text-align: center;
`
