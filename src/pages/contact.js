import React from 'react'
import Layout from '../components/layout'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Container } from '../components/shared'
import { mq } from '../components/globals'
import { Text, Abbr, Title } from '../components/shared'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default ({ location }) => (
	<Layout location={location}>
		<Container>
			<Title>You can contact me on social media or write me a message here.</Title>
			<Box>
				<Contact>
					<Text>Sinisa Colic </Text>
				</Contact>
				<Contact>
					<Text>sinisa820@gmail.com</Text>
				</Contact>
				<Social>
					<Abbr title='facebook'>
						<a
							href='https://facebook.com'
							target='__blank'
							rel='noopener noreferer'
							style={{ marginLeft: '-3px' }}
						>
							<FaFacebook color='#405D9A' size='2rem' />
						</a>
					</Abbr>
				</Social>
				<Social>
					<Abbr title='twitter'>
						<a
							href='https://twitter.com'
							target='__blank'
							rel='noopener noreferer'
							style={{ marginLeft: '-3px' }}
						>
							<FaTwitter color='#1DA1F2' size='2rem' />
						</a>
					</Abbr>
				</Social>
				<Social>
					<Abbr title='linkedin'>
						<a
							href='https://linkedin.com'
							target='__blank'
							rel='noopener noreferer'
							style={{ marginLeft: '-3px' }}
						>
							<FaLinkedin color='#0077B5' size='2rem' />
						</a>
					</Abbr>
				</Social>
			</Box>
			<FormContainer
				method='POST'
				action='#'
				name='contact'
				data-netlify='true'
				data-netlify-honeypot='bot-field'
				data-netlify='true'
			>
				<Input type='hidden' name='bot-field' />
				<Input type='hidden' name='form-name' value='contact' />
				<Input type='text' name='name' id='name' placeholder='enter your name' />
				<Input type='text' name='email' placeholder='enter your email' id='email' />
				<Label htmlFor='Message'>Message</Label>
				<Textarea className='ajde' name='message' id='message' rows='5' cols='30' />
				<Button type='submit'>Send Message</Button>
				<Button type='reset'>Clear</Button>
			</FormContainer>
		</Container>
	</Layout>
)

const FontfamilyandOutline = css`
	font-family: 'Hind madurai', sans-serif;
	font-size: 1rem;
	font-weight: 300;
	outline: none;
`

const color = css`color: #007987;`

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
	border-bottom: 3px solid #007987;
	${FontfamilyandOutline};
	background-color: rgba(0, 121, 135, .3);
	background-color: #007987;
	color: white;
	padding: .3rem .5rem;
	border-radius: 3px;
`

const Textarea = styled.textarea`
	${FontfamilyandOutline};
	border: 2px solid #007987;
	${color};
	width: 100%;
	border-radius: 3px;
	overflow-y: scroll;
	resize: none;
	&::-webkit-scrollbar {
		width: 10px;
		background-color: #007987;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #eee;
	}
`

const Label = styled.label`${color};`

const Button = styled.button`
	border: none;
	outline: none;
	background-color: #007987;
	cursor: pointer;
	padding: .5rem;
	color: #fff;
	transition: all .1s;
	&:hover {
		background-color: #000;
	}
`
const Contact = styled.div`
	border-left: 5px solid #007987;
	padding: 0 1rem;
	margin-bottom: .5rem;
`
const Box = styled.div`margin-left: -.1rem;`
const Social = styled.div`
	display: inline-block;
	margin-right: .7rem;
`
