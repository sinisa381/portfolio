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
font-size:1rem !important;
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
	line-height: 1.4em;
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
export const Container = styled.div`
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
export const Image = styled.img`
	margin: 0;
	/* margin: .6rem; */
	width: 100%;
`

export const Box = styled.div`
	${mq[3]} {
		width: 100%;
		margin-bottom: 1.5rem;
		display: grid;
		grid-template-columns: 40vw 1fr;
		grid-gap: 40px;
		justify-content: center;
		align-items: center;
	}
`

export const ImageGrid = styled.div`
	width: 100%;
	display: grid;
	grid-gap: 1rem;
	${mq[1]} {
		width: 90%;
		margin: 0 auto;
		grid-template-columns: 1fr 1fr;
	}
	${mq[2]} {
		width: 80%;
	}
`
export const IconsBox = styled.div`
	display: grid;
	grid-gap: 20px;
	grid-auto-flow: column;
	justify-content: ${props => (props.justify ? props.justify : 'start')};
	align-items: center;
	margin-top: .5rem;
`
