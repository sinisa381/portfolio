import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
	const data = useStaticQuery(graphql`
		{
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
	`)
	return <div>works nice</div>
}
