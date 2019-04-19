import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { mq, theme } from './globals'

export const FlexBox = styled.div`
	display: flex;
	justify-content: ${props => (props.justify ? props.justify : 'center')};
	align-items: ${props => (props.items ? props.items : 'center')};
  flex-wrap:wrap;
	/* width: ${props => props.width && props.width}; */
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
/* font-family: 'Montserrat', sans-serif; */
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
	font-family: Lato, sans-serif;
	font-weight: 300;
	font-size: 1.9rem;
`

export const Text = styled.p`
	font-size: .5rem;
	${mq[1]} {
		font-size: 1rem;
	}
	font-family: 'Hind madurai', sans-serif;
	font-weight: 300;
	font-size: 1rem;
	color: ${props => (props.color ? props.color : 'black')};
	margin: 0;
	padding: 0;
`
export const HomeSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`
