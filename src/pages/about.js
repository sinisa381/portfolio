import React from 'react'
import Layout from '../components/layout'
import version_control from '../images/undraw/yellow/undraw_version_control_9bpv.svg'
import styled from '@emotion/styled'
import activity from '../images/undraw/yellow/undraw_developer_activity_bv83.svg'
import typing from '../images/undraw/yellow/undraw_code_typing_7jnv.svg'
import development from '../images/undraw/yellow/undraw_development_ouy3.svg'
import { mq } from '../components/globals'
import { Image, Container, Title, Text } from '../components/shared'
export default ({ location }) => (
	<Layout location={location}>
		<Container>
			<Margin>
				<Image src={typing} alt='react picture' />
			</Margin>
			<Box>
				<Title>Lorem ipsum dolor adipisicing elit. Laboriosam</Title>
			</Box>
			<Margin>
				<Text>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae impedit necessitatibus
					reiciendis quae. Incidunt, quaerat aliquam porro cupiditate consequuntur consequatur deleniti quam
					reiciendis quae. Incidunt, quaerat aliquam porro cupiditate consequuntur consequatur deleniti quam
					reiciendis quae. Incidunt, quaerat aliquam porro cupiditate consequuntur consequatur deleniti quam
					eos dolorem officia?
				</Text>
			</Margin>
			<Margin>
				<Image src={development} alt='react picture' />
			</Margin>
			<Grid>
				<Width>
					<Image src={activity} alt='react picture' />
				</Width>
				<Width>
					<Image src={version_control} alt='react picture' />
				</Width>
			</Grid>
		</Container>
	</Layout>
)
const Box = styled.div`
	text-align: center;
	width: 50%;
	margin: 0 auto;
`
const Margin = styled.div`margin-bottom: 1rem;`
const Width = styled.div`
	width: 100%;
	img {
		margin-bottom: 1rem;
		${mq[1]} {
			margin-bottom: 0;
		}
	}
`
const Grid = styled.div`
	width: 100%;
	${mq[1]} {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
`
