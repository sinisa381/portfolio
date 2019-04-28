import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { mq, theme } from './globals'

export const FlexBox = styled.div`
	display: flex;
	justify-content: ${props => (props.justify ? props.justify : 'center')};
	align-items: ${props => (props.items ? props.items : 'center')};
	flex-wrap: wrap;
`
export const NavItem = styled(Link)`
cursor:pointer;
display:${props => (props.nav ? 'block' : 'none')};
${mq[2]}{
  display:block; 
}
padding:4px 0;
font-family:${theme.font.heading};
font-family: 'Josefin Sans', sans-serif;
font-family: 'Lato', sans-serif;
text-decoration:none;
font-size: ${props => (props.nav ? '.6rem' : '1rem')};
margin-left: 1.4rem;
margin-top:${props => props.nav && '.5rem'};
color: ${props => (props.nav ? '#ffffff' : 'rgba(0,0,0,.5)')};
margin:${props => props.nav && 0};
padding:${props => props.nav && '8px 20px'};
font-variant:${props => props.nav && 'small-caps'}
`

export const Title = styled.h1`
	padding: 0;
	margin-bottom: .8rem;
	font-family: Lato, sans-serif;
	font-weight: 300;
	font-size: 1.25rem;
	${mq[1]} {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
	${mq[2]} {
		font-size: 2.25rem;
		margin-bottom: 1.5rem;
	}
	color: ${props => (props.color ? props.color : '#000000')};
`

export const Text = styled.p`
	font-size: .875rem;
	line-height: 1.2em;
	${mq[1]} {
		font-size: 1rem;
	}
	${mq[2]} {
		font-size: 1.25rem;
	}
	font-family: 'Hind madurai', sans-serif;
	font-weight: 300;
	color: ${props => (props.color ? props.color : 'black')};
	margin: 0;
	padding: 0;
`
export const HomeSection = styled.div`
	width: 90%;
	margin: 0 auto;
	margin-bottom: 1rem;
	${mq[1]} {
		width: 90%;
		margin-bottom: 1rem;
	}
	${mq[2]} {
		width: 80%;
		margin-bottom: 1rem;
	}
`

export const BackgroundTitle = styled.div`
	background-color: #a9acb1;
	padding: 2rem;
	width: 100%;
	${mq[1]} {
	}
`

export const Abbr = styled.abbr`
	border-bottom: none !important;
	cursor: default !important;
	text-decoration: none !important;
	padding: 0 !important;
	margin: 0 !important;
`
