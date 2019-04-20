import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { FlexBox, Title, Text, HomeSection } from '../components/shared'
import { mq } from '../components/globals'
import reactUndraw from '../images/undraw/undraw_react_y7wq.svg'
import Layout from '../components/layout'
import Img from 'gatsby-image'

class BlogPostTemplate extends React.Component {
	render() {
    const slika = this.props.data.slicica.childImageSharp.fluid
		const data = this.props.data.allMarkdownRemark.edges.forEach(({ node }) => {
			return node.frontmatter.title
		})
		return (
			<Layout data={data} location={this.props.location} port={'tralala'}>
				<HomeSection>
					<Image
						src={reactUndraw}
						alt='react picture'
						style={{
							width: '18rem',
							height: '18rem'
						}}
					/>
					<Box>
						<Title>Fast and reliable</Title>
						<Text>
							Hello and <span>welcome</span>. I'm a frontend developer specialized in React and Gatsby
							combined with Contentful or Wordpress. Happy hunting!
						</Text>
					</Box>
<div style={{width:'100%'}}>
          <Img fluid={slika}  />
</div>
				</HomeSection>
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
		slicica: file(relativePath: { eq: "code.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 300) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`

const Image = styled.img`margin: 0;`
const Box = styled.div`
	width: 100%;
	border: none;
	margin-left: 1rem;
	padding: 0rem;
	padding-left: 0rem;
	${mq[1]} {
		width: 70%;
	}
	${mq[2]} {
		width: 50%;
		margin-left: 2rem;
		padding: 2rem;
		padding-left: 2rem;
		border-left: 1px solid rgba(0, 0, 0, .2);
	}
`
