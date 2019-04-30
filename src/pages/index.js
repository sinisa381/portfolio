import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import {
	Image,
	ImageGrid,
	IconsBox,
	Box,
	FlexBox,
	BackgroundTitle,
	Title,
	Text,
	Container,
	Abbr
} from '../components/shared'
import { mq } from '../components/globals'
import reactUndraw from '../images/undraw/undraw_react_y7wq.svg'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import GatsbyIcon from '../images/gatsby-icon.png'

class BlogPostTemplate extends React.Component {
	render() {
		const whitelaptop = this.props.data.whitelaptop.childImageSharp.fluid
		const blacklaptop = this.props.data.blacklaptop.childImageSharp.fluid
		const data = this.props.data.allMarkdownRemark.edges.forEach(({ node }) => {
			return node.frontmatter.title
		})
		return (
			<Layout data={data} location={this.props.location} port={'tralala'}>
				<Container>
					<Box>
						<MarginBot>
							<Image src={reactUndraw} alt='react picture' />
						</MarginBot>
						<div>
							<Title color='#000'>Fast and reliable</Title>
							<Text color='#000'>
								Porro ex architecto incidunt vitae veniam quibusdam dicta voluptate quod at! Rem? Lorem
								ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolor asperiores
								voluptas odio omnis ipsum sapiente nobis accusamus illo dolore!
							</Text>
							<IconsBox>
								<Abbr title='react'>
									<FaReact color='#53C1DE' size='2rem' />
								</Abbr>
								<Abbr title='gatsby'>
									<img src={GatsbyIcon} style={{ width: '2rem', height: '2rem', margin: 0 }} />
								</Abbr>
								<Abbr title='javascript'>
									<FaJsSquare color='#FCCF11' size='2rem' />
								</Abbr>
								<Abbr title='html'>
									<FaHtml5 color='#E34F26' size='2rem' />
								</Abbr>
								<Abbr title='css'>
									<FaCss3Alt color='#4498B5' size='2rem' />
								</Abbr>
							</IconsBox>
						</div>
					</Box>
				</Container>
				<div style={{ textAlign: 'center' }}>
					<Title>Lorem ipsum dolor sit amet.</Title>
				</div>
				<ImageGrid>
					<Img fluid={whitelaptop} />
					<Img fluid={blacklaptop} />
				</ImageGrid>
			</Layout>
		)
	}
}

export default BlogPostTemplate
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

const MarginBot = styled.div`
	img {
		margin-bottom: 1rem;
	}
`
