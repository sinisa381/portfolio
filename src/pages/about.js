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
			<Box>
				<Title>Some Info About Me</Title>
			</Box>
			<Margin>
				<Text>
					Started working with React in 2017. Made really good progress and then i found out about Gatsby.
					After that i had to familiarize myself with Graphql because its crutial in Gatsby workflow. I never
					regret spending time reading Gatsby docs. They were so informative and in the end the Gatsby skill
					is making web development more fun then ever!
				</Text>
			</Margin>
			<Margin>
				<Image src={typing} alt='react picture' />
			</Margin>
			<Box>
				<Title>The Frontend</Title>
			</Box>
			<Margin>
				<Text>
					I had to polish my frontend skills. Added CSS Grid and styled components to write faster, simpler
					and finally better code. There are many more technologies i find amusing and some of them are React
					Spring for animations, Material Ui framework (has many good solutions/components and eye catching
					look).
				</Text>
			</Margin>
			<Margin>
				<Image src={development} alt='react picture' />
			</Margin>
			<Box>
				<Title>The Backend</Title>
			</Box>
			<Margin>
				<Text>
					As for the backend part of my story, i did dive into Node.js and Firebase. Other then that i haven't
					looked anything else. There are still many places for improvment and will work on it.
				</Text>
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
const Margin = styled.div`margin-bottom: 1.9rem;`
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
