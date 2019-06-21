require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
})
module.exports = {
	siteMetadata: {
		title: `Platforma`,
		description: `random dev description in config`,
		author: `@sinisacolic`,
		about: `web development`,
		menuLinks: [
			{ path: '/', name: 'home' },
			{ path: '/about/', name: 'about' },
			{ path: '/portfolio/', name: 'portfolio' },
			{ path: '/services/', name: 'services' },
			{ path: '/contact/', name: 'contact' }
		]
	},

	plugins: [
		`gatsby-plugin-react-helmet`,
		'gatsby-plugin-emotion',
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-mdx`,
			options: {
				defaultLayouts: {
					default: require.resolve('./src/components/layout.js')
				},
				gatsbyRemarkPlugins: [
					{
						resolve: 'gatsby-remark-images'
					}
				]
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				path: `posts`
			}
		},

		{
			resolve: 'gatsby-plugin-webpack-bundle-analyzer',
			options: {
				production: true,
				disable: !process.env.ANALYZE_BUNDLE_SIZE,
				generateStatsFile: true,
				analyzerMode: 'static'
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
				path: `./src/images`
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
