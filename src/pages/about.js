import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import VersionControl from '../images/undraw/yellow/undraw_version_control_9bpv.svg'
import styled from '@emotion/styled'
import Activity from '../images/undraw/yellow/undraw_developer_activity_bv83.svg'
import Typing from '../images/undraw/yellow/undraw_code_typing_7jnv.svg'
import Development from '../images/undraw/yellow/undraw_development_ouy3.svg'
import { mq } from '../components/globals'
import { Container, Title, Text } from '../components/shared'
export default ({ location }) => (
	<Layout location={location}>
		<Container>
			<Box>
				<Title>How it all began</Title>
			</Box>
			<Margin>
				<Text>
					Started working with React in 2017. I made a really good progress and then I found out about Gatsby.
					After that I had to familiarize myself with Graphql because it is crucial in Gatsby workflow. I
					never regret spending time reading Gatsby docs. They were very informative and well written. In the
					end the Gatsby skill is making web development more fun than ever before!
				</Text>
			</Margin>
			<Margin>
				<Typing css={css(`max-height:70vh;width:100%; display:block;`)} />
			</Margin>
			<Box>
				<Title>The Frontend</Title>
			</Box>
			<Margin>
				<Text>
					I had to polish my frontend skills. Added CSS Grid and Styled Components to write faster, simpler
					and easy to read code. There are many more technologies I find amusing and some of them are React
					Spring for animations, Material Ui framework (have many good solutions/components and eye catching
					look) and many others.
				</Text>
			</Margin>
			<Margin>
				<Development css={css(`max-height:70vh;width:100%; display:block;`)} />
			</Margin>
			<Box>
				<Title>The Backend</Title>
			</Box>
			<Margin>
				<Text>
					As for the backend part of my story, I did dive into Node.js and Firebase. Other than that I haven't
					looked anything else, but there are still many places for improvement and I will work on it in the
					near future.
				</Text>
			</Margin>
			<Grid>
				<Width>
					<Activity css={css(`max-height:70vh;width:100%; display:block;`)} />
				</Width>
				<Width>
					<VersionControl css={css(`max-height:70vh;width:100%; display:block;`)} />
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
