import React from 'react'
import Layout from '../components/layout'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Container } from '../components/shared'
import { mq } from '../components/globals'

export default ({ location }) => (
	<Layout location={location}>
		<Container>
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
				<Input type='text' name='your name' id='name' placeholder='your name' />
				<Input type='text' name='email' placeholder='your email' id='email' />
				<Label htmlFor='Message'>Message</Label>
				<Textarea className='ajde' name='message' id='message' rows='5' cols='30' />
				<Input type='submit' value='Send Message' className='special' />
				<Input type='reset' value='Clear' />
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
	&::-webkit-scrollbar {
		width: 10px;
		background-color: #007987;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #eee;
	}
`

const Label = styled.label`${color};`
