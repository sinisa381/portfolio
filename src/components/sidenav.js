import React from 'react'
import SideNav from 'react-simple-sidenav'
import { theme } from './globals'
import { NavItem } from './shared'

const SideNavigation = props => {
	return (
		<div>
			<SideNav
				showNav={props.showNav}
				onHideNav={props.onHideNav}
				navStyle={{
					background: theme.color.green,
					maxWidth: '220px'
				}}
			>
				<NavItem nav to='/' activeStyle={{ background: 'rgba(0,0,0,.2)', width: '100%' }}>
					home
				</NavItem>
				{props.items.allMarkdownRemark.edges.map(({ node }) => {
					const item = node.frontmatter.title
					return (
						<NavItem
							nav
							to={`${item}/`}
							key={item}
							activeStyle={{ background: 'rgba(0,0,0,.2)', width: '100%' }}
						>
							{item}
						</NavItem>
					)
				})}
			</SideNav>
		</div>
	)
}

export default SideNavigation
