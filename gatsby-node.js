const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = ({ graphql, actions }) => {
// 	const { createPage } = actions

// 	return new Promise((resolve, reject) => {
// 		const blogPostTemplate = path.resolve(`src/templates/blog-posts.js`)
// 		// Query for markdown nodes to use in creating pages.
// 		resolve(
// 			graphql(
// 				`
//           {
//             allMarkdownRemark(filter:{frontmatter:{publish:{eq:true}}}){
//               edges{
//                 node{
//                   frontmatter{
//                     title
//                   }
//                 }
//               }
//             }
//           }
//         `
// 			).then(result => {
// 				if (result.errors) {
// 					reject(result.errors)
// 				}

// 				// Create pages for each markdown file.
// 				result.data.allMarkdownRemark.edges.forEach(({ node }) => {
// 					const path = node.frontmatter.title
// 					createPage({
// 						path,
// 						component: blogPostTemplate,
// 						// In your blog post template's graphql query, you can use path
// 						// as a GraphQL variable to query for data from the markdown file.
// 						context: {
// 							slug: path
// 						}
// 					})
// 				})
// 			})
// 		)
// 	})
// }

// exports.onCreateNode = ({ node, getNode, actions }) => {
// 	const { createNodeField } = actions
// 	if (node.internal.type === 'MarkdownRemark') {
// 		const slug = createFilePath({ node, getNode, basePath: 'posts' })
// 		createNodeField({
// 			node,
// 			name: 'slug',
// 			value: slug
// 		})
// 	}
// }
