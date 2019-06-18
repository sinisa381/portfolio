import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from '@emotion/styled'
import { mq } from '../components/globals'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { ImageGrid, FlexBox, Container, StyledBackgroundSection, Portfolio, A } from '../components/shared'
// import Project3 from '../components/project-3.js'

export default class Portfoliopage extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const parallax = this.props.data.parallax.childImageSharp.fluid
		const hotelrooms = this.props.data.hotel.childImageSharp.fluid
		const hotel = this.props.data.hotelr.childImageSharp.fluid
		return (
			<React.Fragment>
				<Layout location={this.props.location}>
					<SEO title='Home' keywords={[ `web developer`, `react`, `front end`, `developer` ]} />
					<Container>
						<FlexBox>
							{/* <Backgrnd /> */}
							{/* {this.props.data.allFile.edges.map(({ node }, i) => (
								<Img
									alt={node.childImageSharp.src}
									title='slika'
									fluid={node.childImageSharp.fluid}
									key={i}
									style={{ width: '10rem', height: '10rem' }}
								/>
              ))} */}
							{/* <GatsbyImage fluid={} /> */}
							<ImageGrid>
								{/* <StyledImage>
									{blacklaptop && <OmgImage fluid={blacklaptop} alt='black laptop' />}
								</StyledImage> */}

								{this.props.data.hotel &&
								this.props.data.hotel.childImageSharp.fluid && (
									<Portfolio>
										<StyledBackgroundSection Tag='div' fluid={hotelrooms} alt='hotelrooms'>
											<p style={{ color: '#000' }}>View</p>
											<A
												href='https://elastic-nobel-354155.netlify.com/'
												rel='noopener noreferrer'
												target='_blank'
												style={{ display: 'block', width: '100%', height: '100%' }}
											/>
										</StyledBackgroundSection>
									</Portfolio>
								)}
								{this.props.data.parallax &&
								this.props.data.parallax.childImageSharp.fluid && (
									<Portfolio>
										<StyledBackgroundSection Tag='div' fluid={parallax} alt='parallax'>
											<p>View</p>
											<A
												href=' https://priceless-hypatia-841602.netlify.com/'
												rel='noopener noreferrer'
												target='_blank'
												style={{
													display: 'block',
													width: '100%',
													height: '100%',
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center'
												}}
											>
												<span>PARALLAX</span> <span>PAGE</span>
											</A>
										</StyledBackgroundSection>
									</Portfolio>
								)}
								{/* <Parralax />
								<Hotelrooms /> */}
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

// export const Query = graphql`
// 	query {
// 		parallax: file(relativePath: { eq: "adventure-clouds.jpg" }) {
// 			childImageSharp {
// 				fluid(maxWidth: 1200) {
// 					...GatsbyImageSharpFluid
// 				}
// 			}
// 		}
// 		hotel: file(relativePath: { eq: "code.jpg" }) {
// 			childImageSharp {
// 				fluid(maxWidth: 1200) {
// 					...GatsbyImageSharpFluid
// 				}
// 			}
// 		}
// 		whitelaptop: file(relativePath: { eq: "black-contemporary-desk-296115.jpg" }) {
// 			childImageSharp {
// 				fluid(maxWidth: 1200) {
// 					...GatsbyImageSharpFluid
// 				}
// 			}
// 		}
// 	}
// `

// allMarkdownRemark {
// 	edges {
// 		node {
// 			frontmatter {
// 				title
// 			}
// 		}
// 	}
// }
//  mapoverme: allFile(
//  	filter: { extension: { regex: "/(jpeg|jpg|gif|png)/" }, sourceInstanceName: { eq: "portfolio" } }
//  ) {
//  	edges {
//  		node {
//  			childImageSharp {
//  				fluid(maxWidth: 1200) {
//  					...GatsbyImageSharpFluid
//  				}
//  			}
//  		}
//  	}
//  }

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
		hotelr: file(relativePath: { eq: "hotehotels.png" }) {
			childImageSharp {
				fluid(maxWidth: 1200) {
					...GatsbyImageSharpFluid
				}
			}
		}
		hotel: file(relativePath: { eq: "hoterooms.png" }) {
			childImageSharp {
				fluid(maxWidth: 1200) {
					...GatsbyImageSharpFluid
				}
			}
		}
		parallax: file(relativePath: { eq: "adventure-clouds.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1200) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
const StyledImage = styled.div`
	width: 100wv;
	height: 100wv;
	${mq[2]} {
		width: 50%;
		height: 20rem;
	}
`

const OmgImage = styled(Img)`
width:100%;
height:100%;
`
