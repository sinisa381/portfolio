require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
})
module.exports = {
	siteMetadata: {
		title: `Platforma`,
		description: `random dev description in config`,
		author: `@sinisacolic`,
		about: `web development`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		'gatsby-plugin-emotion',
		{
			resolve: `gatsby-plugin-material-ui`,
			options: {
				// Add any options here
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/markd`,
				name: 'markdown-pages'
			}
		},
		{
			resolve: `gatsby-mdx`,
			options: {
				// Apply gatsby-mdx to both .mdx and .md files
				extensions: [ '.mdx', '.md' ]
			}
		},

		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-images'
					}
				]
			}
		},
		// {
		// 	resolve: `@wapps/gatsby-plugin-fonts`,
		// 	options: {
		// 		googleFonts: {
		// 			families: [ 'Montserrat:300,300i,400', 'Roboto:400,500,500i', 'Open Sans' ]
		// 		}
		// 	}
		// },

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `logo`,
				path: `${__dirname}/src/logo`
			}
		},
		// {
		// 	resolve: `gatsby-source-filesystem`,
		// 	options: {
		// 		name: `portfolio`,
		// 		path: `${__dirname}/src/portfolio`
		// 	}
		// },
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// 'gatsby-plugin-offline',
	]
}
