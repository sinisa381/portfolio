import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { mq } from './globals'

export const FlexBox = styled.div`
	display: flex;
	justify-content: ${props => (props.justify ? props.justify : 'center')};
	align-items: ${props => (props.items ? props.items : 'center')};
  flex-wrap:wrap;
	/* width: ${props => props.width && props.width}; */
`
export const NavItem = styled(Link)`
display:${props => (props.nav ? 'block' : 'none')};
${mq[2]}{
  display:block;
}
padding:4px 0;
font-family:Lato, sans-serif;
text-decoration:none;
font-size: ${props => (props.nav ? '.6rem' : '1rem')};
margin-left: 1.4rem;
margin-top:${props => props.nav && '.5rem'};
color: ${props => (props.nav ? '#ffffff' : 'rgba(0,0,0,.5)')};
position:relative;
	transition: text-shadow .3s;
  letter-spacing:2px;
  &:hover{
	text-shadow: 0 0 .65px #333, 0 0 .65px #333;
  }
/* &:after{
  content:'';
  position:absolute;
  width:100%;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  height:1px;
  color:black;
  background-color:black;
  transition:all .2s;
} */
`
