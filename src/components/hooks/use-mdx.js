import { useStaticQuery, graphql } from 'gatsby'

export default () => {
	const data = useStaticQuery(graphql`
		query {
			allMdx {
				nodes {
					code {
						body
					}
					frontmatter {
						title
						path
						image {
							sharp: childImageSharp {
								fluid(maxHeight: 450, maxWidth: 1000) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	`)
	return data.allMdx.nodes.map(item => ({
		...item.frontmatter.image,
		body: item.code.body,
		path: item.frontmatter.path,
		title: item.frontmatter.title
	}))
}
