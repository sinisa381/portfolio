import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { ImageGrid, IconsBox, Box, FlexBox, BackgroundTitle, Title, Text, Container, Abbr } from '../components/shared'
import BackgroundImage from 'gatsby-background-image'
import Backgrnd from '../components/background-image'

export default class Portfolio extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Layout location={this.props.location}>
					<SEO title='Home' keywords={[ `web developer`, `react`, `front end`, `developer` ]} />
					<Container>
						<FlexBox>
							{/* <Backgrnd /> */}

							<Backgrnd />
							{/* {this.props.data.allFile.edges.map(({ node }, i) => (
								<Img
									alt={node.childImageSharp.src}
									title='slika'
									fluid={node.childImageSharp.fluid}
									key={i}
									style={{ width: '10rem', height: '10rem' }}
								/>
							))} */}
							<ImageGrid>
								{/* <Image Tag='section' fluid={blacklaptop} backgroundColor={`#040e18`} />
								<Image fluid={whitelaptop} />
								<Image fluid={whitelaptop} />
								<BackgroundImage fluid={whitelaptop} />
								<Image fluid={whitelaptop} />
								<Image fluid={whitelaptop} /> */}
							</ImageGrid>
						</FlexBox>
					</Container>
				</Layout>
			</React.Fragment>
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
		# mapoverme: allFile(
		# 	filter: { extension: { regex: "/(jpeg|jpg|gif|png)/" }, sourceInstanceName: { eq: "portfolio" } }
		# ) {
		# 	edges {
		# 		node {
		# 			childImageSharp {
		# 				fluid(maxWidth: 1200) {
		# 					...GatsbyImageSharpFluid
		# 				}
		# 			}
		# 		}
		# 	}
		# }
	}
`
