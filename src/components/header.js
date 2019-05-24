import React, { useState } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { FaBars } from 'react-icons/fa'
// import { css } from '@emotion/core'
import UncontrolledLottie from './lottie_anime'
import SideNav from './sidenav'
import { FlexBox, NavItem } from './shared'
import { useStaticQuery } from 'gatsby'
import Heading from './heading'
import { mq } from './globals'

const Header = ({ site, location }) => {
	const [ showNav, setShowNav ] = useState(false)
	const opennav = () => setShowNav(true)
	const closenav = () => setShowNav(false)
	const { about, author, description, title } = site
	const navItems = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							path
						}
					}
				}
			}
		}
	`)
	const navigationItems = color => (
		<React.Fragment>
			<NavItem
				style={{ color }}
				activeStyle={{
					color: 'rgba(0,0,0,.7)',
					borderBottom: '1px solid rgba(0,0,0,.7)'
				}}
				to='/'
			>
				home
			</NavItem>

			{navItems.allMarkdownRemark.edges.map(({ node }) => {
				const item = node.frontmatter.title
				const linkTo = node.frontmatter.path

				return (
					<NavItem
						activeStyle={{
							color: 'rgba(0,0,0,1)',
							borderBottom: '1px solid rgba(0,0,0,.8)'
						}}
						to={linkTo}
						key={item}
					>
						{item}
					</NavItem>
				)
			})}
		</React.Fragment>
	)

	return (
		<React.Fragment>
			<Nav
				css={theme => ({
					background: theme.color.white,
					color: theme.color.dark,
					// marginBottom: `0`,
					fontFamily: theme.font.heading
				})}
			>
				<SideNav
					showNav={showNav}
					onHideNav={() => closenav()}
					onOpenNav={() => opennav()}
					navStyle={{
						maxWidth: '220px'
					}}
					items={navItems}
				/>
				<NavContainer>
					<FlexBox
						justify='space-between'
						css={theme => ({ color: theme.color.sunny, marginBottom: '2rem' })}
					>
						<Lottiebox>
							<UncontrolledLottie location={location} />
						</Lottiebox>
						<FlexBox width='200px'>
							{navigationItems()}
							<BarsStyled onClick={() => setShowNav(true)} />
						</FlexBox>
					</FlexBox>
					<Heading location={location} />
					<hr style={{ margin: '1.5rem 0' }} />
					{/* <div
					css={{
						margin: `0 auto`,
						maxWidth: 960,
						padding: `1.45rem 1.0875rem`,
						fontFamily: 'Roboto'
					}}
				> */}

					{/* <h1 css={{ margin: 0, marginBottom: '1rem' }}>
						<Link
							to='/'
							css={theme => ({
								color: theme.color.pink,
								// fontFamily: theme.font.heading,
								fontFamily: 'Montserrat',
								fontWeight: theme.weight.two,
								textDecoration: `none`
							})}
						>
							{title}
						</LogoBox>
					</h1>
					<h3 css={theme => ({ color: '#e5e5e5e5', margin: 0, marginBottom: '1rem' })}>{description}</h3>
					<h2 css={theme => ({ color: 'papayawhip', margin: 0, marginBottom: '1rem' })}>{author}</h2>
        </div> */}
				</NavContainer>
			</Nav>
		</React.Fragment>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string
}

Header.defaultProps = {
	siteTitle: ``
}

export default Header

const Nav = styled.nav`
	width: 100%;
	color: black;
	overflow: hidden;
`

const NavContainer = styled.div`
	margin: 0 auto;
	width: 80%;
	position: relative;
`

const BarsStyled = styled(FaBars)`
display:block;
  ${mq[2]}{
    display:none;
  }
  color:rgba(0,0,0,.6);
`
const Lottiebox = styled.div`
	width: 6rem;
	height: 6rem;
`
