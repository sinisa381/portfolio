import React from 'react'
import Layout from '../../components/layout'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Container } from '../../components/shared'
import { Title } from '../../components/shared'

export default ({ location }) => (
	<Layout location={location}>
		<Container>
			<Title>Message sent! Thank you for submiting!</Title>
			<Back to='/'>go back to home</Back>
		</Container>
	</Layout>
)

const Back = styled(Link)`
list-style:none;
color:blue;
`
