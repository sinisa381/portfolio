// import React from 'react'
// import { graphql } from 'gatsby'

// import Layout from '../components/layout'

// class BlogPostTemplate extends React.Component {
// 	render() {
// 		// const post = this.props.data.markdownRemark
// 		// const siteTitle = this.props.data.site.siteMetadata.title
// 		// let items = []
// 		const data = this.props.data.allMarkdownRemark.edges.forEach(({ node }) => {
// 			return node.frontmatter.title
// 		})
// 		return (
// 			<Layout data={data} location={this.props.location} port={'tralala'}>
// 				<p>ovo je template da vidimo kako ovo radi</p>
// 				{/* <p>{data}</p> */}
// 			</Layout>
// 		)
// 	}
// }

// export default BlogPostTemplate
// export const Query = graphql`
// 	query {
// 		allMarkdownRemark {
// 			edges {
// 				node {
// 					frontmatter {
// 						title
// 					}
// 				}
// 			}
// 		}
// 	}
// `
