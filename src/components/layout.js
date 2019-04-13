import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'emotion-theming'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import './layout.css'
import { theme } from './globals'

import Header from './header'
import Footer from './footer'

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true
const Layout = ({ children, data, location }) => {
	const { site } = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					author
					about
				}
			}
		}
	`)
	const { siteMetadata } = site
	return (
		<React.Fragment>
			<Helmet>
				<link href='https://fonts.googleapis.com/css?family=Montserrat:200,400' rel='stylesheet' />
				<link href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300i' rel='stylesheet' />
				<link href='https://fonts.googleapis.com/css?family=Lato:400,700|Mrs+Sheppards' rel='stylesheet' />
			</Helmet>
			<MasterBackground>
				<ThemeProvider theme={theme}>
					<Header site={siteMetadata} data={data} location={location} />
					<div>
						<div
							css={theme => ({
								margin: `0 auto`,
								maxWidth: 960,
								marginTop: '1rem',
								padding: `0px 1.0875rem 1.45rem`,
								paddingTop: 0
							})}
						>
							{children}
						</div>
					</div>
					<Footer site={siteMetadata} />
				</ThemeProvider>
			</MasterBackground>
		</React.Fragment>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
}

const MasterBackground = styled.div`
	background-color: #7d4acf;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23e626c1'/%3E%3Cstop offset='1' stop-color='%23e626c1' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23264ee6'/%3E%3Cstop offset='1' stop-color='%23264ee6' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%239900ff'/%3E%3Cstop offset='1' stop-color='%239900ff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%237d4acf'/%3E%3Cstop offset='1' stop-color='%237d4acf' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FF0000'/%3E%3Cstop offset='1' stop-color='%23FF0000' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230CF'/%3E%3Cstop offset='1' stop-color='%230CF' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
	background-attachment: fixed;
	background-size: cover;
`

export default Layout
