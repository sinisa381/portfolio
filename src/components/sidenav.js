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
				{props.navItems.map(item => {
					return (
						<NavItem
							nav
							to={item.path}
							key={item.name}
							activeStyle={{ background: 'rgba(0,0,0,.2)', width: '100%' }}
						>
							{item.name}
						</NavItem>
					)
				})}
			</SideNav>
		</div>
	)
}

export default SideNavigation
