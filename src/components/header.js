import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FaBars } from 'react-icons/fa'
import {Container} from '../components/shared'
import UncontrolledLottie from './lottie_anime'
import useMenuLinks from './hooks/use-menu-links'
import SideNav from './sidenav'
import { FlexBox, NavItem } from './shared'
import Heading from './heading'
import { mq } from './globals'

const Header = props => {
	const [ showNav, setShowNav ] = useState(false)
	const opennav = () => setShowNav(true)
	const closenav = () => setShowNav(false)
	const navItems = useMenuLinks()
	const navigationItems = color => (
		<React.Fragment>
			{navItems.map(item => {
				return (
					<NavItem
						activeStyle={{
							color: 'rgba(0,0,0,1)',
							borderBottom: '1px solid rgba(0,0,0,.8)'
						}}
						to={item.path}
						key={item.name}
					>
						{item.name}
					</NavItem>
				)
			})}
		</React.Fragment>
	)

	return (
		<Container>
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
					navItems={navItems}
				/>
				<NavContainer>
					<FlexBox
						justify='space-between'
						css={theme => ({ color: theme.color.sunny, marginBottom: '2rem' })}
					>
						<Lottiebox>
							<UncontrolledLottie location={props.location} />
						</Lottiebox>
						<FlexBox width='200px'>
							{navigationItems()}
							<BarsStyled onClick={() => setShowNav(true)} />
						</FlexBox>
					</FlexBox>
					<Heading location={props.location} />
					<hr style={{ margin: '1.5rem 0' }} />
				</NavContainer>
			</Nav>
		</Container>
	)
}

export default Header

const Nav = styled.nav`
	width: 100%;
	color: black;
	overflow: hidden;
`

const NavContainer = styled.div`
	margin: 0 auto;
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
