import React from 'react'
import Layout from '../components/layout'
import { Container } from '../components/shared'

export default ({ location }) => (
	<Layout location={location}>
		<Container>
			<section>
				<form
					name='contact'
					method='POST'
					data-netlify='true'
					data-netlify-honeypot='bot-field'
					data-netlify-recaptcha='true'
				>
					<input type='hidden' name='bot-field' />

					<div className='field half first'>
						<label htmlFor='name'>Name</label>
						<input type='text' name='name' id='name' required />
					</div>
					<div className='field half'>
						<label htmlFor='email'>Email</label>
						<input type='text' name='email' id='email' required />
					</div>
					<div className='field'>
						<label htmlFor='message'>Message</label>
						<textarea name='message' id='message' rows='6' required />
					</div>
					<ul className='actions'>
						<li>
							<button type='submit' className='special'>
								Send message
							</button>
						</li>
						<li>
							<input type='reset' value='Clear' />
						</li>
					</ul>
				</form>
			</section>
			<section className='split'>
				<section>
					<div className='contact-method'>
						<span className='icon alt fa-envelope' />
						<h3>Email</h3>
						<a href='#'>sinisa820@gmail.com</a>
					</div>
				</section>
				<section>
					<div className='contact-method'>
						<span className='icon alt fa-phone' />
						<h3>Phone</h3>
						<span>(000) 000-0000 x12387</span>
					</div>
				</section>
				<section>
					<div className='contact-method'>
						<span className='icon alt fa-home' />
						<h3>Address</h3>
						<span>
							1234 Somewhere Road #5432<br />
							Nashville, TN 00000<br />
							United States of America
						</span>
					</div>
				</section>
			</section>
		</Container>
	</Layout>
)
