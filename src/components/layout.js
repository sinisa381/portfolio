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
				<link
					href='https://fonts.googleapis.com/css?family=Montserrat:200,400|Hind+Madurai|Josefin+Sans:300,400|Josefin+Sans:300,400|Lato:400,700|Mrs+Sheppards'
					rel='stylesheet'
				/>
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
								// padding: `0px 1.0875rem 1.45rem`,
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
	background-attachment: fixed;
	background-size: cover;
	background-color: #ffffff;
	height: 100vh;
`

export default Layout
