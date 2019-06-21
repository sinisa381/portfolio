import { useStaticQuery, graphql } from 'gatsby'
export default () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				meta: siteMetadata {
					menu: menuLinks {
						path
						name
					}
				}
			}
		}
	`)
	return data.site.meta.menu
}
