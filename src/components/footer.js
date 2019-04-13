import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = ({ site }) => {
	const { title } = site
	const data = useStaticQuery(graphql`
		{
			allContentfulVlasnik {
				edges {
					node {
						ime
						slika {
							fixed(width: 300) {
								...GatsbyContentfulFixed_withWebp_noBase64
							}
						}
					}
				}
			}
		}
	`)
	return (
		<footer
			css={theme => ({
				background: theme.color.sunny,
				marginBottom: `0`,
				fontFamily: theme.font.heading
			})}
		>
			<div>
				{title}
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href='https://www.gatsbyjs.org'>Gatsby</a>
			</div>
		</footer>
	)
}

export default Footer
