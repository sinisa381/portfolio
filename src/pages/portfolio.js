import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { MDXRenderer } from 'gatsby-mdx'
import useMdx from '../components/hooks/use-mdx'
// import { mq } from '../components/globals'
// import Img from 'gatsby-image'
import BckG from 'gatsby-background-image'
// import { graphql } from 'gatsby'
import { ImageGrid, FlexBox, Container, StyledBackgroundSection, Portfolio, A } from '../components/shared'
// import Project3 from '../components/project-3.js'

export default props => {
	// const parallax = this.props.data.parallax.childImageSharp.fluid
	// const hotelrooms = this.props.data.hotel.childImageSharp.fluid
	// const hotel = this.props.data.hotelr.childImageSharp.fluid
	const mdx = useMdx()
	return (
		<React.Fragment>
			<Layout location={props.location}>
				<SEO title='Home' keywords={[ `web developer`, `react`, `front end`, `developer` ]} />
				<Container>
					<FlexBox>
						{mdx.map((item, i) => (
							<div key={i}>
								<h1>{item.title && item.title}</h1>
								<MDXRenderer>{item.body}</MDXRenderer>
								<Bck fluid={item.sharp.fluid} Tag='div' />
								<Href href={item.path} rel='noopener noreferrer' target='_blank'>
									check the site here &rarr;
								</Href>
							</div>
						))}
						{/* {mdx.map((item, i) => (
							<div key={i}>
								<p>{item.title}</p>
								<p>{item.path}</p>
								<MDXRenderer>{item.body}</MDXRenderer>
								<Bck Tag='div' fluid={item.sharp.fluid} />
							</div>
						))} */}
						{/* <Bck Tag='div' fluid={parallax} />
							<Bck Tag='div' fluid={hotelrooms} />
							<Bck Tag='div' fluid={hotel} /> */}
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

							{/* {this.props.data.hotel &&
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
                )} */}

							{/* {this.props.data.parallax &&
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
													justifyContent: 'center',
													alignItems: 'center'
												}}
											>
												<span>PARALLAX</span> <span>PAGE</span>
											</A>
										</StyledBackgroundSection>
									</Portfolio>
                )} */}

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

// export const Query = graphql`
// 	query {
// 		hotelr: file(relativePath: { eq: "hotehotels.png" }) {
// 			childImageSharp {
// 				fluid(maxWidth: 1200) {
// 					...GatsbyImageSharpFluid
// 				}
// 			}
// 		}
// 		hotel: file(relativePath: { eq: "hoterooms.png" }) {
// 			childImageSharp {
// 				fluid(maxWidth: 1200) {
// 					...GatsbyImageSharpFluid
// 				}
// 			}
// 		}
// 		parallax: file(relativePath: { eq: "adventure-clouds.jpg" }) {
// 			childImageSharp {
// 				fluid(maxWidth: 1200) {
// 					...GatsbyImageSharpFluid
// 				}
// 			}
// 		}
// 	}
// `
// const StyledImage = styled.div`
// 	width: 100wv;
// 	height: 100wv;
// 	${mq[2]} {
// 		width: 50%;
// 		height: 20rem;
// 	}
// `

// const OmgImage = styled(Img)`
// width:100%;
// height:100%;
// `
const Bck = styled(BckG)`
box-shadow: 0 0 4px rgba(0, 0, 0, .125);
  height: 0;
  background-size: cover;
  padding-top: 50%;
  background-repeat:no-repeat;
`

const Href = styled.a`
	display: block;
	margin: 1rem 0 3rem;
`
