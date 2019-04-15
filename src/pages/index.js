import React from 'react'
import { graphql } from 'gatsby'
import svgtest from '../images/undraw/undraw_code_review_l1q9.svg'
import { Backpack, Browser } from 'react-kawaii'
import Layout from '../components/layout'
import { FlexBox } from '../components/shared'

class BlogPostTemplate extends React.Component {
	render() {
		// const post = this.props.data.markdownRemark
		// const siteTitle = this.props.data.site.siteMetadata.title
		// let items = []
		const data = this.props.data.allMarkdownRemark.edges.forEach(({ node }) => {
			return node.frontmatter.title
		})
		return (
			<Layout data={data} location={this.props.location} port={'tralala'}>
				<div style={{}}>
					<FlexBox justify='space-around'>
						<Browser size={150} mood='lovestruck' color='#61DDBC' />
						<p>Aaaa kakve su slicice :)</p>
					</FlexBox>
					<img
						src={svgtest}
						alt='svgtest'
						style={{
							width: '20rem',
							height: '20rem'
						}}
					/>
				</div>
				<Backpack size={220} mood='excited' color='#FFD882' />
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
	}
`
