import React from 'react'
import Layout from '../components/layout'
import { Container } from '../components/shared'

export default ({ location }) => (
	<Layout location={location}>
		<Container>
			<form type='POST' data-netlify='true'>
				<input type='text' name='name' id='name' placeholder='name' />
				<input type='email' name='email' id='email' placeholder='email' />
				<textarea name='message' id='message' cols='30' rows='10'>
					Enter message
				</textarea>
				<input type='submit' value='Send message' />
				<div data-netlify-recaptcha='true' />
			</form>
		</Container>
	</Layout>
)
