import React from 'react'
import Layout from '../../components/layout'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Container } from '../../components/shared'
import { mq } from '../../components/globals'
import { Abbr, Title } from '../../components/shared'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default ({ location }) => (
	<Layout location={location}>
		<Container>
			<Title
				css={css(`
      margin-bottom:1rem ;
      ${mq[2]}{
      margin-bottom:2rem ;
      }
      `)}
			>
				You can contact me on social media or write me a message here.
			</Title>
			<Box>
				<Social>
					<Abbr title='facebook'>
						<LinkIcon
							href='https://www.facebook.com/sinisa.d.colic'
							target='__blank'
							rel='noopener noreferer'
						>
							<FaFacebook color='#405D9A' size='2rem' />
						</LinkIcon>
					</Abbr>
				</Social>
				<Social>
					<Abbr title='twitter'>
						<LinkIcon href='https://twitter.com/Sinisa820' target='__blank' rel='noopener noreferer'>
							<FaTwitter color='#1DA1F2' size='2rem' />
						</LinkIcon>
					</Abbr>
				</Social>
				<Social>
					<Abbr title='linkedin'>
						<LinkIcon
							href='https://www.linkedin.com/in/sinisa-colic-245228187/'
							target='__blank'
							rel='noopener noreferer'
						>
							<FaLinkedin color='#0077B5' size='2rem' />
						</LinkIcon>
					</Abbr>
				</Social>
			</Box>
			<FormContainer
				method='POST'
				action='/success/'
				name='contact'
				data-netlify='true'
				data-netlify-honeypot='bot-field'
			>
				<Input type='hidden' name='bot-field' />
				<Input type='hidden' name='form-name' value='contact' />
				<Input type='text' name='name' id='name' placeholder='enter your name' />
				<Input type='text' name='email' placeholder='enter your email' id='email' />
				<Label htmlFor='Message'>Message</Label>
				<Textarea name='message' id='message' rows='5' cols='30' />
				<Button type='submit'>Send Message</Button>
				<Button type='reset'>Clear</Button>
			</FormContainer>
		</Container>
	</Layout>
)

const color = css`color: ${props => props.theme.color.contact};`
const FontfamilyandOutline = css`
	font-family: 'Hind madurai', sans-serif;
	font-size: 1rem;
	font-weight: 300;
	outline: none;
`

const FormContainer = styled.form`
	display: grid;
	justify-content: center;
	grid-template-columns: 1fr;
	${mq[1]} {
		grid-template-columns: 30rem;
	}
	align-items: center;
	margin: 1rem auto;
	grid-gap: 1rem;
`

const Input = styled.input`
	width: 100%;
	border: none;
	border-bottom: 1px solid rgba(0, 0, 0, .3);
	border-bottom: 3px solid ${props => props.theme.color.contact};
	${FontfamilyandOutline};
	background-color: rgba(0, 121, 135, .3);
	background-color: #007987;
	color: white;
	padding: .3rem .5rem;
	border-radius: 3px;
`

const Textarea = styled.textarea`
	${FontfamilyandOutline};
	border: 2px solid ${props => props.theme.color.contact};
	${color};
	width: 100%;
	border-radius: 3px;
	overflow-y: scroll;
	resize: none;
	&::-webkit-scrollbar {
		width: 10px;
		background-color: ${props => props.theme.color.contact};
	}
	&::-webkit-scrollbar-thumb {
		background-color: #eee;
	}
`

const Label = styled.label`${color};`

const Button = styled.button`
	border: none;
	outline: none;
	background-color: ${props => props.theme.color.contact};
	cursor: pointer;
	padding: .5rem;
	color: #fff;
	transition: all .1s;
	&:hover {
		background-color: #000;
	}
`
const Box = styled.div`
	margin-left: -.1rem;
	position: relative;
	${mq[2]} {
		position: fixed;
	}
`
const Social = styled.div`
	display: inline-block;
	left: 0;
	margin-right: .7rem;
	${mq[2]} {
		display: block;
	}
`
const LinkIcon = styled.a`
	margin-left: -3px;
	cursor: pointer;
`
